import { cn } from '@/lib/utils';

export function AnabynLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg
        width="44"
        height="50"
        viewBox="0 0 44 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Outer Shield */}
        <path
          d="M22 0L2 6V22C2 34.1 10.4 45.4 22 50C33.6 45.4 42 34.1 42 22V6L22 0Z"
          fill="#C8A020"
        />
        {/* Inner Shield */}
        <path
          d="M22 4L6 8.5V22C6 31.8 12.8 40.9 22 46C31.2 40.9 38 31.8 38 22V8.5L22 4Z"
          fill="#1B45CC"
        />
        {/* Three Stars */}
        <path d="M22 10L23.2 13.5H26.8L23.9 15.6L25 19.1L22 17L19 19.1L20.1 15.6L17.2 13.5H20.8L22 10Z" fill="#C8A020" />
        <path d="M14 13L15.2 16.5H18.8L15.9 18.6L17 22.1L14 20L11 22.1L12.1 18.6L9.2 16.5H12.8L14 13Z" fill="#C8A020" />
        <path d="M30 13L31.2 16.5H34.8L31.9 18.6L33 22.1L30 20L27 22.1L28.1 18.6L25.2 16.5H28.8L30 13Z" fill="#C8A020" />
        {/* Handshake Icon Simplified */}
        <path
          d="M14 30C14 28.3 15.3 27 17 27H27C28.7 27 30 28.3 30 30V32C30 33.7 28.7 35 27 35H17C15.3 35 14 33.7 14 32V30Z"
          fill="#C8A020"
        />
        <path d="M18 31H26M22 27V35" stroke="#1B45CC" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <div className="flex flex-col">
        <span className="text-white font-playfair text-xl font-bold tracking-tight leading-none">ANABYN</span>
        <span className="text-[#C8A020] text-[10px] font-bold uppercase tracking-[0.2em] leading-tight mt-0.5">Global Ventures LLP</span>
      </div>
    </div>
  );
}
