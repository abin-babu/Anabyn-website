
'use client';

import * as React from 'react';
import { useEffect, useState, useRef } from 'react';

const stats = [
  { label: 'Countries Reached', value: 50, suffix: '+' },
  { label: 'Containers Per Year', value: 500, suffix: '+' },
  { label: 'Units Exported', value: 5000000, suffix: '', isFormatted: true },
  { label: 'On-Time Delivery Rate', value: 99.2, suffix: '%' },
];

export function StatsSection() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (hasStarted) {
      stats.forEach((stat, i) => {
        const duration = 2000;
        const frameRate = 1000 / 60;
        const totalFrames = duration / frameRate;
        const increment = stat.value / totalFrames;
        
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            setCounts(prev => {
              const next = [...prev];
              next[i] = stat.value;
              return next;
            });
            clearInterval(timer);
          } else {
            setCounts(prev => {
              const next = [...prev];
              next[i] = current;
              return next;
            });
          }
        }, frameRate);
      });
    }
  }, [hasStarted]);

  const formatNumber = (num: number, isFormatted?: boolean) => {
    if (isFormatted) return Math.floor(num).toLocaleString();
    if (num % 1 === 0) return Math.floor(num);
    return num.toFixed(1);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-[#1B3A8A] text-white overflow-hidden relative">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center group">
              <div className="flex flex-col items-center justify-center">
                <span className="text-4xl md:text-6xl font-bold font-playfair text-[#C9A243] tabular-nums">
                  {formatNumber(counts[i], stat.isFormatted)}{stat.suffix}
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
