import type { APIRoute } from 'astro';
import { renderLlmsTxt } from '@/content/seo';

export const GET: APIRoute = () => new Response(renderLlmsTxt());
