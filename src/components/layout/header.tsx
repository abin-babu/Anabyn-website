
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Globe, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnabynLogo } from '@/components/anabyn-logo';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Products', href: '/products' },
    { label: 'About', href: '/about-us' },
    { label: 'Certifications', href: '/certifications' },
    { label: 'Export Guide', href: '/how-we-export' },
    { label: 'Insights', href: '/blog' },
    { label: 'FAQ', href: '/faq' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 z-50 w-full h-[74px] transition-all duration-300",
        "bg-[#0D1F3C]/90 backdrop-blur-md border-b border-[#C8A020]/20",
        isScrolled && "shadow-xl border-[#C8A020]/40 bg-[#0D1F3C]/95"
      )}
    >
      <div className="container h-full flex items-center justify-between px-4 mx-auto">
        <Link href="/" className="group">
          <AnabynLogo />
        </Link>
        
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              href={link.href}
              className="text-white/90 hover:text-[#C8A020] text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          
          <div className="flex items-center gap-4 border-l border-white/10 pl-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 text-white/80 hover:text-white text-xs font-bold uppercase tracking-widest outline-none">
                  <Globe className="w-4 h-4 text-brand-gold" /> EN <ChevronDown className="w-3 h-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-brand-navy border-brand-gold/20 text-white">
                <DropdownMenuItem className="hover:bg-brand-gold/20 cursor-pointer">English</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-brand-gold/20 cursor-pointer text-right" dir="rtl">العربية</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-brand-gold/20 cursor-pointer">Français</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-brand-gold/20 cursor-pointer">Español</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-brand-gold/20 cursor-pointer">Deutsch</DropdownMenuItem>
                <DropdownMenuItem className="hover:bg-brand-gold/20 cursor-pointer">हिन्दी</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button 
              asChild
              className="rounded-full bg-gold-gradient text-brand-navy font-bold border-none hover:scale-105 transition-all px-6 shadow-lg shadow-brand-gold/20"
            >
              <Link href="/request-quote">Request Quote</Link>
            </Button>
          </div>
        </nav>

        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[74px] left-0 w-full bg-[#0D1F3C] border-b border-[#C8A020]/20 lg:hidden animate-in slide-in-from-top duration-300 shadow-2xl">
          <nav className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href}
                className="text-white text-lg font-medium py-2 border-b border-white/5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 space-y-4">
               <div className="flex justify-between items-center text-white/60">
                  <span className="text-sm font-bold uppercase tracking-widest">Language</span>
                  <span className="text-brand-gold font-bold">English (EN)</span>
               </div>
               <Button 
                asChild
                className="w-full rounded-full bg-gold-gradient text-brand-navy font-bold py-6 text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Link href="/request-quote">Request Quote</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
