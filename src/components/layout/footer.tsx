
import Link from 'next/link';
import { AnabynLogo } from '../anabyn-logo';
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter, FaGoogle } from 'react-icons/fa';

const socialLinks = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/anabyn-global-ventures/', icon: FaLinkedin },
    { name: 'Facebook', href: '#', icon: FaFacebook },
    { name: 'Instagram', href: '#', icon: FaInstagram },
    { name: 'Twitter', href: '#', icon: FaTwitter },
    { name: 'Google Business', href: '#', icon: FaGoogle },
]

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-4">
            <AnabynLogo width={200} height={62} />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © {currentYear} Anabyn Global Ventures LLP. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4">
             <div className="flex items-center gap-4">
                {socialLinks.map(social => (
                    <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="text-muted-foreground hover:text-primary transition-colors">
                        <social.icon className="h-6 w-6" />
                    </a>
                ))}
             </div>
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
