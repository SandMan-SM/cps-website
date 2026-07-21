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
    default:
      "Comprehensive Psychological Services | Utah Therapy, Counseling & Psychiatry Since 1986",
    template: "%s | Comprehensive Psychological Services",
  },
  description:
    "Compassionate mental health care for every Utah family since 1986. Counseling, medication management, neurofeedback, evaluations, and substance abuse treatment in Salt Lake City, Layton, and West Jordan. Telehealth available.",
  keywords: [
    "therapist Salt Lake City",
    "psychiatrist utah",
    "neurofeedback utah",
    "substance abuse evaluation utah",
    "medication management utah",
    "counseling Layton",
    "counseling West Jordan",
    "psychologist Utah",
    "telehealth therapy Utah",
    "behavioral health Utah",
    "mental health Salt Lake City",
    "DOT substance abuse evaluation Utah",
  ],
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
      "Compassionate mental health care for every Utah family since 1986. Counseling, medication, neurofeedback, evaluations, and more across Salt Lake City, Layton & West Jordan. Telehealth available.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Comprehensive Psychological Services | Utah Behavioral Health Since 1986",
    description:
      "Compassionate mental health care for every Utah family since 1986. Telehealth available.",
  },
  category: "health",
};

function JsonLd() {
  const orgId = `${brand.domain}/#organization`;
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalBusiness", "Psychologist"],
        "@id": orgId,
        name: brand.name,
        alternateName: "CPS Utah",
        slogan: brand.tagline,
        url: brand.domain,
        email: brand.email,
        foundingDate: String(brand.since),
        areaServed: {
          "@type": "State",
          name: "Utah",
        },
        medicalSpecialty: "Psychiatric",
        availableService: [
          "Counseling & Psychotherapy",
          "Medication Therapy",
          "Neurofeedback",
          "Evaluation Services",
          "Health & Wellness",
          "Substance Abuse Treatment",
          "Employer Services",
        ].map((s) => ({ "@type": "MedicalTherapy", name: s })),
        location: locations.map((loc) => ({ "@id": `${brand.domain}/#${loc.id}` })),
      },
      ...locations.map((loc) => {
        const [city, stateZip] = loc.cityLine.split(", ");
        const [region, postal] = (stateZip || "").split(" ");
        return {
          "@type": ["MedicalClinic", "LocalBusiness"],
          "@id": `${brand.domain}/#${loc.id}`,
          name: `${brand.name} — ${loc.name}`,
          parentOrganization: { "@id": orgId },
          url: brand.domain,
          address: {
            "@type": "PostalAddress",
            streetAddress: loc.street,
            addressLocality: city,
            addressRegion: region || "UT",
            postalCode: postal || "",
            addressCountry: "US",
          },
          areaServed: { "@type": "State", name: "Utah" },
          openingHours: "Mo-Fr",
        };
      }),
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
