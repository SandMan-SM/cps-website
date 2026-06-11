import { Award } from "lucide-react";

const PHRASE = "Utah’s most trusted behavioral health network — 60+ years of combined care";

function MarqueeItem() {
  return (
    <span className="inline-flex items-center gap-3 px-8 whitespace-nowrap">
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-[var(--cps-teal)]/60 shrink-0">
        <Award className="w-4 h-4 text-[var(--cps-teal)]" aria-hidden="true" />
      </span>
      <span className="text-sm font-semibold text-[var(--cps-white)]">{PHRASE}</span>
    </span>
  );
}

/**
 * Continuously scrolling trust strip pinned to the bottom of the header.
 * Two identical track copies + CSS keyframes = seamless loop; honors
 * prefers-reduced-motion (track simply stops).
 */
export default function TrustMarquee() {
  const copies = Array.from({ length: 4 });
  return (
    <div
      className="overflow-hidden bg-[var(--cps-dark)] border-y border-[var(--cps-teal)]/40 py-2"
      role="marquee"
      aria-label={PHRASE}
    >
      <div className="ps-marquee-track flex w-max" aria-hidden="true">
        <div className="flex shrink-0">
          {copies.map((_, i) => (
            <MarqueeItem key={`a-${i}`} />
          ))}
        </div>
        <div className="flex shrink-0">
          {copies.map((_, i) => (
            <MarqueeItem key={`b-${i}`} />
          ))}
        </div>
      </div>
    </div>
  );
}
