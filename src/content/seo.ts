import { brandPath, brands } from './brands';
import { cities, departmentNames } from './cities';
import { company } from './company';
import { generalFaq } from './faq';
import { openingPrices } from './pricing';
import { proFaq } from './professionals';
import { services } from './services';
import { siteUrl } from './site';
import { zones } from './zones';

export { siteUrl };

export type PageMeta = {
  path: string;
  /** Full <title>. */
  title: string;
  description: string;
  /** Breadcrumb label. */
  label: string;
  /** Sitemap priority; pages without it are excluded from the sitemap. */
  priority?: number;
  noindex?: boolean;
  faq?: { question: string; answer: string }[];
  /** Intermediate breadcrumb level (city pages → zones, brand pages → brands). */
  parent?: { label: string; path: string };
  /** City name, for a Service JSON-LD scoped to that city. */
  areaServed?: string;
};

const suffix = ` | ${company.name}`;

export const pages: PageMeta[] = [
  {
    path: '/',
    title: `Serrurier à Paris et en Île-de-France${suffix}`,
    description:
      'Serrurier pour syndics, bailleurs et particuliers à Paris et en Île-de-France : dépannage, ouverture de porte, changement de serrure, blindage. Devis gratuit, 7j/7.',
    label: 'Accueil',
    priority: 1,
    faq: generalFaq,
  },
  {
    path: '/entreprise',
    title: `Notre entreprise de serrurerie en Île-de-France${suffix}`,
    description:
      'Les Serruriers Franciliens : des artisans serruriers qualifiés au service des syndics, bailleurs, agences immobilières et particuliers. Notre charte et nos garanties.',
    label: 'L’entreprise',
    priority: 0.7,
  },
  {
    path: '/competences',
    title: `Dépannage, changement de serrure et blindage de porte${suffix}`,
    description:
      'Ouverture de porte sans dégât, clé cassée, mise en sécurité après effraction, cylindres et serrures A2P, blindage de porte : nos compétences en Île-de-France.',
    label: 'Compétences',
    priority: 0.9,
  },
  {
    path: '/professionnels',
    title: `Serrurier pour syndics de copropriété et bailleurs${suffix}`,
    description:
      'Serrurier partenaire des syndics, bailleurs et agences immobilières en Île-de-France : parties communes, changement de cylindres entre locataires, logements vacants, compte-rendu photo.',
    label: 'Professionnels',
    priority: 0.9,
    faq: proFaq,
  },
  {
    path: '/zones-intervention',
    title: `Serrurier à Paris, 92, 93, 94 et toute l’Île-de-France${suffix}`,
    description:
      'Nos serruriers interviennent 7j/7 à Paris et dans les Hauts-de-Seine, la Seine-Saint-Denis, le Val-de-Marne, les Yvelines, l’Essonne, le Val-d’Oise et la Seine-et-Marne.',
    label: 'Zones d’intervention',
    priority: 0.8,
  },
  {
    path: '/marques',
    title: `Serrurier toutes marques : Fichet, Vachette, Bricard, Mul-T-Lock…${suffix}`,
    description:
      'Dépannage, remplacement de cylindres et de serrures, clés sur carte de propriété : nous intervenons sur les principales marques de serrures en Île-de-France.',
    label: 'Marques de serrures',
    priority: 0.7,
  },
  {
    path: '/contact',
    title: `Contact et devis gratuit${suffix}`,
    description:
      'Demandez un devis gratuit à votre serrurier en Île-de-France : téléphone, e-mail, WhatsApp ou formulaire. Intervention 7j/7 de 8h à 22h.',
    label: 'Contact',
    priority: 0.8,
  },
  {
    path: '/mentions-legales',
    title: `Mentions légales${suffix}`,
    description: `Mentions légales et politique de confidentialité du site ${company.name}.`,
    label: 'Mentions légales',
    noindex: true,
  },
];

const zonesParent = { label: 'Zones d’intervention', path: '/zones-intervention' };
const brandsParent = { label: 'Marques de serrures', path: '/marques' };

for (const city of cities) {
  pages.push({
    path: city.path,
    title: `Serrurier ${city.locative} (${city.postalCode}) : dépannage, serrures, blindage${suffix}`,
    description: `Serrurier ${city.locative} (${departmentNames[city.department]}) : ${city.districts
      .slice(0, 3)
      .join(
        ', ',
      )}… Ouverture de porte, changement de serrure et blindage, intervention en moins d’1 h. Devis gratuit, 7j/7 de 8h à 22h.`,
    label: `Serrurier ${city.locative}`,
    priority: 0.6,
    parent: zonesParent,
    areaServed: city.name,
  });
}

for (const brand of brands) {
  pages.push({
    path: brandPath(brand.slug),
    title: `Serrurier ${brand.name} : dépannage, cylindres et clés${suffix}`,
    description: `Serrures et cylindres ${brand.name} en Île-de-France : ${brand.summary.charAt(0).toLowerCase()}${brand.summary.slice(1, -1)}. Dépannage, remplacement à l’identique, clés sur carte de propriété. Devis gratuit.`,
    label: brand.name,
    priority: 0.5,
    parent: brandsParent,
  });
}

export const notFoundMeta: PageMeta = {
  path: '/404',
  title: `Page introuvable${suffix}`,
  description: 'Cette page n’existe pas ou a été déplacée.',
  label: 'Page introuvable',
  noindex: true,
};

// Legacy URLs of the previous site, redirected to their new equivalent.
export const legacyRedirects: Record<string, string> = {
  '/depannage': '/competences#depannage',
  '/installation': '/competences#blindage',
  '/contacts': '/contact',
};

export function getPageMeta(pathname: string): PageMeta {
  const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  return pages.find((p) => p.path === normalized) ?? notFoundMeta;
}

export const absoluteUrl = (path: string) => (path === '/' ? `${siteUrl}/` : `${siteUrl}${path}`);

// ---------- Structured data (schema.org JSON-LD) ----------

const businessId = `${siteUrl}/#business`;

function localBusiness() {
  return {
    '@type': 'Locksmith',
    '@id': businessId,
    name: company.name,
    url: absoluteUrl('/'),
    image: `${siteUrl}/og-image.png`,
    telephone: company.phoneE164,
    email: company.email,
    sameAs: [company.social.instagram, company.social.facebook],
    description:
      'Serrurerie, dépannage et blindage de portes pour les syndics de copropriété, bailleurs, agences immobilières, gestionnaires de biens et particuliers en Île-de-France.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.legal.streetAddress,
      postalCode: company.legal.postalCode,
      addressLocality: company.legal.city,
      addressRegion: 'Île-de-France',
      addressCountry: 'FR',
    },
    vatID: company.legal.vat.replace(/\s/g, ''),
    foundingDate: '2025-11-12',
    areaServed: [
      { '@type': 'State', name: 'Île-de-France' },
      ...zones.map((z) => ({ '@type': 'AdministrativeArea', name: `${z.name} (${z.code})` })),
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:00',
        closes: '22:00',
      },
    ],
    knowsLanguage: 'fr',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Prestations de serrurerie',
      itemListElement: [
        ...openingPrices.map((p) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: `Ouverture de porte : ${p.title}`,
            description: p.text,
          },
          price: p.price,
          priceCurrency: 'EUR',
        })),
        ...services.flatMap((s) =>
          s.items.map((item) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: item.title, description: item.text },
          })),
        ),
      ],
    },
  };
}

function website() {
  return {
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: absoluteUrl('/'),
    name: company.name,
    inLanguage: 'fr-FR',
    publisher: { '@id': businessId },
  };
}

function breadcrumb(meta: PageMeta) {
  const trail = [
    { name: 'Accueil', path: '/' },
    ...(meta.parent ? [{ name: meta.parent.label, path: meta.parent.path }] : []),
    { name: meta.label, path: meta.path },
  ];
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: absoluteUrl(t.path),
    })),
  };
}

function localService(meta: PageMeta) {
  return {
    '@type': 'Service',
    serviceType: 'Serrurerie',
    name: meta.label,
    provider: { '@id': businessId },
    areaServed: { '@type': 'City', name: meta.areaServed },
  };
}

function faqPage(meta: PageMeta) {
  return {
    '@type': 'FAQPage',
    mainEntity: (meta.faq ?? []).map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function buildJsonLd(meta: PageMeta) {
  if (meta.noindex) return null;
  const graph: object[] = [localBusiness()];
  if (meta.path === '/') graph.push(website());
  else graph.push(breadcrumb(meta));
  if (meta.faq?.length) graph.push(faqPage(meta));
  if (meta.areaServed) graph.push(localService(meta));
  return { '@context': 'https://schema.org', '@graph': graph };
}

// ---------- Head tags (used by src/layouts/Layout.astro) ----------

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export function renderHeadTags(meta: PageMeta): string {
  const url = absoluteUrl(meta.path);
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);
  const jsonLd = buildJsonLd(meta);
  return [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<meta name="robots" content="${meta.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large'}" />`,
    meta.noindex ? '' : `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
    jsonLd
      ? `<script type="application/ld+json" id="ld-json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>`
      : '',
  ]
    .filter(Boolean)
    .join('\n    ');
}

// ---------- llms.txt (https://llmstxt.org) ----------

export function renderLlmsTxt(): string {
  const link = (p: PageMeta) => `- [${p.label}](${absoluteUrl(p.path)}): ${p.description}`;
  const indexed = pages.filter((p) => !p.noindex && !p.parent);
  const children = (parent: string) =>
    pages
      .filter((p) => p.parent?.path === parent)
      .map((p) => `- [${p.label}](${absoluteUrl(p.path)})`);
  const legal = pages.filter((p) => p.noindex);
  const { legal: l } = company;
  return [
    `# ${company.name}`,
    '',
    `> Entreprise de serrurerie et de blindage de portes en Île-de-France, au service des syndics de copropriété, bailleurs, agences immobilières, gestionnaires de biens et particuliers. Dépannage, ouverture de porte, changement de serrure et de cylindre, blindage. Devis gratuit, intervention ${company.hours}.`,
    '',
    `- Téléphone : ${company.phone} (${company.phoneE164})`,
    `- WhatsApp : ${company.whatsappHref}`,
    `- E-mail : ${company.email}`,
    `- Horaires : ${company.hours}`,
    `- Zone d’intervention : ${company.departments.map((d) => `${d.name} (${d.code})`).join(', ')}`,
    `- Siège : ${l.address} · SIRET ${l.siret} · TVA ${l.vat}`,
    '',
    '## Pages',
    '',
    ...indexed.map(link),
    '',
    '## Prestations',
    '',
    ...services.flatMap((s) =>
      s.items.map((i) => `- [${i.title}](${absoluteUrl('/competences')}#${s.id}): ${i.text}`),
    ),
    '',
    '## Villes',
    '',
    ...children('/zones-intervention'),
    '',
    '## Marques',
    '',
    ...children('/marques'),
    '',
    '## Optional',
    '',
    ...legal.map(link),
    '',
  ].join('\n');
}
