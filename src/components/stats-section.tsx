'use client';

import * as React from 'react';

const stats = [
  { 
    label: 'Countries', 
    sublabel: 'from Kerala to the world', 
    value: 50, 
    suffix: '+' 
  },
  { 
    label: 'On-time delivery', 
    sublabel: 'rate', 
    value: 99.2, 
    suffix: '%' 
  },
];

export function StatsSection() {
  return (
    <section className="py-20 stats-section-container overflow-hidden relative">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 lg:gap-24 reveal-stagger">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group py-6 md:py-0 min-w-[200px]">
              <div className="flex flex-col items-center justify-center px-4">
                <span 
                  className="stat-number-display tabular-nums"
                  data-target={stat.value}
                  data-suffix={stat.suffix}
                >
                  {stat.value}{stat.suffix}
                </span>
                <p className="stat-label-text">
                  <span className="font-bold text-[#0D1F3C]">{stat.label}</span>
                  <span className="block mt-1 opacity-80">{stat.sublabel}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Heritage Brand Footnote */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#6E6E73] italic">
            Statistics include output from our manufacturing heritage brand, Dezire Sportswear, established 2013.
          </p>
        </div>
      </div>
    </section>
  );
}
