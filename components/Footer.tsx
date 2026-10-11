import { CalendarCheck, Mail, Compass } from "lucide-react";
import { brand, serviceRegions } from "@/lib/data";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  return (
    <footer className="bg-band text-teal-100">
      <div className="mx-auto max-w-6xl px-4 pb-28 pt-14 sm:px-6 md:pb-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <a
              href="/"
              aria-label={`${brand.name} home`}
              className="inline-flex"
            >
              <BrandLogo light />
            </a>
            <p className="mt-3 text-sm text-teal-200">
              {brand.name} — {brand.tagline}.
            </p>
            <p className="mt-3 inline-flex items-center gap-2 text-sm text-teal-200">
              <Compass className="h-4 w-4" aria-hidden={true} /> Utah-wide solutions and guidance.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-teal-200">
              Partnered with {brand.partnerName} to point people in the right direction and
              help them find the best possible services for their needs.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">Service areas</h3>
            <ul className="mt-3 space-y-3 text-sm text-teal-200">
              {serviceRegions.map((loc) => (
                <li key={loc.id}>
                  <a
                    href="/service-area"
                    aria-label={`View guidance for ${loc.name}`}
                    className="font-semibold text-teal-100 transition hover:text-white"
                  >
                    {loc.name}
                  </a>
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
                  aria-label={`Subscribe to ${brand.name} updates`}
                  className="inline-flex items-center gap-2 text-teal-100 hover:text-white"
                >
                  <Mail className="h-4 w-4" aria-hidden={true} /> Subscribe for updates
                </a>
              </li>
              <li>
                <a
                  href="/#request"
                  data-book-appointment="true"
                  aria-label="Request a solution"
                  className="inline-flex items-center gap-2 text-teal-100 hover:text-white"
                >
                  <CalendarCheck className="h-4 w-4" aria-hidden={true} /> Request a solution
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide text-white">Explore</h3>
            <ul className="mt-3 space-y-2 text-sm text-teal-200">
              <li><a href="/#solutions" aria-label="Explore solution areas" className="hover:text-white">Solutions</a></li>
              <li><a href="/service-area" aria-label="Explore guidance across Utah" className="hover:text-white">Across Utah</a></li>
              <li><a href="/blog" aria-label={`Read the ${brand.name} blog`} className="hover:text-white">Blog</a></li>
              {serviceRegions.map((loc) => (
                <li key={loc.id}>
                  <a
                    href="/service-area"
                    aria-label={`View guidance for ${loc.name}`}
                    className="hover:text-white"
                  >
                    {loc.name}
                  </a>
                </li>
              ))}
              <li><a href="/#request" data-book-appointment="true" aria-label="Request a solution" className="hover:text-white">Request a solution</a></li>
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
