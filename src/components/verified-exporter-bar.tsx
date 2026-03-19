'use client';

import { cn } from '@/lib/utils';

/**
 * VerifiedExporterBar - A clean, single-line inline certification strip.
 * Replaces the 7-card carousel/grid with a refined corporate treatment.
 */
export function VerifiedExporterBar({ className }: { className?: string }) {
  const certifications = [
    "ISO 9001:2015",
    "CE Marked",
    "FDA Registered",
    "GOTS Organic Cotton",
    "OEKO-TEX Standard 100",
    "IEC Registered Exporter",
    "AQL 2.5 Inspected"
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
