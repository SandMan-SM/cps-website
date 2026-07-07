import { Phone, Clock, Video } from "lucide-react";
import LeadForm from "./LeadForm";
import { brand } from "@/lib/data";

export default function RequestSection() {
  const points = [
    { icon: Phone, text: `Speak with a real person at ${brand.phone}` },
    { icon: Clock, text: "Most requests answered the same business day" },
    { icon: Video, text: "In-person or telehealth — your choice" },
  ];

  return (
    <section id="request" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-teal-950 sm:text-4xl">
              Request an appointment
            </h2>
            <p className="mt-4 text-lg text-teal-800/90">
              Tell us a little about what you need and we&apos;ll reach out to match you with
              the right provider. No pressure, no obligation.
            </p>

            <ul className="mt-8 space-y-4">
              {points.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-teal-700/10 text-teal-700">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="text-teal-900">{text}</span>
                </li>
              ))}
            </ul>

            <a
              href={brand.phoneHref}
              className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-teal-700 px-6 py-3 text-base font-bold text-teal-800 transition hover:bg-teal-50"
            >
              <Phone className="h-5 w-5" aria-hidden /> Call {brand.phone}
            </a>
          </div>

          <LeadForm />
        </div>
      </div>
    </section>
  );
}
