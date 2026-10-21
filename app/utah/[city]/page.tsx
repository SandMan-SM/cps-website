import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Handshake,
  ListChecks,
  MapPin,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import ServiceIcon from "@/components/ServiceIcon";
import { brand } from "@/lib/data";
import {
  cityServiceSummary,
  getCity,
  CITY_SLUGS,
  neighborCities,
} from "@/lib/geo";
import { solutionPages } from "@/lib/services";

export function generateStaticParams() {
  return CITY_SLUGS.map((city) => ({ city }));
}

type Params = { params: Promise<{ city: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};

  const url = `${brand.domain}/utah/${city.slug}`;
  const title = `Utah Solutions Navigation in ${city.name} | CPS Utah`;
  const description =
    `${brand.name}, in partnership with ${brand.partnerName}, helps ${city.name} residents ` +
    "explore health, home, business, legal, financial, family, education, career, technology, senior, and local-resource solutions.";

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      url,
      siteName: brand.name,
      title,
      description,
      locale: "en_US",
      images: [
        {
          url: "/brand/utah-solutions-hero.png",
          width: 1942,
          height: 809,
          alt: `A calm conversation about choosing services in ${city.name}, Utah`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/brand/utah-solutions-hero.png"],
    },
  };
}

export default async function CityPage({ params }: Params) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const neighbors = neighborCities(city.slug, 6);
  const url = `${brand.domain}/utah/${city.slug}`;
  const summary = cityServiceSummary(city);
  const featuredSolutions = solutionPages.filter((solution) => solution.featured);
  const localFaqs = [
    {
      q: `How can ${brand.shortName} help people in ${city.name}?`,
      a: `${brand.name} offers statewide solutions navigation. We help you organize what you are trying to solve, understand relevant categories, and prepare questions for an appropriate business, professional, program, or community resource.`,
    },
    {
      q: `Is this a local business directory for ${city.name}?`,
      a: `No. This is a statewide navigation resource with geographic context for ${city.name} and ${city.county} County. It does not claim that any particular business, professional, or organization is based in the city.`,
    },
    {
      q: `What types of solutions can ${city.name} residents explore?`,
      a: "People can explore health and wellness, mental health, home and property, business and professional, legal, financial and insurance, family and community, education, careers, senior and caregiver, technology, and local-resource categories. Availability, eligibility, pricing, and service area are confirmed directly with the organization selected.",
    },
    {
      q: "What should I confirm before choosing a business or professional?",
      a: "Ask about qualifications or licensure where relevant, experience, scope, service area, current availability, pricing, insurance or payment terms, and what to expect before agreeing to service.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `Utah solutions navigation in ${city.name}`,
        description: summary,
        isPartOf: { "@id": `${brand.domain}/#website` },
        publisher: { "@id": `${brand.domain}/#organization` },
        about: { "@id": `${url}#city` },
        inLanguage: "en-US",
      },
      {
        "@type": "City",
        "@id": `${url}#city`,
        name: `${city.name}, Utah`,
        geo: {
          "@type": "GeoCoordinates",
          latitude: city.lat,
          longitude: city.lng,
        },
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: `${city.county} County, Utah`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: brand.domain },
          {
            "@type": "ListItem",
            position: 2,
            name: "Service Area",
            item: `${brand.domain}/service-area`,
          },
          { "@type": "ListItem", position: 3, name: city.name, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: localFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
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
        <section className="bg-hero">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <nav
              aria-label="Breadcrumb"
              className="mb-4 flex flex-wrap items-center gap-1.5 text-sm text-teal-700/80"
            >
              <Link href="/" aria-label="Home" className="inline-block py-1 hover:text-teal-800">
                Home
              </Link>
              <span aria-hidden={true}>/</span>
              <Link
                href="/service-area"
                aria-label="Service Area"
                className="inline-block py-1 hover:text-teal-800"
              >
                Service Area
              </Link>
              <span aria-hidden={true}>/</span>
              <span className="font-semibold text-teal-900">{city.name}</span>
            </nav>

            <div className="flex flex-wrap gap-4">
              <p className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-1 text-sm font-semibold text-teal-800">
                <MapPin className="h-4 w-4" aria-hidden={true} /> {city.county} County, Utah
              </p>
              <p className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-1 text-sm font-semibold text-teal-800">
                <Handshake className="h-4 w-4" aria-hidden={true} /> Partnered with {brand.partnerName}
              </p>
            </div>

            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold tracking-tight text-teal-950 sm:text-5xl">
              Utah solutions navigation for {city.name}
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-teal-800/90">
              {summary}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <article className="flex items-start gap-4 rounded-2xl border border-teal-100 bg-white p-6 shadow-card">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                  <Compass className="h-5 w-5" aria-hidden={true} />
                </span>
                <div>
                  <h2 className="font-bold text-teal-950">A clearer starting point</h2>
                  <p className="mt-1 text-sm leading-relaxed text-teal-800/80">
                    Describe the kind of support you are exploring and the practical factors
                    that matter to you.
                  </p>
                </div>
              </article>
              <article className="flex items-start gap-4 rounded-2xl border border-teal-100 bg-white p-6 shadow-card">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                  <ListChecks className="h-5 w-5" aria-hidden={true} />
                </span>
                <div>
                  <h2 className="font-bold text-teal-950">Questions for your next conversation</h2>
                  <p className="mt-1 text-sm leading-relaxed text-teal-800/80">
                    We help you prepare to verify credentials, availability, cost, format, and fit
                    directly with a business, professional, program, or organization.
                  </p>
                </div>
              </article>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#solutions"
                aria-label="Explore Utah solution categories"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-4 text-base font-bold text-white shadow-lg shadow-teal-900/10 transition hover:bg-teal-800"
              >
                Explore solutions <ArrowRight className="h-5 w-5" aria-hidden={true} />
              </Link>
              <a
                href="/#request"
                data-book-appointment="true"
                aria-label={`Request solutions-navigation guidance for ${city.name}`}
                className="inline-flex items-center justify-center rounded-full border-2 border-teal-700 px-6 py-4 text-base font-bold text-teal-800 transition hover:bg-teal-50"
              >
                Request guidance
              </a>
            </div>
          </div>
        </section>

        <section className="bg-teal-50/40 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-teal-950 sm:text-4xl">
              Featured solution categories
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-teal-800/90">
              These pages cover common needs across health, home, work, money, family,
              technology, and community life. They do not promise that a specific business or
              professional is located in {city.name}; confirm availability, service area,
              qualifications, pricing, and terms directly.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredSolutions.map((solution) => (
                <Link
                  key={solution.slug}
                  href={`/solutions/${solution.slug}`}
                  aria-label={`Explore ${solution.name} solutions`}
                  className="group flex flex-col rounded-2xl border border-teal-100 bg-white p-6 shadow-card transition hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-cardHover"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-700 transition group-hover:bg-teal-700 group-hover:text-white">
                    <ServiceIcon name={solution.icon} aria-hidden={true} />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-teal-950">{solution.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-teal-800/80">
                    {solution.cardDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700">
                    Explore this category <ArrowRight className="h-4 w-4" aria-hidden={true} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-teal-950 sm:text-4xl">
              How solutions navigation can help in {city.name}
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Clarify the kind of help you are seeking",
                  body: "Start with the outcome you want, without needing to know the exact professional title, business type, or program first.",
                },
                {
                  title: "Consider practical fit",
                  body: `Think through service area, remote options, schedule, budget, urgency, and accessibility from ${city.name}.`,
                },
                {
                  title: "Verify important details",
                  body: "Use focused questions to confirm qualifications, scope, availability, pricing, insurance or payment terms, and service expectations.",
                },
                {
                  title: `Connected through ${brand.partnerName}`,
                  body: "Our partnership is focused on helping Utah residents move from uncertainty toward an informed next step.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="flex items-start gap-4 rounded-2xl border border-teal-100 bg-white p-6 shadow-card"
                >
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                    <CheckCircle2 className="h-5 w-5" aria-hidden={true} />
                  </span>
                  <div>
                    <h3 className="font-bold text-teal-950">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-teal-800/80">{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-teal-50/40 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-teal-950 sm:text-4xl">
              {city.name} solutions-navigation FAQs
            </h2>
            <div className="mt-8 space-y-4">
              {localFaqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-teal-100 bg-white p-6 shadow-card"
                >
                  <summary className="cursor-pointer list-none font-bold text-teal-950 [&::-webkit-details-marker]:hidden">
                    {faq.q}
                  </summary>
                  <p className="mt-4 leading-relaxed text-teal-800/90">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {neighbors.length > 0 && (
          <section className="py-16 sm:py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <h2 className="text-2xl font-extrabold tracking-tight text-teal-950 sm:text-3xl">
                Explore nearby community guides
              </h2>
              <p className="mt-4 max-w-2xl text-teal-800/80">
                These links provide geographic context only; they do not represent business,
                professional, or organization locations.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                {neighbors.map((neighbor) => (
                  <Link
                    key={neighbor.slug}
                    href={`/utah/${neighbor.slug}`}
                    aria-label={`Solutions-navigation guidance for ${neighbor.name}, Utah`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-teal-200 bg-white px-4 py-2 text-sm font-semibold text-teal-800 shadow-card transition hover:bg-teal-50"
                  >
                    <MapPin className="h-4 w-4" aria-hidden={true} /> {neighbor.name}
                  </Link>
                ))}
              </div>
              <p className="mt-6">
                <Link
                  href="/service-area"
                  aria-label="View all Utah community guides"
                  className="inline-flex items-center gap-1.5 py-1 text-sm font-semibold text-teal-700 hover:text-teal-800"
                >
                  View all Utah community guides <ArrowRight className="h-4 w-4" aria-hidden={true} />
                </Link>
              </p>
            </div>
          </section>
        )}

        <section className="bg-band py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready for a clearer next step?
            </h2>
            <p className="mt-4 text-lg text-teal-100">
              Share what you are trying to solve. We&apos;ll help you organize your options and
              prepare to connect with an appropriate business, professional, program, or resource.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/#solutions"
                aria-label="Explore Utah solution categories"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-base font-bold text-teal-900 transition hover:bg-teal-50"
              >
                Explore solutions <ArrowRight className="h-5 w-5" aria-hidden={true} />
              </Link>
              <a
                href="/#request"
                data-book-appointment="true"
                aria-label={`Request solutions-navigation guidance for ${city.name}`}
                className="inline-flex items-center justify-center rounded-full border-2 border-white/80 px-6 py-4 text-base font-bold text-white transition hover:bg-white/10"
              >
                Request guidance
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
