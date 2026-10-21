import { BookOpen, Mail } from "lucide-react";
import SubscribeForm from "./SubscribeForm";

export default function SubscribeSection() {
  return (
    <section id="subscribe" className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-8 overflow-hidden rounded-3xl border border-teal-200 bg-teal-50 p-6 shadow-card sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-10">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
            <BookOpen className="h-4 w-4" aria-hidden={true} /> Practical resources
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-teal-950">Practical support, in your inbox.</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-teal-800/80">
            Useful Utah resources for your health, home, work, and community, plus updates from
            Clinical and Professional Solutions.
          </p>
        </div>
        <div className="min-w-0">
          <SubscribeForm />
        </div>
      </div>
    </section>
  );
}
