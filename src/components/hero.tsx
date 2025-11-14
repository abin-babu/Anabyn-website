
'use client';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';


const whatsappNumber = "919495613121";
const whatsappMessage = `Hi Anabyn — I’d like to make an enquiry.`;
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-1');

  return (
    <section className="relative h-screen w-full">
      {heroImage && (
         <div className="relative h-screen w-full">
            <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                priority
                data-ai-hint={heroImage.imageHint}
            />
            <div className="absolute inset-0 bg-black/50" />
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
        <div 
          className="text-center text-white animate-fade-in-up"
          style={{ animationDelay: '0.5s', animationDuration: '0.8s', animationFillMode: 'backwards' }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold font-headline tracking-tight drop-shadow-lg max-w-4xl">
            Connecting India’s Manufacturing Power to Global Markets
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 drop-shadow-md max-w-3xl mx-auto">
            High-quality products. On-time delivery. World-class logistics.
          </p>
           <p className="mt-2 text-lg md:text-xl text-gray-200 drop-shadow-md max-w-3xl mx-auto">
            Backed by exclusive alliances with top manufacturers, we deliver verified quality with unbeatable cost efficiency.
          </p>
          <div className="pointer-events-auto mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
                <Link href="/inquiry">
                    Start Sourcing <ArrowRight className="ml-2 h-5 w-5"/>
                </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
                <Link href="/#products">
                    Explore Product Range
                </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
