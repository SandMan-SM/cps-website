"use client";

import { useState } from "react";
import { Phone, Menu, X, Brain } from "lucide-react";

const PHONE = "(801) 483-1600";
const PHONE_HREF = "tel:8014831600";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Locations", href: "/#locations" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[var(--cps-gray-200)]" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="/" className="flex items-center gap-3" aria-label="CPS Home">
            <div className="w-10 h-10 rounded-lg bg-[var(--cps-dark)] flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-bold text-[var(--cps-dark)] leading-tight">Comprehensive Psychological</div>
              <div className="text-xs text-[var(--cps-gray-500)] leading-tight">Services — Since 1986</div>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="text-sm font-medium text-[var(--cps-gray-600)] hover:text-[var(--cps-blue)] transition-colors">{link.label}</a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a href={PHONE_HREF} className="hidden md:flex items-center gap-2 text-sm font-semibold text-[var(--cps-blue)] hover:text-[var(--cps-blue-hover)] transition-colors" aria-label={`Call us at ${PHONE}`}>
              <Phone className="w-4 h-4" /> {PHONE}
            </a>
            <a href="/#contact" className="hidden sm:inline-flex items-center gap-2 px-12 py-5 bg-[var(--cps-blue)] hover:bg-[var(--cps-blue-hover)] text-white text-base font-semibold rounded-xl transition-colors">
              Book Evaluation
            </a>
            <button onClick={() => setOpen(!open)} className="lg:hidden p-4 min-w-12 min-h-12 rounded-xl hover:bg-[var(--cps-gray-100)] transition-colors flex items-center justify-center" aria-label="Toggle menu" aria-expanded={open}>
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[var(--cps-gray-200)] bg-white overflow-hidden">
          <div className="px-6 py-4 space-y-2">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="block px-4 py-4 rounded-xl text-[var(--cps-gray-700)] hover:bg-[var(--cps-gray-50)] font-medium transition-colors">{link.label}</a>
            ))}
            <a href={PHONE_HREF} className="flex items-center gap-2 px-4 py-4 text-[var(--cps-blue)] font-semibold"><Phone className="w-4 h-4" /> {PHONE}</a>
            <a href="/#contact" onClick={() => setOpen(false)} className="block w-full text-center px-12 py-5 bg-[var(--cps-blue)] text-white rounded-xl font-semibold text-base">Book Evaluation</a>
          </div>
        </div>
      )}
    </nav>
  );
}
