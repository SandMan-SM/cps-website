import Link from "next/link";
import { Phone, CalendarCheck } from "lucide-react";
import { brand } from "@/lib/data";

// Reusable dual CTA used across city & service pages.
// Primary: Call (tel:). Secondary: Request an appointment (links to home #request).
export default function CtaBar({
  className = "",
  requestHref = "/#request",
}: {
  className?: string;
  requestHref?: string;
}) {
  return (
    <div className={`flex flex-col gap-4 sm:flex-row ${className}`}>
      <a
        href={brand.phoneHref}
        aria-label="Call CPS"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-4 text-base font-bold text-white shadow-lg shadow-teal-900/10 transition hover:bg-teal-800"
      >
        <Phone className="h-5 w-5" aria-hidden={true} /> Call {brand.phone}
      </a>
      <Link
        href={requestHref}
        className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-teal-700 px-6 py-4 text-base font-bold text-teal-800 transition hover:bg-teal-50"
      >
        <CalendarCheck className="h-5 w-5" aria-hidden={true} /> Request an appointment
      </Link>
    </div>
  );
}
