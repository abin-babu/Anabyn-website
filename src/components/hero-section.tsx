
'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface HeroSectionProps {
  badge?: string;
  title: string;
  highlightedTitle?: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundImage?: string;
  className?: string;
}

export function HeroSection({
  badge,
  title,
  highlightedTitle,
  description,
  ctaText = "Request Quote",
  ctaLink = "/request-quote",
  secondaryCtaText,
  secondaryCtaLink,
  backgroundImage,
  className
}: HeroSectionProps) {
  return (
    <section className={cn("relative pt-40 pb-24 overflow-hidden bg-brand-navy text-white", className)}>
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-navy/60 to-brand-navy z-10" />
          <Image 
            src={backgroundImage} 
            alt={title}
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
      )}
      
      <div className="container relative z-20 px-4 mx-auto text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {badge && (
            <Badge variant="outline" className="text-brand-gold border-brand-gold px-4 py-1 uppercase tracking-[0.3em] font-black">
              {badge}
            </Badge>
          )}
          <h1 className="text-5xl md:text-8xl font-playfair font-bold leading-tight">
            {title} {highlightedTitle && <span className="text-brand-gold">{highlightedTitle}</span>}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-medium max-w-3xl mx-auto">
            {description}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button asChild size="lg" className="rounded-2xl bg-brand-gold text-brand-navy hover:bg-brand-gold/90 h-16 px-10 font-black text-lg border-none shadow-2xl">
              <Link href={ctaLink}>{ctaText} <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
            {secondaryCtaText && secondaryCtaLink && (
              <Button asChild variant="outline" size="lg" className="rounded-2xl border-white/30 text-white hover:bg-white hover:text-brand-navy h-16 px-10 font-bold bg-transparent backdrop-blur-sm">
                <Link href={secondaryCtaLink}>{secondaryCtaText}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
