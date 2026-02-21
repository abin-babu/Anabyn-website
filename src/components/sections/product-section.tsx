'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const products = [
  {
    id: 1,
    cat: 'hospitality',
    title: 'Hotel Bed Sheets (Flat/Fitted)',
    spec: '144–600 TC · Cotton/Blends · Percale/Sateen',
    description: 'Premium quality flat and fitted sheets designed for luxury hotels, resorts, and serviced apartments. Available in a wide range of thread counts and weaves.',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',
    link: 'https://wa.me/919495613121?text=Hi%2C%20I%27m%20interested%20in%20Hotel%20Bed%20Sheets.'
  },
  {
    id: 2,
    cat: 'hospitality',
    title: 'Hotel Towels (Bath, Hand, Face)',
    spec: '400–800 GSM · 100% Cotton · Terry/Velour',
    description: 'Luxuriously soft and highly absorbent towels for bath, hand, and face use. Crafted from premium 100% cotton with superior durability for high-volume laundry cycles.',
    image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=600&q=80',
    link: 'https://wa.me/919495613121?text=Hi%2C%20I%27m%20interested%20in%20Hotel%20Towels.'
  },
  {
    id: 3,
    cat: 'hospitality',
    title: 'Hospitality Uniforms & Workwear',
    spec: 'Poly-Cotton/Stretch · Stain-Resistant',
    description: 'Professional uniforms and workwear for hotel staff, restaurant teams, and hospitality professionals. Designed for comfort, durability, and brand consistency.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80',
    link: 'https://wa.me/919495613121?text=Hi%2C%20I%27m%20interested%20in%20Hospitality%20Uniforms.'
  },
  {
    id: 4,
    cat: 'medical',
    title: 'Syringes, Needles & IV Sets',
    spec: 'Sterile · ISO 13485 · CE/FDA Marked',
    description: 'Hospital-grade sterile syringes, needles, and IV administration sets. Fully certified for international healthcare standards and available in bulk export quantities.',
    image: 'https://images.unsplash.com/photo-1585837146751-a44117f3a6fd?w=600&q=80',
    link: 'https://wa.me/919495613121?text=Hi%2C%20I%27m%20interested%20in%20Syringes%20and%20IV%20Sets.'
  },
  {
    id: 5,
    cat: 'medical',
    title: 'Surgical & Examination Gloves',
    spec: 'Latex/Nitrile/Vinyl · Powder-Free Options',
    description: 'High-quality surgical and examination gloves available in latex, nitrile, and vinyl. Powder-free options available. Meets international safety and sterility standards.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80',
    link: 'https://wa.me/919495613121?text=Hi%2C%20I%27m%20interested%20in%20Surgical%20Gloves.'
  },
  {
    id: 6,
    cat: 'medical',
    title: 'Hospital Beds (ICU, Fowler)',
    spec: '150–250kg Capacity · Crank/Electric',
    description: 'Heavy-duty ICU and Fowler hospital beds available in manual crank and electric configurations. Designed for patient safety, caregiver convenience, and clinical durability.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80',
    link: 'https://wa.me/919495613121?text=Hi%2C%20I%27m%20interested%20in%20Hospital%20Beds.'
  }
];

export function ProductSection() {
  const [filter, setFilter] = useState('all');

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.cat === filter);

  return (
    <section id="products" className="py-24 bg-[#F5F7FA]">
      <div className="container px-4">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#0D1B3E] mb-6">
            Premium Products for Hospitality & Healthcare
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button 
              onClick={() => setFilter('all')}
              className={cn(
                "px-6 py-2 rounded-full border-2 transition-all font-bold text-sm",
                filter === 'all' ? "bg-[#1B45CC] border-[#1B45CC] text-white" : "border-[#1B45CC] text-[#1B45CC] hover:bg-[#1B45CC]/10"
              )}
            >
              All Products
            </button>
            <button 
              onClick={() => setFilter('hospitality')}
              className={cn(
                "px-6 py-2 rounded-full border-2 transition-all font-bold text-sm",
                filter === 'hospitality' ? "bg-[#1B45CC] border-[#1B45CC] text-white" : "border-[#1B45CC] text-[#1B45CC] hover:bg-[#1B45CC]/10"
              )}
            >
              🏨 Hospitality Supplies
            </button>
            <button 
              onClick={() => setFilter('medical')}
              className={cn(
                "px-6 py-2 rounded-full border-2 transition-all font-bold text-sm",
                filter === 'medical' ? "bg-[#1B45CC] border-[#1B45CC] text-white" : "border-[#1B45CC] text-[#1B45CC] hover:bg-[#1B45CC]/10"
              )}
            >
              🏥 Medical Supplies
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((p) => (
            <Card key={p.id} className="group overflow-hidden border-none shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white fade-up">
              <div className="relative h-[240px] overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-[#0D1B3E] text-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full">
                  {p.cat === 'hospitality' ? 'Hospitality' : 'Medical'}
                </div>
              </div>
              <CardContent className="p-8 flex flex-col h-[calc(100%-240px)]">
                <h3 className="text-xl font-bold text-[#0D1B3E] mb-2">{p.title}</h3>
                <p className="text-[#C8A020] text-xs font-bold uppercase tracking-wider mb-4">{p.spec}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                  {p.description}
                </p>
                <a 
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-bold text-[#1B45CC] group/link"
                >
                  <span className="relative">
                    Enquire Now →
                    <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-[#C8A020] scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left" />
                  </span>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
