"use client";

import Link from "next/link";
import {
  AlertCircle,
  CalendarCheck,
  CheckCircle2,
  Loader2,
  ShieldCheck,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  captureAttribution,
  readAttribution,
  readCurrentPagePath,
} from "@/lib/attribution";

type Status = "idle" | "submitting" | "success";

type AppointmentContext = {
  location: string;
  service: string;
};

const emptyContext: AppointmentContext = {
  location: "",
  service: "",
};

export default function AppointmentModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const previousOverflowRef = useRef("");
  const submissionIdRef = useRef<string | null>(null);
  const consentRecordedAtRef = useRef<string | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [submissionConflict, setSubmissionConflict] = useState(false);
  const [appointmentContext, setAppointmentContext] = useState<AppointmentContext>(emptyContext);

  useEffect(() => {
    captureAttribution();

    function handleAppointmentClick(event: MouseEvent) {
      if (
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) return;

      const trigger = target.closest<HTMLAnchorElement>("a[data-book-appointment]");
      const dialog = dialogRef.current;
      if (!trigger || !dialog || typeof dialog.showModal !== "function") return;
      if (trigger.target && trigger.target !== "_self") return;

      event.preventDefault();
      previousFocusRef.current = trigger;
      submissionIdRef.current = crypto.randomUUID();
      consentRecordedAtRef.current = null;
      setStatus("idle");
      setError("");
      setSubmissionConflict(false);
      setAppointmentContext({
        location: trigger.dataset.appointmentLocation?.trim() || "",
        service: trigger.dataset.appointmentService?.trim() || "",
      });

      if (!dialog.open) {
        previousOverflowRef.current = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        dialog.showModal();
      }

      window.requestAnimationFrame(() => nameRef.current?.focus());
    }

    document.addEventListener("click", handleAppointmentClick, { capture: true });
    return () => document.removeEventListener("click", handleAppointmentClick, { capture: true });
  }, []);

  function handleClose() {
    document.body.style.overflow = previousOverflowRef.current;
    window.requestAnimationFrame(() => previousFocusRef.current?.focus());
  }

  function closeDialog() {
    dialogRef.current?.close();
  }

  function startNewRequest() {
    submissionIdRef.current = null;
    consentRecordedAtRef.current = null;
    setError("");
    setSubmissionConflict(false);
    window.requestAnimationFrame(() => nameRef.current?.focus());
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const form = event.currentTarget;
    const fields = new FormData(form);
    const submissionId = submissionIdRef.current || crypto.randomUUID();
    submissionIdRef.current = submissionId;
    const consentRecordedAt =
      consentRecordedAtRef.current || new Date().toISOString();
    consentRecordedAtRef.current = consentRecordedAt;
    const payload = {
      submissionId,
      consentRecordedAt,
      name: String(fields.get("name") || ""),
      email: String(fields.get("email") || ""),
      phone: String(fields.get("phone") || ""),
      location: appointmentContext.location,
      service: appointmentContext.service,
      website: String(fields.get("website") || ""),
      formVariant: "quick",
      consent: true,
      pagePath: readCurrentPagePath(),
      ...readAttribution(),
    };

    setError("");
    setStatus("submitting");

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 58_000);

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

      form.reset();
      submissionIdRef.current = null;
      consentRecordedAtRef.current = null;
      setSubmissionConflict(false);
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
    "mt-1.5 w-full rounded-xl border border-teal-200 bg-white px-4 py-2.5 text-base text-teal-950 placeholder:text-teal-800/40 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30 md:py-3";
  const requestTitle = appointmentContext.location
    ? `Request an appointment near ${appointmentContext.location}`
    : appointmentContext.service
      ? `Request ${appointmentContext.service}`
      : "Request an appointment";
  const requestDescription = appointmentContext.location
    ? `Share your contact details and our team will follow up about the ${appointmentContext.location} office. No private medical details are needed.`
    : "Share your contact details and our team will reach out. No private medical details are needed.";

  return (
    <dialog
      ref={dialogRef}
      aria-modal="true"
      aria-labelledby="appointment-dialog-title"
      aria-describedby="appointment-dialog-description"
      onClose={handleClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) closeDialog();
      }}
      className="m-auto w-[calc(100%-2rem)] max-w-lg overflow-visible rounded-3xl border border-teal-100 bg-white p-0 text-teal-950 shadow-2xl backdrop:bg-teal-950/55 backdrop:backdrop-blur-sm"
    >
      <div className="relative max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-3xl p-6 md:p-8">
        <button
          type="button"
          onClick={closeDialog}
          aria-label="Close appointment form"
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-teal-800 transition hover:bg-teal-50 hover:text-teal-950"
        >
          <X className="h-5 w-5" aria-hidden={true} />
        </button>

        {status === "success" ? (
          <div className="px-2 py-8 text-center" role="status">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-teal-700">
              <CheckCircle2 className="h-8 w-8" aria-hidden={true} />
            </span>
            <h2 id="appointment-dialog-title" className="mt-5 text-2xl font-extrabold">
              Your request has been received.
            </h2>
            <p id="appointment-dialog-description" className="mt-3 leading-relaxed text-teal-800/80">
              A CPS team member will follow up using the phone number or email you provided.
            </p>
            <button
              type="button"
              onClick={closeDialog}
              aria-label="Close dialog"
              className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-teal-700 px-6 py-4 font-bold text-white transition hover:bg-teal-800"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-100 text-teal-700 md:h-12 md:w-12 md:rounded-2xl">
              <CalendarCheck className="h-5 w-5 md:h-6 md:w-6" aria-hidden={true} />
            </span>
            <h2 id="appointment-dialog-title" className="mt-4 pr-10 text-2xl font-extrabold md:mt-5 md:text-3xl">
              {requestTitle}
            </h2>
            <p
              id="appointment-dialog-description"
              className="mt-2 text-sm leading-relaxed text-teal-800/80 md:text-base"
            >
              {requestDescription}
            </p>

            <form onSubmit={handleSubmit} className="mt-5 md:mt-6">
              <div className="space-y-3 md:space-y-4">
                <div>
                  <label htmlFor="appointment-name" className="text-sm font-semibold text-teal-900">
                    Full name
                  </label>
                  <input
                    ref={nameRef}
                    id="appointment-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="appointment-email" className="text-sm font-semibold text-teal-900">
                    Email
                  </label>
                  <input
                    id="appointment-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="appointment-phone" className="text-sm font-semibold text-teal-900">
                    Phone number
                  </label>
                  <input
                    id="appointment-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    required
                    placeholder="Your preferred number"
                    className={inputClass}
                  />
                </div>

                <div className="sr-only" aria-hidden="true">
                  <label htmlFor="appointment-website">Website</label>
                  <input
                    id="appointment-website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="mt-4 rounded-2xl bg-teal-50 p-4 text-xs leading-relaxed text-teal-900/80 md:mt-5 md:p-4 md:text-sm">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="mt-0.5 h-4 w-4 flex-none text-teal-700" aria-hidden={true} />
                  <p>
                    By submitting, you agree that Comprehensive Psychological Services may contact you
                    by phone, text, or email about your request. There is no obligation to schedule or
                    receive services. Message and data rates may apply.
                  </p>
                </div>
                <p className="mt-1.5 pl-7 text-xs md:mt-2">
                  Review our{" "}
                  <Link href="/privacy" onClick={closeDialog} aria-label="Privacy Policy" className="font-semibold underline underline-offset-2">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/terms" onClick={closeDialog} aria-label="Terms of Use" className="font-semibold underline underline-offset-2">
                    Terms
                  </Link>
                  .
                </p>
              </div>

              {error && (
                <div
                  className="mt-4 flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                  role="alert"
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 flex-none" aria-hidden={true} />
                  <div className="min-w-0">
                    <p>{error}</p>
                    {submissionConflict && (
                      <button
                        type="button"
                        onClick={startNewRequest}
                        aria-label="Start a new appointment request"
                        className="mt-2 font-bold underline decoration-red-300 underline-offset-4 hover:text-red-950"
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
                aria-label={status === "submitting" ? "Sending your appointment request" : "Submit appointment request"}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-4 text-base font-bold text-white shadow-lg shadow-teal-900/10 transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-70 md:mt-5 md:py-4"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" aria-hidden={true} /> Sending…
                  </>
                ) : (
                  <>
                    <CalendarCheck className="h-5 w-5" aria-hidden={true} /> Submit appointment request
                  </>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </dialog>
  );
}
