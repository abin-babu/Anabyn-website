
'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Star, Quote } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';

const homeTestimonials = [
  {
    text: "Exceptional quality towels — our guests rate them best in class.",
    author: "James Mitchell",
    role: "Hotel Group Director",
    country: "UK",
  },
  {
    text: "Reliable, on-time every time. The bed linen sells out in weeks.",
    author: "Sarah Al-Rashid",
    role: "Retail Buyer",
    country: "UAE",
  },
  {
    text: "Best cotton quality I've sourced. Anabyn's detail is unmatched.",
    author: "Marco De Luca",
    role: "Textile Importer",
    country: "Italy",
  },
];

export function TestimonialsCarousel() {
  return (
    <section className="py-24 bg-[#060A14] overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-white">Client Success Stories</h2>
          <div className="flex justify-center gap-1 text-[#C9A243] mt-4">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
          </div>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {homeTestimonials.map((t, idx) => (
              <CarouselItem key={idx} className="pl-4 md:basis-1/2 lg:basis-1/1">
                <Card className="h-full border-none shadow-2xl bg-white/5 backdrop-blur-sm relative overflow-hidden group p-8 md:p-16">
                  <CardContent className="p-0 text-center">
                    <Quote className="text-[#C9A243]/20 w-24 h-24 absolute -top-4 -left-4 -z-0" />
                    
                    <p className="text-2xl md:text-3xl leading-relaxed text-white font-medium italic mb-12 relative z-10">
                      "{t.text}"
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-bold text-white text-xl">{t.author}</h4>
                      <p className="text-[#C9A243] font-bold uppercase tracking-widest text-xs">
                        {t.role}, {t.country}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden lg:block">
            <CarouselPrevious className="bg-white/10 border-none text-[#C9A243] hover:bg-[#C9A243] hover:text-black" />
            <CarouselNext className="bg-white/10 border-none text-[#C9A243] hover:bg-[#C9A243] hover:text-black" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
