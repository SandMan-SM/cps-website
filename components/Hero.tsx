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
      <div className="mx-auto max-w-7xl px-8 sm:px-10 lg:px-10 py-16 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-1.5 text-xs font-semibold text-teal-700 shadow-sm">
            <Award className="h-4 w-4" aria-hidden={true} /> {brand.award} · {brand.providerCount} licensed providers
          </span>

          <h1 className="text-balance mt-6 text-4xl font-extrabold leading-tight tracking-tight text-teal-950 sm:text-5xl">
            Compassionate mental health care for every Utah family — since {brand.since}.
          </h1>

          <p className="text-balance mx-auto mt-6 max-w-2xl text-lg text-teal-800/90">
            Counseling, medication management, neurofeedback, evaluations, and more — with a
            team of {brand.providerCount} licensed providers across Salt Lake City, Layton, and
            West Jordan. In person or via telehealth.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4" style={{ marginTop: "2rem" }}>
            <a
              href={brand.phoneHref}
              aria-label={`Call ${brand.name} at ${brand.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-700 px-8 py-4 text-base font-bold text-white shadow-lg shadow-teal-900/10 transition hover:bg-teal-800"
            >
              <Phone className="h-5 w-5" aria-hidden={true} />
              Call {brand.phone}
            </a>
            <a
              href="#request"
              aria-label="Request an appointment"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-teal-700 bg-white px-8 py-4 text-base font-bold text-teal-800 transition hover:bg-teal-50"
            >
              <CalendarCheck className="h-5 w-5" aria-hidden={true} />
              Request an appointment
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-teal-800">
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
