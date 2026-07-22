import Image from "next/image";
import { CalendarCheck, Mail, Clock, Video } from "lucide-react";
import { brand, locations } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-teal-100 bg-white text-teal-900">
      <div className="mx-auto max-w-6xl px-4 pb-28 pt-14 sm:px-6 md:pb-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="min-w-0 md:col-span-1">
            <a
              href="/"
              aria-label={`${brand.name} home`}
              className="inline-flex max-w-full"
            >
              <Image
                src="/cps-logo-clean.png"
                alt="Comprehensive Psychological Services — WeCanHelpOut.com"
                width={570}
                height={146}
                className="h-auto w-[220px] max-w-full"
              />
            </a>
            <p className="mt-3 text-sm text-teal-800/80">
              {brand.name} — {brand.tagline}. Serving Utah since {brand.since}.
            </p>
            <p className="mt-3 inline-flex items-center gap-2 text-sm text-teal-800/80">
              <Video className="h-4 w-4" aria-hidden={true} /> Telehealth available across Utah.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-teal-950">Locations</h3>
            <ul className="mt-3 space-y-3 text-sm text-teal-800/80">
              {locations.map((loc) => (
                <li key={loc.id}>
                  <span className="font-semibold text-teal-900">{loc.name}</span>
                  <br />
                  {loc.street}, {loc.cityLine}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-teal-950">Connect</h3>
            <ul className="mt-3 space-y-3 text-sm">
              <li>
                <a
                  href="/#subscribe"
                  aria-label="Subscribe to CPS updates"
                  className="inline-flex items-center gap-2 text-teal-800 transition hover:text-teal-600"
                >
                  <Mail className="h-4 w-4" aria-hidden={true} /> Subscribe for updates
                </a>
              </li>
              <li>
                <a
                  href="/#request"
                  data-book-appointment="true"
                  aria-label="Request an appointment"
                  className="inline-flex items-center gap-2 text-teal-800 transition hover:text-teal-600"
                >
                  <CalendarCheck className="h-4 w-4" aria-hidden={true} /> Request an appointment
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-teal-800/80">
                <Clock className="h-4 w-4" aria-hidden={true} /> {brand.hours}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-teal-950">Explore</h3>
            <ul className="mt-3 space-y-2 text-sm text-teal-800/80">
              <li><a href="/#services" aria-label="Jump to Services section" className="transition hover:text-teal-600">Services</a></li>
              <li><a href="/service-area" aria-label="View service areas in Utah" className="transition hover:text-teal-600">Service Area</a></li>
              <li><a href="/#locations" aria-label="Jump to Locations section" className="transition hover:text-teal-600">Locations</a></li>
              <li><a href="/#request" data-book-appointment="true" aria-label="Request an appointment" className="transition hover:text-teal-600">Request an appointment</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-teal-100 pt-6 text-xs text-teal-800/70 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy" aria-label="Privacy Policy" className="transition hover:text-teal-600">Privacy Policy</a>
            <a href="/terms" aria-label="Terms of Use" className="transition hover:text-teal-600">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
