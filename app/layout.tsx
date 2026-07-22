import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "./GoogleAnalytics";
import "./globals.css";
import { brand, locations } from "@/lib/data";
import AppointmentModal from "@/components/AppointmentModal";

export const viewport: Viewport = {
  themeColor: "#7c2024",
};

export const metadata: Metadata = {
  // Search Console / Bing verification — values live in Vercel env (names only
  // in repo). Unset renders no tag; harmless before the token is pasted.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ?? "",
    },
  },
  metadataBase: new URL(brand.domain),
  title: {
    default: "Utah Mental Health Care | CPS",
    template: "%s | CPS Utah",
  },
  description:
    "Utah mental health care since 1986, with counseling, medication management, neurofeedback, evaluations, and more from three offices and via telehealth.",
  authors: [{ name: brand.name }],
  creator: brand.name,
  publisher: brand.name,
  alternates: {
    canonical: brand.domain,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: brand.domain,
    siteName: brand.name,
    title:
      "Comprehensive Psychological Services | Utah Behavioral Health Since 1986",
    description:
      "Utah mental health care since 1986, with counseling, medication management, neurofeedback, evaluations, and more from three offices and via telehealth.",
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
    title:
      "Comprehensive Psychological Services | Utah Behavioral Health Since 1986",
    description:
      "Compassionate mental health care for every Utah family since 1986. Telehealth available.",
    images: ["/cps-hero.jpg"],
  },
  category: "health",
};

function JsonLd() {
  const orgId = `${brand.domain}/#organization`;
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "MedicalOrganization"],
        "@id": orgId,
        name: brand.name,
        alternateName: "CPS Utah",
        slogan: brand.tagline,
        url: brand.domain,
        logo: {
          "@type": "ImageObject",
          url: `${brand.domain}/cps-logo-clean.png`,
          width: 570,
          height: 146,
        },
        description:
          "Utah behavioral health practice offering counseling, medication management, neurofeedback, evaluations, wellness, substance use treatment, and employer services.",
        email: brand.email,
        foundingDate: String(brand.since),
        areaServed: {
          "@type": "State",
          name: "Utah",
        },
        location: locations.map((loc) => ({
          "@id": `${brand.domain}/utah/${loc.citySlug}#clinic`,
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${brand.domain}/#website`,
        url: brand.domain,
        name: brand.name,
        alternateName: ["CPS Utah", "We Can Help Out"],
        publisher: { "@id": orgId },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <JsonLd />
        <GoogleAnalytics />
        {children}
        <AppointmentModal />
      </body>
    </html>
  );
}
