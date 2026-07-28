import Image from "next/image";
import { CalendarCheck, Mail, Clock, Video } from "lucide-react";
import { brand, locations } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-band text-teal-100">
      <div className="mx-auto max-w-6xl px-4 pb-28 pt-14 sm:px-6 md:pb-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <a
              href="/"
              aria-label={`${brand.name} home`}
              className="inline-flex rounded-lg bg-white px-3 py-2 shadow-sm"
            >
              <Image
                src="/cps-logo-clean.png"
                alt="Comprehensive Psychological Services — WeCanHelpOut.com"
                width={570}
                height={146}
                className="h-auto w-[220px]"
              />
            </a>
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
                  <a
                    href={`/utah/${loc.citySlug}`}
                    aria-label={`View the ${loc.name} office page`}
                    className="font-semibold text-teal-100 transition hover:text-white"
                  >
                    {loc.name} office
                  </a>
                  <br />
                  {loc.street}, {loc.cityLine}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">Connect</h3>
            <ul className="mt-3 space-y-3 text-sm">
              <li>
                <a
                  href="/#subscribe"
                  aria-label="Subscribe to CPS updates"
                  className="inline-flex items-center gap-2 text-teal-100 hover:text-white"
                >
                  <Mail className="h-4 w-4" aria-hidden={true} /> Subscribe for updates
                </a>
              </li>
              <li>
                <a
                  href="/#request"
                  data-book-appointment="true"
                  aria-label="Request an appointment"
                  className="inline-flex items-center gap-2 text-teal-100 hover:text-white"
                >
                  <CalendarCheck className="h-4 w-4" aria-hidden={true} /> Request an appointment
                </a>
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
              <li><a href="/blog" aria-label="Read the CPS blog" className="hover:text-white">Blog</a></li>
              {locations.map((loc) => (
                <li key={loc.id}>
                  <a
                    href={`/utah/${loc.citySlug}`}
                    aria-label={`View the ${loc.name} office page`}
                    className="hover:text-white"
                  >
                    {loc.name} office
                  </a>
                </li>
              ))}
              <li><a href="/#request" data-book-appointment="true" aria-label="Request an appointment" className="hover:text-white">Request an appointment</a></li>
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
