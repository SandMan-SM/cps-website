import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Phone, Mail, HelpCircle, Target, Microscope, Activity } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { BreadcrumbSchema, SpeakableSchema } from "@/components/JsonLd";
import { conditions, getCondition } from "@/lib/conditions";

export function generateStaticParams() {
  return conditions.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getCondition(slug);
  if (!data) return {};
  const url = `https://psychandcustodyevaluations.com/conditions/${data.slug}`;
  return {
    title: data.title,
    description: data.metaDescription,
    openGraph: {
      title: data.title,
      description: data.metaDescription,
      url,
      siteName: "Comprehensive Psychological Services",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.metaDescription,
    },
    alternates: { canonical: url },
  };
}

export default async function ConditionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getCondition(slug);
  if (!data) notFound();

  const url = `https://psychandcustodyevaluations.com/conditions/${data.slug}`;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <Navbar />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://psychandcustodyevaluations.com" },
          { name: "Conditions", url: "https://psychandcustodyevaluations.com/conditions" },
          { name: data.name, url },
        ]}
      />
      <SpeakableSchema url={url} />

      <main id="main">
        <section className="bg-gradient-to-br from-[var(--cps-dark)] via-[var(--cps-gradient-mid)] to-[var(--cps-dark)] text-[var(--cps-white)] py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[var(--cps-white)]/60">
              <Link href="/" className="hover:text-[var(--cps-white)] transition-colors">Home</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <Link href="/conditions" className="hover:text-[var(--cps-white)] transition-colors">Conditions</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span>{data.name}</span>
            </nav>
            <p className="text-[var(--cps-teal)] font-semibold text-sm uppercase tracking-wider mb-6">
              Condition Guide
            </p>
            <h1 className="display-heading text-[var(--cps-white)] mb-6 max-w-4xl">{data.h1}</h1>
            <p className="body-large text-[var(--cps-white)]/80 mb-10 max-w-[65ch]">{data.hook}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-4 px-8 py-4 bg-[var(--cps-blue)] hover:bg-[var(--cps-blue-hover)] text-[var(--cps-white)] font-bold rounded-xl transition-colors text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cps-teal)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--cps-dark)]"
              >
                Schedule an Evaluation
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <a
                href="tel:8014831600"
                className="inline-flex items-center justify-center gap-4 px-8 py-4 bg-transparent border-2 border-white text-[var(--cps-white)] font-bold rounded-xl hover:bg-[var(--cps-white)]/10 transition-colors text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cps-teal)]"
              >
                <Phone className="w-5 h-5" aria-hidden="true" /> (801) 483-1600
              </a>
            </div>
          </div>
        </section>

        {/* Who it's for + Signs */}
        <section className="py-12 md:py-20 bg-[var(--cps-white)]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-[var(--cps-light)] rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[var(--cps-blue)]/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-[var(--cps-blue)]" aria-hidden="true" />
                  </div>
                  <h2 className="text-2xl font-bold text-[var(--cps-gray-900)]">Who This Is For</h2>
                </div>
                <ul className="space-y-4">
                  {data.whoItsFor.map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-[var(--cps-blue)] shrink-0 mt-1" aria-hidden="true" />
                      <span className="text-[var(--cps-gray-700)] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-[var(--cps-white)] border border-[var(--cps-gray-200)] rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[var(--cps-teal)]/10 flex items-center justify-center">
                    <Activity className="w-6 h-6 text-[var(--cps-teal)]" aria-hidden="true" />
                  </div>
                  <h2 className="text-2xl font-bold text-[var(--cps-gray-900)]">Signs to Watch For</h2>
                </div>
                <ul className="space-y-4">
                  {data.signs.map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-[var(--cps-teal)] shrink-0 mt-1" aria-hidden="true" />
                      <span className="text-[var(--cps-gray-700)] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Mid-page CTA */}
        <section className="py-8 bg-[var(--cps-light)]">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <p className="text-lg font-bold text-[var(--cps-gray-900)]">
                Want to know if an evaluation is right for you?
              </p>
              <p className="text-sm text-[var(--cps-gray-600)] mt-2">
                Our intake team will walk you through insurance, scheduling, and what to expect.
              </p>
            </div>
            <a
              href="tel:8014831600"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap px-8 py-4 bg-[var(--cps-blue)] hover:bg-[var(--cps-blue-hover)] text-[var(--cps-white)] font-bold rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cps-blue)] focus-visible:ring-offset-2"
            >
              <Phone className="w-5 h-5" aria-hidden="true" /> (801) 483-1600
            </a>
          </div>
        </section>

        {/* How we evaluate */}
        <section className="py-12 md:py-20 bg-[var(--cps-white)]">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[var(--cps-blue)]/10 flex items-center justify-center">
                <Microscope className="w-6 h-6 text-[var(--cps-blue)]" aria-hidden="true" />
              </div>
              <h2 className="section-heading text-[var(--cps-gray-900)]">How CPS Evaluates {data.name}</h2>
            </div>
            <ol className="space-y-6">
              {data.howWeEvaluate.map((item, idx) => (
                <li key={item} className="flex items-start gap-6">
                  <span className="w-10 h-10 rounded-xl bg-[var(--cps-blue)] text-[var(--cps-white)] font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-[var(--cps-gray-700)] leading-relaxed body-large pt-1">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Treatment options */}
        <section className="py-12 md:py-20 bg-[var(--cps-gray-50)]">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
            <h2 className="section-heading text-[var(--cps-gray-900)] mb-8">Treatment Options at CPS</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {data.treatmentOptions.map((opt) => (
                <div
                  key={opt}
                  className="bg-[var(--cps-white)] rounded-xl border border-[var(--cps-gray-200)] p-6 flex items-start gap-4"
                >
                  <CheckCircle2 className="w-5 h-5 text-[var(--cps-success)] shrink-0 mt-1" aria-hidden="true" />
                  <span className="text-[var(--cps-gray-700)] leading-relaxed">{opt}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related services */}
        <section className="py-12 md:py-20 bg-[var(--cps-white)]">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
            <h2 className="section-heading text-[var(--cps-gray-900)] mb-8">Related Services</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {data.relatedServices.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="group block bg-[var(--cps-light)] rounded-2xl p-6 hover:bg-[var(--cps-blue)]/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cps-blue)]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[var(--cps-gray-900)] group-hover:text-[var(--cps-blue)]">
                      {s.title}
                    </span>
                    <ArrowRight className="w-5 h-5 text-[var(--cps-blue)]" aria-hidden="true" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-20 bg-[var(--cps-gray-50)]">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="text-center mb-12">
              <p className="text-[var(--cps-blue)] font-semibold text-sm uppercase tracking-wider mb-4">
                Frequently Asked
              </p>
              <h2 className="section-heading text-[var(--cps-gray-900)] mb-4">About {data.name}</h2>
            </div>
            <div className="space-y-4">
              {data.faq.map((item) => (
                <details
                  key={item.q}
                  className="group bg-[var(--cps-white)] rounded-2xl border border-[var(--cps-gray-200)] p-6 open:shadow-md transition-shadow"
                >
                  <summary className="flex items-start gap-4 cursor-pointer list-none">
                    <HelpCircle className="w-6 h-6 text-[var(--cps-blue)] shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="flex-1 font-bold text-[var(--cps-gray-900)]">{item.q}</span>
                    <span
                      className="text-[var(--cps-blue)] text-2xl leading-none group-open:rotate-45 transition-transform"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 pl-10 text-[var(--cps-gray-700)] leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* End CTA */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-[var(--cps-dark)] via-[var(--cps-gradient-mid)] to-[var(--cps-dark)] text-[var(--cps-white)]">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
            <h2 className="section-heading text-[var(--cps-white)] mb-4">
              Ready to get a clear answer about {data.name}?
            </h2>
            <p className="text-[var(--cps-white)]/80 body-large mb-8 max-w-[60ch] mx-auto">
              CPS has served Utah since 1986. Call us and our intake team will verify your insurance,
              match you with the right specialist, and schedule your first appointment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8014831600"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--cps-blue)] hover:bg-[var(--cps-blue-hover)] text-[var(--cps-white)] font-bold rounded-xl transition-colors text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cps-teal)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--cps-dark)]"
              >
                <Phone className="w-5 h-5" aria-hidden="true" /> (801) 483-1600
              </a>
              <a
                href="mailto:cps@wecanhelpout.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-[var(--cps-white)] font-bold rounded-xl hover:bg-[var(--cps-white)]/10 transition-colors text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cps-teal)]"
              >
                <Mail className="w-5 h-5" aria-hidden="true" /> Email Intake
              </a>
            </div>
          </div>
        </section>
      </main>
      <StickyMobileCTA />
      <Footer />
    </>
  );
}
