'use client';

const countries = [
  { flag: '🇬🇧', name: 'United Kingdom' },
  { flag: '🇺🇸', name: 'United States' },
  { flag: '🇩🇪', name: 'Germany' },
  { flag: '🇦🇪', name: 'UAE' },
  { flag: '🇸🇦', name: 'Saudi Arabia' },
  { flag: '🇦🇺', name: 'Australia' },
  { flag: '🇨🇦', name: 'Canada' },
  { flag: '🇫🇷', name: 'France' },
  { flag: '🇸🇬', name: 'Singapore' },
  { flag: '🇯🇵', name: 'Japan' }
];

export function Markets() {
  return (
    <section id="markets" className="py-24 bg-[#F5F7FA] overflow-hidden">
      <div className="container px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#0D1B3E] mb-16 fade-up">
          Exporting to 50+ Countries
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {countries.map((country, i) => (
            <div 
              key={i} 
              className="fade-up p-8 rounded-2xl bg-white border border-[#D8E0F0] hover:border-[#C8A020] hover:shadow-xl transition-all duration-300 group cursor-default"
            >
              <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">{country.flag}</div>
              <span className="text-[#0D1B3E] font-bold tracking-widest uppercase text-xs">{country.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
