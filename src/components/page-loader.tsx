'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide loader after 600ms total visibility to ensure rapid FCP
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      id="loader-container" 
      className={isVisible ? '' : 'hidden'}
    >
      <div id="loader" className="flex flex-col items-center">
        <div className="relative w-24 h-24 md:w-32 md:h-32 animate-in zoom-in duration-500 ease-out">
          <Image 
            src="/images/logo.png" 
            alt="Anabyn Logo" 
            fill 
            className="object-contain"
            priority
          />
        </div>
        <div id="loader-name" className="mt-6 opacity-0 animate-in fade-in slide-in-from-bottom-2 duration-500 delay-200 fill-mode-forwards">
          <span className="text-[#C9A243] font-playfair font-bold">Anabyn</span> <span className="text-white font-playfair">Global Ventures</span>
        </div>
      </div>
    </div>
  );
}
