'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * An invisible component that applies premium clip-path reveal animations
 * to all H1 and H2 tags dynamically across the application.
 * 
 * Logic:
 * 1. Hero elements (identified by hero-load-X classes) reveal via CSS on load.
 * 2. Secondary elements reveal on scroll (0.05 threshold).
 * 3. Safety fallback ensures visibility even if JS/Intersection fails.
 */
export function TextRevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Identify all headlines and prepare siblings, excluding immediate load elements
    const headings = document.querySelectorAll('h1:not([class*="hero-load"]), h2:not([class*="hero-load"])');
    
    headings.forEach(h => {
      h.classList.add('text-reveal');
      
      // Subheadlines (P tags following H1/H2)
      let sibling = h.nextElementSibling;
      if (sibling && sibling.tagName === 'P') {
        sibling.classList.add('supporting-p');
        
        // CTAs often follow the subheadline in sections
        let nextSibling = sibling.nextElementSibling;
        if (nextSibling && (nextSibling.tagName === 'DIV' || nextSibling.classList.contains('flex'))) {
          nextSibling.classList.add('reveal-cta');
        }
      }
    });

    // 2. Setup IntersectionObserver for non-hero elements
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.classList.add('visible');
          
          // Staggered reveal for subheadlines and CTAs
          let sub = el.nextElementSibling;
          if (sub && sub.classList.contains('supporting-p')) {
            sub.classList.add('visible');
            let cta = sub.nextElementSibling;
            if (cta && cta.classList.contains('reveal-cta')) {
              cta.classList.add('visible');
            }
          }
        }
      });
    }, { threshold: 0.05 });

    headings.forEach(h => observer.observe(h));

    // 3. Safety Fallback: Force reveal all hidden elements after 1.2s
    const safetyTimer = setTimeout(() => {
      document.querySelectorAll('.text-reveal:not(.visible), .supporting-p:not(.visible), .reveal-cta:not(.visible)').forEach(el => {
        el.classList.add('visible');
      });
    }, 1200);

    return () => {
      observer.disconnect();
      clearTimeout(safetyTimer);
    };
  }, [pathname]);

  return null;
}
