
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Product } from '@/lib/types';
import { ArrowRight, Search } from 'lucide-react';
import { Badge } from './ui/badge';
import { categories } from '@/lib/products';
import { FaWhatsapp } from 'react-icons/fa';

export function ProductCard({ product }: { product: Product }) {
  const category = categories.find(c => c.id === product.categoryId);
  const parentCategory = category?.parentId ? categories.find(c => c.id === category.parentId) : category;

  const whatsappNumber = "+919495613121";
  const whatsappMessage = `Hi Anabyn — I’d like to inquire about ${product.name}.`;
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <Card className="overflow-hidden group relative shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="aspect-[4/3] relative">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint="product photo"
          />
        </div>
      </Link>
      <CardContent className="p-4 bg-card flex-grow flex flex-col">
        <h3 className="font-bold font-headline text-lg truncate">{product.name}</h3>
        <p className="text-sm text-muted-foreground flex-grow mb-4">{product.shortSpecs}</p>
        <div className="mt-auto flex flex-col gap-2">
            <div className="flex justify-between items-center">
                {parentCategory && <Badge variant="secondary">{parentCategory.name}</Badge>}
                 <Button asChild variant="secondary" size="sm">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="mr-2 h-4 w-4" /> Chat
                    </a>
                </Button>
            </div>
        </div>
      </CardContent>

      <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
        <Search className="text-white h-12 w-12 mb-4" />
        <h3 className="font-bold font-headline text-2xl text-white mb-2">{product.name}</h3>
        <p className="text-sm text-gray-300 mb-6">{product.shortSpecs}</p>
        <div className="flex flex-col gap-2 w-full max-w-xs">
          <Button asChild>
            <Link href={`/products/${product.slug}`}>
              View Details <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
           <Button asChild variant="outline">
            <Link href={`/inquiry?productId=${product.id}`}>Contact Us</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}
