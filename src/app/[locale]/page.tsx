'use client';

import { useState, useEffect } from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import { 
  ShieldCheck, MessageSquare, ArrowRight, Trophy, ChevronUp
} from 'lucide-react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { VerifiedExporterBar } from '@/components/verified-exporter-bar';
import { CountrySelector } from '@/components/country-selector';
import { TrustMarquee } from '@/components/trust-marquee';
import { HowItWorks } from '@/components/sections/how-it-works';
import { CertificationsPreview } from '@/components/sections/certifications-preview';
import { LatestBlog } from '@/components/sections/latest-blog';
import { TrustedBuyers } from '@/components/sections/trusted-buyers';
import { WhyAnabynHome } from '@/components/sections/why-anabyn-home';
import { StatsSection } from '@/components/stats-section';
import { TestimonialsCarousel } from '@/components/testimonials-carousel';
import { AnabynDifference } from '@/components/sections/anabyn-difference';
import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';

export default function HomePage() {
  const t = useTranslations('Hero');
  
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

  return (
    <div className="relative min-h-screen font-body selection:bg-brand-gold selection:text-white bg-white">
      <CountrySelector />
      <Header />
      
      {/* 1. Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden pt-[74px]">
        <div className="absolute inset-0 z-0">
          {/* Lightened overlays for better image prominence */}
          <div className="absolute inset-0 bg-brand-navy/30 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/60 via-brand-navy/20 to-transparent z-10" />
          <Image 
            src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1600&q=80" 
            fill
            className="object-cover" 
            alt="Anabyn Global Ventures - Luxury Terry Towel Exporter India & Premium Bed Sheets"
            sizes="100vw"
            priority
          />
          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand-gold/10 blur-[120px] rounded-full animate-pulse z-10" />
        </div>

        <div className="container relative z-20 px-4 mx-auto">
          <div className="max-w-[840px] space-y-8 text-left ltr:text-left rtl:text-right">
            <div className="inline-flex items-center gap-3 border border-brand-gold/40 rounded-full px-5 py-2 bg-white/5 backdrop-blur-md">
              <ShieldCheck className="text-brand-gold w-5 h-5" />
              <span className="text-brand-gold text-[10px] font-black tracking-[0.3em] uppercase">
                {targetCountry ? `Dedicated Export Partner for ${targetCountry}` : t('badge')}
              </span>
            </div>

            <h1 className="text-5xl md:text-8xl font-playfair font-bold text-white leading-[1.05] tracking-tight">
              {t.rich('headline', {
                gold: <span key="gold-span" className="text-brand-gold">{t('headlineGold')}</span>
              })}
            </h1>

            <p className="text-brand-gold-light/80 text-xl md:text-2xl leading-relaxed max-w-2xl font-medium">
              {t('subheadline')}
            </p>

            <div className="flex flex-wrap items-center gap-5 pt-6">
              <Button asChild size="lg" className="rounded-2xl bg-brand-gold text-brand-navy font-black px-10 h-16 hover:scale-105 transition-all shadow-2xl shadow-brand-gold/20 border-none text-lg flex items-center justify-center">
                <Link href="/terry-towels">{t('ctaCatalogue')}</Link>
              </Button>
              {/* WhatsApp moved to be next to catalogue */}
              <Button asChild size="lg" className="rounded-2xl bg-[#25D366] text-white font-bold px-10 h-16 hover:scale-105 transition-all shadow-2xl shadow-green-500/20 border-none text-lg flex items-center justify-center">
                <a href="https://wa.me/919495613121?text=Hi%20Anabyn%2C%20I%27d%20like%20to%20start%20an%20export%20enquiry." target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="mr-2 h-6 w-6" /> WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-2xl border-white/30 text-white hover:bg-white hover:text-brand-navy px-10 h-16 bg-transparent backdrop-blur-sm text-lg font-bold flex items-center justify-center">
                <Link href="/contact">{t('ctaQuote')}</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/40 animate-bounce">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">{t('scroll')}</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold/50 to-transparent" />
        </div>
      </section>

      {/* 2. SEO Intro Section */}
      <section className="bg-[#0A1220] py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-820px mx-auto text-center space-y-10">
            <p className="text-base md:text-lg leading-[1.85] text-[rgba(244,240,232,0.75)] font-medium">
              Anabyn Global Ventures LLP is a premium textile export company based in India,
              specialising in luxury terry towels and high-quality bed linen for discerning
              buyers worldwide. From 400 GSM cotton bath towels to 1000 thread-count
              Egyptian cotton bed sheets — every product is crafted with precision
              and shipped with complete export documentation.
            </p>
            <p className="text-base md:text-lg leading-[1.85] text-[rgba(244,240,232,0.75)] font-medium">
              We supply luxury hotels, retail chains, wholesale distributors and
              private label brands across the United Kingdom, UAE, Europe, USA,
              Australia and beyond. Our clients choose Anabyn for consistent quality,
              reliable timelines, and a partnership built on trust.
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
