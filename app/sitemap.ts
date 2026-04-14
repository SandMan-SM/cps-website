import type { MetadataRoute } from "next";
import { services, locations } from "@/lib/services";
import { blogPosts } from "@/lib/blog-posts";

const BASE = "https://psychandcustodyevaluations.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const pages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/team`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/resources`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/hipaa`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
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

  // Blog pages
  pages.push({
    url: `${BASE}/blog`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  });

  for (const post of blogPosts) {
    pages.push({
      url: `${BASE}/blog/${post.slug}`,
      lastModified: post.date,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return pages;
}
