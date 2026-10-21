import Image from "next/image";

export default function BrandLogo({
  light = false,
  compact = false,
  className = "",
}: {
  light?: boolean;
  compact?: boolean;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center ${className}`} style={{ gap: "0.75rem" }}>
      <span
        className={`flex shrink-0 items-center justify-center rounded-xl ${
          light ? "bg-white/95 p-1" : "bg-teal-50 p-1"
        }`}
      >
        <Image
          src="/brand/open-path-mark.png"
          alt="Clinical and Professional Solutions logo"
          width={1254}
          height={1254}
          priority
          className={compact ? "h-10 w-10 object-contain" : "h-12 w-12 object-contain"}
        />
      </span>
      <span className="min-w-0 leading-none">
        <span
          className={`block whitespace-nowrap text-[13px] font-bold tracking-[-0.025em] sm:text-[15px] ${
            light ? "text-white" : "text-teal-950"
          }`}
        >
          Clinical &amp; Professional
        </span>
        <span
          className={`mt-1 block whitespace-nowrap text-[12px] font-extrabold uppercase tracking-[0.22em] sm:text-[13px] ${
            light ? "text-teal-200" : "text-teal-700"
          }`}
        >
          Solutions
        </span>
      </span>
    </span>
  );
}
