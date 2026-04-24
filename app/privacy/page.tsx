import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { Shield, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Comprehensive Psychological Services. Learn how we collect, use, and protect your personal and health information in compliance with HIPAA and Utah law.",
  openGraph: {
    title: "Privacy Policy | Comprehensive Psychological Services",
    description:
      "How CPS collects, uses, and protects your personal and health information.",
    url: "https://psychandcustodyevaluations.com/privacy",
    siteName: "Comprehensive Psychological Services",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Comprehensive Psychological Services",
    description:
      "How CPS collects, uses, and protects your personal and health information.",
  },
  alternates: { canonical: "https://psychandcustodyevaluations.com/privacy" },
};

const sections = [
  {
    h: "1. Information We Collect",
    body: (
      <>
        <p className="mb-4">We collect information you voluntarily provide when you:</p>
        <ul className="space-y-2 list-disc pl-6 mb-4">
          <li>Fill out our contact or appointment request form (name, email, phone, service interest, message)</li>
          <li>Schedule or request an appointment</li>
          <li>Communicate with us via email, phone, or our online portal</li>
        </ul>
        <p>
          We do <strong>not</strong> collect sensitive health information through this website. Appointment and clinical intake information is collected through separate, secure, HIPAA-compliant channels.
        </p>
      </>
    ),
  },
  {
    h: "2. How We Use Your Information",
    body: (
      <>
        <p className="mb-4">Information collected through our website is used solely to:</p>
        <ul className="space-y-2 list-disc pl-6">
          <li>Respond to your inquiries and appointment requests</li>
          <li>Verify insurance benefits and eligibility (if you authorize us)</li>
          <li>Communicate with you about our services</li>
          <li>Improve our website and user experience</li>
        </ul>
      </>
    ),
  },
  {
    h: "3. No Sale of Information",
    body: (
      <p>
        We do <strong>not</strong> sell, rent, or otherwise disclose your personal information to third parties for marketing purposes.
      </p>
    ),
  },
  {
    h: "4. Cookies and Analytics",
    body: (
      <p>
        Our website may use cookies and third-party analytics (such as Google Analytics) to understand how visitors use our Site. You may disable cookies in your browser settings. We do not use this data to personally identify you.
      </p>
    ),
  },
  {
    h: "5. Data Security",
    body: (
      <p>
        Our website is served over HTTPS (SSL/TLS encryption) and protected by Cloudflare DDoS mitigation. Our clinical systems are HIPAA-compliant and access to your health information is restricted to authorized clinical staff only.
      </p>
    ),
  },
  {
    h: "6. Third-Party Links",
    body: (
      <p>
        Our Site may contain links to external websites (such as Google Maps, insurance portals, or telehealth platforms). We are not responsible for the privacy practices of third-party sites.
      </p>
    ),
  },
  {
    h: "7. Children's Privacy",
    body: (
      <p>
        Our services are available for children, and we take the privacy of minors seriously. We do not knowingly collect personal information from children under 13 through this website without verified parental or guardian consent.
      </p>
    ),
  },
  {
    h: "8. Your Rights Under Utah Law",
    body: (
      <p>
        Utah residents may have additional rights regarding their personal information under the Utah Consumer Privacy Act (UCPA). To exercise any rights or ask questions, contact us at{" "}
        <a href="mailto:cps@wecanhelpout.com" className="text-[var(--cps-blue)] underline">
          cps@wecanhelpout.com
        </a>{" "}
        or call{" "}
        <a href="tel:8014831600" className="text-[var(--cps-blue)] underline">
          (801) 483-1600
        </a>
        .
      </p>
    ),
  },
  {
    h: "9. Changes to This Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &ldquo;Effective Date.&rdquo; We encourage you to review this page periodically.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <section className="bg-gradient-to-br from-[var(--cps-dark)] via-[var(--cps-gradient-mid)] to-[var(--cps-dark)] text-[var(--cps-white)] py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--cps-white)]/10 border border-white/10 mb-8">
              <Shield className="w-4 h-4 text-[var(--cps-teal)]" aria-hidden="true" />
              <span className="text-sm font-semibold text-[var(--cps-teal)] uppercase tracking-wider">
                Privacy & Security
              </span>
            </div>
            <h1 className="display-heading text-[var(--cps-white)] mb-6">Privacy Policy</h1>
            <p className="body-large text-[var(--cps-white)]/80 max-w-[60ch]">
              How Comprehensive Psychological Services collects, uses, and safeguards your personal and health information.
            </p>
            <p className="mt-8 text-sm text-[var(--cps-white)]/60">Effective Date: April 14, 2026</p>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-[var(--cps-white)]">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
            <p className="text-[var(--cps-gray-700)] leading-relaxed body-large mb-12">
              Comprehensive Psychological Services (&ldquo;CPS,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy and the confidentiality of your personal and health information. This Privacy Policy describes how we collect, use, and safeguard information obtained through our website, psychandcustodyevaluations.com.
            </p>

            <div className="space-y-12">
              {sections.map((s) => (
                <div key={s.h}>
                  <h2 className="text-2xl font-bold text-[var(--cps-gray-900)] mb-4">{s.h}</h2>
                  <div className="text-[var(--cps-gray-700)] leading-relaxed">{s.body}</div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-[var(--cps-gray-50)] rounded-2xl border border-[var(--cps-gray-200)] p-8">
              <h2 className="text-2xl font-bold text-[var(--cps-gray-900)] mb-4">10. Contact Us</h2>
              <p className="text-[var(--cps-gray-700)] mb-6">
                Questions about this Privacy Policy or how we handle your information?
              </p>
              <p className="font-semibold text-[var(--cps-gray-900)] mb-2">
                Comprehensive Psychological Services
              </p>
              <p className="text-[var(--cps-gray-600)] mb-1">1208 East 3300 South</p>
              <p className="text-[var(--cps-gray-600)] mb-4">Salt Lake City, UT 84106</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:8014831600"
                  className="inline-flex items-center gap-2 text-[var(--cps-blue)] hover:text-[var(--cps-blue-hover)] font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" /> (801) 483-1600
                </a>
                <a
                  href="mailto:cps@wecanhelpout.com"
                  className="inline-flex items-center gap-2 text-[var(--cps-blue)] hover:text-[var(--cps-blue-hover)] font-semibold transition-colors"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" /> cps@wecanhelpout.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <StickyMobileCTA />
      <Footer />
    </>
  );
}
