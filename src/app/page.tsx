'use client';

import { useEffect } from 'react';
import { Header } from '@/components/layout/header';
import { Hero } from '@/components/hero';
import { Marquee } from '@/components/marquee';
import { ProductSection } from '@/components/sections/product-section';
import { StatsStrip } from '@/components/sections/stats-strip';
import { WhyChooseUs } from '@/components/why-choose-us';
import { AboutSection } from '@/components/sections/about-section';
import { Certifications } from '@/components/sections/certifications';
import { TrustBanner } from '@/components/sections/trust-banner';
import { Markets } from '@/components/sections/markets';
import { ContactSection } from '@/components/sections/contact-section';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <ProductSection />
        <StatsStrip />
        <WhyChooseUs />
        <AboutSection />
        <Certifications />
        <TrustBanner />
        <Markets />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
