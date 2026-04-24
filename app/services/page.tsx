import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, Brain, ClipboardCheck, Users, Scale, HeartPulse, GraduationCap, Activity, Pill, Video, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { BreadcrumbSchema } from "@/components/JsonLd";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "All Services — Evaluations & Treatment | CPS Utah",
  description:
    "Every service CPS offers — neuropsychological, ADHD, autism, custody, and cognitive evaluations plus ketamine, Spravato, IOP, counseling, medication management, neurofeedback and telehealth. Utah since 1986.",
  alternates: { canonical: "https://psychandcustodyevaluations.com/services" },
  openGraph: {
    title: "All Services — CPS Utah",
    description:
      "Evaluations and treatment offered at Comprehensive Psychological Services across Salt Lake City, Layton & West Jordan.",
    url: "https://psychandcustodyevaluations.com/services",
    siteName: "Comprehensive Psychological Services",
    type: "website",
  },
};

const EVAL_SLUGS = new Set([
  "neuropsychologist-near-me",
  "neuropsychologist",
  "adhd-evaluation-near-me",
  "adhd-diagnosis-near-me",
  "adhd-testing",
  "neuropsychological-testing-for-adhd",
  "autism-assessment",
  "ados-2-testing-near-me",
  "cognitive-evaluation-near-me",
  "custody-evaluator-near-me",
]);

const ICONS: Record<string, React.ReactNode> = {
  "neuropsychologist-near-me": <Brain className="w-6 h-6 text-[var(--cps-blue)]" aria-hidden="true" />,
  "neuropsychologist": <Brain className="w-6 h-6 text-[var(--cps-blue)]" aria-hidden="true" />,
  "adhd-evaluation-near-me": <ClipboardCheck className="w-6 h-6 text-[var(--cps-blue)]" aria-hidden="true" />,
  "adhd-diagnosis-near-me": <ClipboardCheck className="w-6 h-6 text-[var(--cps-blue)]" aria-hidden="true" />,
  "adhd-testing": <ClipboardCheck className="w-6 h-6 text-[var(--cps-blue)]" aria-hidden="true" />,
  "neuropsychological-testing-for-adhd": <Brain className="w-6 h-6 text-[var(--cps-blue)]" aria-hidden="true" />,
  "autism-assessment": <Users className="w-6 h-6 text-[var(--cps-blue)]" aria-hidden="true" />,
  "ados-2-testing-near-me": <Users className="w-6 h-6 text-[var(--cps-blue)]" aria-hidden="true" />,
  "cognitive-evaluation-near-me": <GraduationCap className="w-6 h-6 text-[var(--cps-blue)]" aria-hidden="true" />,
  "custody-evaluator-near-me": <Scale className="w-6 h-6 text-[var(--cps-blue)]" aria-hidden="true" />,
  "ketamine-depression-treatment-near-me": <HeartPulse className="w-6 h-6 text-[var(--cps-blue)]" aria-hidden="true" />,
  "spravato-esketamine-therapy": <HeartPulse className="w-6 h-6 text-[var(--cps-blue)]" aria-hidden="true" />,
  "intensive-outpatient-program-iop": <Activity className="w-6 h-6 text-[var(--cps-blue)]" aria-hidden="true" />,
  "counseling-and-psychotherapy": <Users className="w-6 h-6 text-[var(--cps-blue)]" aria-hidden="true" />,
  "medication-management": <Pill className="w-6 h-6 text-[var(--cps-blue)]" aria-hidden="true" />,
  "neurofeedback-therapy": <Zap className="w-6 h-6 text-[var(--cps-blue)]" aria-hidden="true" />,
  "telehealth-therapy": <Video className="w-6 h-6 text-[var(--cps-blue)]" aria-hidden="true" />,
};

export default function ServicesIndexPage() {
  const evaluations = services.filter((s) => EVAL_SLUGS.has(s.slug));
  const treatments = services.filter((s) => !EVAL_SLUGS.has(s.slug));

  return (
    <>
      <Navbar />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://psychandcustodyevaluations.com" },
          { name: "Services", url: "https://psychandcustodyevaluations.com/services" },
        ]}
      />
      <main id="main">
        <section className="bg-gradient-to-br from-[var(--cps-dark)] via-[var(--cps-gradient-mid)] to-[var(--cps-dark)] text-[var(--cps-white)] py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <p className="text-[var(--cps-teal)] font-semibold text-sm uppercase tracking-wider mb-6">
              Full Service Catalog
            </p>
            <h1 className="display-heading text-[var(--cps-white)] mb-6 max-w-4xl">
              All CPS Services — Evaluations & Treatment
            </h1>
            <p className="body-large text-[var(--cps-white)]/80 max-w-[65ch]">
              Every evaluation and treatment we offer, organized so you can quickly find what fits.
              Three Utah locations; doctoral-level clinicians; insurance accepted.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-[var(--cps-white)]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="flex items-center justify-between mb-8">
              <h2 className="section-heading text-[var(--cps-gray-900)]">Evaluations</h2>
              <span className="text-sm text-[var(--cps-gray-500)]">{evaluations.length} services</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {evaluations.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  className="group block bg-[var(--cps-light)] rounded-2xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cps-blue)] focus-visible:ring-offset-2"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--cps-blue)]/10 flex items-center justify-center mb-4">
                    {ICONS[s.slug]}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--cps-gray-900)] mb-2 group-hover:text-[var(--cps-blue)] transition-colors">
                    {s.shortName}
                  </h3>
                  <p className="text-sm text-[var(--cps-gray-600)] leading-relaxed mb-6">
                    {s.heroSubtitle}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[var(--cps-blue)] font-semibold text-sm">
                    Learn more
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-[var(--cps-gray-50)]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="flex items-center justify-between mb-8">
              <h2 className="section-heading text-[var(--cps-gray-900)]">Treatment</h2>
              <span className="text-sm text-[var(--cps-gray-500)]">{treatments.length} services</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {treatments.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  className="group block bg-[var(--cps-white)] rounded-2xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cps-blue)] focus-visible:ring-offset-2"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--cps-blue)]/10 flex items-center justify-center mb-4">
                    {ICONS[s.slug]}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--cps-gray-900)] mb-2 group-hover:text-[var(--cps-blue)] transition-colors">
                    {s.shortName}
                  </h3>
                  <p className="text-sm text-[var(--cps-gray-600)] leading-relaxed mb-6">
                    {s.heroSubtitle}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[var(--cps-blue)] font-semibold text-sm">
                    Learn more
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-gradient-to-br from-[var(--cps-dark)] via-[var(--cps-gradient-mid)] to-[var(--cps-dark)] text-[var(--cps-white)]">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
            <h2 className="section-heading text-[var(--cps-white)] mb-4">
              Not sure which service fits?
            </h2>
            <p className="text-[var(--cps-white)]/80 body-large mb-8 max-w-[60ch] mx-auto">
              Our intake team listens to what&apos;s going on and routes you to the right evaluator
              or clinician — often on the first call.
            </p>
            <a
              href="tel:8014831600"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--cps-blue)] hover:bg-[var(--cps-blue-hover)] text-[var(--cps-white)] font-bold rounded-xl transition-colors text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cps-teal)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--cps-dark)]"
            >
              <Phone className="w-5 h-5" aria-hidden="true" /> (801) 483-1600
            </a>
          </div>
        </section>
      </main>
      <StickyMobileCTA />
      <Footer />
    </>
  );
}
