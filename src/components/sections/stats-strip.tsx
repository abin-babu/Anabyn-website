'use client';

import { useEffect, useState, useRef } from 'react';

export function StatsStrip() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const stats = [
    { target: 50, label: "Export Destinations" },
    { target: 1000, label: "Units Shipped Annually", suffix: "K+" },
    { target: 500, label: "Global Clients" },
    { target: 99, label: "On-Time Delivery", suffix: "%" }
  ];
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasStarted) {
        setHasStarted(true);
      }
    }, { threshold: 0.5 });

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (hasStarted) {
      stats.forEach((stat, index) => {
        let start = 0;
        const duration = 2000;
        const increment = stat.target / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= stat.target) {
            start = stat.target;
            clearInterval(timer);
          }
          setCounts(prev => {
            const next = [...prev];
            next[index] = Math.floor(start);
            return next;
          });
        }, 16);
      });
    }
  }, [hasStarted]);

  return (
    <section ref={sectionRef} className="py-20 bg-navy-gradient">
      <div className="container px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center space-y-4">
              <div className="inline-block relative">
                <h3 className="text-5xl md:text-6xl font-playfair font-bold text-[#C8A020]">
                  {counts[i]}{stat.suffix || '+'}
                </h3>
                <div className="mt-2 h-[2px] w-full bg-[#C8A020]/30" />
              </div>
              <p className="text-white/80 font-medium tracking-wide uppercase text-xs">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
