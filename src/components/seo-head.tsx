
'use client';

import { useEffect } from 'react';

interface SeoHeadProps {
  title: string;
  description: string;
}

/**
 * Client-side SEO management component.
 * Note: For full Next.js SEO, also use the server-side 'export const metadata' in page.tsx.
 */
export function SeoHead({ title, description }: SeoHeadProps) {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = `${title} | Anabyn Global Ventures`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }
  }, [title, description]);

  return null;
}
