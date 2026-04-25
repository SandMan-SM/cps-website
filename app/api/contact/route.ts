import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();
const WINDOW_MS = 60_000;
const MAX_PER_WINDOW = 5;

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const bucket = buckets.get(ip);
  if (!bucket || bucket.resetAt < now) {
    buckets.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (bucket.count >= MAX_PER_WINDOW) return false;
  bucket.count += 1;
  return true;
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Please try again in a minute or call (801) 483-1600." },
      { status: 429 },
    );
  }

  let body: Record<string, string> = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const { firstName, lastName, email, phone, service, message, website } = body;

  // Honeypot: silently accept but do nothing
  if (typeof website === "string" && website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (!firstName || !lastName || !email || !phone || !service) {
    return NextResponse.json(
      { ok: false, error: "Please fill in all required fields." },
      { status: 400 },
    );
  }

  if (!isEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const text = [
    `New appointment request from CPS website`,
    ``,
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Service: ${service}`,
    `Message: ${message || "(none)"}`,
    ``,
    `Source IP: ${ip}`,
    `Submitted: ${new Date().toISOString()}`,
  ].join("\n");

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    CONTACT_TO_EMAIL = "cps@wecanhelpout.com",
  } = process.env;

  if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
    try {
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT ?? 587),
        secure: Number(SMTP_PORT ?? 587) === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      });

      await transporter.sendMail({
        from: `"CPS Website" <${SMTP_USER}>`,
        to: CONTACT_TO_EMAIL,
        replyTo: email,
        subject: `New Appointment Request — ${firstName} ${lastName}`,
        text,
      });
    } catch (err) {
      console.error("[contact form] SMTP send failed:", err);
      console.log("[contact form] RETRY QUEUE — captured message:", text);
      return NextResponse.json(
        {
          ok: false,
          error:
            "We couldn't send your request automatically, but we've logged it for our team. Please call (801) 483-1600 to confirm your appointment.",
        },
        { status: 502 },
      );
    }
  } else {
    console.log("[contact form] no SMTP configured, message captured:", text);
  }

  // ── Tee to OmniLeads dashboard ─────────────────────────────────────
  // Fire-and-forget POST to the OmniLeads CPS lead intake. This is what
  // surfaces the lead on omnileadsagi.com/dashboard/cps and triggers the
  // Telegram + email alerts to the owner. Failure here must NOT block
  // the response — the local SMTP send is the system of record for
  // CPS's own inbox; OmniLeads is the analytics + dashboard layer.
  const omniEndpoint =
    process.env.NEXT_PUBLIC_OMNILEADS_API ||
    process.env.OMNILEADS_API ||
    "https://omnileadsagi.com";

  // Don't await — we don't want the user-facing response held up by an
  // out-of-region cross-origin POST. Errors are swallowed so an
  // OmniLeads outage never bubbles into "the form is broken" UX.
  fetch(`${omniEndpoint}/api/cps/leads`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: `${firstName} ${lastName}`.trim(),
      email,
      phone,
      message: message
        ? `Service interest: ${service}\n\n${message}`
        : `Service interest: ${service}`,
      source: "contact_form",
      page_url: req.headers.get("referer") || "https://psychandcustodyevaluations.com/#contact",
      user_agent: req.headers.get("user-agent") || undefined,
    }),
    keepalive: true,
  }).catch((err) => {
    console.error("[contact form] omnileads tee failed (non-blocking):", err);
  });

  return NextResponse.json({ ok: true });
}
