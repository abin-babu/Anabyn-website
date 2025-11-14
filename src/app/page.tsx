import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/hero';
import { FeaturedProducts } from '@/components/featured-products';
import { WhyChooseUs } from '@/components/why-choose-us';
import { Testimonials } from '@/components/testimonials';
import { ProductCategoryShowcase } from '@/components/product-category-showcase';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyChooseUs />
        <ProductCategoryShowcase />
        <FeaturedProducts />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
