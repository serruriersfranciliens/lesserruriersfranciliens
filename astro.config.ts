import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { siteUrl } from './src/content/site';

// Static site served from the custom domain root (see public/CNAME) by GitHub Pages,
// which maps /page to page.html: keep `format: 'file'` so the indexed URLs stay the same.
export default defineConfig({
  site: siteUrl,
  trailingSlash: 'never',
  build: {
    format: 'file',
    // No render-blocking stylesheet request (GitHub Pages only caches for 10 min anyway).
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
    envPrefix: ['PUBLIC_', 'VITE_'],
  },
});
