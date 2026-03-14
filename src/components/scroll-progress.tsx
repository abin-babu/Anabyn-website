'use client';

import { useEffect } from 'react';

/**
 * A component that renders a 2px gold progress bar at the top of the viewport,
 * reflecting the current scroll position of the page.
 */
export function ScrollProgress() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      // Prevent division by zero if the page is not scrollable
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      
      const el = document.getElementById('scroll-progress');
      if (el) {
        el.style.width = progress + '%';
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount to set initial position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      id="scroll-progress" 
      role="progressbar" 
      aria-label="Page scroll progress"
      className="fixed top-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#C9A243] via-[#E2C060] to-[#C9A243] z-[9999] transition-[width] duration-[0.05s] ease-linear pointer-events-none"
    />
  );
}
