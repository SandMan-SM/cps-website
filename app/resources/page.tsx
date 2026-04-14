import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, FileText, Shield, HelpCircle, Calendar, CreditCard, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Patient Resources & Forms | Comprehensive Psychological Services",
  description: "Resources, forms, and information for CPS patients including insurance, billing, what to bring, and patient rights.",
  openGraph: {
    title: "Patient Resources & Forms | Comprehensive Psychological Services",
    description: "Resources, forms, and information for CPS patients including insurance, billing, what to bring, and patient rights.",
    url: "https://psychandcustodyevaluations.com/resources",
    siteName: "Comprehensive Psychological Services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patient Resources & Forms | CPS Utah",
    description: "Insurance info, patient forms, billing FAQs, and patient rights for CPS patients.",
  },
  alternates: { canonical: "https://psychandcustodyevaluations.com/resources" },
};

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[var(--cps-dark)] via-[var(--cps-gradient-mid)] to-[var(--cps-dark)] text-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Patient Resources</h1>
            <p className="text-white/70 body-large max-w-[60ch]">Everything you need to prepare for your appointment, understand your insurance, and know your rights as a patient.</p>
          </div>
        </section>

        {/* Resource Cards */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* Forms & Documents */}
              <div id="forms" className="bg-[var(--cps-gray-50)] rounded-2xl border border-[var(--cps-gray-200)] p-8">
                <div className="w-14 h-14 rounded-xl bg-[var(--cps-light)] flex items-center justify-center mb-6">
                  <FileText className="w-7 h-7 text-[var(--cps-blue)]" />
                </div>
                <h2 className="text-xl font-bold text-[var(--cps-gray-900)] mb-4">Forms & Documents</h2>
                <p className="text-sm text-[var(--cps-gray-500)] mb-6">Download new patient forms, insurance cards, and what to bring to your first appointment.</p>
                <ul className="space-y-4 text-sm text-[var(--cps-gray-600)]">
                  <li className="flex items-start gap-2"><FileText className="w-4 h-4 text-[var(--cps-blue)] shrink-0 mt-0.5" /> New Patient Intake Form</li>
                  <li className="flex items-start gap-2"><FileText className="w-4 h-4 text-[var(--cps-blue)] shrink-0 mt-0.5" /> Insurance Verification Form</li>
                  <li className="flex items-start gap-2"><FileText className="w-4 h-4 text-[var(--cps-blue)] shrink-0 mt-0.5" /> What to Bring Checklist</li>
                  <li className="flex items-start gap-2"><FileText className="w-4 h-4 text-[var(--cps-blue)] shrink-0 mt-0.5" /> Minors Consent Form</li>
                </ul>
              </div>

              {/* Insurance & Billing */}
              <div id="insurance" className="bg-[var(--cps-gray-50)] rounded-2xl border border-[var(--cps-gray-200)] p-8">
                <div className="w-14 h-14 rounded-xl bg-[var(--cps-light)] flex items-center justify-center mb-6">
                  <CreditCard className="w-7 h-7 text-[var(--cps-blue)]" />
                </div>
                <h2 className="text-xl font-bold text-[var(--cps-gray-900)] mb-4">Insurance & Billing</h2>
                <p className="text-sm text-[var(--cps-gray-500)] mb-6">Accepted plans, self-pay options, and how we handle insurance verification before your visit.</p>
                <ul className="space-y-4 text-sm text-[var(--cps-gray-600)]">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--cps-blue)] shrink-0 mt-0.5" /> Most major insurance accepted</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--cps-blue)] shrink-0 mt-0.5" /> Self-pay rates available</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--cps-blue)] shrink-0 mt-0.5" /> We verify benefits before your visit</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--cps-blue)] shrink-0 mt-0.5" /> Payment plans available</li>
                </ul>
              </div>

              {/* FAQs */}
              <div id="faq" className="bg-[var(--cps-gray-50)] rounded-2xl border border-[var(--cps-gray-200)] p-8">
                <div className="w-14 h-14 rounded-xl bg-[var(--cps-light)] flex items-center justify-center mb-6">
                  <HelpCircle className="w-7 h-7 text-[var(--cps-blue)]" />
                </div>
                <h2 className="text-xl font-bold text-[var(--cps-gray-900)] mb-4">Frequently Asked Questions</h2>
                <p className="text-sm text-[var(--cps-gray-500)] mb-6">Quick answers to the most common questions about scheduling, evaluations, and what to expect.</p>
                <ul className="space-y-4 text-sm text-[var(--cps-gray-600)]">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--cps-blue)] shrink-0 mt-0.5" /> Do I need a referral?</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--cps-blue)] shrink-0 mt-0.5" /> How long is the evaluation?</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--cps-blue)] shrink-0 mt-0.5" /> What ages do you serve?</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--cps-blue)] shrink-0 mt-0.5" /> Is telehealth available?</li>
                </ul>
              </div>

              {/* Patient Rights */}
              <div id="patient-rights" className="bg-[var(--cps-gray-50)] rounded-2xl border border-[var(--cps-gray-200)] p-8">
                <div className="w-14 h-14 rounded-xl bg-[var(--cps-light)] flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-[var(--cps-blue)]" />
                </div>
                <h2 className="text-xl font-bold text-[var(--cps-gray-900)] mb-4">Patient Rights</h2>
                <p className="text-sm text-[var(--cps-gray-500)] mb-6">Your rights regarding your health information, how to request records, and how to file a complaint.</p>
                <ul className="space-y-4 text-sm text-[var(--cps-gray-600)]">
                  <li><Link href="/hipaa" className="text-[var(--cps-blue)] hover:underline">HIPAA Notice of Privacy Practices</Link></li>
                  <li><Link href="/privacy" className="text-[var(--cps-blue)] hover:underline">Privacy Policy</Link></li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--cps-blue)] shrink-0 mt-0.5" /> Request your records</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--cps-blue)] shrink-0 mt-0.5" /> File a complaint</li>
                </ul>
              </div>

              {/* Scheduling */}
              <div className="bg-[var(--cps-gray-50)] rounded-2xl border border-[var(--cps-gray-200)] p-8">
                <div className="w-14 h-14 rounded-xl bg-[var(--cps-light)] flex items-center justify-center mb-6">
                  <Calendar className="w-7 h-7 text-[var(--cps-blue)]" />
                </div>
                <h2 className="text-xl font-bold text-[var(--cps-gray-900)] mb-4">Scheduling</h2>
                <p className="text-sm text-[var(--cps-gray-500)] mb-6">Call or use our online form. Same-month appointments often available.</p>
                <a href="tel:8014831600" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--cps-blue)] hover:text-[var(--cps-blue-hover)]">
                  <Phone className="w-4 h-4" /> (801) 483-1600
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
