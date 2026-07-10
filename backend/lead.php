<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: strict-origin-when-cross-origin');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(['error' => 'method_not_allowed'], 405);
}

$contentType = strtolower((string)($_SERVER['CONTENT_TYPE'] ?? ''));
$browserForm = strpos($contentType, 'application/x-www-form-urlencoded') !== false
    || strpos($contentType, 'multipart/form-data') !== false;
$GLOBALS['browser_form'] = $browserForm;

$config = lead_config();
$ip = client_ip();

if ($ip !== '' && in_array($ip, $config['excluded_ips'] ?? [], true)) {
    respond(['ok' => true, 'ignored' => 'excluded_ip'], 202);
}

$input = [];
if ($browserForm) {
    if (trim((string)($_POST['website'] ?? '')) !== '') {
        respond(['ok' => true], 202);
    }

    $formPayload = $_POST;
    unset($formPayload['website']);
    $input = [
        'page' => '/kontakt/',
        'url' => 'https://regresjapoprzednichwcielen.pl/kontakt/',
        'title' => 'Kontakt i konsultacja przed sesją',
        'lang' => 'pl-PL',
        'element' => 'contact-lead-form-noscript',
        'form_id' => 'formularz',
        'form_payload' => $formPayload,
    ];
} else {
    $rawBody = file_get_contents('php://input') ?: '';
    if (strlen($rawBody) > 20000) {
        respond(['error' => 'payload_too_large'], 413);
    }

    $input = json_decode($rawBody, true);
    if (!is_array($input)) {
        respond(['error' => 'invalid_json'], 400);
    }
}

$ingestKey = (string)($config['ingest_key'] ?? '');
if ($ingestKey === '' || strpos($ingestKey, 'CHANGE_ME') !== false) {
    respond(['error' => 'missing_ingest_key'], 503);
}

$formPayload = clean_assoc($input['form_payload'] ?? []);
if (!$formPayload) {
    respond(['error' => 'empty_form_payload'], 422);
}
if (empty($formPayload['Kontakt zwrotny']) || empty($formPayload['Wiadomość'])) {
    respond(['error' => 'required_fields_missing'], 422);
}

$forward = [
    'type' => 'form',
    'site' => clean_text($config['site'] ?? 'regresjapoprzednichwcielen.pl', 120),
    'sid' => clean_id($input['sid'] ?? ''),
    'vid' => clean_id($input['vid'] ?? ''),
    'page' => clean_path($input['page'] ?? '/kontakt/'),
    'url' => clean_url($input['url'] ?? ''),
    'title' => clean_text($input['title'] ?? '', 180),
    'ref' => clean_url($input['ref'] ?? ''),
    'tz' => clean_text($input['tz'] ?? '', 80),
    'lang' => clean_text($input['lang'] ?? '', 32),
    'viewport' => clean_text($input['viewport'] ?? '', 32),
    'screen' => clean_text($input['screen'] ?? '', 32),
    'element' => clean_text($input['element'] ?? 'contact-form', 120),
    'form_id' => clean_text($input['form_id'] ?? 'contact-form', 120),
    'form_payload' => $formPayload,
];

$body = json_encode($forward, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
if ($body === false) {
    respond(['error' => 'encode_failed'], 500);
}

$signature = 'sha256=' . hash_hmac('sha256', $body, $ingestKey);
$result = forward_to_hub(
    (string)($config['hub_endpoint'] ?? 'https://instytutregresji.pl/backend/analytics.php'),
    $body,
    (string)($config['ingest_key_id'] ?? $forward['site']),
    $signature,
    (int)($config['timeout'] ?? 4)
);

if (!$result['ok']) {
    respond(['error' => 'hub_unavailable', 'status' => $result['status']], 502);
}

respond(['ok' => true], 202);

function lead_config(): array {
    $local = __DIR__ . '/lead-config.php';
    $example = __DIR__ . '/lead-config.example.php';
    $path = is_file($local) ? $local : $example;
    $config = is_file($path) ? require $path : [];
    return is_array($config) ? $config : [];
}

function respond(array $payload, int $status = 200): void {
    if (!empty($GLOBALS['browser_form'])) {
        $target = $status >= 200 && $status < 300
            ? '/kontakt/?wyslano=1#formularz'
            : '/kontakt/?blad=1#formularz';
        header('Location: ' . $target, true, 303);
        exit;
    }
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}

function client_ip(): string {
    $candidates = [
        $_SERVER['HTTP_CF_CONNECTING_IP'] ?? '',
        $_SERVER['HTTP_X_FORWARDED_FOR'] ?? '',
        $_SERVER['REMOTE_ADDR'] ?? '',
    ];

    foreach ($candidates as $candidate) {
        $parts = explode(',', (string)$candidate);
        foreach ($parts as $part) {
            $ip = trim($part);
            if (filter_var($ip, FILTER_VALIDATE_IP)) return $ip;
        }
    }

    return '';
}

function clean_text($value, int $max = 500): string {
    $text = trim(strip_tags((string)$value));
    $text = preg_replace('/\s+/u', ' ', $text) ?: '';
    if (function_exists('mb_substr')) return mb_substr($text, 0, $max, 'UTF-8');
    return substr($text, 0, $max);
}

function clean_id($value): string {
    $id = preg_replace('/[^a-zA-Z0-9_-]/', '', (string)$value) ?: '';
    return substr($id, 0, 80);
}

function clean_path($value): string {
    $path = parse_url((string)$value, PHP_URL_PATH);
    $path = $path ?: (string)$value;
    $path = '/' . ltrim($path, '/');
    return clean_text($path, 180);
}

function clean_url($value): string {
    $url = trim((string)$value);
    if ($url === '') return '';
    if (filter_var($url, FILTER_VALIDATE_URL)) return substr($url, 0, 500);
    return '';
}

function clean_assoc($value): array {
    if (!is_array($value)) return [];
    $out = [];
    foreach ($value as $key => $raw) {
        $name = clean_text($key, 80);
        if ($name === '') continue;
        if (is_array($raw)) {
            $raw = implode(', ', array_map('strval', array_slice($raw, 0, 8)));
        }
        $out[$name] = clean_text($raw, $name === 'Wiadomość' ? 1800 : 320);
    }
    return array_filter($out, static function ($v) {
        return $v !== '';
    });
}

function forward_to_hub(string $endpoint, string $body, string $keyId, string $signature, int $timeout): array {
    $headers = [
        'Content-Type: application/json',
        'X-IR-Hub-Key: ' . $keyId,
        'X-IR-Hub-Signature: ' . $signature,
    ];

    if (function_exists('curl_init')) {
        $ch = curl_init($endpoint);
        curl_setopt_array($ch, [
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $body,
            CURLOPT_HTTPHEADER => $headers,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT => max(2, $timeout),
        ]);
        curl_exec($ch);
        $status = (int)curl_getinfo($ch, CURLINFO_RESPONSE_CODE);
        $error = curl_error($ch);
        curl_close($ch);
        return ['ok' => $status >= 200 && $status < 300, 'status' => $status ?: $error];
    }

    $context = stream_context_create([
        'http' => [
            'method' => 'POST',
            'header' => implode("\r\n", $headers),
            'content' => $body,
            'timeout' => max(2, $timeout),
            'ignore_errors' => true,
        ],
    ]);

    @file_get_contents($endpoint, false, $context);
    $status = 0;
    if (isset($http_response_header[0]) && preg_match('/\s(\d{3})\s/', $http_response_header[0], $m)) {
        $status = (int)$m[1];
    }
    return ['ok' => $status >= 200 && $status < 300, 'status' => $status];
}
