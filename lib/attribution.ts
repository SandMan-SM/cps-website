// Client-side lead attribution.
//
// Captures first-touch marketing attribution — utm_source / utm_medium /
// utm_campaign (plus utm_term / utm_content), the external referrer, and the
// landing page path — once per browser session and persists it so it survives
// navigation before a lead form is submitted. Read it back at submit time and
// include it in the lead payload so the CRM can attribute the lead to its
// source. No PII; safe to store in sessionStorage.

export type Attribution = {
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_term: string | null;
  utm_content: string | null;
  referrer: string | null;
  landing_path: string | null;
};

const KEY = "cps_attribution_v1";

const EMPTY: Attribution = {
  utm_source: null,
  utm_medium: null,
  utm_campaign: null,
  utm_term: null,
  utm_content: null,
  referrer: null,
  landing_path: null,
};

/**
 * Capture first-touch attribution into sessionStorage. Idempotent — the first
 * page view of the session wins, so a later same-session navigation that drops
 * the utm params doesn't overwrite the original source.
 */
export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    if (sessionStorage.getItem(KEY)) return;
    const params = new URLSearchParams(window.location.search);
    const ref = document.referrer || "";
    // Only treat it as a referrer if it's a different origin.
    const externalRef =
      ref && !ref.startsWith(window.location.origin) ? ref : null;
    const data: Attribution = {
      utm_source: params.get("utm_source"),
      utm_medium: params.get("utm_medium"),
      utm_campaign: params.get("utm_campaign"),
      utm_term: params.get("utm_term"),
      utm_content: params.get("utm_content"),
      referrer: externalRef,
      landing_path: window.location.pathname + window.location.search,
    };
    sessionStorage.setItem(KEY, JSON.stringify(data));
  } catch {
    // Storage disabled — attribution is best-effort, never block the form.
  }
}

/**
 * Read persisted attribution. Falls back to the live URL if nothing was stored
 * (e.g. storage blocked). Always returns a full object so it can be spread
 * directly into a lead payload.
 */
export function readAttribution(): Attribution {
  if (typeof window === "undefined") return { ...EMPTY };
  try {
    const raw = sessionStorage.getItem(KEY);
    if (raw) return { ...EMPTY, ...(JSON.parse(raw) as Partial<Attribution>) };
  } catch {
    /* fall through to live read */
  }
  try {
    const params = new URLSearchParams(window.location.search);
    const ref = document.referrer || "";
    return {
      ...EMPTY,
      utm_source: params.get("utm_source"),
      utm_medium: params.get("utm_medium"),
      utm_campaign: params.get("utm_campaign"),
      utm_term: params.get("utm_term"),
      utm_content: params.get("utm_content"),
      referrer: ref && !ref.startsWith(window.location.origin) ? ref : null,
      landing_path: window.location.pathname + window.location.search,
    };
  } catch {
    return { ...EMPTY };
  }
}
