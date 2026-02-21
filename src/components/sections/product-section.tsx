'use client';

import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export function ProductSection() {
  const categories = [
    {
      title: 'Bed Linen',
      image: 'https://images.unsplash.com/photo-1617744257724-6fafec25442f',
      description: 'Experience pure luxury with our premium bed sheets and duvet covers, designed for the most discerning hotels and homes.',
      features: [
        'Egyptian & Supima Cotton',
        '200–1200 Thread Count',
        'Custom Sizing & Embroidery',
        'Hospitality & Retail Grade'
      ]
    },
    {
      title: 'Bath Linen',
      image: 'https://images.unsplash.com/photo-1761992157695-f0dd8d6d2db6',
      description: 'Wrap your guests in comfort with our plush towels and bathrobes, crafted for superior absorbency and lasting softness.',
      features: [
        'Zero-Twist & Combed Cotton',
        '400–700 GSM Options',
        'Anti-Microbial Treatment',
        'Spa, Hotel & Healthcare Use'
      ]
    },
    {
      title: 'Medical Disposables',
      image: 'https://images.unsplash.com/photo-1631804959147-75a1b5a837e4',
      description: 'Reliable healthcare supplies meeting stringent international standards, ensuring safety and hygiene in every clinical setting.',
      features: [
        'CE & ISO 13485 Certified',
        'EO Sterilised Options',
        'SMS / PP Non-Woven Fabric',
        'Hospital & Clinic Grade'
      ]
    }
  ];

  return (
    <section id="products" className="py-24 bg-[#F5F7FA]">
      <div className="container px-4">
        <div className="text-center mb-16 reveal">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#0D1B3E] mb-4">
            Three Categories, One Standard of Excellence
          </h2>
          <div className="w-20 h-1 bg-[#C8A020] mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, i) => (
            <Card key={i} className="group overflow-hidden border-none shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white reveal">
              <div className="relative h-[240px] overflow-hidden">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-[#0D1B3E] text-white px-4 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full">
                  Category
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-bold text-[#0D1B3E] mb-4">{cat.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {cat.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {cat.features.map((f, idx) => (
                    <li key={idx} className="flex items-center text-sm text-[#0D1B3E]/80">
                      <i className="fa-solid fa-diamond text-[#C8A020] text-[8px] mr-3" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={`/#contact?category=${cat.title.replace(' ', '')}`}
                  className="inline-flex items-center font-bold text-[#1B45CC] group/link"
                >
                  <span className="relative">
                    Enquire Now →
                    <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-[#C8A020] scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left" />
                  </span>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
