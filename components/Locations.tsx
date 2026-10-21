import Link from "next/link";
import { ArrowRight, CalendarCheck, MapPinned } from "lucide-react";
import { serviceRegions } from "@/lib/data";

export default function Locations() {
  return (
    <section id="locations" className="scroll-mt-20 bg-teal-50/40 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-teal-950 sm:text-4xl">
            Guidance across Utah communities
          </h2>
          <p className="mt-4 text-lg text-teal-800/90">
            Start with your community and we&apos;ll help point you toward the most appropriate
            available services and next steps.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceRegions.map((loc) => (
            <article
              key={loc.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-teal-100 bg-white shadow-card"
            >
              <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-teal-50 via-white to-teal-100">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-teal-600 shadow-card">
                  <MapPinned className="h-8 w-8" aria-hidden={true} />
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-teal-950">
                  <Link
                    href="/service-area"
                    className="transition hover:text-teal-700"
                  >
                    {loc.name}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-teal-800/80">
                  {loc.description}
                </p>
                <Link
                  href="/service-area"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 transition hover:text-teal-800"
                >
                  Explore {loc.name} <ArrowRight className="h-4 w-4" aria-hidden={true} />
                </Link>

                <div className="mt-6 flex flex-col gap-2">
                  <a
                    href="/#request"
                    data-book-appointment="true"
                    data-appointment-location={loc.name}
                    aria-label={`Request guidance for ${loc.name}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800"
                  >
                    <CalendarCheck className="h-4 w-4" aria-hidden={true} /> Request a solution
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
