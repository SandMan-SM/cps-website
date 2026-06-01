import type { Metadata } from "next";
import Link from "next/link";
import {
  Brain,
  ClipboardCheck,
  Users,
  Scale,
  HeartPulse,
  GraduationCap,
  Phone,
  MapPin,
  Mail,
  ArrowRight,
  Award,
  Shield,
  CheckCircle2,
} from "lucide-react";
import LeadForm from "./LeadForm";
import { OrganizationSchema, LocalBusinessSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title:
    "Book a Consultation | Comprehensive Psychological Services — Utah",
  description:
    "Schedule a confidential consultation with the CPS team. Neuropsychological, ADHD, autism, custody, and cognitive evaluations across Salt Lake, Davis, and Weber counties. Most insurance accepted.",
  alternates: {
    canonical:
      "https://psychandcustodyevaluations.com/book-consultation",
  },
  openGraph: {
    title:
      "Book a Consultation | Comprehensive Psychological Services",
    description:
      "Confidential consultations for evaluations, therapy, and family law assessments. Salt Lake City · Layton · West Jordan.",
    url: "https://psychandcustodyevaluations.com/book-consultation",
    siteName: "Comprehensive Psychological Services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Consultation | CPS Utah",
    description:
      "Evaluations, therapy, family-law assessments. Salt Lake · Layton · West Jordan. Most insurance accepted.",
  },
};

const SERVICES = [
  {
    Icon: Brain,
    title: "Neuropsychological Evaluation",
    body:
      "Comprehensive brain-behavior assessment for ADHD, TBI, memory, learning, and cognitive concerns.",
  },
  {
    Icon: ClipboardCheck,
    title: "ADHD Evaluation",
    body:
      "Multi-method testing for children, teens, and adults. Clear diagnosis and treatment plan.",
  },
  {
    Icon: Users,
    title: "Autism Assessment (ADOS-2)",
    body:
      "Gold-standard ADOS-2 testing for all ages, with full written reports for school and treatment.",
  },
  {
    Icon: Scale,
    title: "Custody & Parental Evaluation",
    body:
      "Court-accepted child custody evaluations, parental fitness assessments, and expert testimony.",
  },
  {
    Icon: HeartPulse,
    title: "Ketamine & Spravato",
    body:
      "FDA-approved treatment for depression that hasn't responded to traditional medication.",
  },
  {
    Icon: GraduationCap,
    title: "Cognitive / IQ Testing",
    body:
      "Standardized cognitive evaluations for giftedness, learning disabilities, and academic planning.",
  },
];

const TRUST_POINTS = [
  { Icon: Award, text: "Licensed clinicians, court-accepted reports" },
  { Icon: Shield, text: "HIPAA-protected · most insurance accepted" },
  { Icon: CheckCircle2, text: "Most consultations within 1 business day" },
];

const PHONE = "(801) 483-1600";
const PHONE_HREF = "tel:8014831600";
const EMAIL = "cps@wecanhelpout.com";

export default function BookConsultationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Comprehensive Psychological Services",
    description:
      "Neuropsychological, ADHD, autism, custody, and cognitive evaluations across Utah. Therapy and ketamine treatment.",
    url: "https://psychandcustodyevaluations.com",
    telephone: "+18014831600",
    email: EMAIL,
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "1208 East 3300 South",
        addressLocality: "Salt Lake City",
        addressRegion: "UT",
        postalCode: "84106",
        addressCountry: "US",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "1916 North 700 West, Suite 190",
        addressLocality: "Layton",
        addressRegion: "UT",
        postalCode: "84041",
        addressCountry: "US",
      },
    ],
    areaServed: { "@type": "State", name: "Utah" },
    medicalSpecialty: ["Neuropsychology", "Psychiatry", "Forensic Psychology"],
    priceRange: "$$",
  };

  return (
    <main className="min-h-screen bg-[var(--cps-white)] text-[var(--cps-gray-700)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section
        className="relative overflow-hidden border-b border-[var(--cps-gray-200)] bg-gradient-to-br from-[var(--cps-dark)] via-[var(--cps-gradient-mid)] to-[var(--cps-blue)] text-[var(--cps-white)]"
        data-track-area="book-hero"
      >
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-40 h-[640px] w-[640px] rounded-full bg-[var(--cps-teal)]/20 blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <Link
            href="/"
            data-track="back-home"
            className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--cps-white)]/70 hover:text-[var(--cps-white)]"
          >
            ← Back to CPS
          </Link>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--cps-teal)]/30 bg-[var(--cps-teal)]/10 px-4 py-2 text-xs font-mono uppercase tracking-widest text-[var(--cps-teal)]">
            Confidential Consultation
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-6xl">
            We&apos;re here to help.{" "}
            <span className="text-[var(--cps-teal)]">Let&apos;s talk.</span>
          </h1>
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-[var(--cps-white)]/80 sm:text-xl">
            Tell us a little about what&apos;s bringing you in. A
            scheduling coordinator will reach out within one business
            day to confirm a time that works for you and your family.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={PHONE_HREF}
              data-track="hero-call"
              data-track-area="book-hero"
              aria-label="Call (801) 483-1600"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--cps-white)] px-6 py-4 text-sm font-bold text-[var(--cps-dark)] shadow-lg transition hover:bg-[var(--cps-light)]"
            >
              <Phone className="h-4 w-4" />
              Call {PHONE}
            </a>
            <a
              href="#book-form"
              aria-label="Scroll to appointment request form"
              data-track="hero-scroll-form"
              data-track-area="book-hero"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--cps-white)]/30 px-6 py-4 text-sm font-semibold text-[var(--cps-white)] transition hover:border-[var(--cps-white)]/60"
            >
              Or send a message
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section
        className="border-b border-[var(--cps-gray-200)] bg-[var(--cps-gray-50)] py-8"
        data-track-area="book-trust"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-6 sm:grid-cols-3">
          {TRUST_POINTS.map(({ Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-4 text-sm text-[var(--cps-gray-600)]"
            >
              <Icon className="h-5 w-5 text-[var(--cps-blue)]" aria-hidden="true" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section
        className="border-b border-[var(--cps-gray-200)] py-16 sm:py-20"
        data-track-area="book-services"
      >
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-2xl font-bold text-[var(--cps-gray-700)] sm:text-3xl">
            What we evaluate and treat
          </h2>
          <p className="mb-8 text-[var(--cps-gray-500)]">
            Pick the service closest to what you&apos;re looking for.
            Not sure? Choose &ldquo;Other&rdquo; below — we&apos;ll
            help triage on the call.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-[var(--cps-gray-200)] bg-white p-6 transition hover:border-[var(--cps-blue)]/40 hover:bg-[var(--cps-light)]/40"
                aria-label={title}
              >
                <Icon className="mb-4 h-6 w-6 text-[var(--cps-blue)]" aria-hidden="true" />
                <h3 className="mb-1.5 font-bold text-[var(--cps-gray-700)]">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--cps-gray-500)]">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking form */}
      <section
        id="book-form"
        className="bg-[var(--cps-gray-50)] py-16 sm:py-24"
        data-track-area="book-form"
      >
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="mb-4 text-2xl font-bold text-[var(--cps-gray-700)] sm:text-3xl">
            Book your consultation
          </h2>
          <p className="mb-8 text-[var(--cps-gray-500)]">
            All information stays confidential and HIPAA-protected. A
            scheduling coordinator will respond within one business
            day.
          </p>
          <LeadForm />
        </div>
      </section>

      {/* Footer band */}
      <section
        className="border-t border-[var(--cps-gray-200)] py-10"
        data-track-area="book-footer"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 text-sm text-[var(--cps-gray-600)] sm:grid-cols-3">
          <div className="flex items-start gap-4">
            <Phone className="mt-0.5 h-4 w-4 text-[var(--cps-blue)]" />
            <div>
              <div className="font-semibold text-[var(--cps-gray-700)]">Call</div>
              <a
                href={PHONE_HREF}
                data-track="footer-call"
                aria-label="Call (801) 483-1600"
                className="hover:text-[var(--cps-blue)]"
              >
                {PHONE}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Mail className="mt-0.5 h-4 w-4 text-[var(--cps-blue)]" />
            <div>
              <div className="font-semibold text-[var(--cps-gray-700)]">Email</div>
              <a
                  href={`mailto:${EMAIL}`}
                  data-track="footer-email"
                  aria-label="Email us"
                  className="hover:text-[var(--cps-blue)]"
                >
                  {EMAIL}
                </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="mt-0.5 h-4 w-4 text-[var(--cps-blue)]" />
            <div>
              <div className="font-semibold text-[var(--cps-gray-700)]">Offices</div>
              <div>Salt Lake City · Layton · West Jordan</div>
            </div>
          </div>
        </div>
      </section>
      <OrganizationSchema />
      <LocalBusinessSchema />
    </main>
  );
}
