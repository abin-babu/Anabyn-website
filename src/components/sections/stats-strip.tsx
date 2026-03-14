'use client';

const stats = [
  { target: 50, label: "Export Destinations", suffix: "+" },
  { target: 1000, label: "Units Shipped Annually", suffix: "K+" },
  { target: 500, label: "Global Clients", suffix: "+" },
  { target: 99, label: "On-Time Delivery", suffix: "%" }
];

export function StatsStrip() {
  return (
    <section className="py-20 bg-navy-gradient overflow-hidden">
      <div className="container px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center space-y-4">
              <div className="inline-block relative">
                <h3 
                  className="text-5xl md:text-6xl font-playfair font-bold text-[#C8A020]"
                  data-target={stat.target}
                  data-suffix={stat.suffix}
                >
                  {stat.target}{stat.suffix}
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
