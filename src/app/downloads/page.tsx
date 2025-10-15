
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DownloadCloud } from 'lucide-react';

const brochures = [
    {
        title: 'Anabyn Hotel Towel Collection 2025',
        description: 'Explore our complete range of premium towels for the hospitality industry.',
        fileUrl: '#' // Placeholder URL
    },
    {
        title: 'Anabyn Customization Guide',
        description: 'Learn about our bespoke services for branding, sizing, and material selection.',
        fileUrl: '#' // Placeholder URL
    }
];

export default function DownloadsPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-12 md:py-20 bg-secondary/50">
                <div className="container max-w-4xl mx-auto">
                    <Card>
                        <CardHeader className="text-center">
                            <CardTitle className="text-3xl md:text-4xl font-bold font-headline">Downloads</CardTitle>
                            <CardDescription className="mt-2 text-lg max-w-2xl mx-auto">
                                Access our latest product catalogs and brochures to learn more about our offerings.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="mt-8">
                            <div className="space-y-6">
                                {brochures.map((brochure, index) => (
                                    <div key={index} className="p-4 border rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center bg-background">
                                        <div>
                                            <h3 className="text-xl font-bold">{brochure.title}</h3>
                                            <p className="text-muted-foreground">{brochure.description}</p>
                                        </div>
                                        <Button asChild className="mt-4 sm:mt-0">
                                            <a href={brochure.fileUrl} download>
                                                <DownloadCloud className="mr-2 h-4 w-4" />
                                                Download PDF
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
