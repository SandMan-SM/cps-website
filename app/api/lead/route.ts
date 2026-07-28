import { NextResponse } from "next/server";
import { readJsonRequest } from "@/lib/server/read-json-request";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

/**
 * Appointment-request proxy — forwards to the hub's canonical per-tenant
 * leads pipeline (write-before-notify + idempotent dedup on the hub side):
 *   analytics.leads -> inbound_cps_leads -> owner email + Telegram notify.
 *
 * The previous target (/api/inbound/cps/appointments + Vercel OIDC) was never
 * merged on the hub and 404'd in production, silently failing every submit.
 * The leads route needs no project-identity auth, so this also works in
 * local dev without a bridge.
 */
const LEAD_ENDPOINT = "https://omnileadsagi.com/api/inbound/cps/leads";
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

const clean = (value: unknown, max = 500) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

// Canonicalize the submitted page path against the public origin so the hub
// only ever receives same-site URLs.
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
      const isKnownHost =
        parsed.hostname === "cpsutah.org" ||
        parsed.hostname === "www.cpsutah.org" ||
        parsed.hostname === "127.0.0.1" ||
        parsed.hostname === "localhost";
      if (isKnownHost) {
        const safeRefererPath = safePath(`${parsed.pathname}${parsed.search}`);
        if (safeRefererPath) return safeRefererPath;
      }
    } catch {
      // Fall through to first-touch attribution or the canonical homepage.
    }
  }

  return safePath(body.landing_path) || `${CPS_PUBLIC_ORIGIN}/`;
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

  // Honeypot: bots that fill the hidden field get a quiet success and
  // nothing is forwarded to the hub.
  const website = clean(body.website, 200);
  if (website) {
    return NextResponse.json({ ok: true });
  }

  const providedSubmissionId = clean(body.submissionId, 64);
  const submissionId = UUID_RE.test(providedSubmissionId)
    ? providedSubmissionId
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

  const recordedAt = consentRecordedAt || new Date().toISOString();
  const schedulingNotes = [
    `Interested in: ${service}`,
    `Preferred location: ${location}`,
    `Preferred follow-up: ${contactPreference}`,
    availability ? `Best time to reach: ${availability}` : "",
    message ? `Scheduling notes: ${message}` : "",
    `Submission ID: ${submissionId}`,
    `Form variant: ${formVariant}`,
    `Consent: ${CONSENT_TEXT}`,
    `Consent version: ${CONSENT_VERSION}`,
    `Consent recorded at: ${recordedAt}`,
  ]
    .filter(Boolean)
    .join("\n");

  const headers = new Headers({ "Content-Type": "application/json" });
  for (const headerName of ["x-forwarded-for", "x-real-ip", "user-agent"]) {
    const value = request.headers.get(headerName);
    if (value) headers.set(headerName, value);
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 20_000);
  try {
    const upstream = await fetch(LEAD_ENDPOINT, {
      method: "POST",
      headers,
      signal: controller.signal,
      cache: "no-store",
      body: JSON.stringify({
        name,
        email,
        phone,
        // `message` is intentionally left INTACT. This route has exactly one
        // outbound call, so this string is the ONLY carrier of scheduling detail
        // to the practice's notification — stubbing it would silently gut lead
        // triage for a live psychology practice.
        message: schedulingNotes,
        // `service_interest` deliberately REMOVED: it wrote the visitor's selected
        // clinical service into a structured, queryable column on the shared
        // cross-tenant marketing CRM. Nothing consumes it (the hub's InboundLead
        // type has no such field; neither the email nor Telegram template reads
        // it), so dropping it removes the clinical signal from the marketing
        // store at zero cost to the practice.
        source: "cpsutah_appointment_form",
        page_url: safeCpsPageUrl(body, request),
        submission_id: submissionId,
        consent: true,
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
    });
    const result = (await upstream.json().catch(() => ({}))) as {
      ok?: boolean;
      error?: string;
    };

    if (!upstream.ok || result.ok !== true) {
      console.error(
        `[cps-appointment] hub rejected lead (${upstream.status}): ${result.error ?? "unknown"}`,
      );
      return NextResponse.json(
        {
          ok: false,
          error: "We couldn’t send your request. Please try again.",
        },
        { status: 503 },
      );
    }
    return NextResponse.json({ ok: true, submissionId });
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
