"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { CalendarCheck, Menu, X } from "lucide-react";
import { brand } from "@/lib/data";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const nav = [
    { href: "/#services", label: "Services" },
    { href: "/service-area", label: "Service Area" },
    { href: "/#locations", label: "Locations" },
    { href: "/#request", label: "Get Started" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-teal-100 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center" aria-label={`${brand.name} home`}>
          <Image
            src="/cps-logo-clean.png"
            alt="Comprehensive Psychological Services — WeCanHelpOut.com"
            width={570}
            height={146}
            priority
            className="h-auto w-[190px] sm:w-[230px]"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-teal-800 transition hover:text-teal-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="/#request"
          data-book-appointment="true"
          aria-label="Book an appointment"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-teal-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800"
        >
          <CalendarCheck className="h-4 w-4" aria-hidden={true} />
          <span>Book appointment</span>
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-teal-700 transition hover:bg-teal-50 md:hidden"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" aria-hidden={true} />
          ) : (
            <Menu className="h-6 w-6" aria-hidden={true} />
          )}
        </button>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-teal-100 bg-white md:hidden"
        >
          <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
            <ul className="space-y-1" role="list">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-base font-medium text-teal-800 transition hover:bg-teal-50 hover:text-teal-900"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t border-teal-100 pt-4">
              <a
                href="/#request"
                data-book-appointment="true"
                aria-label="Book an appointment"
                onClick={() => setMobileOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-700 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800"
              >
                <CalendarCheck className="h-4 w-4" aria-hidden={true} />
                Book appointment
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
