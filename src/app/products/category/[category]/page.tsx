
'use client';
import { useParams } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProductGallery } from '@/components/product-gallery';
import { categories } from '@/lib/products';

export default function ProductCategoryPage() {
    const params = useParams();
    const categorySlug = decodeURIComponent(params.category as string);

    // Find the readable category name to pass to ProductGallery
    const category = categories.find(
        (c) => c.slug.toLowerCase() === categorySlug.toLowerCase()
    );
    
    const categoryName = category ? category.name : categorySlug;
    
    return (
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <ProductGallery initialCategory={categoryName} />
          </main>
          <Footer />
        </div>
    );
}
