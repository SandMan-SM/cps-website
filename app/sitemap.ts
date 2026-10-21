import type { MetadataRoute } from "next";
import { brand } from "@/lib/data";
import { CITY_SLUGS } from "@/lib/geo";
import { SOLUTION_SLUGS } from "@/lib/services";
import { POSTS } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const cityRoutes: MetadataRoute.Sitemap = CITY_SLUGS.map((slug) => ({
    url: `${brand.domain}/utah/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = SOLUTION_SLUGS.map((slug) => ({
    url: `${brand.domain}/solutions/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const postRoutes: MetadataRoute.Sitemap = POSTS.map((post) => ({
    url: `${brand.domain}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    {
      url: brand.domain,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${brand.domain}/booknow`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${brand.domain}/service-area`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${brand.domain}/blog`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${brand.domain}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${brand.domain}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...serviceRoutes,
    ...postRoutes,
    ...cityRoutes,
  ];
}
