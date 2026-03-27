'use client';

/**
 * A reusable component for injecting JSON-LD structured data into the page.
 * This should be used inside Next.js App Router pages or components.
 */
export function JsonLd({ data }: { data: any }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
