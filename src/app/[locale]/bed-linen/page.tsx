import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { BedLinenContent } from './bed-linen-content';
import type { Metadata } from 'next';
import { JsonLd } from '@/components/json-ld';
import { getBreadcrumbSchema, getFAQSchema, getProductCollectionSchema } from '@/lib/schema-utils';

export const metadata: Metadata = {
  title: 'Bed Linen Exporter India — Sheets, Duvet Covers & Pillowcases',
  description: "Premium bed linen exported from India. High thread-count sheets, duvet covers, and pillowcases for hospitality and retail. Verified Indian quality. View catalog.",
};

const faqItems = [
  { q: "What is the difference between Percale and Sateen weaves?", a: "Percale is a classic one-over-one weave that is matte, crisp, and cool to the touch. Sateen is a four-over-one weave that results in a silky-smooth finish with a subtle luster." },
  { q: "What thread counts do you supply for hotel use?", a: "We supply thread counts ranging from 200TC (institutional) to 600TC+ (luxury). 300TC Sateen is our most requested grade for 4 and 5-star properties." },
  { q: "Can you manufacture bed linen to custom mattress sizes?", a: "Yes, we handle bespoke specifications for non-standard mattresses, including extra-deep fitted sheets and custom-sized duvet covers for hospitality groups." },
  { q: "Is your bed linen durable for industrial laundering?", a: "Absolutely. Our bed linen is mercerized and reinforced with high-strength stitching to withstand 200+ commercial wash cycles without pilling or losing shape." }
];

export default async function BedLinenPage({ params }: { params: { locale: string } }) {
  const { locale } = await params;

  return (
    <div className="flex min-h-screen flex-col bg-[#060A14] text-white">
      <Header />
      <JsonLd data={getBreadcrumbSchema([
        { name: 'Home', url: `/${locale}` },
        { name: 'Products', url: `/${locale}/products` },
        { name: 'Bed Linen', url: `/${locale}/bed-linen` }
      ])} />
      <JsonLd data={getFAQSchema(faqItems)} />
      <JsonLd data={getProductCollectionSchema({
        name: 'Premium Bed Linen Collection — Export Grade',
        description: 'Exquisitely woven bed sheets, duvet covers and pillowcases in percale and sateen weaves. Thread counts 200–1000TC.',
        url: `/${locale}/bed-linen`,
        image: 'https://images.unsplash.com/photo-1617744257724-6fafec25442f?w=1200&q=80'
      })} />

      <main className="flex-1">
        <BedLinenContent />
      </main>
      <Footer />
    </div>
  );
}
