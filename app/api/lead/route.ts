import { NextResponse } from "next/server";
import { readJsonRequest } from "@/lib/server/read-json-request";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

const PRODUCTION_LEAD_ENDPOINT =
  "https://omnileadsagi.com/api/inbound/cps/appointments";
const LOCAL_LEAD_ENDPOINT =
  "http://127.0.0.1:3002/api/inbound/cps/appointments";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const CONSENT_VERSION = "cps-appointment-contact-v1";
const MAX_REQUEST_BYTES = 16 * 1024;
const CPS_PUBLIC_ORIGIN = "https://cpsutah.org";
const CONSENT_TEXT =
  "By submitting, you agree that Comprehensive Psychological Services may contact you by phone, text, or email about your request. There is no obligation to schedule or receive services. Message and data rates may apply.";

type LeadBody = {
  submissionId?: unknown;
  consentRecordedAt?: unknown;
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  service?: unknown;
  location?: unknown;
  contactPreference?: unknown;
  availability?: unknown;
  message?: unknown;
  website?: unknown;
  consent?: unknown;
  formVariant?: unknown;
  utm_source?: unknown;
  utm_medium?: unknown;
  utm_campaign?: unknown;
  utm_term?: unknown;
  utm_content?: unknown;
  referrer?: unknown;
  landing_path?: unknown;
  pagePath?: unknown;
};

type AppointmentCompletion = {
  ok?: boolean;
  error?: string;
  submission_id?: string;
  completion?: string;
  crm_linked?: boolean;
  owner_notification_accepted?: boolean;
  customer_acknowledgement_accepted?: boolean;
};

const clean = (value: unknown, max = 500) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

function safeCpsPageUrl(body: LeadBody, request: Request): string {
  const safePath = (value: unknown): string | null => {
    const path = clean(value, 1_000);
    if (!path.startsWith("/") || path.startsWith("//")) return null;
    try {
      const parsed = new URL(path, CPS_PUBLIC_ORIGIN);
      if (parsed.origin !== CPS_PUBLIC_ORIGIN) return null;
      return parsed.toString();
    } catch {
      return null;
    }
  };

  const submittedPath = safePath(body.pagePath);
  if (submittedPath) return submittedPath;

  const referer = request.headers.get("referer");
  if (referer) {
    try {
      const parsed = new URL(referer);
      const isPublicCpsHost =
        parsed.protocol === "https:" &&
        (parsed.hostname === "cpsutah.org" || parsed.hostname === "www.cpsutah.org");
      const isLocalBridgeHost =
        useLocalBridge() &&
        (parsed.hostname === "127.0.0.1" || parsed.hostname === "localhost");
      if (isPublicCpsHost || isLocalBridgeHost) {
        const safeRefererPath = safePath(`${parsed.pathname}${parsed.search}`);
        if (safeRefererPath) return safeRefererPath;
      }
    } catch {
      // Fall through to first-touch attribution or the canonical homepage.
    }
  }

  return safePath(body.landing_path) || `${CPS_PUBLIC_ORIGIN}/`;
}

function useLocalBridge(): boolean {
  return (
    process.env.NODE_ENV === "development" &&
    process.env.CPS_OMNI_LOCAL_BRIDGE === "1"
  );
}

function upstreamHeaders(request: Request): Headers | null {
  const headers = new Headers({ "Content-Type": "application/json" });
  if (useLocalBridge()) {
    const localSecret = process.env.CPS_LOCAL_SOURCE_SECRET?.trim();
    if (!localSecret) return null;
    headers.set("x-cps-local-source", localSecret);
  } else {
    const token =
      request.headers.get("x-vercel-oidc-token") ||
      process.env.VERCEL_OIDC_TOKEN;
    if (!token) return null;
    headers.set("Authorization", `Bearer ${token}`);
  }

  for (const name of ["x-forwarded-for", "x-real-ip", "user-agent"]) {
    const value = request.headers.get(name);
    if (value) headers.set(name, value);
  }
  return headers;
}

export async function POST(request: Request) {
  const parsedBody = await readJsonRequest<LeadBody>(request, MAX_REQUEST_BYTES);
  if (!parsedBody.ok) {
    return NextResponse.json(
      {
        ok: false,
        error:
          parsedBody.reason === "payload_too_large"
            ? "This form submission is too large. Please shorten it and try again."
            : parsedBody.reason === "unsupported_media_type"
              ? "Please submit this form as JSON."
              : "Please check the form and try again.",
      },
      { status: parsedBody.status },
    );
  }
  const body = parsedBody.value;

  const website = clean(body.website, 200);
  const providedSubmissionId = clean(body.submissionId, 64);
  const submissionId = UUID_RE.test(providedSubmissionId)
    ? providedSubmissionId
    : website
      ? crypto.randomUUID()
      : "";
  const name = clean(body.name, 200);
  const email = clean(body.email, 254).toLowerCase();
  const phone = clean(body.phone, 50);
  const formVariant =
    clean(body.formVariant, 20) === "quick" ? "quick" : "detailed";
  const isQuickForm = formVariant === "quick";
  const consent = body.consent === true;
  const service =
    clean(body.service, 200) ||
    (isQuickForm ? "General appointment request" : "");
  const location =
    clean(body.location, 100) || (isQuickForm ? "No preference" : "");
  const contactPreference =
    clean(body.contactPreference, 50) ||
    (isQuickForm ? "Phone or email" : "");
  const availability = clean(body.availability, 200);
  const message = clean(body.message, 1500);
  const consentRecordedAt = clean(body.consentRecordedAt, 40);

  if (!website) {
    if (
      !submissionId ||
      !name ||
      !email ||
      !phone ||
      !consent ||
      !consentRecordedAt ||
      !Number.isFinite(Date.parse(consentRecordedAt))
    ) {
      return NextResponse.json(
        { ok: false, error: "Please complete all required fields." },
        { status: 422 },
      );
    }
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 422 },
      );
    }
    const phoneDigitCount = phone.replace(/\D/g, "").length;
    if (phoneDigitCount < 7 || phoneDigitCount > 15) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid phone number." },
        { status: 422 },
      );
    }
    if (!isQuickForm && (!service || !location || !contactPreference)) {
      return NextResponse.json(
        { ok: false, error: "Please complete all required fields." },
        { status: 422 },
      );
    }
  }

  const headers = upstreamHeaders(request);
  if (!headers) {
    console.error("[cps-appointment] Vercel project identity is unavailable");
    return NextResponse.json(
      {
        ok: false,
        error:
          "Our appointment form is temporarily unavailable. Please try again shortly.",
      },
      { status: 503 },
    );
  }

  const recordedAt = consentRecordedAt || new Date().toISOString();
  const schedulingNotes = [
    `Preferred location: ${location}`,
    `Preferred follow-up: ${contactPreference}`,
    availability ? `Best time to reach: ${availability}` : "",
    message ? `Scheduling notes: ${message}` : "",
    `Consent: ${CONSENT_TEXT}`,
    `Consent version: ${CONSENT_VERSION}`,
    `Consent recorded at: ${recordedAt}`,
    `Form variant: ${formVariant}`,
  ]
    .filter(Boolean)
    .join("\n");

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 55_000);
  try {
    const upstream = await fetch(
      useLocalBridge() ? LOCAL_LEAD_ENDPOINT : PRODUCTION_LEAD_ENDPOINT,
      {
        method: "POST",
        headers,
        signal: controller.signal,
        cache: "no-store",
        body: JSON.stringify({
          submission_id: submissionId,
          name,
          email,
          phone,
          message: schedulingNotes,
          service_interest: service,
          source: "cpsutah_appointment_form",
          page_url: safeCpsPageUrl(body, request),
          website,
          consent: website ? undefined : true,
          consent_version: CONSENT_VERSION,
          consent_recorded_at: recordedAt,
          utm_source: clean(body.utm_source, 100) || null,
          utm_medium: clean(body.utm_medium, 100) || null,
          utm_campaign: clean(body.utm_campaign, 100) || null,
          utm_term: clean(body.utm_term, 100) || null,
          utm_content: clean(body.utm_content, 100) || null,
          referrer: clean(body.referrer, 2048) || null,
          landing_path: clean(body.landing_path, 500) || null,
          location,
          contact_preference: contactPreference,
          availability: availability || null,
        }),
      },
    );
    const result = (await upstream.json().catch(() => ({}))) as AppointmentCompletion;
    const isNoWriteProbe = website && result.ok && result.completion === "no_write";
    const isComplete =
      !website &&
      result.ok === true &&
      result.submission_id === submissionId &&
      result.completion === "appointment_complete" &&
      result.crm_linked === true &&
      result.owner_notification_accepted === true &&
      result.customer_acknowledgement_accepted === true;

    if (!upstream.ok || (!isNoWriteProbe && !isComplete)) {
      const isSubmissionConflict =
        upstream.status === 409 && result.error === "submission_id_conflict";
      const userMessage =
        upstream.status === 409 && result.error === "appointment_email_suppressed"
          ? "Your request was saved, but we couldn’t email a confirmation to this address. Please contact CPS directly if you need help."
          : isSubmissionConflict
            ? "This request changed after it was first submitted. Start a new request to send the updated details safely."
            : upstream.status === 409
              ? "This request could not be retried safely. Please start a new request."
            : "We couldn’t confirm your appointment request. Please try again.";
      return NextResponse.json(
        {
          ok: false,
          error: userMessage,
          code: isSubmissionConflict ? "submission_id_conflict" : undefined,
        },
        { status: upstream.status === 409 ? 409 : 503 },
      );
    }
    return NextResponse.json({
      ok: true,
      submissionId,
      completion: isNoWriteProbe ? "no_write" : "appointment_complete",
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Our appointment form is temporarily unavailable. Please try again shortly.",
      },
      { status: 503 },
    );
  } finally {
    clearTimeout(timeout);
  }
}
