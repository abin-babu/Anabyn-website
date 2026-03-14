'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background with Overlays */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1600&q=80"
          alt="Premium Bed Linen"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B3E]/95 via-[#0D1B3E]/80 to-transparent" />
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#C8A020]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-[680px] space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center border border-[#C8A020] rounded-full px-4 py-1.5">
            <span className="text-[#C8A020] text-xs font-bold tracking-wider uppercase">✦ Trusted Global Export Partner from India</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white leading-tight">
            Connecting India's Manufacturing <br />
            <span className="text-[#C8A020]">Power to Global Markets</span>
          </h1>

          <div className="space-y-4">
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-light">
              High-quality products. On-time delivery. World-class logistics.
            </p>
            <p className="text-gray-400 text-base leading-relaxed max-w-lg">
              Backed by exclusive alliances with top manufacturers, we deliver verified quality with unbeatable cost efficiency.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild size="lg" className="rounded-full bg-gold-gradient text-[#0D1B3E] font-bold px-8 hover:scale-105 transition-transform border-none">
              <Link href="#contact">Start Sourcing</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-white text-white hover:bg-white hover:text-[#0D1B3E] px-8 bg-transparent">
              <Link href="#products">Explore Product Range</Link>
            </Button>
            <Button asChild size="lg" className="rounded-full bg-[#25D366] text-white font-bold px-8 hover:opacity-90 transition-opacity border-none">
              <a href="https://wa.me/919495613121?text=Hi%20Anabyn%2C%20I%27d%20like%20to%20know%20more%20about%20your%20products." target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="mr-2 h-5 w-5" /> Chat on WhatsApp
              </a>
            </Button>
          </div>

          {/* Stats Bar */}
          <div className="pt-12 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-1">
              <p className="text-2xl font-bold text-white" data-target="50" data-suffix="+">50+</p>
              <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">Countries Served</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-white" data-target="10" data-suffix="+">10+</p>
              <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">Years Experience</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-white" data-target="500" data-suffix="+">500+</p>
              <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">Happy Clients</p>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-white">4.9★</p>
              <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">Google Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
