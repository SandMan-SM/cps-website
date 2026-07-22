"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Loader2, CalendarCheck, AlertCircle } from "lucide-react";
import { locationOptions } from "@/lib/data";
import {
  captureAttribution,
  readAttribution,
  readCurrentPagePath,
} from "@/lib/attribution";

type Status = "idle" | "submitting" | "success";

const serviceOptions = [
  "Counseling & psychotherapy",
  "Medication therapy",
  "Neurofeedback",
  "Psychological evaluation",
  "Health & wellness",
  "Substance abuse treatment",
  "Employer services",
  "I’m not sure yet",
];

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [submissionConflict, setSubmissionConflict] = useState(false);
  const submissionIdRef = useRef<string | null>(null);
  const consentRecordedAtRef = useRef<string | null>(null);

  useEffect(() => {
    captureAttribution();
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const formEl = e.currentTarget;
    const fd = new FormData(formEl);
    const submissionId = submissionIdRef.current || crypto.randomUUID();
    submissionIdRef.current = submissionId;
    const consentRecordedAt =
      consentRecordedAtRef.current || new Date().toISOString();
    consentRecordedAtRef.current = consentRecordedAt;
    const payload = {
      submissionId,
      consentRecordedAt,
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      service: String(fd.get("service") || ""),
      location: String(fd.get("location") || ""),
      contactPreference: String(fd.get("contactPreference") || ""),
      availability: String(fd.get("availability") || ""),
      message: String(fd.get("message") || ""),
      website: String(fd.get("website") || ""),
      consent: true,
      formVariant: "detailed",
      pagePath: readCurrentPagePath(),
      ...readAttribution(),
    };

    setError("");
    setStatus("submitting");

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 58_000);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      const result = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        code?: string;
      };

      if (!response.ok || !result.ok) {
        setStatus("idle");
        setSubmissionConflict(result.code === "submission_id_conflict");
        setError(result.error || "We couldn’t send your request. Please try again.");
        return;
      }

      setStatus("success");
      formEl.reset();
      submissionIdRef.current = null;
      consentRecordedAtRef.current = null;
      setSubmissionConflict(false);
    } catch (err) {
      setStatus("idle");
      setError(
        err instanceof Error && err.name !== "AbortError"
          ? err.message
          : "The request timed out. Please try again.",
      );
    } finally {
      clearTimeout(timeout);
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-teal-200 bg-white p-8 text-center shadow-card" role="status">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-teal-700">
          <CheckCircle2 className="h-8 w-8" aria-hidden={true} />
        </span>
        <h3 className="mt-5 text-xl font-bold text-teal-950">Your request has been received.</h3>
        <p className="mt-2 text-teal-800/90">
          A CPS team member will follow up using the contact method you selected.
        </p>
        <button
          type="button"
          onClick={() => {
            submissionIdRef.current = null;
            consentRecordedAtRef.current = null;
            setSubmissionConflict(false);
            setStatus("idle");
          }}
          aria-label="Start a new appointment request"
          className="mt-6 text-sm font-bold text-teal-700 underline decoration-teal-300 underline-offset-4 hover:text-teal-800"
        >
          Send another request
        </button>
      </div>
    );
  }

  const inputBase =
    "mt-1.5 w-full rounded-xl border border-teal-200 bg-white px-4 py-3 text-teal-950 placeholder:text-teal-800/40 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-teal-100 bg-white p-6 shadow-card sm:p-8"
    >
      <div className="mb-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-600">CPS appointment request</p>
        <h3 className="mt-2 text-2xl font-extrabold text-teal-950">Tell us what works for you</h3>
        <p className="mt-2 text-sm leading-relaxed text-teal-800/70">
          Share only what is needed for scheduling—please do not include private medical details.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="text-sm font-semibold text-teal-900">Full name</label>
          <input id="name" name="name" type="text" autoComplete="name" required placeholder="Your name" className={inputBase} />
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-semibold text-teal-900">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" className={inputBase} />
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-teal-900">Phone</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" required placeholder="Your preferred number" className={inputBase} />
        </div>

        <div>
          <label htmlFor="service" className="text-sm font-semibold text-teal-900">What can we help with?</label>
          <select id="service" name="service" defaultValue="" required className={inputBase}>
            <option value="" disabled>Select a service</option>
            {serviceOptions.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
        </div>

        <div>
          <label htmlFor="location" className="text-sm font-semibold text-teal-900">Preferred location</label>
          <select id="location" name="location" defaultValue="" required className={inputBase}>
            <option value="" disabled>Select a location</option>
            {locationOptions.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
        </div>

        <div>
          <label htmlFor="contactPreference" className="text-sm font-semibold text-teal-900">Preferred follow-up</label>
          <select id="contactPreference" name="contactPreference" defaultValue="Email" required className={inputBase}>
            <option>Email</option>
            <option>Phone call</option>
            <option>Text message</option>
          </select>
        </div>

        <div>
          <label htmlFor="availability" className="text-sm font-semibold text-teal-900">
            Best time to reach you <span className="font-normal text-teal-800/60">(optional)</span>
          </label>
          <input id="availability" name="availability" type="text" placeholder="Morning, afternoon, or evening" className={inputBase} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-semibold text-teal-900">
            Scheduling notes <span className="font-normal text-teal-800/60">(optional)</span>
          </label>
          <textarea id="message" name="message" rows={3} placeholder="Anything helpful for scheduling—no medical details, please." className={inputBase} />
        </div>

        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
      </div>

      {error && (
        <div className="mt-5 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
          <AlertCircle className="mt-0.5 h-4 w-4 flex-none" aria-hidden={true} />
          <div className="min-w-0">
            <p>{error}</p>
            {submissionConflict && (
              <button
                type="button"
                onClick={() => {
                  submissionIdRef.current = null;
                  consentRecordedAtRef.current = null;
                  setError("");
                  setSubmissionConflict(false);
                }}
                className="mt-2 font-bold underline decoration-red-300 underline-offset-4 hover:text-red-950"
              >
                Start a new request
              </button>
            )}
          </div>
        </div>
      )}

      <p className="mt-5 text-xs leading-relaxed text-teal-800/70">
        By submitting, you agree that Comprehensive Psychological Services may contact you by phone, text, or email about your request. There is no obligation to schedule or receive services. Message and data rates may apply.
      </p>

      <button
        type="submit"
        disabled={status === "submitting" || submissionConflict}
        aria-label={status === "submitting" ? "Sending your appointment request" : "Send appointment request"}
        className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-4 text-base font-bold text-white shadow-lg shadow-teal-900/10 transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <><Loader2 className="h-5 w-5 animate-spin" aria-hidden={true} /> Sending…</>
        ) : (
          <><CalendarCheck className="h-5 w-5" aria-hidden={true} /> Send appointment request</>
        )}
      </button>
    </form>
  );
}
