import {
  MessageCircleHeart,
  Pill,
  BrainCircuit,
  ClipboardCheck,
  HeartPulse,
  ShieldCheck,
  Briefcase,
  CalendarCheck,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { services } from "@/lib/data";

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
        <div className="max-w-3xl text-left">
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
                className="group flex overflow-hidden rounded-2xl border border-teal-100 bg-white shadow-card transition hover:-translate-y-0.5 hover:shadow-cardHover"
              >
                <div className="flex min-h-0 w-full flex-col">
                  <div className="relative aspect-[16/9] overflow-hidden bg-teal-100">
                    <Image
                      src={service.image}
                      alt={`${service.title} service`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.025]"
                    />
                    <span className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/70 bg-white/95 text-teal-700 shadow-md backdrop-blur-sm transition group-hover:bg-teal-700 group-hover:text-white">
                      <Icon className="h-6 w-6" aria-hidden={true} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-bold text-teal-950">{service.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-teal-800/80">
                      {service.description}
                    </p>
                    <a
                      href="/#request"
                      data-book-appointment="true"
                      aria-label={`Request an appointment for ${service.title}`}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 transition hover:text-teal-800"
                    >
                      <CalendarCheck className="h-4 w-4" aria-hidden={true} /> Request an appointment
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
