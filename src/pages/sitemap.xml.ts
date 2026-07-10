import type { APIRoute } from "astro";
import { knowledgeArticles } from "@/content/articles";
import { siteData } from "@/content/siteData";

const updatedAt = "2026-07-10";
const corePages = [
  "",
  "czym-jest-regresja-poprzednich-wcielen/",
  "regresja-do-poprzedniego-zycia/",
  "past-life-regression-po-polsku/",
  "brama-dusz-lbl/",
  "regresja-miedzy-wcieleniami/",
  "o-macieju/",
  "o-serwisie/",
  "baza-wiedzy/",
  "faq/",
  "kontakt/"
].map((path) => ({ url: `${siteData.url}/${path}`, updatedAt }));

const articlePages = knowledgeArticles.map((article) => ({
  url: `${siteData.url}/baza-wiedzy/${article.slug}/`,
  updatedAt: article.updatedAt
}));

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export const GET: APIRoute = () => {
  const urls = [...corePages, ...articlePages]
    .map(
      (item) => `  <url>
    <loc>${escapeXml(item.url)}</loc>
    <lastmod>${item.updatedAt}</lastmod>
  </url>`
    )
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>\n`,
    {
      headers: {
        "Content-Type": "application/xml; charset=utf-8"
      }
    }
  );
};
