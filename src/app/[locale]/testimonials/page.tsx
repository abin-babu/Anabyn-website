'use client';

import * as React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { initialTestimonials } from '@/lib/testimonials';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Linkedin, CheckCircle2, MessageSquare, Play } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function TestimonialsPage() {
  const [filter, setFilter] = React.useState('All');

  const filtered = filter === 'All' 
    ? initialTestimonials 
    : initialTestimonials.filter(t => t.productCategory === filter);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-white pt-32 pb-20">
        {/* Hero */}
        <section className="bg-brand-navy text-white py-20 px-4 mb-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Star className="w-full h-full -rotate-12 translate-x-1/2 scale-150" />
          </div>
          <div className="container mx-auto relative z-10 text-center max-w-4xl">
            <Badge variant="outline" className="text-brand-gold border-brand-gold mb-4 px-4 py-1">Customer Success</Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-6">Voice of Our Partners</h1>
            <p className="text-xl text-brand-gold-light/80">
              Direct feedback from procurement directors and hospitality heads across 5 continents.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="flex bg-secondary/20 p-1 rounded-full border border-brand-gold/20">
              {['All', 'Hospitality', 'Medical'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                    filter === f ? 'bg-brand-navy text-white shadow-lg' : 'text-brand-navy hover:bg-brand-navy/5'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Video Placeholder */}
          <div className="mb-20 grid md:grid-cols-2 gap-8">
            <Card className="bg-brand-navy overflow-hidden relative group cursor-pointer aspect-video flex items-center justify-center border-none shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80" alt="Video Testimonial" fill className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" />
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 rounded-full bg-brand-gold flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform mb-4 mx-auto">
                  <Play className="text-brand-navy fill-brand-navy ml-1" />
                </div>
                <p className="text-white font-bold uppercase tracking-widest text-xs">Watch Success Story: Oasis Group</p>
              </div>
            </Card>
            <Card className="bg-brand-navy overflow-hidden relative group cursor-pointer aspect-video flex items-center justify-center border-none shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80" alt="Video Testimonial" fill className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" />
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 rounded-full bg-brand-gold flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform mb-4 mx-auto">
                  <Play className="text-brand-navy fill-brand-navy ml-1" />
                </div>
                <p className="text-white font-bold uppercase tracking-widest text-xs">Watch Success Story: MedDist Europe</p>
              </div>
            </Card>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filtered.map((testimonial) => (
              <Card key={testimonial.id} className="border-none shadow-xl bg-white hover:-translate-y-2 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1 text-brand-gold">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill={i < testimonial.rating ? 'currentColor' : 'none'} />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Order Year: {testimonial.orderYear}</span>
                  </div>
                  
                  <p className="text-brand-navy font-medium italic mb-8 min-h-[100px]">
                    "{testimonial.testimonialText}"
                  </p>

                  <div className="flex items-center gap-4 border-t pt-6">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border border-brand-gold/20">
                      <Image src={testimonial.photoUrl} alt={testimonial.clientName} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-brand-navy text-sm">{testimonial.clientName}</h4>
                        {testimonial.verified && <CheckCircle2 size={12} className="text-brand-green" />}
                      </div>
                      <p className="text-[10px] text-muted-foreground font-bold uppercase">{testimonial.designation}</p>
                      <p className="text-[10px] font-bold text-brand-gold">{testimonial.company} {testimonial.countryFlag}</p>
                    </div>
                    <a href={testimonial.linkedinUrl} className="w-8 h-8 rounded-full bg-secondary/30 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                      <Linkedin size={14} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Google CTA */}
          <div className="max-w-4xl mx-auto">
            <Card className="bg-brand-gold-light/20 border-2 border-dashed border-brand-gold/30 rounded-[2rem] p-12 text-center">
              <div className="flex justify-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="text-brand-gold fill-brand-gold w-8 h-8" />)}
              </div>
              <h3 className="text-3xl font-bold font-playfair text-brand-navy mb-4">4.9/5 Rating on Google Reviews</h3>
              <p className="text-muted-foreground mb-10 max-w-lg mx-auto text-lg">Join our community of satisfied buyers. Read more independent reviews or share your own experience.</p>
              <Button asChild size="lg" className="bg-brand-navy text-white h-14 px-10 rounded-xl font-bold">
                <a href="https://share.google/Icw2FF4giN0LJdQcz" target="_blank">View All Google Reviews</a>
              </Button>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
