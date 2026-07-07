import { brand } from "@/lib/data";

export default function TrustBand() {
  const stats = [
    { value: `${new Date().getFullYear() - brand.since}+`, label: "Years serving Utah" },
    { value: brand.providerCount, label: "Licensed providers" },
    { value: "3", label: "Utah locations" },
    { value: "2024", label: "Best Practice Award" },
  ];

  return (
    <section aria-label="At a glance" className="border-y border-teal-100 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-teal-100 px-4 py-8 sm:grid-cols-4 sm:divide-x sm:px-6">
        {stats.map((s) => (
          <div key={s.label} className="px-2 py-3 text-center">
            <div className="text-3xl font-extrabold text-teal-700 sm:text-4xl">{s.value}</div>
            <div className="mt-1 text-xs font-medium uppercase tracking-wide text-teal-800/70 sm:text-sm">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
