import { Phone } from "lucide-react";
import { HOTLINE, HOTLINE_HREF, HOTLINE_LABEL } from "@/lib/brand";

/**
 * Sitewide 24-hour hotline strip — mounted in app/layout.tsx above
 * everything so it appears on every page. The whole strip is a tel:
 * link; CpsTracker counts every tel: click as a conversion.
 */
export default function HotlineBanner() {
  return (
    <a
      href={HOTLINE_HREF}
      data-track="hotline:banner"
      aria-label={`Call our 24 hour hotline at ${HOTLINE}`}
      className="block bg-[var(--cps-navy)] hover:bg-[var(--cps-dark)] transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 py-2">
        <span className="flex items-center justify-center gap-2 rounded-lg ring-1 ring-[var(--cps-white)]/40 px-4 py-2 text-[var(--cps-white)] font-bold tracking-wide text-sm sm:text-base uppercase whitespace-nowrap">
          <Phone className="w-4 h-4 text-[var(--cps-teal)] shrink-0" aria-hidden="true" />
          {HOTLINE_LABEL}: {HOTLINE}
        </span>
      </div>
    </a>
  );
}
