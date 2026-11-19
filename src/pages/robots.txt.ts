import type { APIRoute } from 'astro';
import { siteUrl } from '@/content/seo';

export const GET: APIRoute = () =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
