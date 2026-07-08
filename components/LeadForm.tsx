"use client";

import { useState } from "react";
import { Phone, CheckCircle2, Loader2, CalendarCheck } from "lucide-react";
import { brand, locationOptions } from "@/lib/data";

type Status = "idle" | "submitting" | "success";

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

    const formEl = e.currentTarget;
    const fd = new FormData(formEl);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      location: String(fd.get("location") || ""),
      message: String(fd.get("message") || ""),
    };

    setStatus("submitting");

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    try {
      await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
    } catch {
      // Never block the user — always show the reassuring success state.
    } finally {
      clearTimeout(timeout);
      setStatus("success");
      formEl.reset();
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-teal-200 bg-white p-8 text-center shadow-card">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-teal-700">
          <CheckCircle2 className="h-8 w-8" aria-hidden />
        </span>
        <h3 className="mt-5 text-xl font-bold text-teal-950">We got it.</h3>
        <p className="mt-2 text-teal-800/90">
          We&apos;ll call you shortly to get you scheduled. Prefer to talk now?
        </p>
        <a
          href={brand.phoneHref}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-teal-700 px-6 py-3 text-base font-bold text-white transition hover:bg-teal-800"
        >
          <Phone className="h-5 w-5" aria-hidden /> Call {brand.phone}
        </a>
      </div>
    );
  }

  const inputBase =
    "mt-1.5 w-full rounded-xl border border-teal-200 bg-white px-4 py-3 text-teal-950 placeholder:text-teal-800/40 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/30";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-teal-100 bg-white p-6 shadow-card sm:p-8"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="text-sm font-semibold text-teal-900">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            placeholder="Your name"
            className={inputBase}
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-semibold text-teal-900">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            placeholder="you@example.com"
            className={inputBase}
          />
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-semibold text-teal-900">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            placeholder="(801) 555-0100"
            className={inputBase}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="location" className="text-sm font-semibold text-teal-900">
            Preferred location
          </label>
          <select id="location" name="location" defaultValue="" required className={inputBase}>
            <option value="" disabled>
              Select a location
            </option>
            {locationOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-sm font-semibold text-teal-900">
            How can we help? <span className="font-normal text-teal-800/60">(optional)</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="A few words about what you're looking for."
            className={inputBase}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        aria-label={status === "submitting" ? "Sending your appointment request" : "Request my appointment"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-4 text-base font-bold text-white shadow-lg shadow-teal-900/10 transition hover:bg-teal-800 disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden /> Sending…
          </>
        ) : (
          <>
            <CalendarCheck className="h-5 w-5" aria-hidden /> Request my appointment
          </>
        )}
      </button>

      <p className="mt-4 text-center text-sm text-teal-800/70">
        Prefer to talk now?{" "}
        <a href={brand.phoneHref} className="font-semibold text-teal-700 hover:text-teal-800">
          Call {brand.phone}
        </a>
      </p>
    </form>
  );
}
