
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle2, ShieldCheck, ArrowRight, Star, Settings, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luxury Hotel Towels India — Wholesale & Export | Anabyn',
  description: 'Source luxury hotel towels India wholesale from Anabyn. Premium 400–700 GSM terry towels, custom embroidery, and AQL 2.5 quality control. Exporting to 50+ countries.',
};

export default async function LuxuryHotelTowelsPage({ params }: { params: { locale: string } }) {
  const { locale } = await params;

  const productSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    'name': 'Luxury Hotel Towels — India Export Grade',
    'image': 'https://images.unsplash.com/photo-1639298107851-058984903954?w=800&q=80',
    'description': 'Premium luxury hotel towels India wholesale. High-GSM terry and velour towels for 5-star hospitality procurement.',
    'brand': { '@type': 'Brand', 'name': 'Anabyn' },
    'offers': {
      '@type': 'AggregateOffer',
      'priceCurrency': 'USD',
      'itemCondition': 'https://schema.org/NewCondition',
      'availability': 'https://schema.org/InStock',
      'seller': { '@type': 'Organization', 'name': 'Anabyn Global Ventures LLP' }
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `https://www.anabyn.com/${locale}` },
      { '@type': 'ListItem', 'position': 2, 'name': 'Products', 'item': `https://www.anabyn.com/${locale}/products` },
      { '@type': 'ListItem', 'position': 3, 'name': 'Luxury Hotel Towels India', 'item': `https://www.anabyn.com/${locale}/luxury-hotel-towels-india` }
    ]
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-40 pb-24 overflow-hidden bg-brand-navy text-white">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-navy/80 to-brand-navy z-10" />
            <Image src="https://images.unsplash.com/photo-1639298107851-058984903954?w=1600&q=80" alt="Luxury Hotel Towels India" fill className="object-cover opacity-30" priority />
          </div>
          <div className="container relative z-20 px-4 mx-auto text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <Badge variant="outline" className="text-brand-gold border-brand-gold px-4 py-1 uppercase tracking-[0.3em] font-black">Hospitality Grade</Badge>
              <h1 className="text-5xl md:text-7xl font-playfair font-bold leading-tight">Luxury Hotel Towels from India — <br /><span className="text-brand-gold">Premium Export Supplier</span></h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-medium max-w-3xl mx-auto">
                Anabyn Global Ventures provides **luxury hotel towels India wholesale** to the world's most prestigious resorts. Our towels are precision-crafted to your GSM specifications and shipped with full compliance documentation.
              </p>
              <div className="pt-4">
                <Button asChild size="lg" className="rounded-2xl bg-brand-gold text-brand-navy hover:scale-105 transition-transform h-16 px-12 font-black text-lg border-none shadow-2xl">
                  <Link href="/request-quote">Request Hotel Towel Quote <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specs */}
        <section className="py-24 bg-white">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-playfair font-bold text-brand-navy">Premium Manufacturing Specifications</h2>
              <p className="text-muted-foreground font-medium max-w-xl mx-auto">Engineered for luxury, built for industrial laundering cycles.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-brand-gold/10 shadow-xl rounded-[2.5rem] bg-secondary/5 group">
                <CardHeader className="p-10 pb-0">
                  <Settings className="w-10 h-10 text-brand-gold mb-6" />
                  <CardTitle className="text-2xl font-playfair font-bold">Cotton Varieties</CardTitle>
                </CardHeader>
                <CardContent className="p-10 pt-6">
                  <ul className="space-y-3 text-muted-foreground font-medium">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-gold" /> Ring-Spun Cotton (Durable)</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-gold" /> Combed Cotton (Ultra-Soft)</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-gold" /> Zero-Twist (Maximum Absorbency)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-brand-gold/10 shadow-xl rounded-[2.5rem] bg-secondary/5 group">
                <CardHeader className="p-10 pb-0">
                  <ShieldCheck className="w-10 h-10 text-brand-gold mb-6" />
                  <CardTitle className="text-2xl font-playfair font-bold">Quality & Compliance</CardTitle>
                </CardHeader>
                <CardContent className="p-10 pt-6">
                  <ul className="space-y-3 text-muted-foreground font-medium">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-gold" /> AQL 2.5 Standard Inspection</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-gold" /> OEKO-TEX Standard 100</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-gold" /> ISO 9001:2015 Operations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-brand-gold/10 shadow-xl rounded-[2.5rem] bg-secondary/5 group">
                <CardHeader className="p-10 pb-0">
                  <Award className="w-10 h-10 text-brand-gold mb-6" />
                  <CardTitle className="text-2xl font-playfair font-bold">Custom Options</CardTitle>
                </CardHeader>
                <CardContent className="p-10 pt-6">
                  <ul className="space-y-3 text-muted-foreground font-medium">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-gold" /> Precision Logo Embroidery</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-gold" /> Bespoke Dobby Borders</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-gold" /> Branded Packaging & Labels</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-secondary/20">
          <div className="container px-4 mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-brand-navy text-center mb-16">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="q1" className="border border-brand-gold/10 rounded-2xl px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-bold text-brand-navy">What is the MOQ for luxury hotel towels?</AccordionTrigger>
                <AccordionContent>Our standard minimum order quantity is 500 pieces per SKU for export orders. For custom weaves and specialized dyeing, the MOQ may vary.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2" className="border border-brand-gold/10 rounded-2xl px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-bold text-brand-navy">Do you provide samples before bulk production?</AccordionTrigger>
                <AccordionContent>Yes, we ship physical Master Samples via DHL/FedEx for evaluation. Sample fees are fully credited against your first bulk contract.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3" className="border border-brand-gold/10 rounded-2xl px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-bold text-brand-navy">Can you match specific brand colors?</AccordionTrigger>
                <AccordionContent>Absolutely. We offer Pantone-matching services for all towel orders, ensuring your procurement aligns perfectly with your brand identity.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4" className="border border-brand-gold/10 rounded-2xl px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-bold text-brand-navy">What are the lead times for global shipping?</AccordionTrigger>
                <AccordionContent>Standard production takes 30–45 days. Shipping to the UK/Europe takes 18–25 days, while Middle Eastern ports take 5–8 days.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-24 bg-white">
          <div className="container px-4 mx-auto text-center">
            <h2 className="text-3xl font-playfair font-bold text-brand-navy mb-12">Related Product Collections</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Terry Towels', 'Bed Linen', 'Hotel Collections', 'OEM Private Label'].map((item) => (
                <Link key={item} href={`/${item.toLowerCase().replace(/ /g, '-')}`} className="p-8 rounded-2xl border border-brand-gold/10 hover:bg-brand-gold hover:text-brand-navy transition-all font-bold">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
