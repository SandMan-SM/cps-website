/* ─────────────────────────────────────────────
   Brand — single source of truth.
   Psychological Services is a lead-collection brand
   partnered with We Can Help Out and Utah Addiction
   Centers. Every component imports identity facts
   from here; never inline them in JSX.
   ───────────────────────────────────────────── */

export const BRAND = "Psychological Services";
export const TAGLINE = "60+ Years of Combined Care";

/** Combined-network credibility stats (WCHO + Utah Addiction Centers). */
export const YEARS_COMBINED = "60+";
export const THERAPISTS = "40+";

/** 24-hour hotline — the ONE number shown anywhere on the site. */
export const HOTLINE = "(866) 343-0885";
export const HOTLINE_HREF = "tel:8663430885";
export const HOTLINE_E164 = "+18663430885";
export const HOTLINE_LABEL = "24 Hour Hotline";

/** Lead inbox (unchanged — routes to the partner clinic team). */
export const EMAIL = "cps@wecanhelpout.com";

export interface Partner {
  name: string;
  domain: string;
  url: string;
}

export const PARTNERS: Partner[] = [
  {
    name: "We Can Help Out",
    domain: "wecanhelpout.com",
    url: "https://wecanhelpout.com",
  },
  {
    name: "Utah Addiction Centers",
    domain: "utahaddictioncenters.com",
    url: "https://utahaddictioncenters.com",
  },
];

export interface NetworkLocation {
  name: string;
  /** Which partner system operates this location. */
  system: string;
  /** What kind of care happens here — shown as the card subtitle. */
  kind: string;
  address: string;
  city: string;
  serving: string;
  mapQuery: string;
}

/**
 * Every physical location in the network, attributed to its system.
 * The Eagle Mountain address is from utahaddictioncenters.com/contact.
 */
export const LOCATIONS: NetworkLocation[] = [
  {
    name: "Salt Lake City",
    system: "We Can Help Out",
    kind: "Behavioral Health Clinic",
    address: "1208 East 3300 South",
    city: "Salt Lake City, UT 84106",
    serving: "Salt Lake County",
    mapQuery: "1208+East+3300+South,+Salt+Lake+City,+UT+84106",
  },
  {
    name: "Layton",
    system: "We Can Help Out",
    kind: "Behavioral Health Clinic",
    address: "1916 North 700 West, Suite 190",
    city: "Layton, UT 84041",
    serving: "Davis & Weber Counties",
    mapQuery: "1916+North+700+West,+Suite+190,+Layton,+UT+84041",
  },
  {
    name: "West Jordan",
    system: "We Can Help Out",
    kind: "Behavioral Health Clinic",
    address: "9069 South 1300 West, Suite D",
    city: "West Jordan, UT 84088",
    serving: "South Valley",
    mapQuery: "9069+South+1300+West,+Suite+D,+West+Jordan,+UT+84088",
  },
  {
    name: "Eagle Mountain",
    system: "Utah Addiction Centers",
    kind: "Residential Treatment Campus",
    address: "2590 Prairie View Drive",
    city: "Eagle Mountain, UT 84005",
    serving: "Residential & outpatient addiction care, statewide",
    mapQuery: "2590+Prairie+View+Drive,+Eagle+Mountain,+UT+84005",
  },
];
