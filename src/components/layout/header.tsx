'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Products', href: '/#products' },
    { label: 'About Us', href: '/#about' },
    { label: 'Markets', href: '/#markets' },
    { label: 'Quality', href: '/quality' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 z-50 w-full h-[74px] transition-all duration-300",
        "bg-[#0D1B3E]/90 backdrop-blur-md border-b border-[#C8A020]/20",
        isScrolled && "shadow-xl"
      )}
    >
      <div className="container h-full flex items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3 group">
          <img 
            src="/images/logo.png" 
            alt="Anabyn Logo" 
            className="h-10 w-auto"
          />
          <div className="flex flex-col">
            <span className="text-white font-playfair text-xl font-bold tracking-tight leading-none">ANABYN</span>
            <span className="text-[#C8A020] text-[10px] font-bold uppercase tracking-[0.2em] leading-tight mt-0.5">Global Ventures LLP</span>
          </div>
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
          <Button 
            asChild
            className="rounded-full bg-gold-gradient text-[#0D1B3E] font-bold border-none hover:opacity-90 transition-all px-6"
          >
            <Link href="/#contact">Get a Quote</Link>
          </Button>
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
        <div className="absolute top-[74px] left-0 w-full bg-[#0D1B3E] border-b border-[#C8A020]/20 lg:hidden animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href}
                className="text-white text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              asChild
              className="w-full rounded-full bg-gold-gradient text-[#0D1B3E] font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Link href="/#contact">Get a Quote</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
