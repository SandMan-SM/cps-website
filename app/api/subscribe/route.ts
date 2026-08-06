import { NextResponse } from "next/server";
import { createHash } from "node:crypto";
import { readJsonRequest } from "@/lib/server/read-json-request";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

const PRODUCTION_SUBSCRIBE_ENDPOINT =
  "https://omnileadsagi.com/api/federation-newsletter/subscribe";
const LOCAL_SUBSCRIBE_ENDPOINT =
  "http://127.0.0.1:3002/api/federation-newsletter/subscribe";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_REQUEST_BYTES = 4 * 1024;
type RateWindow = { count: number; resetAt: number };

declare global {
  // Best-effort edge throttling at the public proxy. The receiver applies its
  // own independent limit, so a cold serverless instance cannot bypass the
  // authoritative guard.
  // eslint-disable-next-line no-var
  var __cpsNewsletterProxyRateLimits: Map<string, RateWindow> | undefined;
}

const rateWindows =
  globalThis.__cpsNewsletterProxyRateLimits ?? new Map<string, RateWindow>();
globalThis.__cpsNewsletterProxyRateLimits = rateWindows;

const clean = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

function requestIp(request: Request): string {
  const forwarded = clean(request.headers.get("x-forwarded-for"), 256)
    .split(",", 1)[0]
    ?.trim();
  return forwarded || clean(request.headers.get("x-real-ip"), 80) || "unknown";
}

function hashRateKey(value: string): string {
  return createHash("sha256").update(value).digest("hex");
}

function consumeRateWindow(
  key: string,
  limit: number,
  windowMs: number,
): { ok: true } | { ok: false; retryAfterSeconds: number } {
  const now = Date.now();
  const current = rateWindows.get(key);
  if (!current || current.resetAt <= now) {
    rateWindows.set(key, { count: 1, resetAt: now + windowMs });
  } else {
    current.count += 1;
    if (current.count > limit) {
      return {
        ok: false,
        retryAfterSeconds: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
      };
    }
  }

  // Keep the process-local cache bounded even under rotating-address abuse.
  if (rateWindows.size > 2_000) {
    for (const [candidate, value] of rateWindows) {
      if (value.resetAt <= now || rateWindows.size > 1_500) {
        rateWindows.delete(candidate);
      }
    }
  }
  return { ok: true };
}

function rateLimited(retryAfterSeconds: number) {
  return NextResponse.json(
    {
      ok: false,
      error: "Too many subscription attempts. Please wait and try again.",
    },
    {
      status: 429,
      headers: { "Retry-After": String(retryAfterSeconds) },
    },
  );
}

function useLocalBridge(): boolean {
  return (
    process.env.NODE_ENV === "development" &&
    process.env.CPS_OMNI_LOCAL_BRIDGE === "1"
  );
}

function upstreamHeaders(request: Request): Headers | null {
  const headers = new Headers({
    "Content-Type": "application/json",
    // Forward only a one-way browser-IP hash so the receiver can enforce its
    // own per-visitor limit without storing or trusting raw forwarded IPs.
    "x-cps-client-ip-hash": hashRateKey(requestIp(request)),
  });
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
  return headers;
}

export async function POST(request: Request) {
  type SubscribeBody = { firstName?: unknown; email?: unknown; website?: unknown };
  const parsedBody = await readJsonRequest<SubscribeBody>(request, MAX_REQUEST_BYTES);
  if (!parsedBody.ok) {
    return NextResponse.json(
      {
        ok: false,
        error:
          parsedBody.reason === "payload_too_large"
            ? "This subscription request is too large. Please try again."
            : parsedBody.reason === "unsupported_media_type"
              ? "Please submit this form as JSON."
              : "Please check your email and try again.",
      },
      { status: parsedBody.status },
    );
  }
  const body = parsedBody.value;

  const website = clean(body.website, 200);
  const email = clean(body.email, 254).toLowerCase();
  const firstName = clean(body.firstName, 80);
  if (!website && !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 422 },
    );
  }
  if (website) {
    return NextResponse.json({ ok: true, completion: "no_write" });
  }

  const emailLimit = consumeRateWindow(
    `email:${hashRateKey(email)}`,
    5,
    15 * 60 * 1000,
  );
  if (!emailLimit.ok) return rateLimited(emailLimit.retryAfterSeconds);

  const ipLimit = consumeRateWindow(
    `ip:${hashRateKey(requestIp(request))}`,
    20,
    10 * 60 * 1000,
  );
  if (!ipLimit.ok) return rateLimited(ipLimit.retryAfterSeconds);

  const headers = upstreamHeaders(request);
  if (!headers) {
    console.error("[cps-newsletter] Vercel project identity is unavailable");
    return NextResponse.json(
      {
        ok: false,
        error: "Subscriptions are temporarily unavailable. Please try again shortly.",
      },
      { status: 503 },
    );
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 55_000);
  try {
    const upstream = await fetch(
      useLocalBridge() ? LOCAL_SUBSCRIBE_ENDPOINT : PRODUCTION_SUBSCRIBE_ENDPOINT,
      {
        method: "POST",
        headers,
        signal: controller.signal,
        cache: "no-store",
        body: JSON.stringify({
          site: "cps",
          email,
          first_name: firstName || undefined,
          website,
          source: "cpsutah.org",
        }),
      },
    );
    const result = (await upstream.json().catch(() => ({}))) as {
      ok?: boolean;
      owner_notification_id?: string;
      welcome_accepted?: boolean;
    };
    const isComplete =
      result.ok === true &&
      typeof result.owner_notification_id === "string" &&
      result.owner_notification_id.trim().length > 0 &&
      result.welcome_accepted === false;

    if (!upstream.ok || !isComplete) {
      return NextResponse.json(
        {
          ok: false,
          error:
            upstream.status === 409
              ? "This address cannot be subscribed right now. Please contact CPS if you need help."
              : "We couldn’t confirm your subscription. Please try again.",
        },
        { status: upstream.status === 409 ? 409 : 503 },
      );
    }
    return NextResponse.json({
      ok: true,
      completion: "subscribed",
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "Subscriptions are temporarily unavailable. Please try again shortly.",
      },
      { status: 503 },
    );
  } finally {
    clearTimeout(timeout);
  }
}
