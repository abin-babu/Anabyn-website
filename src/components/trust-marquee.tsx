
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
    <div className="bg-brand-navy py-6 border-y border-brand-gold/20 overflow-hidden select-none">
      <div className="flex animate-marquee whitespace-nowrap">
        {[1, 2, 3].map(group => (
          <div key={group} className="flex shrink-0 items-center">
            {trustItems.map((item, idx) => (
              <div key={idx} className="flex items-center mx-12">
                <CircleCheck className="text-brand-gold w-5 h-5 mr-3" />
                <span className="text-white font-bold text-xs tracking-[0.2em] uppercase">{item}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
