'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * An invisible component that applies premium clip-path reveal animations
 * to all H1 and H2 tags dynamically across the application.
 */
export function TextRevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Identify all headlines
    const headings = document.querySelectorAll('h1, h2');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // If this is an H1/H2, also check for a supporting paragraph immediately following it
          // This allows for staggered subheadline reveals
          let sibling = entry.target.nextElementSibling;
          if (sibling && sibling.tagName === 'P') {
            sibling.classList.add('visible');
          }
        }
      });
    }, { threshold: 0.15 });

    headings.forEach(h => {
      // Add animation classes
      h.classList.add('text-reveal');
      
      // Check for supporting paragraph
      let sibling = h.nextElementSibling;
      if (sibling && sibling.tagName === 'P') {
        sibling.classList.add('supporting-p');
      }
      
      observer.observe(h);
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]); // Re-run when navigation occurs to catch new headings

  return null;
}