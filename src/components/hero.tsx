'use client';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const heroImages = PlaceHolderImages.filter(img => img.id.startsWith('hero-'));

  return (
    <section className="relative h-screen w-full">
      <Carousel
        className="h-full w-full"
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {heroImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative h-screen w-full">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  data-ai-hint={image.imageHint}
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 
            className="text-4xl md:text-6xl font-headline font-bold drop-shadow-lg animate-fade-in-up"
            style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}
          >
            Anabyn Premium Gallery
          </h1>
          <p 
            className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md animate-fade-in-up"
            style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}
          >
            A Trusted Partner in Premium Textiles and Materials
          </p>
        </div>
      </div>
    </section>
  );
}
