import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarCheck, Check, MapPin, Video, Users, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import CtaBar from "@/components/CtaBar";
import KeywordText from "@/components/KeywordText";
import ServiceIcon from "@/components/ServiceIcon";
import { brand, locations, insuranceLine } from "@/lib/data";
import { getService, SERVICE_SLUGS } from "@/lib/services";

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
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
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
      title: service.metaTitle,
      description: service.metaDescription,
      locale: "en_US",
      images: [
        {
          url: "/cps-hero.jpg",
          width: 1824,
          height: 862,
          alt: `${service.name} at Comprehensive Psychological Services in Utah`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: ["/cps-hero.jpg"],
    },
  };
}

export default async function ServicePage({ params }: Params) {
  const { service: slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const url = `${brand.domain}/services/${service.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: service.name,
        serviceType: service.name,
        description: service.metaDescription,
        url,
        provider: { "@id": `${brand.domain}/#organization` },
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
              <Link href="/" aria-label="Home" className="hover:text-teal-800">Home</Link>
              <span aria-hidden={true}></span>
              <a href="/#services" aria-label="Jump to services section" className="hover:text-teal-800">Services</a>
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
              <KeywordText selfUrl={`/services/${service.slug}`} className="text-lg text-teal-800/90">
                {service.intro}
              </KeywordText>
            </div>

            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal-700/10 px-4 py-2 text-sm font-semibold text-teal-800">
              <MapPin className="h-4 w-4" aria-hidden={true} /> Three Utah offices + telehealth options
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
                  Ask our scheduling team about office and telehealth availability
                </p>
                <ul className="mt-3 space-y-2 text-sm text-teal-800/80">
                  {locations.map((loc) => (
                    <li key={loc.id} className="flex items-start gap-2">
                      <MapPin className="mt-0.5 h-4 w-4 flex-none text-teal-600" aria-hidden={true} />
                      <span>
                        <Link href={`/utah/${loc.citySlug}`} className="font-semibold text-teal-900 hover:text-teal-700">
                          {loc.name} office
                        </Link>{" "}—{" "}
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
              {locations.map((loc) => (
                <Link
                  key={loc.id}
                  href={`/utah/${loc.citySlug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-teal-200 bg-white px-4 py-2 text-sm font-semibold text-teal-800 shadow-card transition hover:bg-teal-50"
                >
                  <MapPin className="h-4 w-4" aria-hidden={true} /> {loc.name} office
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
              Request an appointment and we&apos;ll match you with the right provider, or
              subscribe for practical CPS resources.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/#request"
                data-book-appointment="true"
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
