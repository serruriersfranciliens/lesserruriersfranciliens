# Les Serruriers Franciliens – site vitrine

Static showcase site: Astro + TypeScript, Tailwind CSS v4, no UI framework. Every page is built
to static HTML. The interactive parts use native HTML (`<dialog>` for the mobile menu,
`<details>` for the FAQ) plus a few lines of script (menu, contact form, scroll reveal).
Deployed to GitHub Pages on `lesserruriersfranciliens.fr`.

See [NOTES.md](NOTES.md) (what is left to do) and [QUESTIONS.md](QUESTIONS.md).

## Development

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # type-check, then static build to dist/
npx serve dist    # preview with clean URLs, like GitHub Pages
```

## Structure

- `src/content/` – all texts and data (company, services, pros, FAQ, zones, case studies, SEO).
- `src/content/seo.ts` – per-page title/description, JSON-LD, legacy redirects.
- `src/components/ui/` – base components ported from shadcn/ui (same classes). The shadcn CLI
  generates React components, so new ones are written by hand as `.astro` files.
- `src/pages/` – Astro routes: one file per page, plus `sitemap.xml`, `robots.txt`, `llms.txt`
  and the redirects of the old site's URLs (`[legacy].astro`). They render the page bodies of
  `src/views/` inside `src/layouts/Layout.astro` (head tags, header, footer).
- `src/content/images.ts` – image slots: drop a file in `public/images/` and set `src`.

## Contact form

Uses [Web3Forms](https://web3forms.com). Set `VITE_WEB3FORMS_KEY` in `.env` locally and as a
repository secret for the deploy workflow. Without a key the form falls back to `mailto:`.

## Deployment

Push to `main` → `.github/workflows/deploy.yml` builds and publishes to GitHub Pages.
