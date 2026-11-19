// Hand-written local content for each city page. Every page must say something specific
// about its town (Google penalises near-duplicate "doorway" pages). Keep the keys in sync
// with `cityFacts` (src/content/city-facts.ts); a missing entry fails the build.

export type Housing =
  'pavillons' | 'haussmannien' | 'faubourien' | 'grands-ensembles' | 'recent' | 'locaux-pro';

export type CityText = {
  /** 2–3 sentences on the town itself and what it means for doors and locks. */
  intro: string;
  /** Neighbourhoods and landmarks. Only well-known, verifiable names. */
  districts: string[];
  /** Dominant building types, most common first. Drives the advice blocks. */
  housing: Housing[];
  /** The typical local request, in one short paragraph. */
  focus: string;
  /** A second local angle ("bon à savoir"): building era, access, local constraint. */
  details: string;
};

export const cityTexts: Record<string, CityText> = {
  montreuil: {
    intro:
      'Avec plus de 110 000 habitants, Montreuil est l’une des plus grandes villes de petite couronne, et une ville de contrastes. Entre les anciens ateliers du Bas-Montreuil, les pavillons des hauteurs et les grandes résidences du Montreau et des Ruffins, on y rencontre à peu près toutes les portes et toutes les serrures de l’Est parisien.',
    districts: [
      'Bas-Montreuil',
      'Croix-de-Chavaux',
      'Mairie de Montreuil',
      'Ruffins',
      'Montreau',
      'Boissière',
      'Murs-à-pêches',
    ],
    housing: ['faubourien', 'pavillons', 'grands-ensembles'],
    focus:
      'Ateliers et lofts transformés en logements, avec des portes métalliques ou vitrées à sécuriser ; pavillons dont la porte d’entrée mérite une serrure multipoints ; résidences de bailleurs où il faut changer les cylindres entre deux locataires.',
    details:
      'Dans le Bas-Montreuil, beaucoup d’anciens ateliers ont été divisés en logements : les portes donnant sur cour sont souvent métalliques ou vitrées, avec des serrures simples. Sur les hauteurs, autour des Murs-à-pêches et de la Boissière, les maisons ont fréquemment une porte de jardin ou de garage moins protégée que l’entrée principale. Nous faisons le tour des accès avant de proposer une solution.',
  },
  'fontenay-sous-bois': {
    intro:
      'Fontenay-sous-Bois mêle le vieux village autour de l’église Saint-Germain, des rues pavillonnaires en lisière du bois de Vincennes et le pôle de bureaux du Val de Fontenay, l’un des plus importants de l’est parisien.',
    districts: [
      'Village',
      'Rigollots',
      'Larris',
      'Alouettes',
      'Val de Fontenay',
      'Bois de Vincennes',
    ],
    housing: ['pavillons', 'recent', 'locaux-pro'],
    focus:
      'Côté maisons, ce sont surtout des remplacements de serrures de porte d’entrée et des renforcements après une tentative d’effraction. Côté Val de Fontenay, les entreprises nous appellent pour remplacer des cylindres de bureaux et mettre en place des organigrammes de clés.',
    details:
      'Au Val de Fontenay, les immeubles de bureaux fonctionnent souvent avec des organigrammes de clés : remplacer un seul cylindre demande de respecter la combinaison existante. Dans le village et vers les Rigollots, les maisons anciennes ont parfois des portes en bois épais, déformées avec le temps : un réglage des paumelles et de la gâche règle bien des serrures qui « forcent ».',
  },
  bagnolet: {
    intro:
      'De la Porte de Bagnolet aux Coutures, Bagnolet alterne immeubles de faubourg, petites maisons de ville et grandes résidences comme celles de La Noue ou des Malassis. Une ville compacte, où les immeubles de toutes les époques se succèdent d’une rue à l’autre.',
    districts: ['Centre-ville', 'Les Coutures', 'La Noue', 'Malassis', 'Plateau', 'Gallieni'],
    housing: ['faubourien', 'grands-ensembles', 'pavillons'],
    focus:
      'Beaucoup de portes palières anciennes, simples, dans des immeubles sans gardien : nous proposons souvent un cylindre de haute sécurité ou un blindage de la porte existante. Les bailleurs et syndics de La Noue et des Malassis nous confient aussi les portes de hall, de caves et de locaux communs.',
    details:
      'Les immeubles de faubourg du centre et des Coutures sont souvent sans gardien, avec des portes de hall et de caves très sollicitées. Pour les parties communes, nous recommandons des serrures et cylindres conçus pour un usage intensif plutôt que des modèles d’appartement. Côté logements, un cylindre de haute sécurité est souvent le premier investissement le plus rentable.',
  },
  'rosny-sous-bois': {
    intro:
      'Rosny-sous-Bois s’étend du centre ancien jusqu’au plateau d’Avron, avec de nombreux pavillons, des copropriétés des années 1960 à 2000 et la zone commerciale de Rosny 2. La ville est traversée par l’A86 et desservie par le RER E.',
    districts: [
      'Centre-ville',
      'Bois-Perrier',
      'Pré-Gentil',
      'Marnaudes',
      'Plateau d’Avron',
      'Rosny 2',
    ],
    housing: ['pavillons', 'recent', 'grands-ensembles'],
    focus:
      'Les demandes les plus fréquentes : clé perdue ou cassée dans la serrure d’une maison, porte claquée en copropriété, et changement de serrure après un cambriolage. Pour les pavillons exposés, nous conseillons une serrure multipoints certifiée A2P.',
    details:
      'Sur le plateau d’Avron et autour du Bois-Perrier, beaucoup de maisons ont été construites entre les années 1950 et 1980 avec des portes d’entrée d’origine. Leurs serrures, souvent à un seul point, se remplacent facilement par une serrure en applique multipoints, sans changer la porte. Dans les copropriétés, nous intervenons aussi sur les portes de parkings et de caves.',
  },
  'les-lilas': {
    intro:
      'Petite commune dense perchée au-dessus de la Porte des Lilas, Les Lilas aligne immeubles de rapport, maisons de ville et résidences récentes autour de la rue de Paris et du parc Lucie-Aubrac. Les rues sont étroites et le stationnement compliqué : nous connaissons les accès.',
    districts: [
      'Centre-ville',
      'Rue de Paris',
      'Avenue Pasteur',
      'Parc Lucie-Aubrac',
      'Fort de Romainville',
    ],
    housing: ['faubourien', 'pavillons', 'recent'],
    focus:
      'Beaucoup de portes palières en bois des années 1930 à renforcer, et de maisons de ville dont la serrure d’origine ne ferme plus correctement. Le blindage de porte existante est souvent la meilleure solution : il conserve l’aspect côté palier.',
    details:
      'Aux Lilas, les immeubles des années 1920–1930 ont souvent des portes palières à panneaux moulurés, que les copropriétés souhaitent conserver. Le blindage côté intérieur, avec une serrure multipoints et des cornières anti-pince, garde l’aspect d’origine côté palier. Pour les maisons de ville, nous vérifions aussi les portes donnant sur les petites cours arrière.',
  },
  romainville: {
    intro:
      'Romainville se transforme vite : le centre ancien et ses pavillons côtoient les nouveaux programmes du Bas-Pays et de la corniche des Forts, autour de la future ligne 11. Nous intervenons dans les copropriétés neuves comme dans les maisons plus anciennes.',
    districts: [
      'Centre ancien',
      'Bas-Pays',
      'Corniche des Forts',
      'Cité Gagarine',
      'Fort de Romainville',
    ],
    housing: ['recent', 'pavillons', 'grands-ensembles'],
    focus:
      'Dans les résidences récentes, il s’agit souvent de gérer les clés : cylindres à changer après un emménagement, clés supplémentaires sur carte de propriété, organigrammes pour les parties communes. Dans le centre, ce sont plutôt des serrures de maisons à remplacer.',
    details:
      'Dans les programmes neufs du Bas-Pays et de la corniche des Forts, les portes palières sont généralement livrées avec un cylindre standard et quelques clés. Beaucoup d’acquéreurs préfèrent le remplacer dès l’emménagement par un cylindre à clés protégées sur carte de propriété : personne d’autre ne peut alors faire refaire de clés.',
  },
  vincennes: {
    intro:
      'À Vincennes, les immeubles en pierre de taille et les beaux immeubles de briques des années 1900–1930 dominent, entre le château, la rue du Midi et le bois. Les portes palières y sont souvent anciennes, en bois massif, avec moulures.',
    districts: [
      'Centre-ville',
      'Rue du Midi',
      'Diderot',
      'Château',
      'Quartier Ouest',
      'Bois de Vincennes',
    ],
    housing: ['haussmannien', 'recent'],
    focus:
      'Nous y posons beaucoup de blindages discrets : plaque d’acier côté intérieur, cornières anti-pince et serrure multipoints, avec un habillage qui respecte les moulures et le règlement de copropriété. Les serrures en applique d’origine peuvent aussi être conservées et doublées d’un verrou haute sécurité.',
    details:
      'Les copropriétés vincennoises ont souvent des règlements stricts sur l’aspect des portes palières et des halls. Avant de poser un blindage ou une nouvelle serrure, nous vérifions avec vous les contraintes du règlement et, si besoin, préparons un descriptif pour le syndic. Les portes cochères anciennes demandent aussi un entretien régulier de leurs serrures.',
  },
  villemomble: {
    intro:
      'Villemomble est une ville largement pavillonnaire, organisée autour de la Grande Rue et du château seigneurial, à mi-chemin entre Rosny et Le Raincy. Les maisons y côtoient quelques petites copropriétés et résidences.',
    districts: [
      'Grande Rue',
      'Centre-ville',
      'Château seigneurial',
      'Gare du Raincy-Villemomble-Montfermeil',
      'Plateau d’Avron',
    ],
    housing: ['pavillons', 'recent'],
    focus:
      'La majorité des appels concernent une porte d’entrée de maison : serrure grippée, clé cassée, porte qui ferme mal après un affaissement ou une tentative d’effraction. Nous réglons la porte et la gâche, puis remplaçons la serrure si nécessaire.',
    details:
      'Les pavillons de Villemomble ont souvent plusieurs décennies : les portes en bois travaillent avec l’humidité et les saisons, et une serrure peut se mettre à accrocher sans être cassée. Nous commençons toujours par un diagnostic de la porte elle-même avant de remplacer la serrure, pour ne changer que ce qui doit l’être.',
  },
  'nogent-sur-marne': {
    intro:
      'Nogent-sur-Marne, en bord de Marne, associe des villas et maisons bourgeoises, des immeubles anciens autour de la Grande Rue Charles-de-Gaulle et de nombreuses copropriétés plus récentes vers le pont de Nogent et le port.',
    districts: [
      'Grande Rue Charles-de-Gaulle',
      'Baltard',
      'Bords de Marne',
      'Port de Nogent',
      'Plaisance',
    ],
    housing: ['pavillons', 'haussmannien', 'recent'],
    focus:
      'Les maisons de caractère ont souvent des portes anciennes et lourdes qu’il faut renforcer sans les dénaturer. Dans les copropriétés, nous intervenons pour des ouvertures de porte claquée et des remplacements de cylindres de haute sécurité.',
    details:
      'Les villas et maisons de bord de Marne ont parfois des portes d’entrée anciennes de grande valeur esthétique. Nous privilégions les solutions qui préservent la porte : serrure en applique multipoints, cylindre haute sécurité, renforcement discret du bâti. Dans les résidences autour du port, les demandes concernent surtout les cylindres et les clés protégées.',
  },
  'noisy-le-sec': {
    intro:
      'Reconstruite en grande partie après les bombardements de 1944, Noisy-le-Sec mêle immeubles de la reconstruction, pavillons et grandes résidences comme celles du Londeau ou du Merlan. La gare RER E et la future ligne 11 en font un pôle très fréquenté.',
    districts: ['Centre-ville', 'Gare de Noisy-le-Sec', 'Londeau', 'Merlan'],
    housing: ['grands-ensembles', 'pavillons', 'recent'],
    focus:
      'Bailleurs et syndics nous sollicitent pour les portes de hall, de caves et de locaux poubelles ; les particuliers pour des portes claquées et des serrures à remplacer. Les immeubles de la reconstruction ont souvent des portes palières légères, à renforcer en priorité.',
    details:
      'Les immeubles de la reconstruction d’après-guerre ont des portes palières plus légères que les immeubles anciens ou récents. Un blindage de la porte existante ou un bloc-porte blindé améliore nettement la résistance. Pour les bailleurs du Londeau et du Merlan, nous assurons aussi la remise en état des serrures entre deux locations.',
  },
  'le-perreux-sur-marne': {
    intro:
      'Au Perreux-sur-Marne, les meulières et maisons bourgeoises des bords de Marne côtoient de petites résidences et quelques immeubles autour du centre et de la gare de Nogent-Le Perreux. C’est une ville très résidentielle, où la sécurité des maisons compte beaucoup.',
    districts: ['Centre-ville', 'Bords de Marne', 'Gare Nogent-Le Perreux'],
    housing: ['pavillons', 'recent'],
    focus:
      'Portes d’entrée de maisons, portes de service et accès de jardin : nous posons des serrures multipoints, des cylindres anti-crochetage et des verrous complémentaires. Après une effraction, nous mettons la maison en sécurité le jour même.',
    details:
      'Au Perreux, de nombreuses maisons en meulière ont des portes d’entrée anciennes et des portes de service donnant sur le jardin. Les tentatives d’effraction visent souvent l’accès le moins visible depuis la rue. Nous proposons de sécuriser l’ensemble des accès avec des cylindres sur le même passe, pour garder une seule clé.',
  },
  'saint-mande': {
    intro:
      'Petite ville très dense entre le bois de Vincennes et le 12e arrondissement, Saint-Mandé est surtout composée d’immeubles bourgeois en pierre et en brique, avec gardiens et parties communes soignées. Nous y intervenons à la demande des syndics comme des résidents.',
    districts: [
      'Centre-ville',
      'Avenue Général-de-Gaulle',
      'Lac de Saint-Mandé',
      'Bois de Vincennes',
      'Porte de Saint-Mandé',
    ],
    housing: ['haussmannien', 'recent'],
    focus:
      'Ouverture de portes palières anciennes sans dégât, remplacement de serrures en applique, blindages discrets avec finitions adaptées aux halls et aux paliers. Pour les syndics, nous gérons aussi les portes de caves et de locaux techniques.',
    details:
      'Dans les immeubles bourgeois de Saint-Mandé, les portes palières anciennes sont souvent équipées de serrures en applique de marque, toujours fonctionnelles. Plutôt que de tout remplacer, on peut les doubler d’un verrou de haute sécurité ou passer à une serrure multipoints de même style. Nous travaillons aussi avec les gardiens pour les portes de service.',
  },
  bondy: {
    intro:
      'Bondy, traversée par le canal de l’Ourcq et l’ex-RN3, associe des quartiers pavillonnaires étendus et de grandes résidences comme Blanqui, Noue-Caillet ou la Sablière. La commune est desservie par le RER E, l’A3 et l’A86.',
    districts: ['Centre-ville', 'Canal de l’Ourcq', 'Blanqui', 'Noue-Caillet', 'La Sablière'],
    housing: ['pavillons', 'grands-ensembles'],
    focus:
      'Les particuliers nous appellent pour des clés perdues, des serrures bloquées et des renforcements de portes de maisons. Les bailleurs, pour remettre en état les logements vacants et changer les cylindres avant une nouvelle location.',
    details:
      'Dans les quartiers pavillonnaires de Bondy, beaucoup de maisons ont une porte de garage communicante avec l’intérieur, souvent équipée d’une simple serrure. C’est fréquemment le point d’entrée choisi lors d’un cambriolage. Nous la sécurisons au même niveau que la porte d’entrée, avec un verrou ou une serrure adaptée.',
  },
  'neuilly-plaisance': {
    intro:
      'Neuilly-Plaisance, sur les pentes du plateau d’Avron et en bord de Marne, est une commune très pavillonnaire, avec quelques résidences autour de la gare RER A et du centre. Les rues en pente et les maisons en retrait de la rue rendent parfois l’accès particulier.',
    districts: ['Centre-ville', 'Plateau d’Avron', 'Bords de Marne', 'Gare de Neuilly-Plaisance'],
    housing: ['pavillons', 'recent'],
    focus:
      'Portes d’entrée de maisons, portes de garage donnant sur l’intérieur et portes de service : ce sont souvent les accès secondaires les plus faibles. Nous les sécurisons au même niveau que la porte principale.',
    details:
      'Les maisons construites sur les pentes du plateau d’Avron ont souvent un sous-sol avec un accès direct sur l’extérieur. Ces portes de sous-sol, peu visibles, sont rarement aussi bien protégées que l’entrée principale. Nous les équipons de serrures et verrous adaptés, et vérifions l’état des huisseries, souvent exposées à l’humidité.',
  },
  bobigny: {
    intro:
      'Préfecture de la Seine-Saint-Denis, Bobigny concentre administrations, grands ensembles et nouveaux quartiers autour de Bobigny-Pablo-Picasso et de la ZAC Écocité. On y trouve aussi des secteurs pavillonnaires plus calmes vers Pont-de-Bondy et la Folie.',
    districts: [
      'Centre-ville',
      'Pablo-Picasso',
      'Écocité',
      'Abreuvoir',
      'Karl-Marx',
      'Pont-de-Bondy',
    ],
    housing: ['grands-ensembles', 'recent', 'locaux-pro'],
    focus:
      'Nous travaillons beaucoup avec les bailleurs et gestionnaires : portes de hall, caves, locaux techniques, logements vacants à sécuriser. Les bureaux et commerces nous demandent des remplacements de cylindres et des organigrammes de clés.',
    details:
      'Les grandes résidences de Bobigny reçoivent beaucoup de passage : portes de hall, de caves et de locaux poubelles s’usent vite. Pour les bailleurs, nous proposons du matériel robuste et un suivi des interventions avec photos. Pour les administrations et bureaux du centre, nous gérons les organigrammes et les remplacements de cylindres au départ d’un agent.',
  },
  gagny: {
    intro:
      'Gagny est une ville résidentielle et verte, dominée par les pavillons, avec un centre animé autour de la gare RER E et quelques résidences vers le Chénay et l’Abbesse. Les maisons y ont souvent plusieurs accès : entrée, garage, jardin.',
    districts: [
      'Centre-ville',
      'Gare de Gagny',
      'Le Chénay',
      'Abbesse',
      'Maison-Blanche',
      'Lac de Maison-Rouge',
    ],
    housing: ['pavillons', 'recent'],
    focus:
      'Changement de serrure de porte d’entrée, sécurisation des portes de garage et de service, cylindres à clés protégées pour éviter les doubles non autorisés. Après un cambriolage, mise en sécurité provisoire le jour même.',
    details:
      'Gagny compte beaucoup de maisons avec portail, porte d’entrée, garage et abri de jardin. Multiplier les clés différentes complique la vie et augmente les risques en cas de perte. Une combinaison de cylindres s’ouvrant avec la même clé simplifie l’usage tout en gardant un bon niveau de sécurité.',
  },
  'les-pavillons-sous-bois': {
    intro:
      'Comme son nom l’indique, Les Pavillons-sous-Bois est presque entièrement pavillonnaire, avec quelques petites copropriétés le long de l’ex-RN3. La commune touche Bondy et Aulnay-sous-Bois.',
    districts: ['Centre-ville', 'Ex-RN3', 'Canal de l’Ourcq', 'Mairie'],
    housing: ['pavillons'],
    focus:
      'Presque toutes nos interventions y concernent des maisons : porte d’entrée à sécuriser, serrure 5 points pour une porte exposée, cylindre à changer après la perte d’un trousseau. Nous vérifions aussi la porte de garage communicante, souvent oubliée.',
    details:
      'Ici, les maisons sont souvent mitoyennes ou proches les unes des autres, avec un jardin à l’arrière. Les portes-fenêtres et portes de service côté jardin, moins visibles depuis la rue, méritent la même attention que l’entrée. Nous conseillons des verrous complémentaires et des cylindres anti-crochetage sur ces accès.',
  },
  'paris-19': {
    intro:
      'Le 19e arrondissement va des Buttes-Chaumont au bassin de la Villette, avec des immeubles haussmanniens, des villas pavillonnaires de la Mouzaïa et de grands ensembles vers la Porte de Pantin et Flandre. C’est l’un des arrondissements les plus contrastés de Paris.',
    districts: [
      'Buttes-Chaumont',
      'Bassin de la Villette',
      'Mouzaïa',
      'Belleville',
      'Flandre',
      'Porte de Pantin',
    ],
    housing: ['haussmannien', 'grands-ensembles', 'faubourien'],
    focus:
      'Portes palières anciennes à blinder près des Buttes-Chaumont, portes de maisons de la Mouzaïa à sécuriser, parties communes de grandes résidences pour les bailleurs. Nous intervenons aussi sur les portes de caves souvent visées dans les immeubles anciens.',
    details:
      'Dans les villas de la Mouzaïa, les maisons sont petites et anciennes, avec des portes d’entrée en bois donnant directement sur des ruelles pavées. Le blindage doit rester discret pour respecter le caractère du quartier. Autour du bassin de la Villette, les immeubles plus récents ont des portes blindées dont il suffit souvent de changer le cylindre.',
  },
  'joinville-le-pont': {
    intro:
      'Joinville-le-Pont, entre le bois de Vincennes et la boucle de la Marne, mêle maisons, résidences récentes au bord de l’eau et quelques immeubles anciens près de la gare RER A. L’île Fanac et les quais donnent à la ville un caractère très résidentiel.',
    districts: [
      'Centre-ville',
      'Gare de Joinville-le-Pont',
      'Île Fanac',
      'Quai de la Marne',
      'Polangis',
      'Palissy',
    ],
    housing: ['pavillons', 'recent'],
    focus:
      'Les copropriétés récentes nous appellent pour des portes claquées et des changements de cylindres ; les maisons de Polangis et Palissy pour renforcer une porte d’entrée ou remplacer une serrure fatiguée.',
    details:
      'Les résidences en bord de Marne ont souvent des parkings et des caves en sous-sol, accessibles par des portes métalliques. Ces portes de parties communes sont régulièrement forcées : nous proposons des serrures renforcées et des ferme-portes adaptés. Côté maisons, les quartiers de Polangis et Palissy concentrent des demandes de serrures multipoints.',
  },
  drancy: {
    intro:
      'Drancy, l’une des villes les plus peuplées du département, combine de vastes quartiers pavillonnaires et des cités d’habitat social comme l’Économie ou les Oiseaux. Le centre s’est densifié autour de l’avenue Henri-Barbusse et du Drancy-Avenir.',
    districts: ['Centre-ville', 'Avenir', 'Économie', 'Les Oiseaux', 'Village Parisien'],
    housing: ['pavillons', 'grands-ensembles'],
    focus:
      'Côté pavillons : remplacement de serrures, renforcement de portes après tentative d’effraction. Côté bailleurs : parties communes, portes de caves, remise en état des serrures entre deux locations.',
    details:
      'Drancy alterne grands quartiers pavillonnaires et ensembles d’habitat social, avec des besoins très différents. Pour une maison, nous visons la résistance à l’effraction ; pour une résidence de bailleur, la robustesse et la facilité de gestion des clés. Nous conseillons chaque client selon son type de bien, pas avec une solution unique.',
  },
  'paris-12': {
    intro:
      'Du faubourg Saint-Antoine à Bercy et à la Porte Dorée, le 12e arrondissement mêle immeubles haussmanniens, cours d’artisans du Faubourg, résidences des années 1970 et immeubles récents de Bercy. Le cours de Vincennes et l’avenue Daumesnil en sont les grands axes.',
    districts: [
      'Faubourg Saint-Antoine',
      'Aligre',
      'Daumesnil',
      'Bel-Air',
      'Picpus',
      'Bercy',
      'Porte Dorée',
    ],
    housing: ['haussmannien', 'faubourien', 'recent'],
    focus:
      'Portes palières anciennes dans les immeubles du Faubourg et de Daumesnil, souvent avec une serrure en applique d’origine ; portes blindées d’origine dans les résidences plus récentes, dont il faut remplacer le cylindre. Nous travaillons aussi pour les syndics sur les portes cochères et de caves.',
    details:
      'Autour du marché d’Aligre et du Faubourg Saint-Antoine, de nombreux immeubles abritent encore des cours d’anciens ateliers d’ébénistes, avec des portes de cour donnant sur la rue. Pour les syndics, nous sécurisons ces accès communs. Vers Bercy et la Porte Dorée, les immeubles plus récents ont des portes blindées d’origine à mettre à niveau.',
  },
  pantin: {
    intro:
      'Pantin a beaucoup changé : anciens entrepôts et usines le long du canal de l’Ourcq devenus bureaux et logements, centre-ville faubourien autour de l’église, quartiers des Courtillières et des Quatre-Chemins. On y trouve des portes de toutes les époques.',
    districts: [
      'Centre-ville',
      'Canal de l’Ourcq',
      'Quatre-Chemins',
      'Courtillières',
      'Hoche',
      'Église de Pantin',
    ],
    housing: ['faubourien', 'recent', 'grands-ensembles'],
    focus:
      'Logements dans d’anciens bâtiments industriels avec portes atypiques, copropriétés neuves en bord de canal, immeubles anciens des Quatre-Chemins : nous adaptons la solution à chaque porte. Les entreprises installées à Pantin nous confient aussi leurs organigrammes de clés.',
    details:
      'Les lofts aménagés dans d’anciens entrepôts ont parfois des portes atypiques : grandes portes métalliques, portes coulissantes, accès sur cour. Nous adaptons des serrures et cylindres compatibles, sans dénaturer le lieu. Pour les sociétés installées le long du canal, nous mettons en place des organigrammes gérant bureaux, réserves et locaux techniques.',
  },
  'paris-11': {
    intro:
      'Le 11e est l’un des arrondissements les plus denses de Paris : immeubles haussmanniens autour de République et Voltaire, immeubles de faubourg et passages autour d’Oberkampf, de la rue de la Roquette et du Faubourg Saint-Antoine.',
    districts: [
      'Oberkampf',
      'Roquette',
      'Folie-Méricourt',
      'Sainte-Marguerite',
      'Voltaire',
      'Bastille',
    ],
    housing: ['haussmannien', 'faubourien'],
    focus:
      'Beaucoup de petits logements en étage avec des portes palières anciennes, peu résistantes : blindage, cylindre de haute sécurité ou serrure multipoints selon le budget. Les portes de cours et de caves des immeubles de faubourg sont aussi des points faibles que nous traitons pour les syndics.',
    details:
      'Le 11e compte beaucoup de petits logements loués, meublés ou non, où les clés changent souvent de mains. Changer le cylindre entre deux locataires est la seule façon d’être sûr qu’aucune ancienne clé ne circule. Avec un cylindre à clés protégées, le propriétaire garde la carte et contrôle les doubles.',
  },
  'champigny-sur-marne': {
    intro:
      'Champigny-sur-Marne, vaste commune en bord de Marne, est majoritairement pavillonnaire avec de grands quartiers d’habitat collectif comme le Bois-l’Abbé ou les Mordacs. Le centre et le quartier de Cœuilly ont un caractère de petite ville.',
    districts: ['Centre-ville', 'Cœuilly', 'Bois-l’Abbé', 'Mordacs', 'Tremblay', 'Bords de Marne'],
    housing: ['pavillons', 'grands-ensembles'],
    focus:
      'Portes d’entrée de maisons à sécuriser, serrures multipoints à remplacer, mises en sécurité après effraction pour les particuliers ; parties communes et logements vacants pour les bailleurs.',
    details:
      'Champigny est l’une des plus grandes communes du Val-de-Marne, avec des quartiers très différents : maisons des bords de Marne, pavillons de Cœuilly, grands ensembles du Bois-l’Abbé. Nous intervenons aussi bien pour les particuliers que pour les bailleurs, en adaptant le matériel à l’usage de chaque porte.',
  },
  'le-blanc-mesnil': {
    intro:
      'Au Blanc-Mesnil, de grands quartiers pavillonnaires entourent des ensembles d’habitat collectif comme les Tilleuls ou Les Quatre-Tours. La ville est bien reliée par l’A1, l’A3 et la RN2.',
    districts: [
      'Centre-ville',
      'Les Tilleuls',
      'Les Quatre-Tours',
      'Pierre-et-Marie-Curie',
      'Gare du Blanc-Mesnil',
    ],
    housing: ['pavillons', 'grands-ensembles'],
    focus:
      'Nous y intervenons surtout pour des maisons (serrure bloquée, clé perdue, renforcement de porte) et pour des bailleurs (portes de hall, caves, logements vacants à sécuriser).',
    details:
      'Les pavillons du Blanc-Mesnil, souvent construits dans l’entre-deux-guerres et les années 1950–1960, ont des portes d’entrée qui ont rarement été modernisées. Une serrure en applique multipoints, posée sur la porte existante, améliore beaucoup la sécurité pour un coût raisonnable.',
  },
  'clichy-sous-bois': {
    intro:
      'Clichy-sous-Bois, en lisière de la forêt de Bondy, combine un vieux bourg, des quartiers pavillonnaires et de grandes copropriétés en cours de rénovation, desservies depuis peu par le tramway T4.',
    districts: ['Vieux bourg', 'Forêt de Bondy', 'Bas-Clichy', 'Chêne-Pointu', 'Haut-Clichy'],
    housing: ['grands-ensembles', 'pavillons'],
    focus:
      'Les grandes copropriétés en rénovation ont besoin de portes et de serrures fiables pour les parties communes et les logements. Nous travaillons avec les syndics et gestionnaires, et intervenons aussi chez les particuliers des secteurs pavillonnaires.',
    details:
      'Les grandes copropriétés du Bas-Clichy font l’objet d’importants travaux de rénovation. Dans ce contexte, les syndics et administrateurs ont besoin d’un interlocuteur capable de sécuriser rapidement des logements vacants et de remettre en état les portes de parties communes, avec un compte-rendu pour chaque intervention.',
  },
  'livry-gargan': {
    intro:
      'Livry-Gargan est une grande ville pavillonnaire de l’est de la Seine-Saint-Denis, traversée par l’ex-RN3 et bordée par le parc de la Poudrerie et la forêt de Bondy. Quelques résidences se concentrent autour du centre et de la gare de Gargan.',
    districts: ['Centre-ville', 'Gargan', 'Jacob', 'Poudrerie', 'Forêt de Bondy', 'Ex-RN3'],
    housing: ['pavillons', 'recent'],
    focus:
      'Portes d’entrée de maisons, portes de garage et de service, cylindres à changer après une perte de clés ou un déménagement. Pour une maison exposée, nous proposons une serrure 5 points certifiée.',
    details:
      'À Livry-Gargan, beaucoup de maisons sont en retrait de la rue, derrière un portail et un jardin : un cambrioleur peut y travailler à l’abri des regards. La porte d’entrée doit donc résister plus longtemps. Nous recommandons dans ce cas une serrure certifiée A2P et un cylindre résistant au perçage et à l’arrachage.',
  },
  montfermeil: {
    intro:
      'Montfermeil, sur les hauteurs de l’est parisien, alterne vieux centre, maisons et grands ensembles comme les Bosquets, aujourd’hui largement rénovés. Le tramway T4 relie la ville à Clichy-sous-Bois et Bondy.',
    districts: ['Centre ancien', 'Les Bosquets', 'Franceville', 'Plateau', 'Moulin du Sempin'],
    housing: ['pavillons', 'grands-ensembles'],
    focus:
      'Mises en sécurité de maisons après effraction, changements de serrures, et pour les bailleurs, remise en état des portes de logements et des parties communes dans les résidences rénovées.',
    details:
      'Avec la rénovation des Bosquets et l’arrivée du tramway T4, de nombreux logements ont été reconstruits ou réhabilités. Les bailleurs nous confient la gestion des clés et cylindres lors des relogements et des mises en location. Dans le centre ancien, les maisons demandent plutôt des serrures de porte d’entrée.',
  },
  'neuilly-sur-marne': {
    intro:
      'Neuilly-sur-Marne s’étire le long de la Marne, entre maisons de bord d’eau, quartiers pavillonnaires, résidences et les anciens terrains de Ville-Évrard en reconversion. La ville est desservie par l’A4 et l’A86.',
    districts: [
      'Centre-ville',
      'Bords de Marne',
      'Ville-Évrard',
      'Les Fauvettes',
      'Bel-Air',
      'Haute-Île',
    ],
    housing: ['pavillons', 'grands-ensembles', 'recent'],
    focus:
      'Portes de maisons, portes palières de résidences, changements de cylindres et ouvertures de portes claquées : les demandes sont variées. Nous conseillons des cylindres anti-crochetage pour les portes donnant directement sur la rue.',
    details:
      'Les maisons proches de la Marne peuvent subir l’humidité : huisseries qui gonflent, serrures qui s’oxydent, portes qui frottent. Un entretien régulier et des pièces adaptées évitent les blocages. Nous réglons la porte avant de remplacer quoi que ce soit, et conseillons des cylindres résistants à la corrosion.',
  },
  'noisy-le-grand': {
    intro:
      'Noisy-le-Grand juxtapose le quartier d’affaires du Mont d’Est, les immeubles monumentaux d’Abraxas, les résidences des années 1980 et un vieux bourg entouré de pavillons. C’est une ville où l’on trouve aussi bien des bureaux que des maisons.',
    districts: ['Mont d’Est', 'Pavé-Neuf', 'Champy', 'Vieux Noisy', 'Marnois', 'Butte Verte'],
    housing: ['recent', 'locaux-pro', 'pavillons'],
    focus:
      'Bureaux et commerces du Mont d’Est (cylindres, organigrammes, portes de locaux techniques), copropriétés des années 1980 (portes palières, caves), pavillons du vieux Noisy (serrures de portes d’entrée).',
    details:
      'Les immeubles des années 1980 autour du Pavé-Neuf et de Champy arrivent à l’âge où les serrures d’origine fatiguent : clés qui tournent mal, cylindres usés, portes palières légères. C’est souvent le bon moment pour passer à un cylindre haute sécurité ou à un blindage complet de la porte.',
  },
  'maisons-alfort': {
    intro:
      'Maisons-Alfort, entre Seine et Marne, compte de nombreux immeubles des années 1930 à 1970, des maisons dans les quartiers de Charentonneau et des Juilliottes, et l’école vétérinaire au centre. La ville touche Charenton et Créteil.',
    districts: [
      'Centre-ville',
      'École vétérinaire',
      'Charentonneau',
      'Juilliottes',
      'Vert-de-Maisons',
      'Alfort',
    ],
    housing: ['recent', 'pavillons', 'haussmannien'],
    focus:
      'Portes palières de copropriétés à renforcer, cylindres à changer à l’arrivée de nouveaux occupants, serrures de maisons de Charentonneau. Pour les syndics, nous gérons aussi caves et locaux communs.',
    details:
      'Les immeubles des années 1930 à 1970 de Maisons-Alfort ont souvent des portes palières en bois plein, solides mais équipées de serrures d’époque. Nous les modernisons avec une serrure multipoints et un cylindre à clés protégées. Dans les quartiers de Charentonneau et des Juilliottes, les maisons demandent aussi des sécurisations de portes de service.',
  },
  aubervilliers: {
    intro:
      'Aubervilliers mêle habitat ancien autour de la mairie et des Quatre-Chemins, grands ensembles, entrepôts devenus bureaux et logements vers le Fort et le Millénaire. La ville se densifie autour des nouvelles stations de la ligne 12 et du futur Grand Paris Express.',
    districts: [
      'Centre-ville',
      'Quatre-Chemins',
      'Fort d’Aubervilliers',
      'Landy',
      'Villette',
      'Canal Saint-Denis',
    ],
    housing: ['faubourien', 'grands-ensembles', 'locaux-pro'],
    focus:
      'Immeubles anciens sans gardien où les portes de hall et de caves sont souvent forcées, logements à sécuriser pour les bailleurs, locaux d’activité à équiper de serrures robustes. Nous proposons des solutions adaptées à un usage intensif.',
    details:
      'Aubervilliers accueille de nombreux commerces de gros et locaux d’activité, souvent équipés de portes métalliques et de serrures soumises à rude épreuve. Nous proposons des serrures et cylindres renforcés, et des organigrammes pour limiter le nombre de clés en circulation entre les employés.',
  },
  'aulnay-sous-bois': {
    intro:
      'Aulnay-sous-Bois est coupée en deux par la voie ferrée : au sud, de vastes quartiers pavillonnaires et le vieux pays ; au nord, de grands quartiers d’habitat social comme la Rose-des-Vents. La ville est l’une des plus grandes du département.',
    districts: [
      'Vieux-Pays',
      'Centre-gare',
      'Rose-des-Vents',
      'Mitry-Ambourget',
      'Chanteloup',
      'Gros-Saule',
    ],
    housing: ['pavillons', 'grands-ensembles'],
    focus:
      'Au sud, des maisons dont il faut sécuriser l’entrée et les accès secondaires ; au nord, des résidences où les bailleurs nous confient portes de hall, caves et logements vacants.',
    details:
      'Au sud d’Aulnay, les pavillons du Vieux-Pays et de Chanteloup ont souvent de grandes parcelles avec garage et dépendances. Au nord, les résidences de bailleurs ont des parties communes très fréquentées. Nous intervenons des deux côtés, avec des solutions adaptées à chaque type de bâtiment.',
  },
  creteil: {
    intro:
      'Préfecture du Val-de-Marne, Créteil associe le vieux village, les ensembles du Mont-Mesly et du Palais, le lac et un grand centre commercial. Hôpitaux, université et administrations y emploient beaucoup de monde.',
    districts: ['Créteil Village', 'Mont-Mesly', 'Palais', 'Lac', 'Échat', 'Créteil Soleil'],
    housing: ['grands-ensembles', 'recent', 'locaux-pro'],
    focus:
      'Copropriétés et résidences des années 1960 à 1980 : portes palières, cylindres, caves. Bureaux et commerces : remplacements de serrures, organigrammes. Nous intervenons aussi dans les pavillons du village.',
    details:
      'Les ensembles des années 1960 à 1980 de Créteil, comme ceux du Mont-Mesly ou du Palais, ont des portes palières souvent d’origine. Pour les résidents, un cylindre de haute sécurité est une amélioration simple. Pour les syndics, nous traitons aussi les portes de caves, de locaux vélos et de parkings souterrains.',
  },
  'villiers-sur-marne': {
    intro:
      'Villiers-sur-Marne est une ville surtout pavillonnaire, avec des résidences autour de la gare RER E et du quartier des Hautes-Noues. La future gare du Grand Paris Express y accélère les constructions.',
    districts: [
      'Centre-ville',
      'Gare de Villiers-sur-Marne',
      'Hautes-Noues',
      'Bois Saint-Martin',
      'Marne-Europe',
    ],
    housing: ['pavillons', 'recent'],
    focus:
      'Maisons à sécuriser, serrures de portes d’entrée à remplacer, cylindres de copropriétés neuves à changer après l’emménagement. Après une tentative d’effraction, nous renforçons la porte dans la journée.',
    details:
      'Les lotissements de Villiers-sur-Marne regroupent souvent des maisons construites à la même époque, avec les mêmes portes et serrures. Quand une méthode d’effraction fonctionne sur l’une, elle fonctionne sur les voisines. Mettre à niveau sa serrure et son cylindre fait sortir votre maison de ce lot.',
  },
  'la-courneuve': {
    intro:
      'La Courneuve est connue pour son grand parc départemental Georges-Valbon et pour le quartier des 4000, en pleine rénovation. La ville compte aussi des quartiers pavillonnaires, un vieux centre et de nombreuses activités.',
    districts: [
      'Centre-ville',
      'Les 4000',
      'Quatre-Routes',
      'Parc Georges-Valbon',
      'Verlaine',
      'Six-Routes',
    ],
    housing: ['grands-ensembles', 'pavillons', 'locaux-pro'],
    focus:
      'Bailleurs et syndics pour les parties communes et logements vacants, entreprises pour leurs locaux d’activité, particuliers pour des maisons à sécuriser. Nous adaptons la robustesse des équipements à l’usage.',
    details:
      'Avec les grands chantiers de rénovation des 4000, beaucoup de logements changent d’occupants ou sont temporairement vacants. Les bailleurs ont besoin de sécuriser rapidement ces logements et de changer les cylindres à chaque attribution. Nous travaillons avec un suivi photo pour chaque porte.',
  },
  alfortville: {
    intro:
      'Alfortville, sur la presqu’île entre Seine et Marne, est une ville dense avec beaucoup de copropriétés des années 1960 à 2000, des tours en bord de Seine et un tissu de petites maisons dans les rues intérieures.',
    districts: [
      'Centre-ville',
      'Quais de Seine',
      'Chinagora',
      'Grand-Ensemble',
      'Gare de Maisons-Alfort–Alfortville',
    ],
    housing: ['recent', 'grands-ensembles', 'pavillons'],
    focus:
      'Portes palières de copropriétés, cylindres à remplacer, ouvertures de portes claquées : ce sont nos interventions les plus courantes. Pour les syndics, nous traitons aussi portes de caves et locaux vélos.',
    details:
      'Les tours et barres en bord de Seine ont des portes palières souvent remplacées au fil des années, avec des équipements très hétérogènes d’un étage à l’autre. Nous identifions la serrure et le cylindre en place avant d’intervenir, pour proposer une pièce compatible et éviter de changer la porte inutilement.',
  },
  'charenton-le-pont': {
    intro:
      'Charenton-le-Pont, aux portes du 12e arrondissement, est une ville dense et bourgeoise, avec des immeubles anciens, des résidences des années 1960–1970 et le quartier de Bercy-Charenton en bord de Seine.',
    districts: ['Centre-ville', 'Bercy', 'Quais de Seine', 'Bois de Vincennes'],
    housing: ['haussmannien', 'recent'],
    focus:
      'Blindages de portes palières, remplacements de cylindres de haute sécurité, serrures multipoints certifiées A2P. Nous respectons les finitions des halls et paliers exigées par les copropriétés.',
    details:
      'Les copropriétés de Charenton sont attentives à l’harmonie des paliers : couleur, poignées, finitions. Nos blindages et serrures sont proposés avec des habillages et coloris adaptés. Pour les résidents, un cylindre à clés protégées évite la copie de clés chez un cordonnier sans autorisation.',
  },
  'ivry-sur-seine': {
    intro:
      'Ivry-sur-Seine combine le centre-ville aux étonnants immeubles en étoile de Renaudie, des quartiers anciens et pavillonnaires, et le nouveau quartier d’Ivry-Confluences en bord de Seine. Les bureaux et ateliers y sont nombreux.',
    districts: [
      'Centre-ville',
      'Ivry-Confluences',
      'Ivry-Port',
      'Petit-Ivry',
      'Monmousseau',
      'Plateau',
    ],
    housing: ['grands-ensembles', 'recent', 'locaux-pro'],
    focus:
      'Copropriétés récentes d’Ivry-Confluences (cylindres, organigrammes, clés protégées), logements sociaux du centre (parties communes, logements vacants), locaux d’activité d’Ivry-Port (serrures robustes).',
    details:
      'Les immeubles en étoile du centre d’Ivry ont des circulations et des accès particuliers, avec de nombreuses portes donnant sur des coursives et terrasses. Chaque accès doit être pris en compte. Dans les nouveaux immeubles d’Ivry-Confluences, les demandes concernent surtout les clés protégées et les organigrammes de résidence.',
  },
  'paris-20': {
    intro:
      'Le 20e arrondissement, de Belleville à la Porte de Montreuil, est un arrondissement de collines et de ruelles. On y trouve des immeubles de faubourg, des villas et cités pavillonnaires (Campagne à Paris, Saint-Blaise), des immeubles haussmanniens autour de Gambetta et des résidences des années 1970.',
    districts: [
      'Belleville',
      'Ménilmontant',
      'Gambetta',
      'Père-Lachaise',
      'Saint-Blaise',
      'Campagne à Paris',
      'Porte de Montreuil',
    ],
    housing: ['faubourien', 'haussmannien', 'grands-ensembles'],
    focus:
      'Portes palières anciennes à renforcer, petites maisons des villas à sécuriser, parties communes des résidences pour les bailleurs. Les petites rues de Saint-Blaise et de la Campagne à Paris demandent souvent des solutions sur mesure.',
    details:
      'Dans les villas pavillonnaires du 20e, les maisons sont anciennes et souvent rénovées par étapes : la porte d’entrée a parfois été changée, mais pas la porte de service ou l’accès au jardin. Côté Belleville et Ménilmontant, les immeubles de faubourg demandent un renforcement des portes palières et des portes de caves.',
  },
  gonesse: {
    intro:
      'Gonesse, dans le Val-d’Oise, garde un vieux centre historique autour de l’église Saint-Pierre-Saint-Paul, entouré de quartiers pavillonnaires et de résidences comme la Fauconnière. La ville est reliée par l’A1 et l’A3.',
    districts: ['Vieux Gonesse', 'Fauconnière', 'Marronniers', 'Gare de Villiers-le-Bel–Gonesse'],
    housing: ['pavillons', 'grands-ensembles'],
    focus:
      'Maisons du centre et des quartiers résidentiels (serrures, renforcements de portes), résidences de bailleurs (parties communes, logements vacants). Nous intervenons sur rendez-vous ou en urgence selon la demande.',
    details:
      'Dans le vieux Gonesse, certaines maisons anciennes ont des portes en bois massif qu’il est préférable de conserver. Nous les renforçons avec des serrures en applique et des verrous complémentaires. Dans les quartiers plus récents, les demandes portent sur des cylindres et serrures de maisons de lotissement.',
  },
  'saint-denis': {
    intro:
      'Saint-Denis, autour de sa basilique, mêle centre ancien, grands ensembles, nouveaux quartiers de la Plaine Saint-Denis et du village olympique, et beaucoup d’entreprises. C’est l’une des villes les plus peuplées d’Île-de-France.',
    districts: [
      'Centre-ville',
      'Basilique',
      'Plaine Saint-Denis',
      'Pleyel',
      'Franc-Moisin',
      'Floréal',
    ],
    housing: ['faubourien', 'grands-ensembles', 'locaux-pro', 'recent'],
    focus:
      'Immeubles anciens du centre (portes de hall et palières à renforcer), résidences de bailleurs (parties communes, logements vacants), bureaux de la Plaine (cylindres, organigrammes), copropriétés neuves de Pleyel (clés protégées).',
    details:
      'Saint-Denis compte de nombreux immeubles anciens dans son centre historique, souvent sans gardien, où les portes de hall et de caves sont fortement sollicitées. Sur la Plaine et à Pleyel, les immeubles neufs et les bureaux utilisent des organigrammes et cylindres à clés protégées. Les besoins sont très différents d’un quartier à l’autre.',
  },
  'saint-maur-des-fosses': {
    intro:
      'Saint-Maur-des-Fossés, dans une boucle de la Marne, est une ville résidentielle où dominent les maisons bourgeoises et pavillons, avec des centres animés à La Varenne, au Parc et à Adamville. Les propriétés sont souvent grandes et bien entretenues.',
    districts: ['La Varenne', 'Le Parc', 'Adamville', 'Saint-Maur-Créteil', 'Champignol', 'La Pie'],
    housing: ['pavillons', 'haussmannien'],
    focus:
      'Maisons à sécuriser à un niveau élevé : serrures multipoints A2P, cylindres à clés protégées, blindage de porte ou bloc-porte blindé. Nous traitons aussi les accès secondaires (garage, service, véranda).',
    details:
      'À Saint-Maur, les maisons de La Varenne et du Parc ont souvent une grande valeur, ce qui justifie un niveau de protection élevé : bloc-porte blindé ou blindage complet, serrure A2P trois étoiles, cylindre à clés protégées. Nous pouvons aussi aligner les cylindres de toutes les portes sur une seule clé.',
  },
  'saint-ouen-sur-seine': {
    intro:
      'Saint-Ouen-sur-Seine, aux portes du 17e et du 18e, connue pour ses puces, s’est fortement transformée avec les Docks et le pôle Pleyel. Immeubles anciens, ateliers, résidences neuves et sièges sociaux s’y côtoient.',
    districts: [
      'Centre-ville',
      'Marché aux Puces',
      'Docks',
      'Vieux Saint-Ouen',
      'Garibaldi',
      'Pasteur',
    ],
    housing: ['recent', 'faubourien', 'locaux-pro'],
    focus:
      'Copropriétés neuves des Docks (cylindres, clés protégées), immeubles anciens du centre (portes palières, caves), boutiques et bureaux (serrures et organigrammes).',
    details:
      'Autour du marché aux puces, beaucoup de boutiques et dépôts ont des portes arrière et des réserves à sécuriser. Dans le quartier des Docks, les copropriétés récentes demandent surtout des cylindres de haute sécurité et des clés supplémentaires sur carte de propriété.',
  },
  sevran: {
    intro:
      'Sevran combine de grands quartiers pavillonnaires, des cités comme les Beaudottes et Rougemont, et le parc forestier de la Poudrerie. Deux gares RER B et la future ligne 16 desservent la ville.',
    districts: [
      'Centre-ville',
      'Freinville',
      'Beaudottes',
      'Rougemont',
      'Montceleux',
      'Parc de la Poudrerie',
    ],
    housing: ['pavillons', 'grands-ensembles'],
    focus:
      'Particuliers : clés perdues, serrures à remplacer, portes à renforcer. Bailleurs : portes de hall, caves et logements vacants. Nous adaptons la robustesse au niveau d’exposition.',
    details:
      'Les pavillons de Sevran, notamment vers Freinville et Montceleux, sont souvent des maisons des années 1920 à 1960 dont la porte d’entrée a peu évolué. Remplacer une serrure à un point par une serrure multipoints est une amélioration simple et efficace. Pour les bailleurs, nous gérons les parties communes des résidences.',
  },
  chelles: {
    intro:
      'Chelles, aux portes de la Seine-et-Marne, est une grande ville pavillonnaire avec un centre ancien autour de l’abbaye et des résidences vers la gare RER E et les Coudreaux.',
    districts: [
      'Centre-ville',
      'Abbaye',
      'Gare de Chelles-Gournay',
      'Coudreaux',
      'Chantereine',
      'Mont-Chalâts',
    ],
    housing: ['pavillons', 'recent', 'grands-ensembles'],
    focus:
      'Maisons à sécuriser, serrures 3 ou 5 points à remplacer, cylindres de copropriétés à changer.',
    details:
      'Chelles compte beaucoup de maisons familiales avec garage et jardin, ainsi que des résidences récentes autour de la gare. Pour les maisons, nous conseillons une serrure de porte d’entrée multipoints et la sécurisation de la porte de garage. Pour les copropriétés, nous intervenons sur les portes palières et parties communes.',
  },
  'paris-10': {
    intro:
      'Le 10e arrondissement, entre les gares du Nord et de l’Est, le canal Saint-Martin et le faubourg Saint-Denis, est fait d’immeubles haussmanniens et de faubourg, de cours et de passages, avec beaucoup de commerces et de petits bureaux.',
    districts: [
      'Canal Saint-Martin',
      'Gare du Nord',
      'Gare de l’Est',
      'Faubourg Saint-Denis',
      'Château-d’Eau',
      'Porte Saint-Martin',
    ],
    housing: ['haussmannien', 'faubourien', 'locaux-pro'],
    focus:
      'Portes palières anciennes à renforcer, portes cochères et portes de cours pour les syndics, serrures de boutiques et de bureaux. Les petites surfaces louées meublées nous demandent souvent des changements de cylindres entre deux occupants.',
    details:
      'Le 10e compte de nombreuses cours intérieures et passages couverts, avec des portes de cour donnant directement sur la rue. Pour les syndics, ces accès communs sont prioritaires. Les commerces des faubourgs Saint-Denis et Saint-Martin nous demandent aussi des serrures robustes pour leurs réserves et portes arrière.',
  },
  'paris-18': {
    intro:
      'Le 18e arrondissement, de Montmartre à la Goutte-d’Or et à la Porte de la Chapelle, offre une grande variété d’immeubles : anciens immeubles de faubourg, immeubles haussmanniens, villas et résidences plus récentes.',
    districts: [
      'Montmartre',
      'Abbesses',
      'Goutte-d’Or',
      'Jules-Joffrin',
      'La Chapelle',
      'Porte de Clignancourt',
    ],
    housing: ['haussmannien', 'faubourien', 'grands-ensembles'],
    focus:
      'Beaucoup de petits appartements en étage aux portes peu résistantes, souvent avec une serrure ancienne en applique : blindage, cylindre haute sécurité ou serrure multipoints. Pour les syndics, portes de hall, cours et caves.',
    details:
      'Sur la butte Montmartre, les immeubles sont anciens et les escaliers étroits : l’accès du matériel est parfois compliqué, ce qui oriente le choix vers un blindage de la porte existante plutôt qu’un bloc-porte complet. Côté Goutte-d’Or et La Chapelle, les syndics nous sollicitent pour les portes de hall et de caves.',
  },
  villepinte: {
    intro:
      'Villepinte, au nord-est de la Seine-Saint-Denis, associe de vastes quartiers pavillonnaires, des résidences comme la Haute-Bonne ou Fontaine-Mallet, et le parc des expositions Paris Nord. Les entreprises sont nombreuses vers Paris Nord 2.',
    districts: [
      'Vieux Pays',
      'Haute-Bonne',
      'Fontaine-Mallet',
      'Pasteur',
      'Parc des expositions',
      'Paris Nord 2',
    ],
    housing: ['pavillons', 'grands-ensembles', 'locaux-pro'],
    focus:
      'Maisons à sécuriser, résidences pour les bailleurs, locaux d’activité de Paris Nord 2 à équiper de serrures robustes et d’organigrammes.',
    details:
      'Villepinte associe maisons, résidences et une importante zone d’activité autour de Paris Nord 2. Les entreprises y ont souvent des locaux avec plusieurs accès (bureaux, entrepôts, quais) : un organigramme permet de donner à chacun uniquement les clés nécessaires.',
  },
  'bussy-saint-georges': {
    intro:
      'Bussy-Saint-Georges, ville nouvelle du secteur du Val de Bussy, s’est construite en grande partie depuis les années 1990 : résidences récentes, maisons de lotissement, et un quartier d’affaires près de la gare RER A.',
    districts: [
      'Centre-ville',
      'Gare de Bussy-Saint-Georges',
      'Sycomore',
      'Génitoy',
      'Lac de la Brosse',
    ],
    housing: ['recent', 'pavillons', 'locaux-pro'],
    focus:
      'Portes de maisons de lotissement souvent équipées de serrures standard à renforcer, copropriétés récentes avec cylindres européens à remplacer ou à passer sur clés protégées, bureaux du quartier de la gare.',
    details:
      'Dans une ville construite en grande partie récemment, les maisons de lotissement sont souvent équipées de portes d’entrée standard, avec des serrures d’entrée de gamme. Les remplacer par une serrure multipoints certifiée et un cylindre à clés protégées est une amélioration rapide, sans changer la porte.',
  },
  'paris-4': {
    intro:
      'Le 4e arrondissement, du Marais à l’île Saint-Louis et à l’Hôtel de Ville, compte de nombreux immeubles très anciens, souvent des XVIIe et XVIIIe siècles, avec portes cochères, cours et escaliers d’origine.',
    districts: [
      'Marais',
      'Île Saint-Louis',
      'Île de la Cité',
      'Saint-Paul',
      'Hôtel de Ville',
      'Arsenal',
    ],
    housing: ['haussmannien', 'faubourien', 'locaux-pro'],
    focus:
      'Portes anciennes en bois massif à renforcer sans les dénaturer, serrures en applique à remplacer ou doubler, portes cochères pour les syndics, boutiques du Marais. Nous privilégions des solutions discrètes compatibles avec le caractère patrimonial des immeubles.',
    details:
      'Dans le Marais et sur l’île Saint-Louis, les immeubles anciens ont parfois des portes et des serrures elles-mêmes anciennes, de grande qualité. Nous privilégions leur conservation : remise en état, doublage par un verrou de haute sécurité ou blindage invisible depuis le palier. Les boutiques du quartier demandent des serrures robustes et discrètes.',
  },
  'paris-13': {
    intro:
      'Le 13e arrondissement associe la Butte-aux-Cailles et ses petites maisons, les tours des Olympiades et du quartier asiatique, les immeubles haussmanniens des Gobelins et le quartier neuf de Paris Rive Gauche.',
    districts: [
      'Butte-aux-Cailles',
      'Gobelins',
      'Olympiades',
      'Place d’Italie',
      'Paris Rive Gauche',
      'Maison-Blanche',
    ],
    housing: ['grands-ensembles', 'haussmannien', 'recent'],
    focus:
      'Tours et grandes copropriétés (portes palières, caves, organigrammes pour les syndics), immeubles anciens des Gobelins (blindage de portes), immeubles neufs de Paris Rive Gauche (cylindres et clés protégées).',
    details:
      'Les tours des Olympiades et des grands ensembles du 13e ont des parties communes complexes : halls, ascenseurs, caves, parkings. Les syndics y gèrent de nombreuses clés ; un organigramme bien conçu simplifie cette gestion. À la Butte-aux-Cailles, les petites maisons demandent plutôt des serrures de porte d’entrée.',
  },
  'garges-les-gonesse': {
    intro:
      'Garges-lès-Gonesse, dans le Val-d’Oise, est structurée autour de grands ensembles en rénovation comme la Muette et Dame-Blanche, avec des quartiers pavillonnaires et un vieux village. La gare RER D relie la ville à Paris.',
    districts: ['Vieux Village', 'Dame-Blanche', 'La Muette', 'Lutèce', 'Gare de Garges-Sarcelles'],
    housing: ['grands-ensembles', 'pavillons'],
    focus:
      'Bailleurs et syndics : portes de hall, caves, logements vacants. Particuliers : serrures à remplacer, portes à renforcer après une tentative d’effraction.',
    details:
      'Avec la rénovation des quartiers de la Muette et de Dame-Blanche, les bailleurs ont besoin de sécuriser les logements lors des relogements et des remises en location. Nous assurons le changement des cylindres et la fermeture provisoire des logements vacants, avec un compte-rendu photo.',
  },
  'choisy-le-roi': {
    intro:
      'Choisy-le-Roi, en bord de Seine, associe un centre-ville ancien autour du parc de la mairie, des résidences des années 1960–1970 et des quartiers pavillonnaires vers les Gondoles et le Port.',
    districts: [
      'Centre-ville',
      'Parc de la Mairie',
      'Les Gondoles',
      'Le Port',
      'Briand-Pelloutier',
      'Quais de Seine',
    ],
    housing: ['recent', 'grands-ensembles', 'pavillons'],
    focus:
      'Portes palières de copropriétés, cylindres à changer, caves et locaux communs pour les syndics, serrures de maisons pour les particuliers.',
    details:
      'Les copropriétés des années 1960–1970 de Choisy-le-Roi ont souvent des portes palières d’origine, de faible résistance. Un blindage de la porte existante, avec cornières anti-pince et serrure multipoints, apporte une vraie amélioration. Dans le quartier des Gondoles, les maisons demandent des serrures de porte d’entrée.',
  },
  'le-plessis-trevise': {
    intro:
      'Au Plessis-Trévise, ville verte et résidentielle du Val-de-Marne, les pavillons et maisons sur grands terrains dominent, avec quelques petites résidences autour du centre et de l’avenue Ardouin.',
    districts: ['Centre-ville', 'Avenue Ardouin'],
    housing: ['pavillons'],
    focus:
      'Maisons isolées ou en retrait de la rue, à sécuriser sur tous leurs accès : porte d’entrée, garage, porte de service. Nous proposons des serrures multipoints certifiées et des cylindres à clés protégées.',
    details:
      'Au Plessis-Trévise, les maisons sont souvent entourées de jardins arborés, parfois en lisière de bois. Ces accès peu visibles depuis la rue appellent une protection renforcée de toutes les ouvertures. Nous proposons des serrures certifiées et des cylindres sur un même passe pour l’entrée, le garage et l’abri de jardin.',
  },
  'vitry-sur-seine': {
    intro:
      'Vitry-sur-Seine, grande ville du Val-de-Marne, mêle quartiers pavillonnaires, grands ensembles, zones d’activité le long de la Seine et un centre animé autour de la place Saint-Just et du MAC VAL.',
    districts: [
      'Centre-ville',
      'Place Saint-Just',
      'Port-à-l’Anglais',
      'Plateau',
      'Balzac',
      'Ardoines',
    ],
    housing: ['pavillons', 'grands-ensembles', 'locaux-pro'],
    focus:
      'Maisons à sécuriser, résidences pour les bailleurs (parties communes, logements vacants), entreprises des Ardoines (serrures robustes et organigrammes).',
    details:
      'Vitry est l’une des communes les plus peuplées du Val-de-Marne, avec des quartiers pavillonnaires étendus, de grands ensembles et une vaste zone d’activité aux Ardoines. Particuliers, bailleurs et entreprises nous sollicitent pour des besoins très différents, auxquels nous adaptons le matériel.',
  },
  stains: {
    intro:
      'Stains est connue pour sa cité-jardin des années 1920–1930, l’une des plus remarquables d’Île-de-France, entourée de grands ensembles comme le Clos Saint-Lazare et de quartiers pavillonnaires.',
    districts: ['Cité-jardin', 'Clos Saint-Lazare', 'Centre-ville', 'Moulin-Neuf', 'Avenir'],
    housing: ['grands-ensembles', 'pavillons'],
    focus:
      'Logements de bailleurs (portes palières, cylindres entre deux locations, parties communes), maisons de la cité-jardin et des quartiers pavillonnaires (serrures et renforcement de portes).',
    details:
      'Les maisons et petits immeubles de la cité-jardin de Stains ont un caractère architectural à préserver : portes, menuiseries et façades ont été pensées comme un ensemble. Nous privilégions des renforcements discrets. Dans les grandes résidences, nous intervenons pour les bailleurs sur les portes palières et les parties communes.',
  },
  'champs-sur-marne': {
    intro:
      'Champs-sur-Marne, connue pour son château et pour la cité Descartes, pôle universitaire et de recherche, combine un vieux bourg, des quartiers pavillonnaires et des résidences étudiantes et récentes.',
    districts: ['Vieux bourg', 'Château de Champs', 'Cité Descartes', 'Bois de Grâce'],
    housing: ['pavillons', 'recent', 'locaux-pro'],
    focus:
      'Maisons du bourg et des lotissements (serrures, renforcements), résidences récentes (cylindres, clés protégées), locaux de la cité Descartes (organigrammes et portes de locaux techniques).',
    details:
      'La présence de l’université et des écoles de la cité Descartes entraîne de nombreux logements étudiants, où les occupants changent chaque année. Changer le cylindre entre deux locataires est indispensable. Pour les établissements et laboratoires, nous gérons des organigrammes avec des niveaux d’accès différents.',
  },
  'pontault-combault': {
    intro:
      'Pontault-Combault, au nord de la Seine-et-Marne, est une ville résidentielle avec un très grand nombre de pavillons, quelques résidences autour du centre et de la gare RER E Émerainville–Pontault-Combault, et des zones commerciales le long de la RN4.',
    districts: [
      'Centre-ville',
      'Combault',
      'Pontault',
      'Gare d’Émerainville–Pontault-Combault',
      'RN4',
    ],
    housing: ['pavillons', 'recent'],
    focus:
      'Maisons à sécuriser, remplacements de serrures de portes d’entrée, cylindres à changer après une perte de clés.',
    details:
      'La ville compte de très nombreuses maisons individuelles, souvent construites dans les années 1970 à 1990, dont les portes d’entrée sont d’origine. Une serrure multipoints et un cylindre anti-crochetage améliorent nettement la sécurité. Pour les commerces le long de la RN4, nous intervenons aussi sur les portes de réserves.',
  },
  villeparisis: {
    intro:
      'Villeparisis, en limite de la Seine-Saint-Denis et de la Seine-et-Marne, est une ville très pavillonnaire, avec un centre commerçant, la gare RER B Villeparisis–Mitry-le-Neuf et quelques résidences récentes.',
    districts: ['Centre-ville', 'Gare de Villeparisis–Mitry-le-Neuf', 'Canal de l’Ourcq'],
    housing: ['pavillons', 'recent'],
    focus:
      'Portes d’entrée de maisons, portes de garage communicantes et portes de service : nous sécurisons l’ensemble des accès et remplaçons les serrures usées.',
    details:
      'À Villeparisis, la plupart des maisons ont un garage intégré ou attenant, communiquant avec l’intérieur. C’est souvent l’accès le plus faible de la maison. Nous sécurisons cette porte communicante, ainsi que les portes de service, avec des serrures et verrous adaptés.',
  },
  'paris-3': {
    intro:
      'Le 3e arrondissement, le Haut-Marais, est composé d’immeubles anciens, d’hôtels particuliers et d’anciens ateliers devenus logements, galeries ou boutiques, autour des Arts-et-Métiers, du Temple et de la rue de Bretagne.',
    districts: [
      'Haut-Marais',
      'Arts-et-Métiers',
      'Temple',
      'Enfants-Rouges',
      'Rue de Bretagne',
      'Archives',
    ],
    housing: ['faubourien', 'haussmannien', 'locaux-pro'],
    focus:
      'Portes anciennes à renforcer avec discrétion, portes de cours et cochères pour les syndics, ateliers et boutiques à équiper de serrures et cylindres de haute sécurité.',
    details:
      'Dans le Haut-Marais, les hôtels particuliers et immeubles anciens ont souvent des portes cochères monumentales et des cours partagées entre plusieurs bâtiments. La gestion des clés entre copropriétaires, commerces et ateliers devient vite complexe : un organigramme permet de donner à chacun les bons accès.',
  },
};

// Advice block shown on a city page for each housing type it lists.
export const housingAdvice: Record<Housing, { title: string; text: string }> = {
  pavillons: {
    title: 'Maisons et pavillons',
    text: 'Une maison a souvent plusieurs accès : porte d’entrée, garage communicant, porte de service, baie vitrée. Nous sécurisons d’abord le point le plus faible. Sur une porte d’entrée exposée, une serrure 5 points certifiée A2P et un cylindre anti-crochetage sont un bon standard.',
  },
  haussmannien: {
    title: 'Immeubles anciens et haussmanniens',
    text: 'Les portes palières en bois massif, souvent avec une serrure en applique d’origine, résistent mal à l’effraction. Le blindage de la porte existante, avec un habillage qui respecte les moulures, conserve l’aspect côté palier et satisfait le règlement de copropriété.',
  },
  faubourien: {
    title: 'Immeubles de faubourg et anciens ateliers',
    text: 'Portes légères, cours accessibles depuis la rue, portes de caves en bois : ces immeubles cumulent les points faibles. Nous renforçons les portes palières et remplaçons les serrures des parties communes par des modèles adaptés à un usage intensif.',
  },
  'grands-ensembles': {
    title: 'Résidences et logements de bailleurs',
    text: 'Pour les bailleurs et gestionnaires : changement de cylindre entre deux locataires, sécurisation des logements vacants, portes de hall, de caves et de locaux techniques. Compte-rendu photo après chaque intervention.',
  },
  recent: {
    title: 'Copropriétés récentes',
    text: 'Les portes palières sont souvent blindées d’origine, mais le cylindre fourni est standard. Le remplacer par un cylindre de haute sécurité à clés protégées sur carte de propriété empêche la copie des clés sans votre accord.',
  },
  'locaux-pro': {
    title: 'Bureaux, commerces et locaux d’activité',
    text: 'Cylindres à changer au départ d’un collaborateur, organigrammes pour gérer les accès de plusieurs portes avec un nombre limité de clés, portes de locaux techniques et de réserves : nous intervenons en dehors de vos horaires d’ouverture si besoin.',
  },
};
