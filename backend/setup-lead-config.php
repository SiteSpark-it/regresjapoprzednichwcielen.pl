<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

const RPPW_SETUP_TOKEN_HASH = '9debd2b0c73e9718dceba8a6f070cc6e3ecf909961b723aa9579e7100e7ff9f9';
const RPPW_SITE = 'regresjapoprzednichwcielen.pl';

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'method_not_allowed']);
    exit;
}

$token = trim((string)($_SERVER['HTTP_X_SETUP_TOKEN'] ?? ''));
if ($token === '' || !hash_equals(RPPW_SETUP_TOKEN_HASH, hash('sha256', $token))) {
    http_response_code(401);
    echo json_encode(['ok' => false, 'error' => 'unauthorized']);
    exit;
}

$payload = json_decode((string)file_get_contents('php://input'), true);
if (!is_array($payload)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'invalid_json']);
    exit;
}

$site = trim((string)($payload['SITE'] ?? ''));
$hubEndpoint = trim((string)($payload['HUB_ENDPOINT'] ?? ''));
$ingestKeyId = trim((string)($payload['INGEST_KEY_ID'] ?? ''));
$ingestKey = trim((string)($payload['INGEST_KEY'] ?? ''));
$excludedIps = array_values(array_filter(array_map('trim', explode(',', (string)($payload['EXCLUDED_IPS'] ?? '')))));

if (
    $site !== RPPW_SITE
    || $ingestKeyId !== RPPW_SITE
    || strlen($ingestKey) < 48
    || !filter_var($hubEndpoint, FILTER_VALIDATE_URL)
) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'invalid_config']);
    exit;
}

$config = [
    'site' => $site,
    'hub_endpoint' => $hubEndpoint,
    'ingest_key_id' => $ingestKeyId,
    'ingest_key' => $ingestKey,
    'excluded_ips' => array_values(array_filter($excludedIps, static fn($ip) => filter_var($ip, FILTER_VALIDATE_IP))),
    'timeout' => 4,
];

$php = "<?php\n";
$php .= "declare(strict_types=1);\n\n";
$php .= 'return ' . var_export($config, true) . ";\n";

$configPath = __DIR__ . '/lead-config.php';
if (@file_put_contents($configPath, $php, LOCK_EX) === false) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'write_failed']);
    exit;
}

@chmod($configPath, 0600);
$selfDeleted = @unlink(__FILE__);

echo json_encode([
    'ok' => true,
    'site' => RPPW_SITE,
    'excluded_ips' => count($config['excluded_ips']),
    'self_deleted' => $selfDeleted,
]);
