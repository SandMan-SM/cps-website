import { brand } from "@/lib/data";

export default function TrustBand() {
  const stats = [
    { value: `${new Date().getFullYear() - brand.since}+`, label: "Years serving Utah" },
    { value: brand.providerCount, label: "Licensed providers" },
    { value: "2024", label: "Best Practice Award" },
  ];

  return (
    <section aria-label="At a glance" className="border-y border-teal-100 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-teal-100 px-2 py-6 sm:px-6 sm:py-8">
        {stats.map((s) => (
          <div key={s.label} className="min-w-0 px-1 py-3 text-center sm:px-3">
            <div className="text-2xl font-extrabold text-teal-700 sm:text-4xl">{s.value}</div>
            <div className="mt-1 text-[9px] font-medium uppercase leading-tight tracking-[0.04em] text-teal-800/70 sm:text-sm sm:tracking-wide">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
