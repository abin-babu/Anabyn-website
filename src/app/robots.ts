import type { MetadataRoute } from 'next';

/**
 * Generates the robots.txt file for the site.
 * Allows all crawlers and provides the sitemap location.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.anabyn.com/sitemap.xml',
  };
}
