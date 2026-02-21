'use client';

import { Button } from '@/components/ui/button';
import { FaWhatsapp } from 'react-icons/fa';

export function TrustBanner() {
  return (
    <section className="bg-gold-gradient py-16 px-4">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
          <div className="fade-up space-y-4 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#0D1B3E] leading-tight">
              Ready to Place Your <br className="hidden md:block" /> First Order?
            </h2>
            <p className="text-[#0D1B3E]/80 font-medium text-lg">
              Join 500+ businesses worldwide who trust Anabyn Global Ventures LLP for consistent quality.
            </p>
          </div>
          <Button 
            asChild
            size="lg"
            className="fade-up rounded-full bg-[#0D1B3E] text-white font-bold px-12 py-8 hover:scale-105 transition-transform border-none text-lg shadow-2xl"
          >
            <a href="https://wa.me/919495613121?text=Hi%20Anabyn%2C%20I%27d%20like%20to%20start%20sourcing." target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="mr-3 h-6 w-6" /> Chat on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
