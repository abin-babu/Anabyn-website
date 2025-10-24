
import Link from 'next/link';
import { AnabynLogo } from '../anabyn-logo';
import { Mail, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container py-8">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-4">
            <AnabynLogo width={20} height={20} />
            <p className="text-sm leading-loose text-muted-foreground">
              © {currentYear} Anabyn Global Ventures LLP. All rights reserved.
            </p>
          </div>
           <div className="flex flex-col items-center gap-2">
                <h3 className="font-semibold">Quick Links</h3>
                <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                    <Link href="/about-us" className="hover:text-primary">About Us</Link>
                    <Link href="/sustainability" className="hover:text-primary">Sustainability</Link>
                    <Link href="/careers" className="hover:text-primary">Careers</Link>
                </div>
            </div>
          <div className="flex flex-col items-center md:items-end gap-3">
             <h3 className="font-semibold">Contact Us</h3>
             <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4"/>
                <a href="mailto:sales@anabyn.com" className="hover:text-primary">sales@anabyn.com</a>
             </div>
             <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4"/>
                <a href="https://wa.me/919495613121" target="_blank" rel="noopener noreferrer" className="hover:text-primary">+91 94956 13121</a>
             </div>
             <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                <Link href="/privacy-policy" className="hover:text-primary">Privacy</Link>
                <Link href="/terms-of-service" className="hover:text-primary">Terms</Link>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
