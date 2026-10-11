import type { MetadataRoute } from "next";
import { brand } from "@/lib/data";
import { CITY_SLUGS } from "@/lib/geo";
import { SOLUTION_SLUGS } from "@/lib/services";
import { POSTS } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const cityRoutes: MetadataRoute.Sitemap = CITY_SLUGS.map((slug) => ({
    url: `${brand.domain}/utah/${slug}`,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = SOLUTION_SLUGS.map((slug) => ({
    url: `${brand.domain}/solutions/${slug}`,
  }));

  const postRoutes: MetadataRoute.Sitemap = POSTS.map((post) => ({
    url: `${brand.domain}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [
    {
      url: brand.domain,
    },
    {
      url: `${brand.domain}/booknow`,
    },
    {
      url: `${brand.domain}/service-area`,
    },
    {
      url: `${brand.domain}/blog`,
    },
    {
      url: `${brand.domain}/privacy`,
    },
    {
      url: `${brand.domain}/terms`,
    },
    ...serviceRoutes,
    ...postRoutes,
    ...cityRoutes,
  ];
}
