import { UserRound, Quote } from "lucide-react";
import { brand } from "@/lib/data";

export default function Team() {
  return (
    <section id="team" className="scroll-mt-20 py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-teal-100 bg-white shadow-card">
          <div className="grid md:grid-cols-5">
            <div className="bg-band flex flex-col items-center justify-center gap-4 p-8 text-center md:col-span-2">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/10 text-white">
                <UserRound className="h-10 w-10" aria-hidden={true} />
              </span>
              <div>
                <div className="text-lg font-bold text-white">{brand.founder.name}</div>
                <div className="mt-1 text-sm text-teal-100">{brand.founder.title}</div>
              </div>
            </div>

            <div className="p-8 sm:p-10 md:col-span-3">
              <Quote className="h-8 w-8 text-teal-200" aria-hidden={true} />
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-teal-950 sm:text-3xl">
                Led by experience. Backed by a team.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-teal-800/90">
                Founded by {brand.founder.name}, a Licensed Clinical Psychologist, CPS has
                served Utah since {brand.since}. Today our practice brings together a team of{" "}
                {brand.providerCount} licensed psychologists, counselors, social workers, and
                medication providers — so whatever you or your family are facing, there&apos;s
                a caring expert ready to help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
