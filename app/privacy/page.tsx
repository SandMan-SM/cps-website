import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { brand } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy practices for ${brand.name}.`,
  alternates: { canonical: `${brand.domain}/privacy` },
  robots: { index: false, follow: true },
  openGraph: {
    type: "website",
    url: `${brand.domain}/privacy`,
    siteName: brand.name,
    title: "Privacy Policy",
    description: `Privacy practices for ${brand.name}.`,
    locale: "en_US",
    images: [
      {
        url: "/cps-hero.jpg",
        width: 1824,
        height: 862,
        alt: "Comprehensive Psychological Services — Utah mental health care since 1986",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy",
    description: `Privacy practices for ${brand.name}.`,
    images: ["/cps-hero.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy",
  description: `Privacy practices for ${brand.name}.`,
  url: `${brand.domain}/privacy`,
  isPartOf: { "@type": "WebSite", name: brand.name, url: brand.domain },
  about: { "@type": "Organization", name: brand.name, url: brand.domain },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: brand.domain },
      { "@type": "ListItem", position: 2, name: "Privacy Policy", item: `${brand.domain}/privacy` },
    ],
  },
};

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LegalLayout title="Privacy Policy">
      <p>
        {brand.name} (&ldquo;{brand.shortName},&rdquo; &ldquo;we,&rdquo; or &ldquo;us&rdquo;)
        respects your privacy. This policy explains how we handle information collected through
        this website. It does not replace the notices you receive as a patient regarding
        protected health information.
      </p>

      <h2>Information we collect</h2>
      <p>
        When you submit an appointment request, we collect information including your name,
        email address, phone number, the service you select, preferred location, contact
        preference, availability, and any message you provide, so we can respond to your
        request. We also receive basic technical information such as your IP address,
        browser type, the page you submitted from, and any referral or campaign parameters
        in the link you arrived through.
      </p>

      <h2>How we use your information</h2>
      <p>
        We use the information you submit solely to contact you about care, schedule
        appointments, and respond to your inquiries. We do not sell your personal information.
      </p>

      <h2>Protected health information</h2>
      <p>
        Please do not include sensitive medical details in the website form. Detailed clinical
        information is gathered securely once care begins, consistent with applicable privacy
        laws.
      </p>

      <h2>Contact</h2>
      <p>
        For privacy questions, email {brand.email}.
      </p>
      </LegalLayout>
    </>
  );
}
