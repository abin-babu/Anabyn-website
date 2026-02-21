'use client';

import { Star } from 'lucide-react';

const reviews = [
  {
    author: "Procurement Manager",
    company: "5-Star Hotel Group",
    text: "Anabyn's attention to detail and commitment to quality is unmatched. They are our go-to partner for all our hotel linen needs. The process was seamless from start to finish."
  },
  {
    author: "Supply Chain Head",
    company: "International Hospitality Brand",
    text: "The quality of the uniforms and the efficiency of their export process have made them an invaluable part of our supply chain. Highly recommended for international sourcing."
  },
  {
    author: "General Manager",
    company: "Luxury Resort, Middle East",
    text: "Reliable, professional, and always on time. Anabyn Global Ventures truly understands the needs of the international hospitality market. A pleasure to work with."
  }
];

export function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-navy-gradient text-white overflow-hidden">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-20 fade-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Trusted by Industry Leaders
          </h2>
          <div className="flex flex-col items-center gap-3">
             <div className="flex items-center gap-1 text-[#C8A020]">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 fill-current" />)}
             </div>
             <p className="text-white/60 font-medium tracking-widest uppercase text-[11px]">
                4.9 Rating — Based on real Google Reviews
             </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-3xl relative fade-up">
              <div className="absolute top-8 left-10 text-6xl font-playfair text-[#C8A020]/20">“</div>
              <blockquote className="relative z-10 text-lg leading-relaxed text-white/90 italic mb-8">
                {rev.text}
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-10 h-1 bg-[#C8A020]" />
                <div>
                   <p className="font-bold text-sm">{rev.author}</p>
                   <p className="text-white/50 text-xs">{rev.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 fade-up">
          <a 
            href="https://share.google/Icw2FF4giN0LJdQcz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-[#0D1B3E] font-bold px-8 py-4 rounded-full hover:bg-[#C8A020] hover:text-white transition-all shadow-xl"
          >
            <i className="fa-brands fa-google mr-3" />
            Read More Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
