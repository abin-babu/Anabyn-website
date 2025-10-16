
'use client';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter, FaGoogle, FaWhatsapp } from 'react-icons/fa';

const whatsappNumber = "919495613121";
const whatsappMessage = `Hi Anabyn — I’d like to inquire about your products.`;
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/anabyn-global-ventures/', icon: FaLinkedin },
    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61581460358902', icon: FaFacebook },
    { name: 'Instagram', href: 'https://www.instagram.com/anabyn_global_ventures/', icon: FaInstagram },
    { name: 'WhatsApp', href: whatsappUrl, icon: FaWhatsapp },
    { name: 'Twitter', href: '#', icon: FaTwitter },
    { name: 'Google Business', href: '#', icon: FaGoogle },
]

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
                <div className="absolute inset-0 bg-black/40" />
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
          <h1 className="text-4xl md:text-6xl font-extrabold font-headline tracking-tight drop-shadow-lg">
            Anabyn Global Ventures LLP
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 drop-shadow-md">
            Your trusted partner in hospitality supplies worldwide from India
          </p>
          <div className="pointer-events-auto mt-8 flex items-center justify-center gap-6">
            {socialLinks.map(social => (
                <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="text-gray-300 hover:text-white transition-colors">
                    <social.icon className="h-7 w-7" />
                </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
