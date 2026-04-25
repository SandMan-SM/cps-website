"use client";

/**
 * CpsTracker — mounted once in app/layout.tsx.
 *
 * Fires every page_view, click (delegated), form_submit, and scroll
 * milestone to https://omnileadsagi.com/api/cps/events. The OmniLeads
 * dashboard reads cps_events to show traffic, top pages, top buttons,
 * and the call-counter (every tel: link click is flagged is_phone_click).
 *
 * Anonymous-friendly:
 *   - persistent visitor_id in localStorage ("cps_visitor_id")
 *   - per-tab session_id in sessionStorage ("cps_session_id")
 *
 * Resilient:
 *   - sendBeacon for click-then-navigate so outbound link clicks survive
 *   - keepalive fetch fallback
 *   - all fetches are fire-and-forget (analytics never breaks the page)
 */

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const ENDPOINT =
  process.env.NEXT_PUBLIC_OMNILEADS_API ||
  "https://omnileadsagi.com";

const IGNORED_PREFIXES = ["/api/", "/_next/"];

type Payload = {
  event_type: "page_view" | "click" | "form_submit" | "scroll";
  event_category: string;
  action: string;
  page_url?: string;
  target_type?: string;
  target_id?: string;
  value_text?: string;
  value_numeric?: number;
  properties?: Record<string, unknown>;
};

function rid() {
  return (
    Math.random().toString(36).slice(2, 10) +
    Math.random().toString(36).slice(2, 10)
  );
}

function visitorId(): string {
  try {
    let id = localStorage.getItem("cps_visitor_id");
    if (!id) {
      id = "v_" + rid();
      localStorage.setItem("cps_visitor_id", id);
    }
    return id;
  } catch {
    return "v_" + rid();
  }
}

function sessionId(): string {
  try {
    let id = sessionStorage.getItem("cps_session_id");
    if (!id) {
      id = "s_" + rid();
      sessionStorage.setItem("cps_session_id", id);
    }
    return id;
  } catch {
    return "s_" + rid();
  }
}

function send(payload: Payload, opts: { beacon?: boolean } = {}) {
  const body = {
    ...payload,
    visitor_id: visitorId(),
    session_id: sessionId(),
    user_agent: typeof navigator !== "undefined" ? navigator.userAgent : "",
  };

  const url = `${ENDPOINT}/api/cps/events`;

  if (opts.beacon && typeof navigator !== "undefined" && navigator.sendBeacon) {
    try {
      const blob = new Blob([JSON.stringify(body)], { type: "application/json" });
      if (navigator.sendBeacon(url, blob)) return;
    } catch {
      /* fall through */
    }
  }

  try {
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      keepalive: true,
      mode: "cors",
      credentials: "omit",
    }).catch(() => {});
  } catch {
    /* analytics must never break the page */
  }
}

function findTrackTarget(node: EventTarget | null): HTMLElement | null {
  if (!(node instanceof HTMLElement)) return null;
  let el: HTMLElement | null = node;
  for (let i = 0; i < 6 && el; i++) {
    if (
      el.dataset?.track ||
      el.tagName === "BUTTON" ||
      el.tagName === "A" ||
      el.getAttribute("role") === "button"
    ) {
      return el;
    }
    el = el.parentElement;
  }
  return null;
}

function labelFor(el: HTMLElement, href: string | null): string {
  // tel: links should always be labeled clearly so the dashboard can
  // distinguish "Call (801) 483-1600" from generic phone strings.
  if (href?.startsWith("tel:")) return `tel:${href.replace("tel:", "")}`;

  const ds = el.dataset?.track;
  if (ds) return ds.slice(0, 120);

  const aria = el.getAttribute("aria-label");
  if (aria) return aria.slice(0, 120);

  const title = el.getAttribute("title");
  if (title) return title.slice(0, 120);

  const txt = (el.innerText || el.textContent || "").trim().replace(/\s+/g, " ");
  if (txt) return txt.slice(0, 120);

  if (el.tagName === "A") return `link:${(href || "").slice(0, 120)}`;
  return el.tagName.toLowerCase();
}

export default function CpsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastPath = useRef<string>("");
  const scrollHits = useRef<Set<number>>(new Set());

  // Page view ───────────────────────────────────────────────────────────
  useEffect(() => {
    if (!pathname) return;
    if (IGNORED_PREFIXES.some((p) => pathname.startsWith(p))) return;
    const qs = searchParams?.toString() || "";
    const full = qs ? `${pathname}?${qs}` : pathname;
    if (lastPath.current === full) return;
    lastPath.current = full;
    scrollHits.current = new Set(); // reset scroll milestones for new page

    const utm: Record<string, string> = {};
    if (searchParams) {
      searchParams.forEach((v, k) => {
        if (k.startsWith("utm_")) utm[k] = v;
      });
    }

    send({
      event_type: "page_view",
      event_category: "navigation",
      action: "view",
      page_url: typeof window !== "undefined" ? window.location.href : full,
      properties: {
        referrer: typeof document !== "undefined" ? document.referrer || null : null,
        viewport:
          typeof window !== "undefined"
            ? { w: window.innerWidth, h: window.innerHeight }
            : null,
        utm: Object.keys(utm).length ? utm : undefined,
      },
    });
  }, [pathname, searchParams]);

  // Click + form_submit delegation ──────────────────────────────────────
  useEffect(() => {
    function onClick(ev: MouseEvent) {
      const el = findTrackTarget(ev.target);
      if (!el) return;
      if (el.getAttribute("aria-hidden") === "true") return;

      const href =
        el.tagName === "A" ? (el as HTMLAnchorElement).getAttribute("href") : null;
      const label = labelFor(el, href);
      const isOutbound = href
        ? /^https?:\/\//i.test(href) && !href.includes(window.location.host)
        : false;
      const isTel = !!href?.startsWith("tel:");
      const isMail = !!href?.startsWith("mailto:");

      send(
        {
          event_type: "click",
          event_category: isTel ? "conversion" : "interaction",
          action: "click",
          page_url:
            window.location.pathname +
            (window.location.search ? window.location.search : ""),
          target_type: el.tagName.toLowerCase(),
          target_id: label,
          value_text: label,
          properties: {
            href: href || undefined,
            outbound: isOutbound || undefined,
            tel: isTel || undefined,
            mailto: isMail || undefined,
            class: el.className?.slice?.(0, 120) || undefined,
          },
        },
        // sendBeacon for any same-tab navigation so the event doesn't get
        // killed when the browser starts unloading.
        { beacon: !!href }
      );
    }

    function onSubmit(ev: SubmitEvent) {
      const form = ev.target as HTMLFormElement | null;
      if (!form || !(form instanceof HTMLFormElement)) return;
      const label =
        form.getAttribute("data-track") ||
        form.getAttribute("name") ||
        form.getAttribute("id") ||
        "form";
      send({
        event_type: "form_submit",
        event_category: "conversion",
        action: "submit",
        page_url:
          window.location.pathname +
          (window.location.search ? window.location.search : ""),
        target_type: "form",
        target_id: label,
        value_text: label,
      });
    }

    document.addEventListener("click", onClick, { capture: true });
    document.addEventListener("submit", onSubmit, { capture: true });
    return () => {
      document.removeEventListener("click", onClick, { capture: true });
      document.removeEventListener("submit", onSubmit, { capture: true });
    };
  }, []);

  // Scroll milestones (25/50/75/100) — useful for content engagement.
  useEffect(() => {
    function onScroll() {
      if (typeof document === "undefined") return;
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      if (max <= 0) return;
      const pct = Math.round((h.scrollTop / max) * 100);
      const milestones = [25, 50, 75, 100];
      for (const m of milestones) {
        if (pct >= m && !scrollHits.current.has(m)) {
          scrollHits.current.add(m);
          send({
            event_type: "scroll",
            event_category: "engagement",
            action: "reach",
            page_url:
              window.location.pathname +
              (window.location.search ? window.location.search : ""),
            target_type: "page",
            target_id: `scroll_${m}`,
            value_numeric: m,
          });
        }
      }
    }
    let raf = 0;
    function throttled() {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        onScroll();
      });
    }
    window.addEventListener("scroll", throttled, { passive: true });
    return () => window.removeEventListener("scroll", throttled);
  }, []);

  return null;
}
