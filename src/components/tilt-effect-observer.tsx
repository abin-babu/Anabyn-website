'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * An invisible component that applies a subtle 3D perspective tilt effect 
 * to all .product-card and .service-card elements dynamically across the site.
 */
export function TiltEffectObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const cards = document.querySelectorAll('.product-card, .service-card');
    
    const handleMouseMove = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      // Calculate rotation based on cursor distance from center
      const rotateX = ((y - centerY) / centerY) * -6; // Max 6deg
      const rotateY = ((x - centerX) / centerX) * 6;  // Max 6deg
      
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      
      // Dynamic shadow offset based on tilt
      card.style.boxShadow = `${-rotateY * 2}px ${rotateX * 2}px 30px rgba(201,162,67,0.15)`;
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)';
      card.style.boxShadow = '';
    };

    cards.forEach(card => {
      card.addEventListener('mousemove', handleMouseMove as any);
      card.addEventListener('mouseleave', handleMouseLeave as any);
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', handleMouseMove as any);
        card.removeEventListener('mouseleave', handleMouseLeave as any);
      });
    };
  }, [pathname]);

  return null;
}