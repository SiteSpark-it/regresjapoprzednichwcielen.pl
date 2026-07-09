<?php
return [
    'site' => 'regresjapoprzednichwcielen.pl',
    'hub_endpoint' => 'https://instytutregresji.pl/backend/analytics.php',
    'ingest_key_id' => 'regresjapoprzednichwcielen.pl',

    // Ustaw tę samą wartość w config.php na instytutregresji.pl:
    // 'analytics' => [
    //   'ingest_keys' => [
    //     'regresjapoprzednichwcielen.pl' => 'TEN_SAM_DLUGI_LOSOWY_SEKRET',
    //   ],
    // ],
    'ingest_key' => 'CHANGE_ME_LONG_RANDOM_SHARED_SECRET',

    // Wpisz publiczne IP właściciela/biura, jeśli zgłoszenia testowe z tego IP
    // nie mają trafiać do centralnych statystyk i formularzy.
    'excluded_ips' => [
        // '203.0.113.10',
    ],

    'timeout' => 4,
];
