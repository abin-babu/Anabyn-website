
'use client';

/**
 * Individual StatCounter component.
 * Leverages the global StatsObserver data attributes for high-performance count-up.
 */
export function StatCounter({ 
  target, 
  suffix = "", 
  prefix = "",
  className 
}: { 
  target: number; 
  suffix?: string; 
  prefix?: string;
  className?: string;
}) {
  return (
    <span 
      className={className}
      data-target={target}
      data-suffix={suffix}
      data-prefix={prefix}
    >
      {prefix}{target}{suffix}
    </span>
  );
}
