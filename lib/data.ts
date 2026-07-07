// Single source of truth for all Comprehensive Psychological Services (CPS) content.
// Never inline these facts in JSX — reference from here.

export const brand = {
  name: "Comprehensive Psychological Services",
  shortName: "CPS",
  tagline: "We Can Help Out",
  since: 1986,
  award: "Best Practice Award 2024",
  providerCount: "30+",
  founder: {
    name: "Steven Szykula, Ph.D.",
    title: "Licensed Clinical Psychologist, Founder",
  },
  phone: "801-483-1600",
  phoneHref: "tel:+18014831600",
  email: "wecanhelpout@gmail.com",
  fax: "801-483-1610",
  domain: "https://cpsutah.org",
  hours: "Mon–Fri",
};

export type Location = {
  id: string;
  name: string;
  street: string;
  cityLine: string;
  full: string;
  mapsUrl: string;
};

export const locations: Location[] = [
  {
    id: "slc",
    name: "Salt Lake City",
    street: "1208 East 3300 South",
    cityLine: "Salt Lake City, UT 84106",
    full: "1208 East 3300 South, Salt Lake City, UT 84106",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent("1208 East 3300 South, Salt Lake City, UT 84106"),
  },
  {
    id: "layton",
    name: "Layton (Market Center)",
    street: "1916 North 700 West, Suite 190",
    cityLine: "Layton, UT 84041",
    full: "1916 North 700 West, Suite 190, Layton, UT 84041",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent("1916 North 700 West, Suite 190, Layton, UT 84041"),
  },
  {
    id: "west-jordan",
    name: "West Jordan",
    street: "9069 South 1300 West, Ste D",
    cityLine: "West Jordan, UT 84088",
    full: "9069 South 1300 West, Ste D, West Jordan, UT 84088",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent("9069 South 1300 West, Ste D, West Jordan, UT 84088"),
  },
];

export type Service = {
  icon: string; // lucide-react icon name
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: "MessageCircleHeart",
    title: "Counseling & Psychotherapy",
    description:
      "Compassionate therapy for all ages, covering the full range of behavioral health concerns — anxiety, depression, trauma, relationships, and more.",
  },
  {
    icon: "Pill",
    title: "Medication Therapy",
    description:
      "MDs, physician assistants, and nurse practitioners who manage medication for mood, attention, and other conditions — carefully and collaboratively.",
  },
  {
    icon: "BrainCircuit",
    title: "Neurofeedback",
    description:
      "Drug-free EEG brain-training backed by 20 years of experience, helping improve focus, regulation, and resilience.",
  },
  {
    icon: "ClipboardCheck",
    title: "Evaluation Services",
    description:
      "Comprehensive psychological evaluations that give you clarity and build an effective, personalized treatment plan.",
  },
  {
    icon: "HeartPulse",
    title: "Health & Wellness",
    description:
      "Holistic, whole-person care that treats mind and body together so you can feel your best in every area of life.",
  },
  {
    icon: "ShieldCheck",
    title: "Substance Abuse Treatment",
    description:
      "Court-admissible evaluations, counseling, and Prime For Life classes — practical support for lasting recovery.",
  },
  {
    icon: "Briefcase",
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
    title: "Call or request an appointment",
    body: "Reach out by phone or send the short form. It only takes a minute.",
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
  "Most major insurance accepted — call to verify your coverage.";

export const locationOptions = [
  "Salt Lake City",
  "Layton",
  "West Jordan",
  "Telehealth",
];
