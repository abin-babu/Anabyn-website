'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';

export function AnabynLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative w-8 h-8 flex-shrink-0">
        <svg viewBox="0 0 72 84" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path 
            d="M36 4L68 22V56C68 66 54 76 36 80C18 76 4 66 4 56V22L36 4Z" 
            fill="#C9A243" 
            className="opacity-20"
          />
          <path 
            d="M36 4L68 22V56C68 66 54 76 36 80C18 76 4 66 4 56V22L36 4Z" 
            stroke="#C9A243" 
            strokeWidth="4"
          />
          <path 
            d="M22 44C22 44 28 38 36 38C44 38 50 44 50 44" 
            stroke="#C9A243" 
            strokeWidth="4" 
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-white text-xl font-playfair font-bold leading-none tracking-tight">ANABYN</span>
        <span className="text-[#C9A243] text-[8px] font-body font-bold uppercase tracking-[0.2em] leading-none mt-1">Global Ventures LLP</span>
      </div>
    </div>
  );
}
