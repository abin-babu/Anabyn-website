
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from './ui/button';
import { FaWhatsapp } from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';


const whatsappNumber = "919495613121";
const whatsappMessage = `Hi Anabyn — I’d like to make an enquiry.`;
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export function Hero() {
  const heroImages = PlaceHolderImages.filter(img => img.id.startsWith('hero-'));

  return (
    <section className="relative h-screen w-full">
      <Carousel
        className="h-full w-full"
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
                <div className="absolute inset-0 bg-black/50" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        <div 
          className="text-center text-white animate-fade-in-up"
          style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold font-headline tracking-tight drop-shadow-lg max-w-4xl">
            Global Export Partner from India — Textiles, Uniforms, Chemicals & Supplies
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 drop-shadow-md max-w-2xl">
            Quality. Customization. Trust. Delivered Worldwide.
          </p>
          <div className="pointer-events-auto mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
                <Link href="/inquiry">
                    Request a Quote <ArrowRight className="ml-2 h-5 w-5"/>
                </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="mr-2 h-5 w-5"/> WhatsApp Enquiry
                </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
