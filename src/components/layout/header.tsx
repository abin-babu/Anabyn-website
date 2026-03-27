
'use client';

import { useState, useEffect } from 'react';
import { Link, useRouter, usePathname } from '@/i18n/routing';
import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Package, ShieldCheck, Truck, Droplets, Bed, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { AnabynLogo } from '@/components/anabyn-logo';

export function Header() {
  const t = useTranslations('Nav');
  const locale = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productLinks = {
    terryTowels: [
      { label: 'Bath Towels', href: '/terry-towels#bath' },
      { label: 'Hand Towels', href: '/terry-towels#hand' },
      { label: 'Beach Towels', href: '/terry-towels#beach' },
      { label: 'Hotel Collections', href: '/hotel-collections' },
    ],
    bedLinen: [
      { label: 'Bed Sheets', href: '/bed-linen#sheets' },
      { label: 'Duvet Covers', href: '/bed-linen#duvet' },
      { label: 'Pillowcases', href: '/bed-linen#pillowcases' },
    ],
    services: [
      { label: 'OEM & Private Label', href: '/oem-private-label' },
      { label: 'Export Process', href: '/export-process' },
      { label: 'Certifications', href: '/certifications' },
    ]
  };

  const navLinks = [
    { label: t('about'), href: '/about-us' },
    { label: t('process'), href: '/export-process' },
    { label: t('certifications'), href: '/certifications' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 z-[100] w-full transition-all duration-500 py-4",
        isScrolled 
          ? "bg-[#060A14]/92 backdrop-blur-[18px] border-b border-[#C9A243]/15 shadow-2xl py-3" 
          : "bg-transparent"
      )}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <Link href="/" className="group transition-transform hover:scale-[1.02]">
          <AnabynLogo />
        </Link>
        
        <nav className="hidden lg:flex items-center space-x-2 rtl:space-x-reverse">
          {/* Products Mega Menu Trigger */}
          <div 
            className="relative px-4 py-2"
            onMouseEnter={() => setActiveMegaMenu(true)}
            onMouseLeave={() => setActiveMegaMenu(false)}
          >
            <button className="flex items-center gap-1.5 transition-colors">
              {t('products')} <ChevronDown className={cn("w-4 h-4 transition-transform duration-300", activeMegaMenu && "rotate-180")} />
            </button>

            {/* Mega Menu Content */}
            <div className={cn(
              "absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[700px] transition-all duration-300 transform",
              activeMegaMenu ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
            )}>
              <div className="bg-[#060A14] border border-[#C9A243]/20 rounded-3xl shadow-2xl overflow-hidden grid grid-cols-3 p-8 rtl:text-right">
                {/* Column 1 */}
                <div className="space-y-6">
                  <h4 className="text-[10px] font-black text-[#C9A243] uppercase tracking-[0.2em] flex items-center gap-2 mb-4">
                    <Droplets className="w-3 h-3" /> Terry Towels
                  </h4>
                  <ul className="space-y-3">
                    {productLinks.terryTowels.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href as any} className="text-white/70 hover:text-white text-xs font-bold transition-colors block">{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Column 2 */}
                <div className="space-y-6 border-x border-white/5 px-8">
                  <h4 className="text-[10px] font-black text-[#C9A243] uppercase tracking-[0.2em] flex items-center gap-2 mb-4">
                    <Bed className="w-3 h-3" /> Bed Linen
                  </h4>
                  <ul className="space-y-3">
                    {productLinks.bedLinen.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href as any} className="text-white/70 hover:text-white text-xs font-bold transition-colors block">{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Column 3 */}
                <div className="space-y-6 pl-8">
                  <h4 className="text-[10px] font-black text-[#C9A243] uppercase tracking-[0.2em] flex items-center gap-2 mb-4">
                    <Settings className="w-3 h-3" /> Services
                  </h4>
                  <ul className="space-y-3">
                    {productLinks.services.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href as any} className="text-white/70 hover:text-white text-xs font-bold transition-colors block">{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              href={link.href as any}
              className="px-4 py-2 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          
          <div className="pl-6 border-l border-white/10 ml-4 rtl:pl-0 rtl:pr-6 rtl:border-l-0 rtl:border-r rtl:ml-0 rtl:mr-4">
            <Link href="/request-quote" className="nav-cta">
              {t('requestQuote')}
            </Link>
          </div>
        </nav>

        <button 
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="h-7 w-7" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "fixed inset-0 z-[200] lg:hidden transition-all duration-500",
        isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        <div className="absolute inset-0 bg-[#060A14]/98 backdrop-blur-xl" />
        <div className="relative h-full flex flex-col p-6">
          <div className="flex items-center justify-between mb-16 rtl:flex-row-reverse">
            <AnabynLogo />
            <button 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="text-white p-2 hover:bg-white/10 rounded-full"
            >
              <X className="h-8 w-8" />
            </button>
          </div>

          <nav className="flex flex-col gap-8 text-center">
            <Link 
              href="/products" 
              className="text-3xl font-playfair font-bold text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('products')}
            </Link>
            {navLinks.map((link) => (
              <Link 
                key={link.label} 
                href={link.href as any}
                className="text-3xl font-playfair font-bold text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto pb-12">
            <Link 
              href="/request-quote" 
              className="w-full btn-quote-nav py-8 text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('requestQuote')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
