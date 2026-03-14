'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide loader after 2.6s with opacity fade out and translateY(-100%)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      id="loader-container" 
      className={isVisible ? '' : 'hidden'}
    >
      <div id="loader" className="flex flex-col items-center">
        <div className="relative w-24 h-24 mb-8 animate-in fade-in zoom-in duration-1000">
          <Image 
            src="/images/logo.png" 
            alt="Anabyn Logo" 
            fill 
            className="object-contain animate-pulse" 
            priority
          />
        </div>
        <div id="loader-name" className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <span style={{ color: '#C9A243' }}>Anabyn</span> Global Ventures
        </div>
      </div>
    </div>
  );
}
