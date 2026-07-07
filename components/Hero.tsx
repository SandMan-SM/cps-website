import { Phone, CalendarCheck, Award, Video, MapPin, ShieldCheck } from "lucide-react";
import { brand } from "@/lib/data";

export default function Hero() {
  const trust = [
    { icon: ShieldCheck, label: `Serving Utah since ${brand.since}` },
    { icon: Award, label: "Best Practice 2024" },
    { icon: Video, label: "Telehealth available" },
    { icon: MapPin, label: "3 Utah locations" },
  ];

  return (
    <section className="bg-hero">
      <div className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-1.5 text-xs font-semibold text-teal-700 shadow-sm">
            <Award className="h-4 w-4" aria-hidden /> {brand.award} · {brand.providerCount} licensed providers
          </span>

          <h1 className="text-balance mt-6 text-4xl font-extrabold leading-tight tracking-tight text-teal-950 sm:text-5xl">
            Compassionate mental health care for every Utah family — since {brand.since}.
          </h1>

          <p className="text-balance mx-auto mt-5 max-w-2xl text-lg text-teal-800/90">
            Counseling, medication management, neurofeedback, evaluations, and more — with a
            team of {brand.providerCount} licensed providers across Salt Lake City, Layton, and
            West Jordan. In person or via telehealth.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={brand.phoneHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-700 px-7 py-4 text-base font-bold text-white shadow-lg shadow-teal-900/10 transition hover:bg-teal-800 sm:w-auto"
            >
              <Phone className="h-5 w-5" aria-hidden />
              Call {brand.phone}
            </a>
            <a
              href="#request"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-teal-700 bg-white px-7 py-4 text-base font-bold text-teal-800 transition hover:bg-teal-50 sm:w-auto"
            >
              <CalendarCheck className="h-5 w-5" aria-hidden />
              Request an appointment
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-medium text-teal-800">
            {trust.map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-1.5">
                <Icon className="h-4 w-4 text-teal-600" aria-hidden />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
