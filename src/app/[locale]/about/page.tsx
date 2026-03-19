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
  CheckCircle2,
  ArrowRight,
  History,
  TrendingUp
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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
                Two Decades of Textiles. <br />
                <span className="text-[#C9A243]">One Export Mission.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-medium max-w-3xl mx-auto">
                Anabyn was founded on a simple conviction — India's finest textiles deserve world-class export infrastructure. Built by makers, run by operators, trusted by buyers across 50+ countries.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container px-4 mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
                <p>
                  The journey began in 2013, when Anoop Ashraf launched Dezire Sportswear — a textile brand built from the ground up in Kerala. Over the years that followed, Dezire grew into a manufacturing operation with genuine scale. By 2018, Anoop owned and operated the full production process, and the brand went on to deliver over one million units to buyers across India, building a community of more than 60,000 followers on both Instagram and Facebook along the way.
                </p>
                <p>
                  Through that decade on the factory floor, one gap became impossible to ignore. Exceptional Indian textile producers rarely had the export systems, documentation discipline, and global buyer relationships to match the quality they were crafting. The international opportunity was real. The infrastructure to reach it was not.
                </p>
                <p>
                  That is where Abin came in. Thaiparambath Babu Abin Babu brings deep corporate experience across international trade and business operations. Where Anoop brings the factory floor, Abin brings the boardroom — compliance frameworks, global buyer communication, and the institutional discipline that procurement partners across Europe, the Gulf, and beyond require before placing their first order.
                </p>
                <p>
                  Together, they founded Anabyn Global Ventures LLP in 2025 — combining Anoop's manufacturing mastery with Abin's corporate expertise into a single, focused export partner. Not a factory. Not a trading house. The premium export partner in between.
                </p>
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

        <section className="py-20 bg-[#060A14] text-white">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {[
                { target: 2013, suffix: '', label: 'Textile journey begins' },
                { target: 1, suffix: 'M+', label: 'Units delivered' },
                { target: 60, suffix: 'K+', label: 'Social followers' },
                { target: 2025, suffix: '', label: 'Anabyn founded' }
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

        <section className="py-32 bg-[#F5EDD6]">
          <div className="container px-4 mx-auto">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-12 items-center">
              <div className="w-24 h-24 rounded-3xl bg-[#C9A243]/20 flex items-center justify-center">
                <History className="w-12 h-12 text-[#C9A243]" />
              </div>
              <div className="space-y-6">
                <Badge variant="outline" className="text-[#060A14] border-[#060A14] font-black uppercase tracking-widest">Heritage Brand</Badge>
                <h2 className="text-4xl font-playfair font-bold text-[#060A14]">The Dezire Sportswear Legacy</h2>
                <p className="text-xl text-[#060A14]/80 leading-relaxed">
                  Dezire Sportswear — Anoop's first textile brand, launched in 2013 — is the foundation on which Anabyn is built. With over 60,000 followers on both Instagram and Facebook, Dezire demonstrated that an India-made textile brand could earn genuine customer loyalty and consistent repeat orders at scale. Anabyn inherits that manufacturing discipline and that direct-feedback relationship with buyers — now applied to the global export market.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#060A14]">The Visionaries</h2>
              <p className="text-gray-500 font-medium">Combining decades of craft with corporate excellence.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {[
                {
                  name: 'Anoop Ashraf',
                  title: 'Co-Founder & Manufacturing Head',
                  desc: "Anoop entered the textile industry in 2013 with Dezire Sportswear. By 2018 he owned full manufacturing operations in Kerala, overseeing GSM standards, AQL inspection, and production quality. Dezire Sportswear's 60,000+ followers reflect more than a decade of product trust.",
                  image: '/Founders/Anoop.jpeg'
                },
                {
                  name: 'Abin Babu',
                  title: 'Co-Founder & Business Development',
                  desc: "Abin (Thaiparambath Babu Abin Babu) brings the corporate and commercial infrastructure that turns manufacturing excellence into global trade. From export compliance and documentation to international buyer relationships, Abin ensures every Anabyn shipment meets the standards expected by procurement teams worldwide.",
                  image: '/Founders/Abin.png'
                }
              ].map((founder, i) => (
                <Card key={i} className="border-none shadow-2xl overflow-hidden rounded-[3rem] bg-white group hover:-translate-y-2 transition-all duration-500">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <Image src={founder.image} alt={founder.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  </div>
                  <div className="p-10 space-y-4">
                    <h3 className="text-2xl font-playfair font-bold text-[#060A14]">{founder.name}</h3>
                    <p className="text-[#C9A243] font-bold text-xs uppercase tracking-widest">{founder.title}</p>
                    <p className="text-gray-600 leading-relaxed text-sm">{founder.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#060A14] text-white border-t border-white/5">
          <div className="container px-4 mx-auto text-center space-y-8">
            <TrendingUp className="w-16 h-16 text-[#C9A243] mx-auto" />
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="text-4xl md:text-6xl font-playfair font-bold">Precision textiles. <br /><span className="text-[#C9A243]">Delivered to the world.</span></h2>
              <p className="text-white/60 text-lg">Talk to us about your next order.</p>
            </div>
            <Button asChild size="lg" className="rounded-2xl bg-[#C9A243] text-[#060A14] font-black h-16 px-12 text-lg hover:scale-105 transition-transform border-none">
              <Link href="/request-quote">Request Export Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
