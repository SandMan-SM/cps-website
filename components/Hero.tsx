import { CalendarCheck, Landmark, Compass, ShieldCheck, Sparkles } from "lucide-react";
import { brand } from "@/lib/data";

export default function Hero() {
  const trust = [
    { icon: ShieldCheck, label: "Confidential next steps" },
    { icon: Compass, label: "Clear solutions guidance" },
    { icon: Sparkles, label: "Best-fit service options" },
  ];

  return (
    <section className="hero-photo">
      <div className="mx-auto flex min-h-[580px] max-w-7xl items-center justify-center px-6 py-16 sm:min-h-[640px] sm:px-8 lg:py-20">
        <div className="mx-auto w-full max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-2 text-xs font-semibold text-teal-700 shadow-sm">
            <Landmark className="h-4 w-4" aria-hidden={true} /> Partnered with {brand.partnerName}
          </span>

          <h1 className="mx-auto mt-8 max-w-5xl tracking-[-0.025em]">
            <span className="block text-[clamp(2.25rem,6vw,4rem)] font-bold leading-[1.12] text-teal-950">
              Utah solutions.
            </span>
            <span className="mt-4 block text-[clamp(1.75rem,3.6vw,2.5rem)] font-medium leading-[1.3] tracking-[-0.015em] text-teal-800">
              Real direction.{" "}
              <span className="block sm:inline">Your next step.</span>
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-teal-800/90 sm:text-lg">
            From health and home to business and everyday life, we help you explore Utah‑based
            solutions and move toward the right support.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#request"
              data-book-appointment="true"
              aria-label="Request a solution"
              className="cps-button-art inline-flex items-center justify-center gap-2 rounded-full bg-teal-700 px-8 py-4 text-base font-bold text-white shadow-lg shadow-teal-900/10 transition hover:bg-teal-800"
            >
              <CalendarCheck className="h-5 w-5" aria-hidden={true} />
              Request a solution
            </a>
            <a
              href="#solutions"
              aria-label="Explore Utah solutions"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-teal-700 bg-white/90 px-8 py-4 text-base font-bold text-teal-800 transition hover:bg-white"
            >
              <Compass className="h-5 w-5" aria-hidden={true} />
              Explore solutions
            </a>
          </div>

          <div className="mt-8 hidden flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-teal-800 md:flex">
            {trust.map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-1.5">
                <Icon className="h-4 w-4 text-teal-600" aria-hidden={true} />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
