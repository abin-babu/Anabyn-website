
import { products } from '@/lib/products';
import { initialBlogPosts } from '@/lib/blog';

const BASE_URL = 'https://www.anabyn.com';

export async function GET() {
  const staticPages = [
    '',
    '/about-us',
    '/products',
    '/certifications',
    '/how-we-export',
    '/faq',
    '/customization',
    '/quality',
    '/request-quote',
    '/blog',
    '/careers',
    '/sustainability',
    '/privacy-policy',
    '/terms-of-service',
  ];

  const productUrls = products.map(p => `/products/${p.slug}`);
  const blogUrls = initialBlogPosts.map(p => `/blog/${p.slug}`);

  const allUrls = [...staticPages, ...productUrls, ...blogUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allUrls
        .map(url => {
          return `
            <url>
              <loc>${BASE_URL}${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>${url === '' ? '1.0' : '0.8'}</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
