import { NextResponse } from "next/server";
import { readJsonRequest } from "@/lib/server/read-json-request";
import { probeLocalCpsReceiver } from "@/lib/server/probe-local-receiver";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

/**
 * Rebranded appointment intake. The receiver confirms persistence, contact
 * linking, and both required notifications before the browser reports success.
 * The fixed loopback bridge is available only during local development.
 */
const LEAD_ENDPOINT = "https://omnileadsagi.com/api/inbound/cps/appointments";
const LOCAL_LEAD_ENDPOINT = "http://127.0.0.1:3002/api/inbound/cps/appointments";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const CONSENT_VERSION = "cps-contact-consent-v2";
const MAX_REQUEST_BYTES = 16 * 1024;
const CPS_PUBLIC_ORIGIN = "https://cpsutah.org";
const CONSENT_TEXT =
  "By submitting, you agree that Clinical and Professional Solutions may contact you by phone, text, or email about your request. There is no obligation to use any referred service. Message and data rates may apply.";

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

function useLocalBridge(request: Request): boolean {
  const hostname = new URL(request.url).hostname;
  return process.env.NODE_ENV === "development" &&
    process.env.CPS_OMNI_LOCAL_BRIDGE === "1" &&
    (hostname === "127.0.0.1" || hostname === "localhost");
}

function upstreamHeaders(request: Request): Headers | null {
  const headers = new Headers({ "Content-Type": "application/json" });
  if (useLocalBridge(request)) {
    const secret = process.env.CPS_LOCAL_SOURCE_SECRET?.trim();
    if (!secret) return null;
    headers.set("x-cps-local-source", secret);
  } else {
    const token = request.headers.get("x-vercel-oidc-token") || process.env.VERCEL_OIDC_TOKEN;
    if (!token) return null;
    headers.set("Authorization", `Bearer ${token}`);
  }
  for (const header of ["x-forwarded-for", "x-real-ip", "user-agent"]) {
    const value = request.headers.get(header);
    if (value) headers.set(header, value);
  }
  return headers;
}

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
    if (useLocalBridge(request) && !await probeLocalCpsReceiver("appointments", upstreamHeaders(request))) {
      return NextResponse.json({ ok: false, error: "Local receiver connectivity check failed." }, { status: 503 });
    }
    return NextResponse.json({ ok: true, completion: "no_write" });
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
    (isQuickForm ? "General solution request" : "");
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

  const headers = upstreamHeaders(request);
  if (!headers) {
    return NextResponse.json(
      { ok: false, error: "Our request form is temporarily unavailable. Please try again shortly." },
      { status: 503 },
    );
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 55_000);
  try {
    const upstream = await fetch(useLocalBridge(request) ? LOCAL_LEAD_ENDPOINT : LEAD_ENDPOINT, {
      method: "POST",
      headers,
      signal: controller.signal,
      cache: "no-store",
      body: JSON.stringify({
        name,
        email,
        phone,
        // Keep optional context in the private scheduling summary rather than
        // publishing a clinical service selection in a marketing CRM column.
        message: schedulingNotes,
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
      completion?: string;
      crm_linked?: boolean;
      owner_notification_accepted?: boolean;
      customer_acknowledgement_accepted?: boolean;
      customer_acknowledgement_suppressed?: boolean;
    };

    const isComplete = result.ok === true &&
      result.completion === "appointment_complete" &&
      result.crm_linked === true &&
      result.owner_notification_accepted === true &&
      result.customer_acknowledgement_accepted === true &&
      result.customer_acknowledgement_suppressed === false;
    if (!upstream.ok || !isComplete) {
      console.error(
        `[cps-appointment] hub rejected lead (${upstream.status}): ${result.error ?? "unknown"}`,
      );
      return NextResponse.json(
        {
          ok: false,
          error: result.error === "submission_id_conflict"
            ? "This request was changed after an earlier attempt. Please start a new request."
            : "We couldn’t confirm your request. Please try again.",
          code: result.error === "submission_id_conflict" ? "submission_id_conflict" : undefined,
        },
        { status: upstream.status === 409 ? 409 : 503 },
      );
    }
    return NextResponse.json({ ok: true, submissionId });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Our request form is temporarily unavailable. Please try again shortly.",
      },
      { status: 503 },
    );
  } finally {
    clearTimeout(timeout);
  }
}
