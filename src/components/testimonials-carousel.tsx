
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from 'next/image';

interface TestimonialData {
  text: string;
  author: string;
  initials: string;
  role: string;
  country: string;
  avatar: string | null;
  companyLogo: string | null;
}

const homeTestimonials: TestimonialData[] = [
  {
    text: "Exceptional quality towels — our guests rate them best in class.",
    author: "James Mitchell",
    initials: "JM",
    role: "Hotel Group Director",
    country: "UK",
    avatar: null,
    companyLogo: null,
  },
  {
    text: "Reliable, on-time every time. The bed linen sells out in weeks.",
    author: "Sarah Al-Rashid",
    initials: "SA",
    role: "Retail Buyer",
    country: "UAE",
    avatar: null,
    companyLogo: null,
  },
  {
    text: "Best cotton quality I've sourced. Anabyn's detail is unmatched.",
    author: "Marco De Luca",
    initials: "MDL",
    role: "Textile Importer",
    country: "Italy",
    avatar: null,
    companyLogo: null,
  },
];

export function TestimonialsCarousel() {
  return (
    <section className="py-24 bg-[#060A14] overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair text-white">Client Success Stories</h2>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <a 
                  href="https://g.co/kgs/anabyn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex flex-col items-center mt-4 group cursor-pointer"
                >
                  <div className="flex justify-center gap-1 text-[#C9A243] transition-transform group-hover:scale-105">
                    {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                  </div>
                  <p className="text-white/60 font-bold uppercase tracking-widest text-[10px] mt-3 flex items-center gap-1 group-hover:text-white transition-colors">
                    4.9 Rating on Google ↗
                  </p>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>View our Google reviews</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
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
                  <CardContent className="p-0 text-center flex flex-col items-center h-full">
                    <Quote className="text-[#C9A243]/20 w-24 h-24 absolute -top-4 -left-4 -z-0" />
                    
                    {/* Avatar Section */}
                    <div className="relative w-[60px] h-[60px] mb-8 z-10">
                      {t.avatar ? (
                        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#C9A243]">
                          <Image src={t.avatar} alt={t.author} fill className="object-cover" />
                        </div>
                      ) : (
                        <div className="w-full h-full rounded-full bg-[#0D1F3C] border-2 border-[#C9A243] flex items-center justify-center text-[#C9A243] font-bold text-lg">
                          {t.initials}
                        </div>
                      )}
                    </div>

                    <p className="text-2xl md:text-3xl leading-relaxed text-white font-medium italic mb-12 relative z-10 max-w-3xl">
                      "{t.text}"
                    </p>

                    <div className="space-y-2 mb-8">
                      <h4 className="font-bold text-white text-xl">{t.author}</h4>
                      <p className="text-[#C9A243] font-bold uppercase tracking-widest text-xs">
                        {t.role}, {t.country}
                      </p>
                    </div>

                    {/* Company Logo Section */}
                    {t.companyLogo && (
                      <div className="mt-auto pt-6 grayscale opacity-50 hover:opacity-100 transition-opacity">
                        <div className="relative w-[100px] h-[30px]">
                          <Image src={t.companyLogo} alt="Company Logo" fill className="object-contain" />
                        </div>
                      </div>
                    )}
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
