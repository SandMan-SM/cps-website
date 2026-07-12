import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Video, Phone, Car, HeartHandshake, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import CtaBar from "@/components/CtaBar";
import KeywordText from "@/components/KeywordText";
import ServiceIcon from "@/components/ServiceIcon";
import { brand, insuranceLine } from "@/lib/data";
import { getCity, CITY_SLUGS, neighborCities } from "@/lib/geo";
import { servicePages } from "@/lib/services";
import { getOffice, officeGeo, parseCityLine } from "@/lib/office";

export function generateStaticParams() {
  return CITY_SLUGS.map((city) => ({ city }));
}

type Params = { params: Promise<{ city: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  const url = `${brand.domain}/utah/${city.slug}`;
  const title = `Therapy, Counseling & Psychiatry in ${city.name}, Utah | CPS`;
  const description = `Compassionate mental health care for ${city.name}, Utah. Counseling, medication management, neurofeedback, evaluations, and substance abuse treatment — in person and via telehealth. Serving ${city.name} since ${brand.since}. Call ${brand.phone}.`;
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
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function CityPage({ params }: Params) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const office = getOffice(city.nearestOffice);
  const officeCoords = officeGeo[city.nearestOffice];
  const addr = parseCityLine(office.cityLine);
  const neighbors = neighborCities(city.slug, 6);
  const url = `${brand.domain}/utah/${city.slug}`;

  const localFaqs = [
    {
      q: `How far is CPS from ${city.name}?`,
      a: `Our ${office.name} office is about ${city.distanceMiles} mi (~${city.driveTimeMin} min) from ${city.name}, at ${office.full}. Telehealth is also available across Utah.`,
    },
    {
      q: `Do you offer telehealth for ${city.name} residents?`,
      a: `Yes. If an in-person visit isn't convenient, you can meet with a CPS provider securely by telehealth from anywhere in ${city.name} or the rest of Utah.`,
    },
    {
      q: `What services are available to ${city.name} patients?`,
      a: `${city.name} patients have access to all CPS services: counseling and psychotherapy, medication management, neurofeedback, evaluations, health and wellness, substance abuse treatment, and employer services.`,
    },
    {
      q: `Do you accept insurance for ${city.name} patients?`,
      a: insuranceLine,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalClinic", "LocalBusiness"],
        "@id": `${url}#clinic`,
        name: `${brand.name} — ${office.name}`,
        url,
        telephone: `+1-${brand.phone}`,
        parentOrganization: { "@id": `${brand.domain}/#organization` },
        address: {
          "@type": "PostalAddress",
          streetAddress: office.street,
          addressLocality: addr.locality,
          addressRegion: addr.region,
          postalCode: addr.postal,
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: officeCoords.lat,
          longitude: officeCoords.lng,
        },
        areaServed: {
          "@type": "City",
          name: `${city.name}, Utah`,
        },
        openingHours: "Mo-Fr",
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
        mainEntity: localFaqs.map((f) => ({
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
              <Link href="/service-area" className="hover:text-teal-800">Service Area</Link>
              <span aria-hidden={true}></span>
              <span className="font-semibold text-teal-900">{city.name}</span>
            </nav>

            <p className="inline-flex items-center gap-2 rounded-full bg-teal-700/10 px-3 py-1 text-sm font-semibold text-teal-800">
              <MapPin className="h-4 w-4" aria-hidden={true} /> {city.county} County, Utah
            </p>
            <h1 className="mt-4 max-w-3xl text-balance text-4xl font-extrabold tracking-tight text-teal-950 sm:text-5xl">
              Mental Health Care in {city.name}, Utah
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-teal-800/90">
              {city.blurb} Serving {city.name} and the Wasatch Front since {brand.since},
              CPS offers counseling, medication management, neurofeedback, and more.
            </p>

            <div className="mt-6 grid sm:grid-cols-2" style={{ gap: "2rem" }}>
              <div className="flex items-start gap-4 rounded-2xl border border-teal-100 bg-white p-4 shadow-card">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-teal-700/10 text-teal-700">
                  <Car className="h-5 w-5" aria-hidden={true} />
                </span>
                <p className="text-sm text-teal-900">
                  Our <span className="font-semibold">{office.name}</span> office is about{" "}
                  <span className="font-semibold">{city.distanceMiles} mi (~{city.driveTimeMin} min)</span>{" "}
                  from {city.name} — {office.full}.
                </p>
              </div>
              <div className="flex items-start gap-4 rounded-2xl border border-teal-100 bg-white p-4 shadow-card">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-teal-700/10 text-teal-700">
                  <Video className="h-5 w-5" aria-hidden={true} />
                </span>
                <p className="text-sm text-teal-900">
                  Prefer to stay home? <span className="font-semibold">Telehealth is available</span>{" "}
                  across Utah, so {city.name} residents can meet a provider securely from anywhere.
                </p>
              </div>
            </div>

            <CtaBar className="mt-8" />
            <p className="mt-4 text-sm text-teal-800/70">{insuranceLine}</p>
          </div>
        </section>

        {/* Services */}
        <section className="bg-teal-50/40 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-teal-950 sm:text-4xl">
              Services for {city.name} patients
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-teal-800/90">
              A full range of behavioral health care, available in person at our{" "}
              {office.name} office and by telehealth throughout Utah.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {servicePages.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group flex flex-col rounded-2xl border border-teal-100 bg-white p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-cardHover"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-700/10 text-teal-700 transition group-hover:bg-teal-700 group-hover:text-white">
                    <ServiceIcon name={service.icon} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-teal-950">{service.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-teal-800/80">
                    {service.intro.split(". ")[0]}.
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why this city chooses CPS */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-teal-950 sm:text-4xl">
              Why {city.name} chooses CPS
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: MapPin,
                  title: `Close to ${city.name}`,
                  body: `Our ${office.name} office is roughly ${city.distanceMiles} mi (~${city.driveTimeMin} min) away — plus telehealth across Utah.`,
                },
                {
                  icon: HeartHandshake,
                  title: `Trusted since ${brand.since}`,
                  body: `Nearly four decades of community-rooted behavioral health care across the Wasatch Front.`,
                },
                {
                  icon: Video,
                  title: "Telehealth or in person",
                  body: `Meet with a provider at the office or securely from home in ${city.name} — your choice.`,
                },
                {
                  icon: Check,
                  title: "Whole-person care",
                  body: `${brand.providerCount} licensed providers offering therapy, medication, and wellness under one roof.`,
                },
              ].map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="flex items-start gap-4 rounded-2xl border border-teal-100 bg-white p-6 shadow-card"
                >
                  <span className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-teal-700/10 text-teal-700">
                    <Icon className="h-5 w-5" aria-hidden={true} />
                  </span>
                  <div>
                    <h3 className="font-bold text-teal-950">{title}</h3>
                    <p className="mt-1 text-sm text-teal-800/80">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 max-w-3xl">
              <KeywordText
                selfUrl={`/utah/${city.slug}`}
                className="text-lg leading-relaxed text-teal-800/90"
              >
                {`Whether you're looking for counseling, medication management, neurofeedback, or a substance abuse evaluation, CPS makes care simple for ${city.name} families. Telehealth keeps every service within reach, and our team will match you with the right provider on your first call.`}
              </KeywordText>
            </div>
          </div>
        </section>

        {/* Local FAQ */}
        <section className="bg-teal-50/40 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-teal-950 sm:text-4xl">
              {city.name} FAQs
            </h2>
            <div className="mt-8 space-y-4">
              {localFaqs.map((f) => (
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

        {/* Neighboring cities */}
        {neighbors.length > 0 && (
          <section className="py-16 sm:py-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <h2 className="text-2xl font-extrabold tracking-tight text-teal-950 sm:text-3xl">
                CPS also serves nearby cities
              </h2>
              <div className="mt-6 flex flex-wrap gap-4">
                {neighbors.map((n) => (
                  <Link
                    key={n.slug}
                    href={`/utah/${n.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-teal-200 bg-white px-4 py-2 text-sm font-semibold text-teal-800 shadow-card transition hover:bg-teal-50"
                  >
                    <MapPin className="h-4 w-4" aria-hidden={true} /> {n.name}
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
        )}

        {/* Final CTA */}
        <section className="bg-band py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to get started in {city.name}?
            </h2>
            <p className="mt-4 text-lg text-teal-100">
              Call now to speak with a real person, or request an appointment and we&apos;ll
              reach out to match you with the right provider.
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
