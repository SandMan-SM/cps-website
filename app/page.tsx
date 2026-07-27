import type { Metadata } from "next";
import { brand, locations } from "@/lib/data";
import Header from "@/components/Header";

function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${brand.domain}/#webpage`,
        url: brand.domain,
        name: "Utah Mental Health Care | CPS",
        description:
          "Counseling, medication management, neurofeedback, evaluations, and behavioral health services from three Utah offices and by telehealth.",
        isPartOf: { "@id": `${brand.domain}/#website` },
        about: { "@id": `${brand.domain}/#organization` },
        inLanguage: "en-US",
      },
      {
        "@id": `${brand.domain}/#organization`,
        "@type": ["MedicalBusiness", "Psychologist", "LocalBusiness"],
        name: brand.name,
        description: "Counseling, medication management, neurofeedback, evaluations, and behavioral health services from three Utah offices and via telehealth.",
        url: brand.domain,
        telephone: brand.phone,
        email: brand.email,
        faxNumber: brand.fax,
        foundingDate: String(brand.since),
        address: locations.map(loc => ({
          "@type": "PostalAddress",
          streetAddress: loc.street,
          addressLocality: loc.cityLine.split(",")[0].trim(),
          addressRegion: "UT",
          postalCode: loc.cityLine.split(" ").pop(),
          addressCountry: "US"
        })),
        areaServed: {
          "@type": "State",
          name: "Utah"
        },
        knowsAbout: ["Mental Health", "Counseling", "Medication Management", "Neurofeedback", "Psychological Evaluations"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Mental Health Services",
          itemListElement: [
            { "@type": "Offer", name: "Counseling & Psychotherapy" },
            { "@type": "Offer", name: "Medication Management" },
            { "@type": "Offer", name: "Neurofeedback" },
            { "@type": "Offer", name: "Psychological Evaluations" }
          ]
        }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: brand.domain },
        ],
      },
      {
        "@type": "ItemList",
        name: "Comprehensive Psychological Services Utah offices",
        itemListElement: locations.map((loc, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: `${loc.name} office`,
          item: `${brand.domain}/utah/${loc.citySlug}`,
        })),
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
import SubscribeSection from "@/components/SubscribeSection";
import Services from "@/components/Services";
import WhyCPS from "@/components/WhyCPS";
import SuccessStories from "@/components/SuccessStories";
import Locations from "@/components/Locations";
import GetStarted from "@/components/GetStarted";
import RequestSection from "@/components/RequestSection";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";

export const metadata: Metadata = {
  title: { absolute: "Utah Mental Health Care | CPS" },
  description:
    "Utah mental health care since 1986: counseling, medication management, neurofeedback, evaluations, and more from three offices and via telehealth.",
  alternates: { canonical: brand.domain },
  openGraph: {
    type: "website",
    url: brand.domain,
    siteName: brand.name,
    title: "Utah Mental Health Care | CPS",
    description:
      "Utah mental health care since 1986: counseling, medication management, neurofeedback, evaluations, and more from three offices and via telehealth.",
    locale: "en_US",
    images: [
      {
        url: "/cps-hero.jpg",
        width: 1824,
        height: 862,
        alt: "A calm behavioral health appointment at Comprehensive Psychological Services in Utah",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Utah Mental Health Care | CPS",
    description:
      "Utah mental health care since 1986: counseling, medication management, neurofeedback, evaluations, and more from three offices and via telehealth.",
    images: ["/cps-hero.jpg"],
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
        <SubscribeSection />
        <Services />
        <WhyCPS />
        <SuccessStories />
        <Locations />
        <GetStarted />
        <RequestSection />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
