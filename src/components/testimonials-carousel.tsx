
'use client';

import * as React from 'react';
import { initialTestimonials, type Testimonial } from '@/lib/testimonials';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Star, Quote, CheckCircle2, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

export function TestimonialsCarousel() {
  const [filter, setFilter] = React.useState<'All' | 'Hospitality' | 'Medical'>('All');

  const filteredTestimonials = React.useMemo(() => {
    return filter === 'All' 
      ? initialTestimonials 
      : initialTestimonials.filter(t => t.productCategory === filter);
  }, [filter]);

  return (
    <section className="py-24 bg-brand-gold-light/10 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <Badge variant="outline" className="text-brand-gold border-brand-gold mb-4 uppercase tracking-widest px-4 py-1">
              Social Proof
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-playfair text-brand-navy">
              Trusted by Procurement Leaders Worldwide
            </h2>
          </div>
          <div className="flex bg-white p-1 rounded-full border border-brand-gold/20">
            {['All', 'Hospitality', 'Medical'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f as any)}
                className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                  filter === f ? 'bg-brand-navy text-white shadow-lg' : 'text-brand-navy hover:bg-brand-navy/5'
                }`}
              >
                {f}
              </button>
            ))}
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
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {filteredTestimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-none shadow-xl bg-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-bl-full -translate-y-4 translate-x-4 transition-transform group-hover:scale-150 duration-700" />
                  <CardContent className="p-8">
                    <div className="flex items-center gap-1 text-brand-gold mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill={i < testimonial.rating ? 'currentColor' : 'none'} />
                      ))}
                    </div>
                    
                    <Quote className="text-brand-gold/20 absolute top-8 right-8 w-12 h-12" />
                    
                    <p className="text-lg leading-relaxed text-brand-navy font-medium italic mb-8 relative z-10">
                      "{testimonial.testimonialText}"
                    </p>

                    <div className="flex items-center justify-between border-t pt-6">
                      <div className="flex items-center gap-4">
                        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-brand-gold/20 shadow-sm">
                          <Image src={testimonial.photoUrl} alt={testimonial.clientName} fill className="object-cover" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-brand-navy">{testimonial.clientName}</h4>
                            <a href={testimonial.linkedinUrl} className="text-blue-600 hover:text-blue-800">
                              <Linkedin size={14} />
                            </a>
                          </div>
                          <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">
                            {testimonial.designation}
                          </p>
                          <p className="text-xs font-semibold text-brand-gold mt-0.5">
                            {testimonial.company} {testimonial.countryFlag}
                          </p>
                        </div>
                      </div>
                      {testimonial.verified && (
                        <Badge className="bg-brand-green text-white text-[8px] uppercase tracking-tighter px-2 h-5">
                          <CheckCircle2 size={10} className="mr-1" /> Verified
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden lg:block">
            <CarouselPrevious className="-left-12 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white" />
            <CarouselNext className="-right-12 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white" />
          </div>
        </Carousel>

        <div className="mt-16 text-center">
          <a 
            href="/testimonials" 
            className="inline-flex items-center font-bold text-brand-gold hover:underline gap-2"
          >
            View All Verified Success Stories <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
