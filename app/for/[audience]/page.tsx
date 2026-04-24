import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { BreadcrumbSchema, SpeakableSchema } from "@/components/JsonLd";
import { audiences, getAudience } from "@/lib/audiences";
import { ArrowRight, CheckCircle2, Phone, Mail, HelpCircle } from "lucide-react";

export function generateStaticParams() {
  return audiences.map((a) => ({ audience: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ audience: string }>;
}): Promise<Metadata> {
  const { audience } = await params;
  const data = getAudience(audience);
  if (!data) return {};
  const url = `https://psychandcustodyevaluations.com/for/${data.slug}`;
  return {
    title: data.title,
    description: data.metaDescription,
    openGraph: {
      title: data.title,
      description: data.metaDescription,
      url,
      siteName: "Comprehensive Psychological Services",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.metaDescription,
    },
    alternates: { canonical: url },
  };
}

export default async function AudiencePage({
  params,
}: {
  params: Promise<{ audience: string }>;
}) {
  const { audience } = await params;
  const data = getAudience(audience);
  if (!data) notFound();

  const url = `https://psychandcustodyevaluations.com/for/${data.slug}`;

  const faqSchema = {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://psychandcustodyevaluations.com" },
          { name: "For", url: "https://psychandcustodyevaluations.com/for" },
          { name: data.navLabel, url },
        ]}
      />
      <SpeakableSchema url={url} />

      <main id="main">
        <section className="bg-gradient-to-br from-[var(--cps-dark)] via-[var(--cps-gradient-mid)] to-[var(--cps-dark)] text-[var(--cps-white)] py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-[var(--cps-white)]/60">
              <Link href="/" className="hover:text-[var(--cps-white)] transition-colors">
                Home
              </Link>
              <span className="mx-2" aria-hidden="true">
                /
              </span>
              <span>For {data.navLabel}</span>
            </nav>
            <p className="text-[var(--cps-teal)] font-semibold text-sm uppercase tracking-wider mb-6">
              For {data.navLabel}
            </p>
            <h1 className="display-heading text-[var(--cps-white)] mb-6 max-w-4xl">
              {data.h1}
            </h1>
            <p className="body-large text-[var(--cps-white)]/80 mb-10 max-w-[60ch]">{data.hook}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-4 px-8 py-4 bg-[var(--cps-blue)] hover:bg-[var(--cps-blue-hover)] text-[var(--cps-white)] font-bold rounded-xl transition-colors text-lg"
              >
                {data.ctaHeadline}
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <a
                href="tel:8014831600"
                className="inline-flex items-center justify-center gap-4 px-8 py-4 bg-transparent border-2 border-white text-[var(--cps-white)] font-bold rounded-xl hover:bg-[var(--cps-white)]/10 transition-colors text-lg"
              >
                <Phone className="w-5 h-5" aria-hidden="true" /> (801) 483-1600
              </a>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-[var(--cps-white)]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <p className="text-[var(--cps-blue)] font-semibold text-sm uppercase tracking-wider mb-6">
                  What You Get
                </p>
                <h2 className="section-heading text-[var(--cps-gray-900)] mb-8">
                  Built for how you actually work.
                </h2>
                <ul className="space-y-4">
                  {data.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-4">
                      <CheckCircle2
                        className="w-6 h-6 text-[var(--cps-success)] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span className="text-[var(--cps-gray-700)] body-large leading-relaxed">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[var(--cps-gray-50)] rounded-2xl border border-[var(--cps-gray-200)] p-8">
                <p className="text-[var(--cps-blue)] font-semibold text-sm uppercase tracking-wider mb-4">
                  Most-Requested Services
                </p>
                <h3 className="text-2xl font-bold text-[var(--cps-gray-900)] mb-6">
                  Evaluations people in your role refer for
                </h3>
                <div className="space-y-4">
                  {data.services.map((s) => (
                    <Link
                      key={s.title}
                      href={s.href}
                      className="group block bg-[var(--cps-white)] rounded-xl border border-[var(--cps-gray-200)] hover:border-[var(--cps-blue)]/30 hover:shadow-md transition-all p-6"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="font-bold text-[var(--cps-gray-900)] mb-2 group-hover:text-[var(--cps-blue)] transition-colors">
                            {s.title}
                          </h4>
                          <p className="text-sm text-[var(--cps-gray-600)] leading-relaxed">
                            {s.desc}
                          </p>
                        </div>
                        <ArrowRight
                          className="w-5 h-5 text-[var(--cps-gray-400)] group-hover:text-[var(--cps-blue)] shrink-0 mt-1 transition-colors"
                          aria-hidden="true"
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-[var(--cps-gray-50)]">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="text-center mb-12">
              <p className="text-[var(--cps-blue)] font-semibold text-sm uppercase tracking-wider mb-4">
                Frequently Asked
              </p>
              <h2 className="section-heading text-[var(--cps-gray-900)] mb-4">
                Questions from {data.navLabel}
              </h2>
            </div>
            <div className="space-y-4">
              {data.faq.map((item) => (
                <details
                  key={item.q}
                  className="group bg-[var(--cps-white)] rounded-2xl border border-[var(--cps-gray-200)] p-6 open:shadow-md transition-shadow"
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

        <section className="py-12 md:py-20 bg-gradient-to-br from-[var(--cps-dark)] via-[var(--cps-gradient-mid)] to-[var(--cps-dark)] text-[var(--cps-white)]">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
            <h2 className="section-heading text-[var(--cps-white)] mb-4">{data.ctaHeadline}</h2>
            <p className="text-[var(--cps-white)]/80 body-large mb-8 max-w-[60ch] mx-auto">
              {data.ctaBody}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:8014831600"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--cps-blue)] hover:bg-[var(--cps-blue-hover)] text-[var(--cps-white)] font-bold rounded-xl transition-colors text-lg"
              >
                <Phone className="w-5 h-5" aria-hidden="true" /> (801) 483-1600
              </a>
              <a
                href="mailto:cps@wecanhelpout.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-[var(--cps-white)] font-bold rounded-xl hover:bg-[var(--cps-white)]/10 transition-colors text-lg"
              >
                <Mail className="w-5 h-5" aria-hidden="true" /> Email Our Intake Team
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
