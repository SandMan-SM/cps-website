import type { MetadataRoute } from 'next';

const BASE = 'https://psychandcustodyevaluations.com';

export default function robots(): MetadataRoute.Robots {
  // Block crawlers on Vercel preview deploys so duplicate-content
  // URLs don't get indexed. Production keeps everything open except
  // routes that have no SEO value or contain PII.
  const isProduction =
    process.env.VERCEL_ENV === 'production' ||
    process.env.NODE_ENV === 'production';

  return {
    rules: isProduction
      ? [
          {
            userAgent: '*',
            allow: '/',
            // /api blocks the analytics/lead endpoints; /resources can stay
            // open since the pages are user-facing PDFs and forms.
            disallow: ['/api/', '/admin/'],
          },
        ]
      : [{ userAgent: '*', disallow: '/' }],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  };
}
