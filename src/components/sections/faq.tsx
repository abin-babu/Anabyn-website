'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is the minimum order quantity (MOQ)?",
    a: "MOQ varies by product category. We support both small trial orders and large bulk shipments. Contact us and we'll work out the best arrangement for your volume."
  },
  {
    q: "Do you offer samples before bulk orders?",
    a: "Yes. We provide product samples for evaluation before any bulk commitment. Sample costs are typically credited against your first full order."
  },
  {
    q: "What payment terms do you accept?",
    a: "We accept Letter of Credit (LC), Documents against Payment (DP), and Telegraphic Transfer (TT). Payment terms are discussed case by case based on order volume and client history."
  },
  {
    q: "Can you handle custom branding and private labels?",
    a: "Absolutely. We offer full OEM and private label services — your branding on the products, tags, and packaging. Minimum quantities apply for custom tooling."
  },
  {
    q: "Which certifications do your products carry?",
    a: "Our products carry ISO 9001, ISO 13485, CE Marking, FDA, OEKO-TEX®, and GOTS certifications depending on the product category and target market requirements."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-[#F5F7FA] overflow-hidden">
      <div className="container max-w-4xl px-4">
        <div className="text-center mb-16 fade-up">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#0D1B3E] mb-6">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-[#C8A020] mx-auto" />
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4 fade-up">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-white border rounded-2xl px-6">
              <AccordionTrigger className="text-lg font-bold text-[#0D1B3E] hover:no-underline py-6">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 text-base leading-relaxed pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
