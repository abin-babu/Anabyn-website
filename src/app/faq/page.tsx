
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
        answer: "Our MOQ varies depending on the product and level of customization. Please check the individual product pages or contact us for a specific quote."
    },
    {
        question: "Do you ship internationally?",
        answer: "Yes, we ship globally from our base in India. We have extensive experience in export documentation and logistics to ensure a smooth delivery process."
    },
    {
        question: "What are your payment terms?",
        answer: "Our standard payment terms are typically a percentage upfront and the remainder upon shipment, but this can be negotiated for larger or long-term contracts. We accept wire transfers and other standard payment methods."
    },
    {
        question: "Can I customize the products with my own branding?",
        answer: "Absolutely. We offer a wide range of customization services, including logo embroidery, custom colors, and unique patterns to match your brand identity. Visit our Customization page for more details."
    },
    {
        question: "How can I track my order?",
        answer: "Once your order is confirmed, you will receive an enquiry ID. You will be able to use this ID on our 'Track Your Order' page to see the real-time status of your shipment. This feature is coming soon!"
    },
];

export default function FAQPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
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
