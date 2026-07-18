import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Video, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import CtaBar from "@/components/CtaBar";
import { brand, locations } from "@/lib/data";
import { citiesByCounty, cities } from "@/lib/geo";

const url = `${brand.domain}/service-area`;

export const metadata: Metadata = {
  title: "Service Area — Utah Cities We Serve | CPS",
  description: `Comprehensive Psychological Services serves ${cities.length}+ cities across the Wasatch Front from offices in Salt Lake City, Layton, and West Jordan, plus telehealth statewide. Call ${brand.phone}.`,
  alternates: { canonical: url },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url,
    siteName: brand.name,
    title: "Service Area — Utah Cities We Serve | CPS",
    description: `Serving ${cities.length}+ Utah cities across Salt Lake, Davis, Weber, and Utah counties, plus telehealth statewide.`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Area — Utah Cities We Serve | CPS",
    description: `Serving ${cities.length}+ Utah cities across Salt Lake, Davis, Weber, and Utah counties, plus telehealth statewide.`,
  },
};

export default function ServiceAreaPage() {
  const groups = citiesByCounty();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalBusiness", "Psychologist"],
        "@id": `${brand.domain}/#organization`,
        name: brand.name,
        url: brand.domain,
        telephone: `+1-${brand.phone}`,
        email: brand.email,
        foundingDate: String(brand.since),
        founder: {
          "@type": "Person",
          name: brand.founder.name,
          jobTitle: brand.founder.title,
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
            postalCode: loc.cityLine.split(", ")[1]?.split(" ").pop() || "",
            addressCountry: "US",
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: brand.domain },
          { "@type": "ListItem", position: 2, name: "Service Area", item: url },
        ],
      },
      {
        "@type": "ItemList",
        name: "CPS Utah Service Area",
        itemListElement: cities.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `${c.name}, Utah`,
          item: `${brand.domain}/utah/${c.slug}`,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Which Utah cities does CPS serve?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `CPS serves ${cities.length}+ cities across Utah, including Salt Lake City, Murray, Sandy, West Jordan, Layton, Draper, South Jordan, Lehi, Ogden, and many more — plus secure telehealth statewide.`,
            },
          },
          {
            "@type": "Question",
            name: "Does CPS offer telehealth?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. CPS offers secure video counseling (telehealth) to clients anywhere in Utah, in addition to in-person services at our Salt Lake City, Layton, and West Jordan offices.",
            },
          },
          {
            "@type": "Question",
            name: "Does CPS accept insurance?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Most major insurance plans are accepted. Call our office to verify your specific coverage before your first appointment.",
            },
          },
        ],
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
              <Link href="/" aria-label="Home" className="hover:text-teal-800">Home</Link>
              <span aria-hidden={true}></span>
              <span className="font-semibold text-teal-900">Service Area</span>
            </nav>
            <h1 className="max-w-3xl text-balance text-4xl font-extrabold tracking-tight text-teal-950 sm:text-5xl">
              Utah cities CPS serves
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-teal-800/90">
              From our three offices in Salt Lake City, Layton, and West Jordan — and
              telehealth statewide — Comprehensive Psychological Services supports{" "}
              {cities.length}+ communities across the Wasatch Front since {brand.since}.
            </p>

            <div className="mt-6 grid sm:grid-cols-3" style={{ gap: "2rem" }}>
              {locations.map((loc) => (
                <div
                  key={loc.id}
                  className="flex items-start gap-4 rounded-2xl border border-teal-100 bg-white p-4 shadow-card"
                >
                  <MapPin className="mt-0.5 h-5 w-5 flex-none text-teal-700" aria-hidden={true} />
                  <p className="text-sm text-teal-900">
                    <span className="font-semibold">{loc.name}</span>
                    <br />
                    {loc.full}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal-700/10 px-4 py-2 text-sm font-semibold text-teal-800">
              <Video className="h-4 w-4" aria-hidden={true} /> Telehealth available anywhere in Utah
            </p>

            <CtaBar className="mt-8" />
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            {groups.map((group) => (
              <div key={group.county} className="mb-12 last:mb-0">
                <h2 className="text-2xl font-extrabold tracking-tight text-teal-950 sm:text-3xl">
                  {group.county} County
                </h2>
                <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3" style={{ gap: "2rem" }}>
                  {group.cities.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/utah/${c.slug}`}
                      className="group flex items-start gap-4 rounded-2xl border border-teal-100 bg-white p-4 shadow-card transition hover:-translate-y-0.5 hover:shadow-cardHover"
                    >
                      <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-teal-700/10 text-teal-700 transition group-hover:bg-teal-700 group-hover:text-white">
                        <MapPin className="h-5 w-5" aria-hidden={true} />
                      </span>
                      <span>
                        <span className="block font-bold text-teal-950">{c.name}</span>
                        <span className="block text-xs text-teal-800/70">
                          ~{c.distanceMiles} mi from {c.nearestOffice === "west-jordan" ? "West Jordan" : c.nearestOffice === "layton" ? "Layton" : "Salt Lake City"}
                        </span>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-band py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Don&apos;t see your city?
            </h2>
            <p className="mt-4 text-lg text-teal-100">
              We serve the entire Wasatch Front and offer telehealth statewide. Call to find
              the closest office and get scheduled.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href={brand.phoneHref}
                aria-label={`Call ${brand.name} at ${brand.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-base font-bold text-teal-900 transition hover:bg-teal-50"
              >
                <Phone className="h-5 w-5" aria-hidden={true} /> Call {brand.phone}
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
