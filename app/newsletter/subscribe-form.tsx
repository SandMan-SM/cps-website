"use client";

import { useState } from "react";
import { Mail, CheckCircle2 } from "lucide-react";

export default function SubscribeForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  if (status === "ok") {
    return (
      <div className="bg-[var(--cps-white)]/10 border border-[var(--cps-teal)]/40 rounded-2xl p-8 max-w-2xl mx-auto text-center">
        <CheckCircle2 className="w-12 h-12 text-[var(--cps-teal)] mx-auto mb-4" aria-hidden="true" />
        <h2 className="text-xl font-bold text-[var(--cps-white)] mb-2">You&apos;re subscribed.</h2>
        <p className="text-[var(--cps-white)]/70">
          Check your inbox for a confirmation. We&apos;ll never share your email.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setStatus("loading");
        setError("");
        const form = e.currentTarget;
        const data = Object.fromEntries(new FormData(form));
        try {
          const res = await fetch("/api/subscribe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
          const json = await res.json().catch(() => ({}));
          if (!res.ok || json.ok === false) {
            throw new Error(json.error || "Subscription failed.");
          }
          setStatus("ok");
        } catch (err) {
          setStatus("error");
          setError(err instanceof Error ? err.message : "Subscription failed.");
        }
      }}
      className="bg-[var(--cps-white)]/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 max-w-2xl mx-auto"
    >
      <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      {/* Two-row layout — email + role share row 1, Subscribe is full-width
          row 2. Previously a single flex-row tried to fit all three; the
          select + button overflowed the rounded container at common
          viewport widths because flex-1 on the input wouldn't shrink
          below its placeholder size. Stacking the button guarantees it
          stays inside the card at every breakpoint. */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="newsletter-email"
            name="email"
            required
            placeholder="you@email.com"
            className="w-full min-w-0 px-4 py-4 rounded-xl bg-[var(--cps-white)]/10 border border-white/20 text-[var(--cps-white)] placeholder:text-[var(--cps-white)]/40 focus:border-[var(--cps-teal)] focus:ring-1 focus:ring-[var(--cps-teal)] outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="newsletter-audience" className="sr-only">
            I am a…
          </label>
          <select
            id="newsletter-audience"
            name="audience"
            defaultValue="parent"
            className="w-full min-w-0 px-4 py-4 rounded-xl bg-[var(--cps-white)]/10 border border-white/20 text-[var(--cps-white)] focus:border-[var(--cps-teal)] focus:ring-1 focus:ring-[var(--cps-teal)] outline-none transition-colors"
          >
            <option value="parent" className="text-[var(--cps-gray-900)]">Parent / caregiver</option>
            <option value="attorney" className="text-[var(--cps-gray-900)]">Attorney</option>
            <option value="school" className="text-[var(--cps-gray-900)]">School / educator</option>
            <option value="clinician" className="text-[var(--cps-gray-900)]">Clinician / referrer</option>
            <option value="patient" className="text-[var(--cps-gray-900)]">Patient / adult self-advocate</option>
            <option value="other" className="text-[var(--cps-gray-900)]">Other</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-4 w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--cps-blue)] hover:bg-[var(--cps-blue-hover)] disabled:opacity-60 text-[var(--cps-white)] font-bold rounded-xl transition-colors"
      >
        <Mail className="w-5 h-5" aria-hidden="true" />
        {status === "loading" ? "Subscribing…" : "Subscribe"}
      </button>
      {error && (
        <p className="mt-4 text-sm text-[var(--cps-warning)] bg-[var(--cps-white)]/10 rounded-xl px-4 py-4">
          {error} You can always reach us directly at (801) 483-1600.
        </p>
      )}
      <p className="mt-4 text-xs text-[var(--cps-white)]/50">
        By subscribing you agree to receive monthly email from CPS. Unsubscribe at any time.
      </p>
    </form>
  );
}
