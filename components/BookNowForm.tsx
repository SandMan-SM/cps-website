"use client";

import Link from "next/link";
import {
  AlertCircle,
  CalendarCheck,
  CheckCircle2,
  Loader2,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  captureAttribution,
  readAttribution,
  readCurrentPagePath,
} from "@/lib/attribution";

type Status = "idle" | "submitting" | "success";

export default function BookNowForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const submissionIdRef = useRef<string | null>(null);
  const consentRecordedAtRef = useRef<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [submissionConflict, setSubmissionConflict] = useState(false);

  useEffect(() => {
    captureAttribution();
  }, []);

  function startNewRequest() {
    submissionIdRef.current = null;
    consentRecordedAtRef.current = null;
    setError("");
    setSubmissionConflict(false);
    setStatus("idle");
    window.requestAnimationFrame(() => {
      formRef.current?.querySelector<HTMLInputElement>('input[name="name"]')?.focus();
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const form = event.currentTarget;
    const fields = new FormData(form);
    const submissionId = submissionIdRef.current || crypto.randomUUID();
    const consentRecordedAt =
      consentRecordedAtRef.current || new Date().toISOString();
    submissionIdRef.current = submissionId;
    consentRecordedAtRef.current = consentRecordedAt;

    setError("");
    setSubmissionConflict(false);
    setStatus("submitting");

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 58_000);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          submissionId,
          consentRecordedAt,
          name: String(fields.get("name") || ""),
          phone: String(fields.get("phone") || ""),
          email: String(fields.get("email") || ""),
          website: String(fields.get("website") || ""),
          formVariant: "quick",
          consent: true,
          pagePath: readCurrentPagePath(),
          ...readAttribution(),
        }),
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

      form.reset();
      submissionIdRef.current = null;
      consentRecordedAtRef.current = null;
      setStatus("success");
    } catch (submitError) {
      setStatus("idle");
      setError(
        submitError instanceof Error && submitError.name !== "AbortError"
          ? submitError.message
          : "The request timed out. Please try again.",
      );
    } finally {
      window.clearTimeout(timeout);
    }
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-teal-200 bg-white px-4 py-3.5 text-base text-teal-950 placeholder:text-teal-800/40 outline-none transition focus:border-teal-600 focus:ring-4 focus:ring-teal-600/10";

  if (status === "success") {
    return (
      <div className="flex min-h-[470px] flex-col items-center justify-center px-6 py-12 text-center" role="status">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-teal-100 text-teal-700">
          <CheckCircle2 className="h-9 w-9" aria-hidden={true} />
        </span>
        <h2 className="mt-6 text-3xl font-extrabold text-teal-950">
          Your request has been received.
        </h2>
        <p className="mt-4 max-w-sm leading-relaxed text-teal-800/80">
          A CPS team member will follow up using the phone number or email you provided.
        </p>
        <button
          type="button"
          onClick={startNewRequest}
          aria-label="Send another appointment request"
          className="mt-8 rounded-full border border-teal-200 px-6 py-3 font-bold text-teal-800 transition hover:bg-teal-50"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="p-6 sm:p-8">
      <div className="space-y-5">
        <div>
          <label htmlFor="booknow-name" className="text-sm font-bold text-teal-950">
            Full name
          </label>
          <input
            id="booknow-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Your full name"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="booknow-phone" className="text-sm font-bold text-teal-950">
            Phone number
          </label>
          <input
            id="booknow-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required
            placeholder="Your preferred number"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="booknow-email" className="text-sm font-bold text-teal-950">
            Email
          </label>
          <input
            id="booknow-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>

        <div className="sr-only" aria-hidden="true">
          <label htmlFor="booknow-website">Website</label>
          <input
            id="booknow-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-teal-50 p-4 text-xs leading-relaxed text-teal-900/80">
        <div className="flex items-start gap-3">
          <ShieldCheck className="mt-0.5 h-4 w-4 flex-none text-teal-700" aria-hidden={true} />
          <p>
            By submitting, you agree that Comprehensive Psychological Services may contact you
            by phone, text, or email about your request. There is no obligation to schedule or
            receive services. Message and data rates may apply.
          </p>
        </div>
        <p className="mt-2 pl-7">
          Review our{" "}
          <Link href="/privacy" className="font-semibold underline underline-offset-2">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="font-semibold underline underline-offset-2">
            Terms
          </Link>
          .
        </p>
      </div>

      {error && (
        <div
          className="mt-5 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
          role="alert"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 flex-none" aria-hidden={true} />
          <div>
            <p>{error}</p>
            {submissionConflict && (
              <button
                type="button"
                onClick={startNewRequest}
                aria-label="Start a new appointment request"
                className="mt-2 font-bold underline decoration-red-300 underline-offset-4"
              >
                Start a new request
              </button>
            )}
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting" || submissionConflict}
        aria-label={status === "submitting" ? "Sending your appointment request" : "Request an appointment"}
        className="cps-button-art mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-bold text-white shadow-lg shadow-red-950/15 transition disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden={true} /> Sending…
          </>
        ) : (
          <>
            <CalendarCheck className="h-5 w-5" aria-hidden={true} /> Request an appointment
          </>
        )}
      </button>
    </form>
  );
}
