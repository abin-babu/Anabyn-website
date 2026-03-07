
'use client';

import * as React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { initialClients } from '@/lib/clients';
import { Badge } from '@/components/ui/badge';
import { Building2, Landmark, Truck } from 'lucide-react';
import Image from 'next/image';

export default function ClientsPage() {
  const sectors = [
    { name: 'Hotels & Resorts', icon: Landmark, color: 'bg-blue-50 text-blue-700' },
    { name: 'Hospitals & Clinics', icon: Building2, color: 'bg-green-50 text-brand-green' },
    { name: 'Distributors', icon: Truck, color: 'bg-amber-50 text-brand-gold' },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-white pt-24 pb-20">
        {/* Hero */}
        <section className="py-20 px-4 border-b">
          <div className="container mx-auto text-center max-w-4xl">
            <Badge variant="outline" className="text-brand-gold border-brand-gold mb-4 px-4 py-1">Our Network</Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-playfair text-brand-navy mb-6">Corporate Global Footprint</h1>
            <p className="text-xl text-muted-foreground">
              Partnering with industry giants across three core sectors to deliver Indian manufacturing excellence.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 py-20">
          <div className="space-y-32">
            {sectors.map((sector) => {
              const sectorClients = initialClients.filter(c => c.sector === sector.name);
              return (
                <div key={sector.name} className="animate-in fade-in slide-in-from-bottom-10 duration-1000">
                  <div className="flex items-center gap-4 mb-12 border-l-4 border-brand-gold pl-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${sector.color}`}>
                      <sector.icon size={24} />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold font-playfair text-brand-navy">{sector.name}</h2>
                      <p className="text-muted-foreground font-medium">Serving 150+ organizations in this sector</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {sectorClients.map((client) => (
                      <div 
                        key={client.id} 
                        className="aspect-[3/2] relative border rounded-2xl p-6 flex items-center justify-center grayscale hover:grayscale-0 hover:border-brand-gold/50 hover:shadow-xl transition-all duration-500 bg-secondary/5 group"
                      >
                        <Image 
                          src={client.logoUrl} 
                          alt={client.name} 
                          width={160} 
                          height={80} 
                          className="object-contain group-hover:scale-110 transition-transform duration-500" 
                        />
                        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Badge className="bg-brand-navy text-white text-[8px] px-1.5 h-4">Verified Client</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Marquee effect for bottom */}
          <div className="mt-40 border-t pt-20 overflow-hidden select-none">
            <p className="text-center text-xs font-bold text-muted-foreground uppercase tracking-[0.3em] mb-12">And 300+ other regional partners</p>
            <div className="flex gap-12 whitespace-nowrap animate-marquee">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="text-2xl font-playfair font-bold text-brand-navy/20 uppercase tracking-widest">
                  GLOBAL EXCELLENCE • DIRECT SOURCING • QUALITY ASSURED •
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
