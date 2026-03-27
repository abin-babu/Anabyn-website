'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Waves,
  Scissors,
  Layers,
  Leaf,
  Palette,
  Package,
  Globe
} from 'lucide-react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

export function TerryTowelsContent() {
  const scrollToSpecs = () => {
    const element = document.getElementById('specifications');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#060A14] via-[#060A14]/80 to-transparent z-10" />
          <Image 
            src="https://images.unsplash.com/photo-1639298107851-058984903954?w=1600&q=80" 
            alt="Premium Terry Towels Exporter India — Wholesale Cotton Bath Towels"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        
        <div className="container relative z-20 px-4 mx-auto">
          <div className="max-w-3xl space-y-8">
            <Badge className="bg-[#C9A243] text-[#060A14] font-black uppercase tracking-widest px-4 py-1">
              Luxury Export Grade
            </Badge>
            <h1 className="text-5xl md:text-7xl font-playfair font-bold leading-tight">
              Premium Terry Towels <br />
              <span className="text-[#C9A243]">Exporter India</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-2xl font-medium">
              Luxuriously crafted cotton terry towels for hotels, spas, retailers and distributors. 
              Available in 400–650 GSM. Ships globally to 50+ countries.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                onClick={scrollToSpecs}
                size="lg" 
                className="rounded-xl bg-[#1B3A8A] text-white hover:bg-[#1B3A8A]/90 h-14 px-8 font-bold border-none"
              >
                View Specifications
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl border-[#C9A243] text-[#C9A243] hover:bg-[#C9A243] hover:text-[#060A14] h-14 px-8 font-bold bg-transparent">
                <Link href="/request-quote">Request Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Product Variants Grid */}
      <section className="py-24 bg-white text-[#060A14]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold">Product Portfolio</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Standardised and custom sizes available for bulk procurement.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Bath Towels',
                specs: '450/500/600 GSM',
                size: '70x140cm & Custom',
                desc: 'Hotel-grade absorbency with reinforced double-stitched hems.',
                image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=600&q=80',
                icon: Waves
              },
              {
                title: 'Hand Towels',
                specs: '450 GSM',
                size: '40x70cm Sets',
                desc: 'Quick-dry technology, sold in matching sets for hospitality suites.',
                image: 'https://images.unsplash.com/photo-1523471826770-c437b4636fe6?w=600&q=80',
                icon: Scissors
              },
              {
                title: 'Beach Towels',
                specs: '380/400 GSM',
                size: 'Custom Print Available',
                desc: 'Vibrant dobby borders and jacquard designs for resorts.',
                image: 'https://images.unsplash.com/photo-1571139627661-cf707929f465?w=600&q=80',
                icon: Globe
              }
            ].map((variant, i) => (
              <Card key={i} className="group border-none shadow-xl overflow-hidden rounded-3xl hover:-translate-y-2 transition-all duration-500 product-card">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image 
                    src={variant.image} 
                    alt={variant.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#1B3A8A] text-white border-none">{variant.specs}</Badge>
                  </div>
                </div>
                <CardHeader className="p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <variant.icon className="w-5 h-5 text-[#C9A243]" />
                    <CardTitle className="text-2xl font-playfair font-bold text-[#060A14]">{variant.title}</CardTitle>
                  </div>
                  <CardDescription className="text-gray-500 font-medium">Size: {variant.size}</CardDescription>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <p className="text-sm leading-relaxed text-gray-600">{variant.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Materials Section */}
      <section className="py-24 bg-[#0D1F3C] text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div>
                <Badge variant="outline" className="border-[#C9A243] text-[#C9A243] mb-4">Material Intelligence</Badge>
                <h2 className="text-4xl md:text-6xl font-playfair font-bold">The Core of Comfort</h2>
              </div>
              
              <div className="grid gap-8">
                {[
                  { title: 'Egyptian Cotton', desc: '800+ thread-equivalent, ultra-absorbent long fibres.', icon: Layers },
                  { title: 'Supima Cotton', desc: 'USA-grown, extra-long staple, exceptional pill-resistance.', icon: ShieldCheck },
                  { title: 'Organic Cotton', desc: 'GOTS certified on request, ethically farmed.', icon: Leaf },
                  { title: 'Ring-spun Cotton', desc: 'The industry standard for durable everyday luxury.', icon: CheckCircle2 }
                ].map((mat, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#C9A243] group-hover:text-[#060A14] transition-all duration-300">
                      <mat.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#C9A243] mb-1">{mat.title}</h4>
                      <p className="text-white/60 text-sm leading-relaxed">{mat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-[#C9A243]/20">
              <Image 
                src="https://images.unsplash.com/photo-1761992157695-f0dd8d6d2db6?w=800&q=80" 
                alt="Cotton fibers and weaving quality" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
              <div className="absolute bottom-10 left-10 right-10 bg-[#060A14]/80 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                <p className="text-sm font-bold uppercase tracking-widest text-[#C9A243] mb-2">Technical Assurance</p>
                <p className="text-xs text-white/70 italic text-center">"Our Ring-spun techniques ensure that loops remain intact even after 200+ industrial laundry cycles."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Specifications Table */}
      <section id="specifications" className="py-24 bg-white text-[#060A14]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-playfair font-bold">Technical Specifications</h2>
              <div className="w-20 h-1 bg-[#C9A243] mx-auto mt-4" />
            </div>
            
            <div className="rounded-[2rem] border-2 border-gray-100 overflow-hidden shadow-2xl">
              <Table>
                <TableHeader className="bg-[#1B3A8A] text-white">
                  <TableRow>
                    <TableHead className="text-white font-bold h-14 px-8">GSM</TableHead>
                    <TableHead className="text-white font-bold h-14">Type</TableHead>
                    <TableHead className="text-white font-bold h-14">Standard Size</TableHead>
                    <TableHead className="text-white font-bold h-14">Min Order Qty</TableHead>
                    <TableHead className="text-white font-bold h-14 text-right pr-8">Lead Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="text-sm">
                  {[
                    { gsm: '400', type: 'Hand/Face', size: '40 x 70 cm', moq: '1,000 Pcs', lead: '3 Weeks' },
                    { gsm: '450', type: 'Bath/Standard', size: '70 x 140 cm', moq: '500 Pcs', lead: '3 Weeks' },
                    { gsm: '500', type: 'Premium Bath', size: '70 x 140 cm', moq: '500 Pcs', lead: '4 Weeks' },
                    { gsm: '600', type: 'Luxury Bath', size: '90 x 150 cm', moq: '300 Pcs', lead: '4 Weeks' },
                    { gsm: '650+', type: 'Spa/Bespoke', size: 'Custom', moq: '300 Pcs', lead: '5 Weeks' }
                  ].map((row, idx) => (
                    <TableRow key={idx} className="hover:bg-gray-50 transition-colors">
                      <TableCell className="font-black text-[#1B3A8A] px-8 py-6">{row.gsm}</TableCell>
                      <TableCell className="font-bold">{row.type}</TableCell>
                      <TableCell className="font-mono text-xs">{row.size}</TableCell>
                      <TableCell className="text-gray-500 font-medium">{row.moq}</TableCell>
                      <TableCell className="text-right pr-8 font-bold text-[#C9A243]">{row.lead}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <p className="mt-6 text-xs text-gray-400 italic text-center">* Lead times vary based on shipping destination and customization requirements.</p>
          </div>
        </div>
      </section>

      {/* 5. Customisation Section */}
      <section className="py-24 bg-[#060A14] text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_400px] gap-16 items-center">
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl md:text-6xl font-playfair font-bold leading-tight">Tailored to Your <br/><span className="text-[#C9A243]">Brand Identity</span></h2>
                <p className="text-white/60 text-lg mt-6 max-w-xl">We provide full OEM and private label services to ensure your procurement aligns with your brand's luxury positioning.</p>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {[
                  { title: 'Custom Embroidery', desc: 'Precision logo and monogram embroidery with Pantone matching thread.', icon: Palette },
                  { title: 'Advanced Weaving', desc: 'Dobby borders, jacquard weaves, and high-definition labels.', icon: Waves },
                  { title: 'Private Labeling', desc: 'Full OEM support including branded polybags and cartons.', icon: Package },
                  { title: 'Pantone Matching', desc: 'Custom dye matches for brand-consistent textile suites.', icon: Palette }
                ].map((item, i) => (
                  <div key={i} className="space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-[#C9A243]/20 flex items-center justify-center text-[#C9A243]">
                      <item.icon size={20} />
                    </div>
                    <h4 className="font-bold text-xl">{item.title}</h4>
                    <p className="text-sm text-white/50 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="bg-[#1B3A8A] border-none shadow-2xl p-10 rounded-[3rem] text-center relative overflow-hidden">
              <div className="relative z-10 space-y-8">
                <ShieldCheck className="w-16 h-16 text-[#C9A243] mx-auto" />
                <h3 className="text-3xl font-playfair font-bold">Request a Free Sample</h3>
                <p className="text-white/80 leading-relaxed">Verify our GSM density and softness before placing a bulk order. We ship samples worldwide.</p>
                <Button asChild size="lg" className="w-full bg-[#C9A243] text-[#060A14] font-black h-14 rounded-2xl shadow-xl hover:scale-105 transition-transform">
                  <Link href="/request-quote">Get Your Proposal <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-16 -translate-y-16" />
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
