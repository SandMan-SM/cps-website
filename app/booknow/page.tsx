import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  Clock3,
  LockKeyhole,
  Video,
} from "lucide-react";
import BookNowPopup from "@/components/BookNowPopup";
import BrandLogo from "@/components/BrandLogo";
import { brand } from "@/lib/data";

export const metadata: Metadata = {
  title: "Request a Solution",
  description:
    "Share your contact details with Clinical and Professional Solutions and our team will follow up with clear next-step guidance.",
  alternates: { canonical: `${brand.domain}/booknow` },
  openGraph: {
    type: "website",
    url: `${brand.domain}/booknow`,
    siteName: brand.name,
    title: "Request a Solution | Clinical and Professional Solutions",
    description:
      "Take a clear first step toward practical solutions in Utah.",
    images: ["/brand/utah-solutions-hero.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Request a Solution | Clinical and Professional Solutions",
    description:
      "Take a clear first step toward practical solutions in Utah.",
    images: ["/brand/utah-solutions-hero.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": brand.name,
  "description": "Practical navigation for solutions across health, home, business, family, and everyday life in Utah.",
  "url": brand.domain,
  "areaServed": { "@type": "State", "name": "Utah" },
};

export default function BookNowPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="border-b border-teal-100 bg-white">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" aria-label={`${brand.name} home`}>
            <BrandLogo compact />
          </Link>
          <p className="hidden text-sm font-semibold text-teal-800 sm:block">
            Partnered with {brand.partnerName}
          </p>
        </div>
      </header>
      <main>
        <section className="bg-hero overflow-hidden">
          <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
            <div>
              <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-teal-950 sm:text-5xl lg:text-6xl">
                Take the first step. We&apos;ll help with the next one.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-teal-800/90 sm:text-xl">
                Share your contact information and our team will reach out to help you understand
                the available services and choose a practical next step.
              </p>

              <div className="mt-8 grid max-w-xl gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: CheckCircle2,
                    title: "12 solution areas",
                    body: "Options matched to your needs",
                  },
                  {
                    icon: Video,
                    title: "Statewide perspective",
                    body: "Options across Utah",
                  },
                  {
                    icon: Clock3,
                    title: `Partnered with ${brand.partnerName}`,
                    body: "Community-minded direction",
                  },
                  {
                    icon: LockKeyhole,
                    title: "Simple and private",
                    body: "A brief request is all we need",
                  },
                ].map(({ icon: Icon, title, body }) => (
                  <div key={title} className="flex items-start gap-4">
                    <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                      <Icon className="h-4 w-4" aria-hidden={true} />
                    </span>
                    <div>
                      <p className="font-bold text-teal-950">{title}</p>
                      <p className="mt-0.5 text-sm text-teal-800/70">{body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-8 max-w-xl text-sm leading-relaxed text-teal-800/70">
                Please do not include private medical details. If you are in crisis, call or
                text 988 for the Suicide &amp; Crisis Lifeline.
              </p>
              <BookNowPopup />
            </div>
          </div>
        </section>

        <section className="border-y border-teal-100 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-10 text-center sm:px-6">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-600">
              Clear guidance · Utah-wide perspective
            </p>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-teal-800/80">
              Salt Lake City, Layton, and West Jordan, with secure telehealth options
              available throughout Utah.
            </p>
          </div>
        </section>
      </main>
      <footer className="bg-band text-teal-100">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-center text-xs sm:flex-row sm:px-6 sm:text-left">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" aria-label="Privacy Policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" aria-label="Terms of Use" className="hover:text-white">Terms of Use</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
