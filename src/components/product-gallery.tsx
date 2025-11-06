
'use client';

import { useState } from 'react';
import { products, categories } from '@/lib/products';
import { ProductCard } from './product-card';
import type { Product } from '@/lib/types';


export function ProductGallery({ initialCategory, initialSubCategory }: { initialCategory?: string, initialSubCategory?: string }) {
  const [filters, setFilters] = useState({
    category: initialCategory || 'all',
    subCategory: initialSubCategory || 'all',
  });

  const filteredProducts = products.filter(product => {
    const category = categories.find(c => c.id === product.categoryId);
    if (!category) return false;

    const parentCategory = category.parentId ? categories.find(c => c.id === category.parentId) : category;

    const categoryMatch = filters.category === 'all' || parentCategory?.name === filters.category;
    const subCategoryMatch = filters.subCategory === 'all' || category.name === filters.subCategory;

    return categoryMatch && subCategoryMatch;
  });

  return (
    <section id="products" className="py-12 md:py-24 bg-secondary/50">
      <div className="container">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Our Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Explore our curated collection of premium textiles, apparel, bedding, and supplies designed for luxury and durability.
            </p>
        </div>
        
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">No products match the selected filters.</p>
          </div>
        )}
      </div>
    </section>
  );
}
