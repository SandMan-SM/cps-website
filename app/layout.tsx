import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "./GoogleAnalytics";
import "./globals.css";
import { brand } from "@/lib/data";
import { solutionPages } from "@/lib/services";
import AppointmentModal from "@/components/AppointmentModal";

export const viewport: Viewport = {
  themeColor: "#a1252b",
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
    default: "Utah Solutions | Clinical and Professional Solutions",
    template: "%s | Clinical and Professional Solutions",
  },
  description:
    "Practical guidance for Utah health, home, business, legal, financial, family, education, career, and community solutions.",
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
      "Clinical and Professional Solutions | Clear Direction Across Utah",
    description:
      "Practical guidance for Utah health, home, business, legal, financial, family, education, career, and community solutions.",
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
    title:
      "Clinical and Professional Solutions | Clear Direction Across Utah",
    description:
      "Clear direction for Utah-based solutions across everyday life.",
    images: ["/brand/utah-solutions-hero.png"],
  },
  category: "business",
};

function JsonLd() {
  const orgId = `${brand.domain}/#organization`;
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: brand.name,
        alternateName: brand.shortName,
        slogan: brand.tagline,
        url: brand.domain,
        logo: {
          "@type": "ImageObject",
          url: `${brand.domain}/brand/open-path-mark.png`,
          width: 1254,
          height: 1254,
        },
        description:
          "Utah-based solutions navigation for health, home, business, family, and everyday life.",
        areaServed: {
          "@type": "State",
          name: "Utah",
        },
        knowsAbout: solutionPages.filter((solution) => solution.featured).map((solution) => solution.name),
      },
      {
        "@type": "WebSite",
        "@id": `${brand.domain}/#website`,
        url: brand.domain,
        name: brand.name,
        alternateName: [brand.shortName],
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
