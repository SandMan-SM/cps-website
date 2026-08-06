"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Mail } from "lucide-react";

type Status = "idle" | "submitting" | "success";

export default function SubscribeForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const form = e.currentTarget;
    const formData = new FormData(form);
    setStatus("submitting");
    setError("");

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 58_000);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: String(formData.get("subscribeEmail") || ""),
          website: String(formData.get("subscribeWebsite") || ""),
        }),
        signal: controller.signal,
      });
      const result = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        completion?: string;
      };
      if (!response.ok || !result.ok) {
        throw new Error(result.error || "We couldn’t add you right now. Please try again.");
      }
      form.reset();
      setStatus("success");
    } catch (err) {
      setStatus("idle");
      setError(
        err instanceof Error && err.name !== "AbortError"
          ? err.message
          : "The subscription request timed out. Please try again.",
      );
    } finally {
      window.clearTimeout(timeout);
    }
  }

  if (status === "success") {
    return (
      <div className="flex min-h-14 items-center gap-4 rounded-2xl border border-teal-300 bg-white px-5 py-4 text-teal-900" role="status">
        <CheckCircle2 className="h-6 w-6 flex-none text-teal-700" aria-hidden={true} />
        <div>
          <p className="font-bold">You’re subscribed.</p>
          <p className="text-sm text-teal-800/70">
            You’ll receive helpful CPS resources and updates as they’re published.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <label className="sr-only" htmlFor="subscribeEmail">Email address</label>
        <input
          id="subscribeEmail"
          name="subscribeEmail"
          type="email"
          autoComplete="email"
          required
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "subscribe-help subscribe-email-error" : "subscribe-help"}
          placeholder="Email address"
          className="h-14 w-full rounded-xl border border-teal-200 bg-white py-3 pl-5 pr-16 text-teal-950 placeholder:text-teal-800/40 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30 min-[360px]:pr-36 sm:pr-40"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          aria-label={status === "submitting" ? "Subscribing to newsletter" : "Subscribe to newsletter"}
          className="absolute bottom-1.5 right-1.5 top-1.5 inline-flex items-center justify-center gap-2 rounded-lg bg-teal-700 px-4 text-sm font-bold text-white transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-70 min-[360px]:px-5 sm:px-6"
        >
          {status === "submitting" ? <Loader2 className="h-5 w-5 animate-spin" aria-hidden={true} /> : <Mail className="h-5 w-5" aria-hidden={true} />}
          <span className="max-[359px]:sr-only">{status === "submitting" ? "Joining…" : "Subscribe"}</span>
        </button>
      </div>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="subscribeWebsite">Website</label>
        <input id="subscribeWebsite" name="subscribeWebsite" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <p id="subscribe-help" className="mt-3 text-xs text-teal-800/60">Helpful resources and CPS updates. Unsubscribe anytime.</p>
      {error && (
        <div id="subscribe-email-error" className="mt-3 flex items-start gap-2 text-sm text-red-800" role="alert">
          <AlertCircle className="mt-0.5 h-4 w-4 flex-none" aria-hidden={true} />
          <span>{error}</span>
        </div>
      )}
    </form>
  );
}
