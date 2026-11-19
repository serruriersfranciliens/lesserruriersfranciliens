# Questions

Decisions already taken, and questions still waiting for an answer.
When you answer an open question, move it to "Answered" with the answer.

## Open

### Legal (blocking: required by law before going live)
- [ ] Publication director (name of the SAS president)?
- [ ] RC Pro / décennale insurer (name, policy number)? The "Garanties" block on `/entreprise`
      states "Assurance responsabilité civile professionnelle": confirm or remove.
- [ ] CGV (`/cgv`, based on the CGV you wrote): the open points are listed in
      `build_docs/CGV-NOTES.md` — jurisdiction (Tribunal de commerce de Tours vs Paris),
      quote validity (2 months vs 30 days), insurance wording (§7.5), data clause vs the legal
      notice (§9), articles quoted in their pre-2022 wording (§10).
- [ ] Mentions légales (rewritten from your own text): open points in `build_docs/MENTIONS-LEGALES-NOTES.md`
      — "marques déposées" claim, call recording still mentioned in the CGV §9, Web3Forms
      transfer outside the EU, jurisdiction wording to align with the CGV.

### Company (`/entreprise`)
- [ ] Short history: founding year, founders, team size?

### Skills (`/competences`)
- [ ] Certifications held (installer approvals, Qualibat…)?
- [ ] A2P table (5 / 10 / 15 minutes): validated against CNPP sources?

### Professionals (`/professionnels`)
- [ ] Is an annual priority-intervention contract really offered? Under what terms?
- [ ] A committed response time to advertise (e.g. quote within 48 h)?
- [ ] Client references (syndics, bailleurs) that can be quoted, with their consent?

### Content
- [ ] FAQ legal statements (tenant vs landlord, insurer deadline): reviewed by someone qualified?

## Answered

| Question | Answer |
|---|---|
| Hosting | GitHub Pages, custom domain `lesserruriersfranciliens.fr` (OVH, no www); `www` redirects to the bare domain |
| Contact form | Web3Forms (key to create), `mailto:` fallback without a key |
| Key figures (`/entreprise`) | 10 years of experience, 200+ interventions per year, 8 departments. "Buildings served" dropped |
| Show prices? | Door opening only, fixed prices TTC (travel + labour included, parts extra): 99 € slammed door, 149 € locked without label, 199 € locked with label (A2P) or faulty lock. Everything else on free quote |
| B2B targets | Syndics / copropriétés and bailleurs / gestionnaires |
| Skills scope | Locksmithing and armoring only (alarms, video, glass breakage removed) |
| Réalisations | Page and home section removed until there are real projects to show (restore from git history) |
| Service area | All of Île-de-France (75, 77, 78, 91, 92, 93, 94, 95) |
| Design stack | Astro + Tailwind CSS v4, components ported from shadcn/ui as `.astro` files (no React) |
| Legal identity | LES SERRURIERS FRANCILIENS, SAS au capital de 1 200 €, created 12/11/2025, RNE 04/12/2025 |
| Phone & WhatsApp | Landline 01 70 07 20 00 shown on the site for calls; WhatsApp CTA on +33 6 30 93 52 88 |
| Brands serviced | All the main ones: Fichet, Vachette, Bricard, Picard, Héraclès, Mul-T-Lock, ABUS, ISEO, Kaba, DOM, TESA, CISA (one page each) |
| City pages | ~60 towns/arrondissements by driving time from Montreuil (where the locksmith lives), one unique page each |
| Head office | 60 rue François Ier, 75008 Paris |
| SIREN / SIRET / VAT | 994 060 275 / 994 060 275 00017 / FR33 994 060 275 |
| NAF | 43.32B – Travaux de menuiserie métallique et serrurerie |
| CGV | Built from the client's own text, articles 1 to 10 kept in order and wording: `/cgv`, footer link, `noindex` like `/mentions-legales`. Changes and open points in `build_docs/CGV-NOTES.md` |
| Mentions légales | Rewritten from the client's own text (§1 and §2.1 to §2.14 kept): host changed to GitHub Pages, `.fr` domain, appliances/TV/hi-fi removed from the activity, paid diagnosis replaced by the free quote, broken privacy/cookies references replaced by §2.11 and §2.15, mediator and CNIL added. Details in `build_docs/MENTIONS-LEGALES-NOTES.md` |
| `.com` domain | Still owned: transferred from Squarespace to OVH, active from 2026-11-25, then 301 redirect to the `.fr` (steps in `NOTES.md` → Domains) |
