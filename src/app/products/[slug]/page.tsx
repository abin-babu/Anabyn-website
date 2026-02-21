
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
import { Download, MessageSquare, Phone, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { categories } from '@/lib/products';

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
    return products.map(product => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = products.find(p => p.slug === params.slug);
  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }
  const category = categories.find(c => c.id === product.categoryId);
  const canonicalUrl = `https://www.anabyn.com/products/${product.slug}`;

  try {
    const seoData = await generateSeoMetadata({
      productName: product.name,
      productDescription: product.description,
      productCategory: category?.name || 'General',
      keyFeatures: product.shortSpecs || '',
    });
    return {
      title: seoData.metaTitle,
      description: seoData.metaDescription,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: seoData.metaTitle,
        description: seoData.metaDescription,
        url: canonicalUrl,
        type: 'website',
      },
    };
  } catch (error) {
    console.error("AI metadata generation failed, using fallback.", error);
    return {
      title: `${product.name} | Anabyn`,
      description: product.description.substring(0, 160),
      alternates: {
        canonical: canonicalUrl,
      },
       openGraph: {
        title: `${product.name} | Anabyn`,
        description: product.description.substring(0, 160),
        url: canonicalUrl,
        type: 'website',
      },
    };
  }
}

export default function ProductDetailPage({ params }: Props) {
  const product = products.find(p => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const category = categories.find(c => c.id === product.categoryId);
  const parentCategory = category?.parentId ? categories.find(c => c.id === category.parentId) : category;

  const whatsappNumber = "+919495613121";
  const whatsappMessage = `Hi Anabyn — I’d like to inquire about ${product.name}.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`;

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
              {product.safetyInfo && (
                  <div className="mt-4 flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-muted-foreground">{product.safetyInfo}</span>
                  </div>
              )}
            </div>
            <div className="flex flex-col gap-6">
              <div>
                <div className="flex gap-2 mb-2">
                    {parentCategory && <Badge variant="secondary">{parentCategory.name}</Badge>}
                    {category && category.id !== parentCategory?.id && <Badge variant="outline">{category.name}</Badge>}
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold font-headline">{product.name}</h1>
              </div>
              <p className="text-muted-foreground">{product.description}</p>
              
              <div className="flex flex-wrap gap-2">
                <Button asChild>
                  <Link href={`/inquiry?productId=${product.id}`}>Request a Quote</Link>
                </Button>
                <Button asChild variant="secondary">
                   <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="mr-2 h-4 w-4" /> Chat on WhatsApp
                  </a>
                </Button>
                {product.specSheetUrl && (
                  <Button asChild variant="outline">
                    <a href={product.specSheetUrl} download>
                      <Download className="mr-2 h-4 w-4" /> Download Spec Sheet
                    </a>
                  </Button>
                )}
              </div>

              <Card>
                <CardHeader>
                    <CardTitle className="text-lg">Product Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        {Object.entries(product.specifications).map(([key, value]) => {
                          if (!value) return null;
                          const formattedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                          return (
                            <li key={key} className="flex justify-between items-start">
                              <strong>{formattedKey}:</strong> <span className="text-right">{value}</span>
                            </li>
                          );
                        })}
                    </ul>
                </CardContent>
              </Card>

              {product.customizationOptions && product.customizationOptions.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Customization Options</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {product.customizationOptions.map(option => (
                        <Badge key={option} variant="outline">{option}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
