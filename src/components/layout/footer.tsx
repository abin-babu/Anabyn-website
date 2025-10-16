
import Link from 'next/link';
import { AnabynLogo } from '../anabyn-logo';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-4">
            <AnabynLogo width={80} height={25} />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © {currentYear} Anabyn Global Ventures LLP. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
             <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
                <Link href="/terms-of-service" className="hover:text-primary">Terms of Service</Link>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
