import type { APIRoute } from 'astro';
import { absoluteUrl, pages } from '@/content/seo';

export const GET: APIRoute = () => {
  const today = new Date().toISOString().slice(0, 10);
  const urls = pages
    .filter((p) => !p.noindex && p.priority !== undefined)
    .map(
      (p) =>
        `  <url><loc>${absoluteUrl(p.path)}</loc><lastmod>${today}</lastmod><priority>${p.priority!.toFixed(1)}</priority></url>`,
    );
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
  );
};
