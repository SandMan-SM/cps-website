import {
  MessageCircleHeart,
  Pill,
  BrainCircuit,
  ClipboardCheck,
  HeartPulse,
  ShieldCheck,
  Briefcase,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { services, brand } from "@/lib/data";

const icons: Record<string, LucideIcon> = {
  MessageCircleHeart,
  Pill,
  BrainCircuit,
  ClipboardCheck,
  HeartPulse,
  ShieldCheck,
  Briefcase,
};

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-teal-50/40 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-teal-950 sm:text-4xl">
            Care for the whole person, at every stage of life
          </h2>
          <p className="mt-4 text-lg text-teal-800/90">
            One trusted team, a full range of behavioral health services — so you always have
            the right support close by.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon] ?? MessageCircleHeart;
            return (
              <div
                key={service.title}
                className="group flex flex-col rounded-2xl border border-teal-100 bg-white p-6 shadow-card transition hover:-translate-y-0.5 hover:shadow-cardHover"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-700/10 text-teal-700 transition group-hover:bg-teal-700 group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-bold text-teal-950">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-teal-800/80">
                  {service.description}
                </p>
                <a
                  href={brand.phoneHref}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 transition hover:text-teal-800"
                >
                  <Phone className="h-4 w-4" aria-hidden /> Call to start
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
