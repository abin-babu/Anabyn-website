import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@/components/ui/accordion';
import { 
  MapPin, 
  Plane, 
  Anchor, 
  History, 
  Ship, 
  Award, 
  ArrowRight,
  Droplets,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Terry Towel Exporter Kerala, India | Anabyn Global Ventures',
    description: "Kerala's premier terry towel and bed linen exporter. Anabyn Global Ventures LLP, Thrissur — IEC registered, AQL 2.5 inspected, exporting to 50+ countries. Request a free export quote today.",
    alternates: {
      canonical: `https://www.anabyn.com/${locale}/terry-towel-exporter-kerala`,
    },
  };
}

export default async function KeralaExporterPage() {
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Anabyn Global Ventures LLP',
    'image': 'https://www.anabyn.com/images/logo.png',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '287/87/CA, Anchapalam, Methala',
      'addressLocality': 'Thrissur',
      'addressRegion': 'Kerala',
      'postalCode': '680669',
      'addressCountry': 'IN'
    },
    'areaServed': ['IN', 'GB', 'AE', 'DE', 'US', 'AU', 'JP', 'IT', 'FR'],
    'description': 'Premium luxury textile exporter from Kerala, India specializing in GSM-spec terry towels and high thread-count bed linen.',
    'url': 'https://www.anabyn.com'
  };

  const faqData = [
    {
      q: "What products does Anabyn export from Kerala?",
      a: "From our Thrissur headquarters, we manage the export of premium 100% cotton bath towels, hand towels, face towels, and luxury bed linen sets specifically engineered for the global hospitality and retail markets."
    },
    {
      q: "What is the minimum order quantity for Kerala exports?",
      a: "Our standard MOQ for export orders is 500 pieces for towels and 100 sets for bed linen. However, we offer flexibility for first-time evaluations and custom boutique developments."
    },
    {
      q: "Which countries does Anabyn ship to from Kerala?",
      a: "We export to 50+ countries including the United Kingdom, USA, UAE, Germany, Australia, and Canada. We handle all cross-border documentation and customs compliance."
    },
    {
      q: "How long does shipping take from Cochin Port?",
      a: "Shipping from Cochin Port (INCO3) to Middle Eastern ports takes approximately 5–8 days, while transit to Europe and the UK typically ranges from 18–25 days depending on the freight service."
    },
    {
      q: "Does Anabyn provide full export documentation?",
      a: "Yes. Every shipment is backed by a complete technical dossier including Bill of Lading, Commercial Invoice, Packing List, and Certificate of Origin to ensure seamless customs clearance at your destination."
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <Header />
      
      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="relative pt-40 pb-24 overflow-hidden bg-brand-navy text-white">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-navy/80 to-brand-navy z-10" />
            <Image 
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1600&q=80" 
              alt="Anabyn Kerala Textile Export Hub"
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>
          <div className="container relative z-20 px-4 mx-auto text-center">
            <div className="max-w-4xl mx-auto space-y-8">
              <Badge variant="outline" className="text-brand-gold border-brand-gold px-4 py-1 uppercase tracking-[0.3em] font-black">
                Regional Hub: Thrissur, Kerala
              </Badge>
              <h1 className="text-5xl md:text-7xl font-playfair font-bold leading-tight">
                Terry Towel Exporter in <br />
                <span className="text-brand-gold">Kerala, India</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-medium max-w-3xl mx-auto">
                Premium luxury terry towels and bed linen — crafted in Kerala, exported to 50+ countries worldwide.
              </p>
              <div className="pt-4">
                <Button asChild size="lg" className="rounded-2xl bg-brand-gold text-brand-navy hover:scale-105 transition-transform h-16 px-12 font-black text-lg border-none shadow-2xl">
                  <Link href="/request-quote">Request Export Quote <ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Why Kerala Section */}
        <section className="py-24 bg-white">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-playfair font-bold text-brand-navy">Why Kerala for Premium Textile Exports?</h2>
              <div className="w-24 h-1 bg-brand-gold mx-auto" />
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Rich Textile Heritage",
                  desc: "Kerala's cotton weaving tradition dates back centuries, providing a foundation of material knowledge that ensures every GSM-spec product is woven with precision.",
                  icon: History
                },
                {
                  title: "Strategic Port Access",
                  desc: "Proximity to Cochin Port enables fast, cost-efficient global shipping routes to the Middle East, Europe, and North America with regular weekly sailings.",
                  icon: Anchor
                },
                {
                  title: "Quality Craftsmanship",
                  desc: "Our Kerala artisans bring generational expertise to GSM-spec terry weaving, combining traditional care with modern AQL 2.5 quality control standards.",
                  icon: Award
                }
              ].map((card, i) => (
                <Card key={i} className="border-brand-gold/10 shadow-xl rounded-[2.5rem] bg-secondary/5 group hover:bg-brand-navy transition-all duration-500 overflow-hidden product-card">
                  <CardHeader className="p-10 pb-0 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-brand-gold/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-gold transition-colors duration-500">
                      <card.icon className="w-8 h-8 text-brand-gold group-hover:text-brand-navy" />
                    </div>
                    <CardTitle className="text-2xl font-playfair font-bold text-brand-navy group-hover:text-white transition-colors">{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-10 pt-6 text-center">
                    <p className="text-muted-foreground group-hover:text-white/70 leading-relaxed transition-colors">
                      {card.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Location Details */}
        <section className="py-24 bg-secondary/20">
          <div className="container px-4 mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <Badge className="bg-brand-navy text-white">Logistics Infrastructure</Badge>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-brand-navy">Our Kerala Manufacturing Base</h2>
                <div className="space-y-6">
                  <div className="flex gap-6 items-start p-6 rounded-3xl bg-white border border-brand-gold/10 shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-brand-navy/5 flex items-center justify-center shrink-0">
                      <MapPin className="text-brand-gold w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy uppercase text-[10px] tracking-widest mb-1">Registered Address</h4>
                      <p className="text-gray-600 font-medium">Anabyn Global Ventures LLP,<br />287/87/CA, Anchapalam, Methala, Thrissur, Kerala, India 680669</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start p-6 rounded-3xl bg-white border border-brand-gold/10 shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-brand-navy/5 flex items-center justify-center shrink-0">
                      <Plane className="text-brand-gold w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy uppercase text-[10px] tracking-widest mb-1">Airport Proximity</h4>
                      <p className="text-gray-600 font-medium">45 km from Cochin International Airport (COK) — enabling rapid sample dispatch and buyer visits.</p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start p-6 rounded-3xl bg-white border border-brand-gold/10 shadow-sm">
                    <div className="w-12 h-12 rounded-xl bg-brand-navy/5 flex items-center justify-center shrink-0">
                      <Ship className="text-brand-gold w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy uppercase text-[10px] tracking-widest mb-1">Primary Export Port</h4>
                      <p className="text-gray-600 font-medium">Cochin Port (INCO3) — One of India's top automated container ports, ensuring reliable FCL and LCL dispatch.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <Image 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" 
                  alt="Global Shipping from Cochin Port" 
                  fill 
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/40 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* 4. Products Exported Section */}
        <section className="py-24 bg-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-5xl font-playfair font-bold text-brand-navy">Products We Export from Kerala</h2>
              <p className="text-lg text-muted-foreground">Every product is crafted to international technical specifications and shipped with full compliance documentation.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[
                { name: 'Bath Towels', href: '/terry-towels#bath' },
                { name: 'Hand Towels', href: '/terry-towels#hand' },
                { name: 'Beach Towels', href: '/terry-towels#beach' },
                { name: 'Hotel Collections', href: '/hotel-collections' },
                { name: 'Bed Sheets', href: '/bed-linen#sheets' },
                { name: 'Duvet Covers', href: '/bed-linen#duvet' },
                { name: 'Pillowcases', href: '/bed-linen#pillowcases' },
                { name: 'OEM / Private Label', href: '/oem-private-label' }
              ].map((product) => (
                <Button key={product.name} asChild variant="outline" className="h-20 rounded-2xl border-brand-gold/20 hover:border-brand-gold hover:bg-brand-gold/5 text-brand-navy font-bold text-center flex flex-col group transition-all">
                  <Link href={product.href as any}>
                    <span className="text-sm">{product.name}</span>
                    <ArrowRight className="w-4 h-4 text-brand-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all mt-1" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Certifications Summary */}
        <section className="py-20 bg-brand-navy text-white">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
              {[
                { label: 'IEC REGISTERED', val: 'ACLFA6777F' },
                { label: 'GST REGISTERED', val: '32ACLFA6777F1Z8' },
                { label: 'AQL 2.5', val: 'Standard' },
                { label: 'OEKO-TEX', val: 'On Demand' },
                { label: 'ISO 9001', val: 'On Demand' }
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-gold mb-1">{item.label}</p>
                  <p className="text-lg font-bold font-playfair">{item.val}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. FAQ Section */}
        <section className="py-24 bg-white">
          <div className="container px-4 mx-auto max-w-4xl">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-playfair font-bold text-brand-navy">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">Expert insights on exporting premium textiles from Kerala.</p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border border-brand-gold/10 rounded-2xl px-6 bg-secondary/5 hover:bg-secondary/10 transition-colors">
                  <AccordionTrigger className="text-left font-bold text-brand-navy hover:no-underline py-6">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-brand-gold">
          <div className="container px-4 mx-auto text-center space-y-8">
            <div className="w-20 h-20 rounded-full bg-brand-navy/10 flex items-center justify-center mx-auto">
              <Droplets className="w-10 h-10 text-brand-navy" />
            </div>
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="text-4xl md:text-6xl font-playfair font-bold text-brand-navy leading-tight">Verify Kerala's <br />Textile Quality</h2>
              <p className="text-brand-navy/70 text-lg font-medium">We ship physical master samples from Thrissur to procurement offices worldwide via DHL/FedEx.</p>
            </div>
            <Button asChild size="lg" className="rounded-2xl bg-brand-navy text-white hover:bg-brand-navy/90 h-16 px-12 text-lg font-black shadow-2xl transition-all hover:scale-105 border-none">
              <Link href="/request-quote">Request Master Sample <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
