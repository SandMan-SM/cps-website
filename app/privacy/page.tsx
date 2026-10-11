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
        url: "/brand/utah-solutions-hero.png",
        width: 1942,
        height: 809,
        alt: "Clinical and Professional Solutions guidance for everyday Utah needs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy",
    description: `Privacy practices for ${brand.name}.`,
    images: ["/brand/utah-solutions-hero.png"],
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
        this website. Clinical and Professional Solutions provides navigation and referral
        guidance. Independent professionals and organizations provide their own privacy notices
        when you choose to work with them.
      </p>

      <h2>Information we collect</h2>
      <p>
        When you submit a solution request, we collect information including your name,
        email address, phone number, solution area, Utah county, contact
        preference, availability, and any message you provide, so we can respond to your
        request. We also receive basic technical information such as your IP address,
        browser type, the page you submitted from, and any referral or campaign parameters
        in the link you arrived through.
      </p>

      <h2>How we use your information</h2>
      <p>
        We use the information you submit to respond to your request, discuss possible service
        options, coordinate an appropriate follow-up, and maintain the security of the form. We
        do not sell your personal information.
      </p>

      <h2>Sensitive information</h2>
      <p>
        Please do not include sensitive medical, financial, legal, or identification details in
        this form. Detailed information should be shared through the appropriate secure process
        of the professional or organization you choose.
      </p>

      <h2>Contact</h2>
      <p>
        For privacy questions, use the secure request form on the home page and select email as
        your preferred contact method. Please do not include private medical details.
      </p>
      </LegalLayout>
    </>
  );
}
