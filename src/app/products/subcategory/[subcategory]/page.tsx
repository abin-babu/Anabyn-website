
'use client';
import { useParams } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProductGallery } from '@/components/product-gallery';
import { products } from '@/lib/products';

export default function ProductSubCategoryPage() {
    const params = useParams();
    const subcategory = decodeURIComponent(params.subcategory as string);
    
    // Find the main category this subcategory belongs to
    const product = products.find(p => p.category.material === subcategory);
    const mainCategory = product?.category.usage;

    return (
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            <ProductGallery initialCategory={mainCategory} initialSubCategory={subcategory} />
          </main>
          <Footer />
        </div>
    );
}
