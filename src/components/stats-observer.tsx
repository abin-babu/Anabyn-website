
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * An invisible component that applies count-up animations to all elements 
 * with a data-target attribute dynamically across the application.
 */
export function StatsObserver() {
  const pathname = usePathname();

  useEffect(() => {
    function animateCounter(element: HTMLElement) {
      const target = parseFloat(element.dataset.target || '0');
      const duration = 2000;
      const startTime = performance.now();
      const suffix = element.dataset.suffix || '';
      const prefix = element.dataset.prefix || '';
      const isDecimal = target % 1 !== 0;

      function update(currentTime: number) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
        const current = eased * target;
        
        const displayValue = isDecimal 
          ? current.toFixed(1) 
          : Math.floor(current).toLocaleString();

        element.textContent = prefix + displayValue + suffix;
        
        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }
      requestAnimationFrame(update);
    }

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const targetEl = entry.target as HTMLElement;
        if (entry.isIntersecting && !targetEl.dataset.animated) {
          targetEl.dataset.animated = 'true';
          animateCounter(targetEl);
        }
      });
    }, { threshold: 0.5 });

    // Identify all elements with data-target attributes
    const elements = document.querySelectorAll('[data-target]');
    elements.forEach(el => counterObserver.observe(el));

    return () => {
      counterObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
