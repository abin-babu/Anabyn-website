import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/hero';
import { ProductGallery } from '@/components/product-gallery';
import { WhyChooseUs } from '@/components/why-choose-us';
import { Testimonials } from '@/components/testimonials';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <WhyChooseUs />
        <ProductGallery />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
