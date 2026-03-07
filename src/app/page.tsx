'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnabynLogo } from '@/components/anabyn-logo';
import { 
  Menu, X, CircleCheck, Star, MessageSquare, Phone, Mail, 
  MapPin, ChevronUp, ArrowRight, ShieldCheck, Globe, Award, 
  Eye, Palette, Headphones, Tag, Ruler, Box, FlaskConical, Trophy
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function MasterpiecePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Intersection Observer for fade-up animations
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
    { name: 'Products', href: '#products' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Customization', href: '/customization' },
    { name: 'Quality', href: '/quality' },
    { name: 'Markets', href: '#markets' },
    { name: 'FAQ', href: '/faq' }
  ];

  const products = [
    {
      id: 'bed-linen',
      cat: 'hospitality',
      title: 'Hotel Bed Sheets (Flat/Fitted)',
      spec: '144–600 TC · Cotton/Blends · Percale/Sateen',
      description: 'Premium quality flat and fitted sheets designed for luxury hotels, resorts, and serviced apartments. Available in a wide range of thread counts and weaves.',
      link: 'https://wa.me/919495613121?text=Hi%2C%20I%27m%20interested%20in%20Hotel%20Bed%20Sheets.',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80'
    },
    {
      id: 'towels',
      cat: 'hospitality',
      title: 'Hotel Towels (Bath, Hand, Face)',
      spec: '400–800 GSM · 100% Cotton · Terry/Velour',
      description: 'Luxuriously soft and highly absorbent towels for bath, hand, and face use. Crafted from premium 100% cotton with superior durability for high-volume laundry cycles.',
      link: 'https://wa.me/919495613121?text=Hi%2C%20I%27m%20interested%20in%20Hotel%20Towels.',
      image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=600&q=80'
    },
    {
      id: 'uniforms',
      cat: 'hospitality',
      title: 'Hospitality Uniforms & Workwear',
      spec: 'Poly-Cotton/Stretch · Stain-Resistant',
      description: 'Professional uniforms and workwear for hotel staff, restaurant teams, and hospitality professionals. Designed for comfort, durability, and brand consistency.',
      link: 'https://wa.me/919495613121?text=Hi%2C%20I%27m%20interested%20in%20Hospitality%20Uniforms.',
      image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80'
    },
    {
      id: 'syringes',
      cat: 'medical',
      title: 'Syringes, Needles & IV Sets',
      spec: 'Sterile · ISO 13485 · CE/FDA Marked',
      description: 'Hospital-grade sterile syringes, needles, and IV administration sets. Fully certified for international healthcare standards and available in bulk export quantities.',
      link: 'https://wa.me/919495613121?text=Hi%2C%20I%27m%20interested%20in%20Syringes%20and%20IV%20Sets.',
      image: 'https://images.unsplash.com/photo-1585837146751-a44117f3a6fd?w=600&q=80'
    },
    {
      id: 'gloves',
      cat: 'medical',
      title: 'Surgical & Examination Gloves',
      spec: 'Latex/Nitrile/Vinyl · Powder-Free Options',
      description: 'High-quality surgical and examination gloves available in latex, nitrile, and vinyl. Powder-free options available. Meets international safety and sterility standards.',
      link: 'https://wa.me/919495613121?text=Hi%2C%20I%27m%20interested%20in%20Surgical%20Gloves.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80'
    },
    {
      id: 'beds',
      cat: 'medical',
      title: 'Hospital Beds (ICU, Fowler)',
      spec: '150–250kg Capacity · Crank/Electric',
      description: 'Heavy-duty ICU and Fowler hospital beds available in manual crank and electric configurations. Designed for patient safety, caregiver convenience, and clinical durability.',
      link: 'https://wa.me/919495613121?text=Hi%2C%20I%27m%20interested%20in%20Hospital%20Beds.',
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80'
    }
  ];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! Your enquiry has been received. Anabyn Global Ventures LLP will respond within 24 hours. You can also reach us directly: 📧 sales@anabyn.com 📱 +91 94956 13121");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="relative min-h-screen font-inter selection:bg-[#C8A020] selection:text-[#0D1B3E]">
      
      {/* 1. Navigation */}
      <nav className={cn(
        "fixed top-0 left-0 w-full h-[74px] z-[100] transition-all duration-300 backdrop-blur-md",
        isScrolled ? "bg-[#0D1B3E]/95 shadow-2xl border-b border-[#C8A020]/40" : "bg-[#0D1B3E]/80 border-b border-[#C8A020]/20"
      )}>
        <div className="container h-full flex items-center justify-between px-4 lg:px-8">
          <Link href="/" className="hover:opacity-90 transition-opacity">
            <AnabynLogo />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => (
              <Link key={link.name} href={link.href} className="text-white/90 hover:text-[#C8A020] text-sm font-medium transition-colors">
                {link.name}
              </Link>
            ))}
            <Button asChild className="rounded-full bg-gold-gradient text-[#0D1B3E] font-bold px-6 border-none hover:scale-105 transition-transform">
              <Link href="/inquiry">Contact Us</Link>
            </Button>
          </div>

          <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-[74px] left-0 w-full bg-[#0D1B3E] border-b border-[#C8A020]/20 lg:hidden animate-in slide-in-from-top duration-300">
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map(link => (
                <Link key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-white text-lg font-medium border-b border-white/5 pb-2">
                  {link.name}
                </Link>
              ))}
              <Button asChild className="w-full rounded-full bg-gold-gradient text-[#0D1B3E] font-bold py-6">
                <Link href="/inquiry" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* 2. Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden pt-[74px]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1600&q=80" 
            className="w-full h-full object-cover grayscale-[30%] brightness-[0.4]" 
            alt="Anabyn Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B3E] via-[#0D1B3E]/80 to-transparent" />
          <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-[#C8A020]/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent" />
        </div>

        <div className="container relative z-10 px-4 lg:px-8">
          <div className="max-w-[720px] space-y-8 fade-up visible">
            <div className="inline-flex items-center gap-2 border border-[#C8A020] rounded-full px-4 py-1.5">
              <ShieldCheck className="text-[#C8A020] w-4 h-4" />
              <span className="text-[#C8A020] text-xs font-bold tracking-[0.1em] uppercase">Trusted Global Export Partner from India</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white leading-[1.1]">
              Connecting India's Manufacturing <br />
              <span className="text-[#C8A020]">Power to Global Markets</span>
            </h1>

            <div className="space-y-4">
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                High-quality products. On-time delivery. World-class logistics.
              </p>
              <p className="text-gray-400 text-base max-w-lg leading-relaxed">
                Backed by exclusive alliances with top manufacturers, we deliver verified quality with unbeatable cost efficiency.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full bg-gold-gradient text-[#0D1B3E] font-bold px-8 hover:scale-105 transition-all shadow-xl shadow-gold/20 border-none">
                <Link href="/inquiry">Start Sourcing</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-white text-white hover:bg-white hover:text-[#0D1B3E] px-8 bg-transparent">
                <Link href="#products">Explore Product Range</Link>
              </Button>
              <Button asChild size="lg" className="rounded-full bg-[#25D366] text-white font-bold px-8 hover:opacity-90 transition-opacity border-none">
                <a href="https://wa.me/919495613121?text=Hi%20Anabyn%2C%20I%27d%20like%20to%20know%20more%20about%20your%20products." target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2" size={20} /> Chat on WhatsApp
                </a>
              </Button>
            </div>

            <div className="pt-12 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Countries Served', val: '50+' },
                { label: 'Years Experience', val: '10+' },
                { label: 'Happy Clients', val: '500+' },
                { label: 'Google Reviews', val: '4.9★' }
              ].map(stat => (
                <div key={stat.label} className="space-y-1">
                  <p className="text-2xl font-bold text-white">{stat.val}</p>
                  <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Marquee Bar */}
      <div className="bg-[#0D1B3E] py-6 border-y border-[#C8A020]/20 overflow-hidden select-none">
        <div className="animate-marquee whitespace-nowrap flex gap-12">
          {[1, 2].map(i => (
            <div key={i} className="flex gap-12 items-center">
              {[
                "ISO Certified Quality", "Hospitality Supplies", "Medical Supplies", 
                "Global Shipping", "Custom Branding", "Bulk Orders Welcome", 
                "Made in India", "OEM / Private Label"
              ].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <CircleCheck className="text-[#C8A020]" size={18} />
                  <span className="text-white font-bold text-sm tracking-widest uppercase">{item}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* 4. Products Section */}
      <section id="products" className="py-24 bg-white px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 fade-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#0D1B3E] mb-6">
              Premium Products for Hospitality & Healthcare
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {['all', 'hospitality', 'medical'].map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={cn(
                    "px-6 py-2 rounded-full font-bold text-sm transition-all capitalize border-2",
                    activeTab === cat 
                      ? "bg-[#1B45CC] border-[#1B45CC] text-white shadow-lg" 
                      : "border-[#1B45CC]/20 text-[#1B45CC] hover:bg-[#1B45CC]/5"
                  )}
                >
                  {cat === 'all' ? 'All Products' : cat === 'hospitality' ? '🏨 Hospitality Supplies' : '🏥 Medical Supplies'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.filter(p => activeTab === 'all' || p.cat === activeTab).map(product => (
              <div key={product.id} className="group flex flex-col bg-[#F5F7FA] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 fade-up">
                <div className="relative h-[240px] overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4 bg-[#0D1B3E] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {product.cat === 'hospitality' ? 'Hospitality' : 'Medical'}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-[#0D1B3E] mb-2">{product.title}</h3>
                  <p className="text-[#C8A020] text-xs font-bold uppercase tracking-wider mb-4">{product.spec}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">{product.description}</p>
                  <Link 
                    href={product.link}
                    target="_blank"
                    className="inline-flex items-center font-bold text-[#1B45CC] group/link border-b-2 border-transparent hover:border-[#C8A020] transition-all w-fit"
                  >
                    Enquire Now <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Stats Strip */}
      <section className="py-20 bg-navy-gradient text-white">
        <div className="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { label: 'Export Destinations', val: '50+' },
            { label: 'Units Shipped Annually', val: '1M+' },
            { label: 'Global Clients', val: '500+' },
            { label: 'On-Time Delivery', val: '99%' }
          ].map(stat => (
            <div key={stat.label} className="fade-up">
              <h3 className="text-5xl md:text-6xl font-playfair font-bold text-[#C8A020] mb-4">{stat.val}</h3>
              <div className="h-0.5 w-16 bg-[#C8A020]/40 mx-auto mb-4" />
              <p className="text-white/70 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Why Anabyn */}
      <section id="why" className="py-24 bg-white overflow-hidden px-4">
        <div className="container mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 fade-up">
            <div>
              <span className="text-[#1B45CC] font-bold text-xs uppercase tracking-widest mb-4 block">Efficiency & Trust</span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#0D1B3E] leading-[1.2]">
                The Partner Your <br className="hidden md:block" /> Business Deserves
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mt-6 max-w-lg">
                We remove the complexities of international sourcing, providing a transparent and reliable bridge between India's manufacturing excellence and your warehouse.
              </p>
            </div>
            <Button asChild size="lg" className="rounded-full bg-gold-gradient text-[#0D1B3E] font-bold px-10 hover:scale-105 transition-all border-none">
              <Link href="/inquiry">Start a Partnership <ArrowRight size={18} className="ml-2" /></Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <HandshakeIcon className="text-[#C8A020]" />, title: 'Exclusive Manufacturer Access', desc: 'Better pricing and quality than dealing directly with factories.' },
              { icon: <Globe className="text-[#C8A020]" />, title: 'Global Shipping Expertise', desc: 'Hassle-free logistics with strong freight and cargo partners worldwide.' },
              { icon: <Award className="text-[#C8A020]" />, title: 'Quality That Speaks for Itself', desc: 'Product inspections, certifications, and sample approvals on every order.' },
              { icon: <Eye className="text-[#C8A020]" />, title: 'Transparent & Reliable', desc: 'Real-time updates, ethical sourcing, and clear communication throughout.' },
              { icon: <Palette className="text-[#C8A020]" />, title: 'Tailored Solutions', desc: 'We support retail chains, wholesalers, private labels, and distributors.' },
              { icon: <Headphones className="text-[#C8A020]" />, title: 'Dedicated Account Manager', desc: 'One dedicated contact for every client — responsive, expert, proactive.' }
            ].map((card, i) => (
              <div key={i} className="p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 fade-up group">
                <div className="w-14 h-14 rounded-xl bg-[#0D1B3E]/5 group-hover:bg-[#0D1B3E] transition-colors flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h4 className="font-bold text-[#0D1B3E] mb-3 leading-tight">{card.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. About Us Section */}
      <section id="about" className="py-24 bg-[#F5F7FA] px-4">
        <div className="container mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative fade-up">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80" className="w-full h-full object-cover" alt="Manufacturing" />
            </div>
            <div className="absolute -bottom-10 -right-4 md:-right-10 bg-[#0D1B3E] p-8 md:p-10 rounded-2xl shadow-2xl border border-[#C8A020]/30 text-center">
              <p className="text-5xl md:text-6xl font-playfair font-bold text-[#C8A020]">10+</p>
              <p className="text-white text-xs font-bold uppercase tracking-widest mt-2">Years of Excellence</p>
            </div>
          </div>

          <div className="space-y-8 fade-up">
            <div>
              <span className="text-[#1B45CC] font-bold text-xs uppercase tracking-widest block mb-4">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#0D1B3E] leading-[1.2]">
                Proudly Made in India, <br /> Trusted Worldwide
              </h2>
              <div className="space-y-6 text-gray-600 mt-8 leading-relaxed">
                <p>Anabyn Global Ventures LLP was founded with a single mission: to connect India's vast manufacturing strength with international buyers who demand quality, reliability, and value.</p>
                <p>We work directly with vetted manufacturers across India's leading production hubs to source, quality-inspect, and export premium hospitality and medical supplies to buyers in Europe, the Middle East, North America, and beyond.</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Direct factory sourcing', 'Strict quality audits', 
                'Ethical manufacturing', 'Full documentation support', 
                'Private label availability'
              ].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <CircleCheck className="text-[#C8A020]" size={18} />
                  <span className="text-[#0D1B3E] font-semibold text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100">
              <img src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg" className="h-5 w-auto" alt="India Flag" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0D1B3E]">Proudly Made in India 🇮🇳</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials */}
      <section id="reviews" className="py-24 bg-navy-gradient text-white px-4 text-center">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto mb-16 fade-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Trusted by Industry Leaders</h2>
            <div className="flex flex-col items-center gap-2">
              <div className="flex text-[#C8A020] gap-1">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="currentColor" size={20} />)}
              </div>
              <p className="text-white/60 text-xs font-bold uppercase tracking-[0.2em]">4.9 Rating — Based on real Google Reviews</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { text: "Anabyn's attention to detail and commitment to quality is unmatched. They are our go-to partner for all our hotel linen needs.", author: "Procurement Manager, 5-Star Hotel Group" },
              { text: "The quality of the uniforms and the efficiency of their export process have made them an invaluable part of our supply chain.", author: "Supply Chain Head, International Brand" },
              { text: "Reliable, professional, and always on time. Anabyn Global Ventures truly understands the needs of the international market.", author: "General Manager, Luxury Resort" }
            ].map((rev, i) => (
              <div key={i} className="bg-white/5 p-10 rounded-3xl border border-white/10 relative fade-up">
                <div className="text-6xl font-serif text-[#C8A020]/20 absolute top-6 left-6">“</div>
                <p className="text-lg leading-relaxed text-white/90 italic mb-8 relative z-10">{rev.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-0.5 bg-[#C8A020]" />
                  <p className="text-xs font-bold uppercase tracking-widest text-white/60">{rev.author}</p>
                </div>
              </div>
            ))}
          </div>

          <Button asChild variant="outline" className="mt-16 rounded-full border-white text-white hover:bg-white hover:text-[#0D1B3E] px-10 h-14 font-bold bg-transparent">
            <Link href="https://share.google/Icw2FF4giN0LJdQcz" target="_blank">Read More Reviews on Google</Link>
          </Button>
        </div>
      </section>

      {/* 9. Certifications */}
      <section id="certifications" className="py-24 bg-white px-4 text-center">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto mb-16 fade-up">
            <span className="text-[#1B45CC] font-bold text-xs uppercase tracking-widest block mb-4">Global Compliance</span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#0D1B3E] mb-6">Certified to International Standards</h2>
            <div className="h-1 w-20 bg-[#C8A020] mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { emoji: '🏅', title: 'ISO 9001:2015', desc: 'Quality Management' },
              { emoji: '🏥', title: 'ISO 13485', desc: 'Medical Device Quality' },
              { emoji: '🇪🇺', title: 'CE Marking', desc: 'European Conformity' },
              { emoji: '🇺🇸', title: 'FDA Marked', desc: 'US Market Compliance' },
              { emoji: '🧵', title: 'OEKO-TEX®', desc: 'Textile Safety' },
              { emoji: '🌿', title: 'GOTS Certified', desc: 'Organic Textile' }
            ].map((cert, i) => (
              <div key={i} className="p-8 rounded-2xl border-2 border-gray-50 hover:border-[#C8A020] transition-all duration-300 fade-up group">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">{cert.emoji}</div>
                <h4 className="font-bold text-[#0D1B3E] text-sm mb-2">{cert.title}</h4>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Gold Trust Banner */}
      <section className="bg-gold-gradient py-16 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="fade-up">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#0D1B3E] mb-2">Ready to Place Your First Order?</h2>
            <p className="text-[#0D1B3E]/80 font-medium">Join 500+ businesses who trust Anabyn Global Ventures LLP for consistent quality.</p>
          </div>
          <Button asChild size="lg" className="rounded-full bg-[#0D1B3E] text-white font-bold px-10 h-16 hover:scale-105 transition-transform border-none fade-up">
            <a href="https://wa.me/919495613121?text=Hi%20Anabyn%2C%20I%27d%20like%20to%20start%20sourcing." target="_blank">
              <MessageSquare size={20} className="mr-2" /> Chat on WhatsApp
            </a>
          </Button>
        </div>
      </section>

      {/* 11. Customization */}
      <section id="customization" className="py-24 bg-navy-gradient text-white px-4">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 fade-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Tailored to Your Brand & Specifications</h2>
            <p className="text-white/70 text-lg leading-relaxed">We offer full customization support — from fabric selection to private label packaging — so every product feels uniquely yours.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Tag />, title: 'Private Label', desc: 'Your brand name and logo on every product — full OEM support available.' },
              { icon: <Palette />, title: 'Custom Colors & Designs', desc: 'Choose from a wide range of colours, patterns, and weave styles.' },
              { icon: <Ruler />, title: 'Custom Sizing', desc: 'All products available in custom dimensions to match your exact requirements.' },
              { icon: <Box />, title: 'Custom Packaging', desc: 'Branded boxes, polybags, and retail-ready packaging for your specific market.' },
              { icon: <Trophy />, title: 'Certification Support', desc: 'We help you meet local import regulations and specific certification requirements.' },
              { icon: <FlaskConical />, title: 'Sample Orders', desc: 'Request samples before placing a bulk order — no minimum on sample requests.' }
            ].map((opt, i) => (
              <div key={i} className="p-10 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#C8A020] transition-all duration-300 fade-up group">
                <div className="w-14 h-14 rounded-2xl bg-[#C8A020]/20 flex items-center justify-center mb-8 group-hover:bg-[#C8A020] transition-colors">
                  <div className="text-[#C8A020] group-hover:text-[#0D1B3E] transition-colors">
                    {opt.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-[#C8A020] mb-4">{opt.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{opt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Global Markets */}
      <section id="markets" className="py-24 bg-[#F5F7FA] px-4 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#0D1B3E] mb-16 fade-up">Exporting to 50+ Countries</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { flag: '🇬🇧', name: 'United Kingdom' }, { flag: '🇺🇸', name: 'United States' }, 
              { flag: '🇩🇪', name: 'Germany' }, { flag: '🇦🇪', name: 'UAE' }, 
              { flag: '🇸🇦', name: 'Saudi Arabia' }, { flag: '🇦🇺', name: 'Australia' }, 
              { flag: '🇨🇦', name: 'Canada' }, { flag: '🇫🇷', name: 'France' }, 
              { flag: '🇸🇬', name: 'Singapore' }, { flag: '🇯🇵', name: 'Japan' }
            ].map((country, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-[#C8A020] transition-all duration-300 fade-up group cursor-default">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{country.flag}</div>
                <span className="text-[#0D1B3E] font-bold tracking-widest uppercase text-[10px]">{country.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. FAQ Section */}
      <section id="faq" className="py-24 bg-white px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 fade-up">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#0D1B3E] mb-6">Frequently Asked Questions</h2>
            <div className="h-1 w-20 bg-[#C8A020] mx-auto" />
          </div>

          <Accordion type="single" collapsible className="space-y-4 fade-up">
            {[
              { q: "What is the minimum order quantity (MOQ)?", a: "MOQ varies by product category. We support both small trial orders and large bulk shipments. Contact us and we'll work out the best arrangement for your volume." },
              { q: "Do you offer samples before bulk orders?", a: "Yes. We provide product samples for evaluation before any bulk commitment. Sample costs are typically credited against your first full order." },
              { q: "What payment terms do you accept?", a: "We accept Letter of Credit (LC), Documents against Payment (DP), and Telegraphic Transfer (TT). Payment terms are discussed case by case based on order volume and client history." },
              { q: "Can you handle custom branding and private labels?", a: "Absolutely. We offer full OEM and private label services — your branding on the products, tags, and packaging. Minimum quantities apply for custom tooling." },
              { q: "Which certifications do your products carry?", a: "Our products carry ISO 9001, ISO 13485, CE Marking, FDA, OEKO-TEX®, and GOTS certifications depending on the product category and target market requirements." }
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border rounded-2xl px-6 bg-[#F5F7FA]">
                <AccordionTrigger className="text-[#0D1B3E] font-bold text-lg hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 14. Contact Section */}
      <section id="contact" className="py-24 bg-white px-4">
        <div className="container mx-auto grid lg:grid-cols-2 gap-20">
          <div className="space-y-12 fade-up">
            <div>
              <span className="text-[#1B45CC] font-bold text-xs uppercase tracking-widest block mb-4">Connect With Us</span>
              <h2 className="text-5xl font-playfair font-bold text-[#0D1B3E] leading-tight">Ready to Source? <br /> Let's Talk.</h2>
              <p className="text-gray-500 text-lg leading-relaxed mt-6 max-w-lg">Whether you need a price list, product samples, or a full export proposal — our team at Anabyn Global Ventures LLP responds within 24 hours.</p>
            </div>

            <div className="space-y-8">
              {[
                { icon: <Mail className="text-[#1B45CC]" />, label: 'Email Address', val: 'sales@anabyn.com', href: 'mailto:sales@anabyn.com' },
                { icon: <Phone className="text-[#1B45CC]" />, label: 'Phone / Call', val: '+91 94956 13121', href: 'tel:+919495613121' },
                { icon: <MessageSquare className="text-[#25D366]" />, label: 'WhatsApp', val: '+91 94956 13121', href: 'https://wa.me/919495613121' },
                { icon: <MapPin className="text-[#C8A020]" />, label: 'Location', val: 'India — Exporting Worldwide', href: '#' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:shadow-xl transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0D1B3E] mb-1 uppercase text-[10px] tracking-widest">{item.label}</h4>
                    <a href={item.href} className="text-gray-600 font-medium hover:text-[#1B45CC] transition-colors">{item.val}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="fade-up">
            <div className="bg-[#F5F7FA] p-10 rounded-[2.5rem] shadow-2xl border border-white">
              <h3 className="text-2xl font-playfair font-bold text-[#0D1B3E] mb-8">Request a Quote</h3>
              <form onSubmit={handleInquirySubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name*" required className="bg-white border-none h-14 rounded-2xl px-6 w-full shadow-sm focus:ring-2 ring-[#1B45CC] outline-none" />
                  <input type="text" placeholder="Company Name*" required className="bg-white border-none h-14 rounded-2xl px-6 w-full shadow-sm focus:ring-2 ring-[#1B45CC] outline-none" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="email" placeholder="Email Address*" required className="bg-white border-none h-14 rounded-2xl px-6 w-full shadow-sm focus:ring-2 ring-[#1B45CC] outline-none" />
                  <input type="text" placeholder="Phone / WhatsApp" className="bg-white border-none h-14 rounded-2xl px-6 w-full shadow-sm focus:ring-2 ring-[#1B45CC] outline-none" />
                </div>
                <input type="text" placeholder="Country*" required className="bg-white border-none h-14 rounded-2xl px-6 w-full shadow-sm focus:ring-2 ring-[#1B45CC] outline-none" />
                <select required className="bg-white border-none h-14 rounded-2xl px-6 w-full shadow-sm focus:ring-2 ring-[#1B45CC] outline-none text-gray-500 appearance-none">
                  <option value="">Product Category*</option>
                  <option value="bed-linen">Hotel Bed Linen</option>
                  <option value="bath-linen">Hotel Bath Linen</option>
                  <option value="uniforms">Uniforms & Workwear</option>
                  <option value="syringes">Syringes & IV Sets</option>
                  <option value="gloves">Surgical Gloves</option>
                  <option value="beds">Hospital Beds</option>
                  <option value="multiple">Multiple / Other</option>
                </select>
                <textarea placeholder="Tell us about your requirements (Sizes, Quantities, Customization)..." required className="bg-white border-none min-h-[150px] rounded-2xl p-6 w-full shadow-sm focus:ring-2 ring-[#1B45CC] outline-none"></textarea>
                <Button type="submit" className="w-full h-16 bg-[#1B45CC] hover:bg-[#2350D4] text-white font-bold rounded-2xl text-lg transition-all shadow-xl shadow-blue/20">
                  Send Enquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 15. Footer */}
      <footer className="bg-[#0D1B3E] pt-24 pb-12 text-white/70 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div className="lg:col-span-1.5 space-y-8">
              <AnabynLogo />
              <p className="text-sm leading-relaxed max-w-sm">
                India's trusted export partner for hospitality and medical supplies — serving buyers in 50+ countries with quality, reliability, and every handshake honoured.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: <LinkIcon size={18} />, href: 'https://www.linkedin.com/company/anabyn-global-ventures/' },
                  { icon: <MessageSquare size={18} />, href: 'https://wa.me/919495613121' },
                  { icon: <Globe size={18} />, href: 'https://share.google/Icw2FF4giN0LJdQcz' },
                  { icon: <Mail size={18} />, href: 'mailto:sales@anabyn.com' }
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#C8A020] hover:text-[#0D1B3E] transition-all">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase text-[10px] tracking-[0.3em] mb-10">Products</h4>
              <ul className="space-y-5 text-sm">
                <li><Link href="#products" className="hover:text-[#C8A020] transition-colors">Hotel Bed Sheets</Link></li>
                <li><Link href="#products" className="hover:text-[#C8A020] transition-colors">Hotel Towels</Link></li>
                <li><Link href="#products" className="hover:text-[#C8A020] transition-colors">Hospitality Uniforms</Link></li>
                <li><Link href="#products" className="hover:text-[#C8A020] transition-colors">Syringes & IV Sets</Link></li>
                <li><Link href="#products" className="hover:text-[#C8A020] transition-colors">Surgical Gloves</Link></li>
                <li><Link href="#products" className="hover:text-[#C8A020] transition-colors">Hospital Beds</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase text-[10px] tracking-[0.3em] mb-10">Company</h4>
              <ul className="space-y-5 text-sm">
                <li><Link href="/about-us" className="hover:text-[#C8A020] transition-colors">About Us</Link></li>
                <li><Link href="/customization" className="hover:text-[#C8A020] transition-colors">Customization</Link></li>
                <li><Link href="/quality" className="hover:text-[#C8A020] transition-colors">Quality & Certifications</Link></li>
                <li><Link href="#markets" className="hover:text-[#C8A020] transition-colors">Global Markets</Link></li>
                <li><Link href="/faq" className="hover:text-[#C8A020] transition-colors">FAQ</Link></li>
                <li><Link href="/careers" className="hover:text-[#C8A020] transition-colors">Careers</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold uppercase text-[10px] tracking-[0.3em] mb-10">Get in Touch</h4>
              <ul className="space-y-6 text-sm">
                <li className="flex items-center gap-3"><Mail size={16} className="text-[#C8A020]" /> sales@anabyn.com</li>
                <li className="flex items-center gap-3"><Phone size={16} className="text-[#C8A020]" /> +91 94956 13121</li>
                <li>
                  <Button asChild variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 rounded-xl py-6 bg-transparent">
                    <a href="https://wa.me/919495613121" target="_blank">WhatsApp Us</a>
                  </Button>
                </li>
                <li>
                  <Button asChild className="w-full bg-[#C8A020] text-[#0D1B3E] hover:bg-[#E2BA3A] rounded-xl py-6 font-bold border-none">
                    <a href="https://share.google/Icw2FF4giN0LJdQcz" target="_blank">⭐ Google Reviews</a>
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

      {/* Floating Elements */}
      <a 
        href="https://wa.me/919495613121?text=Hi%20Anabyn%2C%20I%27d%20like%20to%20know%20more%20about%20your%20products." 
        target="_blank"
        className="fixed bottom-7 right-7 w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-[90] group"
      >
        <MessageSquare size={32} />
        <span className="absolute right-20 bg-[#25D366] text-white px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Chat on WhatsApp</span>
      </a>

      {showScrollTop && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-28 right-7 w-12 h-12 bg-navy-gradient text-[#C8A020] border border-[#C8A020]/40 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-[90]"
        >
          <ChevronUp size={24} />
        </button>
      )}

    </div>
  );
}

// Simple Icon Components for Mapping
function HandshakeIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m11 17 2 2 6-6" /><path d="m18 10 1-1a2 2 0 0 0-3-3l-4 4" /><path d="m14 11 3 3" /><path d="m5 15-3-3a2 2 0 0 1 3-3l4 4" /><path d="m7 12 3 3" /><path d="m11 17-2 2a2 2 0 0 1-3-3l4-4" />
    </svg>
  )
}

function LinkIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}
