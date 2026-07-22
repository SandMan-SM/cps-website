import Link from "next/link";
import { ArrowRight, CalendarCheck, Navigation } from "lucide-react";
import { locations, brand } from "@/lib/data";
import OfficeMap from "@/components/OfficeMap";

export default function Locations() {
  return (
    <section id="locations" className="scroll-mt-20 bg-teal-50/40 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-teal-950 sm:text-4xl">
            Three convenient Utah locations
          </h2>
          <p className="mt-4 text-lg text-teal-800/90">
            Choose the office closest to you — or meet with a provider by telehealth anywhere
            in Utah.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {locations.map((loc) => (
            <article
              key={loc.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-teal-100 bg-white shadow-card"
            >
              <OfficeMap location={loc} className="aspect-video" />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-teal-950">
                  <Link
                    href={`/utah/${loc.citySlug}`}
                    className="transition hover:text-teal-700"
                  >
                    {loc.name} office
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-teal-800/80">
                  {loc.description}
                </p>
                <address className="mt-3 text-sm not-italic leading-relaxed text-teal-900">
                  {loc.street}
                  <br />
                  {loc.cityLine}
                </address>

                <Link
                  href={`/utah/${loc.citySlug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 transition hover:text-teal-800"
                >
                  View {loc.name} office details <ArrowRight className="h-4 w-4" aria-hidden={true} />
                </Link>

                <div className="mt-5 flex flex-col gap-2">
                  <a
                    href="/#request"
                    data-book-appointment="true"
                    data-appointment-location={loc.name}
                    aria-label={`Request an appointment near ${loc.name}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800"
                  >
                    <CalendarCheck className="h-4 w-4" aria-hidden={true} /> Request an appointment
                  </a>
                  <a
                    href={loc.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Get directions to ${brand.name} ${loc.name} office`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-teal-200 px-4 py-2.5 text-sm font-semibold text-teal-800 transition hover:bg-teal-50"
                  >
                    <Navigation className="h-4 w-4" aria-hidden={true} /> Get directions
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
