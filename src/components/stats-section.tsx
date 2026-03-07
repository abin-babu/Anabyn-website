'use client';

import * as React from 'react';
import { ShieldCheck, Globe, PackageCheck, Star } from 'lucide-react';

const stats = [
  { label: 'Orders Fulfilled', value: 500, suffix: '+', icon: PackageCheck },
  { label: 'Countries Served', value: 20, suffix: '+', icon: Globe },
  { label: 'On-Time Delivery', value: 98, suffix: '%', icon: ShieldCheck },
  { label: 'Buyer Rating', value: 4.9, suffix: '/5', icon: Star },
];

export function StatsSection() {
  const [counts, setCounts] = React.useState(stats.map(() => 0));
  const sectionRef = React.useRef<HTMLElement>(null);
  const [hasStarted, setHasStarted] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  React.useEffect(() => {
    if (hasStarted) {
      stats.forEach((stat, i) => {
        const duration = 2000;
        const steps = 60;
        const increment = stat.value / steps;
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
        }, duration / steps);
      });
    }
  }, [hasStarted]);

  return (
    <section ref={sectionRef} className="py-24 bg-brand-navy text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent opacity-30" />
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center group fade-up visible">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/5 border border-white/10 mb-8 group-hover:bg-brand-gold group-hover:border-brand-gold transition-all duration-500 shadow-xl">
                <stat.icon className="w-10 h-10 text-brand-gold group-hover:text-brand-navy" />
              </div>
              <div className="flex items-center justify-center gap-1">
                <span className="text-5xl md:text-7xl font-bold font-playfair tabular-nums">
                  {stat.value % 1 === 0 ? Math.floor(counts[i]) : counts[i].toFixed(1)}
                </span>
                <span className="text-3xl md:text-4xl font-bold text-brand-gold">{stat.suffix}</span>
              </div>
              <p className="mt-4 text-white/60 font-body font-bold uppercase tracking-[0.3em] text-[10px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
