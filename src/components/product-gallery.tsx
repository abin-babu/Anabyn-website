
'use client';

import { useState } from 'react';
import { products, mainCategories, subCategories } from '@/lib/products';
import { ProductCard } from './product-card';
import { Button } from '@/components/ui/button';
import type { Product } from '@/lib/types';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ProductGallery({ initialCategory, initialSubCategory }: { initialCategory?: string, initialSubCategory?: string }) {
  const [filters, setFilters] = useState({
    category: initialCategory || 'all',
    subCategory: initialSubCategory || 'all',
  });

  const handleFilterChange = (filterType: keyof typeof filters, value: string) => {
    if (filterType === 'category') {
        setFilters({ category: value, subCategory: 'all' });
    } else {
        setFilters(prev => ({ ...prev, [filterType]: value }));
    }
  };

  const availableSubcategories = filters.category === 'all' 
    ? subCategories 
    : [...new Set(products.filter(p => p.category.usage === filters.category).map(p => p.category.material))];

  const filteredProducts = products.filter(product => {
    const categoryMatch = filters.category === 'all' || product.category.usage === filters.category;
    const subCategoryMatch = filters.subCategory === 'all' || product.category.material === filters.subCategory;
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
        
        <div className="flex flex-col md:flex-row gap-4 mb-8 p-4 border rounded-lg bg-background shadow-sm items-center">
            <div className="flex-1 w-full">
                <label className="text-sm font-semibold mb-2 block">Product Category</label>
                <Select value={filters.category} onValueChange={(value) => handleFilterChange('category', value)}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        {Object.values(mainCategories).map(cat => (
                            <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <div className="flex-1 w-full">
                <label className="text-sm font-semibold mb-2 block">Subcategory</label>
                <Select value={filters.subCategory} onValueChange={(value) => handleFilterChange('subCategory', value)} disabled={availableSubcategories.length === 0}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select a subcategory" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Subcategories</SelectItem>
                        {availableSubcategories.map(sub => (
                            <SelectItem key={sub} value={sub}>{sub}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
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
