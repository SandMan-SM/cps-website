import { brand } from "@/lib/data";
import { cities } from "@/lib/geo";
import { servicePages } from "@/lib/services";

// Plain-text summary for systems that choose to read it. Google Search does not
// require or give special treatment to llms.txt.
export const dynamic = "force-static";

export function GET() {
  const services = servicePages
    .map((s) => `- ${s.name}: ${s.metaDescription} ${brand.domain}/solutions/${s.slug}`)
    .join("\n");

  const cityLines = cities.map((c) => c.name).join(", ");

  const body = `# ${brand.name}

> ${brand.tagline}.

Website: ${brand.domain}

## About
${brand.name} helps people explore Utah-based solutions for health, home, business, family, education, careers, and everyday life. We are partnered with ${brand.partnerName} to point people in the right direction and help them find the best possible services for their needs.

## Solution guidance
${services}

## Utah communities
Overview: ${brand.domain}/service-area
Communities served: ${cityLines}
These are communities where people can request guidance, not office locations.

## Contact
Subscribe for resources at ${brand.domain}/#subscribe or request guidance at ${brand.domain}/#request. Service suitability, availability, credentials, costs, and coverage are confirmed by the provider or business you choose.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
