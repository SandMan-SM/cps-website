import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Handshake, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import ServiceIcon from "@/components/ServiceIcon";
import { brand } from "@/lib/data";
import { cities, citiesByCounty, UTAH_COUNTIES } from "@/lib/geo";
import { solutionPages } from "@/lib/services";

const url = `${brand.domain}/service-area`;
const pageTitle = "Utah Solutions & Service Navigation | CPS Utah";
const pageDescription =
  `Request solutions-navigation guidance from any of Utah's ${UTAH_COUNTIES.length} counties and explore detailed guides for ${cities.length}+ selected communities. ` +
  `${brand.name}, in partnership with ${brand.partnerName}, helps people identify practical next steps without representing business or professional locations.`;
const serviceRegions = [
  {
    name: "Salt Lake County",
    description:
      "Explore solution categories and community context for Salt Lake City and surrounding valley communities.",
  },
  {
    name: "Davis & Weber Counties",
    description:
      "Explore solution categories and community context for Layton, Ogden, and nearby northern Utah communities.",
  },
  {
    name: "Utah County & South Valley",
    description:
      "Explore solution categories and community context for Lehi, Provo, the south valley, and nearby communities.",
  },
];

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
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
    title: pageTitle,
    description: pageDescription,
    locale: "en_US",
    images: [
      {
        url: "/brand/utah-solutions-hero.png",
        width: 1942,
        height: 809,
        alt: "A calm conversation about choosing an appropriate next step",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/brand/utah-solutions-hero.png"],
  },
};

export default function ServiceAreaPage() {
  const groups = citiesByCounty();
  const featuredSolutions = solutionPages.filter((solution) => solution.featured);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name: "Utah solutions and service navigation",
        description: pageDescription,
        isPartOf: { "@id": `${brand.domain}/#website` },
        publisher: { "@id": `${brand.domain}/#organization` },
        inLanguage: "en-US",
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
        name: "Utah communities with solutions-navigation guides",
        itemListElement: cities.map((city, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: `${city.name}, Utah`,
          item: `${brand.domain}/utah/${city.slug}`,
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
              <Link href="/" aria-label="Home" className="hover:text-teal-800">
                Home
              </Link>
              <span aria-hidden={true}>/</span>
              <span className="font-semibold text-teal-900">Utah Communities</span>
            </nav>

            <p className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-3 py-1 text-sm font-semibold text-teal-800">
              <Handshake className="h-4 w-4" aria-hidden={true} /> In partnership with {brand.partnerName}
            </p>
            <h1 className="mt-4 max-w-4xl text-balance text-4xl font-extrabold tracking-tight text-teal-950 sm:text-5xl">
              Statewide solutions navigation for every Utah county
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-teal-800/90">
              {brand.name} helps people explore health, home, business, legal, financial,
              family, education, career, senior, technology, and community resources throughout
              Utah. County requests are available statewide, while the selected city guides below
              add geographic context without claiming that a particular business, professional,
              or organization is based there.
            </p>

            <p className="mt-8 text-sm font-bold uppercase tracking-[0.16em] text-teal-700">
              Featured detailed-guide regions
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {serviceRegions.map((region) => (
                <article
                  key={region.name}
                  className="rounded-2xl border border-teal-100 bg-white p-6 shadow-card"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                    <Compass className="h-5 w-5" aria-hidden={true} />
                  </span>
                  <h2 className="mt-4 text-lg font-bold text-teal-950">{region.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-teal-800/80">
                    {region.description}
                  </p>
                </article>
              ))}
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
                aria-label="Request solutions-navigation guidance"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-teal-700 px-6 py-4 text-base font-bold text-teal-800 transition hover:bg-teal-50"
              >
                Request guidance
              </a>
            </div>
          </div>
        </section>

        <section className="bg-teal-50/40 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold tracking-tight text-teal-950 sm:text-4xl">
                Featured Utah solution categories
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-teal-800/90">
                Start with the area that best matches what you are trying to solve, then review
                practical questions, qualifications, costs, and next steps.
              </p>
            </div>
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
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold tracking-tight text-teal-950 sm:text-4xl">
                Request guidance from any Utah county
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-teal-800/90">
                Choose your county to share the part of Utah most relevant to your request. County
                names provide geographic context only and do not represent an office, business
                location, guaranteed provider, or current service availability.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {UTAH_COUNTIES.map((county) => (
                <a
                  key={county}
                  href="/#request"
                  data-book-appointment="true"
                  data-appointment-location={county}
                  aria-label={`Request guidance in ${county}`}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-teal-100 bg-white p-4 shadow-card transition hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-cardHover"
                >
                  <span className="inline-flex items-center gap-4 font-semibold text-teal-950">
                    <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-teal-100 text-teal-700 transition group-hover:bg-teal-700 group-hover:text-white">
                      <MapPin className="h-5 w-5" aria-hidden={true} />
                    </span>
                    {county}
                  </span>
                  <ArrowRight className="h-4 w-4 flex-none text-teal-600" aria-hidden={true} />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-teal-50/40 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold tracking-tight text-teal-950 sm:text-4xl">
                Explore detailed guides for selected Utah communities
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-teal-800/90">
                These selected city guides add local geographic context and questions to consider
                when exploring businesses, professional services, programs, and community
                resources. They are not a complete list of Utah coverage or a list of office
                locations. Availability, eligibility, pricing, and service area are confirmed
                directly with the organization you choose.
              </p>
            </div>

            <div className="mt-12 space-y-12">
              {groups.map((group) => (
                <section key={group.county} aria-labelledby={`${group.county.toLowerCase().replace(" ", "-")}-county`}>
                  <h3
                    id={`${group.county.toLowerCase().replace(" ", "-")}-county`}
                    className="text-2xl font-extrabold tracking-tight text-teal-950 sm:text-3xl"
                  >
                    {group.county} County
                  </h3>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {group.cities.map((city) => (
                      <Link
                        key={city.slug}
                        href={`/utah/${city.slug}`}
                        aria-label={`Explore solutions-navigation guidance for ${city.name}, Utah`}
                        className="group flex items-center gap-4 rounded-2xl border border-teal-100 bg-white p-4 shadow-card transition hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-cardHover"
                      >
                        <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-teal-100 text-teal-700 transition group-hover:bg-teal-700 group-hover:text-white">
                          <MapPin className="h-5 w-5" aria-hidden={true} />
                        </span>
                        <span>
                          <span className="block font-bold text-teal-950">{city.name}</span>
                          <span className="block text-xs text-teal-800/70">
                            Solutions-navigation guide
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-band py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Need help choosing where to start?
            </h2>
            <p className="mt-4 text-lg text-teal-100">
              Tell us what you are trying to solve. We&apos;ll help you organize the next step
              and point you toward relevant solution categories across Utah.
            </p>
            <a
              href="/#request"
              data-book-appointment="true"
              aria-label="Request solutions-navigation guidance"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-base font-bold text-teal-900 transition hover:bg-teal-50"
            >
              Request guidance <ArrowRight className="h-5 w-5" aria-hidden={true} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
