# Notes: what is left to do

Things only you can do, in rough priority order. Open questions are in [QUESTIONS.md](QUESTIONS.md).

## Before going live
- [ ] Fill the two remaining legal fields in `company.legal` (`src/content/company.ts`):
      publication director and insurer. Company identity, address, SIRET and VAT are done.
- [ ] Create a Web3Forms key (https://web3forms.com, with serruriersfranciliens@gmail.com):
  - [ ] locally: `.env` → `VITE_WEB3FORMS_KEY=...`
  - [ ] GitHub: Settings → Secrets and variables → Actions → `VITE_WEB3FORMS_KEY`
  - [ ] send a test message from `/contact`.
  - Photo upload in the form is a Web3Forms **Pro (paid)** feature: not done for now.
    Customers send photos by WhatsApp or e-mail instead.
- [ ] Replace the placeholders:
  - [ ] key figures `XX` on `/entreprise` (`src/pages/Entreprise.tsx`).
- [x] Images: all 15 slots generated with fal (Nano Banana 2.1, prompts in
      `build_docs/images-prompts.md`), in `public/images/<slot-id>.webp`.
- [ ] Replace the AI image of the workshop (`entreprise-atelier.webp`) with a real photo.
- [ ] Proofread all texts in `src/content/` and the pages (especially FAQ legal statements).
- [ ] **Validate the promise "intervention en moins d’1 h"** shown on the 61 city pages, their
      meta descriptions and `/zones-intervention`. Check it holds at rush hour for the
      farthest towns (Villeparisis, Pontault-Combault, Gonesse, Paris 3e…); if not, change the
      wording in `src/pages/City.tsx`, `src/content/seo.ts` and `src/pages/Zones.tsx`.
- [ ] Proofread the 61 city pages (`src/content/city-texts.ts`): neighbourhood names, local
      facts, building types. Remove anything you are not sure of.
- [ ] Proofread the 12 brand pages (`src/content/brands.ts`): product ranges (F3D/F5S, Radial NT,
      VIP+, Chifral, Interactive+/MT5+, Bravus, R6/R9, Gemini/expert, TX80) against the makers'
      catalogues. Remove a brand you do not actually service.

## Deployment (GitHub Pages)
- [x] Create the GitHub repository and push `main`.
- [x] Settings → Pages → Source: **GitHub Actions**.
- [ ] Settings → Pages → Custom domain: `lesserruriersfranciliens.fr` (done, DNS check OK);
      **enable "Enforce HTTPS"** once GitHub has issued the certificate.
- [x] OVH DNS zone: apex → 4 `A` (185.199.108–111.153) + 4 `AAAA` (2606:50c0:8000–8003::153),
      `www` → `CNAME` → `erikaouizerate.github.io.` (MX/SPF kept).
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
  - [ ] old paths still redirect on the `.fr` (`/depannage`, `/installation`, `/contacts`).
- [ ] Move the site to the `serruriersfranciliens` GitHub account:
  - [x] transfer the repository (now `serruriersfranciliens/lesserruriersfranciliens`);
  - [ ] on the new repo: Settings → Pages → Source **GitHub Actions**, custom domain
        `lesserruriersfranciliens.fr`, then Enforce HTTPS;
  - [ ] re-add the Actions secret `VITE_WEB3FORMS_KEY` (check it survived the transfer);
  - [ ] OVH DNS zone: change `www` → `CNAME` → `serruriersfranciliens.github.io.`
        (the apex `A` / `AAAA` records stay the same);
  - [ ] optional: verify the domain on the `serruriersfranciliens` account (Settings → Pages → Add a domain,
        TXT record `_github-pages-challenge-serruriersfranciliens` in the OVH zone);
  - [x] update the local remote: `git remote set-url origin git@github.com:serruriersfranciliens/lesserruriersfranciliens.git`.
- [ ] **OVH**: update the contact information (phone 01 70 07 20 00, e-mail, address
      60 rue François Ier, 75008 Paris) on the OVH account / domain contacts.

## SEO after launch
- [ ] Google Search Console: add the domain, submit `https://lesserruriersfranciliens.fr/sitemap.xml`.
- [ ] Bing Webmaster Tools: import from Search Console.
- [ ] Google Business Profile: create/claim it, same name / phone / hours as the site, link to
      the site. Biggest lever for local search. If 60 rue François Ier is a domiciliation
      address (no premises receiving clients), declare a **service-area business** and hide the
      address: Google suspends profiles showing a domiciliation address.
- [ ] Ask satisfied clients (syndics, bailleurs) for Google reviews.
- [ ] Make reviews systematic (the competitor at serrurier-levalloisperret.com has 210+ reviews
      at 5.0, its main local lever): send the direct review link (`g.page/r/.../review`, from
      the Business Profile) by SMS/WhatsApp after every job, print it as a QR code on invoices,
      put a "Laissez-nous un avis" link on the site, answer every review.
- [ ] Directories with the exact same name / address / phone as the site and the Business
      Profile: PagesJaunes, Cylex, mesdepanneurs.fr, Justacoté, Bing Places, Apple Business Connect.
- [ ] Test structured data: https://search.google.com/test/rich-results
- [ ] Old URLs `/depannage`, `/installation`, `/contacts` redirect to the new pages
      (meta refresh). Check them once live.
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
- City pages: `src/content/city-facts.ts` is generated (driving time from Montreuil, OSRM +
  geo.api.gouv.fr, ≤ 23 min); local texts in `src/content/city-texts.ts` (one entry per city,
  the build fails if one is missing). Keep each text specific: near-duplicate city pages are
  treated by Google as doorway pages. Add a real job photo or a client review per city when
  available: it is the best way to make each page unique.
- Brand pages: `src/content/brands.ts`, URLs `/serrure-<brand>`, index `/marques`.
- Texts: `src/content/*.ts`. Page titles/descriptions for SEO: `src/content/seo.ts`.
- New page: add the route in `src/App.tsx` **and** its entry in `pages` (`src/content/seo.ts`),
  otherwise it is not prerendered nor in the sitemap.
- `npm audit` reports moderate issues in dependencies of the `shadcn` CLI (deepmerge,
  minimatch): build-time only, not shipped to visitors.
