import Image from 'next/image';

export function AnabynLogo({ width, height, className }: { width: number; height: number; className?: string }) {
  return (
    <Image 
      src="https://i.ibb.co/VvfLz2h/image.png" 
      alt="Anabyn Global Ventures LLP Shield Logo" 
      width={width} 
      height={height}
      className={className}
      priority
    />
  );
}
