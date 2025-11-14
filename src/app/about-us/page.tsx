
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import Image from 'next/image';
import { Briefcase, Building, Eye, Globe, Package, Target, Truck, Users } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const whatWeDo = [
    {
        icon: Globe,
        title: "Global Export Solutions",
        description: "We export high-quality products from India to clients across the globe, ensuring on-time delivery and comprehensive documentation compliance."
    },
    {
        icon: Users,
        title: "Manufacturer Partnerships",
        description: "Our exclusive tie-ups with top manufacturers provide competitive pricing, guaranteed quality, and priority production access."
    },
    {
        icon: Truck,
        title: "End-to-End Logistics",
        description: "From sourcing to packaging to international shipping, we manage everything with world-class logistics and transparent communication."
    },
    {
        icon: Package,
        title: "Product Sourcing Across Categories",
        description: "Whether it’s textiles, FMCG, handicrafts, fresh produce, industrial goods, spices, or custom products, we source directly from certified units to meet global standards."
    },
];

export default function AboutUsPage() {
    const bannerImage = PlaceHolderImages.find(img => img.id === 'sustainability-banner');
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-12 md:py-20 bg-secondary/50">
                <div className="container max-w-5xl mx-auto space-y-12">
                    <Card>
                        <CardHeader className="text-center">
                            <h2 className="text-base font-semibold text-primary tracking-wider uppercase">Anabyn Global Ventures</h2>
                            <CardTitle className="text-3xl md:text-4xl font-bold font-headline">Your Trusted Export Partner for Quality Indian Products</CardTitle>
                            <CardDescription className="mt-4 text-lg max-w-3xl mx-auto">
                                Anabyn Global Ventures is a global sourcing and export company committed to delivering India’s finest products to businesses around the world. With a strong network of top-tier manufacturers, we ensure unmatched product quality, competitive pricing, and seamless logistics.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="mt-4 text-center text-muted-foreground max-w-4xl mx-auto">
                            <p>
                                Our partnerships give us preferred access to premium manufacturing units—allowing our clients to enjoy better prices, faster turnaround, and higher quality assurance than traditional direct sourcing. Whether you're a wholesaler, retailer, distributor, importer, or private label brand, Anabyn Global Ventures provides a complete end-to-end export solution tailored to your needs.
                            </p>
                        </CardContent>
                    </Card>

                    <div className="grid md:grid-cols-2 gap-8">
                        <Card>
                            <CardHeader className="flex-row items-center gap-4">
                                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                                    <Target className="h-8 w-8 text-primary" />
                                </div>
                                <CardTitle className="text-2xl font-headline">Our Mission</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">To empower global businesses by providing seamless access to India’s highest quality products—delivered with trust, transparency, and unmatched efficiency.</p>
                            </CardContent>
                        </Card>
                        <Card>
                             <CardHeader className="flex-row items-center gap-4">
                                <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                                    <Eye className="h-8 w-8 text-primary" />
                                </div>
                                <CardTitle className="text-2xl font-headline">Our Vision</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">To become the world’s most trusted bridge between India’s manufacturing excellence and global market demand—transforming how businesses source internationally.</p>
                            </CardContent>
                        </Card>
                    </div>

                    <Card>
                        <CardHeader className="text-center">
                            <CardTitle className="text-3xl md:text-4xl font-bold font-headline">What We Do</CardTitle>
                        </CardHeader>
                        <CardContent className="mt-8">
                             <div className="grid md:grid-cols-2 gap-8">
                                {whatWeDo.map((item) => (
                                    <div key={item.title} className="flex items-start gap-4">
                                        <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-primary/10">
                                            <item.icon className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold">{item.title}</h3>
                                            <p className="text-muted-foreground mt-1">{item.description}</p>
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
