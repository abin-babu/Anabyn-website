'use client';

import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home, PackageSearch } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A1628] text-white p-4 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4A827] opacity-5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#1B3A8A] opacity-10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-xl w-full text-center relative z-10 space-y-12">
        {/* Logo Mark */}
        <div className="space-y-2 animate-in fade-in slide-in-from-top-4 duration-700">
          <h2 className="text-white text-2xl font-playfair font-bold tracking-widest uppercase">
            ANABYN
          </h2>
          <p className="text-[#D4A827] text-[10px] font-bold uppercase tracking-[0.4em]">
            Global Ventures LLP
          </p>
        </div>

        {/* 404 Text */}
        <div className="relative inline-block animate-in zoom-in duration-500 delay-200">
          <h1 className="text-[120px] md:text-[180px] font-playfair font-black text-[#D4A827] leading-none opacity-90">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <h3 className="text-3xl md:text-4xl font-playfair font-bold text-white">
            Page Not Found
          </h3>
          <p className="text-white/60 text-lg max-w-sm mx-auto leading-relaxed">
            The technical specification or page you are looking for has been moved or archived.
          </p>
        </div>

        {/* Navigation Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          <Button asChild size="lg" className="w-full sm:w-auto bg-[#D4A827] text-[#0A1628] hover:bg-[#D4A827]/90 font-black rounded-xl h-14 px-8 border-none">
            <Link href="/">
              <Home className="mr-2 w-4 h-4" /> Return Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 font-bold rounded-xl h-14 px-8 bg-transparent">
            <Link href="/products">
              <PackageSearch className="mr-2 w-4 h-4" /> View Catalogue
            </Link>
          </Button>
        </div>

        {/* Support Link */}
        <div className="pt-8 opacity-40 animate-in fade-in duration-1000 delay-700">
          <Link href="/contact" className="text-xs uppercase font-bold tracking-widest hover:text-[#D4A827] transition-colors">
            Contact Export Desk
          </Link>
        </div>
      </div>
    </div>
  );
}
