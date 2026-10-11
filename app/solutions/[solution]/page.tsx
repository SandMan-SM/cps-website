import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, MapPin, Compass, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import CtaBar from "@/components/CtaBar";
import KeywordText from "@/components/KeywordText";
import ServiceIcon from "@/components/ServiceIcon";
import { brand } from "@/lib/data";
import { getSolution, SOLUTION_SLUGS } from "@/lib/services";
import { cities } from "@/lib/geo";

export function generateStaticParams() {
  return SOLUTION_SLUGS.map((solution) => ({ solution }));
}

type Params = { params: Promise<{ solution: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { solution: slug } = await params;
  const service = getSolution(slug);
  if (!service) return {};
  const url = `${brand.domain}/solutions/${service.slug}`;
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      url,
      siteName: brand.name,
      title: service.metaTitle,
      description: service.metaDescription,
      locale: "en_US",
      images: [{ url: "/brand/utah-solutions-hero.png", width: 1942, height: 809, alt: `Representative scene about ${service.name.toLowerCase()} options in Utah` }],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: ["/brand/utah-solutions-hero.png"],
    },
  };
}

// Top cities to interlink from each service page.
const topCitySlugs = [
  "salt-lake-city",
  "west-jordan",
  "layton",
  "sandy",
  "murray",
  "south-jordan",
  "draper",
  "ogden",
  "bountiful",
  "lehi",
];

export default async function SolutionPage({ params }: Params) {
  const { solution: slug } = await params;
  const service = getSolution(slug);
  if (!service) notFound();

  const url = `${brand.domain}/solutions/${service.slug}`;
  const topCities = topCitySlugs
    .map((s) => cities.find((c) => c.slug === s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@id": `${brand.domain}/#organization`,
        "@type": "Organization",
        name: brand.name,
        description: "Guidance for health, home, business, family, and everyday solutions throughout Utah.",
        url: brand.domain,
        areaServed: { "@type": "State", name: "Utah" },
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: `${service.name} guidance`,
        description: service.metaDescription,
        url,
        provider: {
          "@type": "Organization",
          "@id": `${brand.domain}/#organization`,
          name: brand.name,
          url: brand.domain,
        },
        areaServed: { "@type": "State", name: "Utah" },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: brand.domain },
          {
            "@type": "ListItem",
            position: 2,
            name: "Solutions",
            item: `${brand.domain}/#solutions`,
          },
          { "@type": "ListItem", position: 3, name: service.name, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: service.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="pb-24 md:pb-0">
        {/* Hero */}
        <section className="bg-hero">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <nav
              aria-label="Breadcrumb"
              className="mb-4 flex flex-wrap items-center gap-1.5 text-sm text-teal-700/80"
            >
              <Link href="/" aria-label="Home" className="hover:text-teal-800">Home</Link>
              <span aria-hidden={true}></span>
              <a href="/#solutions" aria-label="Explore solutions" className="hover:text-teal-800">Solutions</a>
              <span aria-hidden={true}></span>
              <span className="font-semibold text-teal-900">{service.name}</span>
            </nav>

            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-700/10 text-teal-700">
              <ServiceIcon name={service.icon} className="h-7 w-7" />
            </span>
            <h1 className="mt-5 max-w-3xl text-balance text-4xl font-extrabold tracking-tight text-teal-950 sm:text-5xl">
              {service.h1}
            </h1>
            <div className="mt-4 max-w-2xl">
              <KeywordText selfUrl={url} className="text-lg text-teal-800/90">
                {service.intro}
              </KeywordText>
            </div>

            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal-700/10 px-4 py-2 text-sm font-semibold text-teal-800">
              <Compass className="h-4 w-4" aria-hidden={true} /> Explore appropriate options across Utah
            </p>

            <CtaBar className="mt-8" solutionName={service.name} />
            <p className="mt-4 text-sm text-teal-800/70">Scope, availability, qualifications, and pricing are confirmed with the organization you choose.</p>
          </div>
        </section>

        {/* What's included + Who it's for */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-teal-950 sm:text-3xl">
                Options to discuss
              </h2>
              <ul className="mt-6 space-y-3">
                {service.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-teal-700/10 text-teal-700">
                      <Check className="h-4 w-4" aria-hidden={true} />
                    </span>
                    <span className="text-teal-900">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-teal-950 sm:text-3xl">
                Who it&apos;s for
              </h2>
              <ul className="mt-6 space-y-3">
                {service.whoFor.map((w) => (
                  <li key={w} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-teal-700/10 text-teal-700">
                      <Users className="h-4 w-4" aria-hidden={true} />
                    </span>
                    <span className="text-teal-900">{w}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl border border-teal-100 bg-white p-6 shadow-card">
                <p className="text-sm font-semibold text-teal-900">
                  A practical next step
                </p>
                <p className="mt-4 text-sm leading-relaxed text-teal-800/80">
                  Share your preferred area and the type of support you are exploring. Our
                  team will help clarify possible options. The organization you choose confirms
                  availability, suitability, and costs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-teal-50/40 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-teal-950 sm:text-4xl">
              {service.name} FAQs
            </h2>
            <div className="mt-8 space-y-4">
              {service.faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-teal-100 bg-white p-6 shadow-card"
                >
                  <summary className="cursor-pointer list-none font-bold text-teal-950 [&::-webkit-details-marker]:hidden">
                    {f.q}
                  </summary>
                  <p className="mt-3 text-teal-800/90">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Top cities */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-2xl font-extrabold tracking-tight text-teal-950 sm:text-3xl">
              {service.name} for Utah communities
            </h2>
            <p className="mt-3 max-w-2xl text-teal-800/90">
              Explore guidance for your community across the Wasatch Front. Service availability
              depends on the organization and the type of support you need.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              {topCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/utah/${c.slug}`}
                  aria-label={`${c.name} solution guidance`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-teal-200 bg-white px-4 py-2 text-sm font-semibold text-teal-800 shadow-card transition hover:bg-teal-50"
                >
                  <MapPin className="h-4 w-4" aria-hidden={true} /> {c.name}
                </Link>
              ))}
            </div>
            <p className="mt-6">
              <Link
                href="/service-area"
                aria-label="View all Utah cities we serve"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800"
              >
                View all Utah cities we serve →
              </Link>
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-band py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Find your next step
            </h2>
            <p className="mt-4 text-lg text-teal-100">
              Send a request and we&apos;ll help you explore the right direction for
              {" "}{service.name.toLowerCase()}.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/#request"
                data-book-appointment="true"
                data-appointment-service={service.name}
                aria-label="Request a solution"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70 px-6 py-4 text-base font-bold text-white transition hover:bg-white/10"
              >
                Request a solution
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}

