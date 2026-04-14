import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "HIPAA Notice of Privacy Practices",
  description:
    "HIPAA Notice of Privacy Practices for Comprehensive Psychological Services. Your rights regarding the use and disclosure of your protected health information.",
  openGraph: {
    title: "HIPAA Notice of Privacy Practices | CPS Utah",
    description:
      "HIPAA Notice of Privacy Practices for Comprehensive Psychological Services. Your rights regarding the use and disclosure of your protected health information.",
    url: "https://psychandcustodyevaluations.com/hipaa",
    siteName: "Comprehensive Psychological Services",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "HIPAA Notice of Privacy Practices | CPS Utah",
    description:
      "HIPAA Notice of Privacy Practices for Comprehensive Psychological Services. Your rights regarding the use and disclosure of your protected health information.",
  },
  alternates: { canonical: "https://psychandcustodyevaluations.com/hipaa" },
};

export default function HIPAANoticePage() {
  return (
    <>
      <Navbar />
      <main id="main" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="mb-12">
            <div className="inline-block bg-[var(--cps-blue)] text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider mb-4">
              Legally Required Notice
            </div>
            <p className="text-sm text-[var(--cps-gray-500)] mb-4">Effective Date: April 14, 2026</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[var(--cps-gray-900)] mb-6">
              Notice of Privacy Practices
            </h1>
            <div className="w-20 h-1 bg-[var(--cps-blue)] rounded-full mb-8" />
            <p className="text-lg text-[var(--cps-gray-600)] font-medium">
              This notice describes how medical information about you may be used and disclosed and how you can get access to this information. Please review it carefully.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-[var(--cps-gray-600)] space-y-8">
            <div className="bg-[var(--cps-gray-50)] border-l-4 border-[var(--cps-blue)] p-6 rounded-r-xl">
              <p className="text-[var(--cps-gray-900)] font-semibold mb-2">Your Rights</p>
              <p className="mb-2">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>Request a copy of your health records</li>
                <li>Request corrections to your records</li>
                <li>Request confidential communications</li>
                <li>Request restrictions on certain uses of your information</li>
                <li>Obtain a list of disclosures we have made</li>
                <li>Receive a paper copy of this notice upon request</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-[var(--cps-gray-900)] mt-10">1. Uses and Disclosures of Your Health Information</h2>
            <p>
              As a psychological practice, we create and maintain records of your treatment and services. This protected health information (&ldquo;PHI&rdquo;) may be used and disclosed for:
            </p>
            <h3 className="text-xl font-semibold text-[var(--cps-gray-900)]">Treatment</h3>
            <p>
              We use your PHI to provide, coordinate, and manage your care. For example, your psychologist may share information with our office staff, other clinicians involved in your care, or external providers you are referred to.
            </p>
            <h3 className="text-xl font-semibold text-[var(--cps-gray-900)]">Payment</h3>
            <p>
              We may use and disclose PHI to bill and collect payment for services. This may include billing your insurance company, health plan, or other third-party payer.
            </p>
            <h3 className="text-xl font-semibold text-[var(--cps-gray-900)]">Healthcare Operations</h3>
            <p>
              We may use and disclose your PHI for activities such as quality improvement, staff training, compliance audits, and general administrative functions.
            </p>

            <h2 className="text-2xl font-bold text-[var(--cps-gray-900)] mt-10">2. Uses and Disclosures Requiring Your Authorization</h2>
            <p>
              Uses and disclosures not covered by this notice or applicable law require your written authorization, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Most uses and disclosures of psychotherapy notes (where separately maintained)</li>
              <li>Marketing purposes</li>
              <li>Sale of your PHI</li>
              <li>Disclosures that constitute a sale of information</li>
            </ul>
            <p>You may revoke an authorization at any time in writing.</p>

            <h2 className="text-2xl font-bold text-[var(--cps-gray-900)] mt-10">3. Uses and Disclosures We May Make Without Your Authorization</h2>
            <p>We may disclose your PHI without your authorization in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>As required by law</strong> — for court orders, warrants, or similar legal processes</li>
              <li><strong>Public health activities</strong> — reporting abuse, neglect, or domestic violence (where permitted)</li>
              <li><strong>Health oversight activities</strong> — audits, investigations, or inspections by government agencies</li>
              <li><strong>Judicial and administrative proceedings</strong> — in response to subpoenas or court orders in family law, criminal, or civil matters</li>
              <li><strong>Law enforcement</strong> — in response to valid law enforcement requests</li>
              <li><strong>To avert a serious threat</strong> — to prevent a serious threat to the health or safety of a person or the public</li>
              <li><strong>Coroners, medical examiners, funeral directors</strong> — as necessary to carry out their duties</li>
              <li><strong>Research</strong> — only when an institutional review board (IRB) has approved the research with appropriate safeguards</li>
              <li><strong>Workers&apos; compensation</strong> — as authorized by law</li>
            </ul>

            <h2 className="text-2xl font-bold text-[var(--cps-gray-900)] mt-10">4. Patient Access to Records</h2>
            <p>
              You have the right to access, inspect, and obtain a copy of your PHI in our designated record set for as long as we maintain it. Requests must be made in writing. We will respond within 30 days. We may deny your request in certain limited circumstances (e.g., if a licensed healthcare professional determines that access could endanger your life or another person).
            </p>
            <p>
              To request access or amendments to your records, contact our office at <a href="tel:8014831600" className="text-[var(--cps-blue)] underline">(801) 483-1600</a> or in writing at <a href="mailto:cps@wecanhelpout.com" className="text-[var(--cps-blue)] underline">cps@wecanhelpout.com</a>.
            </p>

            <h2 className="text-2xl font-bold text-[var(--cps-gray-900)] mt-10">5. Amendments to Your Records</h2>
            <p>
              You may request that we amend your PHI if you believe it is inaccurate or incomplete. Requests must be in writing and explain why you believe the information should be amended. We may deny your request if, for example, the information was not created by us or we determine it is accurate and complete.
            </p>

            <h2 className="text-2xl font-bold text-[var(--cps-gray-900)] mt-10">6. Accounting of Disclosures</h2>
            <p>
              You have the right to receive an accounting of certain disclosures we have made of your PHI. This accounting does not include disclosures made for treatment, payment, or healthcare operations, or disclosures made before April 14, 2023. Requests must be made in writing. We will provide the accounting within 60 days (with a possible 30-day extension).
            </p>

            <h2 className="text-2xl font-bold text-[var(--cps-gray-900)] mt-10">7. Right to Request Restrictions</h2>
            <p>
              You have the right to request restrictions on certain uses and disclosures of your PHI. We are not required to agree to a restriction unless the disclosure is to a health plan for the purpose of carrying out payment or healthcare operations and the PHI pertains solely to a service for which you have paid in full out of pocket.
            </p>

            <h2 className="text-2xl font-bold text-[var(--cps-gray-900)] mt-10">8. Right to Confidential Communications</h2>
            <p>
              You have the right to request that we communicate with you in a certain way (e.g., only by phone, or at a specific address). We will accommodate reasonable requests.
            </p>

            <h2 className="text-2xl font-bold text-[var(--cps-gray-900)] mt-10">9. Paper Copy of This Notice</h2>
            <p>
              You have the right to receive a paper copy of this Notice of Privacy Practices at any time, even if you have agreed to receive it electronically.
            </p>

            <h2 className="text-2xl font-bold text-[var(--cps-gray-900)] mt-10">10. Changes to This Notice</h2>
            <p>
              We reserve the right to change this notice and make the new provisions effective for all PHI we maintain. The updated notice will be posted on our website and available at our office.
            </p>

            <h2 className="text-2xl font-bold text-[var(--cps-gray-900)] mt-10">11. Complaints</h2>
            <p>
              If you believe your privacy rights have been violated, you may file a complaint with our Privacy Officer at <a href="mailto:cps@wecanhelpout.com" className="text-[var(--cps-blue)] underline">cps@wecanhelpout.com</a> or <a href="tel:8014831600" className="text-[var(--cps-blue)] underline">(801) 483-1600</a>. You may also file a complaint with:
            </p>
            <div className="bg-[var(--cps-gray-50)] p-6 rounded-xl border border-[var(--cps-gray-200)] space-y-2">
              <p className="font-semibold text-[var(--cps-gray-900)]">U.S. Department of Health and Human Services — Office for Civil Rights</p>
              <p>200 Independence Avenue SW, Room 509F</p>
              <p>Washington, DC 20201</p>
              <p><a href="tel:18003681347" className="text-[var(--cps-blue)] underline">1-800-368-1019</a></p>
              <p><a href="https://www.hhs.gov/hipaa/filing-a-complaint" className="text-[var(--cps-blue)] underline">www.hhs.gov/hipaa/filing-a-complaint</a></p>
            </div>
            <p className="text-sm italic">
              <strong>Note:</strong> There will be no retaliation against any individual for filing a complaint.
            </p>

            <h2 className="text-2xl font-bold text-[var(--cps-gray-900)] mt-10">12. Privacy Officer Contact</h2>
            <div className="bg-[var(--cps-gray-50)] p-6 rounded-xl border border-[var(--cps-gray-200)]">
              <p className="font-semibold text-[var(--cps-gray-900)]">Comprehensive Psychological Services — Privacy Officer</p>
              <p>1208 East 3300 South</p>
              <p>Salt Lake City, UT 84106</p>
              <p><a href="tel:8014831600" className="text-[var(--cps-blue)] underline">(801) 483-1600</a></p>
              <p><a href="mailto:cps@wecanhelpout.com" className="text-[var(--cps-blue)] underline">cps@wecanhelpout.com</a></p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
