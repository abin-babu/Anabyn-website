'use client';

const options = [
  { icon: 'fa-tag', title: 'Private Label', desc: 'Your brand name and logo on every product — full OEM support available.' },
  { icon: 'fa-palette', title: 'Custom Colors & Designs', desc: 'Choose from a wide range of colours, patterns, and weave styles.' },
  { icon: 'fa-ruler-combined', title: 'Custom Sizing', desc: 'All products available in custom dimensions to match your exact requirements.' },
  { icon: 'fa-box-open', title: 'Custom Packaging', desc: 'Branded boxes, polybags, and retail-ready packaging for your specific market.' },
  { icon: 'fa-certificate', title: 'Certification Support', desc: 'We help you meet local import regulations and specific certification requirements.' },
  { icon: 'fa-vial', title: 'Sample Orders', desc: 'Request samples before placing a bulk order — no minimum on sample requests.' }
];

export function Customization() {
  return (
    <section id="customization" className="py-24 bg-navy-gradient text-white overflow-hidden">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-20 fade-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Tailored to Your Brand & Specifications
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            We offer full customization support — from fabric selection to private label packaging — so every product feels uniquely yours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {options.map((opt, i) => (
            <div key={i} className="group p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#C8A020] transition-all duration-300 fade-up">
              <div className="w-14 h-14 rounded-2xl bg-[#C8A020]/20 flex items-center justify-center mb-8 group-hover:bg-[#C8A020] transition-colors">
                <i className={`fa-solid ${opt.icon} text-[#C8A020] text-xl group-hover:text-[#0D1B3E] transition-colors`} />
              </div>
              <h4 className="font-bold text-xl mb-4 text-[#C8A020]">{opt.title}</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                {opt.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
