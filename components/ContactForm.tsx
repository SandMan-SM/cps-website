"use client";

import { useState } from "react";
import { CheckCircle2, MessageCircle } from "lucide-react";

// ph — used in API route
export const PHONE = "(866) 343-0885";
export const PHONE_HREF = "tel:8663430885";

export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState("");

  return (
    <>
      {formSubmitted ? (
        <div className="bg-[var(--cps-white)]/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10">
          <CheckCircle2 className="w-16 h-16 text-[var(--cps-success)] mx-auto mb-4" aria-hidden="true" />
          <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
          <p className="text-[var(--cps-white)]/70 leading-relaxed">We&apos;ve received your request. Our team will contact you within one business day to schedule your appointment.</p>
        </div>
      ) : (
        <form onSubmit={async (e) => {
          e.preventDefault();
          setFormLoading(true);
          setFormError("");
          const form = e.currentTarget as HTMLFormElement;
          const data = Object.fromEntries(new FormData(form));
          try {
            const res = await fetch("/api/contact", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data),
            });
            const json = await res.json().catch(() => ({}));
            if (!res.ok || json.ok === false) {
              throw new Error(json.error || "Server error");
            }
            setFormSubmitted(true);
          } catch (err) {
            const msg = err instanceof Error ? err.message : "Something went wrong.";
            setFormError(`${msg} You can also call us directly at (866) 343-0885.`);
          } finally {
            setFormLoading(false);
          }
        }} className="bg-[var(--cps-white)]/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 space-y-6">
          <h3 className="text-xl font-bold mb-2">Request an Appointment</h3>
          {/* Honeypot */}
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
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-[var(--cps-white)]/80">Email</label>
            <input type="email" id="email" name="email" required className="w-full px-4 py-4 rounded-xl bg-[var(--cps-white)]/10 border border-white/20 text-[var(--cps-white)] placeholder:text-[var(--cps-white)]/40 focus:border-[var(--cps-teal)] focus:ring-1 focus:ring-[var(--cps-teal)] outline-none transition-colors" placeholder="you@email.com" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2 text-[var(--cps-white)]/80">Phone</label>
            <input type="tel" id="phone" name="phone" required className="w-full px-4 py-4 rounded-xl bg-[var(--cps-white)]/10 border border-white/20 text-[var(--cps-white)] placeholder:text-[var(--cps-white)]/40 focus:border-[var(--cps-teal)] focus:ring-1 focus:ring-[var(--cps-teal)] outline-none transition-colors" placeholder="(801) 555-0123" />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium mb-2 text-[var(--cps-white)]/80">Service Needed</label>
            <select id="service" name="service" required className="w-full px-4 py-4 rounded-xl bg-[var(--cps-white)]/10 border border-white/20 text-[var(--cps-white)] focus:border-[var(--cps-teal)] focus:ring-1 focus:ring-[var(--cps-teal)] outline-none transition-colors">
              <option value="" className="text-[var(--cps-gray-900)]">Select a service...</option>
              <option value="neuropsych" className="text-[var(--cps-gray-900)]">Neuropsychological Evaluation</option>
              <option value="adhd" className="text-[var(--cps-gray-900)]">ADHD Evaluation / Testing</option>
              <option value="autism" className="text-[var(--cps-gray-900)]">Autism Assessment / ADOS-2</option>
              <option value="custody" className="text-[var(--cps-gray-900)]">Custody Evaluation</option>
              <option value="ketamine" className="text-[var(--cps-gray-900)]">Ketamine / Spravato Therapy</option>
              <option value="cognitive" className="text-[var(--cps-gray-900)]">Cognitive / IQ Evaluation</option>
              <option value="iop" className="text-[var(--cps-gray-900)]">Intensive Outpatient Program</option>
              <option value="therapy" className="text-[var(--cps-gray-900)]">Therapy / Counseling</option>
              <option value="other" className="text-[var(--cps-gray-900)]">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-[var(--cps-white)]/80">Message (optional)</label>
            <textarea id="message" name="message" rows={3} className="w-full px-4 py-4 rounded-xl bg-[var(--cps-white)]/10 border border-white/20 text-[var(--cps-white)] placeholder:text-[var(--cps-white)]/40 focus:border-[var(--cps-teal)] focus:ring-1 focus:ring-[var(--cps-teal)] outline-none transition-colors resize-none" placeholder="Tell us about your concerns or questions..." />
          </div>
          {formError && (
            <p className="text-sm text-[var(--cps-warning)] bg-[var(--cps-white)]/10 rounded-xl px-4 py-4">{formError}</p>
          )}
          <button type="submit" disabled={formLoading} aria-label="Request appointment" className="w-full py-4 bg-[var(--cps-blue)] hover:bg-[var(--cps-blue-hover)] disabled:opacity-60 text-[var(--cps-white)] font-bold rounded-xl transition-colors text-lg flex items-center justify-center gap-2">
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            {formLoading ? "Sending…" : "Request Appointment"}
          </button>
          <p className="text-xs text-[var(--cps-white)]/40 text-center">Your information is confidential. We&apos;ll respond within 1 business day.</p>
        </form>
      )}
    </>
  );
}
