// Shared identity and statewide region content for Clinical and Professional Solutions.
export const brand = {
  name: "Clinical and Professional Solutions",
  shortName: "CPS Utah",
  tagline: "Clear direction for everyday needs",
  partnerName: "Utah Main Street",
  domain: "https://cpsutah.org",
};

export const serviceRegions = [
  {
    id: "wasatch-front",
    name: "Wasatch Front",
    description: "Explore solutions for daily life across Salt Lake, Davis, Weber, and Utah counties.",
  },
  {
    id: "northern-utah",
    name: "Northern Utah",
    description: "Practical direction for communities in Box Elder, Cache, Rich, Morgan, and nearby northern counties.",
  },
  {
    id: "central-eastern-utah",
    name: "Central & Eastern Utah",
    description: "Guidance for rural and mountain communities, from central Utah to the Uintah Basin and eastern valleys.",
  },
  {
    id: "southern-utah",
    name: "Southern Utah",
    description: "Explore local and remote possibilities for communities throughout southwest and southeast Utah.",
  },
];

export const whyPoints: { icon: string; title: string; body: string }[] = [
  {
    icon: "CalendarClock",
    title: "A simple first step",
    body: "A short request helps us understand what you are trying to solve and where you want to begin.",
  },
  {
    icon: "Users",
    title: "Thoughtful matching",
    body: "We help narrow the options so you can move toward services that fit your needs and preferences.",
  },
  {
    icon: "Video",
    title: "Statewide perspective",
    body: "Guidance is available for communities across Utah, including remote and telehealth possibilities.",
  },
  {
    icon: "MapPin",
    title: "Community-aware guidance",
    body: "We consider where you live and what is practical when helping identify possible next steps.",
  },
  {
    icon: "Sparkles",
    title: "The whole picture",
    body: "Your goals, budget, timing, and preferences all matter when comparing possible solutions.",
  },
  {
    icon: "Award",
    title: `Partnered with ${brand.partnerName}`,
    body: "Working together to point people in the right direction and improve access to high-quality services.",
  },
];

export const steps: { title: string; body: string }[] = [
  {
    title: "Tell us what you need",
    body: "Choose a solution area and share your preferred way to hear from us.",
  },
  {
    title: "We help clarify your options",
    body: "Our team helps identify possible directions suited to your needs, goals, and area.",
  },
  {
    title: "Choose a practical next step",
    body: "Review possible options and continue with the organization or professional that fits your needs.",
  },
];


export const comparisonLine =
  "Confirm qualifications, availability, scope, and pricing with the organization you choose.";
