import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { TerryTowelsContent } from './terry-towels-content';
import type { Metadata } from 'next';
import { JsonLd } from '@/components/json-ld';
import { getBreadcrumbSchema, getFAQSchema, getProductCollectionSchema } from '@/lib/schema-utils';

export const metadata: Metadata = {
  title: 'Premium Terry Towels Exporter India — Bath, Hand & Hotel | Anabyn',
  description: "Luxury terry towels exported from India. Bath, hand, beach, and hotel collections crafted to your GSM spec with AQL 2.5 inspection. Browse our premium range.",
};

const faqItems = [
  { q: "What GSM is recommended for luxury hotel bath towels?", a: "For 5-star luxury resorts, we recommend 550–650 GSM. For standard hospitality or gym use, 400–450 GSM provides a balance of softness and rapid drying." },
  { q: "Do you offer custom branding on wholesale towels?", a: "Yes, we provide full OEM services including custom dobby borders, precision logo embroidery, and private label packaging for retail and hospitality brands." },
  { q: "What is the minimum order quantity (MOQ) for export?", a: "Standard MOQs for export towel orders typically start at 500 pieces per SKU for white towels and 1,000 pieces for custom dyed or branded items." },
  { q: "Are your towels certified for safety and quality?", a: "Our products are manufactured in ISO-certified units and we provide OEKO-TEX Standard 100 documentation on demand to ensure they are free from harmful substances." }
];

export default async function TerryTowelsPage({ params }: { params: { locale: string } }) {
  const { locale } = await params;

  return (
    <div className="flex min-h-screen flex-col bg-[#060A14] text-white">
      <Header />
      <JsonLd data={getBreadcrumbSchema([
        { name: 'Home', url: `/${locale}` },
        { name: 'Products', url: `/${locale}/products` },
        { name: 'Terry Towels', url: `/${locale}/terry-towels` }
      ])} />
      <JsonLd data={getFAQSchema(faqItems)} />
      <JsonLd data={getProductCollectionSchema({
        name: 'Premium Terry Towels — Export Collection',
        description: 'Luxury terry towels exported from India. Bath, hand, beach and hotel collections. GSM-spec, AQL 2.5 inspected.',
        url: `/${locale}/terry-towels`,
        image: 'https://images.unsplash.com/photo-1639298107851-058984903954?w=1200&q=80'
      })} />
      
      <main className="flex-1">
        <TerryTowelsContent />
      </main>
      <Footer />
    </div>
  );
}
