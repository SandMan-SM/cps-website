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
    alternateName: "CPS",
    url: "https://psychandcustodyevaluations.com",
    telephone: "+18014831600",
    email: "cps@wecanhelpout.com",
    foundingDate: "1986",
    description:
      "Utah's trusted behavioral health practice since 1986. Neuropsychological testing, ADHD evaluations, autism assessments, custody evaluations, ketamine therapy & IOP.",
    sameAs: ["https://wecanhelpout.com"],
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
    areaServed: [
      { "@type": "State", name: "Utah" },
      { "@type": "City", name: "Salt Lake City" },
      { "@type": "AdministrativeArea", name: "Davis County" },
      { "@type": "AdministrativeArea", name: "Weber County" },
    ],
    medicalSpecialty: [
      "Neuropsychology",
      "Clinical Psychology",
      "Psychiatry",
    ],
    availableService: [
      "Neuropsychological Evaluation",
      "ADHD Evaluation",
      "ADHD Diagnosis",
      "ADHD Testing",
      "Autism Assessment",
      "ADOS-2 Testing",
      "Cognitive Evaluation",
      "Custody Evaluation",
      "Ketamine Therapy",
      "Spravato Treatment",
      "Intensive Outpatient Program",
      "Counseling and Psychotherapy",
      "Medication Management",
      "Neurofeedback",
    ],
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
