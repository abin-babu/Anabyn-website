
import { Check, ShieldCheck, Truck, Users, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const features = [
    {
        icon: Users,
        title: 'Exclusive Manufacturer Access',
        description: 'Better pricing and quality than dealing directly.'
    },
    {
        icon: Truck,
        title: 'Global Shipping Expertise',
        description: 'Hassle-free logistics with strong freight and cargo partners.'
    },
    {
        icon: ShieldCheck,
        title: 'Quality That Speaks for Itself',
        description: 'We ensure product inspections, certifications, and sample approvals.'
    },
    {
        icon: Check,
        title: 'Transparent & Reliable',
        description: 'Real-time updates, ethical sourcing, and clear communication.'
    },
    {
        icon: Settings,
        title: 'Tailored Solutions',
        description: 'We support retail chains, wholesalers, private labels, and distributors with custom sourcing.'
    }
]

export function WhyChooseUs() {
    return (
        <section id="why-us" className="py-12 md:py-20 bg-background">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Why Choose Us</h2>
                    <p className="text-muted-foreground mb-12 text-lg">
                        We bridge India’s manufacturing strength with global demand. Our mission is to make sourcing from India seamless—all under one trusted brand.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
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
