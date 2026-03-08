import { MetadataRoute } from 'next'
import { products } from '@/lib/products'
import { initialBlogPosts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.anabyn.com'
  
  // Static routes
  const staticRoutes = [
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
    '/clients',
    '/testimonials',
    '/downloads'
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Product routes
  const productRoutes = products.map(p => ({
    url: `${baseUrl}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Blog routes
  const blogRoutes = initialBlogPosts.map(p => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...productRoutes, ...blogRoutes]
}
