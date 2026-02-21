import { cn } from '@/lib/utils';

export function AnabynLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center", className)}>
      <img
        src="/logo.png"
        alt="Anabyn Global Ventures LLP"
        className="h-12 w-auto object-contain"
        style={{ maxWidth: '180px' }}
      />
    </div>
  );
}
