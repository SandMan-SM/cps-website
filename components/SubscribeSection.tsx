import { BookOpen, Mail } from "lucide-react";
import SubscribeForm from "./SubscribeForm";

export default function SubscribeSection() {
  return (
    <section id="subscribe" className="scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-8 overflow-hidden rounded-3xl border border-teal-200 bg-teal-50 p-7 shadow-card sm:p-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
            <BookOpen className="h-4 w-4" aria-hidden={true} /> CPS resources
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-teal-950">Practical support, in your inbox.</h2>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-teal-800/80">
            Subscribe for useful mental-health resources, practice news, and updates from Comprehensive Psychological Services.
          </p>
        </div>
        <div className="min-w-0">
          <SubscribeForm />
        </div>
      </div>
    </section>
  );
}
