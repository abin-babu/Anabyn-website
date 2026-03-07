'use client';

import { CircleCheck } from 'lucide-react';

const trustItems = [
  "ISO 9001:2015 Certified",
  "CE Marked Medical Products",
  "IEC Registered Exporter",
  "FDA Registered Facility",
  "500+ Orders Fulfilled",
  "4.9★ Google Rating",
  "Global Logistics Partners",
  "Verified Indian Manufacturing"
];

export function TrustMarquee() {
  return (
    <div className="bg-brand-navy py-8 border-y border-brand-gold/20 overflow-hidden select-none">
      <div className="flex animate-marquee whitespace-nowrap">
        {[1, 2, 3].map(group => (
          <div key={group} className="flex shrink-0 items-center">
            {trustItems.map((item, idx) => (
              <div key={idx} className="flex items-center mx-16">
                <CircleCheck className="text-brand-gold w-6 h-6 mr-4" />
                <span className="text-white font-bold text-sm tracking-[0.3em] uppercase">{item}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
