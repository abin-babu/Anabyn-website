
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, Recycle, Heart } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const sustainabilityPoints = [
    {
        icon: Leaf,
        title: 'Ethical Sourcing',
        description: 'We are committed to sourcing our raw materials responsibly, partnering with suppliers who share our dedication to ethical labor practices and environmental stewardship.'
    },
    {
        icon: Recycle,
        title: 'Eco-Friendly Production',
        description: 'Our manufacturing processes are designed to minimize environmental impact, focusing on water conservation, waste reduction, and the use of non-toxic dyes.'
    },
    {
        icon: Heart,
        title: 'Community Initiatives',
        description: 'We believe in giving back to the communities that support us through local employment and corporate social responsibility (CSR) programs.'
    }
];

export default function SustainabilityPage() {
    const bannerImage = PlaceHolderImages.find(img => img.id === 'sustainability-banner');
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-12 md:py-20 bg-secondary/50">
                <div className="container max-w-5xl mx-auto">
                    <Card>
                        <CardHeader className="text-center">
                             <div className="flex justify-center mb-4">
                                <Leaf className="h-16 w-16 text-green-600"/>
                            </div>
                            <CardTitle className="text-3xl md:text-4xl font-bold font-headline">Sustainability & Social Responsibility</CardTitle>
                            <CardDescription className="mt-2 text-lg max-w-3xl mx-auto">
                                We are dedicated to creating a positive impact on the planet and our communities through sustainable practices and ethical choices.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="mt-8">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="space-y-8">
                                    {sustainabilityPoints.map((point) => (
                                        <div key={point.title} className="flex items-start gap-4">
                                            <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                                                <point.icon className="h-6 w-6 text-green-700" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold">{point.title}</h3>
                                                <p className="text-muted-foreground">{point.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="relative aspect-square rounded-lg overflow-hidden border">
                                    <Image 
                                        src={bannerImage?.imageUrl || 'https://picsum.photos/600'} 
                                        alt={bannerImage?.description || 'Lush green landscape'} 
                                        fill 
                                        className="object-cover" 
                                        data-ai-hint={bannerImage?.imageHint} 
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    );
}
