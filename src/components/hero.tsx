'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-1');

  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background with Overlays */}
      <div className="absolute inset-0">
        <img
          src={heroImage?.imageUrl || "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6"}
          alt="Premium Bed Linen"
          className="w-full h-full object-cover"
        />
        {/* Navy to Royal Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B3E]/90 via-[#0D1B3E]/70 to-[#1B45CC]/40" />
        {/* Radial Gold Glow */}
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#C8A020]/10 blur-[120px] rounded-full" />
        {/* White bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-[680px] space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center bg-[#C8A020]/10 border border-[#C8A020]/30 rounded-full px-4 py-1.5">
            <span className="text-[#C8A020] text-xs font-bold tracking-wider uppercase">✦ Trusted Global Export Partner from India</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white leading-tight">
            Premium Textile & Medical <br />
            <span className="text-[#C8A020]">Exports You Can Trust</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
            Anabyn Global Ventures LLP connects India's finest manufacturing prowess with global demand. From high-thread-count bed linen to certified medical disposables, we deliver quality without compromise.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild size="lg" className="rounded-full bg-gold-gradient text-[#0D1B3E] font-bold px-8 hover:scale-105 transition-transform border-none">
              <Link href="/#contact">Request a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-white text-white hover:bg-white hover:text-[#0D1B3E] px-8 bg-transparent">
              <Link href="/#products">View Products</Link>
            </Button>
          </div>

          {/* Stats Row */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-1">
              <p className="text-2xl font-bold text-white">50+</p>
              <div className="h-px w-8 bg-white/30" />
              <p className="text-gray-400 text-xs uppercase tracking-widest">Countries Served</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-white">10+</p>
              <div className="h-px w-8 bg-white/30" />
              <p className="text-gray-400 text-xs uppercase tracking-widest">Years Experience</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-white">500+</p>
              <div className="h-px w-8 bg-white/30" />
              <p className="text-gray-400 text-xs uppercase tracking-widest">Happy Clients</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-white">3</p>
              <div className="h-px w-8 bg-white/30" />
              <p className="text-gray-400 text-xs uppercase tracking-widest">Product Categories</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
