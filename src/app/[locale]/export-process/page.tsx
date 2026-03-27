import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  MessageSquare, 
  ClipboardCheck, 
  Factory, 
  Box, 
  Ship, 
  FileText, 
  CheckCircle2, 
  CreditCard, 
  Globe, 
  ArrowRight,
  ShieldCheck,
  Package,
  Anchor
} from 'lucide-react';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How We Export — Our 5-Step Process | Anabyn Global Ventures',
  description: 'From RFQ to doorstep delivery — Anabyn\'s streamlined 5-step export workflow ensures quality, compliance, and on-time shipping worldwide.',
};

const steps = [
  {
    id: 1,
    title: 'Enquiry & Quote',
    subtitle: '48hr Response Time',
    desc: 'Submit your detailed requirements. Our sourcing experts provide custom pricing and technical feasibility within 48 hours.',
    icon: MessageSquare,
    color: 'bg-blue-500'
  },
  {
    id: 2,
    title: 'Sample Approval',
    subtitle: '7–10 Day Dispatch',
    desc: 'We prepare and ship physical master samples for your evaluation. Verify the GSM, weave, and branding before bulk production.',
    icon: ClipboardCheck,
    color: 'bg-amber-500'
  },
  {
    id: 3,
    title: 'Production & Confirmation',
    subtitle: '30–45 Day Lead Time',
    desc: 'Upon sample approval and deposit, production begins in our ISO-certified units with strict quality monitoring at every loom.',
    icon: Factory,
    color: 'bg-brand-navy'
  },
  {
    id: 4,
    title: 'QC & Containerisation',
    subtitle: 'AQL 2.5 Standards',
    desc: 'Final audits are conducted. Goods are moisture-wrapped and secured in 20ft, 40ft, or 40HC containers for sea transit.',
    icon: Box,
    color: 'bg-green-600'
  },
  {
    id: 5,
    title: 'Shipping & Delivery',
    subtitle: 'Tracked & Insured',
    desc: 'Documents are processed and the shipment is dispatched via FCL or LCL. We provide real-time tracking until the goods reach your door.',
    icon: Ship,
    color: 'bg-brand-gold'
  }
];

const documents = [
  { name: 'Commercial Invoice & Packing List', desc: 'Detailed breakdown for customs and inventory management.' },
  { name: 'Bill of Lading (B/L)', desc: 'Official title document for your international freight.' },
  { name: 'Certificate of Origin', desc: 'GSP or Non-Preferential certificates for import duty benefits.' },
  { name: 'Quality Certificates', desc: 'OEKO-TEX or GOTS certificates provided per product batch.' },
  { name: 'Inspection Report', desc: 'Internal or third-party pre-shipment audit reports.' }
];

export default function ExportProcessPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="relative pt-40 pb-20 overflow-hidden bg-[#060A14] text-white">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-navy/80 to-brand-navy z-10" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          </div>
          <div className="container relative z-20 px-4 mx-auto text-center">
            <div className="max-w-4xl mx-auto space-y-6">
              <Badge variant="outline" className="text-brand-gold border-brand-gold px-4 py-1 uppercase tracking-widest font-black">
                End-to-End Workflow
              </Badge>
              <h1 className="text-4xl md:text-7xl font-playfair font-bold leading-tight">
                How We Export — <br />
                <span className="text-brand-gold">From Order to Door</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                We remove the complexity of international sourcing with a transparent, 5-step methodology verified by hundreds of global procurement leaders.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Visual Timeline */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="relative">
              {/* Desktop Connecting Line */}
              <div className="hidden lg:block absolute top-[60px] left-0 w-full h-0.5 bg-gray-100 -z-0" />
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
                {steps.map((step, i) => (
                  <div key={step.id} className="group flex flex-col items-center text-center space-y-6">
                    <div className="relative">
                      <div className={`w-24 h-24 rounded-[2rem] ${step.color} text-white flex items-center justify-center shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                        <step.icon className="w-10 h-10" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center font-black text-xs text-brand-navy shadow-lg">
                        0{step.id}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-brand-navy">{step.title}</h3>
                      <Badge variant="secondary" className="bg-brand-gold-light/30 text-brand-gold font-bold text-[9px] px-2 py-0.5">
                        {step.subtitle}
                      </Badge>
                      <p className="text-sm text-gray-500 leading-relaxed px-2">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Documentation Section */}
        <section className="py-24 bg-[#F5EDD6]/30">
          <div className="container px-4 mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <div>
                  <Badge className="bg-brand-navy text-white mb-4">Documentation Hub</Badge>
                  <h2 className="text-3xl md:text-5xl font-playfair font-bold text-brand-navy leading-tight">Verified Paperwork for <br /><span className="text-brand-gold">Hassle-Free Customs</span></h2>
                </div>
                <p className="text-gray-600 text-lg">We handle the heavy lifting of compliance. Every container is backed by a complete dossier of verified export documents.</p>
                
                <div className="space-y-4">
                  {documents.map((doc, i) => (
                    <div key={i} className="flex gap-4 items-start p-4 rounded-2xl bg-white border border-brand-gold/10 hover:border-brand-gold transition-all group">
                      <div className="w-10 h-10 rounded-lg bg-brand-navy/5 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors shrink-0">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-brand-navy text-sm">{doc.name}</h4>
                        <p className="text-xs text-muted-foreground">{doc.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative aspect-square rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <Image 
                  src="https://images.unsplash.com/photo-1550221997-0f417b27dd74?w=800&q=80" 
                  alt="Professional export documentation and compliance" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-md rounded-3xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <ShieldCheck className="text-brand-green w-5 h-5" />
                    <p className="font-bold text-brand-navy text-xs uppercase tracking-widest">Compliance Guaranteed</p>
                  </div>
                  <p className="text-[10px] text-gray-500">"All documents are digitally archived and accessible via our Buyer Portal for 7 years."</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Payment Terms */}
        <section className="py-24 bg-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-5xl mx-auto bg-brand-navy rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
              
              <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
                <div className="space-y-8 text-center lg:text-left">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-brand-gold mx-auto lg:mx-0">
                    <CreditCard className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-playfair font-bold">Secure <br /><span className="text-brand-gold">Payment Terms</span></h2>
                  <p className="text-white/70 text-lg leading-relaxed">
                    We offer flexible and secure financial arrangements to facilitate smooth global trade transitions.
                  </p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                    {['T/T (Wire)', 'LC at Sight', 'Escrow Support'].map(term => (
                      <Badge key={term} variant="outline" className="border-white/20 text-white px-4 py-1 uppercase text-[10px]">{term}</Badge>
                    ))}
                  </div>
                </div>
                
                <Card className="bg-white p-10 rounded-[2.5rem] shadow-2xl border-none">
                  <div className="space-y-6 text-center">
                    <CheckCircle2 className="w-12 h-12 text-brand-green mx-auto" />
                    <h3 className="text-2xl font-bold text-brand-navy">Established Trust</h3>
                    <p className="text-gray-500 text-sm leading-relaxed italic">
                      "For established buyers with a proven order history, we provide flexible credit terms and progressive billing structures."
                    </p>
                    <div className="h-px bg-gray-100 w-full" />
                    <p className="text-[10px] font-black uppercase text-brand-gold tracking-[0.2em]">Partner Success Department</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Shipping Routes */}
        <section className="py-24 bg-white border-t">
          <div className="container px-4 mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1 relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden relative shadow-lg">
                      <Image 
                        src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=400&q=80" 
                        alt="Shipping port activity" 
                        fill 
                        className="object-cover" 
                        sizes="(max-width: 768px) 100vw, 25vw"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6 bg-brand-gold rounded-3xl text-brand-navy text-center">
                      <Anchor className="w-8 h-8 mx-auto mb-2" />
                      <p className="font-bold text-xs uppercase tracking-widest">Major Hubs</p>
                    </div>
                  </div>
                  <div className="pt-8 space-y-4">
                    <div className="p-6 bg-brand-navy rounded-3xl text-white text-center">
                      <Globe className="text-brand-gold w-8 h-8 mx-auto mb-2" />
                      <p className="font-bold text-xs uppercase tracking-widest">Global Reach</p>
                    </div>
                    <div className="aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden relative shadow-lg">
                      <Image 
                        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=80" 
                        alt="Container logistics" 
                        fill 
                        className="object-cover" 
                        sizes="(max-width: 768px) 100vw, 25vw"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 space-y-10">
                <div>
                  <Badge variant="outline" className="text-brand-gold border-brand-gold mb-4">Logistics Intelligence</Badge>
                  <h2 className="text-4xl md:text-6xl font-playfair font-bold text-brand-navy">Global Shipping Routes</h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Leveraging India's strategic coastal location, we offer regular sailings from primary export hubs to over 50 countries worldwide.
                </p>
                <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                  <div>
                    <h4 className="font-bold text-brand-navy mb-3 uppercase text-[10px] tracking-widest flex items-center gap-2">
                      <Anchor size={14} className="text-brand-gold" /> Ports of Export
                    </h4>
                    <ul className="text-sm text-gray-500 space-y-2">
                      <li>JNPT Mumbai (India's Largest)</li>
                      <li>Mundra Port (Gujarat)</li>
                      <li>Chennai Port (Tamil Nadu)</li>
                      <li>Cochin Port (Kerala)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy mb-3 uppercase text-[10px] tracking-widest flex items-center gap-2">
                      <Globe size={14} className="text-brand-gold" /> Key Destinations
                    </h4>
                    <ul className="text-sm text-gray-500 space-y-2">
                      <li>United Kingdom (UK)</li>
                      <li>European Union (EU)</li>
                      <li>United Arab Emirates (UAE)</li>
                      <li>USA, Canada, Australia</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. CTA Section */}
        <section className="py-24 bg-brand-gold">
          <div className="container px-4 mx-auto text-center space-y-8">
            <Package className="w-16 h-16 text-brand-navy mx-auto animate-bounce" />
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="text-4xl md:text-6xl font-playfair font-bold text-brand-navy leading-tight">Ready to verify <br />our quality?</h2>
              <p className="text-brand-navy/70 text-lg font-medium">We ship physical sample packs worldwide via DHL/FedEx for evaluation.</p>
            </div>
            <Button asChild size="lg" className="rounded-2xl bg-brand-navy text-white hover:bg-brand-navy/90 h-16 px-12 text-lg font-black shadow-2xl transition-all hover:scale-105 border-none">
              <Link href="/request-quote">Request Your First Sample <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
