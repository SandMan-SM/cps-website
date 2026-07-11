"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
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
    <header className="sticky top-0 z-40 border-b border-teal-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label={`${brand.name} home`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-700 font-bold text-white" aria-hidden={true}>
            C
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-bold text-teal-900">{brand.shortName}</span>
            <span className="text-[11px] text-teal-600">{brand.tagline}</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
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
          href={brand.phoneHref}
          aria-label="Call CPS"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-teal-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800"
        >
          <Phone className="h-4 w-4" aria-hidden={true} />
          <span className="hidden sm:inline">Call {brand.phone}</span>
          <span className="sm:hidden">Call</span>
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
                href={brand.phoneHref}
                aria-label="Call CPS"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-700 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800"
              >
                <Phone className="h-4 w-4" aria-hidden={true} />
                Call {brand.phone}
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
