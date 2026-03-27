import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { TerryTowelsContent } from './terry-towels-content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Premium Terry Towels Exporter India — Bath, Hand & Hotel | Anabyn',
  description: "Luxury terry towels exported from India. Bath, hand, beach, and hotel collections crafted to your GSM spec with AQL 2.5 inspection. Browse our premium range.",
};

export default async function TerryTowelsPage({ params }: { params: { locale: string } }) {
  const { locale } = await params;

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': 'Premium Terry Towels — Export Collection',
    'description': 'Luxury terry towels exported from India. Bath, hand, beach and hotel collections. GSM-spec, AQL 2.5 inspected.',
    'brand': { '@type': 'Brand', 'name': 'Anabyn Global Ventures LLP' },
    'manufacturer': { '@type': 'Organization', 'name': 'Anabyn Global Ventures LLP' },
    'offers': { 
      '@type': 'Offer', 
      'availability': 'https://schema.org/InStock',
      'priceCurrency': 'USD', 
      'seller': { 
        '@type': 'Organization',
        'name': 'Anabyn Global Ventures LLP' 
      } 
    }
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': `https://www.anabyn.com/${locale}`
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Products',
        'item': `https://www.anabyn.com/${locale}/products`
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'Terry Towels',
        'item': `https://www.anabyn.com/${locale}/terry-towels`
      }
    ]
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#060A14] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <TerryTowelsContent />
      </main>
      <Footer />
    </div>
  );
}
