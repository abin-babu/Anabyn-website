'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnabynLogo } from '@/components/anabyn-logo';

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
    { label: 'Products', href: '/#products' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Customization', href: '/customization' },
    { label: 'Quality', href: '/quality' },
    { label: 'Markets', href: '/#markets' },
    { label: 'FAQ', href: '/faq' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 z-50 w-full h-[74px] transition-all duration-300",
        "bg-[#0D1B3E]/90 backdrop-blur-md border-b border-[#C8A020]/20",
        isScrolled && "shadow-xl border-[#C8A020]/40"
      )}
    >
      <div className="container h-full flex items-center justify-between px-4">
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
          <Button 
            asChild
            className="rounded-full bg-gold-gradient text-[#0D1B3E] font-bold border-none hover:opacity-90 transition-all px-6"
          >
            <Link href="/inquiry">Contact Us</Link>
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
              <Link href="/inquiry">Contact Us</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}