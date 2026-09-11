export default function BlogPostLoading() {
  return (
    <>
      <div className="bg-hero min-h-screen">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          {/* Breadcrumb skeleton */}
          <div className="h-5 w-28 animate-pulse rounded bg-teal-100" />

          {/* Category + date skeleton */}
          <div className="mt-6 h-4 w-48 animate-pulse rounded bg-teal-100" />

          {/* Title skeleton */}
          <div className="mt-3 h-10 w-full animate-pulse rounded bg-teal-100 sm:h-12 lg:h-14" />
          <div className="mt-2 h-10 w-3/4 animate-pulse rounded bg-teal-100" />
        </div>
      </div>

      <div className="border-t border-teal-100 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
          {/* Key takeaways skeleton */}
          <div className="rounded-2xl border border-teal-100 bg-teal-50/60 p-6">
            <div className="h-4 w-32 animate-pulse rounded bg-teal-200" />
            <div className="mt-4 space-y-3">
              <div className="h-5 w-full animate-pulse rounded bg-teal-100" />
              <div className="h-5 w-5/6 animate-pulse rounded bg-teal-100" />
              <div className="h-5 w-4/5 animate-pulse rounded bg-teal-100" />
            </div>
          </div>

          {/* Content sections skeleton */}
          <div className="mt-10 space-y-10">
            {[1, 2].map((i) => (
              <div key={i}>
                <div className="h-7 w-48 animate-pulse rounded bg-teal-100" />
                <div className="mt-4 space-y-3">
                  <div className="h-5 w-full animate-pulse rounded bg-gray-100" />
                  <div className="h-5 w-full animate-pulse rounded bg-gray-100" />
                  <div className="h-5 w-3/4 animate-pulse rounded bg-gray-100" />
                </div>
              </div>
            ))}
          </div>

          {/* CTA skeleton */}
          <div className="mt-12 rounded-2xl bg-teal-900 p-8">
            <div className="mx-auto h-8 w-64 animate-pulse rounded bg-teal-800" />
            <div className="mx-auto mt-3 h-5 w-96 animate-pulse rounded bg-teal-800" />
            <div className="mx-auto mt-6 h-12 w-56 animate-pulse rounded-full bg-teal-700" />
          </div>
        </div>
      </div>
    </>
  );
}
