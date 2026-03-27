'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DownloadCloud, FileText } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const brochures = [
    {
        title: 'Anabyn Export Catalogue 2026',
        description: 'Comprehensive specifications for our premium terry towels and bed linen collections. Essential for trade buyers.',
        fileUrl: '/2026%20Linen%20Catalogue.pdf',
        fileType: 'PDF'
    },
    {
        title: 'Anabyn Global Ventures - Corporate Brochure',
        description: 'An overview of our premium home and hospitality textiles. Crafted in Premium Cotton, Trusted Worldwide.',
        fileUrl: '#',
        fileType: 'JPG'
    },
    {
        title: 'Anabyn Customization Guide',
        description: 'Learn about our bespoke services for branding, sizing, and material selection.',
        fileUrl: '#',
        fileType: 'PDF'
    }
];

export default function DownloadsPage() {
    const bannerImage = PlaceHolderImages.find(img => img.id === 'downloads-banner');
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-12 md:py-20 bg-secondary/50 pt-32">
                <div className="container max-w-4xl mx-auto">
                    <Card>
                        <CardHeader className="text-center">
                            {bannerImage && (
                                <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                                     <Image src={bannerImage.imageUrl} alt={bannerImage.description || 'Downloads Banner'} fill className="object-cover" data-ai-hint={bannerImage.imageHint}/>
                                     <div className="absolute inset-0 bg-black/40"></div>
                                </div>
                            )}
                            <CardTitle className="text-3xl md:text-4xl font-bold font-headline">Resource Center</CardTitle>
                            <CardDescription className="mt-2 text-lg max-w-2xl mx-auto">
                                Access our latest technical specifications, product catalogs, and corporate brochures.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="mt-8">
                            <div className="space-y-6">
                                {brochures.map((brochure, index) => (
                                    <div key={index} className="p-6 border rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center bg-background shadow-sm hover:shadow-md transition-all">
                                        <div className="flex gap-4 items-start">
                                            <div className="w-10 h-10 rounded-lg bg-brand-navy/5 flex items-center justify-center shrink-0">
                                                <FileText className="text-brand-gold w-5 h-5" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-brand-navy">{brochure.title}</h3>
                                                <p className="text-muted-foreground text-sm leading-relaxed max-w-md">{brochure.description}</p>
                                            </div>
                                        </div>
                                        <Button asChild className="mt-4 sm:mt-0 rounded-xl bg-brand-navy text-white hover:bg-brand-navy/90" size="sm">
                                            <a href={brochure.fileUrl} download={brochure.title + '.' + brochure.fileType.toLowerCase()}>
                                                <DownloadCloud className="mr-2 h-4 w-4" />
                                                Download {brochure.fileType}
                                            </a>
                                        </Button>
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
