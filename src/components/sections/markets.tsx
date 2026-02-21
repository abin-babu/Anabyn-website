'use client';

export function Markets() {
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

  return (
    <section id="markets" className="py-24 bg-navy-gradient">
      <div className="container px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-16 reveal">
          Exporting to 50+ Countries
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {countries.map((country, i) => (
            <div 
              key={i} 
              className="reveal p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#C8A020] hover:bg-white/10 transition-all duration-300 group cursor-default"
            >
              <div className="text-4xl mb-4 grayscale group-hover:grayscale-0 transition-all">{country.flag}</div>
              <span className="text-white/90 font-medium tracking-wide">{country.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
