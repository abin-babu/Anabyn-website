'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function WhyChooseUs() {
  const cards = [
    { icon: 'fa-award', title: 'Uncompromising Quality', desc: 'Every shipment undergoes rigorous multi-stage audits to ensure international standard compliance.' },
    { icon: 'fa-truck-fast', title: 'Global Logistics', desc: 'Seamless door-to-door delivery with our network of premier international freight partners.' },
    { icon: 'fa-tags', title: 'Competitive Pricing', desc: 'Leverage our direct factory alliances to get premium Indian goods at manufacturing costs.' },
    { icon: 'fa-fingerprint', title: 'Private Label & OEM', desc: 'Bespoke branding and custom product development tailored to your brand identity.' },
    { icon: 'fa-clock', title: 'Reliable Lead Times', desc: 'Precision production planning ensures your inventory is always stocked on schedule.' },
    { icon: 'fa-headset', title: 'Dedicated Support', desc: 'Personalized account management and 24/7 support for all your export queries.' }
  ];

  return (
    <section id="why" className="py-24 bg-white">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 reveal">
            <div>
              <span className="text-[#1B45CC] font-bold text-xs uppercase tracking-widest">Efficiency & Trust</span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#0D1B3E] mt-4 mb-6">
                The Partner Your Business Deserves
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
                We remove the complexities of international sourcing, providing a transparent and reliable bridge between India's manufacturing excellence and your warehouse.
              </p>
            </div>
            <Button asChild className="rounded-full bg-[#1B45CC] text-white font-bold px-8 hover:bg-[#2350D4]">
              <Link href="/#contact">Start a Partnership →</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6 reveal">
            {cards.map((card, i) => (
              <div key={i} className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-navy-gradient flex items-center justify-center mb-4">
                  <i className={`fa-solid ${card.icon} text-[#C8A020] text-xl`} />
                </div>
                <h4 className="font-bold text-[#0D1B3E] mb-2">{card.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
