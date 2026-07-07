import {
  CalendarClock,
  Users,
  Video,
  MapPin,
  Sparkles,
  Award,
  type LucideIcon,
} from "lucide-react";
import { whyPoints } from "@/lib/data";

const icons: Record<string, LucideIcon> = {
  CalendarClock,
  Users,
  Video,
  MapPin,
  Sparkles,
  Award,
};

export default function WhyCPS() {
  return (
    <section id="why" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-teal-950 sm:text-4xl">
            Why families across Utah choose CPS
          </h2>
          <p className="mt-4 text-lg text-teal-800/90">
            Nearly four decades of experience, a deep bench of licensed providers, and care
            that meets you where you are.
          </p>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {whyPoints.map((point) => {
            const Icon = icons[point.icon] ?? Sparkles;
            return (
              <div key={point.title} className="flex gap-4">
                <span className="mt-0.5 flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-sand-100 text-sand-700">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="text-base font-bold text-teal-950">{point.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-teal-800/80">
                    {point.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
