
'use client';

import { products } from '@/lib/products';
import { ProductCard } from './product-card';
import type { Product } from '@/lib/types';

// Show a curated list of featured products
const featuredProductIds = [
    'hotel-bed-sheets',
    'hotel-bath-towels',
    'hospitality-uniforms-workwear',
    'medical-syringes-needles',
    'surgical-examination-gloves',
    'hospital-icu-beds',
];

const featuredProducts = products.filter(p => featuredProductIds.includes(p.id));


export function FeaturedProducts() {
  return (
    <section id="products" className="py-12 md:py-24 bg-secondary/50">
      <div className="container">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Explore a selection of our premium textiles, apparel, bedding, and supplies designed for luxury and durability.
            </p>
        </div>
        
        {featuredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">No featured products available.</p>
          </div>
        )}
      </div>
    </section>
  );
}
