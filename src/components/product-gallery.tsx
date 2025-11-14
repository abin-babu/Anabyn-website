
'use client';

import { useState } from 'react';
import { products, categories } from '@/lib/products';
import { ProductCard } from './product-card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Product } from '@/lib/types';
import { Card, CardContent } from './ui/card';

const mainCategories = categories.filter(c => c.parentId === null);
const subCategories = categories.filter(c => c.parentId !== null);

interface ProductGalleryProps {
  initialCategory?: string | null;
  initialSubCategory?: string | null;
}

export function ProductGallery({ initialCategory, initialSubCategory }: ProductGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'All');
  const [selectedSubCategory, setSelectedSubCategory] = useState(initialSubCategory || 'All');

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    setSelectedSubCategory('All'); // Reset subcategory when main category changes
  };

  const filteredProducts = products.filter(product => {
    const parentCategory = categories.find(c => c.id === product.categoryId)?.parentId
      ? categories.find(c => c.id === categories.find(c => c.id === product.categoryId)!.parentId)
      : categories.find(c => c.id === product.categoryId);

    const subCategory = categories.find(c => c.id === product.categoryId);

    const categoryMatch = selectedCategory === 'All' || parentCategory?.name === selectedCategory;
    
    // Check if subcategory filter is active and if the product belongs to that subcategory
    const subCategoryMatch = selectedSubCategory === 'All' || subCategory?.name === selectedSubCategory;

    // When a main category is selected, the subcategory filter should apply within that main category
    if (selectedCategory !== 'All' && selectedSubCategory !== 'All') {
      return categoryMatch && subCategoryMatch;
    }
    
    // When only a main category is selected
    if (selectedCategory !== 'All') {
      return categoryMatch;
    }
    
    // When only a subcategory is selected (or 'All' categories)
    return subCategoryMatch;
  });

  const availableSubcategories = selectedCategory === 'All'
    ? subCategories
    : subCategories.filter(sc => {
      const parent = categories.find(c => c.id === sc.parentId);
      return parent?.name === selectedCategory;
    });

  return (
    <section className="py-12 md:py-20">
      <div className="container">
        <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-headline font-bold mb-4">Our Products</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Browse our extensive range of high-quality products. Use the filters to find exactly what you need.
            </p>
        </div>

        <Card className="mb-8 p-4">
            <CardContent className="pt-6">
                <div className="grid md:grid-cols-2 gap-4">
                <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                    <SelectTrigger>
                    <SelectValue placeholder="Filter by Category" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="All">All Categories</SelectItem>
                    {mainCategories.map(cat => (
                        <SelectItem key={cat.id} value={cat.name}>{cat.name}</SelectItem>
                    ))}
                    </SelectContent>
                </Select>
                <Select value={selectedSubCategory} onValueChange={setSelectedSubCategory} disabled={availableSubcategories.length === 0}>
                    <SelectTrigger>
                    <SelectValue placeholder="Filter by Subcategory" />
                    </SelectTrigger>
                    <SelectContent>
                    <SelectItem value="All">All Subcategories</SelectItem>
                    {availableSubcategories.map(sub => (
                        <SelectItem key={sub.id} value={sub.name}>{sub.name}</SelectItem>
                    ))}
                    </SelectContent>
                </Select>
                </div>
            </CardContent>
        </Card>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
}
