import { PARTNERS } from "@/lib/brand";

interface PartnerStripProps {
  /** "light" = cream section (homepage, under hero); "dark" = footer. */
  variant?: "light" | "dark";
}

/**
 * Partner credibility strip — "In partnership with" + linked text
 * wordmarks for the partner brands behind the care network.
 */
export default function PartnerStrip({ variant = "light" }: PartnerStripProps) {
  const isDark = variant === "dark";
  return (
    <div className={isDark ? "" : "bg-[var(--cps-gray-50)] border-b border-[var(--cps-gray-200)]"}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          <span className={`text-xs uppercase tracking-wider font-semibold ${isDark ? "text-[var(--cps-white)]/50" : "text-[var(--cps-gray-500)]"}`}>
            In partnership with
          </span>
          {PARTNERS.map((p) => (
            <a
              key={p.domain}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              data-track={`partner:${p.domain}`}
              className={`font-bold text-sm tracking-wide transition-colors ${
                isDark
                  ? "text-[var(--cps-white)]/80 hover:text-[var(--cps-teal)]"
                  : "text-[var(--cps-gray-800)] hover:text-[var(--cps-blue)]"
              }`}
            >
              {p.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
