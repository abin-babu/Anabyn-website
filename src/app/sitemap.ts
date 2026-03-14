import type { MetadataRoute } from 'next';

/**
 * Dynamically generates the sitemap.xml for the site.
 * Includes all core landing pages and technical blog articles.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.anabyn.com/en';
  const lastModified = new Date();

  // List of all active routes in the application
  const routes = [
    '', // Homepage
    '/terry-towels',
    '/bed-linen',
    '/hotel-collections',
    '/oem-private-label',
    '/about-us',
    '/certifications',
    '/export-process',
    '/contact',
    '/faq',
    '/blog',
    '/blog/best-gsm-hotel-bath-towels',
    '/blog/how-to-import-towels-from-india',
    '/blog/terry-vs-velour-towels',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'monthly',
    // Homepage gets priority 1, articles 0.8, others 0.9
    priority: route === '' ? 1 : route.includes('/blog/') ? 0.8 : 0.9,
  }));
}
