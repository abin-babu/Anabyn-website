'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Wind, 
  Sparkles, 
  Maximize, 
  Grid3X3, 
  Package,
  History
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function BedLinenPage() {
  const scrollToGuide = () => {
    const element = document.getElementById('tc-guide');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#060A14] text-white">
      <Header />
      
      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="relative min-h-[85vh] flex items-center pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#060A14] via-[#060A14]/80 to-transparent z-10" />
            <Image 
              src="https://images.unsplash.com/photo-1617744257724-6fafec25442f?w=1600&q=80" 
              alt="Luxury Bed Linen Exporter India — Premium Wholesale Cotton Sheets"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
          
          <div className="container relative z-20 px-4 mx-auto">
            <div className="max-w-3xl space-y-8">
              <Badge className="bg-[#C9A243] text-[#060A14] font-black uppercase tracking-widest px-4 py-1">
                Elite Export Grade
              </Badge>
              <h1 className="text-5xl md:text-7xl font-playfair font-bold leading-tight">
                Luxury Bed Linen <br />
                <span className="text-[#C9A243]">Exporter India</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl font-medium">
                Exquisitely woven bed sheets, duvet covers and pillowcases in percale and sateen weaves. 
                Thread counts 200–1000TC. Ships to 50+ countries.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  onClick={scrollToGuide}
                  size="lg" 
                  className="rounded-xl bg-[#1B3A8A] text-white hover:bg-[#1B3A8A]/90 h-14 px-8 font-bold border-none"
                >
                  Thread Count Guide
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-xl border-[#C9A243] text-[#C9A243] hover:bg-[#C9A243] hover:text-[#060A14] h-14 px-8 font-bold bg-transparent">
                  <Link href="/request-quote">Request Proposal</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Collection Grid */}
        <section className="py-24 bg-white text-[#060A14]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold">The Anabyn Collection</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">Masterfully crafted weaves for every hospitality and retail standard.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Percale Weave',
                  specs: 'Crisp, Cool, Breathable',
                  desc: 'A classic one-over-one-under weave that is matte and crisp. Ideal for high-occupancy hotels and healthcare facilities needing durability.',
                  image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80',
                  icon: Wind
                },
                {
                  title: 'Sateen Weave',
                  specs: 'Silky, Smooth, Lustrous',
                  desc: 'Four-over-one-under weave that results in a silky-smooth finish with a subtle sheen. Perfect for premium retail and luxury boutiques.',
                  image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&q=80',
                  icon: Sparkles
                },
                {
                  title: 'Egyptian Cotton',
                  specs: '400–1000TC Heirloom',
                  desc: 'Sourced from long-staple Indian and Egyptian cotton for extraordinary strength and softness. The ultimate heirloom quality.',
                  image: 'https://images.unsplash.com/photo-1629079448221-2073f6bc61e5?w=600&q=80',
                  icon: History
                }
              ].map((item, i) => (
                <Card key={i} className="group border-none shadow-xl overflow-hidden rounded-3xl hover:-translate-y-2 transition-all duration-500 product-card">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-700" 
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#1B3A8A] text-white border-none px-3">{item.specs}</Badge>
                    </div>
                  </div>
                  <CardHeader className="p-8">
                    <div className="flex items-center gap-3 mb-2">
                      <item.icon className="w-5 h-5 text-[#C9A243]" />
                      <CardTitle className="text-2xl font-playfair font-bold text-[#060A14]">{item.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <p className="text-sm leading-relaxed text-gray-600">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Product Types Section */}
        <section className="py-24 bg-[#0D1F3C] text-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-[#C9A243]/20 relative">
                  <Image 
                    src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80" 
                    alt="Luxury bedding arrangement" 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#C9A243] p-8 rounded-3xl shadow-2xl text-[#060A14] max-w-[240px]">
                  <p className="font-bold text-lg mb-2">Complete Sets</p>
                  <p className="text-sm font-medium opacity-80 italic">"Coordinated suites for a seamless room design."</p>
                </div>
              </div>

              <div className="space-y-10 order-1 lg:order-2">
                <div>
                  <Badge variant="outline" className="border-[#C9A243] text-[#C9A243] mb-4">Product Range</Badge>
                  <h2 className="text-4xl md:text-6xl font-playfair font-bold">Every Component of Comfort</h2>
                </div>
                
                <div className="grid gap-6">
                  {[
                    { title: 'Flat & Fitted Sheets', desc: 'Deep pockets and all-around elastic for a perfect fit on any mattress depth.', icon: Maximize },
                    { title: 'Duvet & Quilt Covers', desc: 'Secured with high-strength ties and hidden closures for industrial washing.', icon: Layers },
                    { title: 'Pillowcases & Shams', desc: 'Available in Standard, King, and Euro sizes with elegant flange details.', icon: Grid3X3 },
                    { title: 'Complete Bedding Sets', desc: 'Bundled procurement solutions for rapid property fit-outs.', icon: Package }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 items-start p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                      <div className="w-12 h-12 rounded-xl bg-[#C9A243]/20 text-[#C9A243] flex items-center justify-center shrink-0">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                        <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Thread Count Guide */}
        <section id="tc-guide" className="py-24 bg-white text-[#060A14]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-playfair font-bold">Thread Count Intelligence</h2>
                <div className="w-20 h-1 bg-[#C9A243] mx-auto mt-4" />
                <p className="mt-6 text-gray-500">Choosing the right density for your specific market segment.</p>
              </div>
              
              <div className="rounded-[2rem] border-2 border-gray-100 overflow-hidden shadow-2xl">
                <Table>
                  <TableHeader className="bg-[#1B3A8A] text-white">
                    <TableRow>
                      <TableHead className="text-white font-bold h-14 px-8">Thread Count (TC)</TableHead>
                      <TableHead className="text-white font-bold h-14">Market Segment</TableHead>
                      <TableHead className="text-white font-bold h-14">Best Use Case</TableHead>
                      <TableHead className="text-white font-bold h-14 text-right pr-8">Luxury Rating</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody className="text-sm">
                    {[
                      { tc: '200 - 300', segment: 'Mid-Range / Institutional', use: 'Everyday durability for high turnover.', rating: 'Standard' },
                      { tc: '400 - 600', segment: 'Premium / 4-Star+', use: 'The luxury hotel standard for softness.', rating: 'High' },
                      { tc: '800 - 1000', segment: 'Ultra-Luxury / Retail', use: 'Heirloom quality for the elite guest.', rating: 'Supreme' }
                    ].map((row, idx) => (
                      <TableRow key={idx} className="hover:bg-gray-50 transition-colors">
                        <TableCell className="font-black text-[#1B3A8A] px-8 py-6">{row.tc}</TableCell>
                        <TableCell className="font-bold">{row.segment}</TableCell>
                        <TableCell className="text-gray-500 font-medium">{row.use}</TableCell>
                        <TableCell className="text-right pr-8 font-bold text-[#C9A243]">{row.rating}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Customisation Section */}
        <section className="py-24 bg-[#060A14] text-white border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-12">
                <div>
                  <h2 className="text-4xl md:text-6xl font-playfair font-bold leading-tight">Bespoke <br/><span className="text-[#C9A243]">Specifications</span></h2>
                  <p className="text-white/60 text-lg mt-6 max-w-xl">We handle complex technical requirements for global retailers and hospitality groups.</p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-8">
                  {[
                    { title: 'Custom Sizing', desc: 'Bespoke dimensions for non-standard mattresses and pillows.' },
                    { title: 'Custom Weaves', desc: 'Specific dobby or jacquard patterns woven to your design.' },
                    { title: 'Private Label', desc: 'Full OEM support with branded inserts and custom packaging.' },
                    { title: 'Stitch Details', desc: 'Oxford borders, piping, and specialized embroidery.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <CheckCircle2 className="text-[#C9A243] w-6 h-6 shrink-0" />
                      <div>
                        <h4 className="font-bold text-lg">{item.title}</h4>
                        <p className="text-sm text-white/40">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-[#1B3A8A] to-[#0D1F3C] p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden text-center">
                <div className="relative z-10 space-y-8">
                  <ShieldCheck className="w-16 h-16 text-[#C9A243] mx-auto" />
                  <h3 className="text-3xl font-playfair font-bold">Request Official Quote</h3>
                  <p className="text-white/80 leading-relaxed">Prepare your technical dossier with us. Our account managers respond within 24 hours with comprehensive pricing.</p>
                  <Button asChild size="lg" className="w-full bg-[#C9A243] text-[#060A14] font-black h-14 rounded-2xl shadow-xl hover:scale-105 transition-transform">
                    <Link href="/request-quote">Contact Sourcing Desk <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                </div>
                <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full -translate-x-16 -translate-y-16" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
