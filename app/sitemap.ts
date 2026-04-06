import type { MetadataRoute } from "next";
import { services, locations } from "@/lib/services";

const BASE = "https://psychandcustodyevaluations.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const pages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
  ];

  // Service pages
  for (const svc of services) {
    pages.push({
      url: `${BASE}/${svc.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    });

    // Location sub-pages
    for (const loc of locations) {
      pages.push({
        url: `${BASE}/${svc.slug}/${loc.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  return pages;
}
