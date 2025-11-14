

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
  const product = products.find(p => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  const category = categories.find(c => c.id === product.categoryId);
  const parentCategory = category?.parentId ? categories.find(c => c.id === category.parentId) : category;

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
                    {parentCategory && <Badge variant="secondary">{parentCategory.name}</Badge>}
                    {category && category.id !== parentCategory?.id && <Badge variant="outline">{category.name}</Badge>}
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
                        {product.specifications.material && <li className="flex justify-between items-start"><strong>Material:</strong> <span className="text-right">{product.specifications.material}</span></li>}
                        {product.specifications.gsm && <li className="flex justify-between items-start"><strong>GSM:</strong> <span className="text-right">{product.specifications.gsm}</span></li>}
                        {product.specifications.tc && <li className="flex justify-between items-start"><strong>Thread Count:</strong> <span className="text-right">{product.specifications.tc}</span></li>}
                        {product.specifications.size && <li className="flex justify-between items-start"><strong>Size:</strong> <span className="text-right">{product.specifications.size}</span></li>}
                        {product.specifications.color && <li className="flex justify-between items-start"><strong>Color:</strong> <span className="text-right">{product.specifications.color}</span></li>}
                        {product.specifications.features && <li className="flex justify-between items-start"><strong>Features:</strong> <span className="text-right">{product.specifications.features}</span></li>}
                        {product.specifications.fabric && <li className="flex justify-between items-start"><strong>Fabric:</strong> <span className="text-right">{product.specifications.fabric}</span></li>}
                        {product.specifications.construction && <li className="flex justify-between items-start"><strong>Construction:</strong> <span className="text-right">{product.specifications.construction}</span></li>}
                        {product.specifications.fasteners && <li className="flex justify-between items-start"><strong>Fasteners:</strong> <span className="text-right">{product.specifications.fasteners}</span></li>}
                        {product.specifications.finishing && <li className="flex justify-between items-start"><strong>Finishing:</strong> <span className="text-right">{product.specifications.finishing}</span></li>}
                        {product.specifications.colorFastness && <li className="flex justify-between items-start"><strong>Color Fastness:</strong> <span className="text-right">{product.specifications.colorFastness}</span></li>}
                        {product.specifications.packaging && <li className="flex justify-between items-start"><strong>Packaging:</strong> <span className="text-right">{product.specifications.packaging}</span></li>}
                        {product.specifications.absorbency && <li className="flex justify-between items-start"><strong>Absorbency:</strong> <span className="text-right">{product.specifications.absorbency}</span></li>}
                        {product.specifications.shrinkage && <li className="flex justify-between items-start"><strong>Shrinkage:</strong> <span className="text-right">{product.specifications.shrinkage}</span></li>}
                        {product.specifications.bathrobes && <li className="flex justify-between items-start"><strong>Bathrobes:</strong> <span className="text-right">{product.specifications.bathrobes}</span></li>}
                        {product.specifications.slippers && <li className="flex justify-between items-start"><strong>Slippers:</strong> <span className="text-right">{product.specifications.slippers}</span></li>}
                        {product.specifications.blackout && <li className="flex justify-between items-start"><strong>Blackout:</strong> <span className="text-right">{product.specifications.blackout}</span></li>}
                        {product.specifications.frStandards && <li className="flex justify-between items-start"><strong>FR Standards:</strong> <span className="text-right">{product.specifications.frStandards}</span></li>}
                        {product.specifications.stitching && <li className="flex justify-between items-start"><strong>Stitching:</strong> <span className="text-right">{product.specifications.stitching}</span></li>}
                        {product.specifications.formulation && <li className="flex justify-between items-start"><strong>Formulation:</strong> <span className="text-right">{product.specifications.formulation}</span></li>}
                        {product.specifications.compliance && <li className="flex justify-between items-start"><strong>Compliance:</strong> <span className="text-right">{product.specifications.compliance}</span></li>}
                        {product.specifications.fragrance && <li className="flex justify-between items-start"><strong>Fragrance:</strong> <span className="text-right">{product.specifications.fragrance}</span></li>}
                        {product.specifications.labeling && <li className="flex justify-between items-start"><strong>Labeling:</strong> <span className="text-right">{product.specifications.labeling}</span></li>}
                        {product.specifications.soaps && <li className="flex justify-between items-start"><strong>Soaps:</strong> <span className="text-right">{product.specifications.soaps}</span></li>}
                        {product.specifications.finish && <li className="flex justify-between items-start"><strong>Finish:</strong> <span className="text-right">{product.specifications.finish}</span></li>}
                        {product.specifications.hardware && <li className="flex justify-between items-start"><strong>Hardware:</strong> <span className="text-right">{product.specifications.hardware}</span></li>}
                        {product.specifications.durability && <li className="flex justify-between items-start"><strong>Durability:</strong> <span className="text-right">{product.specifications.durability}</span></li>}
                        {product.specifications.frame && <li className="flex justify-between items-start"><strong>Frame:</strong> <span className="text-right">{product.specifications.frame}</span></li>}
                        {product.specifications.foam && <li className="flex justify-between items-start"><strong>Foam:</strong> <span className="text-right">{product.specifications.foam}</span></li>}
                        {product.specifications.upholstery && <li className="flex justify-between items-start"><strong>Upholstery:</strong> <span className="text-right">{product.specifications.upholstery}</span></li>}
                        {product.specifications.mattresses && <li className="flex justify-between items-start"><strong>Mattresses:</strong> <span className="text-right">{product.specifications.mattresses}</span></li>}
                        {product.specifications.porcelain && <li className="flex justify-between items-start"><strong>Porcelain:</strong> <span className="text-right">{product.specifications.porcelain}</span></li>}
                        {product.specifications.cutlery && <li className="flex justify-between items-start"><strong>Cutlery:</strong> <span className="text-right">{product.specifications.cutlery}</span></li>}
                        {product.specifications.glassware && <li className="flex justify-between items-start"><strong>Glassware:</strong> <span className="text-right">{product.specifications.glassware}</span></li>}
                        {product.specifications.chafingDishes && <li className="flex justify-between items-start"><strong>Chafing Dishes:</strong> <span className="text-right">{product.specifications.chafingDishes}</span></li>}
                        {product.specifications.gnPans && <li className="flex justify-between items-start"><strong>GN Pans:</strong> <span className="text-right">{product.specifications.gnPans}</span></li>}
                        {product.specifications.certifications && <li className="flex justify-between items-start"><strong>Certifications:</strong> <span className="text-right">{product.specifications.certifications}</span></li>}
                        {product.specifications.trolleys && <li className="flex justify-between items-start"><strong>Trolleys:</strong> <span className="text-right">{product.specifications.trolleys}</span></li>}
                        {product.specifications.cleaningTools && <li className="flex justify-between items-start"><strong>Cleaning Tools:</strong> <span className="text-right">{product.specifications.cleaningTools}</span></li>}
                        {product.specifications.chemicals && <li className="flex justify-between items-start"><strong>Chemicals:</strong> <span className="text-right">{product.specifications.chemicals}</span></li>}
                        {product.specifications.design && <li className="flex justify-between items-start"><strong>Design:</strong> <span className="text-right">{product.specifications.design}</span></li>}
                        {product.specifications.standards && <li className="flex justify-between items-start"><strong>Standards:</strong> <span className="text-right">{product.specifications.standards}</span></li>}
                        {product.specifications.sterility && <li className="flex justify-between items-start"><strong>Sterility:</strong> <span className="text-right">{product.specifications.sterility}</span></li>