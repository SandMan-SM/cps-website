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
      { ok: false, error: "Too many requests. Please try again in a minute." },
      { status: 429 },
    );
  }

  let body: Record<string, string> = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const { email, audience = "other", website } = body;

  if (typeof website === "string" && website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  if (!email || !isEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const text = [
    `New newsletter subscriber`,
    ``,
    `Email: ${email}`,
    `Audience: ${audience}`,
    `Source IP: ${ip}`,
    `Submitted: ${new Date().toISOString()}`,
  ].join("\n");

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    NEWSLETTER_TO_EMAIL = "cps@wecanhelpout.com",
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
        from: `"CPS Newsletter" <${SMTP_USER}>`,
        to: NEWSLETTER_TO_EMAIL,
        subject: `New newsletter subscriber — ${audience}`,
        text,
      });
    } catch (err) {
      console.error("[newsletter] SMTP send failed:", err);
      console.log("[newsletter] RETRY QUEUE — captured subscriber:", text);
    }
  } else {
    console.log("[newsletter] no SMTP configured, subscriber captured:", text);
  }

  return NextResponse.json({ ok: true });
}
