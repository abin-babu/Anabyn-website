'use client';

export function Certifications() {
  const certs = [
    { icon: '🏅', title: 'ISO 9001:2015', desc: 'Quality Management System' },
    { icon: '🏥', title: 'ISO 13485', desc: 'Medical Device Quality' },
    { icon: '🇪🇺', title: 'CE Marking', desc: 'European Conformity' },
    { icon: '🧵', title: 'OEKO-TEX®', desc: 'Textile Safety Standard' },
    { icon: '🌿', title: 'GOTS Certified', desc: 'Organic Textile Standard' }
  ];

  return (
    <section id="certifications" className="py-24 bg-white">
      <div className="container px-4 text-center">
        <div className="max-w-3xl mx-auto mb-16 reveal">
          <span className="text-[#1B45CC] font-bold text-xs uppercase tracking-widest">Global Compliance</span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#0D1B3E] mt-4 mb-6">
            Certified to International Standards
          </h2>
          <p className="text-gray-500">
            Our commitment to quality is validated by major international certifications, ensuring that your business receives products that are safe, ethical, and superior in performance.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">
          {certs.map((cert, i) => (
            <div key={i} className="group p-8 rounded-2xl border-2 border-gray-50 hover:border-[#C8A020] transition-all duration-300 reveal">
              <div className="text-4xl mb-6">{cert.icon}</div>
              <h4 className="font-bold text-[#0D1B3E] mb-2">{cert.title}</h4>
              <p className="text-gray-400 text-xs leading-relaxed">{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
