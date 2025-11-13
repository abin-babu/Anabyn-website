import Image from "next/image";
import { Card, CardContent } from "./ui/card";

const testimonials = [
    {
        quote: "Anabyn's attention to detail and commitment to quality is unmatched. They are our go-to partner for all our hotel linen needs.",
        name: "Director of Procurement",
        company: "Marriott Hotels, Dubai",
        logoUrl: "/images/logo-placeholder.png"
    },
    {
        quote: "The quality of the uniforms and the efficiency of their export process have made them an invaluable part of our supply chain.",
        name: "Supply Chain Manager",
        company: "Accor Group, APAC",
        logoUrl: "/images/logo-placeholder.png"
    },
    {
        quote: "Reliable, professional, and always on time. Anabyn Global Ventures truly understands the needs of the international hospitality market.",
        name: "General Manager",
        company: "Hilton Hotels, London",
        logoUrl: "/images/logo-placeholder.png"
    }
]

export function Testimonials() {
    return (
        <section id="testimonials" className="py-12 md:py-20 bg-secondary/50">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Trusted by Industry Leaders</h2>
                    <p className="text-muted-foreground mb-12 text-lg">
                        Our commitment to quality and reliability has earned us the trust of premier hotels and institutions worldwide.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="bg-background">
                            <CardContent className="pt-6">
                                <blockquote className="text-lg font-medium leading-relaxed">
                                    "{testimonial.quote}"
                                </blockquote>
                                <div className="mt-4 flex items-center">
                                    {/* Placeholder for a company logo */}
                                    {/* <div className="flex-shrink-0 mr-4">
                                        <Image src={testimonial.logoUrl} alt={`${testimonial.company} logo`} width={40} height={40} className="rounded-full"/>
                                    </div> */}
                                    <div>
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
