// Curated Wasatch Front service-area cities for local SEO / GEO.
// nearestOffice maps to a location id in lib/data.ts (slc | layton | west-jordan).
// distanceMiles / driveTimeMin are reasonable real-world estimates to the nearest office.
// Never invent reviews or stats — these are geographic facts only.

export type OfficeId = "slc" | "layton" | "west-jordan";

export type City = {
  name: string;
  slug: string;
  county: "Salt Lake" | "Davis" | "Weber" | "Utah";
  lat: number;
  lng: number;
  nearestOffice: OfficeId;
  distanceMiles: number;
  driveTimeMin: number;
  blurb: string;
};

export const cities: City[] = [
  // ── Salt Lake County ──
  {
    name: "Salt Lake City",
    slug: "salt-lake-city",
    county: "Salt Lake",
    lat: 40.7608,
    lng: -111.891,
    nearestOffice: "slc",
    distanceMiles: 3,
    driveTimeMin: 8,
    blurb:
      "Utah's capital and largest city, home to our flagship CPS office near Sugar House on 3300 South.",
  },
  {
    name: "Murray",
    slug: "murray",
    county: "Salt Lake",
    lat: 40.6669,
    lng: -111.888,
    nearestOffice: "slc",
    distanceMiles: 5,
    driveTimeMin: 11,
    blurb:
      "A central valley hub just south of our Salt Lake City office, easy to reach from I-15 and State Street.",
  },
  {
    name: "Sandy",
    slug: "sandy",
    county: "Salt Lake",
    lat: 40.5649,
    lng: -111.839,
    nearestOffice: "west-jordan",
    distanceMiles: 7,
    driveTimeMin: 15,
    blurb:
      "A family-focused southeast valley city minutes from both our West Jordan and Salt Lake City offices.",
  },
  {
    name: "West Jordan",
    slug: "west-jordan",
    county: "Salt Lake",
    lat: 40.6097,
    lng: -111.9391,
    nearestOffice: "west-jordan",
    distanceMiles: 1,
    driveTimeMin: 4,
    blurb:
      "Home to our West Jordan office on South 1300 West, serving the fast-growing southwest valley.",
  },
  {
    name: "South Jordan",
    slug: "south-jordan",
    county: "Salt Lake",
    lat: 40.5622,
    lng: -111.9297,
    nearestOffice: "west-jordan",
    distanceMiles: 4,
    driveTimeMin: 9,
    blurb:
      "A rapidly growing city near Daybreak, just south of our West Jordan office.",
  },
  {
    name: "West Valley City",
    slug: "west-valley-city",
    county: "Salt Lake",
    lat: 40.6916,
    lng: -112.0011,
    nearestOffice: "west-jordan",
    distanceMiles: 6,
    driveTimeMin: 13,
    blurb:
      "Utah's second-largest city, a short drive north of our West Jordan office.",
  },
  {
    name: "Taylorsville",
    slug: "taylorsville",
    county: "Salt Lake",
    lat: 40.6677,
    lng: -111.9388,
    nearestOffice: "west-jordan",
    distanceMiles: 5,
    driveTimeMin: 11,
    blurb:
      "A central valley community sitting between our West Jordan and Salt Lake City offices.",
  },
  {
    name: "Midvale",
    slug: "midvale",
    county: "Salt Lake",
    lat: 40.6111,
    lng: -111.8994,
    nearestOffice: "west-jordan",
    distanceMiles: 5,
    driveTimeMin: 12,
    blurb:
      "A historic valley crossroads with quick access to I-15 and both south-valley offices.",
  },
  {
    name: "Draper",
    slug: "draper",
    county: "Salt Lake",
    lat: 40.5247,
    lng: -111.8638,
    nearestOffice: "west-jordan",
    distanceMiles: 9,
    driveTimeMin: 16,
    blurb:
      "A southern valley city at the Point of the Mountain, convenient to our West Jordan office.",
  },
  {
    name: "Cottonwood Heights",
    slug: "cottonwood-heights",
    county: "Salt Lake",
    lat: 40.6197,
    lng: -111.8102,
    nearestOffice: "slc",
    distanceMiles: 8,
    driveTimeMin: 16,
    blurb:
      "A foothill city near the cottonwood canyons, an easy drive to our Salt Lake City office.",
  },
  {
    name: "Holladay",
    slug: "holladay",
    county: "Salt Lake",
    lat: 40.6688,
    lng: -111.8247,
    nearestOffice: "slc",
    distanceMiles: 6,
    driveTimeMin: 13,
    blurb:
      "A leafy east-side community close to our Salt Lake City office on 3300 South.",
  },
  {
    name: "Millcreek",
    slug: "millcreek",
    county: "Salt Lake",
    lat: 40.6869,
    lng: -111.8752,
    nearestOffice: "slc",
    distanceMiles: 3,
    driveTimeMin: 8,
    blurb:
      "A close-in east-side city just minutes from our Salt Lake City office.",
  },
  {
    name: "Riverton",
    slug: "riverton",
    county: "Salt Lake",
    lat: 40.5219,
    lng: -111.9391,
    nearestOffice: "west-jordan",
    distanceMiles: 6,
    driveTimeMin: 13,
    blurb:
      "A southwest valley city with quick access to our West Jordan office.",
  },
  {
    name: "Herriman",
    slug: "herriman",
    county: "Salt Lake",
    lat: 40.5141,
    lng: -112.0329,
    nearestOffice: "west-jordan",
    distanceMiles: 8,
    driveTimeMin: 16,
    blurb:
      "A fast-growing city on the southwest bench, served by our nearby West Jordan office.",
  },
  {
    name: "Bluffdale",
    slug: "bluffdale",
    county: "Salt Lake",
    lat: 40.4894,
    lng: -111.9388,
    nearestOffice: "west-jordan",
    distanceMiles: 9,
    driveTimeMin: 16,
    blurb:
      "A southern valley community near the Point of the Mountain and our West Jordan office.",
  },
  {
    name: "Kearns",
    slug: "kearns",
    county: "Salt Lake",
    lat: 40.66,
    lng: -111.9963,
    nearestOffice: "west-jordan",
    distanceMiles: 5,
    driveTimeMin: 12,
    blurb:
      "A west-valley community close to our West Jordan office.",
  },
  {
    name: "Magna",
    slug: "magna",
    county: "Salt Lake",
    lat: 40.7091,
    lng: -112.1016,
    nearestOffice: "west-jordan",
    distanceMiles: 9,
    driveTimeMin: 17,
    blurb:
      "A west-side city near the Great Salt Lake, served by our West Jordan office.",
  },
  {
    name: "South Salt Lake",
    slug: "south-salt-lake",
    county: "Salt Lake",
    lat: 40.7089,
    lng: -111.8883,
    nearestOffice: "slc",
    distanceMiles: 3,
    driveTimeMin: 8,
    blurb:
      "A revitalized inner-valley city just north of our Salt Lake City office.",
  },

  // ── Davis County ──
  {
    name: "Layton",
    slug: "layton",
    county: "Davis",
    lat: 41.0602,
    lng: -111.9711,
    nearestOffice: "layton",
    distanceMiles: 1,
    driveTimeMin: 4,
    blurb:
      "Home to our Layton office at the Market Center, serving Davis and southern Weber counties.",
  },
  {
    name: "Kaysville",
    slug: "kaysville",
    county: "Davis",
    lat: 41.035,
    lng: -111.9385,
    nearestOffice: "layton",
    distanceMiles: 3,
    driveTimeMin: 7,
    blurb:
      "A welcoming Davis County city just south of our Layton office.",
  },
  {
    name: "Farmington",
    slug: "farmington",
    county: "Davis",
    lat: 40.9805,
    lng: -111.887,
    nearestOffice: "layton",
    distanceMiles: 7,
    driveTimeMin: 11,
    blurb:
      "A historic Davis County seat near Station Park, a short drive to our Layton office.",
  },
  {
    name: "Bountiful",
    slug: "bountiful",
    county: "Davis",
    lat: 40.8894,
    lng: -111.8808,
    nearestOffice: "layton",
    distanceMiles: 13,
    driveTimeMin: 17,
    blurb:
      "A close-knit south Davis city, convenient to both our Layton and Salt Lake City offices.",
  },
  {
    name: "Centerville",
    slug: "centerville",
    county: "Davis",
    lat: 40.918,
    lng: -111.8722,
    nearestOffice: "layton",
    distanceMiles: 11,
    driveTimeMin: 15,
    blurb:
      "A quiet Davis County city along the foothills between our Layton and Salt Lake offices.",
  },
  {
    name: "Clearfield",
    slug: "clearfield",
    county: "Davis",
    lat: 41.1108,
    lng: -112.0261,
    nearestOffice: "layton",
    distanceMiles: 4,
    driveTimeMin: 9,
    blurb:
      "A north Davis County city near Hill Air Force Base, minutes from our Layton office.",
  },
  {
    name: "Clinton",
    slug: "clinton",
    county: "Davis",
    lat: 41.1397,
    lng: -112.0505,
    nearestOffice: "layton",
    distanceMiles: 6,
    driveTimeMin: 12,
    blurb:
      "A growing north Davis community a short drive from our Layton office.",
  },
  {
    name: "Syracuse",
    slug: "syracuse",
    county: "Davis",
    lat: 41.089,
    lng: -112.0647,
    nearestOffice: "layton",
    distanceMiles: 6,
    driveTimeMin: 12,
    blurb:
      "A lakeside Davis County city near Antelope Island, served by our Layton office.",
  },
  {
    name: "Woods Cross",
    slug: "woods-cross",
    county: "Davis",
    lat: 40.8716,
    lng: -111.8922,
    nearestOffice: "layton",
    distanceMiles: 14,
    driveTimeMin: 18,
    blurb:
      "A small south Davis city convenient to both our Layton and Salt Lake City offices.",
  },
  {
    name: "North Salt Lake",
    slug: "north-salt-lake",
    county: "Davis",
    lat: 40.8485,
    lng: -111.9069,
    nearestOffice: "slc",
    distanceMiles: 11,
    driveTimeMin: 15,
    blurb:
      "A gateway city between Salt Lake and Davis counties, close to our Salt Lake City office.",
  },
  {
    name: "Fruit Heights",
    slug: "fruit-heights",
    county: "Davis",
    lat: 41.0322,
    lng: -111.9016,
    nearestOffice: "layton",
    distanceMiles: 3,
    driveTimeMin: 8,
    blurb:
      "A small foothill city adjacent to Kaysville, minutes from our Layton office.",
  },

  // ── Weber County ──
  {
    name: "Ogden",
    slug: "ogden",
    county: "Weber",
    lat: 41.223,
    lng: -111.9738,
    nearestOffice: "layton",
    distanceMiles: 11,
    driveTimeMin: 16,
    blurb:
      "Weber County's historic hub on the rail line, served by our nearby Layton office.",
  },
  {
    name: "South Ogden",
    slug: "south-ogden",
    county: "Weber",
    lat: 41.1866,
    lng: -111.9722,
    nearestOffice: "layton",
    distanceMiles: 8,
    driveTimeMin: 14,
    blurb:
      "A quiet Weber County city just south of Ogden, a short drive to our Layton office.",
  },
  {
    name: "Roy",
    slug: "roy",
    county: "Weber",
    lat: 41.1616,
    lng: -112.0263,
    nearestOffice: "layton",
    distanceMiles: 6,
    driveTimeMin: 12,
    blurb:
      "A Weber County city near Hill Air Force Base, convenient to our Layton office.",
  },
  {
    name: "Riverdale",
    slug: "riverdale",
    county: "Weber",
    lat: 41.1758,
    lng: -112.001,
    nearestOffice: "layton",
    distanceMiles: 7,
    driveTimeMin: 13,
    blurb:
      "A retail-centered Weber County city just off I-84, served by our Layton office.",
  },

  // ── Utah County ──
  {
    name: "Lehi",
    slug: "lehi",
    county: "Utah",
    lat: 40.3916,
    lng: -111.8508,
    nearestOffice: "west-jordan",
    distanceMiles: 13,
    driveTimeMin: 20,
    blurb:
      "A booming tech-corridor city at the north end of Utah County, reachable from our West Jordan office.",
  },
  {
    name: "American Fork",
    slug: "american-fork",
    county: "Utah",
    lat: 40.3769,
    lng: -111.7958,
    nearestOffice: "west-jordan",
    distanceMiles: 16,
    driveTimeMin: 23,
    blurb:
      "A north Utah County city near the mouth of American Fork Canyon.",
  },
  {
    name: "Pleasant Grove",
    slug: "pleasant-grove",
    county: "Utah",
    lat: 40.3641,
    lng: -111.7385,
    nearestOffice: "west-jordan",
    distanceMiles: 18,
    driveTimeMin: 25,
    blurb:
      "A family-oriented north Utah County city known as Utah's City of Trees.",
  },
  {
    name: "Saratoga Springs",
    slug: "saratoga-springs",
    county: "Utah",
    lat: 40.3489,
    lng: -111.9047,
    nearestOffice: "west-jordan",
    distanceMiles: 16,
    driveTimeMin: 24,
    blurb:
      "A fast-growing lakeside city on Utah Lake's northwest shore.",
  },
  {
    name: "Eagle Mountain",
    slug: "eagle-mountain",
    county: "Utah",
    lat: 40.3141,
    lng: -112.0069,
    nearestOffice: "west-jordan",
    distanceMiles: 20,
    driveTimeMin: 28,
    blurb:
      "One of Utah's fastest-growing cities on the western edge of Utah County.",
  },
  {
    name: "Orem",
    slug: "orem",
    county: "Utah",
    lat: 40.2969,
    lng: -111.6946,
    nearestOffice: "west-jordan",
    distanceMiles: 22,
    driveTimeMin: 30,
    blurb:
      "A central Utah County city and home to Utah Valley University; telehealth keeps CPS close.",
  },
  {
    name: "Provo",
    slug: "provo",
    county: "Utah",
    lat: 40.2338,
    lng: -111.6585,
    nearestOffice: "west-jordan",
    distanceMiles: 26,
    driveTimeMin: 34,
    blurb:
      "Utah County's largest city and a university town; telehealth makes CPS care accessible from home.",
  },
];

export const CITY_SLUGS: string[] = cities.map((c) => c.slug);

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export const COUNTY_ORDER: City["county"][] = [
  "Salt Lake",
  "Davis",
  "Weber",
  "Utah",
];

export function citiesByCounty(): { county: City["county"]; cities: City[] }[] {
  return COUNTY_ORDER.map((county) => ({
    county,
    cities: cities.filter((c) => c.county === county),
  })).filter((g) => g.cities.length > 0);
}

// Neighboring cities: same county, nearest by great-circle-ish proximity.
export function neighborCities(slug: string, count = 6): City[] {
  const city = getCity(slug);
  if (!city) return [];
  return cities
    .filter((c) => c.slug !== slug)
    .map((c) => ({
      c,
      d: Math.hypot(c.lat - city.lat, c.lng - city.lng),
      sameCounty: c.county === city.county ? 0 : 1,
    }))
    .sort((a, b) => a.sameCounty - b.sameCounty || a.d - b.d)
    .slice(0, count)
    .map((x) => x.c);
}
