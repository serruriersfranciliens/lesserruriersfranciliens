import { cityFacts, type CityFacts } from './city-facts';
import { cityTexts, type CityText } from './city-texts';

export type City = CityFacts & CityText & { path: string };

export const departmentNames: Record<string, string> = {
  '75': 'Paris',
  '77': 'Seine-et-Marne',
  '91': 'Essonne',
  '92': 'Hauts-de-Seine',
  '93': 'Seine-Saint-Denis',
  '94': 'Val-de-Marne',
  '95': 'Val-d’Oise',
};

export const cityPath = (slug: string) => `/serrurier-${slug}`;

export const cities: City[] = cityFacts.map((facts) => {
  const text = cityTexts[facts.slug];
  if (!text) throw new Error(`Missing local text for city "${facts.slug}" in city-texts.ts`);
  return { ...facts, ...text, path: cityPath(facts.slug) };
});

const toRad = (deg: number) => (deg * Math.PI) / 180;

function distanceKm(a: City, b: City) {
  const dLat = toRad(b.lat - a.lat);
  const dLon = toRad(b.lon - a.lon);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLon / 2) ** 2;
  return 2 * 6371 * Math.asin(Math.sqrt(h));
}

/** The closest other city pages, for internal links. */
export function nearbyCities(city: City, count = 5): City[] {
  return cities
    .filter((c) => c.slug !== city.slug)
    .sort((a, b) => distanceKm(city, a) - distanceKm(city, b))
    .slice(0, count);
}
