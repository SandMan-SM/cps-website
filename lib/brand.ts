/* ─────────────────────────────────────────────
   Brand — single source of truth.
   Psychological Services is a lead-collection brand
   partnered with We Can Help Out and Utah Addiction
   Centers. Every component imports identity facts
   from here; never inline them in JSX.
   ───────────────────────────────────────────── */

export const BRAND = "Psychological Services";
export const TAGLINE = "40+ Years in Utah";

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
