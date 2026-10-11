import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { brand } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of use for the ${brand.name} website.`,
  alternates: { canonical: `${brand.domain}/terms` },
  robots: { index: false, follow: true },
  openGraph: {
    type: "website",
    url: `${brand.domain}/terms`,
    siteName: brand.name,
    title: "Terms of Use",
    description: `Terms of use for the ${brand.name} website.`,
    locale: "en_US",
    images: [
      {
        url: "/brand/utah-solutions-hero.png",
        width: 1942,
        height: 809,
        alt: "Clinical and Professional Solutions guidance for everyday Utah needs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Use",
    description: `Terms of use for the ${brand.name} website.`,
    images: ["/brand/utah-solutions-hero.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Terms of Use",
  description: `Terms of use for the ${brand.name} website.`,
  url: `${brand.domain}/terms`,
  isPartOf: { "@type": "WebSite", name: brand.name, url: brand.domain },
  about: { "@type": "Organization", name: brand.name, url: brand.domain },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: brand.domain },
      { "@type": "ListItem", position: 2, name: "Terms of Use", item: `${brand.domain}/terms` },
    ],
  },
};

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LegalLayout title="Terms of Use">
      <p>
        By using this website, you agree to these terms. If you do not agree, please do not use
        the site.
      </p>

      <h2>General guidance</h2>
      <p>
        The content on this website is for general informational purposes only and is not a
        substitute for individualized medical, legal, financial, or other professional advice.
        Independent professionals and organizations are responsible for the services they
        deliver. Confirm credentials, scope, fees, and terms directly before engaging them.
      </p>

      <h2>In an emergency</h2>
      <p>
        If you are experiencing a mental health emergency, call 911 or 988 (the Suicide &amp;
        Crisis Lifeline) immediately. Do not use this website for urgent needs.
      </p>

      <h2>Solution requests</h2>
      <p>
        Submitting the request form does not create a provider-patient relationship or
        guarantee an appointment, referral acceptance, or service availability. A member of our
        team will follow up to discuss possible next steps.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Use the secure request form on the home page and select
        email as your preferred contact method.
      </p>
      </LegalLayout>
    </>
  );
}
