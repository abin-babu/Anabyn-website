import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.anabyn.com';
  const locales = ['en', 'ar', 'fr', 'es', 'de', 'hi'];
  
  const routes = [
    '',
    '/about-us',
    '/products',
    '/bed-linen',
    '/terry-towels',
    '/hotel-collections',
    '/certifications',
    '/how-we-export',
    '/oem-private-label',
    '/export-process',
    '/faq',
    '/blog',
    '/sustainability',
    '/testimonials',
    '/quality',
    '/inquiry',
    '/request-quote'
  ];

  const entries: MetadataRoute.Sitemap = [];

  routes.forEach((route) => {
    locales.forEach((locale) => {
      entries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
      });
    });
  });

  return entries;
}
