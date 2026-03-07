
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "What is your minimum order quantity (MOQ)?",
        answer: "Our MOQ varies by product and customization level. For example, standard hotel bed sheet sets typically have an MOQ of 100 sets, while custom-embroidered bathrobes start at 50 units."
    },
    {
        question: "Do you ship internationally?",
        answer: "Yes, we ship globally from our base in India. We have extensive experience in export documentation and logistics, partnering with leading freight carriers."
    },
    {
        question: "What are your payment terms?",
        answer: "For new clients, our standard payment terms are typically a 30-50% advance payment to initiate production and the remaining balance against a bill of lading (B/L) copy."
    },
    {
        question: "Can I customize the products with my own branding?",
        answer: "Absolutely. We specialize in customization. Options include custom logo embroidery, Pantone color matching for dyes, specific fabric weaves, and branded packaging."
    }
];

export default function FAQPage() {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <main className="flex-1 py-12 md:py-20 bg-secondary/50">
                <div className="container max-w-4xl mx-auto">
                    <Card>
                        <CardHeader className="text-center">
                            <CardTitle className="text-3xl md:text-4xl font-bold font-headline">Frequently Asked Questions</CardTitle>
                            <CardDescription className="mt-2 text-lg max-w-2xl mx-auto">
                                Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us directly.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="mt-8">
                            <Accordion type="single" collapsible className="w-full">
                                {faqs.map((faq, index) => (
                                    <AccordionItem key={index} value={`item-${index}`}>
                                        <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                                        <AccordionContent className="text-base text-muted-foreground">
                                            {faq.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    );
}
