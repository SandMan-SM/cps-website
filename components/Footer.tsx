import { Phone, Mail, Printer, Clock, Video } from "lucide-react";
import { brand, locations } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-band text-teal-100">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 font-bold text-white" aria-hidden={true}>
                C
              </span>
              <span className="text-base font-bold text-white">{brand.shortName}</span>
            </div>
            <p className="mt-3 text-sm text-teal-200">
              {brand.name} — {brand.tagline}. Serving Utah since {brand.since}.
            </p>
            <p className="mt-3 inline-flex items-center gap-2 text-sm text-teal-200">
              <Video className="h-4 w-4" aria-hidden={true} /> Telehealth available across Utah.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">Locations</h3>
            <ul className="mt-3 space-y-3 text-sm text-teal-200">
              {locations.map((loc) => (
                <li key={loc.id}>
                  <span className="font-semibold text-teal-100">{loc.name}</span>
                  <br />
                  {loc.street}, {loc.cityLine}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">Contact</h3>
            <ul className="mt-3 space-y-3 text-sm">
              <li>
                <a
                  href={brand.phoneHref}
                  aria-label={`Call CPS at ${brand.phone}`}
                  className="inline-flex items-center gap-2 text-teal-100 hover:text-white"
                >
                  <Phone className="h-4 w-4" aria-hidden={true} /> {brand.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${brand.email}`}
                  aria-label={`Email CPS at ${brand.email}`}
                  className="inline-flex items-center gap-2 text-teal-100 hover:text-white"
                >
                  <Mail className="h-4 w-4" aria-hidden={true} /> {brand.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-teal-200">
                <Printer className="h-4 w-4" aria-hidden={true} /> Fax {brand.fax}
              </li>
              <li className="inline-flex items-center gap-2 text-teal-200">
                <Clock className="h-4 w-4" aria-hidden={true} /> {brand.hours}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">Explore</h3>
            <ul className="mt-3 space-y-2 text-sm text-teal-200">
              <li><a href="/#services" aria-label="Jump to Services section" className="hover:text-white">Services</a></li>
              <li><a href="/service-area" aria-label="View service areas in Utah" className="hover:text-white">Service Area</a></li>
              <li><a href="/#locations" aria-label="Jump to Locations section" className="hover:text-white">Locations</a></li>
              <li><a href="/#request" aria-label="Jump to appointment request form" className="hover:text-white">Request an appointment</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-teal-300 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy" aria-label="Privacy Policy" className="hover:text-white">Privacy Policy</a>
            <a href="/terms" aria-label="Terms of Use" className="hover:text-white">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
