
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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { VerifiedExporterBar } from '@/components/verified-exporter-bar';
import { products as productCatalog } from '@/lib/products';
import { initialClients } from '@/lib/clients';
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
      setIsScrolled(window.scrollY > 30);
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Products', href: '/products' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Logistics', href: '/how-we-export' },
    { name: 'Insights', href: '/blog' },
    { name: 'Clients', href: '/clients' }
  ];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your enquiry has been received. Anabyn Global Ventures LLP will respond within 24 hours.");
    (e.target as HTMLFormElement).reset();
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Anabyn Global Ventures LLP",
    "url": "https://www.anabyn.com",
    "logo": "https://www.anabyn.com/images/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-94956-13121",
      "contactType": "sales",
      "email": "sales@anabyn.com",
      "areaServed": "Worldwide",
      "availableLanguage": ["English", "Arabic", "French", "Hindi"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/anabyn-global-ventures/",
      "https://www.instagram.com/anabyn_global_ventures/",
      "https://www.facebook.com/people/Anabyn-Global-Ventures-LLP/61581460358902/"
    ]
  };

  return (
    <div className="relative min-h-screen font-body selection:bg-brand-gold selection:text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      <nav className={cn(
        "fixed top-0 left-0 w-full h-[74px] z-[100] transition-all duration-300 backdrop-blur-md",
        isScrolled ? "bg-brand-navy/95 shadow-2xl border-b border-brand-gold/40" : "bg-brand-navy/80 border-b border-brand-gold/20"
      )}>
        <div className="container h-full flex items-center justify-between px-4 lg:px-8 mx-auto">
          <Link href="/" className="hover:opacity-90 transition-opacity">
            <AnabynLogo />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <Link key={link.name} href={link.href} className="text-white/90 hover:text-brand-gold text-sm font-medium transition-colors">
                {link.name}
              </Link>
            ))}
            <Button asChild className="rounded-full bg-brand-gold text-brand-navy font-bold px-6 border-none hover:scale-105 transition-transform">
              <Link href="/request-quote">Request Quote</Link>
            </Button>
          </div>

          <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-[74px] left-0 w-full bg-brand-navy border-b border-brand-gold/20 lg:hidden animate-in slide-in-from-top duration-300">
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map(link => (
                <Link key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-medium border-b border-white/5 pb-2">
                  {link.name}
                </Link>
              ))}
              <Button asChild className="w-full rounded-full bg-brand-gold text-brand-navy font-bold py-6">
                <Link href="/request-quote" onClick={() => setIsMobileMenuOpen(false)}>Request Quote</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden pt-[74px]">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1600&q=80" 
            fill
            className="object-cover grayscale-[30%] brightness-[0.4]" 
            alt="Anabyn Hero - Premium Bed Linen"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
        </div>

        <div className="container relative z-10 px-4 lg:px-8 mx-auto">
          <div className="max-w-[720px] space-y-8 fade-up visible">
            <div className="inline-flex items-center gap-2 border border-brand-gold rounded-full px-4 py-1.5 bg-brand-gold/10">
              <ShieldCheck className="text-brand-gold w-4 h-4" />
              <span className="text-brand-gold text-xs font-bold tracking-[0.1em] uppercase">Trusted Global Export Partner from India</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white leading-[1.1]">
              India's Trusted Export Partner for <br />
              <span className="text-brand-gold">Hospitality & Medical Supplies</span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Quality-verified products. On-time delivery. Seamless logistics to 20+ countries.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full bg-brand-gold text-brand-navy font-bold px-8 hover:scale-105 transition-all shadow-xl shadow-brand-gold/20 border-none">
                <Link href="/request-quote">Request a Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-white text-white hover:bg-white hover:text-brand-navy px-8 bg-transparent">
                <Link href="/products">Browse Products</Link>
              </Button>
              <Button asChild size="lg" className="rounded-full bg-[#25D366] text-white font-bold px-8 hover:opacity-90 transition-opacity border-none">
                <a href="https://wa.me/919495613121" target="_blank">
                  <MessageSquare className="mr-2" size={20} /> Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Ticker */}
      <div className="bg-brand-navy py-6 border-y border-brand-gold/20 overflow-hidden select-none">
        <div className="animate-marquee whitespace-nowrap flex gap-12">
          {[1, 2].map(i => (
            <div key={i} className="flex gap-12 items-center">
              {[
                "ISO 9001 Certified", "CE Marked Products", "IEC Registered", 
                "500+ Global Orders", "4.9★ Google Rating", "FDA Registered Facility", 
                "Export to 20+ Countries", "Verified Indian Exporter"
              ].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <CircleCheck size={18} className="text-brand-gold" />
                  <span className="text-white font-bold text-sm tracking-widest uppercase">{item}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <VerifiedExporterBar />

      <StatsSection />

      {/* Categories / Showcase Section */}
      <section className="py-24 bg-white px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 fade-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-brand-navy mb-6">
              World-Class Supplies for Healthcare & Hospitality
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We source directly from India's premier manufacturing hubs, ensuring the highest compliance and cost efficiency for your supply chain.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="outline" className="border-brand-navy text-brand-navy rounded-full px-8 py-6 font-bold text-lg hover:bg-brand-navy hover:text-white transition-all">
                <Link href="/products?category=hospitality-supplies">🏨 Hospitality Solutions</Link>
              </Button>
              <Button asChild variant="outline" className="border-brand-navy text-brand-navy rounded-full px-8 py-6 font-bold text-lg hover:bg-brand-navy hover:text-white transition-all">
                <Link href="/products?category=medical-supplies">🏥 Medical Solutions</Link>
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {productCatalog.filter(p => p.featured).slice(0, 6).map((p) => (
              <Card key={p.id} className="overflow-hidden group border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white">
                <div className="relative h-60 overflow-hidden">
                  <Image src={p.images[0]} alt={p.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-brand-navy/80 text-white border-none uppercase text-[10px] tracking-widest px-3 py-1">{p.subcategory}</Badge>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-brand-navy mb-2">{p.name}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-6">{p.shortDescription}</p>
                  <Button asChild variant="link" className="p-0 text-brand-gold font-bold h-auto hover:no-underline group/link">
                    <Link href={`/products/${p.slug}`}>
                      Explore Product <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-brand-gold-light/20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 fade-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-brand-navy">Streamlined Export Process</h2>
            <p className="text-muted-foreground mt-4">Simple, transparent, and efficient from inquiry to delivery.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Submit Inquiry', desc: 'Detail your requirements via our RFQ builder or WhatsApp.' },
              { step: '02', title: 'Sample Approval', desc: 'We ship verified samples for your technical evaluation.' },
              { step: '03', title: 'Contract & QC', desc: 'Secure payment via LC/TT followed by 3-stage production QC.' },
              { step: '04', title: 'Global Dispatch', desc: 'Full logistics handling with door-to-door tracking.' }
            ].map((s, i) => (
              <div key={i} className="relative group p-8 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 fade-up">
                <span className="text-6xl font-playfair font-bold text-brand-gold/10 absolute top-4 right-4 group-hover:text-brand-gold/20 transition-colors">{s.step}</span>
                <h4 className="text-xl font-bold text-brand-navy mb-4 relative z-10">{s.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      {/* Client Wall Preview */}
      <section className="py-20 bg-white border-y">
        <div className="container mx-auto px-4">
          <p className="text-center text-[10px] font-bold text-muted-foreground uppercase tracking-[0.4em] mb-12">Authorized Supply Partner For</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 opacity-40 hover:opacity-100 transition-opacity">
            {initialClients.slice(0, 6).map((c) => (
              <div key={c.id} className="flex items-center justify-center grayscale">
                <Image src={c.logoUrl} alt={c.name} width={120} height={60} className="object-contain" />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/clients" className="text-xs font-bold text-brand-navy hover:text-brand-gold uppercase tracking-widest border-b-2 border-brand-gold pb-1 transition-all">View Our Global Client Base</Link>
          </div>
        </div>
      </section>

      {/* Latest Blog */}
      <section className="py-24 bg-white px-4">
        <div className="container mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-playfair font-bold text-brand-navy">Export Intelligence</h2>
              <p className="text-muted-foreground mt-2">Technical guides and market updates for international buyers.</p>
            </div>
            <Button asChild variant="outline" className="hidden md:flex border-brand-navy rounded-xl">
              <Link href="/blog">View All Insights</Link>
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center py-20 col-span-3 border-2 border-dashed rounded-3xl">
              <p className="text-muted-foreground font-bold uppercase tracking-widest">Visit the /blog section for latest insights</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/5 blur-3xl rounded-full translate-x-1/2" />
        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-20 items-center">
          <div className="fade-up">
            <h2 className="text-5xl font-playfair font-bold mb-8">Ready to Optimize Your Sourcing?</h2>
            <p className="text-xl text-white/70 mb-12">Whether you need a full export proposal or simple product samples — our experts respond within 24 business hours.</p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Mail className="text-brand-gold" />
                </div>
                <p className="text-lg">sales@anabyn.com</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Phone className="text-brand-gold" />
                </div>
                <p className="text-lg">+91 94956 13121</p>
              </div>
            </div>
          </div>
          <Card className="bg-white p-10 rounded-[2.5rem] shadow-2xl border-none fade-up">
            <form onSubmit={handleInquirySubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Name*" required className="bg-secondary/10 border-none h-14 rounded-xl px-6 w-full text-brand-navy" />
                <input type="text" placeholder="Company*" required className="bg-secondary/10 border-none h-14 rounded-xl px-6 w-full text-brand-navy" />
              </div>
              <input type="email" placeholder="Email*" required className="bg-secondary/10 border-none h-14 rounded-xl px-6 w-full text-brand-navy" />
              <textarea placeholder="Requirements (Products, Quantities, Target Country)*" required className="bg-secondary/10 border-none h-40 rounded-xl p-6 w-full text-brand-navy resize-none" />
              <Button type="submit" className="w-full h-16 bg-brand-navy text-white font-bold rounded-xl text-lg hover:bg-brand-navy/90 transition-all shadow-xl">Send Quote Request</Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="bg-brand-navy pt-24 pb-12 text-white/70 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="lg:col-span-1.5 space-y-8">
              <AnabynLogo />
              <p className="text-sm leading-relaxed max-w-sm">
                India's trusted export partner for hospitality and medical supplies — serving buyers in 50+ countries with quality, reliability, and every handshake honoured.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all">
                  <Globe size={18} />
                </a>
                <a href="#" className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all">
                  <Globe size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase text-[10px] tracking-[0.3em] mb-10">Offerings</h4>
              <ul className="space-y-5 text-sm">
                <li><Link href="/products?category=hospitality-supplies" className="hover:text-brand-gold transition-colors">Hospitality Linens</Link></li>
                <li><Link href="/products?category=hospitality-supplies" className="hover:text-brand-gold transition-colors">Staff Uniforms</Link></li>
                <li><Link href="/products?category=medical-supplies" className="hover:text-brand-gold transition-colors">Medical Consumables</Link></li>
                <li><Link href="/products?category=medical-supplies" className="hover:text-brand-gold transition-colors">Hospital Furniture</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase text-[10px] tracking-[0.3em] mb-10">Quick Links</h4>
              <ul className="space-y-5 text-sm">
                <li><Link href="/about-us" className="hover:text-brand-gold transition-colors">Company Profile</Link></li>
                <li><Link href="/certifications" className="hover:text-brand-gold transition-colors">Compliance Hub</Link></li>
                <li><Link href="/how-we-export" className="hover:text-brand-gold transition-colors">Logistics Guide</Link></li>
                <li><Link href="/testimonials" className="hover:text-brand-gold transition-colors">Buyer Reviews</Link></li>
                <li><Link href="/clients" className="hover:text-brand-gold transition-colors">Client Network</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase text-[10px] tracking-[0.3em] mb-10">Get in Touch</h4>
              <ul className="space-y-6 text-sm">
                <li className="flex items-center gap-3"><Mail size={16} className="text-brand-gold" /> sales@anabyn.com</li>
                <li className="flex items-center gap-3"><Phone size={16} className="text-brand-gold" /> +91 94956 13121</li>
                <li>
                  <Button asChild className="w-full bg-brand-gold text-brand-navy hover:bg-brand-gold/90 rounded-xl py-6 font-bold border-none">
                    <a href="https://wa.me/919495613121" target="_blank">WhatsApp Hotline</a>
                  </Button>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-bold uppercase tracking-[0.2em]">
            <p>© 2026 Anabyn Global Ventures LLP. All rights reserved.</p>
            <div className="flex gap-8">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Use</Link>
            </div>
          </div>
        </div>
      </footer>

      {showScrollTop && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-10 right-10 w-12 h-12 bg-brand-gold text-brand-navy rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-[90]"
        >
          <ChevronUp size={24} />
        </button>
      )}

    </div>
  );
}
