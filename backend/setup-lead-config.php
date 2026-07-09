<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

const SETUP_TOKEN_HASH = '6dae45c5a5d5fa6e4e070d6e422a4a11fec1b79d9a43238490486ace39ee0444';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(['ok' => false, 'error' => 'method_not_allowed'], 405);
}

$token = $_SERVER['HTTP_X_SETUP_TOKEN'] ?? '';
$tokenHash = hash('sha256', (string)$token);
if (!hash_equals(SETUP_TOKEN_HASH, $tokenHash)) {
    respond(['ok' => false, 'error' => 'unauthorized'], 401);
}

$input = json_decode(file_get_contents('php://input') ?: '', true);
if (!is_array($input)) {
    respond(['ok' => false, 'error' => 'invalid_json'], 400);
}

$site = clean($input['SITE'] ?? '', 120);
$endpoint = clean($input['HUB_ENDPOINT'] ?? '', 300);
$keyId = clean($input['INGEST_KEY_ID'] ?? '', 120);
$ingestKey = clean($input['INGEST_KEY'] ?? '', 300);
$excludedIps = clean($input['EXCLUDED_IPS'] ?? '', 400);

if ($site === '' || $endpoint === '' || $keyId === '' || strlen($ingestKey) < 48) {
    respond(['ok' => false, 'error' => 'missing_required_values'], 422);
}

$ips = array_values(array_filter(array_map('trim', explode(',', $excludedIps)), static function ($ip) {
    return filter_var($ip, FILTER_VALIDATE_IP);
}));

$config = "<?php\nreturn " . var_export([
    'site' => $site,
    'hub_endpoint' => $endpoint,
    'ingest_key_id' => $keyId,
    'ingest_key' => $ingestKey,
    'excluded_ips' => $ips,
    'timeout' => 4,
], true) . ";\n";

$target = __DIR__ . '/lead-config.php';
if (file_put_contents($target, $config, LOCK_EX) === false) {
    respond(['ok' => false, 'error' => 'write_failed'], 500);
}

@chmod($target, 0600);
respond(['ok' => true, 'site' => $site, 'excluded_ips' => count($ips)]);

function clean($value, int $max): string {
    $value = trim((string)$value);
    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $max, 'UTF-8');
    }
    return substr($value, 0, $max);
}

function respond(array $payload, int $status = 200): void {
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}
