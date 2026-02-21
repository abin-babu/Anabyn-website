'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function TrustBanner() {
  return (
    <section className="bg-gold-gradient py-12 px-4">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="reveal">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#0D1B3E] mb-2">
              Ready to Place Your First Order?
            </h2>
            <p className="text-[#0D1B3E]/80 font-medium">
              Join 500+ businesses worldwide who trust Anabyn Global Ventures LLP.
            </p>
          </div>
          <Button 
            asChild
            size="lg"
            className="reveal rounded-full bg-[#0D1B3E] text-white font-bold px-10 py-7 hover:scale-105 transition-transform"
          >
            <Link href="/#contact">🤝 Let's Talk Business</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
