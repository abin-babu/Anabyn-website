
'use client';

import { Badge } from '@/components/ui/badge';

const locations = [
  { name: 'United Kingdom', flag: '🇬🇧' },
  { name: 'UAE', flag: '🇦🇪' },
  { name: 'Germany', flag: '🇩🇪' },
  { name: 'USA', flag: '🇺🇸' },
  { name: 'Australia', flag: '🇦🇺' },
  { name: 'Japan', flag: '🇯🇵' },
  { name: 'Italy', flag: '🇮🇹' },
  { name: 'France', flag: '🇫🇷' },
];

export function TrustedBuyers() {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <p className="text-sm font-bold uppercase tracking-widest text-[#1B3A8A]">Trusted by buyers in:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {locations.map((loc) => (
              <Badge 
                key={loc.name} 
                variant="outline" 
                className="bg-[#1B3A8A] text-white border-[#C9A243] px-4 py-1.5 rounded-full text-xs font-bold transition-transform hover:scale-105"
              >
                <span className="mr-2">{loc.flag}</span> {loc.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
