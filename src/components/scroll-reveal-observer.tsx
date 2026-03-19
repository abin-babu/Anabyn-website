'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * An invisible component that manages scroll-triggered reveal animations
 * using IntersectionObserver. It detects .reveal and .reveal-stagger elements.
 */
export function ScrollRevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { 
      threshold: 0.12,
      rootMargin: '0px 0px -50px 0px'
    });

    const elements = document.querySelectorAll('.reveal, .reveal-stagger');
    elements.forEach(el => observer.observe(el));

    // Cleanup
    return () => {
      elements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
