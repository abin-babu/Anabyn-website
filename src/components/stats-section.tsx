
'use client';

import * as React from 'react';

const stats = [
  { label: 'Countries Reached', value: 50, suffix: '+' },
  { label: 'Containers/Year', value: 500, suffix: '+' },
  { label: 'Units Exported', value: 5, suffix: 'M+' },
  { label: 'On-Time Delivery', value: 99.2, suffix: '%' },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-[#1B3A8A] text-white overflow-hidden relative">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="flex flex-col items-center justify-center">
                <span 
                  className="text-4xl md:text-6xl font-bold font-playfair text-[#C9A243] tabular-nums"
                  data-target={stat.value}
                  data-suffix={stat.suffix}
                >
                  {stat.value}{stat.suffix}
                </span>
                <p className="mt-4 text-white/70 font-body font-bold uppercase tracking-[0.2em] text-[10px]">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
