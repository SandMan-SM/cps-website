import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Home, Search, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you're looking for can't be found. Browse CPS services or call (801) 483-1600 for help scheduling a Utah evaluation or appointment.",
  robots: { index: false, follow: true },
};

const PHONE = "(801) 483-1600";
const PHONE_HREF = "tel:8014831600";

const popularLinks = [
  { href: "/services", label: "All Services" },
  { href: "/conditions", label: "Conditions We Treat" },
  { href: "/team", label: "Meet Our Clinicians" },
  { href: "/neuropsychologist-near-me", label: "Neuropsychological Evaluation" },
  { href: "/adhd-evaluation-near-me", label: "ADHD Evaluation" },
  { href: "/custody-evaluator-near-me", label: "Custody Evaluation" },
  { href: "/ketamine-depression-treatment-near-me", label: "Ketamine Therapy" },
  { href: "/spravato-esketamine-therapy", label: "Spravato (Esketamine)" },
];

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main">
        <section className="bg-gradient-to-br from-[var(--cps-dark)] via-[var(--cps-gradient-mid)] to-[var(--cps-dark)] text-[var(--cps-white)] py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
            <p className="text-[var(--cps-teal)] font-semibold text-sm uppercase tracking-wider mb-6">
              404 — Page Not Found
            </p>
            <h1 className="display-heading text-[var(--cps-white)] mb-6">
              We can&apos;t find that page.
            </h1>
            <p className="body-large text-[var(--cps-white)]/80 mb-10">
              The link may be broken or the page may have moved. Let&apos;s get you back on track —
              browse our services or call us directly.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
              <Link
                href="/"
                data-track="404:home"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--cps-blue)] hover:bg-[var(--cps-blue-hover)] text-[var(--cps-white)] font-bold rounded-xl transition-colors text-lg"
              >
                <Home className="w-5 h-5" aria-hidden="true" />
                Return Home
              </Link>
              <a
                href={PHONE_HREF}
                data-track="404:call"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent hover:bg-[var(--cps-white)]/10 text-[var(--cps-white)] font-bold rounded-xl transition-colors text-lg border-2 border-white"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                {PHONE}
              </a>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-[var(--cps-white)]">
          <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="flex items-center gap-4 mb-8">
              <Search className="w-5 h-5 text-[var(--cps-blue)]" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-[var(--cps-gray-900)]">Popular pages</h2>
            </div>
            <ul className="grid sm:grid-cols-2 gap-4">
              {popularLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    data-track={`404:popular:${link.href}`}
                    className="group flex items-center justify-between gap-2 p-6 rounded-xl border border-[var(--cps-gray-200)] hover:border-[var(--cps-blue)] hover:bg-[var(--cps-gray-50)] transition-colors"
                  >
                    <span className="font-semibold text-[var(--cps-gray-900)]">{link.label}</span>
                    <ArrowRight
                      className="w-4 h-4 text-[var(--cps-gray-500)] group-hover:text-[var(--cps-blue)] transition-colors"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
