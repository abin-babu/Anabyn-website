
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
import Image from 'next/image';

// Dynamically import heavy components
const TestimonialsCarousel = dynamic(() => import('@/components/testimonials-carousel').then(mod => mod.TestimonialsCarousel), { 
  loading: () => <div className="h-[400px] w-full bg-secondary/5 animate-pulse rounded-3xl" />,
  ssr: false 
});

const StatsSection = dynamic(() => import('@/components/stats-section').then(mod => mod.StatsSection), {
  ssr: false
});

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

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Anabyn Global Ventures LLP",
    "url": "https://www.anabyn.com",
    "logo": "https://www.anabyn.com/logo.png",
    "description": "Premium luxury textile exporter from India — terry towels and bed linen for hotels, retailers and distributors worldwide. Verified B2B textile exporter India.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "anabyn.group@gmail.com",
      "contactType": "sales",
      "areaServed": ["USA", "EU", "UAE", "UK", "GCC"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/anabyn",
      "https://www.instagram.com/anabynglobal"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the minimum order quantity (MOQ) for hotel linens and terry towels?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our standard MOQ for luxury terry towels is 500 pieces per size/color, while premium hotel bed sheets start at 100 sets. We are a flexible Indian textile export company B2B, supporting trial orders for new partners."
        }
      },
      {
        "@type": "Question",
        "name": "Which countries do you export textiles and medical supplies to?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As a global sourcing partner, we export to over 50 countries, including the USA, UK, UAE, Germany, Saudi Arabia, and Australia. We handle all international logistics and customs documentation."
        }
      },
      {
        "@type": "Question",
        "name": "Are your towels and bed linens GOTS or OEKO-TEX certified?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in certified sustainable textiles. Our organic cotton range is GOTS certified, and all our hospitality linens carry the OEKO-TEX Standard 100 label, ensuring safety for human use."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide private label towels and custom branding OEM India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We are a leading private label towels manufacturer India. We provide full OEM support, including custom embroidery, Pantone color matching for dyes, and branded retail packaging."
        }
      },
      {
        "@type": "Question",
        "name": "What are your standard payment terms for bulk textile exports from India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We typically accept T/T (Wire Transfer) with a 30-50% advance, or L/C (Letter of Credit) at sight for container-load shipments. Documents against Payment (DP) is also available for established clients."
        }
      },
      {
        "@type": "Question",
        "name": "What is the typical production lead time for a 600 GSM towel order?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard production lead times are 3-4 weeks for textiles like 600 GSM bath towels and bed linens. Custom OEM orders may require an additional week for sampling and branding approvals."
        }
      },
      {
        "@type": "Question",
        "name": "Can I request samples before committing to a bulk export order?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, sample evaluation is a key part of our export process. We provide physical samples via courier (DHL/FedEx) for your quality and material approval. Sample costs are often credited back against your bulk contract."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure the quality of Egyptian cotton bed sheets sourced from India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We implement a strict 3-stage inspection process (Inline, Mid-line, and Pre-shipment). We also welcome third-party audits from agencies like SGS or Intertek to verify technical specifications before loading."
        }
      },
      {
        "@type": "Question",
        "name": "What Incoterms do you support for international shipping?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We support all standard ICC Incoterms, including EXW, FOB, CIF, and DDP (Delivered Duty Paid). Most of our buyers in the UK and USA prefer DDP for a hassle-free doorstep delivery."
        }
      },
      {
        "@type": "Question",
        "name": "How can I get a technical quote for hospital furniture or medical disposables?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can submit an RFQ via our portal or contact our medical export desk at sales@anabyn.com. We provide comprehensive technical dossiers and pricing within 24 business hours."
        }
      }
    ]
  };

  return (
    <div className="relative min-h-screen font-body selection:bg-brand-gold selection:text-white bg-white animate-fade-in">
      <CountrySelector />
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* 1. Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden pt-[74px]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-navy/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent z-10" />
          <Image 
            src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1600&q=80" 
            fill
            className="object-cover" 
            alt="Anabyn Global Ventures - Luxury Terry Towel Exporter India & Premium Bed Sheets"
            priority
          />
          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-brand-gold/10 blur-[120px] rounded-full animate-pulse z-10" />
        </div>

        <div className="container relative z-20 px-4 mx-auto">
          <div className="max-w-[840px] space-y-8 fade-up visible text-left ltr:text-left rtl:text-right">
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

            <div className="flex flex-wrap gap-5 pt-6">
              <Button asChild size="lg" className="rounded-2xl bg-brand-gold text-brand-navy font-black px-10 h-16 hover:scale-105 transition-all shadow-2xl shadow-brand-gold/20 border-none text-lg">
                <Link href="/request-quote">{t('ctaQuote')}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-2xl border-white/30 text-white hover:bg-white hover:text-brand-navy px-10 h-16 backdrop-blur-sm text-lg font-bold">
                <Link href="/products">{t('ctaCatalogue')}</Link>
              </Button>
              <Button asChild size="lg" className="rounded-2xl bg-[#25D366] text-white font-black px-10 h-16 hover:opacity-90 transition-opacity border-none text-lg shadow-xl">
                <a href="https://wa.me/919495613121" target="_blank">
                  <MessageSquare className="mr-2" size={24} /> {t('ctaWhatsApp')}
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/40 animate-bounce">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">{t('scroll')}</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-brand-gold/50 to-transparent" />
        </div>
      </section>

      <TrustMarquee />
      <VerifiedExporterBar />
      <StatsSection />

      <HowItWorks />
      <CertificationsPreview />
      <TestimonialsCarousel />
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
