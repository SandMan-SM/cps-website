import { brand, locations, insuranceLine } from "@/lib/data";
import { cities } from "@/lib/geo";
import { servicePages } from "@/lib/services";

// Plain-text summary of CPS for AI answer engines (GEO).
export const dynamic = "force-static";

export function GET() {
  const services = servicePages
    .map((s) => `- ${s.name}: ${s.metaDescription} ${brand.domain}/services/${s.slug}`)
    .join("\n");

  const offices = locations
    .map((l) => `- ${l.name}: ${l.full}`)
    .join("\n");

  const cityLines = cities
    .map((c) => `- ${c.name}, Utah (${c.county} County): ${brand.domain}/utah/${c.slug}`)
    .join("\n");

  const body = `# ${brand.name} (CPS)

> ${brand.tagline}. Compassionate mental health and behavioral health care serving Utah's Wasatch Front since ${brand.since}.

Website: ${brand.domain}
Email: ${brand.email}
Hours: ${brand.hours}

## About
${brand.name} is a Utah behavioral health practice with ${brand.providerCount} licensed providers — psychologists, counselors, social workers, and medication providers. Care is available in person at three offices and via secure telehealth anywhere in Utah. ${insuranceLine}

## Offices
${offices}

## Services
${services}

## Service Area (Wasatch Front cities)
Overview: ${brand.domain}/service-area
${cityLines}

## Contact
Subscribe for CPS updates at ${brand.domain}/#subscribe or request an appointment at ${brand.domain}/#request. In-person and telehealth appointments available.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
