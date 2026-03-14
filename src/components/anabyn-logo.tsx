'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';

export function AnabynLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative w-10 h-10 flex-shrink-0">
        <Image 
          src="/images/logo.png" 
          alt="Anabyn Global Ventures" 
          fill 
          className="object-contain"
          priority
        />
      </div>
      <div className="flex flex-col">
        <span className="text-white text-xl font-playfair font-bold leading-none tracking-tight uppercase">ANABYN</span>
        <span className="text-[#C9A243] text-[8px] font-body font-bold uppercase tracking-[0.2em] leading-none mt-1">Global Ventures LLP</span>
      </div>
    </div>
  );
}
