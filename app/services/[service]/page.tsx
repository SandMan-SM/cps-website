import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, MapPin, Video, Users, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import CtaBar from "@/components/CtaBar";
import KeywordText from "@/components/KeywordText";
import ServiceIcon from "@/components/ServiceIcon";
import { brand, locations, insuranceLine } from "@/lib/data";
import { getService, SERVICE_SLUGS } from "@/lib/services";
import { cities } from "@/lib/geo";

export function generateStaticParams() {
  return SERVICE_SLUGS.map((service) => ({ service }));
}

type Params = { params: Promise<{ service: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const url = `${brand.domain}/services/${service.slug}`;
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
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
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

export default async function ServicePage({ params }: Params) {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const url = `${brand.domain}/services/${service.slug}`;
  const topCities = topCitySlugs
    .map((s) => cities.find((c) => c.slug === s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalProcedure",
        "@id": `${url}#service`,
        name: service.name,
        description: service.metaDescription,
        url,
        provider: {
          "@type": ["MedicalBusiness", "Psychologist"],
          "@id": `${brand.domain}/#organization`,
          name: brand.name,
          telephone: `+1-${brand.phone}`,
          url: brand.domain,
        },
        areaServed: { "@type": "State", name: "Utah" },
        availableAtOrFrom: locations.map((loc) => ({
          "@type": "MedicalClinic",
          name: `${brand.name} — ${loc.name}`,
          address: {
            "@type": "PostalAddress",
            streetAddress: loc.street,
            addressLocality: loc.cityLine.split(", ")[0],
            addressRegion: "UT",
            addressCountry: "US",
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: brand.domain },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: `${brand.domain}/#services`,
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
              <Link href="/" className="hover:text-teal-800">Home</Link>
              <span aria-hidden={true}></span>
              <a href="/#services" className="hover:text-teal-800">Services</a>
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
              <MapPin className="h-4 w-4" aria-hidden={true} /> Available at all 3 Utah locations
              <span aria-hidden={true}>·</span>
              <Video className="h-4 w-4" aria-hidden={true} /> Telehealth across Utah
            </p>

            <CtaBar className="mt-8" />
            <p className="mt-4 text-sm text-teal-800/70">{insuranceLine}</p>
          </div>
        </section>

        {/* What's included + Who it's for */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight text-teal-950 sm:text-3xl">
                What&apos;s included
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
                  Available at all 3 Utah locations + telehealth
                </p>
                <ul className="mt-3 space-y-2 text-sm text-teal-800/80">
                  {locations.map((loc) => (
                    <li key={loc.id} className="flex items-start gap-2">
                      <MapPin className="mt-0.5 h-4 w-4 flex-none text-teal-600" aria-hidden={true} />
                      <span>
                        <span className="font-semibold text-teal-900">{loc.name}</span> —{" "}
                        {loc.full}
                      </span>
                    </li>
                  ))}
                </ul>
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
              {service.name} near you
            </h2>
            <p className="mt-3 max-w-2xl text-teal-800/90">
              Serving the Wasatch Front from Salt Lake City, Layton, and West Jordan — plus
              telehealth statewide.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              {topCities.map((c) => (
                <Link
                  key={c.slug}
                  href={`/utah/${c.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-teal-200 bg-white px-4 py-2 text-sm font-semibold text-teal-800 shadow-card transition hover:bg-teal-50"
                >
                  <MapPin className="h-4 w-4" aria-hidden={true} /> {c.name}
                </Link>
              ))}
            </div>
            <p className="mt-6">
              <Link
                href="/service-area"
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
              Start {service.name.toLowerCase()} today
            </h2>
            <p className="mt-4 text-lg text-teal-100">
              Call now to speak with a real person, or request an appointment and we&apos;ll
              match you with the right provider.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={brand.phoneHref}
                aria-label={`Call ${brand.name} at ${brand.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-base font-bold text-teal-900 transition hover:bg-teal-50"
              >
                <Phone className="h-5 w-5" aria-hidden={true} /> Call {brand.phone}
              </a>
              <Link
                href="/#request"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70 px-6 py-4 text-base font-bold text-white transition hover:bg-white/10"
              >
                Request an appointment
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
