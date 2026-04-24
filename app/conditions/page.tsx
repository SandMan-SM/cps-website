import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, Brain, HeartPulse, Sparkles, BookOpen, Activity, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { BreadcrumbSchema } from "@/components/JsonLd";
import { conditions } from "@/lib/conditions";
import type { ConditionSlug } from "@/lib/conditions";

export const metadata: Metadata = {
  title: "Conditions We Treat — Utah | Comprehensive Psychological Services",
  description:
    "CPS Utah evaluates and treats adult ADHD, adult autism, concussion/TBI, dementia and memory concerns, learning disabilities, and treatment-resistant depression. Since 1986.",
  alternates: { canonical: "https://psychandcustodyevaluations.com/conditions" },
  openGraph: {
    title: "Conditions We Treat — CPS Utah",
    description:
      "Adult ADHD, adult autism, concussion/TBI, memory & dementia, learning disabilities, treatment-resistant depression.",
    url: "https://psychandcustodyevaluations.com/conditions",
    siteName: "Comprehensive Psychological Services",
    type: "website",
  },
};

const ICONS: Record<ConditionSlug, React.ReactNode> = {
  "adhd-in-adults": <Zap className="w-6 h-6 text-[var(--cps-blue)]" aria-hidden="true" />,
  "autism-in-adults": <Sparkles className="w-6 h-6 text-[var(--cps-blue)]" aria-hidden="true" />,
  "concussion-tbi": <Brain className="w-6 h-6 text-[var(--cps-blue)]" aria-hidden="true" />,
  "dementia-memory": <BookOpen className="w-6 h-6 text-[var(--cps-blue)]" aria-hidden="true" />,
  "learning-disability": <Activity className="w-6 h-6 text-[var(--cps-blue)]" aria-hidden="true" />,
  "treatment-resistant-depression": <HeartPulse className="w-6 h-6 text-[var(--cps-blue)]" aria-hidden="true" />,
};

export default function ConditionsIndexPage() {
  return (
    <>
      <Navbar />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://psychandcustodyevaluations.com" },
          { name: "Conditions", url: "https://psychandcustodyevaluations.com/conditions" },
        ]}
      />
      <main id="main">
        <section className="bg-gradient-to-br from-[var(--cps-dark)] via-[var(--cps-gradient-mid)] to-[var(--cps-dark)] text-[var(--cps-white)] py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <p className="text-[var(--cps-teal)] font-semibold text-sm uppercase tracking-wider mb-6">
              Condition Guides
            </p>
            <h1 className="display-heading text-[var(--cps-white)] mb-6 max-w-4xl">
              Conditions We Evaluate & Treat
            </h1>
            <p className="body-large text-[var(--cps-white)]/80 max-w-[65ch]">
              Evidence-based assessment and treatment for the conditions Utah families, adults, and
              referrers ask us about most. Each guide explains who the evaluation is for, what to
              expect, and how CPS can help.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-[var(--cps-white)]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {conditions.map((c) => (
                <Link
                  key={c.slug}
                  href={`/conditions/${c.slug}`}
                  className="group block bg-[var(--cps-light)] rounded-2xl p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cps-blue)] focus-visible:ring-offset-2"
                >
                  <div className="w-12 h-12 rounded-xl bg-[var(--cps-blue)]/10 flex items-center justify-center mb-4">
                    {ICONS[c.slug]}
                  </div>
                  <h2 className="text-xl font-bold text-[var(--cps-gray-900)] mb-2 group-hover:text-[var(--cps-blue)] transition-colors">
                    {c.name}
                  </h2>
                  <p className="text-sm text-[var(--cps-gray-600)] leading-relaxed mb-6">
                    {c.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[var(--cps-blue)] font-semibold text-sm">
                    Read guide
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
              Not sure what fits your situation?
            </h2>
            <p className="text-[var(--cps-white)]/80 body-large mb-8 max-w-[60ch] mx-auto">
              Call CPS. Our intake team listens to what&apos;s going on and routes you to the right
              evaluator or clinician — often on the first call.
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
