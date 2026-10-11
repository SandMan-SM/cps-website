// Keyword → canonical URL map for internal SEO linking.
// Longest keywords first so multi-word phrases match before their sub-words.
// All links are do-follow (plain <a>/<Link>, no rel="nofollow").

export type KeywordLink = { keyword: string; url: string };

export const keywordLinks: KeywordLink[] = [
  // Services (multi-word phrases first)
  { keyword: "ketamine-assisted psychotherapy", url: "/solutions/ketamine-therapy" },
  { keyword: "substance abuse evaluation", url: "/solutions/substance-abuse-treatment" },
  { keyword: "substance abuse treatment", url: "/solutions/substance-abuse-treatment" },
  { keyword: "medication management", url: "/solutions/medication-management" },
  { keyword: "counseling & psychotherapy", url: "/solutions/counseling-psychotherapy" },
  { keyword: "psychotherapy", url: "/solutions/counseling-psychotherapy" },
  { keyword: "evaluation services", url: "/solutions/evaluation-services" },
  { keyword: "psychological evaluation", url: "/solutions/evaluation-services" },
  { keyword: "health & wellness", url: "/solutions/health-wellness" },
  { keyword: "employer services", url: "/solutions/employer-services" },
  { keyword: "ketamine therapy", url: "/solutions/ketamine-therapy" },
  { keyword: "ketamine treatment", url: "/solutions/ketamine-therapy" },
  { keyword: "Spravato", url: "/solutions/ketamine-therapy" },
  { keyword: "esketamine", url: "/solutions/ketamine-therapy" },
  { keyword: "neurofeedback", url: "/solutions/neurofeedback" },
  { keyword: "counseling", url: "/solutions/counseling-psychotherapy" },

  // Community guidance pages; these describe service areas, not office locations.
  { keyword: "Salt Lake City", url: "/utah/salt-lake-city" },
  { keyword: "West Jordan", url: "/utah/west-jordan" },
  { keyword: "Layton", url: "/utah/layton" },
];

export type LinkSegment = { text: string; url?: string };

// Splits a body string into segments, linking the FIRST occurrence of each
// keyword to its canonical URL. Case-insensitive match; original casing kept.
// Skips linking any keyword whose URL === selfUrl (don't self-link the page).
export function linkifySegments(
  body: string,
  selfUrl?: string,
): LinkSegment[] {
  const used = new Set<string>();
  // Sort by keyword length desc so longer phrases win.
  const ordered = [...keywordLinks].sort(
    (a, b) => b.keyword.length - a.keyword.length,
  );

  type Match = { start: number; end: number; url: string };
  const matches: Match[] = [];

  for (const { keyword, url } of ordered) {
    if (url === selfUrl) continue;
    if (used.has(url)) continue;
    const idx = body.toLowerCase().indexOf(keyword.toLowerCase());
    if (idx === -1) continue;
    // Ensure this span doesn't overlap an already-claimed span.
    const end = idx + keyword.length;
    const overlaps = matches.some(
      (m) => idx < m.end && end > m.start,
    );
    if (overlaps) continue;
    matches.push({ start: idx, end, url });
    used.add(url);
  }

  matches.sort((a, b) => a.start - b.start);

  const segments: LinkSegment[] = [];
  let cursor = 0;
  for (const m of matches) {
    if (m.start > cursor) {
      segments.push({ text: body.slice(cursor, m.start) });
    }
    segments.push({ text: body.slice(m.start, m.end), url: m.url });
    cursor = m.end;
  }
  if (cursor < body.length) {
    segments.push({ text: body.slice(cursor) });
  }
  return segments;
}
