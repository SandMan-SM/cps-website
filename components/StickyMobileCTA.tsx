import Link from "next/link";
import { Phone, Calendar } from "lucide-react";

interface StickyMobileCTAProps {
  bookHref?: string;
}

export default function StickyMobileCTA({ bookHref = "/#contact" }: StickyMobileCTAProps) {
  return (
    <div
      className="lg:hidden sticky bottom-0 z-40 bg-[var(--cps-white)] border-t border-[var(--cps-gray-200)] shadow-2xl"
      aria-label="Quick actions"
    >
      <div className="flex items-center gap-4 px-4 py-4">
        <a
          href="tel:8014831600"
          className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm transition-colors border-2 border-[var(--cps-blue)] text-[var(--cps-blue)]"
          aria-label="Call us at (801) 483-1600"
        >
          <Phone className="w-5 h-5" aria-hidden="true" />
          Call Now
        </a>
        <Link
          href={bookHref}
          className="flex-[2] flex items-center justify-center gap-2 py-4 rounded-xl font-bold text-sm bg-[var(--cps-blue)] hover:bg-[var(--cps-blue-hover)] text-[var(--cps-white)] transition-colors"
        >
          <Calendar className="w-5 h-5" aria-hidden="true" />
          Book Evaluation
        </Link>
      </div>
    </div>
  );
}
