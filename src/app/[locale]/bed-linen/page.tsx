import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { BedLinenContent } from './bed-linen-content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bed Linen Exporter India — Sheets, Duvet Covers & Pillowcases',
  description: "Premium bed linen exported from India. High thread-count sheets, duvet covers, and pillowcases for hospitality and retail. Verified Indian quality. View catalog.",
};

export default async function BedLinenPage({ params }: { params: { locale: string } }) {
  const { locale } = await params;

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
        'name': 'Bed Linen',
        'item': `https://www.anabyn.com/${locale}/bed-linen`
      }
    ]
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#060A14] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <BedLinenContent />
      </main>
      <Footer />
    </div>
  );
}
