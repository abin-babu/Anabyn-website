'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Target, 
  ShieldCheck, 
  Users, 
  Globe, 
  Ship, 
  Clock, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Reusable Counter Component leveraging global StatsObserver markup
function StatCounter({ target, suffix = "" }: { target: number, suffix?: string }) {
  return (
    <span 
      className="tabular-nums"
      data-target={target}
      data-suffix={suffix}
    >
      {target}{suffix}
    </span>
  );
}

export default function AboutStoryPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="relative pt-40 pb-24 overflow-hidden bg-[#060A14] text-white">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#060A14] via-transparent to-[#060A14] z-10" />
            <Image 
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1600&q=80" 
              alt="Anabyn Global Ventures Heritage — Indian Textile Export"
              fill
              className="object-cover opacity-40"
              sizes="100vw"
              priority
            />
          </div>
          <div className="container relative z-20 px-4 mx-auto text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <Badge variant="outline" className="text-[#C9A243] border-[#C9A243] px-4 py-1 uppercase tracking-[0.3em] font-black">
                The Brand Story
              </Badge>
              <h1 className="text-5xl md:text-8xl font-playfair font-bold leading-tight">
                Our Story — <br />
                <span className="text-[#C9A243]">Anabyn Global Ventures LLP</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-medium max-w-3xl mx-auto">
                Born from a passion for craftsmanship and a vision to bring India's finest textiles to the world stage.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Our Mission */}
        <section className="py-32 bg-[#F5EDD6]">
          <div className="container px-4 mx-auto text-center">
            <div className="max-w-5xl mx-auto">
              <p className="text-3xl md:text-5xl font-playfair font-bold text-[#060A14] leading-[1.3]">
                "To be the world's most trusted partner for premium Indian textile exports — delivering quality, reliability and craftsmanship in every shipment."
              </p>
              <div className="w-24 h-1.5 bg-[#C9A243] mx-auto mt-12 rounded-full" />
            </div>
          </div>
        </section>

        {/* 3. Our Values */}
        <section className="py-24 bg-white">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#060A14]">The Values We Honor</h2>
              <p className="text-gray-500 font-medium">Every handshake honored, every stitch inspected.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  title: 'Precision',
                  icon: Target,
                  desc: 'Every GSM, every thread count, and every single stitch is inspected through our rigorous 3-stage QC audit before dispatch.'
                },
                {
                  title: 'Trust',
                  icon: ShieldCheck,
                  desc: 'Complete documentation for seamless customs clearance. We specialize in LC, DP, and complex regulatory dossiers for global ports.'
                },
                {
                  title: 'Partnership',
                  icon: Users,
                  desc: 'We believe in building long-term institutional relationships, not transactional sales. Your growth is our primary success metric.'
                }
              ].map((value, i) => (
                <div key={i} className="text-center space-y-6 group">
                  <div className="w-20 h-20 rounded-[2rem] bg-[#1B3A8A]/5 flex items-center justify-center mx-auto group-hover:bg-[#1B3A8A] group-hover:text-white transition-all duration-500 shadow-xl border border-[#1B3A8A]/10">
                    <value.icon className="w-10 h-10 text-[#C9A243]" />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-[#060A14]">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Our Numbers (Stats) */}
        <section className="py-20 bg-[#060A14] text-white">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {[
                { target: 50, suffix: '+', label: 'Countries Served' },
                { target: 500, suffix: '+', label: 'Containers / Year' },
                { target: 99, suffix: '%', label: 'On-Time Delivery' },
                { target: 100, suffix: '%', label: 'Quality Certified' }
              ].map((stat, i) => (
                <div key={i} className="text-center space-y-3">
                  <h3 className="text-4xl md:text-6xl font-playfair font-bold text-[#C9A243]">
                    <StatCounter target={stat.target} suffix={stat.suffix} />
                  </h3>
                  <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-gray-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Made in India Section */}
        <section className="py-32 bg-white overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <Badge className="bg-[#1B3A8A] text-white px-4 py-1">Legacy & Future</Badge>
                <h2 className="text-4xl md:text-6xl font-playfair font-bold text-[#060A14] leading-tight">
                  Crafting the <br /><span className="text-[#C9A243]">Legacy of Indian Textiles</span>
                </h2>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    India is the world's second-largest textile exporter, carrying a heritage of craftsmanship that dates back millennia. At Anabyn, we carry that legacy forward.
                  </p>
                  <p>
                    We combine traditional weaving wisdom with modern quality systems, certified raw materials, and an unshakeable commitment to sustainable, ethical practices.
                  </p>
                </div>
                <div className="flex gap-4 pt-4">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#060A14]">
                    <CheckCircle2 className="text-[#C9A243] w-5 h-5" /> ISO 9001 Systems
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#060A14]">
                    <CheckCircle2 className="text-[#C9A243] w-5 h-5" /> GOTS Raw Materials
                  </div>
                </div>
              </div>
              <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-gray-50">
                <Image 
                  src="https://images.unsplash.com/photo-1526290766257-c015850e4629?w=800&q=80" 
                  alt="Modern Textile Manufacturing India" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1B3A8A]/20 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* 6. Visionaries Section */}
        <section className="py-24 bg-gray-50 border-t">
          <div className="container px-4 mx-auto max-w-5xl">
            <Card className="border-none shadow-2xl overflow-hidden rounded-[3rem] bg-white">
              <div className="grid md:grid-cols-2">
                <div className="relative h-[400px] md:h-auto bg-gray-100 grid grid-cols-2">
                  <div className="relative aspect-square md:aspect-auto">
                    <Image 
                      src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?w=400&h=400&fit=crop" 
                      alt="Anoop Ashraf - Founding Director" 
                      fill 
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="relative aspect-square md:aspect-auto">
                    <Image 
                      src="/Founders/PHOTO-2026-02-20-11-43-35.jpg" 
                      alt="Dr. Abin Babu - Founding Director" 
                      fill 
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </div>
                <div className="p-12 md:p-20 flex flex-col justify-center space-y-8">
                  <h3 className="text-3xl font-playfair font-bold text-[#060A14]">The Visionaries</h3>
                  <p className="text-gray-600 leading-relaxed italic">
                    "We didn't just want to be another export firm. We wanted to be an authority. Anabyn was founded to ensure that every buyer, no matter where they are in the world, can source from India with the same confidence they have in local production."
                  </p>
                  <div className="space-y-1">
                    <p className="font-bold text-[#060A14] text-lg">Anoop Ashraf & Dr. Abin Babu</p>
                    <p className="text-[#C9A243] font-bold text-xs uppercase tracking-widest">Founding Directors</p>
                  </div>
                  <Button asChild className="w-fit bg-[#1B3A8A] text-white font-bold h-12 rounded-xl">
                    <Link href="/request-quote">Work With Our Team <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}