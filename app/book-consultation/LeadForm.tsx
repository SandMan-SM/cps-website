"use client";

import { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

const ENDPOINT = "/api/contact";

function splitName(fullName: string) {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  return {
    firstName: parts[0] || "",
    lastName: parts.slice(1).join(" ") || "(not provided)",
  };
}

const SERVICE_OPTIONS = [
  "Neuropsychological Evaluation",
  "ADHD Evaluation",
  "Autism Assessment (ADOS-2)",
  "Custody / Parental Evaluation",
  "Ketamine / Spravato Therapy",
  "Cognitive / IQ Testing",
  "Counseling / Psychotherapy",
  "Medication Management",
  "Other / Not sure yet",
];

export default function LeadForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  // honey-pot — bots fill it; humans don't see it.
  const [hp, setHp] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setError(null);
    try {
      const { firstName, lastName } = splitName(name);
      const trackingContext = [
        `Source: book_consultation`,
        `Page: ${window.location.href}`,
        document.referrer ? `Referrer: ${document.referrer}` : null,
      ].filter(Boolean).join("\n");
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          service,
          message: [message, trackingContext].filter(Boolean).join("\n\n"),
          website: hp,
        }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || `${res.status}`);
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Could not submit. Please try calling us at (801) 483-1600.",
      );
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-emerald-600" />
        <h3 className="mb-2 text-2xl font-bold text-[var(--cps-gray-700)]">
          We&apos;ve got it.
        </h3>
        <p className="mx-auto max-w-md text-[var(--cps-gray-500)]">
          A scheduling coordinator from CPS will reach out within one
          business day to confirm your consultation. If you&apos;d
          rather call now, we&apos;re at{" "}
          <a
            href="tel:8014831600"
            aria-label="Call (801) 483-1600"
            className="font-semibold text-[var(--cps-blue)] hover:underline"
          >
            (801) 483-1600
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={submit}
      data-track="book-consultation-form"
      className="space-y-4 rounded-2xl border border-[var(--cps-gray-200)] bg-white p-6 shadow-sm sm:p-8"
    >
      {/* honey-pot */}
      <input
        type="text"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        value={hp}
        onChange={(e) => setHp(e.target.value)}
        className="absolute -left-[9999px] h-px w-px opacity-0"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="consultation-name" className="mb-1.5 block text-xs uppercase tracking-wider text-[var(--cps-gray-500)]">
            Name *
          </label>
          <input
            id="consultation-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-[var(--cps-gray-200)] bg-white px-4 py-3 text-sm text-[var(--cps-gray-700)] placeholder-[var(--cps-gray-400)] focus:border-[var(--cps-blue)] focus:outline-none focus:ring-1 focus:ring-[var(--cps-blue)]"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="consultation-phone" className="mb-1.5 block text-xs uppercase tracking-wider text-[var(--cps-gray-500)]">
            Phone *
          </label>
          <input
            id="consultation-phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-lg border border-[var(--cps-gray-200)] bg-white px-4 py-3 text-sm text-[var(--cps-gray-700)] placeholder-[var(--cps-gray-400)] focus:border-[var(--cps-blue)] focus:outline-none focus:ring-1 focus:ring-[var(--cps-blue)]"
            placeholder="(801) 555-1234"
          />
        </div>
      </div>

      <div>
        <label htmlFor="consultation-email" className="mb-1.5 block text-xs uppercase tracking-wider text-[var(--cps-gray-500)]">
          Email *
        </label>
        <input
          id="consultation-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-[var(--cps-gray-200)] bg-white px-4 py-3 text-sm text-[var(--cps-gray-700)] placeholder-[var(--cps-gray-400)] focus:border-[var(--cps-blue)] focus:outline-none focus:ring-1 focus:ring-[var(--cps-blue)]"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="consultation-service" className="mb-1.5 block text-xs uppercase tracking-wider text-[var(--cps-gray-500)]">
          What can we help with?
        </label>
        <select
          id="consultation-service"
          required
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full rounded-lg border border-[var(--cps-gray-200)] bg-white px-4 py-3 text-sm text-[var(--cps-gray-700)] focus:border-[var(--cps-blue)] focus:outline-none focus:ring-1 focus:ring-[var(--cps-blue)]"
        >
          <option value="">Pick what fits</option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="consultation-message" className="mb-1.5 block text-xs uppercase tracking-wider text-[var(--cps-gray-500)]">
          Anything we should know
        </label>
        <textarea
          id="consultation-message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-none rounded-lg border border-[var(--cps-gray-200)] bg-white px-4 py-3 text-sm text-[var(--cps-gray-700)] placeholder-[var(--cps-gray-400)] focus:border-[var(--cps-blue)] focus:outline-none focus:ring-1 focus:ring-[var(--cps-blue)]"
          placeholder="Insurance, urgency, court deadlines, prior evaluations…"
        />
      </div>

      <button
        type="submit"
        aria-label="Book my consultation"
        data-track="book-consultation-submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--cps-blue)] hover:bg-[var(--cps-blue-hover)] px-5 py-3 text-sm font-bold text-[var(--cps-white)] transition disabled:cursor-wait disabled:opacity-60"
      >
        {status === "submitting" ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : null}
        {status === "submitting"
          ? "Sending…"
          : "Book my consultation"}
      </button>

      {error && (
        <p className="text-center text-sm text-[var(--cps-warning)]">{error}</p>
      )}

      <p className="pt-2 text-center text-[11px] text-[var(--cps-gray-500)]">
        HIPAA-protected. We never share your information. By
        submitting you agree to be contacted about scheduling.
      </p>
    </form>
  );
}
