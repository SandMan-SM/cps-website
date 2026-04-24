import Image from "next/image";
import Link from "next/link";
import {
  Phone, MapPin, CheckCircle2, ArrowRight,
  ChevronDown, Calendar, Shield, Award, Building2, Brain,
} from "lucide-react";
import type { ServiceData, LocationData } from "@/lib/services";
import { serviceHero } from "@/lib/stock-images";
import { conditions as allConditions } from "@/lib/conditions";
import type { ConditionSlug } from "@/lib/conditions";
import KeyTakeaways from "./KeyTakeaways";

// Service slug → related condition slugs
const SERVICE_CONDITIONS: Record<string, ConditionSlug[]> = {
  "adhd-evaluation-near-me": ["adhd-in-adults"],
  "adhd-diagnosis-near-me": ["adhd-in-adults"],
  "adhd-testing": ["adhd-in-adults"],
  "neuropsychological-testing-for-adhd": ["adhd-in-adults"],
  "autism-assessment": ["autism-in-adults"],
  "ados-2-testing-near-me": ["autism-in-adults"],
  "neuropsychologist-near-me": ["concussion-tbi", "dementia-memory"],
  "neuropsychologist": ["concussion-tbi", "dementia-memory"],
  "cognitive-evaluation-near-me": ["dementia-memory", "learning-disability"],
  "ketamine-depression-treatment-near-me": ["treatment-resistant-depression"],
  "spravato-esketamine-therapy": ["treatment-resistant-depression"],
  "intensive-outpatient-program-iop": ["treatment-resistant-depression"],
  "medication-management": ["treatment-resistant-depression", "adhd-in-adults"],
  "neurofeedback-therapy": ["adhd-in-adults", "concussion-tbi"],
  "counseling-and-psychotherapy": ["treatment-resistant-depression", "adhd-in-adults"],
};

const PHONE = "(801) 483-1600";
const PHONE_HREF = "tel:8014831600";

interface Props {
  service: ServiceData;
  location?: LocationData;
  relatedServices: ServiceData[];
}

export default function ServicePageContent({ service, location, relatedServices }: Props) {
  const locationName = location?.name;
  const h1 = location
    ? `${service.title} in ${locationName}`
    : service.h1;

  return (
    <main id="main">
      {/* ──── Breadcrumb ──── */}
      <div className="bg-[var(--cps-gray-50)] border-b border-[var(--cps-gray-200)] py-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <nav aria-label="Breadcrumb" className="text-sm text-[var(--cps-gray-500)]">
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link href="/" className="hover:text-[var(--cps-blue)] transition-colors">Home</Link></li>
              <li>/</li>
              {location ? (
                <>
                  <li><Link href={`/${service.slug}`} className="hover:text-[var(--cps-blue)] transition-colors">{service.title}</Link></li>
                  <li>/</li>
                  <li className="text-[var(--cps-gray-700)] font-medium">{locationName}</li>
                </>
              ) : (
                <li className="text-[var(--cps-gray-700)] font-medium">{service.title}</li>
              )}
            </ol>
          </nav>
        </div>
      </div>

      {/* ──── Hero ──── */}
      <section className="relative bg-gradient-to-br from-[var(--cps-dark)] via-[var(--cps-gradient-mid)] to-[var(--cps-dark)] text-[var(--cps-white)] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-[var(--cps-blue)] blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[var(--cps-teal)] blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12 md:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              {location && (
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-4 h-4 text-[var(--cps-teal)]" aria-hidden="true" />
                  <span className="text-sm font-semibold text-[var(--cps-teal)] uppercase tracking-wider">
                    Serving {locationName}{location.county ? `, ${location.county}` : ""}
                  </span>
                </div>
              )}
              <h1 className="display-heading text-[var(--cps-white)] mb-6">{h1}</h1>
              <p className="body-large text-[var(--cps-white)]/80 mb-8 max-w-2xl">{service.heroSubtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/#contact" className="inline-flex items-center justify-center gap-4 px-8 py-4 bg-[var(--cps-blue)] hover:bg-[var(--cps-blue-hover)] text-[var(--cps-white)] font-bold rounded-xl transition-colors text-lg">
                  <Calendar className="w-5 h-5" aria-hidden="true" />
                  {service.ctaText}
                </Link>
                <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-4 px-8 py-4 bg-transparent hover:bg-[var(--cps-white)]/10 text-[var(--cps-white)] font-bold rounded-xl transition-colors text-lg border-2 border-white">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  {PHONE}
                </a>
              </div>
            </div>
            {serviceHero[service.slug] && (
              <div className="hidden lg:block relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                <Image
                  src={serviceHero[service.slug].src}
                  alt={serviceHero[service.slug].alt}
                  fill
                  sizes="(max-width: 1024px) 0px, 560px"
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ──── Key Takeaways (SEO: O02) ──── */}
      <KeyTakeaways service={service} />

      {/* ──── Trust bar ──── */}
      <section className="bg-[var(--cps-gray-50)] border-b border-[var(--cps-gray-200)] py-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-14 text-sm text-[var(--cps-gray-500)]">
            <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-[var(--cps-blue)]" aria-hidden="true" /> Licensed Psychologists</div>
            <div className="flex items-center gap-2"><Award className="w-4 h-4 text-[var(--cps-blue)]" aria-hidden="true" /> Since 1986</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--cps-blue)]" aria-hidden="true" /> Insurance Accepted</div>
            <div className="flex items-center gap-2"><Building2 className="w-4 h-4 text-[var(--cps-blue)]" aria-hidden="true" /> 3 Locations</div>
          </div>
        </div>
      </section>

      {/* ──── Overview ──── */}
      <section className="py-12 md:py-16 bg-[var(--cps-white)]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <div>
            <h2 className="section-heading text-[var(--cps-gray-900)] mb-8">
              {location ? `${service.shortName} in ${locationName}` : `About ${service.shortName}`}
            </h2>
            <div className="space-y-6 text-[var(--cps-gray-600)] body-large leading-relaxed">
              {service.overview.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              {location && (
                <p>
                  {location.description} To schedule a {service.shortName.toLowerCase()} appointment, call us at {PHONE} or visit our {location.nearestOffice} office at {location.nearestAddress}.
                </p>
              )}
            </div>

            {/* ── About the Evaluator (E-E-A-T) ── */}
            <div className="mt-8 bg-[var(--cps-gray-50)] border-l-4 border-[var(--cps-blue)] p-6 rounded-r-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--cps-light)] flex items-center justify-center shrink-0" aria-hidden="true">
                  <Brain className="w-6 h-6 text-[var(--cps-blue)]" />
                </div>
                <div>
                  <p className="text-xs text-[var(--cps-blue)] font-semibold uppercase tracking-wider mb-1">About the Evaluator</p>
                  <p className="text-sm font-bold text-[var(--cps-gray-900)] mb-1">Steven Szykula, Ph.D. — Licensed Psychologist</p>
                  <p className="text-sm text-[var(--cps-gray-600)] leading-relaxed">
                    Dr. Szykula has been evaluating and treating behavioral health conditions in Utah since 1979. As the founder of Comprehensive Psychological Services, he has conducted thousands of neuropsychological, ADHD, autism, and custody evaluations. He has provided expert testimony in Utah family courts and is a member of the American Academy of Clinical Neuropsychology (AACN).
                  </p>
                  <a href="tel:8014831600" className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--cps-blue)] hover:text-[var(--cps-blue-hover)] transition-colors mt-2">
                    <Phone className="w-4 h-4" aria-hidden="true" /> (801) 483-1600
                  </a>
                </div>
              </div>
            </div>

            {/* ── References & Resources ── */}
            {service.citations && service.citations.length > 0 && (
              <div className="mt-8 pt-6 border-t border-[var(--cps-gray-100)]">
                <h3 className="text-sm font-bold text-[var(--cps-gray-700)] mb-4">References &amp; Resources</h3>
                <ul className="space-y-2 text-xs text-[var(--cps-gray-400)]">
                  {service.citations.map((cite, i) => (
                    <li key={i}>
                      {cite.url ? (
                        <a href={cite.url} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--cps-blue)] transition-colors">
                          {i + 1}. {cite.text}
                        </a>
                      ) : (
                        <span>{i + 1}. {cite.text}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ──── Inline CTA (mid-page) ──── */}
      <section className="py-8 bg-[var(--cps-light)] border-y border-[var(--cps-gray-200)]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <p className="text-lg font-bold text-[var(--cps-gray-900)]">
              Ready to schedule a {service.shortName.toLowerCase()}?
            </p>
            <p className="text-sm text-[var(--cps-gray-600)] mt-2">
              Insurance verification on your first call. Most patients scheduled within 1–2 weeks.
            </p>
          </div>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap px-8 py-4 bg-[var(--cps-blue)] hover:bg-[var(--cps-blue-hover)] text-[var(--cps-white)] font-bold rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cps-blue)] focus-visible:ring-offset-2"
            aria-label={`Call CPS at ${PHONE} to schedule ${service.shortName}`}
          >
            <Phone className="w-5 h-5" aria-hidden="true" /> {PHONE}
          </a>
        </div>
      </section>

      {/* ──── Comparison Table ──── */}
      {service.comparisonTable && (
        <section className="py-12 md:py-16 bg-[var(--cps-white)]">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
            <h2 className="section-heading text-[var(--cps-gray-900)] mb-8">{service.comparisonTable.title}</h2>
            {/* Desktop table — hidden on mobile */}
            <div className="hidden md:block overflow-x-auto rounded-xl overflow-hidden border border-[var(--cps-gray-200)]">
              <table className="w-full text-sm text-left">
                <thead className="bg-[var(--cps-gray-100)] text-[var(--cps-blue)]">
                  <tr>
                    {service.comparisonTable.headers.map((header, i) => (
                      <th key={i} scope="col" className="px-6 py-4 font-semibold border-b border-[var(--cps-gray-200)]">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-[var(--cps-white)] divide-y divide-[var(--cps-gray-200)]">
                  {service.comparisonTable.rows.map((row, ri) => (
                    <tr key={ri} className={`transition-colors ${ri % 2 === 1 ? 'bg-[var(--cps-gray-50)]' : 'bg-[var(--cps-white)]'}`}>
                      {row.map((cell, ci) => (
                        ci === 0 ? (
                          <th key={ci} scope="row" className="px-6 py-4 font-semibold text-[var(--cps-gray-800)]">
                            {cell}
                          </th>
                        ) : (
                          <td key={ci} className="px-6 py-4 text-[var(--cps-gray-600)]">
                            {cell}
                          </td>
                        )
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Mobile cards — stacked layout */}
            <div className="md:hidden space-y-4">
              {service.comparisonTable.rows.map((row, ri) => (
                <div key={ri} className={`rounded-xl border overflow-hidden ${ri % 2 === 1 ? 'bg-[var(--cps-gray-50)] border-[var(--cps-gray-200)]' : 'bg-[var(--cps-white)] border-[var(--cps-gray-200)]'}`}>
                  {row.map((cell, ci) => {
                    const headers = service.comparisonTable?.headers ?? [];
                    return (
                    <div key={ci} className={`flex flex-col px-4 py-4 ${ci === 0 ? 'bg-[var(--cps-light)] border-b border-[var(--cps-gray-200)]' : 'border-b last:border-b-0 border-[var(--cps-gray-100)]'}`}>
                      <span className="text-xs font-semibold text-[var(--cps-gray-500)] uppercase tracking-wider mb-1">
                        {headers[ci]}
                      </span>
                      <span className={`text-sm ${ci === 0 ? 'font-bold text-[var(--cps-gray-900)]' : 'text-[var(--cps-gray-700)]'}`}>
                        {cell}
                      </span>
                    </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ──── What to Expect ──── */}
      <section className="py-12 md:py-16 bg-[var(--cps-gray-50)]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <div>
            <h2 className="section-heading text-[var(--cps-gray-900)] mb-8">What to Expect</h2>
            <div className="space-y-4">
              {service.whatToExpect.map((step, i) => (
                <div key={i} className="flex gap-4 p-6 bg-[var(--cps-white)] rounded-xl border border-[var(--cps-gray-200)]">
                  <div className="w-10 h-10 rounded-lg bg-[var(--cps-light)] flex items-center justify-center shrink-0 text-[var(--cps-blue)] font-bold text-sm">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-[var(--cps-gray-700)] leading-relaxed self-center">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──── Benefits ──── */}
      <section className="py-12 md:py-16 bg-[var(--cps-white)]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <div>
            <h2 className="section-heading text-[var(--cps-gray-900)] mb-8">Why Choose CPS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-4 p-4">
                  <CheckCircle2 className="w-5 h-5 text-[var(--cps-success)] shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-[var(--cps-gray-700)]">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──── Location Info (if location page) ──── */}
      {location && (
        <section className="py-12 md:py-16 bg-[var(--cps-gray-50)]">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
            <div>
              <h2 className="section-heading text-[var(--cps-gray-900)] mb-8">
                Nearest Office — {location.nearestOffice}
              </h2>
              <div className="bg-[var(--cps-white)] p-8 rounded-2xl border border-[var(--cps-gray-200)]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--cps-light)] flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[var(--cps-blue)]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--cps-gray-900)] mb-1">CPS {location.nearestOffice}</h3>
                    <p className="text-[var(--cps-gray-600)] mb-4">{location.nearestAddress}</p>
                    <a href={PHONE_HREF} className="inline-flex items-center gap-2 text-[var(--cps-blue)] font-semibold hover:text-[var(--cps-blue-hover)] transition-colors">
                      <Phone className="w-4 h-4" aria-hidden="true" /> {PHONE}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ──── FAQ ──── */}
      <section className="py-12 md:py-16 bg-[var(--cps-white)]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <div>
            <h2 className="section-heading text-[var(--cps-gray-900)] mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {service.faqItems.map((faq, i) => (
                <details key={i} className="group bg-[var(--cps-gray-50)] rounded-xl border border-[var(--cps-gray-200)] overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-semibold text-[var(--cps-gray-900)] hover:text-[var(--cps-blue)] transition-colors">
                    {faq.q}
                    <ChevronDown className="w-5 h-5 text-[var(--cps-gray-400)] group-open:rotate-180 transition-transform shrink-0 ml-4" aria-hidden="true" />
                  </summary>
                  <div className="px-6 pb-6 text-[var(--cps-gray-600)] leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──── Related Conditions ──── */}
      {(() => {
        const relatedConditionSlugs = SERVICE_CONDITIONS[service.slug] ?? [];
        const relatedConditions = allConditions.filter((c) => relatedConditionSlugs.includes(c.slug));
        if (relatedConditions.length === 0) return null;
        return (
          <section className="py-12 md:py-16 bg-[var(--cps-white)]">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
              <h2 className="section-heading text-[var(--cps-gray-900)] mb-8">Related Conditions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedConditions.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/conditions/${c.slug}`}
                    className="group block p-6 bg-[var(--cps-light)] rounded-2xl hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--cps-blue)] focus-visible:ring-offset-2"
                  >
                    <h3 className="font-bold text-[var(--cps-gray-900)] group-hover:text-[var(--cps-blue)] transition-colors mb-2">
                      {c.name}
                    </h3>
                    <p className="text-sm text-[var(--cps-gray-600)] leading-relaxed mb-4">
                      {c.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--cps-blue)] group-hover:gap-2 transition-all">
                      Read the condition guide <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* ──── Related Services ──── */}
      {relatedServices.length > 0 && (
        <section className="py-12 md:py-16 bg-[var(--cps-gray-50)]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div>
              <h2 className="section-heading text-[var(--cps-gray-900)] mb-8">Related Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedServices.map((rel) => (
                  <a key={rel.slug} href={`/${rel.slug}`} className="group block p-6 bg-[var(--cps-white)] rounded-xl border border-[var(--cps-gray-200)] hover:border-[var(--cps-blue)]/30 hover:shadow-md transition-all">
                    <h3 className="font-bold text-[var(--cps-gray-900)] group-hover:text-[var(--cps-blue)] transition-colors mb-2">{rel.title}</h3>
                    <p className="text-sm text-[var(--cps-gray-500)] leading-relaxed mb-4">{rel.heroSubtitle.slice(0, 120)}...</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--cps-blue)] group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ──── Bottom CTA ──── */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-[var(--cps-dark)] via-[var(--cps-gradient-mid)] to-[var(--cps-dark)] text-[var(--cps-white)]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <div>
            <h2 className="section-heading text-[var(--cps-white)] mb-4">Ready to Get Started?</h2>
            <p className="text-[var(--cps-white)]/70 body-large mb-8 max-w-2xl mx-auto">
              {location
                ? `Schedule your ${service.shortName.toLowerCase()} at our ${location.nearestOffice} office. Call us today or book online.`
                : `Schedule your ${service.shortName.toLowerCase()} at one of our three Utah locations. Call us today or book online.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact" className="inline-flex items-center justify-center gap-4 px-8 py-4 bg-[var(--cps-blue)] hover:bg-[var(--cps-blue-hover)] text-[var(--cps-white)] font-bold rounded-xl transition-colors text-lg">
                <Calendar className="w-5 h-5" aria-hidden="true" />
                {service.ctaText}
              </Link>
              <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-4 px-8 py-4 bg-transparent hover:bg-[var(--cps-white)]/10 text-[var(--cps-white)] font-bold rounded-xl transition-colors text-lg border-2 border-white">
                <Phone className="w-5 h-5" aria-hidden="true" />
                {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ──── YMYL Disclaimer (T08) ──── */}
      <section className="py-8 bg-[var(--cps-gray-50)] border-t border-[var(--cps-gray-200)]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
          <p className="text-xs text-[var(--cps-gray-400)] text-center leading-relaxed">
            <strong>Disclaimer:</strong> The information on this page is for educational purposes only and does not constitute medical advice, diagnosis, or treatment. The information provided reflects general descriptions of psychological services and is not a substitute for a professional evaluation. If you believe you or someone you know may benefit from these services, please contact CPS at <a href="tel:8014831600" className="underline hover:text-[var(--cps-blue)]">(801) 483-1600</a>. For mental health emergencies, please call 988 (Suicide & Crisis Lifeline) or 911.
          </p>
        </div>
      </section>
    </main>
  );
}
