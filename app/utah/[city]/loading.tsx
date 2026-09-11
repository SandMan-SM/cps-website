export default function CityLoading() {
  return (
    <>
      <div className="bg-hero min-h-screen">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          {/* Breadcrumb skeleton */}
          <div className="mb-4 flex gap-3">
            <div className="h-4 w-12 animate-pulse rounded bg-teal-100" />
            <div className="h-4 w-20 animate-pulse rounded bg-teal-100" />
            <div className="h-4 w-24 animate-pulse rounded bg-teal-200" />
          </div>

          {/* County badge */}
          <div className="mt-2 h-6 w-40 animate-pulse rounded-full bg-teal-100" />

          {/* Title */}
          <div className="mt-4 h-12 w-full animate-pulse rounded bg-teal-100 sm:h-14 lg:h-16" />
          <div className="mt-2 h-12 w-3/4 animate-pulse rounded bg-teal-100 lg:h-14" />

          {/* Blurb */}
          <div className="mt-4 h-6 w-full animate-pulse rounded bg-teal-100 sm:w-2/3" />

          {/* Info cards */}
          <div className="mt-6 grid gap-6 sm:grid-cols-2" style={{ gap: "2rem" }}>
            <div className="h-24 animate-pulse rounded-2xl border border-teal-100 bg-white" />
            <div className="h-24 animate-pulse rounded-2xl border border-teal-100 bg-white" />
          </div>
        </div>
      </div>

      {/* Service cards section */}
      <section className="bg-teal-50/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="h-8 w-64 animate-pulse rounded bg-teal-100" />
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-32 animate-pulse rounded-xl border border-teal-100 bg-white p-4" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <div className="bg-band py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <div className="mx-auto h-8 w-64 animate-pulse rounded bg-teal-800" />
          <div className="mx-auto mt-4 h-5 w-96 animate-pulse rounded bg-teal-800" />
          <div className="mx-auto mt-8 h-12 w-56 animate-pulse rounded-full bg-teal-700" />
        </div>
      </div>
    </>
  );
}
