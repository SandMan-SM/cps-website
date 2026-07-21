import { CalendarCheck, ShieldCheck } from "lucide-react";
import { steps, insuranceLine } from "@/lib/data";

export default function GetStarted() {
  return (
    <section id="get-started" className="scroll-mt-20 bg-teal-50/40 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-teal-950 sm:text-4xl">
            Getting started is simple
          </h2>
          <p className="mt-4 text-lg text-teal-800/90">
            Three easy steps to compassionate care — most people are seen quickly.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-teal-100 bg-white p-6 shadow-card"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-700 text-base font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-bold text-teal-950">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-teal-800/80">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-4 rounded-2xl border border-sand-200 bg-sand-50 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-start gap-4">
            <ShieldCheck className="mt-0.5 h-6 w-6 flex-none text-sand-700" aria-hidden={true} />
            <p className="text-sm font-medium text-teal-900">{insuranceLine}</p>
          </div>
          <a
            href="/#request"
            data-book-appointment="true"
            aria-label="Request an appointment"
            className="inline-flex flex-none items-center gap-2 rounded-full bg-teal-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-teal-800"
          >
            <CalendarCheck className="h-4 w-4" aria-hidden={true} /> Request an appointment
          </a>
        </div>
      </div>
    </section>
  );
}
