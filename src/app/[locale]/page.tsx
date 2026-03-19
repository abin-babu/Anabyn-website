'use client';

import { useState, useEffect } from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { ChevronUp, ArrowRight } from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { VerifiedExporterBar } from '@/components/verified-exporter-bar';
import { TrustMarquee } from '@/components/trust-marquee';
import { HowItWorks } from '@/components/sections/how-it-works';
import { CertificationsPreview } from '@/components/sections/certifications-preview';
import { LatestBlog } from '@/components/sections/latest-blog';
import { TrustedBuyers } from '@/components/sections/trusted-buyers';
import { WhyAnabynHome } from '@/components/sections/why-anabyn-home';
import { StatsSection } from '@/components/stats-section';
import { TestimonialsCarousel } from '@/components/testimonials-carousel';
import { AnabynDifference } from '@/components/sections/anabyn-difference';

export default function HomePage() {
  const t = useTranslations('Hero');
  const [showScrollTop, setShowScrollTop] = useState(false);

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

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen font-body selection:bg-brand-gold selection:text-white bg-white">
      <Header />
      
      {/* 1. Hero Section overhauled */}
      <section className="relative h-screen flex items-center overflow-hidden pt-[74px] hero-section-bg">
        <div className="container relative z-20 px-4 mx-auto">
          <div className="max-w-[840px] space-y-6 text-left">
            <span className="text-brand-gold text-[11px] font-bold tracking-[0.2em] uppercase block mb-2">
              Premium Export Partner · 50+ Countries
            </span>

            <h1 className="text-5xl md:text-8xl font-playfair font-bold text-white leading-[1.05] tracking-tight">
              Luxury Textiles.<br />
              Precision Delivered.
            </h1>

            <p className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-2xl font-light">
              India's finest terry towels and bed linen — crafted to GSM spec, shipped with full export documentation.
            </p>

            <div className="flex items-center gap-8 pt-8">
              <Link href="/request-quote" className="hero-cta-primary">
                Request Export Quote
              </Link>
              <Link href="/products" className="hero-cta-secondary flex items-center gap-2">
                View Products <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/40 animate-bounce">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Explore Catalogue</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold/50 to-transparent" />
        </div>
      </section>

      {/* 2. SEO Intro Section */}
      <section className="bg-[#0A1220] py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-[820px] mx-auto text-center space-y-10">
            <p className="text-base md:text-lg leading-[1.85] text-[rgba(244,240,232,0.75)] font-medium">
              Anabyn Global Ventures has transformed from a next-gen AI-first company into a global exporting powerhouse based in India.
              We specialise in luxury terry towels and high-quality bed linen for discerning buyers worldwide. 
              From 400 GSM cotton bath towels to 1000 thread-count Egyptian cotton bed sheets — every product is crafted with precision and shipped with complete export documentation.
            </p>
            <p className="text-base md:text-lg leading-[1.85] text-[rgba(244,240,232,0.75)] font-medium">
              We supply luxury hotels, retail chains, wholesale distributors and private label brands across the United Kingdom, UAE, Europe, USA, Australia and beyond. 
              Our clients choose Anabyn for consistent quality, reliable timelines, and a partnership built on trust.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
      </section>

      {/* Trust Content */}
      <StatsSection />
      <TrustedBuyers />
      <WhyAnabynHome />
      <AnabynDifference />
      <TestimonialsCarousel />
      
      {/* Supporting Sections */}
      <TrustMarquee />
      <VerifiedExporterBar />
      <HowItWorks />
      <CertificationsPreview />
      <LatestBlog />

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
