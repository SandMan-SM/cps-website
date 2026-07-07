import { Phone, Navigation, MapPin } from "lucide-react";
import { locations, brand } from "@/lib/data";

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
            <div
              key={loc.id}
              className="flex flex-col rounded-2xl border border-teal-100 bg-white p-6 shadow-card"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-700/10 text-teal-700">
                <MapPin className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-4 text-lg font-bold text-teal-950">{loc.name}</h3>
              <address className="mt-2 flex-1 text-sm not-italic leading-relaxed text-teal-800/80">
                {loc.street}
                <br />
                {loc.cityLine}
              </address>

              <div className="mt-5 flex flex-col gap-2">
                <a
                  href={brand.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800"
                >
                  <Phone className="h-4 w-4" aria-hidden /> Call {brand.phone}
                </a>
                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-teal-200 px-4 py-2.5 text-sm font-semibold text-teal-800 transition hover:bg-teal-50"
                >
                  <Navigation className="h-4 w-4" aria-hidden /> Get directions
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
