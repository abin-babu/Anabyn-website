
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
        answer: "Our MOQ varies by product and customization level. For example, standard hotel bed sheet sets typically have an MOQ of 100 sets, while custom-embroidered bathrobes start at 50 units. Please refer to the specific product page for its MOQ or contact us with your requirements for a detailed quote."
    },
    {
        question: "Do you ship internationally?",
        answer: "Yes, we ship globally from our base in India. We have extensive experience in export documentation and logistics, partnering with leading freight carriers to ensure smooth and timely delivery to your destination port or warehouse. We can handle various incoterms (FOB, CIF, DDP) based on your needs."
    },
    {
        question: "What are your payment terms?",
        answer: "For new clients, our standard payment terms are typically a 30-50% advance payment to initiate production and the remaining balance against a bill of lading (B/L) copy before delivery. For larger or long-term contracts, we can discuss other options such as Letters of Credit (L/C). We accept international wire transfers."
    },
    {
        question: "Can I customize the products with my own branding?",
        answer: "Absolutely. We specialize in customization. Options include custom logo embroidery, Pantone color matching for dyes, specific fabric weaves, and branded packaging. Please visit our 'Customization' page or contact our team to discuss your branding requirements."
    },
    {
        question: "How can I track my order?",
        answer: "This feature is coming soon! Once implemented, you will receive an enquiry ID upon order confirmation. You will be able to use this ID on our 'Track Your Order' page to see the real-time status of your shipment from production to final delivery."
    },
     {
        question: "How do you handle quality control and samples?",
        answer: "We have a multi-stage quality control process, from raw material inspection to final product checks. We can also arrange for third-party inspection (e.g., SGS, Intertek) at the client's request. We offer a sample request program; please contact us to arrange for samples of the products you are interested in."
    }
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
            </main