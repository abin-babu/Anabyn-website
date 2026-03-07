'use client';

import { useEffect } from 'react';
import { Header } from '@/components/layout/header';
import { Hero } from '@/components/hero';
import { Marquee } from '@/components/marquee';
import { ProductSection } from '@/components/sections/product-section';
import { StatsStrip } from '@/components/sections/stats-strip';
import { WhyAnabyn } from '@/components/sections/why-anabyn';
import { AboutSection } from '@/components/sections/about-section';
import { Testimonials } from '@/components/sections/testimonials';
import { Certifications } from '@/components/sections/certifications';
import { TrustBanner } from '@/components/sections/trust-banner';
import { Customization } from '@/components/sections/customization';
import { Markets } from '@/components/sections/markets';
import { FAQSection } from '@/components/sections/faq';
import { ContactSection } from '@/components/sections/contact-section';
import { Footer } from '@/components/layout/footer';
import { WhatsappCta } from '@/components/whatsapp-cta';
import { ScrollToTop } from '@/components/scroll-to-top';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = anchor.getAttribute('href')?.substring(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 74,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      observer.disconnect();
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <ProductSection />
        <StatsStrip />
        <WhyAnabyn />
        <AboutSection />
        <Testimonials />
        <Certifications />
        <TrustBanner />
        <Customization />
        <Markets />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsappCta />
      <ScrollToTop />
    </div>
  );
}