
'use client';

import { Award, ShieldCheck, BadgeCheck, FileCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const certs = [
  { name: 'ISO 9001:2015', icon: Award, desc: 'Quality Management' },
  { name: 'CE Marked', icon: BadgeCheck, desc: 'EU Compliance' },
  { name: 'FDA Registered', icon: ShieldCheck, desc: 'US Compliance' },
  { name: 'IEC Code', icon: FileCheck, desc: 'Export Authority' }
];

export function CertificationsPreview() {
  return (
    <section className="py-24 bg-brand-navy text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-gold rounded-full blur-[120px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <span className="text-brand-gold font-bold text-xs uppercase tracking-[0.3em]">Compliance Hub</span>
            <h2 className="text-4xl md:text-6xl font-playfair font-bold leading-tight">Certified to Global Standards</h2>
            <p className="text-white/70 text-xl leading-relaxed">Every shipment is verified for technical capacity and ethical compliance. We bridge the gap between Indian manufacturing and your market's regulatory needs.</p>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-brand-gold text-brand-navy font-black h-14 px-8 rounded-xl shadow-2xl shadow-brand-gold/20">
                <Link href="/certifications">Explore Compliance Hub <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {certs.map((c) => (
              <div key={c.name} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-gold transition-all duration-300 group">
                <c.icon className="w-10 h-10 text-brand-gold mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-bold mb-1">{c.name}</h4>
                <p className="text-xs text-white/50 uppercase tracking-widest font-bold">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
