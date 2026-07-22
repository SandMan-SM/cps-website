// Single source of truth for all Comprehensive Psychological Services (CPS) content.
// Never inline these facts in JSX — reference from here.

export const brand = {
  name: "Comprehensive Psychological Services",
  shortName: "CPS",
  tagline: "We Can Help Out",
  since: 1986,
  award: "Best Practice Award 2024",
  providerCount: "30+",
  email: "wecanhelpout@gmail.com",
  domain: "https://cpsutah.org",
  hours: "Mon–Fri",
};

export type Location = {
  id: string;
  citySlug: string;
  name: string;
  street: string;
  cityLine: string;
  full: string;
  mapsUrl: string;
  description: string;
  nearbyAreas: string[];
  seoTitle: string;
  seoDescription: string;
};

export const locations: Location[] = [
  {
    id: "slc",
    citySlug: "salt-lake-city",
    name: "Salt Lake City",
    street: "1208 East 3300 South",
    cityLine: "Salt Lake City, UT 84106",
    full: "1208 East 3300 South, Salt Lake City, UT 84106",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent("1208 East 3300 South, Salt Lake City, UT 84106"),
    description:
      "Our 3300 South office supports individuals and families from Salt Lake City, Millcreek, Murray, Holladay, and nearby east-side communities.",
    nearbyAreas: ["Salt Lake City", "Millcreek", "Murray", "Holladay", "South Salt Lake"],
    seoTitle: "Salt Lake City Mental Health Clinic | CPS Utah",
    seoDescription:
      "Visit CPS in Salt Lake City for counseling, medication management, neurofeedback, evaluations, and more. Request in-person or Utah telehealth care.",
  },
  {
    id: "layton",
    citySlug: "layton",
    name: "Layton (Market Center)",
    street: "1916 North 700 West, Suite 190",
    cityLine: "Layton, UT 84041",
    full: "1916 North 700 West, Suite 190, Layton, UT 84041",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent("1916 North 700 West, Suite 190, Layton, UT 84041"),
    description:
      "Our Market Center office serves Layton and surrounding Davis County communities, including Kaysville, Farmington, Clearfield, and Syracuse.",
    nearbyAreas: ["Layton", "Kaysville", "Farmington", "Clearfield", "Syracuse"],
    seoTitle: "Layton Mental Health Clinic | CPS Utah",
    seoDescription:
      "Visit CPS in Layton for counseling, medication management, neurofeedback, evaluations, and more. Request in-person or Utah telehealth care.",
  },
  {
    id: "west-jordan",
    citySlug: "west-jordan",
    name: "West Jordan",
    street: "9069 South 1300 West, Ste D",
    cityLine: "West Jordan, UT 84088",
    full: "9069 South 1300 West, Ste D, West Jordan, UT 84088",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent("9069 South 1300 West, Ste D, West Jordan, UT 84088"),
    description:
      "Our South 1300 West office serves West Jordan, South Jordan, Taylorsville, Riverton, Herriman, and nearby southwest-valley communities.",
    nearbyAreas: ["West Jordan", "South Jordan", "Taylorsville", "Riverton", "Herriman"],
    seoTitle: "West Jordan Mental Health Clinic | CPS Utah",
    seoDescription:
      "Visit CPS in West Jordan for counseling, medication management, neurofeedback, evaluations, and more. Request in-person or Utah telehealth care.",
  },
];

export const officeCitySlugs = locations.map((location) => location.citySlug);

export function getLocationByCitySlug(citySlug: string): Location | undefined {
  return locations.find((location) => location.citySlug === citySlug);
}

export type Service = {
  icon: string; // lucide-react icon name
  image: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: "MessageCircleHeart",
    image: "/services/counseling-psychotherapy.jpg",
    title: "Counseling & Psychotherapy",
    description:
      "Compassionate therapy for all ages, covering the full range of behavioral health concerns — anxiety, depression, trauma, relationships, and more.",
  },
  {
    icon: "Pill",
    image: "/services/medication-therapy.jpg",
    title: "Medication Therapy",
    description:
      "MDs, physician assistants, and nurse practitioners who manage medication for mood, attention, and other conditions — carefully and collaboratively.",
  },
  {
    icon: "BrainCircuit",
    image: "/services/neurofeedback.jpg",
    title: "Neurofeedback",
    description:
      "Drug-free EEG brain-training backed by 20 years of experience, helping improve focus, regulation, and resilience.",
  },
  {
    icon: "ClipboardCheck",
    image: "/services/evaluation-services.jpg",
    title: "Evaluation Services",
    description:
      "Comprehensive psychological evaluations that give you clarity and build an effective, personalized treatment plan.",
  },
  {
    icon: "HeartPulse",
    image: "/services/health-wellness.jpg",
    title: "Health & Wellness",
    description:
      "Holistic, whole-person care that treats mind and body together so you can feel your best in every area of life.",
  },
  {
    icon: "ShieldCheck",
    image: "/services/substance-abuse-treatment.jpg",
    title: "Substance Abuse Treatment",
    description:
      "Court-admissible evaluations, counseling, and Prime For Life classes — practical support for lasting recovery.",
  },
  {
    icon: "Briefcase",
    image: "/services/employer-services.jpg",
    title: "Employer Services",
    description:
      "DOT-certified substance-abuse evaluations, fitness-for-duty assessments, critical-incident debriefing, EAP, and workshops.",
  },
];

export const whyPoints: { icon: string; title: string; body: string }[] = [
  {
    icon: "CalendarClock",
    title: "Serving Utah since 1986",
    body: "Nearly four decades of trusted, community-rooted behavioral health care across the Wasatch Front.",
  },
  {
    icon: "Users",
    title: "30+ licensed providers",
    body: "Psychologists, counselors, social workers, and medication providers — matched to what you need.",
  },
  {
    icon: "Video",
    title: "Telehealth available",
    body: "Meet with a provider securely from home, anywhere in Utah, on your schedule.",
  },
  {
    icon: "MapPin",
    title: "Three convenient locations",
    body: "Salt Lake City, Layton, and West Jordan — care that's close to where you live and work.",
  },
  {
    icon: "Sparkles",
    title: "Whole-person approach",
    body: "We treat the whole you — combining therapy, medication, and wellness for real, lasting results.",
  },
  {
    icon: "Award",
    title: "Best Practice Award 2024",
    body: "Recognized for a standard of care our community can count on.",
  },
];

export const steps: { title: string; body: string }[] = [
  {
    title: "Send an appointment request",
    body: "Complete the short scheduling form. It only takes a minute.",
  },
  {
    title: "We match you with the right provider",
    body: "Our team pairs you with a provider suited to your needs, goals, and preferred location.",
  },
  {
    title: "Start in person or via telehealth",
    body: "Begin care the way that works best for you — at a nearby office or securely online.",
  },
];

export const insuranceLine =
  "Most major insurance accepted — coverage can be verified during scheduling.";

export const locationOptions = [
  "Salt Lake City",
  "Layton",
  "West Jordan",
  "Telehealth",
];
