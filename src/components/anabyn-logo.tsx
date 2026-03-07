
'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';

export function AnabynLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative w-12 h-12 flex-shrink-0">
        <Image 
          src="/images/logo.png" 
          alt="Anabyn Logo" 
          width={48} 
          height={48} 
          className="object-contain"
          priority
        />
      </div>
      <div className="flex flex-col">
        <span className="text-white text-2xl font-playfair font-bold leading-none tracking-tight">ANABYN</span>
        <span className="text-brand-gold text-[10px] font-body font-bold uppercase tracking-[0.15em] leading-none mt-1">Global Ventures LLP</span>
      </div>
    </div>
  );
}
