import { Award, Globe, Truck, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const features = [
    {
        icon: Award,
        title: 'Decades of Expertise',
        description: 'With a 40-year heritage in textiles and manufacturing, we deliver unparalleled quality and deep industry knowledge.'
    },
    {
        icon: Globe,
        title: 'Global Export Ready',
        description: 'Our seamless logistics and compliance expertise make us a trusted partner for international clients across 40+ countries.'
    },
    {
        icon: Users,
        title: 'Complete Customization',
        description: 'From bespoke branding on uniforms to custom specifications for textiles, we tailor products to your exact needs.'
    },
    {
        icon: Truck,
        title: 'Reliability & Timely Delivery',
        description: 'We are committed to on-time delivery, ensuring your supply chain remains uninterrupted and dependable.'
    }
]

export function WhyChooseUs() {
    return (
        <section id="why-us" className="py-12 md:py-20 bg-background">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">A Trusted Partner for Global Sourcing</h2>
                    <p className="text-muted-foreground mb-12 text-lg">
                        We bridge India’s manufacturing strength with global demand. Our mission is to make sourcing from India seamless—across textiles, uniforms, chemicals, and essential supplies—all under one trusted brand.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature) => (
                        <Card key={feature.title} className="text-center border-0 shadow-none bg-transparent">
                            <CardHeader className="flex flex-col items-center">
                                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                                    <feature.icon className="h-8 w-8 text-primary" />
                                </div>
                                <CardTitle className="text-xl">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
