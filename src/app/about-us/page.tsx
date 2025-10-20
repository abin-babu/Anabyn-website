
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import { Briefcase, GraduationCap } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const founders = [
    {
        name: 'Dr. Abin Babu',
        title: 'Co-Founder',
        imageId: 'founder-abin',
        bio: [
            {
                icon: Briefcase,
                text: '13 years of diverse corporate experience.',
            },
            {
                icon: GraduationCap,
                text: 'MBA from IIM Kozhikode.',
            },
            {
                icon: GraduationCap,
                text: 'Doctorate from Swiss School of Business and Management, Geneva.',
            },
        ],
    },
    {
        name: 'Anoop Ashraf',
        title: 'Co-Founder',
        imageId: 'founder-anoop',
        bio: [
            {
                icon: Briefcase,
                text: '11 years of deep expertise in the textile industry.',
            },
            {
                icon: GraduationCap,
                text: 'Specializes in sourcing, manufacturing, and quality assurance.',
            },
        ],
    },
];

export default function AboutUsPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-12 md:py-20 bg-secondary/50">
                <div className="container max-w-5xl mx-auto">
                    <Card>
                        <CardHeader className="text-center">
                            <CardTitle className="text-3xl md:text-4xl font-bold font-headline">About Anabyn</CardTitle>
                            <CardDescription className="mt-2 text-lg max-w-3xl mx-auto">
                                Founded on a shared vision of excellence, Anabyn Global Ventures is led by a team with a unique blend of corporate strategy and deep-rooted industry expertise.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="mt-8">
                            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                                {founders.map((founder) => {
                                    const founderImage = PlaceHolderImages.find(img => img.id === founder.imageId);
                                    return (
                                        <div key={founder.name} className="flex flex-col items-center text-center">
                                            <div className="relative h-48 w-48 mb-4 rounded-full overflow-hidden shadow-lg">
                                                <Image
                                                    src={founderImage?.imageUrl || 'https://picsum.photos/400'}
                                                    alt={`Portrait of ${founder.name}`}
                                                    fill
                                                    className="object-cover"
                                                    data-ai-hint={founderImage?.imageHint}
                                                    sizes="192px"
                                                />
                                            </div>
                                            <h3 className="text-2xl font-bold font-headline">{founder.name}</h3>
                                            <p className="text-primary font-medium">{founder.title}</p>
                                            <ul className="mt-4 space-y-2 text-left text-muted-foreground">
                                                {founder.bio.map((item, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <item.icon className="h-5 w-5 mr-3 mt-1 text-accent flex-shrink-0" />
                                                        <span>{item.text}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    );
                                })}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    );
}
