import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText, CreditCard, HelpCircle, Shield,
  ChevronRight, Phone, Mail, Download, ExternalLink,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Patient Resources | Comprehensive Psychological Services",
  description: "Forms, insurance information, FAQs, and patient rights for Comprehensive Psychological Services patients across Utah.",
  openGraph: {
    title: "Patient Resources | Comprehensive Psychological Services",
    description: "Forms, insurance information, FAQs, and patient rights for Comprehensive Psychological Services patients across Utah.",
    url: "https://psychandcustodyevaluations.com/resources",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Patient Resources | Comprehensive Psychological Services",
    description: "Forms, insurance information, FAQs, and patient rights for Comprehensive Psychological Services patients across Utah.",
  },
  alternates: { canonical: "https://psychandcustodyevaluations.com/resources" },
};

const PHONE = "(801) 483-1600";
const PHONE_HREF = "tel:8014831600";
const EMAIL = "cps@wecanhelpout.com";

const sections = [
  {
    id: "forms",
    icon: FileText,
    title: "Forms & Documents",
    color: "blue",
    items: [
      { label: "New Patient Intake Form", description: "Complete before your first appointment to save time at the office.", tag: "Download" },
      { label: "Insurance Authorization Form", description: "Required for insurance billing. Please complete and bring to your appointment.", tag: "Download" },
      { label: "What to Bring to Your Appointment", description: "A checklist of documents, ID, and insurance cards needed for your visit.", tag: "Guide" },
      { label: "Release of Information Form", description: "Authorizes us to share your records with another provider or organization.", tag: "Download" },
      { label: "Adult ADHD Pre-Screening Questionnaire", description: "Helpful for adult patients requesting ADHD evaluations. Complete at home.", tag: "Download" },
    ],
  },
  {
    id: "insurance",
    icon: CreditCard,
    title: "Insurance & Billing",
    color: "green",
    items: [
      { label: "Accepted Insurance Plans", description: "We accept most major insurance plans including BCBS, Aetna, UnitedHealthcare, Cigna, and many others. Call to verify your specific plan.", tag: "Info" },
      { label: "Self-Pay Options", description: "Competitive self-pay rates are available for patients without insurance coverage. Ask about sliding scale options.", tag: "Info" },
      { label: "Insurance Verification", description: "Our team verifies your benefits before your first appointment at no cost to you. Call us to get started.", tag: "Info" },
      { label: "Financing Options", description: "Payment plans may be available for certain evaluation and treatment costs. Speak with our billing team for details.", tag: "Info" },
      { label: "Medicare & Medicaid", description: "We accept Medicare and select Medicaid plans. Coverage varies by service type — contact us to confirm.", tag: "Info" },
    ],
  },
  {
    id: "faq",
    icon: HelpCircle,
    title: "Frequently Asked Questions",
    color: "purple",
    items: [
      { label: "How do I schedule an appointment?", description: "Call us at (801) 483-1600 Monday–Friday, 8am–6pm, or use the online contact form on our homepage. We'll match you with the right provider and verify your insurance before your first visit." },
      { label: "Do I need a referral?", description: "A referral is not always required. Many patients self-refer. However, some insurance plans require a referral for coverage. We recommend calling first so we can check your benefits." },
      { label: "What should I expect at my first appointment?", description: "Your first appointment typically involves a clinical interview, review of your history, and completion of any questionnaires. Evaluations may span multiple sessions depending on complexity." },
      { label: "How long does an evaluation take?", description: "ADHD evaluations typically take 2–4 hours. Neuropsychological evaluations may require 3–6 hours across one or two sessions. Autism assessments vary by age and test battery." },
      { label: "Can I get a copy of my evaluation report?", description: "Yes. You can request a copy of your report through our office. A signed release form may be required. Reports are typically ready 2–4 weeks after your evaluation is complete." },
      { label: "Do you offer telehealth services?", description: "Yes. We offer telehealth for initial consultations, therapy, medication management, and select evaluation services. Call to ask which services are available via telehealth." },
      { label: "How do I pay for my appointment?", description: "We accept insurance, self-pay, and select financing options. Copays and any out-of-pocket amounts are collected at the time of service. We accept credit cards, checks, and cash." },
      { label: "Can adults be evaluated for ADHD or autism?", description: "Yes. Many adults receive their first accurate diagnosis in adulthood. Our clinicians specialize in recognizing ADHD and autism in adults, including those who were missed or misdiagnosed in childhood." },
      { label: "What is the difference between ADHD and neuropsychological testing?", description: "ADHD testing focuses on attention and executive functioning. Neuropsychological evaluations are broader and assess memory, language, processing speed, and visuospatial skills — better suited for complex or co-occurring conditions." },
      { label: "How do I prepare for a neuropsychological evaluation?", description: "Get a good night's sleep, eat a meal before your appointment, and bring any prior evaluation reports or records. Avoid alcohol the night before. Let us know about any medications you take." },
    ],
  },
  {
    id: "patient-rights",
    icon: Shield,
    title: "Patient Rights",
    color: "orange",
    items: [
      { label: "HIPAA Notice of Privacy Practices", description: "Learn how we collect, use, and protect your health information under federal law.", tag: "View", href: "/hipaa" },
      { label: "Privacy Policy", description: "Our full privacy policy covering website use and patient data practices.", tag: "View", href: "/privacy" },
      { label: "Right to Access Your Records", description: "You have the right to access and receive copies of your health records. Submit a written request to our office — we will respond within 30 days." },
      { label: "Right to Request Amendments", description: "If you believe information in your record is incorrect, you may request an amendment. We will review your request and notify you of our decision." },
      { label: "Right to File a Complaint", description: "If you believe your privacy rights have been violated, you may file a complaint with our office or with the U.S. Department of Health and Human Services. We will not retaliate against you for filing a complaint." },
      { label: "Confidentiality & Limits", description: "Your information is confidential. Exceptions include situations involving imminent safety risk, mandatory abuse reporting, or court orders as required by Utah law." },
    ],
  },
];

const colorMap: Record<string, { bg: string; icon: string; badge: string }> = {
  blue: { bg: "bg-[var(--cps-light)]", icon: "text-[var(--cps-blue)]", badge: "bg-[var(--cps-light)] text-[var(--cps-blue)]" },
  green: { bg: "bg-[var(--cps-light)]", icon: "text-[var(--cps-teal)]", badge: "bg-[var(--cps-light)] text-[var(--cps-teal)]" },
  purple: { bg: "bg-[var(--cps-light)]", icon: "text-[var(--cps-accent)]", badge: "bg-[var(--cps-light)] text-[var(--cps-accent)]" },
  orange: { bg: "bg-[var(--cps-light)]", icon: "text-[var(--cps-gradient-mid)]", badge: "bg-[var(--cps-light)] text-[var(--cps-gradient-mid)]" },
};

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[var(--cps-dark)] via-[var(--cps-gradient-mid)] to-[var(--cps-dark)] text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-10">
            <div className="flex items-center gap-2 mb-6 text-[var(--cps-teal)]">
              <Link href="/" className="text-sm font-medium hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-sm font-medium">Resources</span>
            </div>
            <h1 className="display-heading text-white mb-4">Patient Resources</h1>
            <p className="body-large text-white/80 max-w-2xl">
              Everything you need to prepare for your appointment, understand your coverage, and know your rights as a CPS patient.
            </p>
          </div>
        </section>

        {/* Quick nav */}
        <section className="bg-[var(--cps-gray-50)] border-b border-[var(--cps-gray-200)] py-4">
          <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-10">
            <div className="flex flex-wrap gap-4">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-[var(--cps-gray-200)] text-sm font-medium text-[var(--cps-gray-700)] hover:border-[var(--cps-blue)] hover:text-[var(--cps-blue)] transition-colors"
                >
                  <s.icon className="w-4 h-4" />
                  {s.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Sections */}
        {sections.map((section) => {
          const colors = colorMap[section.color];
          return (
            <section key={section.id} id={section.id} className="py-12 md:py-16 bg-white border-b border-[var(--cps-gray-100)]">
              <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center`}>
                    <section.icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                  <h2 className="text-2xl font-bold text-[var(--cps-gray-900)]">{section.title}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-6 rounded-xl border border-[var(--cps-gray-200)] bg-[var(--cps-gray-50)] hover:border-[var(--cps-gray-300)] transition-colors">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start gap-2 mb-1">
                          <span className="font-semibold text-[var(--cps-gray-900)] text-sm leading-snug">{item.label}</span>
                          {"tag" in item && item.tag && (
                            <span className={`shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full ${colors.badge}`}>{item.tag}</span>
                          )}
                        </div>
                        <p className="text-sm text-[var(--cps-gray-600)] leading-relaxed">{item.description}</p>
                        {"href" in item && item.href && (
                          <Link href={item.href} className={`inline-flex items-center gap-1 mt-2 text-sm font-medium ${colors.icon} hover:underline`}>
                            View <ExternalLink className="w-3 h-3" />
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* Contact CTA */}
        <section className="py-12 md:py-16 bg-[var(--cps-gray-50)]">
          <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-10 text-center">
            <h2 className="text-2xl font-bold text-[var(--cps-gray-900)] mb-4">Still Have Questions?</h2>
            <p className="text-[var(--cps-gray-600)] mb-8 max-w-xl mx-auto">Our team is happy to help you with forms, insurance questions, or anything else you need before your appointment.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={PHONE_HREF} className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--cps-blue)] hover:bg-[var(--cps-blue-hover)] text-white font-semibold rounded-xl transition-colors">
                <Phone className="w-4 h-4" /> {PHONE}
              </a>
              <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[var(--cps-blue)] text-[var(--cps-blue)] font-semibold rounded-xl hover:bg-[var(--cps-light)] transition-colors">
                <Mail className="w-4 h-4" /> {EMAIL}
              </a>
              <Link href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--cps-gray-900)] hover:bg-[var(--cps-gray-700)] text-white font-semibold rounded-xl transition-colors">
                Schedule Online <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
