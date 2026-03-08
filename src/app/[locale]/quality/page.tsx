'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BadgeCheck, BarChart, FileText, Globe } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const qualityPoints = [
    {
        icon: BadgeCheck,
        title: 'Premium Raw Materials',
        description: 'Our products are crafted from the finest materials like 100% terry cotton, ensuring superior softness, absorbency, and durability.'
    },
    {
        icon: BarChart,
        title: 'Rigorous Durability Tests',
        description: 'Each product undergoes extensive durability testing to withstand the demands of commercial use, guaranteeing long-lasting performance and value.'
    },
    {
        icon: FileText,
        title: 'Comprehensive Certification',
        description: 'We adhere to the highest international standards, holding key export certifications that reflect our commitment to quality and reliability.'
    }
];

const certifications = [
    { name: 'ISO 9001:2015', description: 'For quality management systems.' },
    { name: 'OEKO-TEX STANDARD 100', description: 'Certifies that our textiles are free from harmful substances.' },
    { name: 'GOTS (Global Organic Textile Standard)', description: 'Available for our organic product lines.' },
    { name: 'SA8000 / BSCI', description: 'Ensuring ethical and social accountability in our supply chain.' }
];

export default function QualityPage() {
    const bannerImage = PlaceHolderImages.find(img => img.id === 'quality-banner');

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-12 md:py-20 bg-secondary/50 pt-32">
                <div className="container max-w-5xl mx-auto space-y-12">
                    <Card>
                        <CardHeader className="text-center">
                             <div className="flex justify-center mb-4">
                                <BadgeCheck className="h-16 w-16 text-primary"/>
                            </div>
                            <CardTitle className="text-3xl md:text-4xl font-bold font-headline">Commitment to Quality</CardTitle>
                            <CardDescription className="mt-2 text-lg max-w-3xl mx-auto">
                                At Anabyn, quality is not just a promise; it’s the foundation of everything we do. We ensure every product meets the highest standards of excellence.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="mt-8 space-y-12">
                           <div className="grid md:grid-cols-3 gap-8 text-center">
                                {qualityPoints.map((point) => (
                                    <div key={point.title} className="flex flex-col items-center">
                                        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 mb-4">
                                            <point.icon className="h-8 w-8 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                                        <p className="text-muted-foreground">{point.description}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="relative aspect-[16/6] rounded-lg overflow-hidden border">
                                <Image 
                                    src={bannerImage?.imageUrl || 'https://picsum.photos/1200/400'} 
                                    alt={bannerImage?.description || 'Textile factory'} 
                                    fill 
                                    className="object-cover" 
                                    data-ai-hint={bannerImage?.imageHint} 
                                />
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                    <h2 className="text-3xl font-bold text-white text-center drop-shadow-lg">Certified Excellence, Delivered Globally.</h2>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                     <Card>
                        <CardHeader className="text-center">
                            <CardTitle className="text-3xl font-headline">Our Certifications & Standards</CardTitle>
                            <CardDescription className="mt-2 text-muted-foreground">We build trust through transparency and adherence to global standards.</CardDescription>
                        </CardHeader>
                        <CardContent>
                             <div className="grid md:grid-cols-2 gap-8">
                                {certifications.map((cert) => (
                                    <div key={cert.name} className="flex items-start gap-4">
                                        <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-primary/10">
                                            <Globe className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold">{cert.name}</h3>
                                            <p className="text-muted-foreground mt-1">{cert.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </main>
            <Footer />
        </div>
    );
}
