import type { Metadata } from "next";
import Link from "next/link";
import {
  Award, Shield, Users, Heart, Brain, CheckCircle2,
  Phone, MapPin, ArrowRight, BookOpen,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Comprehensive Psychological Services — Utah Since 1986",
  description:
    "Learn about Comprehensive Psychological Services — Utah's trusted behavioral health practice since 1986. Founded by Dr. Steven Szykula, PhD, we've helped thousands of children and adults through evidence-based psychology, evaluations, and therapy.",
  openGraph: {
    title: "About Comprehensive Psychological Services | Utah Since 1986",
    description:
      "Utah's trusted behavioral health practice since 1986. Expert psychologists, therapists, and psychiatrists across Salt Lake City, Layton, and West Jordan.",
    url: "https://psychandcustodyevaluations.com/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About CPS | Utah's Trusted Behavioral Health Practice Since 1986",
    description:
      "Expert psychologists and therapists across Salt Lake City, Layton, and West Jordan. Evidence-based care since 1986.",
  },
  alternates: { canonical: "https://psychandcustodyevaluations.com/about" },
};

const PHONE = "(801) 483-1600";
const PHONE_HREF = "tel:8014831600";

const values = [
  {
    icon: Brain,
    title: "Evidence-Based Practice",
    description:
      "Every treatment and evaluation we provide is grounded in research-validated methods. We don't guess — we measure, test, and apply what the science supports.",
  },
  {
    icon: Shield,
    title: "Outcomes Accountability",
    description:
      "We use outcomes feedback throughout treatment to verify that our clients are actually improving. If something isn't working, we adjust. Results matter.",
  },
  {
    icon: Users,
    title: "Independent Expert Practitioners",
    description:
      "Each professional at CPS is a highly trained, independent practitioner — not a production-line provider. You get a specialist, not a generalist.",
  },
  {
    icon: Heart,
    title: "Whole-Person Care",
    description:
      "We treat the whole person — mental health, behavioral health, and when appropriate, physical wellness. Integrated care means better outcomes.",
  },
  {
    icon: Award,
    title: "40+ Years of Excellence",
    description:
      "Since 1986, we've built a reputation for quality that spans generations. Many of our patients today are the children and grandchildren of former patients.",
  },
  {
    icon: BookOpen,
    title: "Continuing Education",
    description:
      "Our clinicians regularly consult, collaborate, and continue learning. Dr. Szykula maintains active clinical supervision across the practice.",
  },
];

const locations = [
  {
    name: "Salt Lake City — Millcreek",
    address: "1208 East 3300 South",
    city: "Millcreek (Salt Lake City), UT 84106",
  },
  {
    name: "Layton",
    address: "1916 N 700 W, Suite 190",
    city: "Layton, UT 84041",
  },
  {
    name: "West Jordan",
    address: "South Valley Location",
    city: "West Jordan, UT",
  },
];

const milestones = [
  { year: "1986", event: "Dr. Steven Szykula founds Comprehensive Psychological Services in Salt Lake City" },
  { year: "1990s", event: "Expanded to include child and adolescent specialty services; custody evaluation practice established" },
  { year: "2000s", event: "Grew to 20+ independent practitioners; added neurofeedback and specialized IOP programs" },
  { year: "2010s", event: "Opened Layton and West Jordan locations to serve the full Wasatch Front" },
  { year: "2020s", event: "Added Ketamine/Spravato therapy, expanded teletherapy, and launched child/teen IOP summer programs" },
  { year: "Today", event: "Utah's most comprehensive private behavioral health practice — evaluations, therapy, psychiatry, and medical treatment under one roof" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-[var(--cps-dark)] text-[var(--cps-white)] py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[var(--cps-blue)]/20 text-[var(--cps-teal)] px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <Award className="w-4 h-4" />
              Established 1986 — Utah&apos;s Trusted Practice
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              About Comprehensive<br />
              <span className="text-[var(--cps-teal)]">Psychological Services</span>
            </h1>
            <p className="text-xl text-[var(--cps-gray-400)] leading-relaxed mb-8">
              For nearly 40 years, CPS has been Utah&apos;s home for expert psychological evaluations,
              evidence-based therapy, and integrated behavioral health. We&apos;re not a franchise or
              a health system — we&apos;re a community of exceptional independent practitioners united
              by a commitment to real outcomes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 bg-[var(--cps-blue)] hover:bg-[var(--cps-blue-hover)] text-white px-8 py-4 text-lg font-bold rounded-xl transition-colors"
              >
                <Phone className="w-5 h-5" />
                {PHONE}
              </Link>
              <Link
                href="/team"
                className="inline-flex items-center gap-2 border border-[var(--cps-gray-200)]/30 hover:border-[var(--cps-teal)] text-[var(--cps-white)] px-8 py-4 text-lg font-bold rounded-xl transition-colors"
              >
                Meet Our Team
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[var(--cps-blue)] py-8">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { stat: "1986", label: "Year Founded" },
              { stat: "20+", label: "Expert Clinicians" },
              { stat: "3", label: "Utah Locations" },
              { stat: "40+", label: "Years of Outcomes" },
            ].map(({ stat, label }) => (
              <div key={label}>
                <div className="text-3xl md:text-4xl font-bold">{stat}</div>
                <div className="text-[var(--cps-light)] text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder story */}
      <section className="py-12 md:py-16 bg-[var(--cps-white)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[var(--cps-blue)] font-semibold text-sm uppercase tracking-widest mb-4">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--cps-gray-900)] mb-6">
                Built on a Foundation of Real Results
              </h2>
              <div className="space-y-4 text-[var(--cps-gray-600)] leading-relaxed">
                <p>
                  In 1986, Dr. Steven Szykula, Ph.D. — a University of Tennessee-trained clinical
                  psychologist — founded Comprehensive Psychological Services with a simple premise:
                  Utah families deserved access to the same quality of evidence-based behavioral
                  health care available at major research institutions.
                </p>
                <p>
                  What began as a single practice grew into Utah&apos;s most comprehensive private
                  behavioral health center. Dr. Szykula attracted exceptional independent
                  practitioners who shared his commitment to evidence-based treatment and measurable
                  client outcomes — not just symptom management, but real life improvement.
                </p>
                <p>
                  Today, CPS spans three Wasatch Front locations and serves children, adolescents,
                  and adults across the full spectrum of behavioral health needs — from
                  neuropsychological evaluations and custody assessments to intensive outpatient
                  programs, Ketamine therapy, and telehealth.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/team"
                  className="inline-flex items-center gap-2 text-[var(--cps-blue)] font-semibold hover:gap-4 transition-all"
                >
                  Meet Dr. Szykula and our full team
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              {milestones.map(({ year, event }) => (
                <div key={year} className="flex gap-4">
                  <div className="flex-shrink-0 w-16 text-right">
                    <span className="text-sm font-bold text-[var(--cps-blue)]">{year}</span>
                  </div>
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-[var(--cps-blue)] mt-1" />
                    <div className="w-px flex-1 bg-[var(--cps-gray-200)] mt-1" />
                  </div>
                  <div className="pb-4 text-[var(--cps-gray-600)] text-sm leading-relaxed">
                    {event}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The CPS Approach */}
      <section className="py-12 md:py-16 bg-[var(--cps-light)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--cps-gray-900)] mb-4">
              The CPS Approach
            </h2>
            <p className="text-[var(--cps-gray-500)] text-lg">
              What makes CPS different isn&apos;t one thing — it&apos;s the way all these
              principles work together.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-[var(--cps-white)] rounded-2xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[var(--cps-blue)]/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[var(--cps-blue)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--cps-gray-900)] mb-2">{title}</h3>
                <p className="text-[var(--cps-gray-500)] leading-relaxed text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-12 md:py-16 bg-[var(--cps-white)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--cps-gray-900)] mb-6">
                What Makes Us Different
              </h2>
              <ul className="space-y-4">
                {[
                  "We are a professional services mall — not a corporate health system. Each clinician is an independent expert, not an employee following a protocol.",
                  "We accept most major insurance plans and offer self-pay rates. Mental health care should be accessible.",
                  "All three locations are on major public transportation routes in the Salt Lake, Layton, and West Jordan areas.",
                  "Our clinicians consult with each other. If your therapist thinks you need a psychiatric evaluation, they can walk down the hall and talk to the evaluator directly.",
                  "Dr. Szykula remains actively involved in clinical supervision, ensuring the practice-wide standard of care stays consistent with our founding principles.",
                  "We offer telehealth across the full practice — not just some providers — so geography is never a barrier to care.",
                ].map((point, i) => (
                  <li key={i} className="flex gap-4">
                    <CheckCircle2 className="w-5 h-5 text-[var(--cps-blue)] flex-shrink-0 mt-0.5" />
                    <span className="text-[var(--cps-gray-600)] leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[var(--cps-light)] rounded-2xl p-8">
              <h3 className="text-xl font-bold text-[var(--cps-gray-900)] mb-4">
                Insurance & Accessibility
              </h3>
              <p className="text-[var(--cps-gray-600)] mb-6 leading-relaxed">
                We accept most major insurance plans including BCBS, SelectHealth, Cigna, Aetna,
                UofU/HMHI, PEHP, TriCare, and Medicare. Call our office to verify your specific plan
                or to discuss self-pay options.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-[var(--cps-blue)]" />
                  <Link
                    href={PHONE_HREF}
                    className="text-[var(--cps-blue)] font-semibold hover:text-[var(--cps-blue-hover)] transition-colors"
                  >
                    {PHONE}
                  </Link>
                </div>
                {locations.map(({ name, address, city }) => (
                  <div key={name} className="flex gap-4">
                    <MapPin className="w-5 h-5 text-[var(--cps-blue)] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[var(--cps-gray-800)] text-sm">{name}</div>
                      <div className="text-[var(--cps-gray-500)] text-sm">{address}</div>
                      <div className="text-[var(--cps-gray-500)] text-sm">{city}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-[var(--cps-dark)] text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-[var(--cps-gray-400)] text-lg mb-8 max-w-2xl mx-auto">
            Whether you need a psychological evaluation, therapy, psychiatric care, or just
            aren&apos;t sure where to start — call us. We&apos;ll help you find the right fit.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-[var(--cps-blue)] hover:bg-[var(--cps-blue-hover)] text-white px-8 py-4 text-lg font-bold rounded-xl transition-colors"
            >
              <Phone className="w-5 h-5" />
              {PHONE}
            </Link>
            <Link
              href="/team"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white px-8 py-4 text-lg font-bold rounded-xl transition-colors"
            >
              <Users className="w-5 h-5" />
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
