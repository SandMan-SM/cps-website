import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Comprehensive Psychological Services. Learn how we collect, use, and protect your personal and health information in compliance with HIPAA and Utah law.",
  openGraph: {
    title: "Privacy Policy | Comprehensive Psychological Services",
    description:
      "Privacy Policy for Comprehensive Psychological Services. Learn how we collect, use, and protect your personal and health information in compliance with HIPAA and Utah law.",
    url: "https://psychandcustodyevaluations.com/privacy",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Comprehensive Psychological Services",
    description:
      "Privacy Policy for Comprehensive Psychological Services. Learn how we collect, use, and protect your personal and health information in compliance with HIPAA and Utah law.",
  },
  alternates: { canonical: "https://psychandcustodyevaluations.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="mb-12">
            <p className="text-sm text-[var(--cps-gray-500)] mb-4">Effective Date: April 14, 2026</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--cps-gray-900)] mb-6">
              Privacy Policy
            </h1>
            <div className="w-20 h-1 bg-[var(--cps-blue)] rounded-full mb-8" />
          </div>

          <div className="prose prose-lg max-w-none text-[var(--cps-gray-600)] space-y-8">
            <p>
              Comprehensive Psychological Services (&ldquo;CPS,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy and the confidentiality of your personal and health information. This Privacy Policy describes how we collect, use, and safeguard information obtained through our website, psychandcustodyevaluations.com (&ldquo;Site&rdquo;).
            </p>

            <h2 className="text-2xl font-bold text-[var(--cps-gray-900)] mt-10">1. Information We Collect</h2>
            <p>We collect information you voluntarily provide when you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fill out our contact or appointment request form (name, email, phone number, service interest, and message)</li>
              <li>Schedule or request an appointment</li>
              <li>Communicate with us via email, phone, or our online portal</li>
            </ul>
            <p>We do <strong>not</strong> collect sensitive health information through this website. Appointment and clinical intake information is collected through separate, secure, HIPAA-compliant channels.</p>

            <h2 className="text-2xl font-bold text-[var(--cps-gray-900)] mt-10">2. How We Use Your Information</h2>
            <p>Information collected through our website is used solely to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and appointment requests</li>
              <li>Verify insurance benefits and eligibility (if you authorize us)</li>
              <li>Communicate with you about our services</li>
              <li>Improve our website and user experience</li>
            </ul>

            <h2 className="text-2xl font-bold text-[var(--cps-gray-900)] mt-10">3. No Sale of Information</h2>
            <p>
              We do <strong>not</strong> sell, rent, or otherwise disclose your personal information to third parties for marketing purposes.
            </p>

            <h2 className="text-2xl font-bold text-[var(--cps-gray-900)] mt-10">4. Cookies and Analytics</h2>
            <p>
              Our website may use cookies and third-party analytics (such as Google Analytics) to understand how visitors use our Site. You may disable cookies in your browser settings. We do not use this data to personally identify you.
            </p>

            <h2 className="text-2xl font-bold text-[var(--cps-gray-900)] mt-10">5. Data Security</h2>
            <p>
              Our website is served over HTTPS (SSL/TLS encryption) and protected by Cloudflare DDoS mitigation. Our clinical systems are HIPAA-compliant and access to your health information is restricted to authorized clinical staff only.
            </p>

            <h2 className="text-2xl font-bold text-[var(--cps-gray-900)] mt-10">6. Third-Party Links</h2>
            <p>
              Our Site may contain links to external websites (such as Google Maps, insurance portals, or telehealth platforms). We are not responsible for the privacy practices of third-party sites. Please review their privacy policies before submitting any personal information.
            </p>

            <h2 className="text-2xl font-bold text-[var(--cps-gray-900)] mt-10">7. Children&apos;s Privacy</h2>
            <p>
              Our services are available for children, and we take the privacy of minors seriously. We do not knowingly collect personal information from children under 13 through this website without verified parental or guardian consent.
            </p>

            <h2 className="text-2xl font-bold text-[var(--cps-gray-900)] mt-10">8. Your Rights Under Utah Law</h2>
            <p>
              Utah residents may have additional rights regarding their personal information under the Utah Consumer Privacy Act (UCPA). To exercise any rights or ask questions about how we handle your data, contact us at <a href="mailto:cps@wecanhelpout.com" className="text-[var(--cps-blue)] underline">cps@wecanhelpout.com</a> or call <a href="tel:8014831600" className="text-[var(--cps-blue)] underline">(801) 483-1600</a>.
            </p>

            <h2 className="text-2xl font-bold text-[var(--cps-gray-900)] mt-10">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &ldquo;Effective Date.&rdquo; We encourage you to review this page periodically.
            </p>

            <h2 className="text-2xl font-bold text-[var(--cps-gray-900)] mt-10">10. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or how we handle your information, please contact:
            </p>
            <div className="bg-[var(--cps-gray-50)] p-6 rounded-xl border border-[var(--cps-gray-200)]">
              <p className="font-semibold text-[var(--cps-gray-900)]">Comprehensive Psychological Services</p>
              <p>1208 East 3300 South</p>
              <p>Salt Lake City, UT 84106</p>
              <p>
                <a href="tel:8014831600" className="text-[var(--cps-blue)]">(801) 483-1600</a>
              </p>
              <p>
                <a href="mailto:cps@wecanhelpout.com" className="text-[var(--cps-blue)]">cps@wecanhelpout.com</a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
