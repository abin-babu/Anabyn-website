'use client';

export function Certifications() {
  const certs = [
    { icon: '🏅', title: 'ISO 9001:2015', desc: 'Quality Management System' },
    { icon: '🏥', title: 'ISO 13485', desc: 'Medical Device Quality' },
    { icon: '🇪🇺', title: 'CE Marking', desc: 'European Conformity' },
    { icon: '🇺🇸', title: 'FDA Marked', desc: 'US Market Compliance' },
    { icon: '🧵', title: 'OEKO-TEX®', desc: 'Textile Safety Standard' },
    { icon: '🌿', title: 'GOTS Certified', desc: 'Organic Textile Standard' }
  ];

  return (
    <section id="certifications" className="py-24 bg-white overflow-hidden">
      <div className="container px-4 text-center">
        <div className="max-w-3xl mx-auto mb-20 fade-up">
          <span className="text-[#1B45CC] font-bold text-xs uppercase tracking-[0.2em]">Global Compliance</span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#0D1B3E] mt-4 mb-6">
            Certified to International Standards
          </h2>
          <div className="w-20 h-1 bg-[#C8A020] mx-auto" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
          {certs.map((cert, i) => (
            <div key={i} className="group p-8 rounded-2xl border-2 border-gray-50 hover:border-[#C8A020] hover:shadow-xl transition-all duration-300 fade-up">
              <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all transform group-hover:scale-110 duration-300">{cert.icon}</div>
              <h4 className="font-bold text-[#0D1B3E] mb-2 text-sm leading-tight">{cert.title}</h4>
              <p className="text-gray-400 text-[10px] leading-relaxed uppercase font-bold tracking-wider">{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
