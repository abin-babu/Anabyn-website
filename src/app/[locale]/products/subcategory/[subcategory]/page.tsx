'use client';
import { useParams } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProductGallery } from '@/components/product-gallery';
import { categories }from '@/lib/products';

export default function ProductSubCategoryPage() {
    const params = useParams();
    const subcategorySlug = decodeURIComponent(params.subcategory as string);
    
    const subcategory = categories.find(sc => sc.slug === subcategorySlug);
    const parentCategory = subcategory ? categories.find(c => c.id === subcategory.parentId) : null;

    return (
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 pt-32">
            <ProductGallery initialCategory={parentCategory?.name} initialSubCategory={subcategory?.name} />
          </main>
          <Footer />
        </div>
    );
}
