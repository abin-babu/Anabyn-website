
'use client';
import { useParams } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProductGallery } from '@/components/product-gallery';
import { mainCategories } from '@/lib/products';

export default function ProductCategoryPage() {
    const params = useParams();
    const category = decodeURIComponent(params.category as string);

    // Find the readable category name to pass to ProductGallery
    const categoryName = Object.values(mainCategories).find(
        (name) => name.toLowerCase() === category.toLowerCase()
    ) || category;
    
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
