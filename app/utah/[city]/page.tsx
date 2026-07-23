import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Building2, CalendarCheck, Check, HeartHandshake, Mail, MapPin, Navigation, Video } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import CtaBar from "@/components/CtaBar";
import OfficeMap from "@/components/OfficeMap";
import KeywordText from "@/components/KeywordText";
import ServiceIcon from "@/components/ServiceIcon";
import { brand, getLocationByCitySlug, insuranceLine } from "@/lib/data";
import { getCity, CITY_SLUGS, neighborCities } from "@/lib/geo";
import { servicePages } from "@/lib/services";
import { getOffice, parseCityLine } from "@/lib/office";

export function generateStaticParams() {
  return CITY_SLUGS.map((city) => ({ city }));
}

type Params = { params: Promise<{ city: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  const url = `${brand.domain}/utah/${city.slug}`;
  const officeLocation = getLocationByCitySlug(city.slug);
  const isIndexableOffice = Boolean(officeLocation);
  const title = officeLocation?.seoTitle ?? `Mental Health Services for ${city.name}, Utah | CPS`;
  const description = officeLocation?.seoDescription ?? `CPS serves ${city.name}, Utah with counseling, medication management, neurofeedback, evaluations, and secure telehealth. Find the nearest Utah office.`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    robots: {
      index: isIndexableOffice,
      follow: true,
      googleBot: {
        index: isIndexableOffice,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      url,
      siteName: brand.name,
      title,
      description,
      locale: "en_US",
      images: [
        {
          url: "/cps-hero.jpg",
          width: 1824,
          height: 862,
          alt: officeLocation
            ? `Comprehensive Psychological Services ${officeLocation.name} office`
            : "Comprehensive Psychological Services behavioral health care in Utah",
        },
      ],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/cps-hero.jpg"] },
  };
}

export default async function CityPage({ params }: Params) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const office = getOffice(city.nearestOffice);
  const officeLocation = getLocationByCitySlug(city.slug);
  const addr = parseCityLine(office.cityLine);
  const neighbors = neighborCities(city.slug, 6);
  const url = `${brand.domain}/utah/${city.slug}`;

  const localFaqs = [
    {
      q: `Which CPS office serves ${city.name}?`,
      a: officeLocation
        ? `Our ${office.name} office is at ${office.full}. Telehealth is also available across Utah.`
        : `The nearest in-person option is our ${office.name} office at ${office.full}. Telehealth is also available across Utah.`,
    },
    {
      q: `Do you offer telehealth for ${city.name} residents?`,
      a: `Yes. If an in-person visit isn't convenient, you can meet with a CPS provider securely by telehealth from anywhere in ${city.name} or the rest of Utah.`,
    },
    {
      q: `What services are available to ${city.name} patients?`,
      a: `CPS offers counseling and psychotherapy, medication management, neurofeedback, evaluations, health and wellness, substance abuse treatment, and employer services. Our scheduling team will confirm provider and office availability for your needs.`,
    },
    {
      q: `Do you accept insurance for ${city.name} patients?`,
      a: insuranceLine,
    },
  ];

  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: officeLocation?.seoTitle ?? `Mental Health Services for ${city.name}, Utah`,
      description: officeLocation?.seoDescription ?? city.blurb,
      isPartOf: { "@id": `${brand.domain}/#website` },
      about: officeLocation
        ? { "@id": `${url}#clinic` }
        : { "@id": `${brand.domain}/#organization` },
      inLanguage: "en-US",
    },
    {
      "@type": "City",
      "@id": `${url}#city`,
      name: `${city.name}, Utah`,
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
  ];

  if (officeLocation) {
    graph.unshift({
      "@type": ["MedicalClinic", "LocalBusiness"],
      "@id": `${url}#clinic`,
      name: `${brand.name} — ${officeLocation.name}`,
      url,
      description: officeLocation.description,
      email: brand.email,
      parentOrganization: { "@id": `${brand.domain}/#organization` },
      address: {
        "@type": "PostalAddress",
        streetAddress: officeLocation.street,
        addressLocality: addr.locality,
        addressRegion: addr.region,
        postalCode: addr.postal,
        addressCountry: "US",
      },
      hasMap: officeLocation.mapsUrl,
      areaServed: officeLocation.nearbyAreas.map((name) => ({
        "@type": "City",
        name: `${name}, Utah`,
      })),
    });
  }

  const jsonLd = { "@context": "https://schema.org", "@graph": graph };

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
              <Link href="/service-area" aria-label="Service Area" className="hover:text-teal-800">Service Area</Link>
              <span aria-hidden={true}></span>
              <span className="font-semibold text-teal-900">{city.name}</span>
            </nav>

            <p className="inline-flex items-center gap-2 rounded-full bg-teal-700/10 px-3 py-1 text-sm font-semibold text-teal-800">
              <MapPin className="h-4 w-4" aria-hidden={true} /> {city.county} County, Utah
            </p>
            <h1 className="mt-4 max-w-3xl text-balance text-4xl font-extrabold tracking-tight text-teal-950 sm:text-5xl">
              {officeLocation
                ? `${officeLocation.name} Mental Health Clinic`
                : `Mental Health Care for ${city.name}, Utah`}
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-teal-800/90">
              {officeLocation?.description ?? city.blurb} Since {brand.since}, CPS has offered
              counseling, medication management, neurofeedback, evaluations, and more across Utah.
            </p>

            <div className="mt-6 grid sm:grid-cols-2" style={{ gap: "2rem" }}>
              <div className="flex items-start gap-4 rounded-2xl border border-teal-100 bg-white p-4 shadow-card">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-teal-700/10 text-teal-700">
                  <Building2 className="h-5 w-5" aria-hidden={true} />
                </span>
                <p className="text-sm text-teal-900">
                  {officeLocation ? (
                    <>
                      Our <span className="font-semibold">{office.name} office</span> is at {office.full}.
                    </>
                  ) : (
                    <>
                      The nearest in-person option for {city.name} is our {" "}
                      <span className="font-semibold">{office.name}</span> office at {office.full}.
                    </>
                  )}
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

        {officeLocation && (
          <section aria-labelledby="office-details-title" className="border-y border-teal-100 bg-white py-16 sm:py-20">
            <div className="mx-auto grid max-w-6xl items-stretch gap-8 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr]">
              <OfficeMap
                location={officeLocation}
                className="min-h-[300px] rounded-3xl border border-teal-100 shadow-card"
              />
              <div className="flex flex-col justify-center rounded-3xl border border-teal-100 bg-teal-50/40 p-8 shadow-card sm:p-9">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-600">CPS Utah office</p>
                <h2 id="office-details-title" className="mt-3 text-3xl font-extrabold tracking-tight text-teal-950">
                  Visit our {officeLocation.name} office
                </h2>
                <p className="mt-4 leading-relaxed text-teal-800/85">{officeLocation.description}</p>
                <address className="mt-5 not-italic text-teal-950">
                  <span className="font-bold">{officeLocation.street}</span>
                  <br />
                  {officeLocation.cityLine}
                </address>
                <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="font-bold text-teal-950">Office days</dt>
                    <dd className="mt-1 text-teal-800/80">{brand.hours}</dd>
                  </div>
                  <div>
                    <dt className="font-bold text-teal-950">Nearby communities</dt>
                    <dd className="mt-1 text-teal-800/80">{officeLocation.nearbyAreas.join(", ")}</dd>
                  </div>
                </dl>
                <p className="mt-5 text-sm leading-relaxed text-teal-800/75">
                  Need arrival or accessibility guidance? Add a note to your appointment request and our scheduling team can help before your visit.
                </p>
                <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="/#request"
                    data-book-appointment="true"
                    data-appointment-location={officeLocation.name}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-teal-800"
                  >
                    <CalendarCheck className="h-4 w-4" aria-hidden={true} /> Request an appointment
                  </a>
                  <a
                    href={officeLocation.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-teal-200 bg-white px-5 py-3 text-sm font-bold text-teal-800 transition hover:bg-teal-50"
                  >
                    <Navigation className="h-4 w-4" aria-hidden={true} /> Get directions
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Services */}
        <section className="bg-teal-50/40 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-teal-950 sm:text-4xl">
              Services for {city.name} patients
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-teal-800/90">
              Explore CPS behavioral health services. Our scheduling team will confirm the right
              provider, in-person office availability, and telehealth options for your needs.
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
                  title: officeLocation ? `Local ${officeLocation.name} office` : `Serving ${city.name}`,
                  body: `${office.name} office: ${office.full}. Telehealth is also available across Utah.`,
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
                {`Whether you're looking for counseling, medication management, neurofeedback, or a substance abuse evaluation, CPS makes care simple for ${city.name} families. Telehealth keeps every service within reach, and our team will match you with the right provider after your request.`}
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
                Nearby communities CPS serves
              </h2>
              <div className="mt-6 flex flex-wrap gap-4">
                {neighbors.map((n) => (
                  <span
                    key={n.slug}
                    className="inline-flex items-center gap-1.5 rounded-full border border-teal-200 bg-white px-4 py-2 text-sm font-semibold text-teal-800 shadow-card"
                  >
                    <MapPin className="h-4 w-4" aria-hidden={true} /> {n.name}
                  </span>
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
        )}

        {/* Final CTA */}
        <section className="bg-band py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to get started in {city.name}?
            </h2>
            <p className="mt-4 text-lg text-teal-100">
              Request an appointment and we&apos;ll reach out to match you with the right
              provider, or subscribe for practical CPS resources.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/#request"
                data-book-appointment="true"
                aria-label="Request an appointment"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-base font-bold text-teal-900 transition hover:bg-teal-50"
              >
                <CalendarCheck className="h-5 w-5" aria-hidden={true} /> Request an appointment
              </Link>
              <a
                href="/#subscribe"
                aria-label="Subscribe to CPS updates"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/70 px-6 py-4 text-base font-bold text-white transition hover:bg-white/10"
              >
                <Mail className="h-5 w-5" aria-hidden={true} /> Subscribe
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
