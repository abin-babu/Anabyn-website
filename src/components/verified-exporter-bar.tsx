'use client';

import { cn } from '@/lib/utils';

/**
 * VerifiedExporterBar - A clean, single-line inline certification strip.
 * Strictly reflects currently held active registrations.
 */
export function VerifiedExporterBar({ className }: { className?: string }) {
  const certifications = [
    "IEC Registered Exporter (ACLFA6777F)",
    "GST Registered (32ACLFA6777F1Z8)",
    "AQL 2.5 Inspection Standard",
    "Verified Indian Manufacturing"
  ];

  return (
    <div className={cn("bg-white", className)}>
      <div className="cert-strip">
        {certifications.map((cert) => (
          <span key={cert} className="cert-item">
            {cert}
          </span>
        ))}
      </div>
    </div>
  );
}
