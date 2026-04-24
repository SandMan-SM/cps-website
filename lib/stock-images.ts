/**
 * Curated Unsplash stock image registry for CPS service, blog, and marketing
 * pages. Every image has been visually inspected for thematic fit.
 *
 * All URLs point to images.unsplash.com (already allow-listed in next.config.ts).
 *
 * Photo IDs are shared across related services (e.g., all ADHD variants use the
 * same ADHD hero) — this is intentional. Same theme = same image.
 */

export interface StockImage {
  src: string;
  alt: string;
  credit?: string;
}

function unsplash(id: string): string {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;
}

// ── Theme pool (1 image per theme, re-used across same-theme services) ──
const THEME = {
  neuro: {
    src: unsplash("1559757148-5c350d0d3c56"),
    alt: "Cross-section anatomical model of the human brain — neuropsychological evaluation",
  },
  adhd: {
    src: unsplash("1486312338219-ce68d2c6f44d"),
    alt: "Focused hands working at a laptop — attention and executive function",
  },
  autism: {
    src: unsplash("1516627145497-ae6968895b74"),
    alt: "Young child exploring with a toy camera in a colorful playroom — childhood developmental assessment",
  },
  custody: {
    src: unsplash("1521791136064-7986c2920216"),
    alt: "Two professionals shaking hands after a consultation — custody evaluation and legal coordination",
  },
  ketamine: {
    src: unsplash("1559595500-e15296bdbb48"),
    alt: "Person sitting peacefully overlooking a wide canyon horizon — hope and recovery from depression",
  },
  iop: {
    src: unsplash("1552664730-d307ca884978"),
    alt: "Small group collaborating around a whiteboard — intensive outpatient group therapy setting",
  },
  counseling: {
    src: unsplash("1551836022-d5d88e9218df"),
    alt: "Two women in a calm, warm conversation across a table — one-on-one counseling session",
  },
  medication: {
    src: unsplash("1587854692152-cbe660dbde88"),
    alt: "Prescription capsules on a clean surface — psychiatric medication management",
  },
  telehealth: {
    src: unsplash("1576091160550-2173dba999ef"),
    alt: "Hands typing on a laptop beside a stethoscope — telehealth therapy session",
  },
  depression: {
    src: unsplash("1493836512294-502baa1986e2"),
    alt: "Person sitting quietly on a couch in low light — living with depression",
  },
  hopeHorizon: {
    src: unsplash("1506905925346-21bda4d32df4"),
    alt: "Sunrise above mountains rising through clouds — clarity, calm, new beginnings",
  },
  officeWarm: {
    src: unsplash("1538688525198-9b88f6f53126"),
    alt: "Warm, modern therapy-office lounge with couches and plants",
  },
  highFive: {
    src: unsplash("1600880292203-757bb62b4baf"),
    alt: "Two professionals celebrating after a successful meeting",
  },
  pillsStethoscope: {
    src: unsplash("1603398938378-e54eab446dde"),
    alt: "Stethoscope and assorted prescription medications arranged on a white surface",
  },
  emotions: {
    src: unsplash("1516302752625-fcc3c50ae61f"),
    alt: "Person holding a paper smile in front of their face — masking anxiety and depression",
  },
} satisfies Record<string, StockImage>;

// ── Service slug → hero image ──
export const serviceHero: Record<string, StockImage> = {
  // Neuropsych family
  "neuropsychologist-near-me": THEME.neuro,
  "neuropsychologist": THEME.neuro,
  "cognitive-evaluation-near-me": THEME.neuro,
  "neuropsychological-testing-for-adhd": THEME.neuro,
  "neurofeedback-therapy": THEME.neuro,

  // ADHD family
  "adhd-evaluation-near-me": THEME.adhd,
  "adhd-diagnosis-near-me": THEME.adhd,
  "adhd-testing": THEME.adhd,

  // Autism family
  "ados-2-testing-near-me": THEME.autism,
  "autism-assessment": THEME.autism,

  // Custody / legal
  "custody-evaluator-near-me": THEME.custody,

  // Treatment-resistant depression family
  "ketamine-depression-treatment-near-me": THEME.ketamine,
  "spravato-esketamine-therapy": THEME.ketamine,

  // Therapy programs
  "intensive-outpatient-program-iop": THEME.iop,
  "counseling-and-psychotherapy": THEME.counseling,

  // Medication
  "medication-management": THEME.medication,

  // Telehealth
  "telehealth-therapy": THEME.telehealth,
};

// ── Blog slug → hero image ──
export const blogHero: Record<string, StockImage> = {
  "what-to-expect-neuropsychological-evaluation": THEME.neuro,
  "adhd-in-adults-late-diagnosis": THEME.adhd,
  "ados-2-vs-other-autism-assessments": THEME.autism,
  "utah-custody-evaluations-family-court": THEME.custody,
};

// ── Homepage hero ──
export const homepageHero: StockImage = THEME.hopeHorizon;

// ── Audience page heroes (for /for/[audience]) ──
export const audienceHero: Record<string, StockImage> = {
  parents: THEME.autism,
  attorneys: THEME.custody,
  schools: THEME.iop,
  employers: THEME.highFive,
  referrers: THEME.pillsStethoscope,
};

export { THEME };
