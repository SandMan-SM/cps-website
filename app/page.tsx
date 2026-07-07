import type { Metadata } from "next";
import { brand } from "@/lib/data";
import Header from "@/components/Header";

function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: brand.domain },
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
