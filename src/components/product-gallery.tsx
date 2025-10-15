'use client';

import { useState } from 'react';
import { products } from '@/lib/products';
import { ProductCard } from './product-card';
import { Button } from '@/components/ui/button';
import type { Product } from '@/lib/types';

const allCategories = ['all', ...Array.from(new Set(products.map(p => p.category.type)))];
const allMaterials = ['all', ...Array.from(new Set(products.map(p => p.category.material)))];
const allUsages = ['all', ...Array.from(new Set(products.map(p => p.category.usage)))];

export function ProductGallery() {
  const [filters, setFilters] = useState({
    category: 'all',
    material: 'all',
    usage: 'all',
  });

  const handleFilterChange = (filterType: keyof typeof filters, value: string) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  const filteredProducts = products.filter(product => {
    return (
      (filters.category === 'all' || product.category.type === filters.category) &&
      (filters.material === 'all' || product.category.material === filters.material) &&
      (filters.usage === 'all' || product.category.usage === filters.usage)
    );
  });

  const FilterButtons = ({ title, options, filterKey }: { title: string; options: string[]; filterKey: keyof typeof filters }) => (
    <div className="flex items-center gap-2 flex-wrap">
      <h3 className="text-sm font-semibold mr-2">{title}:</h3>
      {options.map(option => (
        <Button
          key={option}
          variant={filters[filterKey] === option ? 'default' : 'outline'}
          size="sm"
          onClick={() => handleFilterChange(filterKey, option)}
          className="capitalize"
        >
          {option}
        </Button>
      ))}
    </div>
  );

  return (
    <section id="products" className="py-12 md:py-24 bg-secondary/50">
      <div className="container">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Our Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
            Explore our curated collection of premium rugs, textiles, and materials designed for luxury and durability.
            </p>
        </div>
        
        <div className="flex flex-col gap-4 mb-8 p-4 border rounded-lg bg-background shadow-sm">
          <FilterButtons title="Product Type" options={allCategories} filterKey="category" />
          <FilterButtons title="Material/Weave" options={allMaterials} filterKey="material" />
          <FilterButtons title="Usage" options={allUsages} filterKey="usage" />
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
