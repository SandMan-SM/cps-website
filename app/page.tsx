"use client";

import { useState } from "react";
import {
  Phone, Mail, MapPin, Clock, ChevronRight,
  Shield, Award, Star, CheckCircle2, ArrowRight,
  Menu, X, Brain, HeartPulse, Scale, Users,
  ClipboardCheck, GraduationCap, Building2,
  Calendar, MessageCircle,
} from "lucide-react";

/* ─────────────────── DATA ─────────────────── */

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
  { name: "Salt Lake City", address: "1208 East 3300 South", city: "Salt Lake City, UT 84106", serving: "Salt Lake County" },
  { name: "Layton", address: "1916 North 700 West, Suite 190", city: "Layton, UT 84041", serving: "Davis & Weber Counties" },
  { name: "West Jordan", address: "9069 South 1300 West, Suite D", city: "West Jordan, UT 84088", serving: "South Valley" },
];

const testimonials = [
  { text: "The neuropsychological evaluation at CPS gave us the answers we had been searching for. The report was thorough and the staff made our son feel comfortable throughout the process.", author: "Parent of a 9-year-old patient", rating: 5 },
  { text: "After years of struggling, I finally got an accurate ADHD diagnosis as an adult. The team at CPS was professional, compassionate, and incredibly thorough.", author: "Adult ADHD patient", rating: 5 },
  { text: "The ketamine therapy program changed my life. After trying multiple antidepressants with no relief, I felt a difference after just two sessions.", author: "Ketamine therapy patient", rating: 5 },
];

const stats = [
  { value: "38+", label: "Years Serving Utah" },
  { value: "3", label: "Convenient Locations" },
  { value: "20+", label: "Licensed Professionals" },
  { value: "5★", label: "Best Practice Award" },
];

/* ─────────────────── COMPONENT ─────────────────── */

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <>
      {/* ──────── NAV ──────── */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[var(--cps-gray-200)]" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="/" className="flex items-center gap-3" aria-label="CPS Home">
              <div className="w-10 h-10 rounded-lg bg-[var(--cps-dark)] flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-bold text-[var(--cps-dark)] leading-tight">Comprehensive Psychological</div>
                <div className="text-xs text-[var(--cps-gray-500)] leading-tight">Services — Since 1986</div>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              <a href="#services" className="text-sm font-medium text-[var(--cps-gray-600)] hover:text-[var(--cps-blue)] transition-colors">Services</a>
              <a href="#locations" className="text-sm font-medium text-[var(--cps-gray-600)] hover:text-[var(--cps-blue)] transition-colors">Locations</a>
              <a href="#about" className="text-sm font-medium text-[var(--cps-gray-600)] hover:text-[var(--cps-blue)] transition-colors">About</a>
              <a href="#contact" className="text-sm font-medium text-[var(--cps-gray-600)] hover:text-[var(--cps-blue)] transition-colors">Contact</a>
            </div>

            <div className="flex items-center gap-3">
              <a href={PHONE_HREF} className="hidden md:flex items-center gap-2 text-sm font-semibold text-[var(--cps-blue)] hover:text-[var(--cps-blue-hover)] transition-colors" aria-label={`Call us at ${PHONE}`}>
                <Phone className="w-4 h-4" />
                {PHONE}
              </a>
              <a href="#contact" className="hidden sm:inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--cps-blue)] hover:bg-[var(--cps-blue-hover)] text-white text-sm font-semibold rounded-xl transition-colors">
                Book Evaluation
              </a>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-3 min-w-11 min-h-11 rounded-xl hover:bg-[var(--cps-gray-100)] transition-colors flex items-center justify-center" aria-label="Toggle menu" aria-expanded={mobileMenuOpen}>
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[var(--cps-gray-200)] bg-white overflow-hidden">
            <div className="px-6 py-4 space-y-1">
              {["Services", "Locations", "About", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 rounded-xl text-[var(--cps-gray-700)] hover:bg-[var(--cps-gray-50)] font-medium transition-colors">{item}</a>
              ))}
              <a href={PHONE_HREF} className="flex items-center gap-2 px-4 py-3 text-[var(--cps-blue)] font-semibold">
                <Phone className="w-4 h-4" /> {PHONE}
              </a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center px-7 py-3.5 bg-[var(--cps-blue)] text-white rounded-xl font-semibold">Book Evaluation</a>
            </div>
          </div>
        )}
      </nav>

      <main id="main">
        {/* ──────── HERO ──────── */}
        <section className="relative bg-gradient-to-br from-[var(--cps-dark)] via-[var(--cps-gradient-mid)] to-[var(--cps-dark)] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[var(--cps-blue)] blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[var(--cps-teal)] blur-3xl" />
          </div>
          <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-24 md:py-36">
            <div className="max-w-3xl mx-auto text-center lg:mx-0 lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                <Award className="w-5 h-5 text-[var(--cps-teal)]" />
                <span className="text-sm font-semibold text-[var(--cps-teal)] uppercase tracking-wider">Utah&apos;s Best — Since 1986</span>
              </div>
              <h1 className="display-heading text-white mb-4">
                Expert Neuropsychological Evaluations, ADHD Testing & Behavioral Health
              </h1>
              <p className="body-large text-white/80 mb-8 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                Comprehensive Psychological Services provides evidence-based evaluations, therapy, and treatment across three Utah locations. From ADHD and autism testing to custody evaluations and ketamine therapy — we help you get answers and move forward.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a href="#contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--cps-blue)] hover:bg-[var(--cps-blue-hover)] text-white font-bold rounded-xl transition-colors text-lg">
                  <Calendar className="w-5 h-5" />
                  Schedule an Evaluation
                </a>
                <a href={PHONE_HREF} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-colors text-lg border border-white/20">
                  <Phone className="w-5 h-5" />
                  {PHONE}
                </a>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-extrabold text-white">{stat.value}</div>
                  <div className="text-sm text-white/70 mt-1.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ──────── TRUST BAR ──────── */}
        <section className="bg-[var(--cps-gray-50)] border-b border-[var(--cps-gray-200)] py-5">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 text-sm text-[var(--cps-gray-500)]">
              <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-[var(--cps-blue)]" /> Licensed Psychologists</div>
              <div className="flex items-center gap-2"><Award className="w-4 h-4 text-[var(--cps-blue)]" /> Best Practice Award 2024</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[var(--cps-blue)]" /> Most Insurance Accepted</div>
              <div className="flex items-center gap-2"><Building2 className="w-4 h-4 text-[var(--cps-blue)]" /> 3 Utah Locations</div>
            </div>
          </div>
        </section>

        {/* ──────── SERVICES ──────── */}
        <section id="services" className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="text-center mb-16">
              <p className="text-[var(--cps-blue)] font-semibold text-sm uppercase tracking-wider mb-6">Our Specialties</p>
              <h2 className="section-heading text-[var(--cps-gray-900)] mb-4">Evaluation & Treatment Services</h2>
              <p className="text-[var(--cps-gray-500)] max-w-2xl mx-auto body-large leading-relaxed">
                Evidence-based assessments and treatments delivered by licensed professionals with decades of experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((svc) => {
                const Icon = svc.icon;
                return (
                  <a key={svc.title} href={svc.href} className="group block p-8 md:p-10 bg-white rounded-2xl border border-[var(--cps-gray-200)] hover:border-[var(--cps-blue)]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <div className="w-14 h-14 rounded-xl bg-[var(--cps-light)] group-hover:bg-[var(--cps-blue)] flex items-center justify-center transition-colors duration-300 mb-6">
                      <Icon className="w-7 h-7 text-[var(--cps-blue)] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--cps-gray-900)] mb-3 group-hover:text-[var(--cps-blue)] transition-colors">{svc.title}</h3>
                    <p className="text-[var(--cps-gray-500)] leading-relaxed mb-5">{svc.description}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--cps-blue)] group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="mt-20 p-10 bg-[var(--cps-gray-50)] rounded-2xl border border-[var(--cps-gray-200)]">
              <h3 className="text-lg font-bold text-[var(--cps-gray-900)] mb-6">Additional Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {additionalServices.map((svc) => (
                  <div key={svc} className="flex items-center gap-2 text-sm text-[var(--cps-gray-600)]">
                    <CheckCircle2 className="w-4 h-4 text-[var(--cps-success)] shrink-0" />
                    {svc}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ──────── ABOUT ──────── */}
        <section id="about" className="py-20 md:py-28 bg-[var(--cps-gray-50)]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                <p className="text-[var(--cps-blue)] font-semibold text-sm uppercase tracking-wider mb-6">About CPS</p>
                <h2 className="section-heading text-[var(--cps-gray-900)] mb-4">
                  Utah&apos;s Trusted Behavioral Health Practice Since 1986
                </h2>
                <div className="space-y-5 text-[var(--cps-gray-600)] body-large leading-relaxed">
                  <p>
                    Founded by Steven Szykula, Ph.D., Comprehensive Psychological Services has grown into one of Utah&apos;s most respected behavioral health organizations — a full-service practice offering evaluations, therapy, medication management, and specialized treatment programs.
                  </p>
                  <p>
                    Our team of 20+ licensed professionals includes psychologists, licensed clinical social workers, and clinical mental health counselors. Every clinician uses evidence-based approaches and outcomes feedback to deliver measurable results.
                  </p>
                  <p>
                    From police and fire department pre-employment screenings to pediatric autism assessments, CPS serves individuals, families, employers, courts, and healthcare systems across the Wasatch Front.
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                {[
                  { icon: Shield, title: "Evidence-Based Practice", desc: "Every assessment and treatment follows validated, research-backed protocols. We measure outcomes, not just activity." },
                  { icon: Award, title: "Best Practice Award", desc: "Recognized for clinical excellence by professional organizations. Our team upholds the highest standards of competence." },
                  { icon: Building2, title: "Three Convenient Locations", desc: "Offices in Salt Lake City, Layton, and West Jordan — plus telehealth — so care is always accessible." },
                  { icon: Star, title: "Trusted Since 1986", desc: "Over 38 years of serving Utah families, courts, employers, and healthcare systems with integrity and expertise." },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-5 p-7 bg-white rounded-2xl border border-[var(--cps-gray-200)] hover:shadow-md transition-shadow">
                      <div className="w-14 h-14 rounded-xl bg-[var(--cps-light)] flex items-center justify-center shrink-0">
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
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="text-center mb-16">
              <p className="text-[var(--cps-blue)] font-semibold text-sm uppercase tracking-wider mb-6">Patient Experiences</p>
              <h2 className="section-heading text-[var(--cps-gray-900)] mb-4">What Our Patients Say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <div key={i} className="p-10 bg-[var(--cps-gray-50)] rounded-2xl border border-[var(--cps-gray-200)]">
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-5 h-5 text-[var(--cps-warning)] fill-[var(--cps-warning)]" />
                    ))}
                  </div>
                  <p className="text-[var(--cps-gray-700)] leading-relaxed mb-8">&ldquo;{t.text}&rdquo;</p>
                  <p className="text-sm font-semibold text-[var(--cps-gray-500)]">— {t.author}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ──────── LOCATIONS ──────── */}
        <section id="locations" className="py-20 md:py-28 bg-[var(--cps-gray-50)]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="text-center mb-16">
              <p className="text-[var(--cps-blue)] font-semibold text-sm uppercase tracking-wider mb-6">Find Us</p>
              <h2 className="section-heading text-[var(--cps-gray-900)] mb-4">Three Locations Across the Wasatch Front</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {offices.map((office) => (
                <div key={office.name} className="bg-white p-10 rounded-2xl border border-[var(--cps-gray-200)] hover:border-[var(--cps-blue)]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-[var(--cps-light)] flex items-center justify-center mb-6">
                    <MapPin className="w-7 h-7 text-[var(--cps-blue)]" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--cps-gray-900)] mb-2">{office.name}</h3>
                  <p className="text-sm text-[var(--cps-blue)] font-medium mb-5">Serving {office.serving}</p>
                  <p className="text-[var(--cps-gray-600)] text-sm mb-1.5">{office.address}</p>
                  <p className="text-[var(--cps-gray-600)] text-sm mb-5">{office.city}</p>
                  <a href={PHONE_HREF} className="flex items-center gap-2 text-sm font-semibold text-[var(--cps-blue)] hover:text-[var(--cps-blue-hover)] transition-colors">
                    <Phone className="w-4 h-4" /> {PHONE}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ──────── CONTACT / CTA ──────── */}
        <section id="contact" className="py-20 md:py-28 bg-gradient-to-br from-[var(--cps-dark)] via-[var(--cps-gradient-mid)] to-[var(--cps-dark)] text-white">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <div>
                <p className="text-[var(--cps-teal)] font-semibold text-sm uppercase tracking-wider mb-6">Get Started</p>
                <h2 className="section-heading text-white mb-4">Schedule Your Evaluation Today</h2>
                <p className="text-white/70 body-large mb-8 leading-relaxed">
                  Call us or fill out the form to schedule an appointment. Our team will verify your insurance, answer your questions, and find a time that works.
                </p>
                <div className="space-y-5">
                  <a href={PHONE_HREF} className="flex items-center gap-5 p-5 bg-white/10 rounded-xl hover:bg-white/15 transition-colors">
                    <Phone className="w-6 h-6 text-[var(--cps-teal)]" />
                    <div>
                      <div className="font-bold">{PHONE}</div>
                      <div className="text-sm text-white/60">Mon–Fri, 8am–6pm</div>
                    </div>
                  </a>
                  <a href={`mailto:${EMAIL}`} className="flex items-center gap-5 p-5 bg-white/10 rounded-xl hover:bg-white/15 transition-colors">
                    <Mail className="w-6 h-6 text-[var(--cps-teal)]" />
                    <div>
                      <div className="font-bold">{EMAIL}</div>
                      <div className="text-sm text-white/60">We respond within 24 hours</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-5 p-5 bg-white/10 rounded-xl">
                    <Clock className="w-6 h-6 text-[var(--cps-teal)]" />
                    <div>
                      <div className="font-bold">Office Hours</div>
                      <div className="text-sm text-white/60">Monday–Friday, 8:00 AM – 6:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                {formSubmitted ? (
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 text-center border border-white/10">
                    <CheckCircle2 className="w-16 h-16 text-[var(--cps-success)] mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                    <p className="text-white/70 leading-relaxed">We&apos;ve received your request. Our team will contact you within one business day to schedule your appointment.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }} className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/10 space-y-6">
                    <h3 className="text-xl font-bold mb-2">Request an Appointment</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium mb-1.5 text-white/80">First Name</label>
                        <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:border-[var(--cps-teal)] focus:ring-1 focus:ring-[var(--cps-teal)] outline-none transition-colors" placeholder="First name" />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium mb-1.5 text-white/80">Last Name</label>
                        <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:border-[var(--cps-teal)] focus:ring-1 focus:ring-[var(--cps-teal)] outline-none transition-colors" placeholder="Last name" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1.5 text-white/80">Email</label>
                      <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:border-[var(--cps-teal)] focus:ring-1 focus:ring-[var(--cps-teal)] outline-none transition-colors" placeholder="you@email.com" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-1.5 text-white/80">Phone</label>
                      <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:border-[var(--cps-teal)] focus:ring-1 focus:ring-[var(--cps-teal)] outline-none transition-colors" placeholder="(801) 555-0123" />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-1.5 text-white/80">Service Needed</label>
                      <select id="service" name="service" required className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:border-[var(--cps-teal)] focus:ring-1 focus:ring-[var(--cps-teal)] outline-none transition-colors">
                        <option value="" className="text-gray-900">Select a service...</option>
                        <option value="neuropsych" className="text-gray-900">Neuropsychological Evaluation</option>
                        <option value="adhd" className="text-gray-900">ADHD Evaluation / Testing</option>
                        <option value="autism" className="text-gray-900">Autism Assessment / ADOS-2</option>
                        <option value="custody" className="text-gray-900">Custody Evaluation</option>
                        <option value="ketamine" className="text-gray-900">Ketamine / Spravato Therapy</option>
                        <option value="cognitive" className="text-gray-900">Cognitive / IQ Evaluation</option>
                        <option value="iop" className="text-gray-900">Intensive Outpatient Program</option>
                        <option value="therapy" className="text-gray-900">Therapy / Counseling</option>
                        <option value="other" className="text-gray-900">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1.5 text-white/80">Message (optional)</label>
                      <textarea id="message" name="message" rows={3} className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:border-[var(--cps-teal)] focus:ring-1 focus:ring-[var(--cps-teal)] outline-none transition-colors resize-none" placeholder="Tell us about your concerns or questions..." />
                    </div>
                    <button type="submit" className="w-full py-4 bg-[var(--cps-blue)] hover:bg-[var(--cps-blue-hover)] text-white font-bold rounded-xl transition-colors text-lg flex items-center justify-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      Request Appointment
                    </button>
                    <p className="text-xs text-white/40 text-center">Your information is confidential. We&apos;ll respond within 1 business day.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ──────── FOOTER ──────── */}
      <footer className="bg-[var(--cps-gray-900)] text-white/60 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[var(--cps-blue)] flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white leading-tight">Comprehensive Psychological</div>
                  <div className="text-xs text-white/40 leading-tight">Services — Since 1986</div>
                </div>
              </div>
              <p className="text-sm text-white/50 leading-relaxed">
                Evidence-based behavioral health evaluations and treatment serving Utah for over 38 years.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Evaluations</h4>
              <ul className="space-y-3">
                {[
                  { label: "Neuropsychological Evaluations", href: "/neuropsychologist-near-me" },
                  { label: "ADHD Evaluation", href: "/adhd-evaluation-near-me" },
                  { label: "ADHD Diagnosis", href: "/adhd-diagnosis-near-me" },
                  { label: "ADHD Testing", href: "/adhd-testing" },
                  { label: "Autism Assessment", href: "/autism-assessment" },
                  { label: "ADOS-2 Testing", href: "/ados-2-testing-near-me" },
                  { label: "Cognitive Evaluation", href: "/cognitive-evaluation-near-me" },
                  { label: "Custody Evaluation", href: "/custody-evaluator-near-me" },
                ].map((link) => (
                  <li key={link.href}><a href={link.href} className="text-sm hover:text-white transition-colors">{link.label}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Treatment</h4>
              <ul className="space-y-3">
                <li><a href="/ketamine-depression-treatment-near-me" className="text-sm hover:text-white transition-colors">Ketamine Therapy</a></li>
                <li><span className="text-sm">Spravato (Esketamine)</span></li>
                <li><span className="text-sm">Intensive Outpatient (IOP)</span></li>
                <li><span className="text-sm">Counseling & Psychotherapy</span></li>
                <li><span className="text-sm">Medication Management</span></li>
                <li><span className="text-sm">Neurofeedback</span></li>
                <li><span className="text-sm">Telehealth</span></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
              <ul className="space-y-3">
                <li><a href={PHONE_HREF} className="flex items-center gap-2 text-sm hover:text-white transition-colors"><Phone className="w-4 h-4 shrink-0" /> {PHONE}</a></li>
                <li><a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-sm hover:text-white transition-colors"><Mail className="w-4 h-4 shrink-0" /> {EMAIL}</a></li>
                <li className="flex items-start gap-2 text-sm">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                  <div>
                    <div>1208 E 3300 S, SLC, UT 84106</div>
                    <div>1916 N 700 W #190, Layton, UT 84041</div>
                    <div>9069 S 1300 W #D, W. Jordan, UT 84088</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40">© {new Date().getFullYear()} Comprehensive Psychological Services. All rights reserved.</p>
            <p className="text-xs text-white/40">Salt Lake City • Layton • West Jordan</p>
          </div>
        </div>
      </footer>
    </>
  );
}
