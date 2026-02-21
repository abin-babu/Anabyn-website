'use client';

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#F5F7FA]">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative reveal">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1526290766257-c015850e4629" 
                alt="Manufacturing Excellence" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Experience Card */}
            <div className="absolute bottom-[-30px] right-[-10px] md:right-[-30px] bg-[#0D1B3E] p-8 rounded-xl shadow-2xl flex items-center gap-6">
              <span className="text-5xl font-playfair font-bold text-[#C8A020]">10+</span>
              <div className="text-white">
                <p className="text-xs uppercase tracking-widest font-bold opacity-70">Years of</p>
                <p className="text-lg font-bold">Excellence</p>
              </div>
            </div>
          </div>

          <div className="space-y-8 reveal">
            <div>
              <span className="text-[#1B45CC] font-bold text-xs uppercase tracking-widest">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#0D1B3E] mt-4 mb-6 leading-tight">
                Proudly Made in India, <br /> Trusted Worldwide
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded on the principles of trust and transparency, Anabyn Global Ventures LLP has emerged as a leader in exporting premium Indian textiles and medical supplies. We don't just ship products; we build long-term value for our global partners.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By maintaining direct alliances with India's most advanced mills and manufacturing units, we ensure that every thread and every device reflects the high standards of modern Indian industry.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                'Direct factory sourcing from India\'s finest mills',
                'Strict quality audits at every production stage',
                'Ethical manufacturing and fair trade practices',
                'Full export documentation support (LC, DP, TT)'
              ].map((item, i) => (
                <li key={i} className="flex items-center text-[#0D1B3E] font-medium">
                  <i className="fa-solid fa-check text-[#C8A020] mr-4" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="inline-flex items-center bg-white border rounded-full px-4 py-2 gap-3 shadow-sm">
               <img src="https://flagcdn.com/in.svg" alt="India Flag" className="h-4 w-auto rounded-sm" />
               <span className="text-xs font-bold uppercase tracking-widest text-[#0D1B3E]">Proudly Made in India 🇮🇳</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
