import type { Metadata } from "next";
import HomePageClient from "@/components/HomePageClient";

export const metadata: Metadata = {
  title: "Psychological Services | Neuropsych, ADHD & Custody Evaluations in Utah",
  description:
    "Utah's trusted behavioral health network — 60+ years of combined care. Neuropsychological testing, ADHD evaluations, autism assessments, custody evaluations, ketamine therapy & IOP. Locations across Utah. Call (866) 343-0885.",
  keywords: [
    "neuropsychologist utah",
    "ADHD evaluation salt lake city",
    "custody evaluator near me",
    "ketamine therapy utah",
    "autism assessment utah",
    "neuropsychological testing",
    "intensive outpatient program utah",
    "psychological evaluation salt lake city",
    "comprehensive psychological services",
  ],
  openGraph: {
    type: "website",
    siteName: "Psychological Services",
    title: "Psychological Services | Neuropsych, ADHD & Custody Evaluations in Utah",
    description:
      "Utah's trusted behavioral health network — 60+ years of combined care. Neuropsychological testing, ADHD evaluations, autism assessments, custody evaluations, ketamine therapy & IOP.",
    url: "https://psychandcustodyevaluations.com",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Psychological Services | Utah Behavioral Health Network",
    description:
      "Utah's trusted behavioral health network — 60+ years of combined care. Neuropsych, ADHD, autism, custody evaluations & ketamine therapy.",
  },
  alternates: { canonical: "https://psychandcustodyevaluations.com" },
};

export default function HomePage() {
  return <HomePageClient />;
}