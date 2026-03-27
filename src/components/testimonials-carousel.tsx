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
import { Star, Quote, ExternalLink } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface TestimonialData {
  quote: string;
  name: string;
  title: string;
  company: string;
  country: string;
  countryCode: string;
  avatar: string | null;
  companyLogo: string | null;
  verifyUrl: string | null;
  rating: number;
}

const homeTestimonials: TestimonialData[] = [
  {
    quote: "Exceptional quality towels — our guests rate them best in class.",
    name: "James Mitchell",
    title: "Procurement Director",
    company: "Premier Hotel Group",
    country: "United Kingdom",
    countryCode: "GB",
    avatar: null,
    companyLogo: null,
    verifyUrl: null,
    rating: 5,
  },
  {
    quote: "Reliable, on-time every time. The bed linen sells out in weeks.",
    name: "Sarah Al-Rashid",
    title: "Retail Buyer",
    company: "Al-Rashid Home Textiles",
    country: "United Arab Emirates",
    countryCode: "AE",
    avatar: null,
    companyLogo: null,
    verifyUrl: null,
    rating: 5,
  },
  {
    quote: "Best cotton quality I've sourced. Anabyn's detail is unmatched.",
    name: "Marco De Luca",
    title: "Import Manager",
    company: "De Luca Tessuti Srl",
    country: "Italy",
    countryCode: "IT",
    avatar: null,
    companyLogo: null,
    verifyUrl: null,
    rating: 5,
  },
];

// Helper to get initials from name
const getInitials = (name: string) => name.split(' ').map(n => n[0]).join('').toUpperCase();

// Helper to convert ISO code to flag emoji
const getFlagEmoji = (countryCode: string) => {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};

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
                    <div className="relative w-[60px] h-[60px] mb-6 z-10">
                      {t.avatar ? (
                        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#C9A243]">
                          <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                        </div>
                      ) : (
                        <div className="w-full h-full rounded-full bg-[#0D1F3C] border-2 border-[#C9A243] flex items-center justify-center text-[#C9A243] font-bold text-lg">
                          {getInitials(t.name)}
                        </div>
                      )}
                    </div>

                    {/* Rating Stars */}
                    <div className="flex justify-center gap-1 mb-6 text-[#C9A243] relative z-10">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          fill={i < t.rating ? "currentColor" : "none"} 
                          className={i < t.rating ? "" : "text-white/20"}
                        />
                      ))}
                    </div>

                    <p className="text-xl md:text-2xl leading-relaxed text-white font-medium italic mb-10 relative z-10 max-w-3xl">
                      "{t.quote}"
                    </p>

                    <div className="space-y-2 mb-8 relative z-10">
                      <h4 className="font-bold text-white text-xl">{t.name}</h4>
                      <p className="text-white/60 text-xs font-medium">
                        {t.title} at {' '}
                        {t.verifyUrl ? (
                          <a 
                            href={t.verifyUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-[#C9A243] hover:underline inline-flex items-center gap-1"
                          >
                            {t.company} <ExternalLink size={10} />
                          </a>
                        ) : (
                          t.company
                        )}
                      </p>
                      <p className="text-brand-gold-light/40 text-[10px] font-bold uppercase tracking-widest pt-1">
                        {getFlagEmoji(t.countryCode)} {t.country}
                      </p>
                    </div>

                    {/* Company Logo Section */}
                    {t.companyLogo && (
                      <div className="mt-auto pt-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        <div className="relative w-[100px] h-[30px]">
                          <Image src={t.companyLogo} alt={`${t.company} logo`} fill className="object-contain" />
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

        {/* Leave a Review CTA */}
        <div className="mt-16 text-center border-t border-white/5 pt-12">
          <p className="text-white/40 text-[11px] font-bold uppercase tracking-[0.2em] mb-4">Happy with Anabyn? Share your experience.</p>
          <Button asChild variant="link" className="text-[#C9A243]/60 hover:text-[#C9A243] text-xs font-black uppercase tracking-widest p-0 h-auto group">
            <a href="https://share.google/Icw2FF4giN0LJdQcz" target="_blank" rel="noopener noreferrer">
              Write a Google Review <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
