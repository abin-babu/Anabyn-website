
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { AnabynLogo } from '@/components/anabyn-logo';
import { 
  Menu, X, CircleCheck, Star, MessageSquare, Phone, Mail, 
  MapPin, ChevronUp, ArrowRight, ShieldCheck, Globe, Award, 
  Eye, Palette, Headphones, Tag, Ruler, Box, FlaskConical, Trophy
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { VerifiedExporterBar } from '@/components/verified-exporter-bar';
import { products as productCatalog } from '@/lib/products';
import { initialClients } from '@/lib/clients';
import { CountrySelector } from '@/components/country-selector';
import { TrustMarquee } from '@/components/trust-marquee';
import { HowItWorks } from '@/components/sections/how-it-works';
import { CertificationsPreview } from '@/components/sections/certifications-preview';
import { LatestBlog } from '@/components/sections/latest-blog';
import Image from 'next/image';

// Dynamically import heavy components
const TestimonialsCarousel = dynamic(() => import('@/components/testimonials-carousel').then(mod => mod.TestimonialsCarousel), { 
  loading: () => <div className="h-[400px] w-full bg-secondary/5 animate-pulse rounded-3xl" />,
  ssr: false 
});

const StatsSection = dynamic(() => import('@/components/stats-section').then(mod => mod.StatsSection), {
  ssr: false
});

export default function MasterpiecePage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [targetCountry, setTargetCountry] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    const savedCountry = localStorage.getItem('sourcing_country');
    if (savedCountry) setTargetCountry(savedCountry);

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your enquiry has been received. Anabyn Global Ventures LLP will respond within 24 hours.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="relative min-h-screen font-body selection:bg-brand-gold selection:text-white bg-white">
      <CountrySelector />
      <Header />
      
      {/* 1. Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden pt-[74px]">
        {/* Background Placeholder for Video Loop */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-navy/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent z-10" />
          <Image 
            src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1600&q=80" 
            fill
            className="object-cover" 
            alt="Anabyn Hero - Premium Bed Linen"
            priority
          />
          {/* Animated Gradient Accent */}
          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand-gold/10 blur-[120px] rounded-full animate-pulse z-10" />
        </div>

        <div className="container relative z-20 px-4 mx-auto">
          <div className="max-w-[840px] space-y-8 fade-up visible">
            <div className="inline-flex items-center gap-3 border border-brand-gold/40 rounded-full px-5 py-2 bg-white/5 backdrop-blur-md">
              <ShieldCheck className="text-brand-gold w-5 h-5" />
              <span className="text-brand-gold text-[10px] font-black tracking-[0.2em] uppercase">
                {targetCountry ? `Dedicated Export Partner for ${targetCountry}` : "India's Trusted Global Export Partner"}
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl font-playfair font-bold text-white leading-[1.05] tracking-tight">
              India's Authority in <br />
              <span className="text-brand-gold">Exporting Excellence.</span>
            </h1>

            <p className="text-brand-gold-light/80 text-xl md:text-2xl leading-relaxed max-w-2xl font-medium">
              Verified quality across Hospitality & Medical categories. On-time delivery to 20+ countries. Every handshake honoured.
            </p>

            <div className="flex flex-wrap gap-5 pt-6">
              <Button asChild size="lg" className="rounded-2xl bg-brand-gold text-brand-navy font-black px-10 h-16 hover:scale-105 transition-all shadow-2xl shadow-brand-gold/20 border-none text-lg">
                <Link href="/request-quote">Request a Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-2xl border-white/30 text-white hover:bg-white hover:text-brand-navy px-10 h-16 backdrop-blur-sm text-lg font-bold">
                <Link href="/products">Browse Catalogue</Link>
              </Button>
              <Button asChild size="lg" className="rounded-2xl bg-[#25D366] text-white font-black px-10 h-16 hover:opacity-90 transition-opacity border-none text-lg shadow-xl">
                <a href="https://wa.me/919495613121" target="_blank">
                  <MessageSquare className="mr-2" size={24} /> WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/40 animate-bounce">
          <span className="text-[10px] font-bold uppercase tracking-widest">Scroll to Explore</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold/50 to-transparent" />
        </div>
      </section>

      {/* 2. Trust & Verification bar */}
      <TrustMarquee />
      <VerifiedExporterBar />

      {/* 3. Why Choose Us (Stats Section) */}
      <StatsSection />

      {/* 4. Product Categories */}
      <section className="py-24 bg-white px-4 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="fade-up">
              <span className="text-brand-gold font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Product Ecosystem</span>
              <h2 className="text-4xl md:text-6xl font-playfair font-bold text-brand-navy leading-tight">
                World-Class Supplies <br /> From Indian Hubs.
              </h2>
            </div>
            <div className="fade-up">
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg mb-8">
                We bridge India's manufacturing excellence with global procurement standards, ensuring rigorous compliance for healthcare and hospitality sectors.
              </p>
              <div className="flex gap-4">
                <Button asChild variant="outline" className="border-brand-navy text-brand-navy rounded-xl px-8 h-14 font-black hover:bg-brand-navy hover:text-white transition-all">
                  <Link href="/products?category=hospitality-supplies">🏨 Hospitality</Link>
                </Button>
                <Button asChild variant="outline" className="border-brand-navy text-brand-navy rounded-xl px-8 h-14 font-black hover:bg-brand-navy hover:text-white transition-all">
                  <Link href="/products?category=medical-supplies">🏥 Medical</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* 5. Featured Products (6 cards) */}
          <div className="grid md:grid-cols-3 gap-8">
            {productCatalog.filter(p => p.featured).slice(0, 6).map((p) => (
              <Card key={p.id} className="overflow-hidden group border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white rounded-[2.5rem]">
                <div className="relative h-72 overflow-hidden">
                  <Image src={p.images[0]} alt={p.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-brand-navy text-white border-none uppercase text-[9px] font-black tracking-widest px-3 py-1 shadow-2xl">{p.subcategory}</Badge>
                  </div>
                </div>
                <CardContent className="p-10">
                  <h3 className="text-2xl font-bold text-brand-navy mb-3">{p.name}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-8 leading-relaxed">{p.shortDescription}</p>
                  <Button asChild variant="link" className="p-0 text-brand-gold font-black h-auto hover:no-underline group/link uppercase tracking-widest text-xs">
                    <Link href={`/products/${p.slug}`}>
                      Explore Technical Specs <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <Button asChild size="lg" className="rounded-2xl border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white px-12 h-16 font-black" variant="outline">
              <Link href="/products">Browse Full Export Catalogue</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 6. How It Works (4-step process) */}
      <HowItWorks />

      {/* 7. Certifications Preview */}
      <CertificationsPreview />

      {/* 8. Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* 9. Latest Blog Articles */}
      <LatestBlog />

      {/* Final CTA */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/5 blur-[120px] rounded-full translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
          <div className="fade-up">
            <h2 className="text-5xl md:text-7xl font-playfair font-bold mb-8">Optimize Your <br /><span className="text-brand-gold">Sourcing Strategy.</span></h2>
            <p className="text-xl text-brand-gold-light/70 mb-12 max-w-lg leading-relaxed">
              From technical dossiers to door-to-door logistics, we manage the entire supply chain so you can focus on scale.
            </p>
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover:bg-brand-gold group-hover:border-brand-gold">
                  <Mail className="text-brand-gold group-hover:text-brand-navy" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em] mb-1">Direct Line</p>
                  <p className="text-xl font-bold">sales@anabyn.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover:bg-brand-gold group-hover:border-brand-gold">
                  <Phone className="text-brand-gold group-hover:text-brand-navy" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-brand-gold uppercase tracking-[0.2em] mb-1">24/7 Hotline</p>
                  <p className="text-xl font-bold">+91 94956 13121</p>
                </div>
              </div>
            </div>
          </div>
          <Card className="bg-white p-12 rounded-[3rem] shadow-2xl border-none fade-up relative">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-gold rounded-full flex items-center justify-center text-brand-navy rotate-12 shadow-xl">
              <Trophy className="w-10 h-10" />
            </div>
            <form onSubmit={handleInquirySubmit} className="space-y-6">
              <h3 className="text-3xl font-playfair font-bold text-brand-navy mb-8">Direct Proposal Request</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest ml-1">Full Name</label>
                  <input type="text" placeholder="John Doe" required className="bg-secondary/10 border-none h-14 rounded-xl px-6 w-full text-brand-navy font-bold focus:ring-2 ring-brand-gold transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest ml-1">Company</label>
                  <input type="text" placeholder="Global Sourcing" required className="bg-secondary/10 border-none h-14 rounded-xl px-6 w-full text-brand-navy font-bold focus:ring-2 ring-brand-gold transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest ml-1">Work Email</label>
                <input type="email" placeholder="procurement@company.com" required className="bg-secondary/10 border-none h-14 rounded-xl px-6 w-full text-brand-navy font-bold focus:ring-2 ring-brand-gold transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-muted-foreground uppercase tracking-widest ml-1">Requirement Overview</label>
                <textarea placeholder="Products, Quantities, Target Country..." required className="bg-secondary/10 border-none h-40 rounded-xl p-6 w-full text-brand-navy font-bold resize-none focus:ring-2 ring-brand-gold transition-all" />
              </div>
              <Button type="submit" className="w-full h-16 bg-brand-navy text-white font-black rounded-2xl text-lg hover:bg-brand-navy/90 transition-all shadow-2xl">Send Request</Button>
            </form>
          </Card>
        </div>
      </section>

      <Footer />

      {showScrollTop && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-10 right-10 w-14 h-14 bg-brand-gold text-brand-navy rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-[90] animate-in zoom-in duration-300"
        >
          <ChevronUp size={28} strokeWidth={3} />
        </button>
      )}

    </div>
  );
}
