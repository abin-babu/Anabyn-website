import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/hero';
import { ProductGallery } from '@/components/product-gallery';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductGallery />
      </main>
      <Footer />
    </div>
  );
}
