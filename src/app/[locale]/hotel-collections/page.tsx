import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle2, 
  Flame, 
  Tags, 
  PenTool, 
  ArrowRight, 
  Quote,
  ShieldCheck,
  Globe
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Hotel Towels & Bed Linen Supplier India | Hospitality Textiles | Anabyn",
  description: "Premium hotel towels and bed linen from India. GSM 400–650, custom logo embroidery, bulk export. Trusted by luxury hotels worldwide.",
};

export default function HotelCollectionsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#060A14] text-white">
      <Header />
      
      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="relative min-h-[80vh] flex items-center pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#060A14] via-[#060A14]/80 to-transparent z-10" />
            <Image 
              src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1600&q=80" 
              alt="Luxury Hotel Room with Premium Linens - Anabyn Hospitality"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="container relative z-20 px-4 mx-auto">
            <div className="max-w-3xl space-y-8">
              <Badge className="bg-[#C9A243] text-[#060A14] font-black uppercase tracking-widest px-4 py-1">
                Hospitality Excellence
              </Badge>
              <h1 className="text-5xl md:text-7xl font-playfair font-bold leading-tight">
                Hotel Towels & Bed Linen <br />
                <span className="text-[#C9A243]">Supplier India</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl font-medium">
                Comprehensive textile solutions for hotels, resort chains, and hospitality distributors. 
                Verified quality, industrial durability, and seamless global export.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild size="lg" className="rounded-xl bg-[#1B3A8A] text-white hover:bg-[#1B3A8A]/90 h-14 px-8 font-bold border-none">
                  <Link href="/request-quote">Request Hotel Sample Pack</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-xl border-[#C9A243] text-[#C9A243] hover:bg-[#C9A243] hover:text-[#060A14] h-14 px-8 font-bold bg-transparent">
                  <Link href="/products">View Full Catalogue</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Trust Strip */}
        <section className="py-12 bg-white text-[#060A14] border-y border-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400">Trusted by hotels in:</p>
              <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center text-xl font-playfair font-bold">
                <span className="flex items-center gap-2"><Globe className="w-5 h-5 text-[#C9A243]" /> UAE</span>
                <span className="flex items-center gap-2"><Globe className="w-5 h-5 text-[#C9A243]" /> UNITED KINGDOM</span>
                <span className="flex items-center gap-2"><Globe className="w-5 h-5 text-[#C9A243]" /> EUROPE</span>
                <span className="flex items-center gap-2"><Globe className="w-5 h-5 text-[#C9A243]" /> USA</span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Product Panels */}
        <section className="py-24 bg-white text-[#060A14]">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Towels Panel */}
              <div className="group relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80" 
                  alt="Hotel Bath Towels" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white space-y-4">
                  <h3 className="text-3xl font-playfair font-bold">Hotel Towels</h3>
                  <p className="text-white/70 max-w-md">Terry and Velour towels from 400–650 GSM. Available in standard optic white and bespoke brand colours.</p>
                  <Button asChild variant="link" className="text-[#C9A243] p-0 font-bold uppercase tracking-widest text-xs">
                    <Link href="/terry-towels">Explore Towels Collection →</Link>
                  </Button>
                </div>
              </div>

              {/* Bed Linen Panel */}
              <div className="group relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <Image 
                  src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80" 
                  alt="Hotel Bed Linen" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white space-y-4">
                  <h3 className="text-3xl font-playfair font-bold">Hotel Bed Linen</h3>
                  <p className="text-white/70 max-w-md">200–600 Thread Count sheets in sateen and percale. Engineered for high-frequency industrial laundering.</p>
                  <Button asChild variant="link" className="text-[#C9A243] p-0 font-bold uppercase tracking-widest text-xs">
                    <Link href="/bed-linen">Explore Bedding Collection →</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Why hotels choose Anabyn */}
        <section className="py-24 bg-[#0D1F3C]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold">The Anabyn Standard</h2>
              <p className="text-white/60 max-w-2xl mx-auto">Technical specifications tailored for high-occupancy hospitality environments.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  title: 'Batch Consistency', 
                  desc: 'Consistent optic white and Pantone-matched colours across all production batches.', 
                  icon: CheckCircle2 
                },
                { 
                  title: 'Compliant Fabrics', 
                  desc: 'Options for fire-retardant (BS 7175) and hygiene-compliant antimicrobial finishes.', 
                  icon: Flame 
                },
                { 
                  title: 'B2B Pricing', 
                  desc: 'Tiered bulk pricing structures starting from 500 units for towels and 100 sets for linen.', 
                  icon: Tags 
                },
                { 
                  title: 'Brand Integration', 
                  desc: 'Precision logo embroidery and custom woven labels for complete property branding.', 
                  icon: PenTool 
                }
              ].map((item, i) => (
                <Card key={i} className="bg-white/5 border-white/10 text-white rounded-3xl hover:bg-white/10 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-[#C9A243]/20 flex items-center justify-center text-[#C9A243] mb-4">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Case Study Pull-Quote */}
        <section className="py-24 bg-white text-[#060A14]">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-[#F5EDD6] p-12 md:p-20 rounded-[3rem] relative overflow-hidden text-center">
              <Quote className="w-20 h-20 text-[#C9A243]/20 absolute top-10 left-10" />
              <div className="relative z-10 space-y-8">
                <p className="text-2xl md:text-3xl font-playfair font-bold italic leading-relaxed text-[#0D1F3C]">
                  "Anabyn's ability to maintain GSM consistency across multiple shipping containers has been vital for our resort chain's procurement cycle in the UAE."
                </p>
                <div className="space-y-2">
                  <h4 className="font-bold text-lg text-[#0D1F3C]">Head of Procurement</h4>
                  <p className="text-sm font-bold uppercase tracking-widest text-[#C9A243]">Luxury Resort Group, Dubai</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. CTA Section */}
        <section className="py-24 bg-[#060A14] border-t border-white/5">
          <div className="container mx-auto px-4 text-center space-y-10">
            <ShieldCheck className="w-16 h-16 text-[#C9A243] mx-auto" />
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-4xl md:text-6xl font-playfair font-bold">Request Hotel Linen Sample Pack</h2>
              <p className="text-white/60 text-lg">Evaluate our weaves and thread counts firsthand. We ship physical sample swatches to your procurement office worldwide.</p>
            </div>
            <Button asChild size="lg" className="rounded-2xl bg-[#C9A243] text-[#060A14] font-black h-16 px-12 text-lg hover:scale-105 transition-transform border-none">
              <Link href="/request-quote">Contact Sourcing Desk <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
