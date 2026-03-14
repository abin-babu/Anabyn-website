'use client';

import { Card, CardContent } from '@/components/ui/card';

const differenceData = [
  {
    title: 'Personal Attention',
    generic: 'Order number 48,302 in a 50,000-order queue',
    anabyn: 'Your dedicated account manager knows your business by name',
  },
  {
    title: 'Quality Consistency',
    generic: 'Batch variation is normal at scale',
    anabyn: 'Same GSM, same colour, same finish — every container, every time',
  },
  {
    title: 'Export Expertise',
    generic: 'You handle the logistics',
    anabyn: 'We handle documentation, customs, shipping and delivery — you receive',
  },
];

export function AnabynDifference() {
  return (
    <section className="py-24 bg-[#060A14] overflow-hidden border-t border-brand-gold/10">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white leading-tight">
            Not a commodity supplier. Not a fashion house. <br />
            <span className="text-brand-gold">The premium export partner in between.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {differenceData.map((item, i) => (
            <Card key={i} className="bg-[#0C1220] border-none shadow-2xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500 rounded-2xl">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-gold" />
              <CardContent className="p-10 space-y-8">
                <h3 className="text-xl font-bold uppercase tracking-widest text-[#1B3A8A]">
                  {item.title}
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] font-black uppercase text-gray-500 tracking-[0.2em] mb-2">Generic Exporter</p>
                    <p className="text-gray-400 text-sm font-medium">"{item.generic}"</p>
                  </div>
                  
                  <div className="pt-6 border-t border-white/5">
                    <p className="text-[10px] font-black uppercase text-brand-gold tracking-[0.2em] mb-2">The Anabyn Way</p>
                    <p className="text-white text-lg font-playfair italic leading-relaxed">
                      "{item.anabyn}"
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
