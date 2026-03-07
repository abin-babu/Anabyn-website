'use client';

import { cn } from '@/lib/utils';

export function AnabynLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative w-12 h-12 flex-shrink-0">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
          {/* Outer Shield Gold */}
          <path d="M50 5 L90 25 V50 C90 75 50 95 50 95 C50 95 10 75 10 50 V25 L50 5 Z" fill="#C8A020" />
          {/* Inner Shield Royal Blue */}
          <path d="M50 12 L82 28 V50 C82 70 50 87 50 87 C50 87 18 70 18 50 V28 L50 12 Z" fill="#1B45CC" />
          {/* Three Stars */}
          <text x="50" y="32" fontSize="12" fill="#C8A020" textAnchor="middle" className="font-bold">★★★</text>
          {/* Handshake Icon */}
          <g transform="translate(28, 40) scale(0.8)">
            <path d="M44.5 14.6c-1.1-.1-2.1.2-2.9.9l-4.1 3.5-2.1-2.1c-.8-.8-2-.8-2.8 0l-4.9 4.9c-.8.8-.8 2 0 2.8l4.9 4.9c.8.8 2 .8 2.8 0l2.1-2.1 4.1 3.5c.8.7 1.8 1 2.9.9 1.1-.1 2-.6 2.6-1.5l2.8-4.9c.6-.9.6-2.1 0-3l-2.8-4.9c-.6-.9-1.6-1.4-2.7-1.5z" fill="#C8A020" />
            <path d="M10.5 14.6c1.1-.1 2.1.2 2.9.9l4.1 3.5 2.1-2.1c.8-.8 2-.8 2.8 0l4.9 4.9c.8.8.8 2 0 2.8l-4.9 4.9c-.8.8-2 .8-2.8 0l-2.1-2.1-4.1 3.5c-.8.7-1.8 1-2.9.9-1.1-.1-2-.6-2.6-1.5l-2.8-4.9c-.6-.9-.6-2.1 0-3l2.8-4.9c.6-.9 1.6-1.4 2.7-1.5z" fill="#C8A020" />
          </g>
        </svg>
      </div>
      <div className="flex flex-col">
        <span className="text-white text-2xl font-playfair font-bold leading-none tracking-tight">ANABYN</span>
        <span className="text-[#C8A020] text-[10px] font-inter font-bold uppercase tracking-[0.15em] leading-none mt-1">Global Ventures LLP</span>
      </div>
    </div>
  );
}