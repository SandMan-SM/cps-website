"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone, Mail, MapPin, Clock,
  Shield, Award, Star, CheckCircle2, ArrowRight,
  Menu, X, Brain, HeartPulse, Scale, Users,
  ClipboardCheck, GraduationCap, Building2,
  MessageCircle, ChevronDown,
} from "lucide-react";
import { SpeakableSchema, ReviewSchema } from "@/components/JsonLd";
import HomeSchema from "@/components/HomeSchema";

const PHONE = "(801) 483-1600";
const PHONE_HREF = "tel:8014831600";
const EMAIL = "cps@wecanhelpout.com";

const serviceCategories = [
  {
    icon: Brain,
    title: "Neuropsychological Evaluations",
    description: "Comprehensive brain-behavior assessments for ADHD, TBI, memory, learning disabilities, and cognitive concerns.",
    href: "/neuropsychologist-near-me",
  },
  {
    icon: ClipboardCheck,
    title: "ADHD Evaluation & Diagnosis",
    description: "Thorough multi-method ADHD testing for children, teens, and adults. Clear diagnosis and treatment planning.",
    href: "/adhd-evaluation-near-me",
  },
  {
    icon: Users,
    title: "Autism Assessment & ADOS-2",
    description: "Gold-standard autism evaluations including ADOS-2 testing for all ages — children through adults.",
    href: "/autism-assessment",
  },
  {
    icon: Scale,
    title: "Custody & Parental Evaluations",
    description: "Court-accepted child custody evaluations, parental fitness assessments, and expert testimony for family law.",
    href: "/custody-evaluator-near-me",
  },
  {
    icon: HeartPulse,
    title: "Ketamine & Spravato Therapy",
    description: "FDA-approved ketamine and esketamine treatment for depression that hasn't responded to traditional medication.",
    href: "/ketamine-depression-treatment-near-me",
  },
  {
    icon: GraduationCap,
    title: "Cognitive & IQ Testing",
    description: "Standardized cognitive evaluations for giftedness, learning disabilities, disability applications, and academic planning.",
    href: "/cognitive-evaluation-near-me",
  },
];

const additionalServices = [
  "Intensive Outpatient Programs (IOP)",
  "Counseling & Psychotherapy",
  "Medication Management",
  "Neurofeedback / Brain Training",
  "Substance Abuse Treatment",
  "Telehealth Services",
  "Employer & Fitness-for-Duty Evaluations",
  "Health & Wellness Programs",
];

const offices = [
  {
    name: "Salt Lake City",
    address: "1208 East 3300 South",
    city: "Salt Lake City, UT 84106",
    serving: "Salt Lake County",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9!2d-111.854!3d40.710!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875289f1e3a1bf4d%3A0x1!2s1208+East+3300+South%2C+Salt+Lake+City%2C+UT+84106!5e0!3m2!1sen!2sus!4v1",
    mapQuery: "1208+East+3300+South,+Salt+Lake+City,+UT+84106",
  },
  {
    name: "Layton",
    address: "1916 North 700 West, Suite 190",
    city: "Layton, UT 84041",
    serving: "Davis & Weber Counties",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9!2d-111.969!3d41.060!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875289f1e3a1bf4d%3A0x2!2s1916+North+700+West+Suite+190%2C+Layton%2C+UT+84041!5e0!3m2!1sen!2sus!4v1",
    mapQuery: "1916+North+700+West,+Suite+190,+Layton,+UT+84041",
  },
  {
    name: "West Jordan",
    address: "9069 South 1300 West, Suite D",
    city: "West Jordan, UT 84088",
    serving: "South Valley",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9!2d-111.939!3d40.601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875289f1e3a1bf4d%3A0x3!2s9069+South+1300+West+Suite+D%2C+West+Jordan%2C+UT+84088!5e0!3m2!1sen!2sus!4v1",
    mapQuery: "9069+South+1300+West,+Suite+D,+West+Jordan,+UT+84088",
  },
];

const testimonials = [
  { text: "The neuropsychological evaluation at CPS gave us the answers we had been searching for. The report was thorough and the staff made our son feel comfortable throughout the process.", author: "Parent of a 9-year-old patient", rating: 5 },
  { text: "After years of struggling, I finally got an accurate ADHD diagnosis as an adult. The team at CPS was professional, compassionate, and incredibly thorough.", author: "Adult ADHD patient", rating: 5 },
  { text: "The ketamine therapy program changed my life. After trying multiple antidepressants with no relief, I felt a difference after just two sessions.", author: "Ketamine therapy patient", rating: 5 },
];

const stats = [
  { value: "40+", label: "Years" },
  { value: "20+", label: "Therapists" },
  { value: "5★", label: "Practice" },
];

/* ─────────────────── COMPONENT ─────────────────── */

export default function HomePageClient() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState("");

  // Shared lead-capture handler — used by the top #get-help form and the
  // bottom #contact form. Both POST to /api/contact (which tees the lead to
  // the OmniLeads dashboard). 8s timeout so the button can never hang.
  async function handleLeadSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormLoading(true);
    setFormError("");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        signal: AbortSignal.timeout(8000),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json.ok === false) {
        throw new Error(json.error || "Server error");
      }
      setFormSubmitted(true);
    } catch (err) {
      const timedOut = err instanceof DOMException && err.name === "TimeoutError";
      const msg = timedOut
        ? "The request timed out."
        : err instanceof Error
          ? err.message
          : "Something went wrong.";
      setFormError(`${msg} You can also call us directly at (801) 483-1600.`);
    } finally {
      setFormLoading(false);
    }
  }

  const homepageFAQ = [
    { q: "Do I need a referral to schedule an evaluation?", a: "A referral is not always required. Many of our patients self-refer. However, some insurance plans may require a referral for coverage. Call us at (801) 483-1600 and we'll verify your benefits." },
    { q: "What age groups do you serve?", a: "We provide evaluations and treatment for children (as young as 2–4 for certain assessments), adolescents, adults, and geriatric patients. Our ADOS-2 and autism assessments are available across the full lifespan." },
    { q: "How long does a typical evaluation take?", a: "Most evaluations range from 2–6 hours depending on the type. ADHD testing takes 2–4 hours. A full neuropsychological evaluation may take 3–6 hours. We offer flexible scheduling including telehealth options for initial consultations." },
    { q: "Do you accept insurance?", a: "Yes. We accept most major insurance plans. Our team verifies your benefits before your first appointment. Self-pay options are also available for those without coverage." },
    { q: "What is the difference between an ADHD evaluation and a neuropsychological evaluation?", a: "An ADHD evaluation focuses specifically on attention and executive functioning. A neuropsychological evaluation provides a broader assessment of cognitive function including memory, language, processing speed, and visuospatial skills, and is better suited for complex presentations or co-occurring conditions." },
    { q: "Can adults be evaluated for ADHD or autism?", a: "Yes. Many adults seek and receive accurate diagnoses for ADHD and autism for the first time in adulthood. Our clinicians specialize in recognizing these presentations in adults, including those who may have been missed or misdiagnosed in childhood." },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: homepageFAQ.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />
      <SpeakableSchema url="https://psychandcustodyevaluations.com" />
      <ReviewSchema reviews={testimonials.map((t) => ({ author: t.author, text: t.text, rating: t.rating }))} />
      <HomeSchema />

      {/* ──────── NAV ──────── */}
      <nav className="sticky top-0 z-50 bg-[var(--cps-white)]/95 backdrop-blur-md border-b border-[var(--cps-gray-200)]" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link href="/" className="flex items-center gap-4" aria-label="Psychological Services — Home">
              <div className="w-10 h-10 rounded-lg overflow-hidden relative ring-1 ring-[var(--cps-gray-200)]">
                <Image src="/brand/ps-mark.jpg" alt="Psychological Services logo" fill sizes="40px" className="object-cover object-center" />
              </div>
              <div className="block">
                <div className="text-sm font-bold text-[var(--cps-dark)] leading-tight">Psychological Services</div>
                <div className="text-xs text-[var(--cps-gray-500)] leading-tight">40+ Years in Utah</div>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              <a href="#services" aria-label="Services section" className="text-sm font-medium text-[var(--cps-gray-600)] hover:text-[var(--cps-blue)] transition-colors">Services</a>
              <Link href="/conditions" className="text-sm font-medium text-[var(--cps-gray-600)] hover:text-[var(--cps-blue)] transition-colors">Conditions</Link>
              <a href="#locations" aria-label="Locations section" className="text-sm font-medium text-[var(--cps-gray-600)] hover:text-[var(--cps-blue)] transition-colors">Locations</a>
              <a href="#about" aria-label="About section" className="text-sm font-medium text-[var(--cps-gray-600)] hover:text-[var(--cps-blue)] transition-colors">About</a>
              <Link href="/team" className="text-sm font-medium text-[var(--cps-gray-600)] hover:text-[var(--cps-blue)] transition-colors">Team</Link>
              <Link href="/blog" className="text-sm font-medium text-[var(--cps-gray-600)] hover:text-[var(--cps-blue)] transition-colors">Blog</Link>
              <Link href="/resources" className="text-sm font-medium text-[var(--cps-gray-600)] hover:text-[var(--cps-blue)] transition-colors">Resources</Link>
              <a href="#contact" aria-label="Contact section" className="text-sm font-medium text-[var(--cps-gray-600)] hover:text-[var(--cps-blue)] transition-colors">Contact</a>
            </div>

            <div className="flex items-center gap-4">
              <a href={PHONE_HREF} className="hidden sm:inline-flex items-center justify-center gap-2 whitespace-nowrap px-6 py-4 bg-[var(--cps-blue)] hover:bg-[var(--cps-blue-hover)] text-[var(--cps-white)] text-base font-semibold rounded-xl transition-colors min-h-[3rem]" aria-label={`Call us at ${PHONE}`}>
                <Phone className="w-4 h-4" aria-hidden="true" />
                {PHONE}
              </a>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} className="lg:hidden p-4 min-w-12 min-h-12 rounded-xl hover:bg-[var(--cps-gray-100)] transition-colors flex items-center justify-center" aria-expanded={mobileMenuOpen} aria-controls="mobile-menu">
                {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden border-t border-[var(--cps-gray-200)] bg-[var(--cps-white)] overflow-hidden">
            <div className="px-6 pt-4 pb-2 space-y-1">
              {["Services", "Locations", "About", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} aria-label={item + " section"} className="block px-4 py-4 rounded-xl text-[var(--cps-gray-700)] hover:bg-[var(--cps-gray-50)] font-medium transition-colors">{item}</a>
              ))}
              <Link href="/conditions" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-4 rounded-xl text-[var(--cps-gray-700)] hover:bg-[var(--cps-gray-50)] font-medium transition-colors">Conditions</Link>
              <Link href="/team" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-4 rounded-xl text-[var(--cps-gray-700)] hover:bg-[var(--cps-gray-50)] font-medium transition-colors">Team</Link>
              <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-4 rounded-xl text-[var(--cps-gray-700)] hover:bg-[var(--cps-gray-50)] font-medium transition-colors">Blog</Link>
              <Link href="/resources" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-4 rounded-xl text-[var(--cps-gray-700)] hover:bg-[var(--cps-gray-50)] font-medium transition-colors">Resources</Link>
              <Link href="/newsletter" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-4 rounded-xl text-[var(--cps-gray-700)] hover:bg-[var(--cps-gray-50)] font-medium transition-colors">Newsletter</Link>
              <div className="pt-2 pb-2">
                <a href={PHONE_HREF} onClick={() => setMobileMenuOpen(false)} aria-label="Call us at (801) 483-1600" className="flex items-center justify-center gap-2 w-full text-center px-6 py-4 bg-[var(--cps-blue)] text-[var(--cps-white)] rounded-xl font-semibold text-base">
                  <Phone className="w-4 h-4" aria-hidden="true" /> {PHONE}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main id="main">
        {/* ──────── HERO ──────── */}
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-[var(--cps-dark)] via-[var(--cps-gradient-mid)] to-[var(--cps-navy)] text-[var(--cps-white)]">
          {/* Brand photo background — calm therapy-room interior with the P/O monogram on the wall.
              Decorative; the warm gradient above shows through / falls back if the asset is absent. */}
          <Image
            src="/brand/ps-hero.jpg"
            alt=""
            aria-hidden="true"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--cps-dark)]/80 via-[var(--cps-dark)]/65 to-[var(--cps-dark)]/90" aria-hidden="true" />

          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20 md:py-32 text-left md:text-center">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--cps-teal)]/20 ring-1 ring-[var(--cps-teal)]/50 pl-2 pr-4 py-2 text-left">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[var(--cps-white)]/50 shrink-0">
                  <Award className="w-4 h-4 text-[var(--cps-white)]" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-[var(--cps-white)] leading-snug">Utah&apos;s trusted behavioral health practice since 1986</span>
              </span>
            </div>
            <h1 className="display-heading text-[var(--cps-white)] mb-6" style={{ fontFamily: "var(--font-serif)" }}>
              Find your way forward.
            </h1>
            <p className="body-large text-[var(--cps-white)]/85 mb-10">
              Compassionate, evidence-based behavioral health care for Utah families — neuropsychological, ADHD, autism, and custody evaluations, plus ketamine therapy, IOP, and counseling. Three locations. Real answers. A clear next step.
            </p>
            <div className="flex flex-row items-center gap-4 md:justify-center">
              <a href="#get-help" data-track="hero:get-help" aria-label="Get help today — start your request" className="flex-1 sm:flex-none inline-flex items-center justify-center px-6 sm:px-8 py-4 bg-[var(--cps-blue)] hover:bg-[var(--cps-blue-hover)] text-[var(--cps-white)] font-bold rounded-xl transition-colors text-lg whitespace-nowrap">
                Get Help Today
              </a>
              <a href="#services" data-track="hero:learn-more" aria-label="Learn more about our services" className="flex-1 sm:flex-none inline-flex items-center justify-center px-6 sm:px-8 py-4 bg-[var(--cps-white)]/10 hover:bg-[var(--cps-white)]/20 text-[var(--cps-white)] font-bold rounded-xl transition-colors text-lg border-2 border-[var(--cps-white)]/40 whitespace-nowrap">
                Learn More
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 md:gap-12 max-w-xl mx-0 md:mx-auto mt-16">
              {stats.map((stat) => (
                <div key={stat.label} className="text-left md:text-center">
                  <div className="text-3xl md:text-4xl font-extrabold text-[var(--cps-white)] mb-2">{stat.value}</div>
                  <div className="text-sm text-[var(--cps-white)]/70">{stat.label}</div>
                </div>
              ))}
            </div>

            <a href="#services" aria-label="Scroll to see our services" className="flex flex-col items-center gap-1 mt-16 text-[var(--cps-white)]/70 hover:text-[var(--cps-white)] transition-colors">
              <span className="text-xs uppercase tracking-wider">Scroll to see our services</span>
              <ChevronDown className="w-6 h-6 animate-bounce" aria-hidden="true" />
            </a>
          </div>
        </section>

        {/* ──────── GET HELP TODAY — instant lead capture ──────── */}
        <section id="get-help" className="py-12 md:py-16 bg-[var(--cps-light)] border-b border-[var(--cps-gray-200)]">
          <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="text-center mb-8">
              <h2 className="section-heading text-[var(--cps-gray-900)] mb-4">Get help today</h2>
              <p className="text-[var(--cps-gray-700)] body-large">
                Tell us a little about what you need. A CPS coordinator will reach out within one business day — or call{" "}
                <a href={PHONE_HREF} className="font-bold text-[var(--cps-blue)] hover:underline">{PHONE}</a> now.
              </p>
            </div>

            {formSubmitted ? (
              <div className="bg-[var(--cps-white)] rounded-2xl p-8 text-center border border-[var(--cps-gray-200)] shadow-sm">
                <CheckCircle2 className="w-16 h-16 text-[var(--cps-success)] mx-auto mb-4" aria-hidden="true" />
                <h3 className="text-2xl font-bold mb-2 text-[var(--cps-gray-900)]">We&apos;ve got it.</h3>
                <p className="text-[var(--cps-gray-700)] leading-relaxed">A CPS coordinator will reach out within one business day to confirm your appointment. Prefer to talk now? Call{" "}
                  <a href={PHONE_HREF} className="font-bold text-[var(--cps-blue)] hover:underline">{PHONE}</a>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="bg-[var(--cps-white)] rounded-2xl p-6 md:p-8 border border-[var(--cps-gray-200)] shadow-sm space-y-4">
                {/* Honeypot — hidden from real users */}
                <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
                  <label htmlFor="gh-website">Website</label>
                  <input type="text" id="gh-website" name="website" tabIndex={-1} autoComplete="off" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="gh-firstName" className="block text-sm font-medium mb-2 text-[var(--cps-gray-700)]">First Name</label>
                    <input type="text" id="gh-firstName" name="firstName" required className="w-full px-4 py-4 rounded-xl bg-[var(--cps-white)] border border-[var(--cps-gray-200)] text-[var(--cps-gray-900)] placeholder:text-[var(--cps-gray-400)] focus:border-[var(--cps-blue)] focus:ring-1 focus:ring-[var(--cps-blue)] outline-none transition-colors" placeholder="First name" />
                  </div>
                  <div>
                    <label htmlFor="gh-lastName" className="block text-sm font-medium mb-2 text-[var(--cps-gray-700)]">Last Name</label>
                    <input type="text" id="gh-lastName" name="lastName" required className="w-full px-4 py-4 rounded-xl bg-[var(--cps-white)] border border-[var(--cps-gray-200)] text-[var(--cps-gray-900)] placeholder:text-[var(--cps-gray-400)] focus:border-[var(--cps-blue)] focus:ring-1 focus:ring-[var(--cps-blue)] outline-none transition-colors" placeholder="Last name" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="gh-email" className="block text-sm font-medium mb-2 text-[var(--cps-gray-700)]">Email</label>
                    <input type="email" id="gh-email" name="email" required className="w-full px-4 py-4 rounded-xl bg-[var(--cps-white)] border border-[var(--cps-gray-200)] text-[var(--cps-gray-900)] placeholder:text-[var(--cps-gray-400)] focus:border-[var(--cps-blue)] focus:ring-1 focus:ring-[var(--cps-blue)] outline-none transition-colors" placeholder="you@email.com" />
                  </div>
                  <div>
                    <label htmlFor="gh-phone" className="block text-sm font-medium mb-2 text-[var(--cps-gray-700)]">Phone</label>
                    <input type="tel" id="gh-phone" name="phone" required className="w-full px-4 py-4 rounded-xl bg-[var(--cps-white)] border border-[var(--cps-gray-200)] text-[var(--cps-gray-900)] placeholder:text-[var(--cps-gray-400)] focus:border-[var(--cps-blue)] focus:ring-1 focus:ring-[var(--cps-blue)] outline-none transition-colors" placeholder="(801) 555-0123" />
                  </div>
                </div>
                <div>
                  <label htmlFor="gh-service" className="block text-sm font-medium mb-2 text-[var(--cps-gray-700)]">What can we help with?</label>
                  <select id="gh-service" name="service" required defaultValue="" className="w-full px-4 py-4 rounded-xl bg-[var(--cps-white)] border border-[var(--cps-gray-200)] text-[var(--cps-gray-900)] focus:border-[var(--cps-blue)] focus:ring-1 focus:ring-[var(--cps-blue)] outline-none transition-colors">
                    <option value="" disabled>Select a service...</option>
                    <option value="neuropsych">Neuropsychological Evaluation</option>
                    <option value="adhd">ADHD Evaluation / Testing</option>
                    <option value="autism">Autism Assessment / ADOS-2</option>
                    <option value="custody">Custody Evaluation</option>
                    <option value="ketamine">Ketamine / Spravato Therapy</option>
                    <option value="cognitive">Cognitive / IQ Evaluation</option>
                    <option value="iop">Intensive Outpatient Program</option>
                    <option value="therapy">Therapy / Counseling</option>
                    <option value="other">Other / Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="gh-message" className="block text-sm font-medium mb-2 text-[var(--cps-gray-700)]">Message (optional)</label>
                  <textarea id="gh-message" name="message" rows={3} className="w-full px-4 py-4 rounded-xl bg-[var(--cps-white)] border border-[var(--cps-gray-200)] text-[var(--cps-gray-900)] placeholder:text-[var(--cps-gray-400)] focus:border-[var(--cps-blue)] focus:ring-1 focus:ring-[var(--cps-blue)] outline-none transition-colors resize-none" placeholder="Anything we should know?" />
                </div>
                {formError && (
                  <p className="text-sm text-[var(--cps-error)] bg-[var(--cps-light)] rounded-xl px-4 py-4" role="alert">{formError}</p>
                )}
                <button type="submit" disabled={formLoading} aria-label="Get help today" className="w-full py-4 bg-[var(--cps-blue)] hover:bg-[var(--cps-blue-hover)] disabled:opacity-60 text-[var(--cps-white)] font-bold rounded-xl transition-colors text-lg flex items-center justify-center gap-2">
                  <HeartPulse className="w-5 h-5" aria-hidden="true" />
                  {formLoading ? "Sending…" : "Get Help Today"}
                </button>
                <p className="text-xs text-[var(--cps-gray-500)] text-center">Your information is confidential. We&apos;ll respond within 1 business day.</p>
              </form>
            )}
          </div>
        </section>

        {/* ──────── TRUST BAR ──────── */}
        <section className="bg-[var(--cps-gray-50)] border-b border-[var(--cps-gray-200)]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-4">
            <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-8 md:gap-x-12 gap-y-2 text-sm text-[var(--cps-gray-500)]">
              <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-[var(--cps-blue)]" aria-hidden="true" /> Licensed Psychologists</div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-[var(--cps-blue)]" aria-hidden="true" /> 40+ Years Serving Utah</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--cps-blue)]" aria-hidden="true" /> Most Insurance Accepted</div>
              <div className="flex items-center gap-2"><Building2 className="w-4 h-4 text-[var(--cps-blue)]" aria-hidden="true" /> 3 Utah Locations</div>
              <div className="flex items-center gap-2"><Star className="w-4 h-4 text-[var(--cps-blue)] fill-[var(--cps-blue)]" aria-hidden="true" /> Rated 5.0 on Healthline</div>
            </div>
          </div>
        </section>

        {/* ──────── SERVICES ──────── */}
        <section id="services" className="py-12 md:py-20 bg-[var(--cps-white)]">
          <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-10">
            <div className="text-center mb-16">
              <p className="text-[var(--cps-blue)] font-semibold text-sm uppercase tracking-wider mb-6">Our Specialties</p>
              <h2 className="section-heading text-[var(--cps-gray-900)] mb-4">Evaluation & Treatment Services</h2>
              <p className="text-[var(--cps-gray-500)] max-w-[70ch] mx-auto body-large mt-4">
                Evidence-based assessments and treatments delivered by licensed professionals with decades of experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((svc) => {
                const Icon = svc.icon;
                return (
                  <a key={svc.title} href={svc.href} aria-label={svc.title + " service"} className="group flex flex-col bg-[var(--cps-white)] rounded-2xl border border-[var(--cps-gray-200)] hover:border-[var(--cps-blue)]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6">
                    <h3 className="text-xl font-bold text-[var(--cps-gray-900)] mb-4 group-hover:text-[var(--cps-blue)] transition-colors">{svc.title}</h3>
                    <p className="text-[var(--cps-gray-500)] leading-relaxed mb-6 flex-1">{svc.description}</p>
                    <div className="flex items-end justify-between mt-6">
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--cps-gray-700)] group-hover:text-[var(--cps-blue)] group-hover:gap-2 transition-all">
                        Learn More <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </span>
                      <div className="rounded-xl bg-[var(--cps-light)] group-hover:bg-[var(--cps-blue)] flex items-center justify-center transition-colors duration-300 w-14 h-14" aria-hidden="true">
                        <Icon className="w-6 h-6 text-[var(--cps-blue)] group-hover:text-[var(--cps-white)] transition-colors duration-300" />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="mt-16 p-6 bg-[var(--cps-gray-50)] rounded-2xl border border-[var(--cps-gray-200)]">
              <h3 className="text-lg font-bold text-[var(--cps-gray-900)] mb-6">Additional Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {additionalServices.map((svc) => (
                  <div key={svc} className="flex items-center gap-2 text-sm text-[var(--cps-gray-600)]">
                    <CheckCircle2 className="w-4 h-4 text-[var(--cps-success)] shrink-0" aria-hidden="true" />
                    {svc}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ──────── ABOUT ──────── */}
        <section id="about" className="py-12 md:py-20 bg-[var(--cps-gray-50)]">
          <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <p className="text-[var(--cps-blue)] font-semibold text-sm uppercase tracking-wider mb-6">About CPS</p>
                <h2 className="section-heading text-[var(--cps-gray-900)] mb-4">
                  Utah&apos;s Trusted Behavioral Health Practice Since 1986
                </h2>
                <div className="space-y-6 text-[var(--cps-gray-600)] body-large leading-relaxed max-w-[70ch]">
                  <p>
                    Founded by Steven Szykula, Ph.D., Psychological Services has grown into one of Utah&apos;s most respected behavioral health organizations — a full-service practice offering evaluations, therapy, medication management, and specialized treatment programs.
                  </p>
                  <p>
                    Our team of 20+ licensed professionals includes psychologists, licensed clinical social workers, and clinical mental health counselors. Every clinician uses evidence-based approaches and outcomes feedback to deliver measurable results.
                  </p>
                  <p>
                    From police and fire department pre-employment screenings to pediatric autism assessments, CPS serves individuals, families, employers, courts, and healthcare systems across the Wasatch Front.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {/* ── Meet Dr. Szykula (E-E-A-T: Ept01, Ept02, A04) ── */}
                <div className="bg-[var(--cps-white)] rounded-2xl border border-[var(--cps-gray-200)] p-8 mb-8">
                  <div className="flex items-start gap-6">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0 ring-2 ring-[var(--cps-blue)]/30">
                      <Image
                        src="https://wecanhelpout.com/wp-content/uploads/2018/05/StevenSzykula.jpg"
                        alt="Dr. Steven Szykula, Ph.D. — Founder of Psychological Services"
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-[var(--cps-blue)] font-semibold uppercase tracking-wider mb-1">Founded by</p>
                      <h3 className="text-xl font-bold text-[var(--cps-gray-900)] mb-1">Steven Szykula, Ph.D.</h3>
                      <p className="text-sm text-[var(--cps-gray-500)] mb-4">Licensed Psychologist · Neuropsychologist · Founder, CPS</p>
                      <p className="text-sm text-[var(--cps-gray-600)] leading-relaxed">
                        Dr. Szykula has been evaluating and treating behavioral health conditions in Utah since 1979. A doctoral-level psychologist with advanced training in neuropsychology, he founded CPS to provide evidence-based psychological services to individuals, families, courts, and healthcare systems across the Wasatch Front. He has provided testimony in Utah family courts, conducted thousands of evaluations, and mentored dozens of clinicians.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {["Ph.D. — Licensed Psychologist", "Neuropsychology Specialist", "Utah Family Court Expert", "Since 1979 in Practice"].map((tag) => (
                          <span key={tag} className="inline-block text-xs bg-[var(--cps-light)] text-[var(--cps-blue)] px-4 py-2 rounded-full font-medium">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── Professional Memberships & Affiliations (E-E-A-T) ── */}
                <div className="bg-[var(--cps-white)] rounded-2xl border border-[var(--cps-gray-200)] p-6">
                  <p className="text-xs font-semibold text-[var(--cps-blue)] uppercase tracking-wider mb-4">Professional Memberships &amp; Affiliations</p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: "American Psychological Association", abbr: "APA" },
                      { label: "Utah Psychological Association", abbr: "UPA" },
                      { label: "American Academy of Clinical Neuropsychology", abbr: "AACN" },
                      { label: "Society for Personality and Social Psychology", abbr: "SPSP" },
                    ].map((org) => (
                      <span
                        key={org.abbr}
                        aria-label={org.label}
                        title={org.label}
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-[var(--cps-light)] text-[var(--cps-blue)] text-sm font-semibold rounded-lg border border-[var(--cps-blue)]/20"
                      >
                        <Shield className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        {org.abbr}
                      </span>
                    ))}
                  </div>
                </div>

                {[
                  { icon: Shield, title: "Evidence-Based Practice", desc: "Every assessment and treatment follows validated, research-backed protocols. We measure outcomes, not just activity." },
                  { icon: Award, title: "Best Practice Award", desc: "Recognized for clinical excellence by professional organizations. Our team upholds the highest standards of competence." },
                  { icon: Building2, title: "Three Convenient Locations", desc: "Offices in Salt Lake City, Layton, and West Jordan — plus telehealth — so care is always accessible." },
                  { icon: Star, title: "Trusted Since 1986", desc: "Over 38 years of serving Utah families, courts, employers, and healthcare systems with integrity and expertise." },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-6 bg-[var(--cps-white)] rounded-2xl border border-[var(--cps-gray-200)] hover:shadow-md transition-shadow p-6">
                      <div className="w-14 h-14 rounded-xl bg-[var(--cps-light)] flex items-center justify-center shrink-0" aria-hidden="true">
                        <Icon className="w-7 h-7 text-[var(--cps-blue)]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[var(--cps-gray-900)] mb-2">{item.title}</h3>
                        <p className="text-[var(--cps-gray-500)] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ──────── TESTIMONIALS ──────── */}
        <section className="py-12 md:py-20 bg-[var(--cps-white)]">
          <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-10">
            <div className="text-center mb-16">
              <p className="text-[var(--cps-blue)] font-semibold text-sm uppercase tracking-wider mb-6">Patient Experiences</p>
              <h2 className="section-heading text-[var(--cps-gray-900)] mb-4">What Our Patients Say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-[var(--cps-gray-50)] rounded-2xl border border-[var(--cps-gray-200)] p-6">
                  <div className="flex gap-1 mb-6" aria-label={`${t.rating} out of 5 stars`} role="img">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-5 h-5 text-[var(--cps-warning)] fill-[var(--cps-warning)]" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-[var(--cps-gray-700)] leading-relaxed mb-8">&ldquo;{t.text}&rdquo;</p>
                  <p className="text-sm font-semibold text-[var(--cps-gray-500)]">— {t.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ──────── SHARE YOUR EXPERIENCE ──────── */}
        <section className="py-12 md:py-20 bg-[var(--cps-white)]">
          <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-10">
            <div className="text-center mb-16">
              <p className="text-[var(--cps-blue)] font-semibold text-sm uppercase tracking-wider mb-6">Reviews</p>
              <h2 className="section-heading text-[var(--cps-gray-900)] mb-4">Share Your Experience</h2>
              <p className="text-[var(--cps-gray-500)] max-w-[60ch] mx-auto body-large">
                We&apos;re committed to continuous improvement. If you&apos;ve had a positive experience at CPS, we&apos;d love to hear from you. Your feedback helps us serve you and our community better.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Google */}
              <div className="p-8 bg-[var(--cps-gray-50)] rounded-2xl border border-[var(--cps-gray-200)] text-center">
                <div className="w-14 h-14 bg-[var(--cps-white)] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <span className="text-2xl font-bold text-[var(--cps-google-blue)]">G</span>
                </div>
                <h3 className="font-bold text-[var(--cps-gray-900)] mb-2">Google</h3>
                <p className="text-sm text-[var(--cps-gray-500)] mb-4">5.0 on Google Reviews</p>
                <div className="flex justify-center gap-1" aria-label="5 stars">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} className="w-4 h-4 text-[var(--cps-warning)] fill-[var(--cps-warning)]" aria-hidden="true" />
                  ))}
                </div>
              </div>

              {/* Healthline */}
              <div className="p-8 bg-[var(--cps-gray-50)] rounded-2xl border border-[var(--cps-gray-200)] text-center">
                <div className="w-14 h-14 bg-[var(--cps-white)] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <span className="text-sm font-bold text-[var(--cps-gray-700)]">HL</span>
                </div>
                <h3 className="font-bold text-[var(--cps-gray-900)] mb-2">Healthline</h3>
                <p className="text-sm text-[var(--cps-gray-500)] mb-4">Rated 5.0 on Healthline</p>
                <div className="flex justify-center gap-1" aria-label="5 stars">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} className="w-4 h-4 text-[var(--cps-warning)] fill-[var(--cps-warning)]" aria-hidden="true" />
                  ))}
                </div>
              </div>

              {/* BBB */}
              <div className="p-8 bg-[var(--cps-gray-50)] rounded-2xl border border-[var(--cps-gray-200)] text-center">
                <div className="w-14 h-14 bg-[var(--cps-white)] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <span className="text-xs font-bold text-[var(--cps-bbb-green)]">BBB</span>
                </div>
                <h3 className="font-bold text-[var(--cps-gray-900)] mb-2">Better Business Bureau</h3>
                <p className="text-sm text-[var(--cps-gray-500)] mb-4">Accredited Business</p>
                <div className="flex justify-center gap-1" aria-label="Accredited business">
                  <Shield className="w-4 h-4 text-[var(--cps-bbb-green)]" aria-hidden="true" />
                  <span className="text-xs text-[var(--cps-bbb-green)] font-semibold">Accredited</span>
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-[var(--cps-gray-400)]">
              Your review helps others find the care they need. Thank you for trusting CPS.
            </p>
          </div>
        </section>

        {/* ──────── LOCATIONS ──────── */}
        <section id="locations" className="py-12 md:py-20 bg-[var(--cps-gray-50)]">
          <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-10">
            <div className="text-center mb-16">
              <p className="text-[var(--cps-blue)] font-semibold text-sm uppercase tracking-wider mb-6">Find Us</p>
              <h2 className="section-heading text-[var(--cps-gray-900)] mb-4">Three Locations Across the Wasatch Front</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offices.map((office) => (
                <div key={office.name} className="bg-[var(--cps-white)] rounded-2xl border border-[var(--cps-gray-200)] hover:border-[var(--cps-blue)]/30 hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="h-56 bg-[var(--cps-gray-100)] relative">
                    <iframe
                      title={`Map of CPS ${office.name} office`}
                      aria-label={`Google Maps embed for CPS ${office.name} office`}
                      src={office.mapSrc}
                      width="100%"
                      height="100%"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="border-0 w-full h-full"
                      onError={(e) => {
                        const iframe = e.target as HTMLIFrameElement;
                        iframe.style.display = 'none';
                        const fallback = iframe.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    {/* Fallback when iframe fails to load */}
                    <div className="hidden absolute inset-0 flex-col items-center justify-center bg-[var(--cps-gray-100)] gap-4 text-[var(--cps-gray-400)]">
                      <MapPin className="w-10 h-10" />
                      <p className="text-sm font-medium">{office.name}</p>
                      <p className="text-xs text-center px-4">{office.address}<br />{office.city}</p>
                      <a
                        href={`https://maps.google.com/maps?q=${office.mapQuery}&output=embed`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${office.name} location in Google Maps`}
                        className="text-xs text-[var(--cps-blue)] hover:underline"
                      >
                        Open in Google Maps
                      </a>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="w-14 h-14 rounded-xl bg-[var(--cps-light)] flex items-center justify-center mb-6">
                      <MapPin className="w-7 h-7 text-[var(--cps-blue)]" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--cps-gray-900)] mb-2">{office.name}</h3>
                    <p className="text-sm text-[var(--cps-blue)] font-medium mb-6">Serving {office.serving}</p>
                    <p className="text-[var(--cps-gray-600)] text-sm mb-2">{office.address}</p>
                    <p className="text-[var(--cps-gray-600)] text-sm mb-6">{office.city}</p>
                    <a href={PHONE_HREF} aria-label="Call (801) 483-1600" className="flex items-center gap-2 text-sm font-semibold text-[var(--cps-blue)] hover:text-[var(--cps-blue-hover)] transition-colors">
                      <Phone className="w-4 h-4" aria-hidden="true" /> {PHONE}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ──────── CONTACT / CTA ──────── */}
        <section id="contact" className="py-12 md:py-20 bg-gradient-to-br from-[var(--cps-dark)] via-[var(--cps-gradient-mid)] to-[var(--cps-dark)] text-[var(--cps-white)]">
          <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <p className="text-[var(--cps-teal)] font-semibold text-sm uppercase tracking-wider mb-6">Get Started</p>
                <h2 className="section-heading text-[var(--cps-white)] mb-4">Schedule Your Evaluation Today</h2>
                <p className="text-[var(--cps-white)]/70 body-large mb-8 leading-relaxed">
                  Call us or fill out the form to schedule an appointment. Our team will verify your insurance, answer your questions, and find a time that works.
                </p>
                <div className="space-y-4">
                  <a href={PHONE_HREF} aria-label="Call us at (801) 483-1600" className="flex items-center gap-6 p-6 bg-[var(--cps-white)]/10 rounded-xl hover:bg-[var(--cps-white)]/15 transition-colors">
                    <Phone className="w-6 h-6 text-[var(--cps-teal)]" aria-hidden="true" />
                    <div>
                      <div className="font-bold">{PHONE}</div>
                      <div className="text-sm text-[var(--cps-white)]/60">Mon–Fri, 8am–6pm</div>
                    </div>
                  </a>
                  <a href={`mailto:${EMAIL}`} aria-label="Email us" className="flex items-center gap-6 p-6 bg-[var(--cps-white)]/10 rounded-xl hover:bg-[var(--cps-white)]/15 transition-colors">
                    <Mail className="w-6 h-6 text-[var(--cps-teal)]" aria-hidden="true" />
                    <div>
                      <div className="font-bold">{EMAIL}</div>
                      <div className="text-sm text-[var(--cps-white)]/60">We respond within 24 hours</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-6 p-6 bg-[var(--cps-white)]/10 rounded-xl">
                    <Clock className="w-6 h-6 text-[var(--cps-teal)]" aria-hidden="true" />
                    <div>
                      <div className="font-bold">Office Hours</div>
                      <div className="text-sm text-[var(--cps-white)]/60">Monday–Friday, 8:00 AM – 6:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                {formSubmitted ? (
                  <div className="bg-[var(--cps-white)]/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10">
                    <CheckCircle2 className="w-16 h-16 text-[var(--cps-success)] mx-auto mb-4" aria-hidden="true" />
                    <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                    <p className="text-[var(--cps-white)]/70 leading-relaxed">We&apos;ve received your request. Our team will contact you within one business day to schedule your appointment.</p>
                  </div>
                ) : (
                  <form onSubmit={handleLeadSubmit} className="bg-[var(--cps-white)]/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 space-y-6">
                    <h3 className="text-xl font-bold mb-2">Request an Appointment</h3>
                    {/* Honeypot — hidden from real users, bots will fill it */}
                    <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
                      <label htmlFor="website">Website</label>
                      <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-[var(--cps-white)]/80">First Name</label>
                        <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-4 rounded-xl bg-[var(--cps-white)]/10 border border-white/20 text-[var(--cps-white)] placeholder:text-[var(--cps-white)]/40 focus:border-[var(--cps-teal)] focus:ring-1 focus:ring-[var(--cps-teal)] outline-none transition-colors" placeholder="First name" />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-[var(--cps-white)]/80">Last Name</label>
                        <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-4 rounded-xl bg-[var(--cps-white)]/10 border border-white/20 text-[var(--cps-white)] placeholder:text-[var(--cps-white)]/40 focus:border-[var(--cps-teal)] focus:ring-1 focus:ring-[var(--cps-teal)] outline-none transition-colors" placeholder="Last name" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-[var(--cps-white)]/80">Email</label>
                        <input type="email" id="email" name="email" required className="w-full px-4 py-4 rounded-xl bg-[var(--cps-white)]/10 border border-white/20 text-[var(--cps-white)] placeholder:text-[var(--cps-white)]/40 focus:border-[var(--cps-teal)] focus:ring-1 focus:ring-[var(--cps-teal)] outline-none transition-colors" placeholder="you@email.com" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2 text-[var(--cps-white)]/80">Phone</label>
                        <input type="tel" id="phone" name="phone" required className="w-full px-4 py-4 rounded-xl bg-[var(--cps-white)]/10 border border-white/20 text-[var(--cps-white)] placeholder:text-[var(--cps-white)]/40 focus:border-[var(--cps-teal)] focus:ring-1 focus:ring-[var(--cps-teal)] outline-none transition-colors" placeholder="(801) 555-0123" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-2 text-[var(--cps-white)]/80">What can we help with?</label>
                      <select id="service" name="service" required defaultValue="" className="w-full px-4 py-4 rounded-xl bg-[var(--cps-white)]/10 border border-white/20 text-[var(--cps-white)] focus:border-[var(--cps-teal)] focus:ring-1 focus:ring-[var(--cps-teal)] outline-none transition-colors">
                        <option value="" disabled className="bg-[var(--cps-gray-900)]">Select a service...</option>
                        <option value="neuropsych" className="bg-[var(--cps-gray-900)]">Neuropsychological Evaluation</option>
                        <option value="adhd" className="bg-[var(--cps-gray-900)]">ADHD Evaluation / Testing</option>
                        <option value="autism" className="bg-[var(--cps-gray-900)]">Autism Assessment / ADOS-2</option>
                        <option value="custody" className="bg-[var(--cps-gray-900)]">Custody Evaluation</option>
                        <option value="ketamine" className="bg-[var(--cps-gray-900)]">Ketamine / Spravato Therapy</option>
                        <option value="cognitive" className="bg-[var(--cps-gray-900)]">Cognitive / IQ Evaluation</option>
                        <option value="iop" className="bg-[var(--cps-gray-900)]">Intensive Outpatient Program</option>
                        <option value="therapy" className="bg-[var(--cps-gray-900)]">Therapy / Counseling</option>
                        <option value="other" className="bg-[var(--cps-gray-900)]">Other / Not sure yet</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2 text-[var(--cps-white)]/80">Message (optional)</label>
                      <textarea id="message" name="message" rows={3} className="w-full px-4 py-4 rounded-xl bg-[var(--cps-white)]/10 border border-white/20 text-[var(--cps-white)] placeholder:text-[var(--cps-white)]/40 focus:border-[var(--cps-teal)] focus:ring-1 focus:ring-[var(--cps-teal)] outline-none transition-colors resize-none" placeholder="Anything we should know?" />
                    </div>
                    {formError && (
                      <p className="text-sm text-[var(--cps-error)] bg-[var(--cps-light)] rounded-xl px-4 py-4" role="alert">{formError}</p>
                    )}
                    <button type="submit" disabled={formLoading} aria-label="Request appointment" className="w-full py-4 bg-[var(--cps-blue)] hover:bg-[var(--cps-blue-hover)] disabled:opacity-60 text-[var(--cps-white)] font-bold rounded-xl transition-colors text-lg flex items-center justify-center gap-2">
                      <HeartPulse className="w-5 h-5" aria-hidden="true" />
                      {formLoading ? "Sending…" : "Request Appointment"}
                    </button>
                    <p className="text-xs text-[var(--cps-white)]/50 text-center">Your information is confidential. We&apos;ll respond within 1 business day.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ──────── FAQ ──────── */}
        <section className="py-12 md:py-20 bg-[var(--cps-gray-50)]">
          <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="text-center mb-16">
              <p className="text-[var(--cps-blue)] font-semibold text-sm uppercase tracking-wider mb-6">FAQ</p>
              <h2 className="section-heading text-[var(--cps-gray-900)] mb-4">Common Questions</h2>
            </div>
            <div className="space-y-4">
              {homepageFAQ.map((faq, i) => (
                <details key={i} className="group bg-[var(--cps-white)] rounded-2xl border border-[var(--cps-gray-200)]">
                  <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none">
                    <span className="font-semibold text-[var(--cps-gray-900)] text-base">{faq.q}</span>
                    <ChevronDown className="w-5 h-5 text-[var(--cps-gray-400)] group-open:rotate-180 transition-transform shrink-0" aria-hidden="true" />
                  </summary>
                  <div className="px-6 pb-6 text-[var(--cps-gray-600)] leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ──────── BOOK CONSULTATION CTA ──────── */}
        <section className="py-16 md:py-24 bg-[var(--cps-dark)] text-[var(--cps-white)]">
          <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6" style={{ fontFamily: "var(--font-serif)" }}>
              Take the first step.
            </h2>
            <p className="text-[var(--cps-white)]/70 body-large mb-10">
              Our coordinators are standing by to answer your questions, verify your insurance, and get you scheduled. No waitlist, no pressure — just real help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#get-help" aria-label="Request an appointment today" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--cps-blue)] hover:bg-[var(--cps-blue-hover)] text-[var(--cps-white)] font-bold rounded-xl transition-colors text-lg">
                Request Appointment
              </a>
              <a href="tel:8014831600" aria-label="Call (801) 483-1600" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--cps-white)]/10 hover:bg-[var(--cps-white)]/15 text-[var(--cps-white)] font-bold rounded-xl transition-colors text-lg border-2 border-white/30">
                <Phone className="w-5 h-5" aria-hidden="true" /> (801) 483-1600
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ──────── FOOTER ──────── */}
      <footer className="bg-[var(--cps-gray-900)] text-[var(--cps-white)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg overflow-hidden relative ring-1 ring-[var(--cps-gray-700)]">
                  <Image src="/brand/ps-mark.jpg" alt="Psychological Services logo" fill sizes="40px" className="object-cover object-center" />
                </div>
                <div>
                  <div className="text-sm font-bold leading-tight">Psychological Services</div>
                  <div className="text-xs text-[var(--cps-gray-400)] leading-tight">Comprehensive Professional Services</div>
                </div>
              </div>
              <p className="text-sm text-[var(--cps-gray-400)] leading-relaxed">
                Utah&apos;s trusted behavioral health practice since 1986. Neuropsychology, ADHD, autism, custody evaluations, and more.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-6">Services</h3>
              <ul className="space-y-3 text-sm text-[var(--cps-gray-400)]">
                <li><Link href="/neuropsychologist-near-me" className="hover:text-[var(--cps-white)] transition-colors">Neuropsychological Evaluation</Link></li>
                <li><Link href="/adhd-evaluation-near-me" className="hover:text-[var(--cps-white)] transition-colors">ADHD Evaluation</Link></li>
                <li><Link href="/autism-assessment" className="hover:text-[var(--cps-white)] transition-colors">Autism Assessment</Link></li>
                <li><Link href="/custody-evaluator-near-me" className="hover:text-[var(--cps-white)] transition-colors">Custody Evaluations</Link></li>
                <li><Link href="/ketamine-depression-treatment-near-me" className="hover:text-[var(--cps-white)] transition-colors">Ketamine Therapy</Link></li>
                <li><Link href="/cognitive-evaluation-near-me" className="hover:text-[var(--cps-white)] transition-colors">Cognitive / IQ Testing</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-6">Resources</h3>
              <ul className="space-y-3 text-sm text-[var(--cps-gray-400)]">
                <li><Link href="/blog" className="hover:text-[var(--cps-white)] transition-colors">Blog</Link></li>
                <li><Link href="/resources#faq" className="hover:text-[var(--cps-white)] transition-colors">FAQ</Link></li>
                <li><Link href="/resources#forms" className="hover:text-[var(--cps-white)] transition-colors">Forms</Link></li>
                <li><Link href="/resources#insurance" className="hover:text-[var(--cps-white)] transition-colors">Insurance</Link></li>
                <li><Link href="/resources#patient-rights" className="hover:text-[var(--cps-white)] transition-colors">Patient Rights</Link></li>
                <li><Link href="/conditions" className="hover:text-[var(--cps-white)] transition-colors">Conditions</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-6">Contact</h3>
              <ul className="space-y-3 text-sm text-[var(--cps-gray-400)]">
                <li className="flex items-center gap-2"><Phone className="w-4 h-4" aria-hidden="true" /> <a href={PHONE_HREF} className="hover:text-[var(--cps-white)] transition-colors">{PHONE}</a></li>
                <li className="flex items-center gap-2"><Mail className="w-4 h-4" aria-hidden="true" /> <a href={`mailto:${EMAIL}`} className="hover:text-[var(--cps-white)] transition-colors">{EMAIL}</a></li>
                <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />1208 East 3300 South<br />Salt Lake City, UT 84106</li>
                <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />1916 North 700 West, Ste 190<br />Layton, UT 84041</li>
                <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" />9069 South 1300 West, Ste D<br />West Jordan, UT 84088</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[var(--cps-gray-700)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-[var(--cps-gray-400)]">© {new Date().getFullYear()} Psychological Services. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-[var(--cps-gray-400)]">
              <Link href="/privacy" className="hover:text-[var(--cps-white)] transition-colors">Privacy Policy</Link>
              <Link href="/hipaa" className="hover:text-[var(--cps-white)] transition-colors">HIPAA</Link>
              <Link href="/resources" className="hover:text-[var(--cps-white)] transition-colors">Resources</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}