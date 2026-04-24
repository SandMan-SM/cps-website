import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import SubscribeForm from "./subscribe-form";
import { Mail, Brain, Users, GraduationCap, Scale, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Newsletter — Evidence-Based Updates for Caregivers & Referrers",
  description:
    "Monthly newsletter from CPS Utah: evaluation-prep guides, what new research means for your family, and updates for attorneys, schools, and primary-care referrers.",
  openGraph: {
    title: "CPS Newsletter — Evidence-Based Behavioral Health Updates",
    description:
      "Monthly newsletter from Comprehensive Psychological Services. Practical, HIPAA-safe guidance for caregivers, attorneys, and referrers.",
    url: "https://psychandcustodyevaluations.com/newsletter",
    siteName: "Comprehensive Psychological Services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CPS Newsletter",
    description:
      "Monthly, evidence-based behavioral-health updates from CPS Utah. No spam. Unsubscribe anytime.",
  },
  alternates: { canonical: "https://psychandcustodyevaluations.com/newsletter" },
};

const audiences = [
  {
    icon: Users,
    title: "For Parents & Caregivers",
    desc: "What a new diagnosis actually means. How to advocate in schools. Which evaluations answer which questions.",
  },
  {
    icon: Scale,
    title: "For Attorneys",
    desc: "How custody evaluators work, what a report can and can't say in court, and emerging case law on forensic psych.",
  },
  {
    icon: GraduationCap,
    title: "For Schools & Referrers",
    desc: "Evaluation pathways for IEP/504, fastest route from concern to clarity, and when to route to a neuropsych.",
  },
];

const whatYouGet = [
  "Monthly — not daily. We respect your inbox.",
  "Plain-language summaries of new research",
  "Real evaluation-prep tips from our clinicians",
  "Zero PHI, zero spam, unsubscribe in one click",
];

export default function NewsletterPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <section className="bg-gradient-to-br from-[var(--cps-dark)] via-[var(--cps-gradient-mid)] to-[var(--cps-dark)] text-[var(--cps-white)] py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--cps-white)]/10 border border-white/10 mb-8">
              <Mail className="w-4 h-4 text-[var(--cps-teal)]" aria-hidden="true" />
              <span className="text-sm font-semibold text-[var(--cps-teal)] uppercase tracking-wider">
                Free · Monthly
              </span>
            </div>
            <h1 className="display-heading text-[var(--cps-white)] mb-6">
              Evidence-based behavioral-health updates, once a month.
            </h1>
            <p className="body-large text-[var(--cps-white)]/80 mb-10 max-w-[60ch] mx-auto">
              Practical guidance from CPS Utah for parents navigating a new diagnosis, attorneys
              interpreting a forensic report, and clinicians referring for evaluation. HIPAA-safe.
              Never marketing fluff.
            </p>
            <SubscribeForm />
            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
              {whatYouGet.map((line) => (
                <li
                  key={line}
                  className="flex items-start gap-2 text-sm text-[var(--cps-white)]/80"
                >
                  <CheckCircle2
                    className="w-4 h-4 text-[var(--cps-teal)] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-[var(--cps-white)]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="text-center mb-16">
              <p className="text-[var(--cps-blue)] font-semibold text-sm uppercase tracking-wider mb-6">
                Who It&apos;s For
              </p>
              <h2 className="section-heading text-[var(--cps-gray-900)] mb-4">
                Pick the signal that fits your role.
              </h2>
              <p className="text-[var(--cps-gray-500)] body-large max-w-[60ch] mx-auto">
                Tell us a bit about yourself when you subscribe and we&apos;ll tailor what lands in
                your inbox.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {audiences.map((a) => {
                const Icon = a.icon;
                return (
                  <div
                    key={a.title}
                    className="bg-[var(--cps-gray-50)] rounded-2xl border border-[var(--cps-gray-200)] p-8"
                  >
                    <div
                      className="w-14 h-14 rounded-xl bg-[var(--cps-light)] flex items-center justify-center mb-6"
                      aria-hidden="true"
                    >
                      <Icon className="w-7 h-7 text-[var(--cps-blue)]" />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--cps-gray-900)] mb-4">
                      {a.title}
                    </h3>
                    <p className="text-[var(--cps-gray-600)] leading-relaxed">{a.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-[var(--cps-gray-50)]">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
            <Brain className="w-12 h-12 text-[var(--cps-blue)] mx-auto mb-6" aria-hidden="true" />
            <h2 className="section-heading text-[var(--cps-gray-900)] mb-4">
              Trusted by Utah families, courts, and clinicians since 1986.
            </h2>
            <p className="text-[var(--cps-gray-500)] body-large max-w-[60ch] mx-auto mb-8">
              Every issue is written and reviewed by licensed CPS clinicians. No ghostwriters,
              no outsourced content mills.
            </p>
          </div>
        </section>
      </main>
      <StickyMobileCTA />
      <Footer />
    </>
  );
}
