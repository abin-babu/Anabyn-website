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
    label: 'Containers', 
    sublabel: 'shipped yearly', 
    value: 500, 
    suffix: '+' 
  },
  { 
    label: 'Units exported', 
    sublabel: 'since 2020', 
    value: 5, 
    suffix: 'M+' 
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
        <div className="grid grid-cols-2 lg:grid-cols-4 reveal-stagger">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group py-10 lg:py-0 stat-item-box">
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
