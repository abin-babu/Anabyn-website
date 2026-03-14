'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageSquare, Package, Truck, HelpCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const faqData = [
  {
    category: "Products",
    icon: HelpCircle,
    items: [
      {
        q: "What GSM is best for hotel bath towels?",
        a: "For luxury hotels, 550–600 GSM is the hospitality gold standard — thick, absorbent and long-lasting. Budget hotels and healthcare facilities typically use 400–500 GSM for faster drying times."
      },
      {
        q: "What is the difference between percale and sateen bed sheets?",
        a: "Percale is a 1-over-1-under weave that is crisp, cool, and highly breathable, perfect for warm climates. Sateen is a 4-over-1-under weave that is silky, lustrous, and feels warmer against the skin. Both are available in various thread counts from Anabyn."
      },
      {
        q: "Do you supply organic cotton products?",
        a: "Yes, we are committed to sustainability. GOTS-certified organic cotton towels and bed linen are available on request for clients looking for eco-friendly procurement solutions."
      }
    ]
  },
  {
    category: "Ordering & MOQ",
    icon: Package,
    items: [
      {
        q: "What is the minimum order quantity (MOQ)?",
        a: "MOQ is typically 500 pieces per SKU for stock items. For custom designs involving specific weaves or private label developments, the MOQ is 1,000 pieces."
      },
      {
        q: "Can I order samples before placing a bulk order?",
        a: "Yes. Evaluation is key. Sample sets are available for $30–60 depending on the product type. This cost is fully credited against your first bulk contract with Anabyn."
      },
      {
        q: "How long does production take?",
        a: "Standard export orders take 30–45 days. Orders requiring custom weaving, specialized Pantone dyeing, or complex embroidery typically have a lead time of 45–60 days."
      }
    ]
  },
  {
    category: "Shipping & Logistics",
    icon: Truck,
    items: [
      {
        q: "Which countries do you export to?",
        a: "Anabyn Global Ventures exports to 50+ countries, with our primary markets being the United Kingdom, USA, UAE, European Union, Australia, Canada, and Southeast Asia."
      },
      {
        q: "What shipping terms do you offer?",
        a: "We offer flexible ICC Incoterms including FOB (Free on Board), CIF (Cost, Insurance & Freight), and DDP (Delivered Duty Paid) for hassle-free doorstep delivery."
      },
      {
        q: "Do you handle customs documentation?",
        a: "Yes. Every shipment is backed by a complete dossier including the Certificate of Origin, Packing List, Commercial Invoice, and Bill of Lading to ensure seamless customs clearance."
      }
    ]
  }
];

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.flatMap(section => 
      section.items.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.a
        }
      }))
    )
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
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
                Knowledge Base
              </Badge>
              <h1 className="text-4xl md:text-6xl font-playfair font-bold leading-tight">
                Frequently Asked <br />
                <span className="text-brand-gold">Questions</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                Find expert answers to common queries regarding textile procurement, minimum order quantities, and international logistics.
              </p>
            </div>
          </div>
        </section>

        {/* 2. FAQ Accordions */}
        <section className="py-24 bg-white">
          <div className="container px-4 mx-auto max-w-4xl">
            <div className="space-y-20">
              {faqData.map((section, sectionIdx) => (
                <div key={sectionIdx} className="space-y-8">
                  <div className="flex items-center gap-4 border-l-4 border-brand-gold pl-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-navy/5 flex items-center justify-center text-brand-navy">
                      <section.icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-playfair font-bold text-brand-navy uppercase tracking-tight">
                      {section.category}
                    </h2>
                  </div>

                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {section.items.map((item, itemIdx) => (
                      <AccordionItem 
                        key={itemIdx} 
                        value={`${sectionIdx}-${itemIdx}`}
                        className="border border-brand-gold/10 rounded-2xl px-6 bg-secondary/5 hover:bg-secondary/10 transition-colors"
                      >
                        <AccordionTrigger className="text-left font-bold text-brand-navy hover:no-underline py-6">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Still Have Questions CTA */}
        <section className="py-24 bg-[#060A14] text-white">
          <div className="container px-4 mx-auto">
            <div className="max-w-5xl mx-auto bg-brand-navy rounded-[3rem] p-12 md:p-20 relative overflow-hidden border border-brand-gold/20 shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
              
              <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                <div className="text-center md:text-left space-y-4 max-w-xl">
                  <h2 className="text-3xl md:text-5xl font-playfair font-bold">Still have <br /><span className="text-brand-gold">questions?</span></h2>
                  <p className="text-white/60 text-lg">
                    If you couldn't find the answer you were looking for, our dedicated export desk is available 24/7 via WhatsApp and Email.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                  <Button asChild size="lg" className="bg-brand-gold text-brand-navy font-black h-14 px-10 rounded-xl hover:scale-105 transition-transform border-none">
                    <Link href="/request-quote">Contact Sales Desk <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-white/20 text-white h-14 px-10 rounded-xl hover:bg-white/10 transition-colors bg-transparent">
                    <a href="https://wa.me/919495613121">Chat on WhatsApp</a>
                  </Button>
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
