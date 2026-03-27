
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle2, Bed, Layers, Ruler, Maximize, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hotel Bed Linen Supplier India — Export Quality | Anabyn',
  description: 'Source from a premium hotel bed linen supplier India. 200TC–600TC cotton sheets, sateen and percale weaves. ISO 9001 certified. Shipped to 50+ countries.',
};

export default async function HotelBedLinenSupplierPage({ params }: { params: { locale: string } }) {
  const { locale } = await params;

  const productSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    'name': 'Premium Hotel Bed Linen — India Export Collection',
    'image': 'https://images.unsplash.com/photo-1617744257724-6fafec25442f?w=800&q=80',
    'description': 'Direct source for hotel bed linen supplier India. High thread-count sheets and duvet covers for hospitality procurement.',
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
      { '@type': 'ListItem', 'position': 3, 'name': 'Hotel Bed Linen Supplier India', 'item': `https://www.anabyn.com/${locale}/hotel-bed-linen-supplier-india` }
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
            <Image src="https://images.unsplash.com/photo-1617744257724-6fafec25442f?w=1600&q=80" alt="Hotel Bed Linen Supplier India" fill className="object-cover opacity-30" priority />
          </div>
          <div className="container relative z-20 px-4 mx-auto text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <Badge variant="outline" className="text-brand-gold border-brand-gold px-4 py-1 uppercase tracking-[0.3em] font-black">Elite Bedding</Badge>
              <h1 className="text-5xl md:text-7xl font-playfair font-bold leading-tight">Premium Hotel Bed Linen — <br /><span className="text-brand-gold">Supplier and Exporter from India</span></h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-medium max-w-3xl mx-auto">
                Partner with a trusted **hotel bed linen supplier India**. We offer 200TC to 600TC cotton sheets in percale and sateen weaves, engineered for the rigorous demands of industrial laundering.
              </p>
              <div className="pt-4">
                <Button asChild size="lg" className="rounded-2xl bg-brand-gold text-brand-navy hover:scale-105 transition-transform h-16 px-12 font-black text-lg border-none shadow-2xl">
                  <Link href="/request-quote">Request Bed Linen Sample Pack <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications Section */}
        <section className="py-24 bg-white">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-playfair font-bold text-brand-navy">Hospitality Bedding Intelligence</h2>
              <p className="text-muted-foreground font-medium max-w-xl mx-auto">Choosing the right weave and thread count for your market segment.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Thread Counts', desc: '200TC, 300TC, 400TC, 600TC.', icon: Layers },
                { title: 'Weave Types', desc: 'Crisp Percale & Silky Sateen.', icon: Bed },
                { title: 'Standard Sizes', desc: 'UK, US, EU & Bespoke Sizing.', icon: Ruler },
                { title: 'Special Finishes', desc: 'Fire Retardant & Antimicrobial.', icon: ShieldCheck }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center p-8 rounded-3xl bg-secondary/5 border border-brand-gold/10">
                  <item.icon className="w-10 h-10 text-brand-gold mb-6" />
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Durability Focus */}
        <section className="py-24 bg-brand-navy text-white">
          <div className="container px-4 mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/10">
                <Image src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80" alt="Industrial Laundry Quality" fill className="object-cover" loading="lazy" />
              </div>
              <div className="space-y-8">
                <h2 className="text-4xl font-playfair font-bold">Engineered for Industrial Laundering</h2>
                <p className="text-lg text-white/70 italic">"Our bedding remains vibrant and dimensionally stable even after 200+ commercial wash cycles."</p>
                <div className="space-y-4">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-gold" /> Mercerized finish for high luster and strength</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-gold" /> Reinforced stitching for industrial wash durability</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-gold" /> Low-shrinkage fabric technology</li>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-secondary/20">
          <div className="container px-4 mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-brand-navy text-center mb-16">Bed Linen Supplier FAQ</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="q1" className="border border-brand-gold/10 rounded-2xl px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-bold text-brand-navy">What thread count is best for 5-star hotels?</AccordionTrigger>
                <AccordionContent>For 5-star luxury, 300TC to 400TC Sateen is the global gold standard. For ultra-luxury suites, 600TC Egyptian cotton provides an unparalleled guest experience.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2" className="border border-brand-gold/10 rounded-2xl px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-bold text-brand-navy">Can you manufacture to custom mattress dimensions?</AccordionTrigger>
                <AccordionContent>Yes. As a primary supplier, we manufacture flat, fitted, and duvet covers to your exact room specifications, including deep-pocket mattresses.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3" className="border border-brand-gold/10 rounded-2xl px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-bold text-brand-navy">Do your fabrics meet international fire safety standards?</AccordionTrigger>
                <AccordionContent>We offer fire-retardant (FR) finishes that comply with BS 7175 and other local hospitality safety regulations upon request.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4" className="border border-brand-gold/10 rounded-2xl px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-bold text-brand-navy">What is the MOQ for bed linen sets?</AccordionTrigger>
                <AccordionContent>Standard MOQ for export bed linen is 100 sets per SKU for white sheets. Custom dyed or patterned sets typically start at 300 sets.</AccordionContent>
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
