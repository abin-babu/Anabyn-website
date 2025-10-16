
import Image from 'next/image';

export function AnabynLogo({
  width,
  height,
  className,
}: {
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <Image
      src="/images/logo.png"
      alt="Anabyn Global Ventures LLP Logo"
      width={width}
      height={height}
      className={className}
      priority
      unoptimized
    />
  );
}
