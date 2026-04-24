import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import {
  Phone,
  FileText,
  Shield,
  HelpCircle,
  Calendar,
  CreditCard,
  CheckCircle2,
  ClipboardList,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Patient Resources & Forms",
  description:
    "Prepare for your CPS appointment: what to bring, insurance accepted, evaluation-day checklist, billing info, patient rights, and HIPAA notice.",
  openGraph: {
    title: "Patient Resources & Forms | Comprehensive Psychological Services",
    description:
      "Prepare for your CPS appointment: what to bring, insurance accepted, evaluation-day checklist, billing info, and patient rights.",
    url: "https://psychandcustodyevaluations.com/resources",
    siteName: "Comprehensive Psychological Services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patient Resources & Forms | CPS Utah",
    description:
      "Insurance info, patient forms, evaluation-day checklist, and patient rights for CPS patients.",
  },
  alternates: { canonical: "https://psychandcustodyevaluations.com/resources" },
};

const whatToBring = [
  "Photo ID (driver's license, passport, or state ID)",
  "Current insurance card (front and back)",
  "List of current medications and dosages",
  "Relevant prior evaluations, report cards, or IEP/504 plans",
  "Referral letter or order from your provider (if applicable)",
  "Glasses or hearing aids if you use them",
  "A snack and water — evaluations can take 3–6 hours",
  "For minors: a parent or legal guardian must accompany",
];

const acceptedInsurance = [
  "Blue Cross Blue Shield",
  "SelectHealth",
  "Aetna",
  "Cigna",
  "United Healthcare",
  "Regence",
  "EMI Health",
  "PEHP",
  "Medicare",
  "Utah Medicaid",
  "TRICARE",
  "Motor Vehicle / Workers' Comp (case-by-case)",
];

const prepChecklist = [
  "Get a good night's sleep the night before — fatigue affects testing accuracy.",
  "Eat a normal breakfast. Testing on an empty stomach skews results.",
  "Take routine medications as prescribed unless your provider instructs otherwise.",
  "Arrive 15 minutes early to complete intake paperwork.",
  "For ADHD testing: avoid caffeine the morning of your appointment.",
  "Bring a list of symptoms, concerns, and questions you want answered.",
  "Plan for a 3–6 hour visit depending on evaluation type.",
];

const faqItems = [
  {
    q: "Do I need a referral?",
    a: "A referral is not always required. Many patients self-refer. Some insurance plans require a referral for coverage — we'll verify your benefits before your first appointment.",
  },
  {
    q: "How long does an evaluation take?",
    a: "ADHD testing: 2–4 hours. Full neuropsychological evaluation: 3–6 hours. Autism / ADOS-2: 2–4 hours. Custody evaluation: multiple sessions over several weeks.",
  },
  {
    q: "What ages do you serve?",
    a: "Children as young as 2–4 for certain assessments, adolescents, adults, and geriatric patients. ADOS-2 and autism assessments available across the lifespan.",
  },
  {
    q: "Is telehealth available?",
    a: "Telehealth is available for initial consultations, follow-up appointments, therapy, and some assessments. Most formal evaluations require in-person testing.",
  },
  {
    q: "How do I get a copy of my records?",
    a: "Submit a signed records request to our office. We respond within 30 days per HIPAA. A modest fee may apply for copy and mailing.",
  },
  {
    q: "When will I get my evaluation report?",
    a: "Most reports are ready within 2–4 weeks of your final testing session. Rush processing is available for custody or time-sensitive cases.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[var(--cps-dark)] via-[var(--cps-gradient-mid)] to-[var(--cps-dark)] text-[var(--cps-white)] py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Patient Resources</h1>
            <p className="text-[var(--cps-white)]/70 body-large max-w-[60ch]">
              Everything you need to prepare for your appointment, understand your insurance, and
              know your rights as a patient.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#prep"
                className="inline-flex items-center gap-2 px-6 py-4 bg-[var(--cps-white)] text-[var(--cps-dark)] font-semibold rounded-xl hover:bg-[var(--cps-light)] transition-colors"
              >
                <ClipboardList className="w-5 h-5" aria-hidden="true" /> Prep Checklist
              </a>
              <a
                href="#insurance"
                className="inline-flex items-center gap-2 px-6 py-4 bg-transparent border-2 border-white text-[var(--cps-white)] font-semibold rounded-xl hover:bg-[var(--cps-white)]/10 transition-colors"
              >
                <CreditCard className="w-5 h-5" aria-hidden="true" /> Insurance
              </a>
              <a
                href="tel:8014831600"
                className="inline-flex items-center gap-2 px-6 py-4 bg-[var(--cps-blue)] text-[var(--cps-white)] font-semibold rounded-xl hover:bg-[var(--cps-blue-hover)] transition-colors"
              >
                <Phone className="w-5 h-5" aria-hidden="true" /> (801) 483-1600
              </a>
            </div>
          </div>
        </section>

        {/* Prep Checklist */}
        <section id="prep" className="py-12 md:py-16 bg-[var(--cps-white)]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <p className="text-[var(--cps-blue)] font-semibold text-sm uppercase tracking-wider mb-4">
                  Before Your Visit
                </p>
                <h2 className="section-heading text-[var(--cps-gray-900)] mb-6">
                  Evaluation-Day Prep Checklist
                </h2>
                <ul className="space-y-4">
                  {prepChecklist.map((item) => (
                    <li key={item} className="flex items-start gap-4 text-[var(--cps-gray-700)]">
                      <CheckCircle2
                        className="w-6 h-6 text-[var(--cps-success)] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="body-large leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div id="forms" className="bg-[var(--cps-gray-50)] rounded-2xl border border-[var(--cps-gray-200)] p-8">
                <div className="w-14 h-14 rounded-xl bg-[var(--cps-light)] flex items-center justify-center mb-6">
                  <FileText className="w-7 h-7 text-[var(--cps-blue)]" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-[var(--cps-gray-900)] mb-4">
                  What to Bring
                </h3>
                <p className="text-sm text-[var(--cps-gray-500)] mb-6">
                  Arrive prepared. Bringing these items helps us start on time and deliver the most
                  accurate evaluation.
                </p>
                <ul className="space-y-4 text-sm text-[var(--cps-gray-700)]">
                  {whatToBring.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2
                        className="w-4 h-4 text-[var(--cps-blue)] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Insurance */}
        <section id="insurance" className="py-12 md:py-16 bg-[var(--cps-gray-50)]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="text-center mb-12">
              <p className="text-[var(--cps-blue)] font-semibold text-sm uppercase tracking-wider mb-4">
                Insurance &amp; Billing
              </p>
              <h2 className="section-heading text-[var(--cps-gray-900)] mb-4">
                Accepted Insurance Plans
              </h2>
              <p className="text-[var(--cps-gray-500)] body-large max-w-[60ch] mx-auto">
                We verify your benefits before your first appointment. If you don&apos;t see your plan,
                call us — we add plans regularly.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
              {acceptedInsurance.map((plan) => (
                <div
                  key={plan}
                  className="bg-[var(--cps-white)] border border-[var(--cps-gray-200)] rounded-xl p-6 flex items-center gap-2"
                >
                  <CheckCircle2
                    className="w-4 h-4 text-[var(--cps-success)] shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-sm font-medium text-[var(--cps-gray-700)]">{plan}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[var(--cps-white)] rounded-2xl border border-[var(--cps-gray-200)] p-6">
                <CreditCard
                  className="w-8 h-8 text-[var(--cps-blue)] mb-4"
                  aria-hidden="true"
                />
                <h3 className="font-bold text-[var(--cps-gray-900)] mb-2">Self-Pay Rates</h3>
                <p className="text-sm text-[var(--cps-gray-600)] leading-relaxed">
                  Transparent self-pay rates available. Call for a quote tailored to your
                  evaluation type.
                </p>
              </div>
              <div className="bg-[var(--cps-white)] rounded-2xl border border-[var(--cps-gray-200)] p-6">
                <Calendar
                  className="w-8 h-8 text-[var(--cps-blue)] mb-4"
                  aria-hidden="true"
                />
                <h3 className="font-bold text-[var(--cps-gray-900)] mb-2">Payment Plans</h3>
                <p className="text-sm text-[var(--cps-gray-600)] leading-relaxed">
                  Flexible payment plans available for self-pay patients and uncovered services.
                </p>
              </div>
              <div className="bg-[var(--cps-white)] rounded-2xl border border-[var(--cps-gray-200)] p-6">
                <Shield
                  className="w-8 h-8 text-[var(--cps-blue)] mb-4"
                  aria-hidden="true"
                />
                <h3 className="font-bold text-[var(--cps-gray-900)] mb-2">Benefits Verification</h3>
                <p className="text-sm text-[var(--cps-gray-600)] leading-relaxed">
                  We verify your coverage before you arrive so there are no surprises on the day
                  of your evaluation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-12 md:py-16 bg-[var(--cps-white)]">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="text-center mb-12">
              <p className="text-[var(--cps-blue)] font-semibold text-sm uppercase tracking-wider mb-4">
                Frequently Asked
              </p>
              <h2 className="section-heading text-[var(--cps-gray-900)] mb-4">
                Questions &amp; Answers
              </h2>
            </div>

            <div className="space-y-4">
              {faqItems.map((item) => (
                <details
                  key={item.q}
                  className="group bg-[var(--cps-gray-50)] rounded-2xl border border-[var(--cps-gray-200)] p-6 open:shadow-md transition-shadow"
                >
                  <summary className="flex items-start gap-4 cursor-pointer list-none">
                    <HelpCircle
                      className="w-6 h-6 text-[var(--cps-blue)] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="flex-1 font-bold text-[var(--cps-gray-900)]">{item.q}</span>
                    <span
                      className="text-[var(--cps-blue)] text-2xl leading-none group-open:rotate-45 transition-transform"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 pl-10 text-[var(--cps-gray-700)] leading-relaxed">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Patient Rights */}
        <section id="patient-rights" className="py-12 md:py-16 bg-[var(--cps-gray-50)]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[var(--cps-white)] rounded-2xl border border-[var(--cps-gray-200)] p-8">
                <Shield
                  className="w-8 h-8 text-[var(--cps-blue)] mb-4"
                  aria-hidden="true"
                />
                <h2 className="text-xl font-bold text-[var(--cps-gray-900)] mb-4">
                  Your Patient Rights
                </h2>
                <p className="text-sm text-[var(--cps-gray-600)] leading-relaxed mb-6">
                  You have the right to understand your diagnosis, consent to treatment, access
                  your records, and file a complaint if something goes wrong. Read the full HIPAA
                  notice or privacy policy below.
                </p>
                <ul className="space-y-4">
                  <li>
                    <Link
                      href="/hipaa"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--cps-blue)] hover:underline"
                    >
                      <FileText className="w-4 h-4" aria-hidden="true" /> HIPAA Notice of Privacy Practices
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--cps-blue)] hover:underline"
                    >
                      <FileText className="w-4 h-4" aria-hidden="true" /> Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[var(--cps-dark)] via-[var(--cps-gradient-mid)] to-[var(--cps-dark)] text-[var(--cps-white)] rounded-2xl p-8">
                <Calendar
                  className="w-8 h-8 text-[var(--cps-teal)] mb-4"
                  aria-hidden="true"
                />
                <h2 className="text-xl font-bold mb-4">Ready to schedule?</h2>
                <p className="text-[var(--cps-white)]/70 mb-6 leading-relaxed">
                  Call us during business hours Monday–Friday, 8am–6pm, or request an appointment
                  online. We typically respond within one business day.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:8014831600"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-[var(--cps-blue)] hover:bg-[var(--cps-blue-hover)] text-[var(--cps-white)] font-bold rounded-xl transition-colors"
                  >
                    <Phone className="w-5 h-5" aria-hidden="true" /> (801) 483-1600
                  </a>
                  <a
                    href="mailto:cps@wecanhelpout.com"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-transparent border-2 border-white text-[var(--cps-white)] font-bold rounded-xl hover:bg-[var(--cps-white)]/10 transition-colors"
                  >
                    <Mail className="w-5 h-5" aria-hidden="true" /> Email Us
                  </a>
                </div>
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
