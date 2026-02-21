'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function WhyAnabyn() {
  const cards = [
    { icon: 'fa-handshake', title: 'Exclusive Manufacturer Access', desc: 'Better pricing and quality than dealing directly with factories through our preferred alliances.' },
    { icon: 'fa-globe', title: 'Global Shipping Expertise', desc: 'Hassle-free logistics with strong freight and cargo partners worldwide for seamless delivery.' },
    { icon: 'fa-award', title: 'Quality That Speaks for Itself', desc: 'Rigorous multi-stage inspections, certifications, and sample approvals on every single order.' },
    { icon: 'fa-eye', title: 'Transparent & Reliable', desc: 'Real-time updates, ethical sourcing, and clear communication throughout the production cycle.' },
    { icon: 'fa-palette', title: 'Tailored Solutions', desc: 'We support retail chains, wholesalers, private labels, and distributors with customized offerings.' },
    { icon: 'fa-headset', title: 'Dedicated Account Manager', desc: 'One dedicated contact for every client — responsive, expert, and proactive partner for your business.' }
  ];

  return (
    <section id="why" className="py-24 bg-white overflow-hidden">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 fade-up">
            <div>
              <span className="text-[#1B45CC] font-bold text-xs uppercase tracking-widest">Efficiency & Trust</span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#0D1B3E] mt-4 mb-6 leading-tight">
                The Partner Your <br /> Business Deserves
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
                We remove the complexities of international sourcing, providing a transparent and reliable bridge between India's manufacturing excellence and your warehouse.
              </p>
            </div>
            <Button asChild size="lg" className="rounded-full bg-gold-gradient text-[#0D1B3E] font-bold px-10 hover:scale-105 transition-transform border-none">
              <Link href="#contact">Start a Partnership</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {cards.map((card, i) => (
              <div key={i} className="p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 fade-up">
                <div className="w-14 h-14 rounded-xl bg-navy-gradient flex items-center justify-center mb-6">
                  <i className={`fa-solid ${card.icon} text-[#C8A020] text-xl`} />
                </div>
                <h4 className="font-bold text-[#0D1B3E] mb-3 text-lg">{card.title}</h4>
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
