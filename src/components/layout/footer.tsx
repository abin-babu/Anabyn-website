'use client';

import Link from 'next/link';
import { AnabynLogo } from '@/components/anabyn-logo';
import { Button } from '@/components/ui/button';
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#0D1B3E] pt-24 pb-12 text-white/70 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1.5 space-y-8">
            <AnabynLogo />
            <p className="text-sm leading-relaxed max-w-sm">
              Anabyn Global Ventures — India's trusted exporter of premium textiles and medical supplies. Serving buyers across USA, EU, UAE, and UK with verified manufacturing excellence.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/anabyn-global-ventures/', label: 'LinkedIn Profile' },
                { icon: FaWhatsapp, href: 'https://wa.me/919495613121', label: 'WhatsApp Chat' },
                { icon: FaInstagram, href: 'https://www.instagram.com/anabyn_global_ventures/', label: 'Instagram Profile' },
                { icon: FaFacebookF, href: 'https://www.facebook.com/people/Anabyn-Global-Ventures-LLP/61581460358902/', label: 'Facebook Page' },
                { icon: FaEnvelope, href: 'mailto:sales@anabyn.com', label: 'Email Sales' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#C8A020] hover:text-[#0D1B3E] hover:border-[#C8A020] transition-all"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase text-[10px] tracking-[0.3em] mb-10">Products</h4>
            <ul className="space-y-5 text-sm">
              <li><Link href="/products" className="hover:text-[#C8A020] transition-colors">Hotel Bed Sheets Export</Link></li>
              <li><Link href="/products" className="hover:text-[#C8A020] transition-colors">Indian Bath Towels</Link></li>
              <li><Link href="/products" className="hover:text-[#C8A020] transition-colors">Hospitality Uniforms India</Link></li>
              <li><Link href="/products" className="hover:text-[#C8A020] transition-colors">Medical Syringes & IV Sets</Link></li>
              <li><Link href="/products" className="hover:text-[#C8A020] transition-colors">Surgical Gloves Supplier</Link></li>
              <li><Link href="/products" className="hover:text-[#C8A020] transition-colors">ICU Hospital Beds</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase text-[10px] tracking-[0.3em] mb-10">Intelligence</h4>
            <ul className="space-y-5 text-sm">
              <li><Link href="/blog" className="hover:text-[#C8A020] transition-colors">Expert Insights</Link></li>
              <li><Link href="/how-we-export" className="hover:text-[#C8A020] transition-colors">Import Guide</Link></li>
              <li><Link href="/certifications" className="hover:text-[#C8A020] transition-colors">Quality Standards</Link></li>
              <li><Link href="/sustainability" className="hover:text-[#C8A020] transition-colors">Sustainability</Link></li>
              <li><Link href="/about-us" className="hover:text-[#C8A020] transition-colors">Company Profile</Link></li>
              <li><Link href="/careers" className="hover:text-[#C8A020] transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase text-[10px] tracking-[0.3em] mb-10">Get in Touch</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#C8A020]" />
                <a href="mailto:sales@anabyn.com" className="hover:text-[#C8A020]">sales@anabyn.com</a>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-[#C8A020]" />
                <a href="tel:+919495613121" className="hover:text-[#C8A020]">+91 94956 13121</a>
              </li>
              <li>
                <Button asChild variant="outline" className="border-white/20 text-white bg-transparent hover:bg-white/10 w-full rounded-xl">
                  <a href="https://wa.me/919495613121" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp className="mr-2" /> WhatsApp Sourcing Desk
                  </a>
                </Button>
              </li>
              <li>
                <Button asChild variant="secondary" className="bg-[#C8A020] text-[#0D1B3E] hover:bg-[#E2BA3A] w-full rounded-xl font-bold">
                  <a href="https://share.google/Icw2FF4giN0LJdQcz" target="_blank" rel="noopener noreferrer">
                    ⭐ Google Verified Reviews
                  </a>
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-bold uppercase tracking-[0.2em]">
          <p>© {currentYear} Anabyn Global Ventures LLP. Indian Export Authority.</p>
          <div className="flex items-center gap-8">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
