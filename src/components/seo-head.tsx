'use client';

import { useEffect } from 'react';

interface SeoHeadProps {
  title: string;
  description: string;
}

/**
 * Client-side SEO management component.
 * Standardizes title suffixes to "| Anabyn".
 */
export function SeoHead({ title, description }: SeoHeadProps) {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = `${title} | Anabyn`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }
  }, [title, description]);

  return null;
}
