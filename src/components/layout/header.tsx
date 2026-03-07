
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Globe, Package, ShieldCheck, Mail, Phone, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnabynLogo } from '@/components/anabyn-logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { products as catalog } from '@/lib/products';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '/about-us' },
    { label: 'Certifications', href: '/certifications' },
    { label: 'How We Export', href: '/how-we-export' },
    { label: 'Blog', href: '/blog' },
    { label: 'Sustainability', href: '/sustainability' },
  ];

  const categories = [
    { name: 'Hospitality Supplies', id: 'hospitality-supplies', desc: 'Premium linens, towels & uniforms' },
    { name: 'Medical Supplies', id: 'medical-supplies', desc: 'Sterile disposables & hospital furniture' }
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 z-[100] w-full transition-all duration-500",
        isScrolled 
          ? "bg-brand-navy/95 backdrop-blur-xl shadow-2xl py-3 border-b border-brand-gold/20" 
          : "bg-brand-navy/80 backdrop-blur-md py-5 border-b border-white/10"
      )}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <Link href="/" className="group transition-transform hover:scale-[1.02]">
          <AnabynLogo />
        </Link>
        
        <nav className="hidden lg:flex items-center space-x-1">
          {/* Products Mega Menu Trigger */}
          <div 
            className="relative group px-4 py-2"
            onMouseEnter={() => setActiveMegaMenu('products')}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <button className="flex items-center gap-1.5 text-white/90 hover:text-brand-gold text-sm font-bold uppercase tracking-widest transition-colors">
              Products <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", activeMegaMenu === 'products' && "rotate-180")} />
            </button>

            {/* Mega Menu Content */}
            <div className={cn(
              "absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[600px] transition-all duration-300 transform",
              activeMegaMenu === 'products' ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"
            )}>
              <div className="bg-white rounded-3xl shadow-2xl border border-brand-gold/20 overflow-hidden grid grid-cols-2">
                <div className="p-8 bg-secondary/10">
                  <h4 className="text-xs font-bold text-brand-navy uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                    <Package className="w-4 h-4 text-brand-gold" /> Categories
                  </h4>
                  <div className="space-y-6">
                    {categories.map(cat => (
                      <Link 
                        key={cat.id} 
                        href={`/products?category=${cat.id}`}
                        className="block group/item"
                      >
                        <p className="text-brand-navy font-bold text-sm group-hover/item:text-brand-gold transition-colors">{cat.name}</p>
                        <p className="text-xs text-muted-foreground mt-1">{cat.desc}</p>
                      </Link>
                    ))}
                  </div>
                  <Button asChild variant="link" className="mt-8 p-0 text-brand-gold font-bold text-xs uppercase tracking-widest">
                    <Link href="/products">View All Products →</Link>
                  </Button>
                </div>
                <div className="p-8 bg-white border-l border-gray-100">
                  <h4 className="text-xs font-bold text-brand-navy uppercase tracking-[0.2em] mb-6">Featured Products</h4>
                  <div className="space-y-4">
                    {catalog.filter(p => p.featured).slice(0, 3).map(p => (
                      <Link 
                        key={p.id} 
                        href={`/products/${p.slug}`}
                        className="flex items-center gap-4 group/prod"
                      >
                        <div className="w-12 h-12 rounded-lg bg-secondary/20 overflow-hidden relative flex-shrink-0">
                          <img src={p.images[0]} alt={p.name} className="object-cover w-full h-full group-hover/prod:scale-110 transition-transform" />
                        </div>
                        <p className="text-xs font-bold text-brand-navy line-clamp-2 leading-tight group-hover/prod:text-brand-gold transition-colors">{p.name}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              href={link.href}
              className="px-4 py-2 text-white/90 hover:text-brand-gold text-sm font-bold uppercase tracking-widest transition-colors"
            >
              {link.label}
            </Link>
          ))}
          
          <div className="flex items-center gap-4 border-l border-white/10 ml-4 pl-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 text-white/80 hover:text-white text-xs font-bold uppercase tracking-widest outline-none">
                  <Globe className="w-4 h-4 text-brand-gold" /> EN <ChevronDown className="w-3 h-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-brand-navy border-brand-gold/20 text-white min-w-[140px]">
                <DropdownMenuItem className="hover:bg-brand-gold/20 cursor-pointer text-xs font-bold">English (EN)</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-brand-gold/20 cursor-pointer text-xs font-bold text-right" dir="rtl">العربية (AR)</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-brand-gold/20 cursor-pointer text-xs font-bold">Français (FR)</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-brand-gold/20 cursor-pointer text-xs font-bold">Deutsch (DE)</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-brand-gold/20 cursor-pointer text-xs font-bold">हिन्दी (HI)</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button 
              asChild
              className="rounded-full bg-brand-gold text-brand-navy font-black border-none hover:scale-105 transition-all px-8 shadow-xl shadow-brand-gold/20 h-11"
            >
              <Link href="/request-quote">Request Quote</Link>
            </Button>
          </div>
        </nav>

        <button 
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="h-7 w-7" />
        </button>
      </div>

      {/* Mobile Menu - Slide-out Drawer */}
      <div className={cn(
        "fixed inset-0 z-[200] lg:hidden transition-all duration-500",
        isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <div 
          className="absolute inset-0 bg-brand-navy/80 backdrop-blur-md" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className={cn(
          "absolute right-0 top-0 h-full w-[85%] max-w-sm bg-brand-navy border-l border-brand-gold/20 shadow-2xl transition-transform duration-500 transform",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="p-6 flex flex-col h-full">
            <div className="flex items-center justify-between mb-12">
              <AnabynLogo />
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-white p-2 hover:bg-white/10 rounded-full">
                <X className="h-7 w-7" />
              </button>
            </div>

            <nav className="flex flex-col gap-6">
              <Link href="/products" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-playfair font-bold text-white border-b border-white/5 pb-4">Products</Link>
              {navLinks.map((link) => (
                <Link 
                  key={link.label} 
                  href={link.href}
                  className="text-2xl font-playfair font-bold text-white border-b border-white/5 pb-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-12 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <a href="mailto:sales@anabyn.com" className="flex flex-col items-center p-4 rounded-2xl bg-white/5 border border-white/10">
                  <Mail className="w-5 h-5 text-brand-gold mb-2" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">Email</span>
                </a>
                <a href="tel:+919495613121" className="flex flex-col items-center p-4 rounded-2xl bg-white/5 border border-white/10">
                  <Phone className="w-5 h-5 text-brand-gold mb-2" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-widest">Call Us</span>
                </a>
              </div>
              <Button asChild className="w-full rounded-2xl bg-brand-gold text-brand-navy font-black py-8 text-lg">
                <Link href="/request-quote" onClick={() => setIsMobileMenuOpen(false)}>Request Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
