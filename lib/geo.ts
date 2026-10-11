// Curated Utah communities used for geographic navigation pages.
// These records describe cities and counties only. They intentionally contain
// no business-location, distance, drive-time, or availability claims.

export type City = {
  name: string;
  slug: string;
  county: "Salt Lake" | "Davis" | "Weber" | "Utah";
  lat: number;
  lng: number;
};

export const UTAH_COUNTIES = [
  "Beaver County",
  "Box Elder County",
  "Cache County",
  "Carbon County",
  "Daggett County",
  "Davis County",
  "Duchesne County",
  "Emery County",
  "Garfield County",
  "Grand County",
  "Iron County",
  "Juab County",
  "Kane County",
  "Millard County",
  "Morgan County",
  "Piute County",
  "Rich County",
  "Salt Lake County",
  "San Juan County",
  "Sanpete County",
  "Sevier County",
  "Summit County",
  "Tooele County",
  "Uintah County",
  "Utah County",
  "Wasatch County",
  "Washington County",
  "Wayne County",
  "Weber County",
] as const;

export const cities: City[] = [
  { name: "Salt Lake City", slug: "salt-lake-city", county: "Salt Lake", lat: 40.7608, lng: -111.891 },
  { name: "Murray", slug: "murray", county: "Salt Lake", lat: 40.6669, lng: -111.888 },
  { name: "Sandy", slug: "sandy", county: "Salt Lake", lat: 40.5649, lng: -111.839 },
  { name: "West Jordan", slug: "west-jordan", county: "Salt Lake", lat: 40.6097, lng: -111.9391 },
  { name: "South Jordan", slug: "south-jordan", county: "Salt Lake", lat: 40.5622, lng: -111.9297 },
  { name: "West Valley City", slug: "west-valley-city", county: "Salt Lake", lat: 40.6916, lng: -112.0011 },
  { name: "Taylorsville", slug: "taylorsville", county: "Salt Lake", lat: 40.6677, lng: -111.9388 },
  { name: "Midvale", slug: "midvale", county: "Salt Lake", lat: 40.6111, lng: -111.8994 },
  { name: "Draper", slug: "draper", county: "Salt Lake", lat: 40.5247, lng: -111.8638 },
  { name: "Cottonwood Heights", slug: "cottonwood-heights", county: "Salt Lake", lat: 40.6197, lng: -111.8102 },
  { name: "Holladay", slug: "holladay", county: "Salt Lake", lat: 40.6688, lng: -111.8247 },
  { name: "Millcreek", slug: "millcreek", county: "Salt Lake", lat: 40.6869, lng: -111.8752 },
  { name: "Riverton", slug: "riverton", county: "Salt Lake", lat: 40.5219, lng: -111.9391 },
  { name: "Herriman", slug: "herriman", county: "Salt Lake", lat: 40.5141, lng: -112.0329 },
  { name: "Bluffdale", slug: "bluffdale", county: "Salt Lake", lat: 40.4894, lng: -111.9388 },
  { name: "Kearns", slug: "kearns", county: "Salt Lake", lat: 40.66, lng: -111.9963 },
  { name: "Magna", slug: "magna", county: "Salt Lake", lat: 40.7091, lng: -112.1016 },
  { name: "South Salt Lake", slug: "south-salt-lake", county: "Salt Lake", lat: 40.7089, lng: -111.8883 },
  { name: "Layton", slug: "layton", county: "Davis", lat: 41.0602, lng: -111.9711 },
  { name: "Kaysville", slug: "kaysville", county: "Davis", lat: 41.035, lng: -111.9385 },
  { name: "Farmington", slug: "farmington", county: "Davis", lat: 40.9805, lng: -111.887 },
  { name: "Bountiful", slug: "bountiful", county: "Davis", lat: 40.8894, lng: -111.8808 },
  { name: "Centerville", slug: "centerville", county: "Davis", lat: 40.918, lng: -111.8722 },
  { name: "Clearfield", slug: "clearfield", county: "Davis", lat: 41.1108, lng: -112.0261 },
  { name: "Clinton", slug: "clinton", county: "Davis", lat: 41.1397, lng: -112.0505 },
  { name: "Syracuse", slug: "syracuse", county: "Davis", lat: 41.089, lng: -112.0647 },
  { name: "Woods Cross", slug: "woods-cross", county: "Davis", lat: 40.8716, lng: -111.8922 },
  { name: "North Salt Lake", slug: "north-salt-lake", county: "Davis", lat: 40.8485, lng: -111.9069 },
  { name: "Fruit Heights", slug: "fruit-heights", county: "Davis", lat: 41.0322, lng: -111.9016 },
  { name: "Ogden", slug: "ogden", county: "Weber", lat: 41.223, lng: -111.9738 },
  { name: "South Ogden", slug: "south-ogden", county: "Weber", lat: 41.1866, lng: -111.9722 },
  { name: "Roy", slug: "roy", county: "Weber", lat: 41.1616, lng: -112.0263 },
  { name: "Riverdale", slug: "riverdale", county: "Weber", lat: 41.1758, lng: -112.001 },
  { name: "Lehi", slug: "lehi", county: "Utah", lat: 40.3916, lng: -111.8508 },
  { name: "American Fork", slug: "american-fork", county: "Utah", lat: 40.3769, lng: -111.7958 },
  { name: "Pleasant Grove", slug: "pleasant-grove", county: "Utah", lat: 40.3641, lng: -111.7385 },
  { name: "Saratoga Springs", slug: "saratoga-springs", county: "Utah", lat: 40.3489, lng: -111.9047 },
  { name: "Eagle Mountain", slug: "eagle-mountain", county: "Utah", lat: 40.3141, lng: -112.0069 },
  { name: "Orem", slug: "orem", county: "Utah", lat: 40.2969, lng: -111.6946 },
  { name: "Provo", slug: "provo", county: "Utah", lat: 40.2338, lng: -111.6585 },
];

export const CITY_SLUGS: string[] = cities.map((city) => city.slug);

export function getCity(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug);
}

export const COUNTY_ORDER: City["county"][] = ["Salt Lake", "Davis", "Weber", "Utah"];

export function citiesByCounty(): { county: City["county"]; cities: City[] }[] {
  return COUNTY_ORDER.map((county) => ({
    county,
    cities: cities.filter((city) => city.county === county),
  })).filter((group) => group.cities.length > 0);
}

export function cityServiceSummary(city: City): string {
  return `${city.name} is a ${city.county} County community. Clinical and Professional Solutions offers statewide navigation guidance to help residents explore health, home, business, legal, financial, family, education, career, senior, technology, and local-resource categories, compare practical options, and prepare for a productive conversation with an appropriate organization.`;
}

// Neighboring-community links are based only on geographic proximity.
export function neighborCities(slug: string, count = 6): City[] {
  const city = getCity(slug);
  if (!city) return [];

  return cities
    .filter((candidate) => candidate.slug !== slug)
    .map((candidate) => ({
      city: candidate,
      distance: Math.hypot(candidate.lat - city.lat, candidate.lng - city.lng),
      sameCounty: candidate.county === city.county ? 0 : 1,
    }))
    .sort((a, b) => a.sameCounty - b.sameCounty || a.distance - b.distance)
    .slice(0, count)
    .map(({ city: candidate }) => candidate);
}
