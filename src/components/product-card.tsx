'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Product } from '@/lib/types';
import { Search } from 'lucide-react';
import { Badge } from './ui/badge';

export function ProductCard({ product }: { product: Product }) {
  const categoryLabel = product.category === 'hospitality-supplies' ? 'Hospitality' : 'Medical';
  const altPrefix = product.category === 'hospitality-supplies' ? 'premium cotton fabric export India' : 'medical supplies exporter India';
  
  return (
    <Card className="overflow-hidden group relative shadow-md hover:shadow-xl transition-all duration-300 flex flex-col border-t-0 hover:border-t-4 border-brand-gold product-card">
      <Link href={`/products/${product.slug}`} className="block overflow-hidden relative aspect-[4/3]">
        <Image
          src={product.images[0] || 'https://placehold.co/600x400'}
          alt={`${product.name} - ${altPrefix}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <Badge className="bg-brand-navy text-white text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 border-none">
            {categoryLabel}
          </Badge>
          {product.featured && (
            <Badge className="bg-brand-gold text-brand-navy text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 border-none">
              Featured
            </Badge>
          )}
        </div>
      </Link>
      
      <CardContent className="p-5 flex-grow flex flex-col bg-white">
        <h3 className="font-bold text-lg text-brand-navy group-hover:text-brand-gold transition-colors line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm text-brand-gold font-bold uppercase tracking-wider mb-2 mt-1">
          {product.subcategory}
        </p>
        <p className="text-xs text-muted-foreground line-clamp-2 mb-4 flex-grow">
          {product.shortDescription}
        </p>
        
        <div className="space-y-2 mb-4">
          {product.specifications.slice(0, 2).map((spec, i) => (
            <div key={i} className="flex justify-between text-[11px] border-b border-gray-50 pb-1">
              <span className="text-gray-400">{spec.key}</span>
              <span className="font-semibold text-brand-navy">{spec.value}</span>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0 bg-white grid grid-cols-2 gap-2">
        <Button asChild variant="outline" size="sm" className="w-full text-xs font-bold border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white">
          <Link href={`/products/${product.slug}`}>View Details</Link>
        </Button>
        <Button asChild size="sm" className="w-full text-xs font-bold bg-brand-gold text-brand-navy hover:bg-brand-gold/90">
          <Link href={`/request-quote?product=${encodeURIComponent(product.name)}`}>Request Quote</Link>
        </Button>
      </CardFooter>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-brand-navy/80 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <Search className="text-brand-gold h-10 w-10 mb-4 animate-in zoom-in duration-300" />
        <h4 className="text-white font-bold text-xl mb-2">{product.name}</h4>
        <div className="flex flex-wrap justify-center gap-1 mb-4">
          {product.certifications.map(c => (
            <Badge key={c} variant="outline" className="text-[9px] text-brand-gold border-brand-gold py-0 h-4">{c}</Badge>
          ))}
        </div>
        <p className="text-white/70 text-xs line-clamp-3">
          MOQ: {product.moqPieces} Pieces
        </p>
      </div>
    </Card>
  );
}