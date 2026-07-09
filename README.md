# regresjapoprzednichwcielen.pl

Statyczna strona SEO w Astro + Tailwind CSS dla domeny `regresjapoprzednichwcielen.pl`.

## Lokalne uruchomienie

```bash
npm install
npm run dev
```

Serwer developerski Astro uruchomi stronę lokalnie i poda adres w terminalu.

## Build produkcyjny

```bash
npm run build
```

Gotowe pliki statyczne zostaną wygenerowane w folderze `dist`.

## Podgląd buildu

```bash
npm run preview
```

## Wdrożenie na Hostinger

1. Uruchom `npm install`, a następnie `npm run build`.
2. Prześlij zawartość folderu `dist` do katalogu domeny, zwykle `public_html`.
3. Upewnij się, że pliki `robots.txt`, `sitemap.xml`, `favicon.svg` oraz katalog `backend/` są dostępne w głównym katalogu strony.
4. Po wdrożeniu sprawdź stronę pod adresem `https://regresjapoprzednichwcielen.pl`.

## Analityka i formularze

Strona używa centralnej analityki Instytutu Regresji:

- odsłony, kliknięcia, hover, heartbeat i czas sesji zbiera lokalny skrypt `/assets/ir-hub-track.js`, a następnie wysyła je do `https://instytutregresji.pl/backend/analytics.php`,
- formularz kontaktowy wysyła kopię zgłoszenia do lokalnego endpointu `backend/lead.php`,
- lokalny endpoint podpisuje payload HMAC i przekazuje go do huba, gdzie dane formularza są szyfrowane po stronie serwera.

Sekretu nie wolno commitować do repozytorium. Na serwerze skopiuj:

```text
public/backend/lead-config.example.php -> public_html/backend/lead-config.php
```

Następnie ustaw w `lead-config.php` długi losowy sekret `ingest_key` i wpisz tę samą wartość w konfiguracji huba na `instytutregresji.pl`:

```php
'analytics' => [
  'ingest_keys' => [
    'regresjapoprzednichwcielen.pl' => 'TEN_SAM_DLUGI_LOSOWY_SEKRET',
  ],
],
```

Jeśli ruch z komputera właściciela nie ma trafiać do statystyk, dodaj jego publiczne IP do:

- `analytics.excluded_ips` na `instytutregresji.pl`,
- `excluded_ips` w `backend/lead-config.php` na tej domenie.

Można też wejść z tego komputera na:

```text
https://instytutregresji.pl/backend/analytics.php?action=exclude-self
```

Endpoint huba zapisze hash IP do listy wykluczeń. Pełny adres IP nie jest zapisywany w raportach analitycznych.

## Edycja treści

Główne dane kontaktowe, domeny, CTA i linki znajdują się w:

```text
src/content/siteData.ts
```

Treści podstron znajdują się w katalogu:

```text
src/pages
```
