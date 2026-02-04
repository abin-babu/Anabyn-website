
import Link from 'next/link';
import { AnabynLogo } from '../anabyn-logo';
import { Mail, Phone, MapPin, Star } from 'lucide-react';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container py-8">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/">
              <AnabynLogo width={120} height={48} />
            </Link>
            <p className="text-sm leading-loose text-muted-foreground">
              © {currentYear} Anabyn Global Ventures LLP. All rights reserved.
            </p>
             <div className="flex items-center gap-4">
                <a href="https://www.instagram.com/anabyn_global_ventures/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    <FaInstagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                </a>
                <a href="https://www.linkedin.com/company/anabyn-global-ventures/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    <FaLinkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                </a>
                <a href="https://www.facebook.com/people/Anabyn-Global-Ventures-LLP/61581460358902/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    <FaFacebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                </a>
                 <a href="https://maps.app.goo.gl/gwm9UAW6Ym55nWMb8" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    <MapPin className="h-5 w-5" />
                    <span className="sr-only">Google Maps</span>
                </a>
                <a href="https://share.google/Icw2FF4giN0LJdQcz" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                    <Star className="h-5 w-5" />
                    <span className="sr-only">Google Reviews</span>
                </a>
            </div>
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
