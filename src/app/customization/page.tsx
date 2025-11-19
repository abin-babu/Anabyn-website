
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Palette, Ruler, Scan, Weight } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const customizationOptions = [
    {
        icon: Ruler,
        title: 'Custom Size',
        description: 'Tailor the dimensions of your towels, bathrobes, and textiles to meet your exact specifications, from standard hand towels to oversized bath sheets.'
    },
    {
        icon: Palette,
        title: 'Custom Color',
        description: 'Match your brand’s color palette with our Pantone color matching service, ensuring perfect brand consistency across all your textile products.'
    },
    {
        icon: Scan,
        title: 'Printing & Branding',
        description: 'Incorporate your logo or brand name with high-quality embroidery, elegant monogramming, or custom dye patterns for a distinguished look.'
    },
    {
        icon: Weight,
        title: 'Weight (GSM)',
        description: 'Choose the ideal fabric weight, from lightweight and quick-drying (400 GSM) to ultra-plush and luxurious (700+ GSM), to define your guest experience.'
    },
    {
        icon: CheckCircle,
        title: 'Pattern & Weave',
        description: 'Select from a variety of weaves like terry, velour, waffle, and jacquard, or work with our team to create a completely custom pattern.'
    }
];

export default function CustomizationPage() {
    const ctaImage = PlaceHolderImages.find(img => img.id === 'customization-cta');
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-12 md:py-20 bg-secondary/50">
                <div className="container max-w-5xl mx-auto">
                    <Card>
                        <CardHeader className="text-center">
                            <CardTitle className="text-3xl md:text-4xl font-bold font-headline">Bespoke Customization Services</CardTitle>
                            <CardDescription className="mt-2 text-lg max-w-3xl mx-auto">
                                We specialize in providing bespoke solutions to meet the unique needs of your brand. Our extensive customization options ensure your vision comes to life.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="mt-8">
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {customizationOptions.map((option) => (
                                    <div key={option.title} className="p-6 border rounded-lg bg-background shadow-sm hover:shadow-md transition-shadow">
                                        <option.icon className="h-10 w-10 text-primary mb-4" />
                                        <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                                        <p className="text-muted-foreground">{option.description}</p>
                                    </div>
                                ))}
                                <div className="p-6 border rounded-lg bg-primary text-primary-foreground shadow-lg lg:col-span-3 flex flex-col md:flex-row items-center gap-6">
                                     <div className="flex-shrink-0 relative h-48 w-48 hidden md:block">
                                        <Image src={ctaImage?.imageUrl || 'https://picsum.photos/400'} alt={ctaImage?.description || 'Custom textile design'} fill className="object-cover rounded-md" data-ai-hint={ctaImage?.imageHint} sizes="192px"/>
                                     </div>
                                     <div className="flex-grow text-center md:text-left">
                                        <h3 className="text-2xl font-bold mb-2">Have a Unique Requirement?</h3>
                                        <p>Our team is ready to collaborate with you to create fully customized textile solutions. Contact us today to start the conversation.</p>
                                        <a href="/inquiry" className="inline-block mt-4 bg-primary-foreground text-primary font-semibold py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors">
                                            Contact Us
                                        </a>
                                     </div>
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
