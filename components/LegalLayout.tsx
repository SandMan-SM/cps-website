import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import { brand } from "@/lib/data";

export default function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="bg-hero min-h-screen">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden /> Back to home
        </Link>

        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-teal-950 sm:text-4xl">
          {title}
        </h1>

        <div className="mt-6 space-y-4 text-teal-800/90 [&_h2]:mt-8 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-teal-950">
          {children}
        </div>

        <div className="mt-12 rounded-2xl border border-teal-100 bg-white p-6 shadow-card">
          <p className="text-sm text-teal-800/90">
            Questions about this policy? Contact {brand.name} at{" "}
            <a href={`mailto:${brand.email}`} aria-label={`Email ${brand.name}`} className="font-semibold text-teal-700">
              {brand.email}
            </a>{" "}
            or call{" "}
            <a href={brand.phoneHref} aria-label={`Call ${brand.name} at ${brand.phone}`} className="inline-flex items-center gap-1 font-semibold text-teal-700">
              <Phone className="h-3.5 w-3.5" aria-hidden /> {brand.phone}
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
