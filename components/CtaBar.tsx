import Link from "next/link";
import { Mail, CalendarCheck } from "lucide-react";

// Reusable CTA group used across city and service pages.
export default function CtaBar({
  className = "",
  requestHref = "/#request",
}: {
  className?: string;
  requestHref?: string;
}) {
  return (
    <div className={`flex flex-col gap-4 sm:flex-row ${className}`}>
      <Link
        href={requestHref}
        data-book-appointment="true"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-4 text-base font-bold text-white shadow-lg shadow-teal-900/10 transition hover:bg-teal-800"
      >
        <CalendarCheck className="h-5 w-5" aria-hidden={true} /> Request an appointment
      </Link>
      <a
        href="/#subscribe"
        aria-label="Subscribe to CPS updates"
        className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-teal-700 px-6 py-4 text-base font-bold text-teal-800 transition hover:bg-teal-50"
      >
        <Mail className="h-5 w-5" aria-hidden={true} /> Subscribe
      </a>
    </div>
  );
}
