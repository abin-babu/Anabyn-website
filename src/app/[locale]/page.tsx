
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
import { ProcessVideoSection } from '@/components/sections/process-video-section';
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
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen font-body selection:bg-brand-gold selection:text-white bg-white">
      <Header />
      
      {/* 1. Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden pt-[74px] hero-section-bg">
        <div className="container relative z-20 px-4 mx-auto text-left rtl:text-right">
          <div className="max-w-[840px] space-y-6">
            <span className="text-brand-gold text-[11px] font-bold tracking-[0.2em] uppercase block mb-2 hero-load-1">
              {t('badge')}
            </span>

            <h1 className="text-5xl md:text-8xl font-playfair font-bold text-white leading-[1.05] tracking-tight hero-load-1 whitespace-pre-line">
              {t('headline')}
            </h1>

            <p className="text-white/80 text-xl md:text-2xl leading-relaxed max-w-2xl font-light hero-load-2">
              {t('subheadline')}
            </p>

            <div className="flex items-center gap-8 pt-8 hero-load-3 rtl:flex-row-reverse rtl:justify-end">
              <Link href="/request-quote" className="hero-cta-primary">
                {t('ctaQuote')}
              </Link>
              <Link href="/products" className="hero-cta-secondary flex items-center gap-2">
                {t('ctaProducts')} <ArrowRight size={16} className="rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/40 animate-bounce">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">{t('scroll')}</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold/50 to-transparent" />
        </div>
      </section>

      {/* Trust Content */}
      <div className="reveal"><StatsSection /></div>
      <div className="reveal"><TrustedBuyers /></div>
      <div className="reveal"><WhyAnabynHome /></div>
      <div className="reveal"><AnabynDifference /></div>
      <div className="reveal"><TestimonialsCarousel /></div>
      
      {/* Supporting Sections */}
      <div className="reveal"><TrustMarquee /></div>
      <div className="reveal"><VerifiedExporterBar /></div>
      <div className="reveal"><HowItWorks /></div>
      <div className="reveal"><ProcessVideoSection /></div>
      <div className="reveal"><CertificationsPreview /></div>
      <div className="reveal"><LatestBlog /></div>

      <Footer />

      {showScrollTop && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-10 right-10 rtl:right-auto rtl:left-10 w-14 h-14 bg-brand-gold text-brand-navy rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-[90] animate-in zoom-in duration-300"
        >
          <ChevronUp size={28} strokeWidth={3} />
        </button>
      )}
    </div>
  );
}
