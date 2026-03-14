'use client';

import Image from 'next/image';

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#F5F7FA] overflow-hidden">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative fade-up">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
              <Image 
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80" 
                alt="Manufacturing Excellence" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
            {/* Floating Experience Card */}
            <div className="absolute bottom-[-40px] right-[-10px] md:right-[-40px] bg-[#0D1B3E] p-10 rounded-2xl shadow-2xl flex items-center gap-6 border border-[#C8A020]/30">
              <span className="text-6xl font-playfair font-bold text-[#C8A020]">10+</span>
              <div className="text-white">
                <p className="text-xs uppercase tracking-[0.2em] font-bold opacity-70">Years of</p>
                <p className="text-xl font-bold">Excellence</p>
              </div>
            </div>
          </div>

          <div className="space-y-8 fade-up">
            <div>
              <span className="text-[#1B45CC] font-bold text-xs uppercase tracking-widest">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#0D1B3E] mt-4 mb-8 leading-tight">
                Proudly Made in India, <br /> Trusted Worldwide
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Anabyn Global Ventures LLP was founded with a single mission: to connect India's vast manufacturing strength with international buyers who demand quality, reliability, and value.
                </p>
                <p>
                  We work directly with vetted manufacturers across India's leading production hubs to source, quality-inspect, and export premium hospitality and medical supplies to buyers in Europe, the Middle East, North America, and beyond.
                </p>
              </div>
            </div>

            <ul className="space-y-4">
              {[
                'Exclusive alliances with top-tier Indian manufacturers',
                'Multi-stage product inspections and sample approvals',
                'Ethical sourcing and fair trade practices',
                'Full export documentation support (LC, DP, TT)',
                'Private label and custom branding available'
              ].map((item, i) => (
                <li key={i} className="flex items-center text-[#0D1B3E] font-medium">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#C8A020]/10 flex items-center justify-center mr-4">
                    <i className="fa-solid fa-check text-[#C8A020] text-[10px]" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="inline-flex items-center bg-white border border-[#D8E0F0] rounded-full px-5 py-2.5 gap-4 shadow-sm">
               <Image 
                 src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" 
                 alt="India Flag" 
                 width={30}
                 height={20}
                 className="h-5 w-auto rounded-sm" 
                 loading="lazy"
               />
               <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0D1B3E]">Proudly Made in India 🇮🇳</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
