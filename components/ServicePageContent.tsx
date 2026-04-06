import {
  Phone, MapPin, CheckCircle2, ArrowRight,
  ChevronDown, Calendar, Shield, Award, Building2,
} from "lucide-react";
import type { ServiceData, LocationData } from "@/lib/services";

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
      <div className="bg-[var(--cps-gray-50)] border-b border-[var(--cps-gray-200)] py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-[var(--cps-gray-500)]">
            <ol className="flex items-center gap-2 flex-wrap">
              <li><a href="/" className="hover:text-[var(--cps-blue)] transition-colors">Home</a></li>
              <li>/</li>
              {location ? (
                <>
                  <li><a href={`/${service.slug}`} className="hover:text-[var(--cps-blue)] transition-colors">{service.title}</a></li>
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
      <section className="relative bg-gradient-to-br from-[var(--cps-dark)] via-[var(--cps-gradient-mid)] to-[var(--cps-dark)] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-[var(--cps-blue)] blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[var(--cps-teal)] blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            {location && (
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-[var(--cps-teal)]" />
                <span className="text-sm font-semibold text-[var(--cps-teal)] uppercase tracking-wider">
                  Serving {locationName}{location.county ? `, ${location.county}` : ""}
                </span>
              </div>
            )}
            <h1 className="display-heading text-white mb-5">{h1}</h1>
            <p className="body-large text-white/80 mb-8 max-w-2xl">{service.heroSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--cps-blue)] hover:bg-[var(--cps-blue-hover)] text-white font-bold rounded-xl transition-colors text-lg">
                <Calendar className="w-5 h-5" />
                {service.ctaText}
              </a>
              <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-colors text-lg border border-white/20">
                <Phone className="w-5 h-5" />
                {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ──── Trust bar ──── */}
      <section className="bg-[var(--cps-gray-50)] border-b border-[var(--cps-gray-200)] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm text-[var(--cps-gray-500)]">
            <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-[var(--cps-blue)]" /> Licensed Psychologists</div>
            <div className="flex items-center gap-2"><Award className="w-4 h-4 text-[var(--cps-blue)]" /> Since 1986</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--cps-blue)]" /> Insurance Accepted</div>
            <div className="flex items-center gap-2"><Building2 className="w-4 h-4 text-[var(--cps-blue)]" /> 3 Locations</div>
          </div>
        </div>
      </section>

      {/* ──── Overview ──── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="section-heading text-[var(--cps-gray-900)] mb-8">
              {location ? `${service.shortName} in ${locationName}` : `About ${service.shortName}`}
            </h2>
            <div className="space-y-5 text-[var(--cps-gray-600)] body-large leading-relaxed">
              {service.overview.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              {location && (
                <p>
                  {location.description} To schedule a {service.shortName.toLowerCase()} appointment, call us at {PHONE} or visit our {location.nearestOffice} office at {location.nearestAddress}.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ──── What to Expect ──── */}
      <section className="py-16 md:py-24 bg-[var(--cps-gray-50)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="section-heading text-[var(--cps-gray-900)] mb-8">What to Expect</h2>
            <div className="space-y-4">
              {service.whatToExpect.map((step, i) => (
                <div key={i} className="flex gap-4 p-5 bg-white rounded-xl border border-[var(--cps-gray-200)]">
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
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="section-heading text-[var(--cps-gray-900)] mb-8">Why Choose CPS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 p-4">
                  <CheckCircle2 className="w-5 h-5 text-[var(--cps-success)] shrink-0 mt-0.5" />
                  <span className="text-[var(--cps-gray-700)]">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──── Location Info (if location page) ──── */}
      {location && (
        <section className="py-16 md:py-24 bg-[var(--cps-gray-50)]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div>
              <h2 className="section-heading text-[var(--cps-gray-900)] mb-8">
                Nearest Office — {location.nearestOffice}
              </h2>
              <div className="bg-white p-8 rounded-2xl border border-[var(--cps-gray-200)]">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--cps-light)] flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[var(--cps-blue)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--cps-gray-900)] mb-1">CPS {location.nearestOffice}</h3>
                    <p className="text-[var(--cps-gray-600)] mb-4">{location.nearestAddress}</p>
                    <a href={PHONE_HREF} className="inline-flex items-center gap-2 text-[var(--cps-blue)] font-semibold hover:text-[var(--cps-blue-hover)] transition-colors">
                      <Phone className="w-4 h-4" /> {PHONE}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ──── FAQ ──── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="section-heading text-[var(--cps-gray-900)] mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {service.faqItems.map((faq, i) => (
                <details key={i} className="group bg-[var(--cps-gray-50)] rounded-xl border border-[var(--cps-gray-200)] overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-semibold text-[var(--cps-gray-900)] hover:text-[var(--cps-blue)] transition-colors">
                    {faq.q}
                    <ChevronDown className="w-5 h-5 text-[var(--cps-gray-400)] group-open:rotate-180 transition-transform shrink-0 ml-4" />
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

      {/* ──── Related Services ──── */}
      {relatedServices.length > 0 && (
        <section className="py-16 md:py-24 bg-[var(--cps-gray-50)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div>
              <h2 className="section-heading text-[var(--cps-gray-900)] mb-8">Related Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedServices.map((rel) => (
                  <a key={rel.slug} href={`/${rel.slug}`} className="group block p-6 bg-white rounded-xl border border-[var(--cps-gray-200)] hover:border-[var(--cps-blue)]/30 hover:shadow-md transition-all">
                    <h3 className="font-bold text-[var(--cps-gray-900)] group-hover:text-[var(--cps-blue)] transition-colors mb-2">{rel.title}</h3>
                    <p className="text-sm text-[var(--cps-gray-500)] leading-relaxed mb-3">{rel.heroSubtitle.slice(0, 120)}...</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--cps-blue)] group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ──── Bottom CTA ──── */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[var(--cps-dark)] via-[var(--cps-gradient-mid)] to-[var(--cps-dark)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="section-heading text-white mb-4">Ready to Get Started?</h2>
            <p className="text-white/70 body-large mb-8 max-w-2xl mx-auto">
              {location
                ? `Schedule your ${service.shortName.toLowerCase()} at our ${location.nearestOffice} office. Call us today or book online.`
                : `Schedule your ${service.shortName.toLowerCase()} at one of our three Utah locations. Call us today or book online.`}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--cps-blue)] hover:bg-[var(--cps-blue-hover)] text-white font-bold rounded-xl transition-colors text-lg">
                <Calendar className="w-5 h-5" />
                {service.ctaText}
              </a>
              <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-colors text-lg border border-white/20">
                <Phone className="w-5 h-5" />
                {PHONE}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
