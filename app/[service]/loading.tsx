export default function Loading() {
  return (
    <div className="min-h-screen" style={{ background: "var(--cps-light)" }}>
      {/* Hero skeleton */}
      <div
        className="py-16 md:py-24"
        style={{ background: "var(--cps-dark)" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div
            className="h-12 rounded-xl mb-8 w-2/3 mx-auto animate-pulse"
            style={{ background: "var(--cps-gradient-mid)" }}
          />
          <div
            className="h-6 rounded-xl mb-4 w-1/2 mx-auto animate-pulse"
            style={{ background: "var(--cps-gradient-mid)" }}
          />
          <div
            className="h-6 rounded-xl w-1/3 mx-auto animate-pulse"
            style={{ background: "var(--cps-gradient-mid)" }}
          />
          <div className="flex justify-center gap-8 mt-8">
            <div
              className="h-14 w-48 rounded-xl animate-pulse"
              style={{ background: "var(--cps-gradient-mid)" }}
            />
            <div
              className="h-14 w-48 rounded-xl animate-pulse"
              style={{ background: "var(--cps-gradient-mid)" }}
            />
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div
            className="h-8 rounded-xl mb-8 w-1/3 mx-auto animate-pulse"
            style={{ background: "var(--cps-gray-200)" }}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="p-6 rounded-xl animate-pulse"
                style={{ background: "var(--cps-gray-100)" }}
              >
                <div
                  className="h-6 rounded-lg mb-4 w-3/4 animate-pulse"
                  style={{ background: "var(--cps-gray-200)" }}
                />
                <div
                  className="h-4 rounded-lg mb-2 animate-pulse"
                  style={{ background: "var(--cps-gray-200)" }}
                />
                <div
                  className="h-4 rounded-lg mb-2 w-5/6 animate-pulse"
                  style={{ background: "var(--cps-gray-200)" }}
                />
                <div
                  className="h-4 rounded-lg w-2/3 animate-pulse"
                  style={{ background: "var(--cps-gray-200)" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
