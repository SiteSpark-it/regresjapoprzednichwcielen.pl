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
2. Wejdź do panelu Hostingera i otwórz Menedżer plików albo skonfiguruj FTP/SFTP.
3. Prześlij zawartość folderu `dist` do katalogu domeny, zwykle `public_html`.
4. Upewnij się, że pliki `robots.txt`, `sitemap.xml` i `favicon.svg` są dostępne w głównym katalogu strony.
5. Po wdrożeniu sprawdź stronę pod adresem `https://regresjapoprzednichwcielen.pl`.

## Edycja treści

Główne dane kontaktowe, domeny, CTA i linki znajdują się w:

```text
src/content/siteData.ts
```

Treści podstron znajdują się w katalogu:

```text
src/pages
```
