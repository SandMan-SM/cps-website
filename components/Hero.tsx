import { Mail, CalendarCheck, Award, Video, MapPin, ShieldCheck } from "lucide-react";
import { brand } from "@/lib/data";

export default function Hero() {
  const trust = [
    { icon: ShieldCheck, label: `Serving Utah since ${brand.since}` },
    { icon: Award, label: "Best Practice 2024" },
    { icon: Video, label: "Telehealth available" },
    { icon: MapPin, label: "3 Utah locations" },
  ];

  return (
    <section className="hero-photo">
      <div className="mx-auto min-h-[540px] max-w-7xl px-5 py-10 sm:px-8 md:flex md:min-h-[620px] md:items-center md:px-10 md:py-20 lg:px-12">
        <div className="max-w-[760px] text-center md:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-4 py-2 text-xs font-semibold text-teal-700 shadow-sm">
            <Award className="h-4 w-4" aria-hidden={true} /> {brand.award}
          </span>

          <h1 className="mx-auto mt-5 max-w-3xl text-[clamp(1.35rem,7.7vw,2rem)] font-extrabold leading-[1.08] tracking-tight text-teal-950 sm:text-5xl md:mx-0 md:mt-7 md:text-6xl">
            <span className="block whitespace-nowrap md:inline">Compassionate mental</span>{" "}
            <span className="block whitespace-nowrap md:inline">health care for every Utah</span>{" "}
            <span className="block whitespace-nowrap md:inline">family — since {brand.since}.</span>
          </h1>

          <p className="mt-6 hidden max-w-2xl text-lg leading-relaxed text-teal-800/90 md:block">
            Counseling, medication management, neurofeedback, evaluations, and more — with a
            team of {brand.providerCount} licensed providers across Salt Lake City, Layton, and
            West Jordan. In person or via telehealth.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4" style={{ marginTop: "2rem" }}>
            <a
              href="#request"
              data-book-appointment="true"
              aria-label="Request an appointment"
              className="cps-button-art inline-flex items-center justify-center gap-2 rounded-full bg-teal-700 px-8 py-4 text-base font-bold text-white shadow-lg shadow-teal-900/10 transition hover:bg-teal-800"
            >
              <CalendarCheck className="h-5 w-5" aria-hidden={true} />
              Request an appointment
            </a>
            <a
              href="#subscribe"
              aria-label="Subscribe to CPS updates"
              className="hidden items-center justify-center gap-2 rounded-full border-2 border-teal-700 bg-white/90 px-8 py-4 text-base font-bold text-teal-800 transition hover:bg-white md:inline-flex"
            >
              <Mail className="h-5 w-5" aria-hidden={true} />
              Subscribe
            </a>
          </div>

          <div className="mt-8 hidden flex-wrap items-center justify-start gap-4 text-sm font-medium text-teal-800 md:flex">
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
