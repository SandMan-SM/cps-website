import type { Metadata } from "next";
import { brand } from "@/lib/data";
import { solutionPages } from "@/lib/services";
import { UTAH_COUNTIES } from "@/lib/geo";
import Header from "@/components/Header";

function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${brand.domain}/#webpage`,
        url: brand.domain,
        name: "Utah Solutions | Clinical and Professional Solutions",
        description:
          "Practical guidance for Utah-based health, home, business, family, career, and community solutions.",
        isPartOf: { "@id": `${brand.domain}/#website` },
        about: { "@id": `${brand.domain}/#organization` },
        inLanguage: "en-US",
      },
      {
        "@id": `${brand.domain}/#organization`,
        "@type": "Organization",
        name: brand.name,
        description: "Utah-based solutions navigation across health, home, business, family, and everyday life.",
        url: brand.domain,
        areaServed: {
          "@type": "State",
          name: "Utah"
        },
        knowsAbout: solutionPages.filter((solution) => solution.featured).map((solution) => solution.name),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Utah Solution Guidance",
          itemListElement: solutionPages.filter((solution) => solution.featured).map((solution) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: `${solution.name} guidance`,
              url: `${brand.domain}/solutions/${solution.slug}`,
            },
          })),
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
        name: "Clinical and Professional Solutions Utah service areas",
        itemListElement: UTAH_COUNTIES.map((county, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: county,
          item: `${brand.domain}/service-area#counties`,
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
  title: { absolute: "Utah Solutions | Clinical and Professional Solutions" },
  description:
    "Find direction for Utah health, home, business, legal, financial, family, education, career, and community needs. Partnered with Utah Main Street.",
  alternates: { canonical: brand.domain },
  openGraph: {
    type: "website",
    url: brand.domain,
    siteName: brand.name,
    title: "Utah Solutions | Clinical and Professional Solutions",
    description:
      "Find direction for Utah health, home, business, legal, financial, family, education, career, and community needs. Partnered with Utah Main Street.",
    locale: "en_US",
    images: [
      {
        url: "/brand/utah-solutions-hero.png",
        width: 1942,
        height: 809,
        alt: "Illustration of Utah community life, local businesses, and practical solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Utah Solutions | Clinical and Professional Solutions",
    description:
      "Find direction for Utah health, home, business, legal, financial, family, education, career, and community needs. Partnered with Utah Main Street.",
    images: ["/brand/utah-solutions-hero.png"],
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
