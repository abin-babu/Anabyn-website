
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle2, Scissors, Palette, Box, Package, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OEM Towel Manufacturer India — Private Label Export | Anabyn',
  description: 'Partner with a premier OEM towel manufacturer India private label. Design-to-delivery services for global retail brands. 1,000 pcs MOQ, 100% documentation.',
};

export default async function OEMTowelManufacturerPage({ params }: { params: { locale: string } }) {
  const { locale } = await params;

  const productSchema = {
    '@context': 'https://schema.org/',
    '@type': 'Product',
    'name': 'OEM & Private Label Towel Manufacturing Services',
    'image': 'https://images.unsplash.com/photo-1526290766257-c015850e4629?w=800&q=80',
    'description': 'Full-service OEM towel manufacturer India private label. We create branded textile lines for international retailers.',
    'brand': { '@type': 'Brand', 'name': 'Anabyn' },
    'offers': {
      '@type': 'Service',
      'serviceType': 'Manufacturing',
      'areaServed': 'Worldwide'
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': `https://www.anabyn.com/${locale}` },
      { '@type': 'ListItem', 'position': 2, 'name': 'Services', 'item': `https://www.anabyn.com/${locale}/oem-private-label` },
      { '@type': 'ListItem', 'position': 3, 'name': 'OEM Towel Manufacturer India', 'item': `https://www.anabyn.com/${locale}/oem-towel-manufacturer-india` }
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
            <Image src="https://images.unsplash.com/photo-1526290766257-c015850e4629?w=1600&q=80" alt="OEM Towel Manufacturer India" fill className="object-cover opacity-30" priority />
          </div>
          <div className="container relative z-20 px-4 mx-auto text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <Badge variant="outline" className="text-brand-gold border-brand-gold px-4 py-1 uppercase tracking-[0.3em] font-black">Private Label Hub</Badge>
              <h1 className="text-5xl md:text-7xl font-playfair font-bold leading-tight">OEM & Private Label <br /><span className="text-brand-gold">Towel Manufacturing from India</span></h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-medium max-w-3xl mx-auto">
                Anabyn is your dedicated **OEM towel manufacturer India private label** partner. We handle the entire design-to-delivery lifecycle, allowing you to launch your own luxury textile line with precision.
              </p>
              <div className="pt-4">
                <Button asChild size="lg" className="rounded-2xl bg-brand-gold text-brand-navy hover:scale-105 transition-transform h-16 px-12 font-black text-lg border-none shadow-2xl">
                  <Link href="/request-quote">Discuss Your OEM Project <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-white">
          <div className="container px-4 mx-auto">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-brand-navy text-center mb-16">Our Design-to-Delivery Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { id: '01', title: 'Conceptual Design', desc: 'Share your briefs and technical specs.', icon: Scissors },
                { id: '02', title: 'Master Sampling', desc: 'We develop physical samples for approval.', icon: Palette },
                { id: '03', title: 'Bulk Production', desc: 'ISO-certified manufacturing begins.', icon: Box },
                { id: '04', title: 'Global Dispatch', desc: 'Direct export to your warehouse.', icon: Package }
              ].map((step) => (
                <div key={step.id} className="p-8 rounded-[2.5rem] bg-secondary/5 border border-brand-gold/5 text-center">
                  <span className="text-4xl font-playfair font-bold text-brand-gold/20 mb-4 block">{step.id}</span>
                  <step.icon className="w-8 h-8 mx-auto mb-4 text-brand-gold" />
                  <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OEM Capabilities */}
        <section className="py-24 bg-brand-navy text-white">
          <div className="container px-4 mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-playfair font-bold">Branding & Packaging Capabilities</h2>
                <p className="text-lg text-white/70">We provide 360-degree OEM support for global retail brands.</p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-gold" /> Woven Labels & Hang Tags</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-gold" /> High-Definition Logo Embroidery</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-gold" /> Custom Branded Boxes & Polybags</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-brand-gold" /> NDA (Non-Disclosure Agreement) Support</li>
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 p-12 rounded-[3.5rem] shadow-2xl">
                <ShieldCheck className="w-16 h-16 text-brand-gold mb-8 mx-auto" />
                <h3 className="text-2xl font-playfair font-bold text-center mb-4">Confidential Manufacturing</h3>
                <p className="text-center text-white/60 mb-8">We protect your proprietary designs. All OEM projects are governed by strict confidentiality protocols.</p>
                <Button asChild className="w-full h-14 bg-brand-gold text-brand-navy font-bold rounded-xl">
                  <Link href="/contact">Request OEM Briefing</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-secondary/20">
          <div className="container px-4 mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-brand-navy text-center mb-16">OEM & Private Label FAQ</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="q1" className="border border-brand-gold/10 rounded-2xl px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-bold text-brand-navy">What is the typical MOQ for OEM towel manufacturing?</AccordionTrigger>
                <AccordionContent>MOQ for OEM projects is typically 1,000 pieces per design/SKU. This ensures production efficiency for custom weaves or labels.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2" className="border border-brand-gold/10 rounded-2xl px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-bold text-brand-navy">How long is the OEM lead time from design to delivery?</AccordionTrigger>
                <AccordionContent>Total lead time is usually 8–12 weeks, which includes sample development (2 weeks), production (6 weeks), and sea transit.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3" className="border border-brand-gold/10 rounded-2xl px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-bold text-brand-navy">Can you provide physical samples of our designs?</AccordionTrigger>
                <AccordionContent>Yes. We develop a Master Sample for your approval before bulk production begins. This sample serves as the "Sealed Sample" for QC audits.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4" className="border border-brand-gold/10 rounded-2xl px-6 bg-white shadow-sm">
                <AccordionTrigger className="font-bold text-brand-navy">Do you offer packaging design services?</AccordionTrigger>
                <AccordionContent>We can manufacture to your packaging dielines or assist in selecting standard export packaging that supports your brand's luxury positioning.</AccordionContent>
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
