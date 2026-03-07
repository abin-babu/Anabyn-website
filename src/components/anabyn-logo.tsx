'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

export function AnabynLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center", className)}>
      <Image
        src="/logo.png"
        alt="Anabyn Global Ventures LLP"
        width={180}
        height={60}
        className="h-12 w-auto object-contain"
        priority
      />
    </div>
  );
}