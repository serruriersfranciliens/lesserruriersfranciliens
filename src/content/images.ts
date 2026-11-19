// Image slots. Each slot's image is public/images/<id>.webp.
// Set `src` to undefined on a slot to show the labelled placeholder instead.
// Prompts for each slot: build_docs/images-prompts.md

export type ImageSlot = {
  id: string;
  alt: string;
  ratio: string; // CSS aspect-ratio
  hint: string; // shown inside the placeholder
  src?: string;
};

const slot = (id: string, ratio: string, alt: string, hint: string): ImageSlot => ({
  id,
  ratio,
  alt,
  hint,
  src: `/images/${id}.webp`,
});

export const images = {
  hero: slot(
    'hero',
    '4 / 3',
    'Serrurier posant une serrure multipoints sur une porte d’immeuble parisien',
    'Artisan au travail sur une porte d’immeuble haussmannien',
  ),
  parcoursPro: slot(
    'parcours-pro',
    '4 / 3',
    'Hall d’entrée d’un immeuble parisien',
    'Hall d’immeuble / porte d’entrée de copropriété',
  ),
  parcoursParticulier: slot(
    'parcours-particulier',
    '4 / 3',
    'Porte palière d’appartement',
    'Porte palière d’appartement',
  ),
  depannage: slot(
    'competence-depannage',
    '4 / 3',
    'Ouverture de porte sans dégât',
    'Ouverture de porte, outils de crochetage',
  ),
  serrures: slot(
    'competence-serrures',
    '4 / 3',
    'Cylindre de haute sécurité et serrure multipoints',
    'Gros plan cylindre / serrure multipoints',
  ),
  blindage: slot(
    'competence-blindage',
    '4 / 3',
    'Porte blindée installée dans un appartement',
    'Porte blindée posée, finition soignée',
  ),
  syndics: slot(
    'pro-syndics',
    '4 / 3',
    'Porte d’entrée et boîtes aux lettres d’une copropriété',
    'Parties communes : porte d’immeuble, boîtes aux lettres',
  ),
  bailleurs: slot(
    'pro-bailleurs',
    '4 / 3',
    'Trousseau de clés étiquetées pour la gestion locative',
    'Trousseau de clés étiquetées / logement vacant',
  ),
  entreprise: slot(
    'entreprise-atelier',
    '16 / 9',
    'Établi de serrurier avec cylindres et outillage',
    'Atelier / outillage (idéalement vraie photo de l’équipe)',
  ),
} satisfies Record<string, ImageSlot>;
