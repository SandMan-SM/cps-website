import type { Metadata } from "next";
import { brand, locations } from "@/lib/data";
import Header from "@/components/Header";

function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalBusiness", "Psychologist"],
        "@id": `${brand.domain}/#organization`,
        name: brand.name,
        url: brand.domain,
        telephone: `+1-${brand.phone}`,
        email: brand.email,
        foundingDate: String(brand.since),
        founder: {
          "@type": "Person",
          name: brand.founder.name,
          jobTitle: brand.founder.title,
        },
        areaServed: { "@type": "State", name: "Utah" },
        availableAtOrFrom: locations.map((loc) => ({
          "@type": "MedicalClinic",
          name: `${brand.name} — ${loc.name}`,
          address: {
            "@type": "PostalAddress",
            streetAddress: loc.street,
            addressLocality: loc.cityLine.split(", ")[0],
            addressRegion: "UT",
            postalCode: loc.cityLine.split(", ")[1]?.split(" ").pop() || "",
            addressCountry: "US",
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: brand.domain },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What kinds of therapy do you offer?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We offer individual, couples, family, and child/adolescent therapy using evidence-based approaches. During your first visit, your provider will recommend the approach best suited to your goals.",
            },
          },
          {
            "@type": "Question",
            name: "Do you accept insurance for counseling?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most major insurance accepted — call to verify your coverage. Our team is happy to help you understand your benefits before your first appointment.",
            },
          },
          {
            "@type": "Question",
            name: "Can I do therapy from home?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We offer secure telehealth counseling anywhere in Utah, so you can meet with your provider from the comfort of home when that works best for you.",
            },
          },
          {
            "@type": "Question",
            name: "What ages do you serve?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We serve children, adolescents, adults, and seniors — the full range of ages across our counseling, medication management, and neurofeedback services.",
            },
          },
        ],
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
import Hero from "@/components/Hero";
import TrustBand from "@/components/TrustBand";
import Services from "@/components/Services";
import WhyCPS from "@/components/WhyCPS";
import Locations from "@/components/Locations";
import Team from "@/components/Team";
import GetStarted from "@/components/GetStarted";
import RequestSection from "@/components/RequestSection";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";

export const metadata: Metadata = {
  title: brand.name + " | Salt Lake City & Utah Mental Health Services",
  description:
    "Expert mental health care in Utah — counseling, medication management & neurofeedback. Serving Salt Lake City, Murray, Sandy, West Jordan & Layton. Most insurance accepted.",
  alternates: { canonical: brand.domain },
  openGraph: {
    type: "website",
    url: brand.domain,
    siteName: brand.name,
    title: brand.name + " | Salt Lake City & Utah Mental Health Services",
    description:
      "Expert mental health care in Utah — counseling, medication management & neurofeedback. Serving Salt Lake City, Murray, Sandy, West Jordan & Layton. Most insurance accepted.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: brand.name + " | Salt Lake City & Utah Mental Health Services",
    description:
      "Expert mental health care in Utah — counseling, medication management & neurofeedback. Serving Salt Lake City, Murray, Sandy, West Jordan & Layton. Most insurance accepted.",
  },
};

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main className="pb-20 md:pb-0">
        <Hero />
        <TrustBand />
        <Services />
        <WhyCPS />
        <Locations />
        <Team />
        <GetStarted />
        <RequestSection />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
