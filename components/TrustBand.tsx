export default function TrustBand() {
  const stats = [
    { value: "Utah", label: "Statewide guidance" },
    { value: "Private", label: "Confidential intake" },
    { value: "Clear", label: "Best-fit next steps" },
  ];

  return (
    <section aria-label="At a glance" className="border-y border-teal-100 bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-teal-100 px-4 py-6 sm:px-6 sm:py-8">
        {stats.map((s) => (
          <div key={s.label} className="min-w-0 px-2 py-4 text-center sm:px-4">
            <div className="text-2xl font-extrabold text-teal-700 sm:text-4xl">{s.value}</div>
            <div className="mt-1 text-[11px] font-medium uppercase leading-tight tracking-[0.04em] text-teal-800/70 sm:text-sm sm:tracking-wide">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
