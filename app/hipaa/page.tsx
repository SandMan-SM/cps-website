import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { Shield, Phone, Mail, FileCheck, Lock, Eye, UserCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "HIPAA Notice of Privacy Practices",
  description:
    "HIPAA Notice of Privacy Practices for Comprehensive Psychological Services. Your rights regarding the use and disclosure of your protected health information.",
  openGraph: {
    title: "HIPAA Notice of Privacy Practices | CPS Utah",
    description:
      "Your rights regarding use and disclosure of your protected health information at CPS.",
    url: "https://psychandcustodyevaluations.com/hipaa",
    siteName: "Comprehensive Psychological Services",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "HIPAA Notice of Privacy Practices | CPS Utah",
    description:
      "Your rights regarding use and disclosure of your protected health information at CPS.",
  },
  alternates: { canonical: "https://psychandcustodyevaluations.com/hipaa" },
};

const rights = [
  { icon: FileCheck, text: "Request a copy of your health records" },
  { icon: Eye, text: "Request corrections or amendments to your records" },
  { icon: Lock, text: "Request confidential communications" },
  { icon: UserCheck, text: "Request restrictions on certain uses of your information" },
  { icon: FileCheck, text: "Obtain a list of disclosures we have made" },
  { icon: FileCheck, text: "Receive a paper copy of this notice upon request" },
];

const sections: { h: string; body: React.ReactNode }[] = [
  {
    h: "1. Uses and Disclosures of Your Health Information",
    body: (
      <>
        <p className="mb-4">
          As a psychological practice, we create and maintain records of your treatment and services. This protected health information (&ldquo;PHI&rdquo;) may be used and disclosed for:
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-bold text-[var(--cps-gray-900)] mb-2">Treatment</h3>
            <p>
              We use your PHI to provide, coordinate, and manage your care. For example, your psychologist may share information with our office staff, other clinicians involved in your care, or external providers you are referred to.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[var(--cps-gray-900)] mb-2">Payment</h3>
            <p>
              We may use and disclose PHI to bill and collect payment for services. This may include billing your insurance company, health plan, or other third-party payer.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-[var(--cps-gray-900)] mb-2">Healthcare Operations</h3>
            <p>
              We may use and disclose your PHI for activities such as quality improvement, staff training, compliance audits, and general administrative functions.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    h: "2. Uses and Disclosures Requiring Your Authorization",
    body: (
      <>
        <p className="mb-4">
          Uses and disclosures not covered by this notice or applicable law require your written authorization, including:
        </p>
        <ul className="space-y-2 list-disc pl-6 mb-4">
          <li>Most uses and disclosures of psychotherapy notes (where separately maintained)</li>
          <li>Marketing purposes</li>
          <li>Sale of your PHI</li>
          <li>Disclosures that constitute a sale of information</li>
        </ul>
        <p>You may revoke an authorization at any time in writing.</p>
      </>
    ),
  },
  {
    h: "3. Uses and Disclosures Without Your Authorization",
    body: (
      <>
        <p className="mb-4">We may disclose your PHI without your authorization in the following circumstances:</p>
        <ul className="space-y-3 list-disc pl-6">
          <li>
            <strong>As required by law</strong> — court orders, warrants, or similar legal processes
          </li>
          <li>
            <strong>Public health activities</strong> — reporting abuse, neglect, or domestic violence (where permitted)
          </li>
          <li>
            <strong>Health oversight activities</strong> — audits, investigations, or inspections by government agencies
          </li>
          <li>
            <strong>Judicial and administrative proceedings</strong> — in response to subpoenas or court orders in family law, criminal, or civil matters
          </li>
          <li>
            <strong>Law enforcement</strong> — in response to valid law enforcement requests
          </li>
          <li>
            <strong>To avert a serious threat</strong> — to prevent a serious threat to the health or safety of a person or the public
          </li>
          <li>
            <strong>Coroners, medical examiners, funeral directors</strong> — as necessary to carry out their duties
          </li>
          <li>
            <strong>Research</strong> — only when an institutional review board (IRB) has approved the research with appropriate safeguards
          </li>
          <li>
            <strong>Workers&apos; compensation</strong> — as authorized by law
          </li>
        </ul>
      </>
    ),
  },
  {
    h: "4. Patient Access to Records",
    body: (
      <>
        <p className="mb-4">
          You have the right to access, inspect, and obtain a copy of your PHI in our designated record set for as long as we maintain it. Requests must be made in writing. We will respond within 30 days. We may deny your request in certain limited circumstances (e.g., if a licensed healthcare professional determines that access could endanger your life or another person).
        </p>
        <p>
          To request access or amendments to your records, contact our office at{" "}
          <a href="tel:8014831600" className="text-[var(--cps-blue)] underline">
            (801) 483-1600
          </a>{" "}
          or{" "}
          <a href="mailto:cps@wecanhelpout.com" className="text-[var(--cps-blue)] underline">
            cps@wecanhelpout.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    h: "5. Amendments to Your Records",
    body: (
      <p>
        You may request that we amend your PHI if you believe it is inaccurate or incomplete. Requests must be in writing and explain why you believe the information should be amended. We may deny your request if, for example, the information was not created by us or we determine it is accurate and complete.
      </p>
    ),
  },
  {
    h: "6. Accounting of Disclosures",
    body: (
      <p>
        You have the right to receive an accounting of certain disclosures we have made of your PHI. This accounting does not include disclosures made for treatment, payment, or healthcare operations, or disclosures made before April 14, 2023. Requests must be made in writing. We will provide the accounting within 60 days (with a possible 30-day extension).
      </p>
    ),
  },
  {
    h: "7. Right to Request Restrictions",
    body: (
      <p>
        You have the right to request restrictions on certain uses and disclosures of your PHI. We are not required to agree to a restriction unless the disclosure is to a health plan for the purpose of carrying out payment or healthcare operations and the PHI pertains solely to a service for which you have paid in full out of pocket.
      </p>
    ),
  },
  {
    h: "8. Right to Confidential Communications",
    body: (
      <p>
        You have the right to request that we communicate with you in a certain way (e.g., only by phone, or at a specific address). We will accommodate reasonable requests.
      </p>
    ),
  },
  {
    h: "9. Paper Copy of This Notice",
    body: (
      <p>
        You have the right to receive a paper copy of this Notice of Privacy Practices at any time, even if you have agreed to receive it electronically.
      </p>
    ),
  },
  {
    h: "10. Changes to This Notice",
    body: (
      <p>
        We reserve the right to change this notice and make the new provisions effective for all PHI we maintain. The updated notice will be posted on our website and available at our office.
      </p>
    ),
  },
];

export default function HIPAANoticePage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <section className="bg-gradient-to-br from-[var(--cps-dark)] via-[var(--cps-gradient-mid)] to-[var(--cps-dark)] text-[var(--cps-white)] py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--cps-white)]/10 border border-white/10 mb-8">
              <Shield className="w-4 h-4 text-[var(--cps-teal)]" aria-hidden="true" />
              <span className="text-sm font-semibold text-[var(--cps-teal)] uppercase tracking-wider">
                Legally Required Notice
              </span>
            </div>
            <h1 className="display-heading text-[var(--cps-white)] mb-6">Notice of Privacy Practices</h1>
            <p className="body-large text-[var(--cps-white)]/80 max-w-[60ch]">
              This notice describes how medical information about you may be used and disclosed and how you can get access to this information. Please review it carefully.
            </p>
            <p className="mt-8 text-sm text-[var(--cps-white)]/60">Effective Date: April 14, 2026</p>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-[var(--cps-white)]">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="bg-[var(--cps-light)] border border-[var(--cps-blue)]/20 rounded-2xl p-8 mb-16">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[var(--cps-blue)] mb-4">
                What this means for you
              </h2>
              <p className="text-[var(--cps-gray-800)] body-large mb-6 leading-relaxed">
                You have specific legal rights over your health information. Here are the ones most patients ask about:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {rights.map((r) => {
                  const Icon = r.icon;
                  return (
                    <li
                      key={r.text}
                      className="flex items-start gap-4 bg-[var(--cps-white)] rounded-xl border border-[var(--cps-gray-200)] p-4"
                    >
                      <Icon
                        className="w-5 h-5 text-[var(--cps-blue)] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-[var(--cps-gray-700)] leading-relaxed">
                        {r.text}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="space-y-12">
              {sections.map((s) => (
                <div key={s.h}>
                  <h2 className="text-2xl font-bold text-[var(--cps-gray-900)] mb-4">{s.h}</h2>
                  <div className="text-[var(--cps-gray-700)] leading-relaxed">{s.body}</div>
                </div>
              ))}

              <div>
                <h2 className="text-2xl font-bold text-[var(--cps-gray-900)] mb-4">11. Complaints</h2>
                <p className="text-[var(--cps-gray-700)] leading-relaxed mb-4">
                  If you believe your privacy rights have been violated, you may file a complaint with our Privacy Officer at{" "}
                  <a href="mailto:cps@wecanhelpout.com" className="text-[var(--cps-blue)] underline">
                    cps@wecanhelpout.com
                  </a>{" "}
                  or{" "}
                  <a href="tel:8014831600" className="text-[var(--cps-blue)] underline">
                    (801) 483-1600
                  </a>
                  . You may also file a complaint with:
                </p>
                <div className="bg-[var(--cps-gray-50)] rounded-2xl border border-[var(--cps-gray-200)] p-6 mb-4">
                  <p className="font-semibold text-[var(--cps-gray-900)] mb-2">
                    U.S. Department of Health and Human Services — Office for Civil Rights
                  </p>
                  <p className="text-[var(--cps-gray-600)] mb-1">
                    200 Independence Avenue SW, Room 509F
                  </p>
                  <p className="text-[var(--cps-gray-600)] mb-2">Washington, DC 20201</p>
                  <p className="mb-1">
                    <a href="tel:18003681019" className="text-[var(--cps-blue)] underline">
                      1-800-368-1019
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://www.hhs.gov/hipaa/filing-a-complaint"
                      className="text-[var(--cps-blue)] underline"
                    >
                      www.hhs.gov/hipaa/filing-a-complaint
                    </a>
                  </p>
                </div>
                <p className="text-sm italic text-[var(--cps-gray-600)]">
                  <strong>Note:</strong> There will be no retaliation against any individual for filing a complaint.
                </p>
              </div>
            </div>

            <div className="mt-16 bg-[var(--cps-gray-50)] rounded-2xl border border-[var(--cps-gray-200)] p-8">
              <h2 className="text-2xl font-bold text-[var(--cps-gray-900)] mb-4">12. Privacy Officer Contact</h2>
              <p className="font-semibold text-[var(--cps-gray-900)] mb-2">
                Comprehensive Psychological Services — Privacy Officer
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
