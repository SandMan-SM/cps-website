import type { MetadataRoute } from "next";
import { brand, officeCitySlugs } from "@/lib/data";
import { SERVICE_SLUGS } from "@/lib/services";
import { POSTS } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const cityRoutes: MetadataRoute.Sitemap = officeCitySlugs.map((slug) => ({
    url: `${brand.domain}/utah/${slug}`,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = SERVICE_SLUGS.map((slug) => ({
    url: `${brand.domain}/services/${slug}`,
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
    ...serviceRoutes,
    ...postRoutes,
    ...cityRoutes,
  ];
}
