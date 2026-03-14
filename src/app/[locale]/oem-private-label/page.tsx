'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  PenTool, 
  Package, 
  CheckCircle2, 
  Box, 
  Scissors, 
  FileCheck,
  ArrowRight,
  ShieldCheck,
  Palette,
  Tags
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function OEMPrivateLabelPage() {
  const steps = [
    { title: "Share your brief", desc: "Send us your technical specs, designs, and target quantities.", icon: Scissors },
    { title: "Material & Design Samples", desc: "We develop and ship physical samples for your review.", icon: Palette },
    { title: "Sample Approval", desc: "You verify the quality, weave, and branding details.", icon: CheckCircle2 },
    { title: "Production Begins", desc: "Manufacturing starts with a 30–45 day lead time.", icon: Box },
    { title: "Global Shipping", desc: "Direct export to your warehouse or port of choice.", icon: Package }
  ];

  const offers = [
    {
      title: "Custom Weave Patterns",
      desc: "Specific dobby borders, jacquard weaves, and patterns tailored to your brand's signature look.",
      icon: PenTool
    },
    {
      title: "Precision Embroidery",
      desc: "High-definition logo embroidery up to 3 colours with Pantone-matched threads.",
      icon: Tags
    },
    {
      title: "Branded Packaging",
      desc: "Full OEM support: custom boxes, poly bags, belly bands, and branded swing tags.",
      icon: Package
    },
    {
      title: "Private Labeling",
      desc: "Custom care labels and neck tags featuring your brand name and logo.",
      icon: FileCheck
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#060A14] text-white">
      <Header />
      
      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="relative pt-40 pb-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#060A14] via-[#060A14]/80 to-[#060A14] z-10" />
            <Image 
              src="https://images.unsplash.com/photo-1526290766257-c015850e4629?w=1600&q=80" 
              alt="OEM Private Label Textile Manufacturing India"
              fill
              className="object-cover opacity-40"
              priority
            />
          </div>
          <div className="container relative z-20 px-4 mx-auto text-center">
            <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <Badge variant="outline" className="text-[#C9A243] border-[#C9A243] px-4 py-1 uppercase tracking-[0.3em] font-black">
                Direct Manufacturer Access
              </Badge>
              <h1 className="text-5xl md:text-8xl font-playfair font-bold leading-tight">
                OEM & Private Label <br />
                <span className="text-[#C9A243]">Custom Textiles</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-medium max-w-3xl mx-auto">
                Launch your own branded textile line. We manufacture to your specifications, apply your branding, and export directly to your warehouse.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Button asChild size="lg" className="rounded-2xl bg-[#C9A243] text-[#060A14] hover:bg-[#C9A243]/90 h-16 px-10 font-black text-lg border-none shadow-2xl">
                  <Link href="/request-quote">Start Your Project <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. What we offer */}
        <section className="py-24 bg-white text-[#060A14]">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold">Comprehensive OEM Solutions</h2>
              <p className="text-gray-500 font-medium">Bespoke manufacturing for global retailers and luxury brands.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {offers.map((opt, i) => (
                <Card key={i} className="border-none shadow-xl rounded-[2.5rem] bg-[#F5EDD6]/30 group hover:bg-[#1B3A8A] transition-all duration-500 overflow-hidden">
                  <CardHeader className="p-10 pb-0">
                    <div className="w-16 h-16 rounded-2xl bg-[#1B3A8A]/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                      <opt.icon className="w-8 h-8 text-[#C9A243]" />
                    </div>
                  </CardHeader>
                  <CardContent className="p-10 pt-8">
                    <CardTitle className="text-2xl font-playfair font-bold mb-4 group-hover:text-white transition-colors">{opt.title}</CardTitle>
                    <p className="text-gray-600 leading-relaxed group-hover:text-white/70 transition-colors">{opt.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 3. How it works (Process) */}
        <section className="py-24 bg-[#0D1F3C] text-white">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-20 space-y-4">
              <Badge variant="outline" className="text-[#C9A243] border-[#C9A243]">The Workflow</Badge>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold">Your Path to Brand Launch</h2>
            </div>

            <div className="relative max-w-5xl mx-auto space-y-12">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#C9A243]/20 hidden md:block" />
              
              {steps.map((step, idx) => (
                <div key={idx} className="relative flex items-start gap-8 group">
                  <div className="w-16 h-16 rounded-full bg-[#C9A243] text-[#060A14] flex items-center justify-center shrink-0 font-bold text-xl z-10 shadow-xl border-4 border-[#0D1F3C]">
                    {idx + 1}
                  </div>
                  <div className="bg-white/5 border border-white/10 p-8 rounded-3xl group-hover:bg-white/10 transition-all flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <step.icon className="w-6 h-6 text-[#C9A243]" />
                      <h4 className="text-2xl font-bold">{step.title}</h4>
                    </div>
                    <p className="text-white/60 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. MOQ & Pricing Guidance */}
        <section className="py-24 bg-white text-[#060A14]">
          <div className="container px-4 mx-auto">
            <div className="max-w-5xl mx-auto">
              <div className="bg-[#060A14] rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A243]/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
                
                <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                  <div className="space-y-8">
                    <ShieldCheck className="w-16 h-16 text-[#C9A243]" />
                    <h2 className="text-4xl md:text-6xl font-playfair font-bold leading-tight">MOQ & <br /><span className="text-[#C9A243]">Procurement Guide</span></h2>
                    <p className="text-white/70 text-lg leading-relaxed">
                      We offer flexible MOQ structures to support growing boutique brands while maintaining the capacity for large-scale retail contracts.
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#C9A243]">
                        <CheckCircle2 className="w-5 h-5" /> Minimum 500 units per SKU
                      </li>
                      <li className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#C9A243]">
                        <CheckCircle2 className="w-5 h-5" /> Tiered volume discounts
                      </li>
                      <li className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[#C9A243]">
                        <CheckCircle2 className="w-5 h-5" /> 100% Export documentation support
                      </li>
                    </ul>
                  </div>
                  
                  <Card className="bg-white/5 border-white/10 backdrop-blur-md p-10 rounded-[2.5rem] text-center">
                    <div className="space-y-8">
                      <h3 className="text-3xl font-playfair font-bold text-white">Start Your Quote</h3>
                      <p className="text-white/60">Our account managers will provide a detailed technical proposal within 24 hours.</p>
                      <Button asChild size="lg" className="w-full bg-[#C9A243] text-[#060A14] font-black h-14 rounded-2xl shadow-xl hover:scale-105 transition-transform border-none">
                        <Link href="/request-quote">Contact OEM Desk</Link>
                      </Button>
                      <p className="text-[10px] text-white/40 uppercase tracking-widest">Confidential design disclosure assured</p>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
