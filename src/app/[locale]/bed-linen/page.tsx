import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { BedLinenContent } from './bed-linen-content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bed Linen Exporter India — Sheets, Duvet Covers & Pillowcases',
  description: 'Premium bed linen exported from India — sheets, duvet covers and pillowcases for hospitality and retail. Verified Indian manufacturing.',
};

export default function BedLinenPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#060A14] text-white">
      <Header />
      <main className="flex-1">
        <BedLinenContent />
      </main>
      <Footer />
    </div>
  );
}
