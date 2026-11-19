# Notes: what is left to do

Things only you can do, in rough priority order. Open questions are in [QUESTIONS.md](QUESTIONS.md).

## Before going live
- [ ] **Join a consumer mediator** (mandatory to sell to consumers, L612-1; fine up to 3 000 €),
      then add its name and contact details to CGV §5.2 and legal notice §2.16. Other open
      legal points: [CGV-NOTES.md](build_docs/CGV-NOTES.md),
      [MENTIONS-LEGALES-NOTES.md](build_docs/MENTIONS-LEGALES-NOTES.md).
- [ ] 2027: update `company.legal.insurance` (`src/content/company.ts`) if the insurance
      contract changes; it feeds both `/cgv` and `/mentions-legales`.
- [ ] Replace the AI image of the workshop (`public/images/entreprise-atelier.webp` and its
      `-800` variant) with a real photo.
- [ ] Proofread all texts in `src/content/` and the pages (especially FAQ legal statements).
- [ ] **Validate the promise "intervention en moins d’1 h"** shown on the 61 city pages, their
      meta descriptions and `/zones-intervention`. Check it holds at rush hour for the
      farthest towns (Villeparisis, Pontault-Combault, Gonesse, Paris 3e…); if not, change the
      wording in `src/views/City.astro`, `src/content/seo.ts` and `src/views/Zones.astro`.
- [ ] Proofread the 61 city pages (`src/content/city-texts.ts`): neighbourhood names, local
      facts, building types. Remove anything you are not sure of.
- [ ] Proofread the 12 brand pages (`src/content/brands.ts`): product ranges (F3D/F5S, Radial NT,
      VIP+, Chifral, Interactive+/MT5+, Bravus, R6/R9, Gemini/expert, TX80) against the makers'
      catalogues. Remove a brand you do not actually service.

## Domains
- [ ] **OVH**: update the contact information (phone 01 70 07 20 00, e-mail, address
      60 rue François Ier, 75008 Paris) on the OVH account / domain contacts.
- [ ] `lesserruriersfranciliens.com` (transferred from Squarespace to OVH, active from 2026-11-25;
      never published, so no search ranking to carry over):
  - [ ] check the domain's DNS servers are OVH's (`dnsXX.ovh.net` / `nsXX.ovh.net`);
  - [ ] OVH → Redirection: apex and `www` → visible permanent (301) redirect to
        `https://lesserruriersfranciliens.fr` (HTTP only: `https://…com` is not covered);
  - [ ] Google Workspace MX: re-add them in the OVH zone only if `@lesserruriersfranciliens.com`
        mailboxes are still used;
  - [ ] enable the transfer lock (disable outbound transfer) so it cannot be moved away.
- [ ] Check all redirects once the `.com` is active (`curl -sI <url>` → `301` + `location`):
  - [ ] `http://lesserruriersfranciliens.com/` → `https://lesserruriersfranciliens.fr/`;
  - [ ] `http://www.lesserruriersfranciliens.com/` → `https://lesserruriersfranciliens.fr/`;
  - [ ] `https://www.lesserruriersfranciliens.fr/` → `https://lesserruriersfranciliens.fr/`;
  - [ ] `http://lesserruriersfranciliens.fr/` → `https://lesserruriersfranciliens.fr/`;
  - [ ] old paths `/depannage`, `/installation`, `/contacts` on the `.fr` (meta refresh, not
        301: GitHub Pages cannot send redirects) land on the new pages.

## SEO after launch
Step-by-step reminders for Search Console, Business Profile and Cloudflare Web Analytics:
[ANALYTICS.md](build_docs/ANALYTICS.md).
- [ ] Google Search Console: add the domain, submit `https://lesserruriersfranciliens.fr/sitemap.xml`.
- [ ] Bing Webmaster Tools: import from Search Console.
- [ ] Cloudflare Web Analytics (cookieless): send the token, then add the script to
      `src/layouts/Layout.astro` and update §2.15 of `/mentions-legales`.
- [ ] Google Business Profile: create/claim it, same name / phone / hours as the site, link to
      the site. Biggest lever for local search. If 60 rue François Ier is a domiciliation
      address (no premises receiving clients), declare a **service-area business** and hide the
      address: Google suspends profiles showing a domiciliation address.
- [ ] Make reviews systematic (the competitor at serrurier-levalloisperret.com has 210+ reviews
      at 5.0, its main local lever): ask satisfied clients (syndics, bailleurs) first, send the
      direct review link (`g.page/r/.../review`, from the Business Profile) by SMS/WhatsApp after
      every job, print it as a QR code on invoices, put a "Laissez-nous un avis" link on the
      site, answer every review.
- [ ] Directories with the exact same name / address / phone as the site and the Business
      Profile: PagesJaunes, Cylex, mesdepanneurs.fr, Justacoté, Bing Places, Apple Business Connect.
- [ ] Test structured data: https://search.google.com/test/rich-results
- [ ] Optional: a blog / advice section (topics listed in `build_docs/recherche-*.md`).

## Insurers & assistance networks (getting jobs referred)
Apply to several at once; each recruits separately. Have ready: Kbis, RC Pro + décennale
certificates, URSSAF certificate, RIB, covered area, hours, response time, price grid.
- [ ] Mondial Assistance (Allianz Partners): form at
      https://prestataires.mondial-assistance.fr/demande_partenariat.aspx (answer within 45 days
      if the profile fits, then an administrative file).
- [ ] IMA (MAIF, MACIF, MATMUT…): https://www.ima.eu/en/reseau-prestataires/rejoindre-reseau-partenaire-assistance-ima
- [ ] Repartim (repair network working for insurers/assisteurs, uses partner tradespeople):
      contact via https://www.repartim.fr (partner / subcontractor recruitment).
- [ ] Mutuaide Assistance (Groupama) and Multiassistance: find their provider-network contact.
- [ ] Once accepted, add their logos to the site ("prestataire agréé") — only with written
      permission, and only for networks that really send jobs.

## Maintenance
- Contact form: Web3Forms, key in `.env` locally and in the `VITE_WEB3FORMS_KEY` Actions secret.
  Photo upload is a Web3Forms **Pro (paid)** feature: not done, customers send photos by
  WhatsApp or e-mail instead.
- Images: 9 slots in `src/content/images.ts`, each served from `public/images/<slot-id>.webp`
  (1600 px) plus `<slot-id>-800.webp` (800 px, used by `srcset`). Generated with fal
  (Nano Banana 2.1, prompts in `build_docs/images-prompts.md`).
- City pages: `src/content/city-facts.ts` is generated (driving time from Montreuil, OSRM +
  geo.api.gouv.fr, ≤ 23 min); local texts in `src/content/city-texts.ts` (one entry per city,
  the build fails if one is missing). Keep each text specific: near-duplicate city pages are
  treated by Google as doorway pages. Add a real job photo or a client review per city when
  available: it is the best way to make each page unique.
- Brand pages: `src/content/brands.ts`, URLs `/serrure-<brand>`, index `/marques`.
- Texts: `src/content/*.ts`. Page titles/descriptions for SEO: `src/content/seo.ts`.
- New page: add `src/pages/<name>.astro` (body in `src/views/`) **and** its entry in `pages`
  (`src/content/seo.ts`), otherwise it has no title/meta and is not in the sitemap.
- `npm audit` reports moderate issues in dependencies of the `shadcn` CLI (deepmerge,
  minimatch): build-time only, not shipped to visitors.
