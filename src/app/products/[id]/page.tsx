
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { products } from '@/lib/products';
import { generateSeoMetadata } from '@/ai/flows/generate-seo-metadata';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Download, MessageSquare, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find(p => p.id === params.id);
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  try {
    const seoData = await generateSeoMetadata({
      productName: product.name,
      productDescription: product.description,
      productCategory: product.category.type,
      keyFeatures: product.keyFeatures,
    });
    return {
      title: seoData.metaTitle,
      description: seoData.metaDescription,
    };
  } catch (error) {
    console.error("AI metadata generation failed, using fallback.", error);
    return {
      title: `${product.name} | Anabyn`,
      description: product.description.substring(0, 160),
    };
  }
}

export default function ProductDetailPage({ params }: Props) {
  const product = products.find(p => p.id === params.id);

  if (!product) {
    notFound();
  }
  
  const whatsappNumber = "919495613121";
  const whatsappMessage = `Hi Anabyn — I’d like to inquire about ${product.name}.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <Carousel className="w-full">
                <CarouselContent>
                  {product.images.map((img, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-[4/3] relative rounded-lg overflow-hidden border">
                        <Image src={img} alt={`${product.name} image ${index + 1}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw"/>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <div className="flex gap-2 mb-2">
                    <Badge variant="secondary" className="capitalize">{product.category.type}</Badge>
                    <Badge variant="secondary" className="capitalize">{product.category.material}</Badge>
                    <Badge variant="secondary" className="capitalize">{product.category.usage}</Badge>
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold font-headline">{product.name}</h1>
              </div>
              <p className="text-muted-foreground">{product.description}</p>
              
              <Card>
                <CardHeader>
                    <CardTitle className="text-lg">Product Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex justify-between"><strong>Key Features:</strong> <span>{product.keyFeatures}</span></li>
                        <li className="flex justify-between"><strong>Minimum Order (MOQ):</strong> <span>{product.moq}</span></li>
                        <li className="flex justify-between"><strong>Lead Time:</strong> <span>{product.leadTime}</span></li>
                    </ul>
                </CardContent>
              </Card>

              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                    <Link href={`/inquiry?productId=${product.id}`}>
                        <MessageSquare className="mr-2 h-4 w-4"/> General Inquiry
                    </Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        <Phone className="mr-2 h-4 w-4"/> Chat on WhatsApp
                    </a>
                </Button>
                {product.specSheetUrl && (
                    <Button asChild size="lg" variant="outline">
                        <a href={product.specSheetUrl} download>
                            <Download className="mr-2 h-4 w-4" /> Download Spec Sheet
                        </a>
                    </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
