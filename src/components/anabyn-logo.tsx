import Image from 'next/image';

export function AnabynLogo({ width, height, className }: { width: number; height: number; className?: string }) {
  return (
    <Image 
      src="https://i.ibb.co/6gZ3sZn/logo.png" 
      alt="Anabyn Global Ventures LLP Logo" 
      width={width} 
      height={height}
      className={className}
      priority
    />
  );
}
