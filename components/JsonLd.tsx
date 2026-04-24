import type { ServiceData, LocationData } from "@/lib/services";

interface Props {
  service?: ServiceData;
  location?: LocationData;
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Comprehensive Psychological Services",
    alternateName: ["CPS", "Comprehensive Psychological Services Utah"],
    url: "https://psychandcustodyevaluations.com",
    telephone: "+18014831600",
    email: "cps@wecanhelpout.com",
    foundingDate: "1986",
    description:
      "Utah's trusted behavioral health practice since 1986. Neuropsychological testing, ADHD evaluations, autism assessments, custody evaluations, ketamine therapy & IOP.",
    logo: "https://psychandcustodyevaluations.com/favicon.ico",
    sameAs: [
      "https://wecanhelpout.com",
      "https://www.healthline.com/health-directory/comprehensive-psychological-services",
    ],
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "1208 East 3300 South",
        addressLocality: "Salt Lake City",
        addressRegion: "UT",
        postalCode: "84106",
        addressCountry: "US",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "1916 North 700 West, Suite 190",
        addressLocality: "Layton",
        addressRegion: "UT",
        postalCode: "84041",
        addressCountry: "US",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "9069 South 1300 West, Suite D",
        addressLocality: "West Jordan",
        addressRegion: "UT",
        postalCode: "84088",
        addressCountry: "US",
      },
    ],
    geo: [
      {
        "@type": "GeoCoordinates",
        latitude: 40.7099,
        longitude: -111.8542,
        address: {
          "@type": "PostalAddress",
          streetAddress: "1208 East 3300 South",
          addressLocality: "Salt Lake City",
          addressRegion: "UT",
          postalCode: "84106",
          addressCountry: "US",
        },
      },
      {
        "@type": "GeoCoordinates",
        latitude: 41.0603,
        longitude: -111.9689,
        address: {
          "@type": "PostalAddress",
          streetAddress: "1916 North 700 West, Suite 190",
          addressLocality: "Layton",
          addressRegion: "UT",
          postalCode: "84041",
          addressCountry: "US",
        },
      },
      {
        "@type": "GeoCoordinates",
        latitude: 40.6013,
        longitude: -111.9389,
        address: {
          "@type": "PostalAddress",
          streetAddress: "9069 South 1300 West, Suite D",
          addressLocality: "West Jordan",
          addressRegion: "UT",
          postalCode: "84088",
          addressCountry: "US",
        },
      },
    ],
    areaServed: [
      { "@type": "State", name: "Utah" },
      { "@type": "City", name: "Salt Lake City" },
      { "@type": "AdministrativeArea", name: "Davis County" },
      { "@type": "AdministrativeArea", name: "Weber County" },
      { "@type": "City", name: "Layton" },
      { "@type": "City", name: "West Jordan" },
    ],
    medicalSpecialty: [
      "Neuropsychology",
      "Clinical Psychology",
      "Psychiatry",
    ],
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Neuropsychological Evaluation",
        procedureType: "Diagnostic",
      },
      { "@type": "MedicalProcedure", name: "ADHD Evaluation", procedureType: "Diagnostic" },
      { "@type": "MedicalProcedure", name: "Autism Assessment", procedureType: "Diagnostic" },
      {
        "@type": "MedicalProcedure",
        name: "ADOS-2 Testing",
        procedureType: "Diagnostic",
      },
      { "@type": "MedicalProcedure", name: "Custody Evaluation", procedureType: "Diagnostic" },
      {
        "@type": "MedicalTherapy",
        name: "Ketamine Therapy",
      },
      {
        "@type": "MedicalTherapy",
        name: "Intensive Outpatient Program (IOP)",
      },
      { "@type": "MedicalTherapy", name: "Cognitive Behavioral Therapy" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      reviewCount: "3",
      ratingCount: "3",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Behavioral Health Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Neuropsychological Evaluation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "ADHD Evaluation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Autism Assessment" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custody Evaluation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ketamine Therapy" } },
      ],
    },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function PhysicianSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: "Steven Szykula, Ph.D.",
    jobTitle: "Founder and Director",
    description:
      "Licensed psychologist and founder of Comprehensive Psychological Services. Specializing in neuropsychology, behavioral health, and clinical psychology since 1979.",
    telephone: "+18014831600",
    email: "cps@wecanhelpout.com",
    url: "https://wecanhelpout.com",
    priceRange: "$$",
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "1208 East 3300 South",
        addressLocality: "Salt Lake City",
        addressRegion: "UT",
        postalCode: "84106",
        addressCountry: "US",
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.7099,
      longitude: -111.8542,
    },
    medicalSpecialty: ["Neuropsychology", "Clinical Psychology"],
    availableService: [
      "Neuropsychological Evaluation",
      "ADHD Evaluation",
      "Custody Evaluation",
      "Behavioral Health Assessment",
    ],
    alumnusOf: [
      {
        "@type": "EducationalOrganization",
        name: "University of Utah",
      },
    ],
    sameAs: ["https://wecanhelpout.com"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      ratingCount: "12",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({ service, location }: Props) {
  if (!service) return null;

  const baseUrl = "https://psychandcustodyevaluations.com";
  const url = location
    ? `${baseUrl}/${service.slug}/${location.slug}`
    : `${baseUrl}/${service.slug}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: location ? `${service.title} in ${location.name}` : service.title,
    url,
    description: service.metaDescription,
    mainEntity: {
      "@type": "MedicalProcedure",
      name: service.title,
      procedureType: "Diagnostic",
      description: service.overview[0],
      howPerformed: service.whatToExpect.join(". "),
    },
    provider: {
      "@type": "MedicalBusiness",
      name: "Comprehensive Psychological Services",
      telephone: "+18014831600",
      url: baseUrl,
    },
    ...(location && {
      areaServed: {
        "@type": location.county ? "AdministrativeArea" : location.slug === "utah" ? "State" : "City",
        name: location.name,
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ service }: { service: ServiceData }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

const LOCATIONS = [
  {
    slug: "salt-lake-city",
    name: "Salt Lake City",
    streetAddress: "1208 East 3300 South",
    addressLocality: "Salt Lake City",
    postalCode: "84106",
    latitude: 40.7099,
    longitude: -111.8542,
    areaServed: "Salt Lake County",
  },
  {
    slug: "layton",
    name: "Layton",
    streetAddress: "1916 North 700 West, Suite 190",
    addressLocality: "Layton",
    postalCode: "84041",
    latitude: 41.0603,
    longitude: -111.9689,
    areaServed: "Davis & Weber Counties",
  },
  {
    slug: "west-jordan",
    name: "West Jordan",
    streetAddress: "9069 South 1300 West, Suite D",
    addressLocality: "West Jordan",
    postalCode: "84088",
    latitude: 40.6013,
    longitude: -111.9389,
    areaServed: "South Valley",
  },
] as const;

export function LocalBusinessSchema({ locationSlug }: { locationSlug?: string } = {}) {
  const loc = locationSlug
    ? LOCATIONS.find((l) => l.slug === locationSlug)
    : undefined;
  const targets = loc ? [loc] : LOCATIONS;

  const schemas = targets.map((l) => ({
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `https://psychandcustodyevaluations.com/#${l.slug}`,
    name: `Comprehensive Psychological Services — ${l.name}`,
    url: `https://psychandcustodyevaluations.com`,
    telephone: "+18014831600",
    email: "cps@wecanhelpout.com",
    priceRange: "$$",
    image: "https://psychandcustodyevaluations.com/opengraph-image",
    address: {
      "@type": "PostalAddress",
      streetAddress: l.streetAddress,
      addressLocality: l.addressLocality,
      addressRegion: "UT",
      postalCode: l.postalCode,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: l.latitude,
      longitude: l.longitude,
    },
    areaServed: { "@type": "AdministrativeArea", name: l.areaServed },
    medicalSpecialty: ["Neuropsychology", "Clinical Psychology"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      bestRating: "5",
      reviewCount: "3",
    },
  }));

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

export function SpeakableSchema({
  url,
  cssSelectors = [".display-heading", ".section-heading", "h1", "h2"],
}: {
  url: string;
  cssSelectors?: string[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: cssSelectors,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ReviewSchema({
  reviews,
}: {
  reviews: { author: string; text: string; rating: number }[];
}) {
  const schemas = reviews.map((r) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "MedicalBusiness",
      name: "Comprehensive Psychological Services",
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: r.rating,
      bestRating: 5,
    },
    author: { "@type": "Person", name: r.author },
    reviewBody: r.text,
  }));

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
