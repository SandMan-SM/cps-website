import {
  MessageCircleHeart,
  Pill,
  BrainCircuit,
  ClipboardCheck,
  HeartPulse,
  ShieldCheck,
  Briefcase,
  ArrowRight,
  Sparkles,
  House,
  Scale,
  Landmark,
  Users,
  GraduationCap,
  Search,
  HeartHandshake,
  Laptop,
  MapPin,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { solutionPages } from "@/lib/services";

const icons: Record<string, LucideIcon> = {
  MessageCircleHeart,
  Pill,
  BrainCircuit,
  ClipboardCheck,
  HeartPulse,
  ShieldCheck,
  Briefcase,
  Sparkles,
  House,
  Scale,
  Landmark,
  Users,
  GraduationCap,
  Search,
  HeartHandshake,
  Laptop,
  MapPin,
};

const featuredSolutions = solutionPages.filter((solution) => solution.featured);

export default function Services() {
  return (
    <section id="solutions" className="scroll-mt-20 bg-teal-50/40 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl text-left">
          <h2 className="text-3xl font-extrabold tracking-tight text-teal-950 sm:text-4xl">
            Find the right solution for your next step
          </h2>
          <p className="mt-4 text-lg text-teal-800/90">
            Clinical and Professional Solutions, in partnership with Utah Main Street, helps
            people across Utah explore everyday resources, compare practical options, and
            prepare informed questions before choosing an independent organization.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredSolutions.map((solution) => {
            const Icon = icons[solution.icon] ?? MapPin;
            return (
              <div
                key={solution.slug}
                className="group flex overflow-hidden rounded-2xl border border-teal-100 bg-white shadow-card transition hover:-translate-y-0.5 hover:shadow-cardHover"
              >
                <div className="flex min-h-0 w-full flex-col">
                  <div className="flex h-28 items-center justify-center bg-gradient-to-br from-teal-700 to-teal-900 text-white">
                    <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/30 bg-white/10 shadow-sm transition duration-300 group-hover:scale-105 group-hover:bg-white/15">
                      <Icon className="h-8 w-8" aria-hidden={true} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-bold text-teal-950">{solution.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-teal-800/80">
                      {solution.cardDescription}
                    </p>
                    <Link
                      href={`/solutions/${solution.slug}`}
                      aria-label={`Explore ${solution.name} solutions in Utah`}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 transition hover:text-teal-800"
                    >
                      Explore solutions <ArrowRight className="h-4 w-4" aria-hidden={true} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 max-w-4xl text-sm leading-relaxed text-teal-800/70">
          Guidance is informational. Independent organizations control their qualifications,
          scope, eligibility, availability, pricing, and terms; verify current details directly
          before making a decision.
        </p>
      </div>
    </section>
  );
}
