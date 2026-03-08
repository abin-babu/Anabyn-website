'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const jobOpenings = [
    {
        title: 'Export Documentation Executive',
        location: 'Kozhikode, Kerala',
        type: 'Full-time',
    },
    {
        title: 'Sales Manager - International Markets',
        location: 'Remote',
        type: 'Full-time',
    },
];

export default function CareersPage() {
    const bannerImage = PlaceHolderImages.find(img => img.id === 'careers-banner');
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-12 md:py-20 bg-secondary/50 pt-32">
                <div className="container max-w-4xl mx-auto">
                    <Card>
                        <CardHeader className="text-center">
                            {bannerImage && (
                                <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                                     <Image src={bannerImage.imageUrl} alt={bannerImage.description} fill className="object-cover" data-ai-hint={bannerImage.imageHint}/>
                                     <div className="absolute inset-0 bg-black/40"></div>
                                </div>
                            )}
                            <CardTitle className="text-3xl md:text-4xl font-bold font-headline relative">Join Our Team</CardTitle>
                            <CardDescription className="mt-2 text-lg max-w-2xl mx-auto relative">
                                We are always looking for passionate and talented individuals to join our growing team. Explore our current openings below.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="mt-8">
                            <div className="space-y-6">
                                {jobOpenings.length > 0 ? (
                                    jobOpenings.map((job) => (
                                        <div key={job.title} className="p-4 border rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center bg-background">
                                            <div>
                                                <h3 className="text-xl font-bold">{job.title}</h3>
                                                <p className="text-muted-foreground">{job.location} &middot; {job.type}</p>
                                            </div>
                                            <Button asChild className="mt-4 sm:mt-0">
                                                <Link href="/inquiry">Apply Now</Link>
                                            </Button>
                                        </div>
                                    ))
                                ) : (
                                    <div className="text-center py-10">
                                        <p className="text-muted-foreground">There are no open positions at this time. Please check back later.</p>
                                    </div>
                                )}
                            </div>
                            <div className="mt-12 text-center p-6 bg-primary/10 rounded-lg">
                                <h3 className="text-xl font-semibold">Don't see a role for you?</h3>
                                <p className="text-muted-foreground mt-2">We're always open to connecting with talented people. Send us your resume and we'll keep it on file for future opportunities.</p>
                                <Button asChild variant="link" className="mt-2">
                                     <a href="mailto:sales@anabyn.com">Submit Your Resume</a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    );
}
