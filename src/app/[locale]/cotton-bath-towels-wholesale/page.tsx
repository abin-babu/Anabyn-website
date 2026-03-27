
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle2, Truck, Globe, Droplets, Ship, Package } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cotton Bath Towels Wholesale India — Bulk Export | Anabyn',
  description: 'Buy premium cotton bath towels wholesale India. 100% ring-spun & organic cotton towels, 300–700 GSM options. Bulk export worldwide with AQL 2.5 inspection.',
};

export default async function CottonBathTowelsWholesalePage({ params }: { params: { locale: string } }) {
  const { locale } = await params;

  const productSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    'name': 'Wholesale Cotton Bath Towels — India Bulk Export',
    'image': 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=800&q=80',
    'description': 'Direct source for cotton bath towels wholesale India. Available in various weights and sizes for global retail and distribution.',
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
      { '@type': 'ListItem', 'position': 3, 'name': 'Cotton Bath Towels Wholesale India', 'item': `https://www.anabyn.com/${locale}/cotton-bath-towels-wholesale` }
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
            <Image src="https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=1600&q=80" alt="Cotton Bath Towels Wholesale India" fill className="object-cover opacity-30" priority />
          </div>
          <div className="container relative z-20 px-4 mx-auto text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <Badge variant="outline" className="text-brand-gold border-brand-gold px-4 py-1 uppercase tracking-[0.3em] font-black">Bulk Wholesale</Badge>
              <h1 className="text-5xl md:text-7xl font-playfair font-bold leading-tight">Premium Cotton Bath Towels — <br /><span className="text-brand-gold">Wholesale from India</span></h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-medium max-w-3xl mx-auto">
                Anabyn specializes in high-volume **cotton bath towels wholesale India**. From 300 GSM economy lines to 700 GSM ultra-plush collections, we supply retail chains and distributors across 5 continents.
              </p>
              <div className="pt-4">
                <Button asChild size="lg" className="rounded-2xl bg-brand-gold text-brand-navy hover:scale-105 transition-transform h-16 px-12 font-black text-lg border-none shadow-2xl">
                  <Link href="/request-quote">Get Wholesale Price List <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details Section */}
        <section className="py-24 bg-white">
          <div className="container px-4 mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-10">
                <div>
                  <h2 className="text-4xl md:text-5xl font-playfair font-bold text-brand-navy leading-tight">Global Sourcing Standards</h2>
                  <p className="text-lg text-muted-foreground mt-6">We provide verified technical specifications for bulk cotton towel procurement.</p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-8">
                  {[
                    { title: 'Material Grade', desc: '100% Combed & Ring-Spun options.', icon: Droplets },
                    { title: 'Weight Options', desc: '300 GSM to 700 GSM ranges.', icon: Package },
                    { title: 'Certification', desc: 'GOTS and OEKO-TEX available.', icon: Globe },
                    { title: 'Lead Time', desc: '30–45 Days for bulk dispatch.', icon: Truck }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-brand-gold" />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-navy">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-secondary/20">
                <Image src="https://images.unsplash.com/photo-1761992157695-f0dd8d6d2db6?w=800&q=80" alt="Bulk Towel Production" fill className="object-cover" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-secondary/20">
          <div className="container px-4 mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-brand-navy text-center mb-16">Wholesale FAQ</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="q1" className="border border-brand-gold/10 rounded-2xl px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-bold text-brand-navy">What is the standard MOQ for wholesale bath towels?</AccordionTrigger>
                <AccordionContent>For standard wholesale items, the MOQ is 500 pieces per SKU. For custom colors or private label requests, the MOQ is typically 1,000 pieces.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2" className="border border-brand-gold/10 rounded-2xl px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-bold text-brand-navy">Which Incoterms do you support for bulk export?</AccordionTrigger>
                <AccordionContent>We support FOB, CIF, and DDP terms. Most of our wholesale shipments depart from Cochin Port (INCO3) or Chennai Port.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3" className="border border-brand-gold/10 rounded-2xl px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-bold text-brand-navy">Are your towels GOTS certified?</AccordionTrigger>
                <AccordionContent>We offer GOTS-certified organic cotton towels on request. Documentation is provided batch-wise per order.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4" className="border border-brand-gold/10 rounded-2xl px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-bold text-brand-navy">What are the payment terms for wholesale contracts?</AccordionTrigger>
                <AccordionContent>Standard terms are LC at Sight or T/T (Wire Transfer). Progressive billing is available for established partners.</AccordionContent>
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
