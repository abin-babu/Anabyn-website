import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { TerryTowelsContent } from './terry-towels-content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Premium Terry Towels Exporter India — Bath, Hand & Hotel | Anabyn',
  description: 'Luxury terry towels exported from India — bath, hand, beach and hotel collections. GSM-spec quality, AQL 2.5 inspected, worldwide shipping.',
};

export default function TerryTowelsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#060A14] text-white">
      <Header />
      <main className="flex-1">
        <TerryTowelsContent />
      </main>
      <Footer />
    </div>
  );
}
