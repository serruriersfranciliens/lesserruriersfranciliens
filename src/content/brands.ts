// Lock brands we service. Product names must stay factual: check them against the maker's
// catalogue before adding new ones (see NOTES.md).

export type Brand = {
  slug: string;
  name: string;
  /** Country and founding year, as shown on the page. */
  origin: string;
  /** One line for the brand index and the meta description. */
  summary: string;
  intro: string;
  /** Product families we meet on site. */
  products: { title: string; text: string }[];
  /** Where we usually meet the brand in Île-de-France. */
  context: string;
};

// Flat URL: a /marques/ folder next to marques.html would break /marques on GitHub Pages.
export const brandPath = (slug: string) => `/serrure-${slug}`;

export const brands: Brand[] = [
  {
    slug: 'fichet',
    name: 'Fichet',
    origin: 'France, depuis 1825',
    summary: 'Serrures multipoints, cylindres haute sécurité et blocs-portes blindés.',
    intro:
      'Fichet est l’un des noms historiques de la serrurerie française, réputé pour ses serrures de haute sécurité et ses portes blindées. On trouve des serrures Fichet sur de nombreuses portes palières parisiennes, souvent installées depuis plusieurs décennies.',
    products: [
      {
        title: 'Serrures multipoints',
        text: 'Serrures 3 points et plus, en applique ou à larder, souvent montées sur des portes blindées.',
      },
      {
        title: 'Cylindres haute sécurité',
        text: 'Cylindres à clés protégées (gammes F3D, F5S…), reproductibles uniquement sur présentation de la carte de propriété.',
      },
      {
        title: 'Blocs-portes blindés',
        text: 'Portes blindées complètes, avec huisserie renforcée et serrure multipoints intégrée.',
      },
    ],
    context:
      'Très présent dans les immeubles anciens de Paris et de la petite couronne, sur des portes blindées des années 1970 à aujourd’hui.',
  },
  {
    slug: 'vachette',
    name: 'Vachette',
    origin: 'France, depuis 1864',
    summary: 'Cylindres, serrures et quincaillerie très répandus dans les logements.',
    intro:
      'Vachette est une marque française très répandue, du cylindre standard au cylindre de haute sécurité. Ses produits équipent un grand nombre de logements, de copropriétés et de locaux professionnels.',
    products: [
      {
        title: 'Cylindres européens',
        text: 'Du cylindre standard aux gammes de haute sécurité (Radial NT, VIP+…), avec clés protégées sur carte de propriété.',
      },
      {
        title: 'Serrures en applique et à larder',
        text: 'Serrures de portes palières et de portes intérieures, 1 point ou multipoints.',
      },
      {
        title: 'Organigrammes',
        text: 'Combinaisons de cylindres pour gérer plusieurs portes avec un nombre limité de clés.',
      },
    ],
    context:
      'Très courant dans les copropriétés et chez les bailleurs : portes palières, portes de hall, caves et locaux communs.',
  },
  {
    slug: 'bricard',
    name: 'Bricard',
    origin: 'France, depuis 1782',
    summary:
      'Serrures de portes palières et cylindres de sûreté, classiques des immeubles parisiens.',
    intro:
      'Bricard est une des plus anciennes marques de serrurerie françaises. Ses serrures, notamment la Chifral, équipent depuis des décennies les portes palières des immeubles parisiens.',
    products: [
      {
        title: 'Serrures de portes palières',
        text: 'Serrures en applique et multipoints, dont la gamme Chifral très présente à Paris.',
      },
      {
        title: 'Cylindres de sûreté',
        text: 'Cylindres à clés protégées, reproductibles sur présentation de la carte de propriété.',
      },
      {
        title: 'Verrous et serrures complémentaires',
        text: 'Verrous de sûreté pour doubler une serrure existante sans changer la porte.',
      },
    ],
    context:
      'Omniprésent dans les immeubles haussmanniens et anciens de Paris, souvent sur des portes en bois massif.',
  },
  {
    slug: 'picard',
    name: 'Picard',
    origin: 'France, Vimeu (Somme), depuis le XVIIIe siècle',
    summary: 'Serrures multipoints et portes blindées de fabrication française.',
    intro:
      'Picard Serrures est un fabricant français historique du Vimeu, en Picardie, berceau de la serrurerie française. La marque est connue pour ses serrures multipoints et ses portes blindées.',
    products: [
      {
        title: 'Serrures multipoints',
        text: 'Serrures 3, 5 points et plus, pour portes d’appartement et de maison.',
      },
      {
        title: 'Portes blindées',
        text: 'Blocs-portes blindés certifiés, avec serrure multipoints et cylindre haute sécurité.',
      },
      {
        title: 'Cylindres',
        text: 'Cylindres haute sécurité à clés protégées, à remplacer à l’identique ou à faire évoluer.',
      },
    ],
    context: 'Fréquent sur les portes blindées des appartements et les portes d’entrée de maisons.',
  },
  {
    slug: 'heracles',
    name: 'Héraclès',
    origin: 'France',
    summary: 'Blindages de portes, serrures multipoints et cylindres haute sécurité.',
    intro:
      'Héraclès est une marque française spécialisée dans la sécurité de la porte : blindages, serrures multipoints et cylindres. Ses produits sont très utilisés par les serruriers pour renforcer des portes existantes.',
    products: [
      {
        title: 'Blindages de porte',
        text: 'Kits de blindage pour porte existante : plaque d’acier, cornières anti-pince, serrure multipoints.',
      },
      {
        title: 'Serrures multipoints',
        text: 'Serrures en applique 3 points et plus, certifiées A2P selon les modèles.',
      },
      {
        title: 'Cylindres haute sécurité',
        text: 'Cylindres à clés protégées, reproductibles sur carte de propriété.',
      },
    ],
    context: 'Courant sur les portes palières blindées après coup, en appartement comme en maison.',
  },
  {
    slug: 'mul-t-lock',
    name: 'Mul-T-Lock',
    origin: 'Israël, depuis 1973',
    summary: 'Cylindres haute sécurité à clés protégées, très résistants au crochetage.',
    intro:
      'Mul-T-Lock est un spécialiste mondial du cylindre de haute sécurité, connu pour ses clés à goupilles télescopiques. Ses cylindres équipent de nombreuses portes blindées en France.',
    products: [
      {
        title: 'Cylindres haute sécurité',
        text: 'Gammes Interactive+, MT5+ et Classic : clés protégées, résistance au crochetage, au perçage et à l’arrachage selon les modèles.',
      },
      {
        title: 'Serrures et verrous',
        text: 'Verrous et serrures complémentaires pour renforcer une porte existante.',
      },
      {
        title: 'Organigrammes',
        text: 'Organigrammes de clés pour copropriétés et locaux professionnels.',
      },
    ],
    context: 'Souvent monté sur des portes blindées, en remplacement d’un cylindre d’origine.',
  },
  {
    slug: 'abus',
    name: 'ABUS',
    origin: 'Allemagne, depuis 1924',
    summary: 'Cylindres, verrous et cadenas de sécurité.',
    intro:
      'ABUS est un fabricant allemand connu pour ses cadenas, ses cylindres et ses équipements de sécurité. Ses cylindres offrent un bon rapport niveau de sécurité / prix pour les portes d’appartement et de maison.',
    products: [
      {
        title: 'Cylindres',
        text: 'Cylindres européens standard et haute sécurité (gamme Bravus notamment), avec clés protégées.',
      },
      {
        title: 'Verrous',
        text: 'Verrous de porte additionnels pour doubler une serrure existante.',
      },
      {
        title: 'Cadenas',
        text: 'Cadenas pour caves, locaux vélos et portails.',
      },
    ],
    context: 'Courant sur les portes de maisons, de caves et de locaux annexes.',
  },
  {
    slug: 'iseo',
    name: 'ISEO',
    origin: 'Italie, depuis 1969',
    summary: 'Cylindres et serrures multipoints, très présents en copropriété.',
    intro:
      'ISEO est un fabricant italien de cylindres, de serrures et de solutions de contrôle d’accès. Ses cylindres équipent de nombreuses portes palières et portes de parties communes.',
    products: [
      {
        title: 'Cylindres',
        text: 'Cylindres européens standard et haute sécurité (gammes R6, R9…), avec clés protégées.',
      },
      {
        title: 'Serrures multipoints',
        text: 'Serrures pour portes palières et portes blindées.',
      },
      {
        title: 'Organigrammes',
        text: 'Organigrammes pour copropriétés, bureaux et locaux techniques.',
      },
    ],
    context: 'Fréquent dans les copropriétés récentes et sur les portes de parties communes.',
  },
  {
    slug: 'kaba',
    name: 'Kaba',
    origin: 'Suisse, depuis 1862 (aujourd’hui dormakaba)',
    summary: 'Cylindres à clés réversibles et organigrammes pour copropriétés et entreprises.',
    intro:
      'Kaba, aujourd’hui intégré au groupe dormakaba, est une référence du cylindre à clés réversibles et des organigrammes. On le trouve beaucoup dans les immeubles de bureaux, les établissements publics et les copropriétés.',
    products: [
      {
        title: 'Cylindres à clés réversibles',
        text: 'Cylindres à clés protégées (gammes Kaba Gemini, Kaba expert…), reproductibles sur carte de propriété.',
      },
      {
        title: 'Organigrammes',
        text: 'Organigrammes de clés pour gérer de nombreuses portes avec des niveaux d’accès différents.',
      },
      {
        title: 'Remplacement à l’identique',
        text: 'Remplacement d’un cylindre intégré à un organigramme existant, en conservant les clés des autres portes.',
      },
    ],
    context:
      'Courant dans les bureaux, les copropriétés avec organigramme et les locaux professionnels.',
  },
  {
    slug: 'dom',
    name: 'DOM',
    origin: 'Allemagne, depuis 1936',
    summary: 'Cylindres haute sécurité et organigrammes.',
    intro:
      'DOM est un fabricant allemand de cylindres de haute sécurité et de systèmes d’organigrammes, présent en France sur des portes d’appartement comme dans les locaux professionnels.',
    products: [
      {
        title: 'Cylindres haute sécurité',
        text: 'Cylindres à clés protégées, résistants au crochetage et au perçage selon les gammes.',
      },
      {
        title: 'Organigrammes',
        text: 'Organigrammes mécaniques pour copropriétés et entreprises.',
      },
      {
        title: 'Remplacement à l’identique',
        text: 'Remplacement d’un cylindre DOM existant avec conservation des clés lorsque c’est possible.',
      },
    ],
    context: 'Rencontré sur des portes blindées et dans des locaux professionnels.',
  },
  {
    slug: 'tesa',
    name: 'TESA',
    origin: 'Espagne, depuis 1941',
    summary: 'Cylindres et serrures pour logements et locaux professionnels.',
    intro:
      'TESA est un fabricant espagnol de cylindres et de serrures, appartenant au groupe ASSA ABLOY. Ses cylindres équipent de nombreuses portes en copropriété et dans les locaux professionnels.',
    products: [
      {
        title: 'Cylindres',
        text: 'Cylindres européens standard et haute sécurité (gamme TX80 notamment), avec clés protégées.',
      },
      {
        title: 'Serrures',
        text: 'Serrures à larder et en applique pour portes d’appartement et locaux.',
      },
      {
        title: 'Organigrammes',
        text: 'Organigrammes de clés pour copropriétés et entreprises.',
      },
    ],
    context: 'Fréquent dans les résidences récentes et les locaux professionnels.',
  },
  {
    slug: 'cisa',
    name: 'CISA',
    origin: 'Italie, depuis 1926',
    summary: 'Serrures, cylindres et ferme-portes pour logements et parties communes.',
    intro:
      'CISA est un fabricant italien de serrures, de cylindres et de ferme-portes, aujourd’hui intégré au groupe Allegion. Ses produits équipent des portes palières, des portes blindées et des portes de parties communes.',
    products: [
      {
        title: 'Cylindres',
        text: 'Cylindres européens standard et haute sécurité, avec clés protégées selon les gammes.',
      },
      {
        title: 'Serrures',
        text: 'Serrures pour portes blindées, portes palières et portes métalliques.',
      },
      {
        title: 'Ferme-portes',
        text: 'Ferme-portes pour portes de hall et de parties communes.',
      },
    ],
    context: 'Rencontré sur des portes blindées et des portes de parties communes.',
  },
];

// What we do on any brand: shown on every brand page.
export const brandServices = [
  {
    title: 'Dépannage',
    text: 'Serrure bloquée, clé cassée, porte claquée : ouverture et remise en service, en privilégiant les techniques sans dégât.',
  },
  {
    title: 'Remplacement à l’identique',
    text: 'Remplacement d’un cylindre ou d’une serrure par un modèle compatible, sans modifier la porte.',
  },
  {
    title: 'Montée en gamme',
    text: 'Passage à un cylindre de haute sécurité ou à une serrure multipoints certifiée A2P, adaptés à la porte.',
  },
  {
    title: 'Clés sur carte de propriété',
    text: 'Commande de clés supplémentaires auprès du fabricant sur présentation de la carte de propriété et d’une pièce d’identité.',
  },
];
