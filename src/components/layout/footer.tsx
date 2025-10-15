import Link from 'next/link';

const AnabynLogo = () => (
    <svg width="120" height="40" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="28" fontFamily="Inter, sans-serif" fontSize="20" fontWeight="bold" fill="hsl(var(--primary))">
        ANABYN
      </text>
    </svg>
  );

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <AnabynLogo />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {currentYear} Anabyn. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-primary">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
