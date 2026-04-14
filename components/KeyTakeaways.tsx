import type { ServiceData } from "@/lib/services";

interface Props {
  service: ServiceData;
}

/**
 * Key Takeaways box — appears at the top of service pages.
 * Addresses O02 (Summary Box / TL;DR) from the SEO scorecard.
 */
export default function KeyTakeaways({ service }: Props) {
  const takeaways = [
    `Licensed doctoral-level psychologists with ${service.shortName === "Neuropsychology" ? "neuropsychological" : service.shortName === "ADHD Evaluation" ? "ADHD assessment" : "specialized clinical"} expertise`,
    service.shortName === "Neuropsychology" || service.shortName === "Neuropsych ADHD Testing"
      ? "Comprehensive brain-behavior assessments measuring memory, attention, processing speed, and executive function"
      : service.shortName === "Custody Evaluation"
      ? "Court-accepted evaluations by psychologists experienced in Utah family law"
      : service.shortName === "Ketamine Therapy"
      ? "FDA-approved ketamine and Spravato protocols — rapid relief for treatment-resistant depression"
      : service.shortName === "Autism Assessment"
      ? "Gold-standard ADOS-2 diagnostic assessment for children, teens, and adults"
      : "Evidence-based, multi-method assessment tailored to your specific concerns",
    service.shortName === "Custody Evaluation"
      ? "Reports admitted in courts throughout Utah — trusted by attorneys and judges since 1986"
      : service.shortName === "Ketamine Therapy"
      ? "Most major insurance plans accepted — Spravato may be covered"
      : "Three convenient Utah locations — Salt Lake City, Layton, and West Jordan",
    service.shortName === "Ketamine Therapy"
      ? "Integrated with in-house therapy and medication management for lasting results"
      : service.shortName === "ADHD Evaluation" || service.shortName === "ADHD Diagnosis"
      ? "Diagnosis accepted by schools, employers, and physicians for accommodations and treatment"
      : "Most major insurance plans accepted — self-pay options available",
  ];

  return (
    <section className="py-8 md:py-12 bg-[var(--cps-gray-50)] border-b border-[var(--cps-gray-200)]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="bg-white rounded-2xl border border-[var(--cps-gray-200)] overflow-hidden shadow-sm">
          <div className="bg-[var(--cps-blue)] px-6 py-4">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">
              Key Takeaways
            </h2>
          </div>
          <ul className="divide-y divide-[var(--cps-gray-100)]">
            {takeaways.map((item, i) => (
              <li key={i} className="flex items-start gap-4 px-6 py-4 text-sm text-[var(--cps-gray-700)]">
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--cps-blue)] mt-2 shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
