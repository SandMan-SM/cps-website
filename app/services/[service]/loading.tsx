export default function ServiceLoading() {
  return (
    <>
      <div className="bg-hero min-h-screen">
        {/* Hero skeleton */}
        <div className="mx-auto max-w-3xl px-4 pt-16 sm:px-6 sm:pt-20">
          <div className="h-5 w-24 animate-pulse rounded bg-teal-100" />
          <div className="mt-6 h-10 w-full animate-pulse rounded bg-teal-100 sm:h-12 lg:h-14" />
          <div className="mt-3 h-6 w-2/3 animate-pulse rounded bg-teal-100" />
          <div className="mt-4 h-5 w-1/2 animate-pulse rounded bg-teal-100" />
          <div className="mt-6 h-12 w-44 animate-pulse rounded-full bg-teal-200" />
        </div>
      </div>

      {/* Content sections */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          {[1, 2].map((i) => (
            <div key={i} className="mb-12">
              <div className="h-7 w-48 animate-pulse rounded bg-teal-100" />
              <div className="mt-4 space-y-3">
                <div className="h-5 w-full animate-pulse rounded bg-gray-100" />
                <div className="h-5 w-5/6 animate-pulse rounded bg-gray-100" />
                <div className="h-5 w-4/5 animate-pulse rounded bg-gray-100" />
              </div>
            </div>
          ))}
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
