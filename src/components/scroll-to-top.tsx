'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-[108px] right-7 h-12 w-12 rounded-full shadow-2xl bg-navy-gradient border border-[#C8A020]/40 text-white transition-all z-[60] group"
      aria-label="Scroll to top"
    >
      <ChevronUp className="h-6 w-6 text-[#C8A020] group-hover:scale-125 transition-transform" />
    </Button>
  );
}
