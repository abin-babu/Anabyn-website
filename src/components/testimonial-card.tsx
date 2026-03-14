
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  text: string;
  author: string;
  role: string;
  company: string;
  photoUrl?: string;
  rating?: number;
  className?: string;
}

export function TestimonialCard({
  text,
  author,
  role,
  company,
  photoUrl,
  rating = 5,
  className
}: TestimonialCardProps) {
  return (
    <Card className={cn("border-none shadow-xl bg-white hover:-translate-y-2 transition-all duration-300", className)}>
      <CardContent className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-1 text-brand-gold">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill={i < rating ? 'currentColor' : 'none'} />
            ))}
          </div>
          <Quote className="text-brand-gold/10 w-8 h-8" />
        </div>
        
        <p className="text-brand-navy font-medium italic mb-8 leading-relaxed">
          "{text}"
        </p>

        <div className="flex items-center gap-4 border-t pt-6">
          {photoUrl && (
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-brand-gold/20">
              <Image src={photoUrl} alt={author} fill className="object-cover" />
            </div>
          )}
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-brand-navy text-sm">{author}</h4>
              <CheckCircle2 size={12} className="text-brand-green" />
            </div>
            <p className="text-[10px] text-muted-foreground font-bold uppercase">{role}</p>
            <p className="text-[10px] font-bold text-brand-gold">{company}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
