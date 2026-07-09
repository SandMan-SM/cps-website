import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// At least 7 digits present somewhere in the input.
const PHONE_RE = /(?:\D*\d){7,}/;

type LeadBody = {
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  message?: string;
  // Marketing attribution (first-touch), captured client-side.
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_term?: string | null;
  utm_content?: string | null;
  referrer?: string | null;
  landing_path?: string | null;
};

const clean = (v: unknown): string | null => {
  const s = typeof v === "string" ? v.trim() : "";
  return s ? s.slice(0, 500) : null;
};

export async function POST(request: Request) {
  let body: LeadBody = {};
  try {
    body = (await request.json()) as LeadBody;
  } catch {
    body = {};
  }

  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();
  const name = (body.name || "").trim();
  const location = (body.location || "").trim();
  const message = (body.message || "").trim();

  // Attribution — forwarded to the CRM inside the event `properties` JSON.
  const utm_source = clean(body.utm_source);
  const utm_medium = clean(body.utm_medium);
  const utm_campaign = clean(body.utm_campaign);
  const utm_term = clean(body.utm_term);
  const utm_content = clean(body.utm_content);
  const referrer = clean(body.referrer);
  const landing_path = clean(body.landing_path);

  // Validate email + phone. Invalid input is still acknowledged (never block the UX),
  // but we skip the forward when it clearly isn't a real lead.
  const valid = EMAIL_RE.test(email) && PHONE_RE.test(phone);

  if (valid) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);
    try {
      await fetch("https://omnileadsagi.com/api/inbound/cps/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          event_type: "form_submit",
          event_category: "lead",
          action: "cps_request_appointment",
          page_url: "/",
          value_text: email,
          properties: {
            email,
            name,
            phone,
            location,
            message,
            source: "cpsutah",
            brand: "Comprehensive Psychological Services",
            utm_source,
            utm_medium,
            utm_campaign,
            utm_term,
            utm_content,
            referrer,
            landing_path,
          },
        }),
      });
    } catch {
      // Best-effort only — swallow all errors so the visitor is never blocked.
    } finally {
      clearTimeout(timeout);
    }
  }

  return NextResponse.json({ ok: true });
}
