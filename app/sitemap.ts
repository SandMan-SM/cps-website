import type { MetadataRoute } from "next";
import { brand, officeCitySlugs } from "@/lib/data";
import { SERVICE_SLUGS } from "@/lib/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const cityRoutes: MetadataRoute.Sitemap = officeCitySlugs.map((slug) => ({
    url: `${brand.domain}/utah/${slug}`,
  }));

  const serviceRoutes: MetadataRoute.Sitemap = SERVICE_SLUGS.map((slug) => ({
    url: `${brand.domain}/services/${slug}`,
  }));

  return [
    {
      url: brand.domain,
    },
    {
      url: `${brand.domain}/service-area`,
    },
    ...serviceRoutes,
    ...cityRoutes,
  ];
}
