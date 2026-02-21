'use client';

import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0D1B3E] pt-20 pb-10 text-white/70">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1.5 space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <img src="/images/logo.png" alt="Anabyn Logo" className="h-10 w-auto" />
              <div className="flex flex-col">
                <span className="text-white font-playfair text-xl font-bold tracking-tight leading-none">ANABYN</span>
                <span className="text-[#C8A020] text-[10px] font-bold uppercase tracking-[0.2em] leading-tight">Global Ventures LLP</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs">
              Premium Textile & Medical Exports from India. Delivering manufacturing excellence to global businesses with trust and transparency.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: 'fa-linkedin-in', href: 'https://www.linkedin.com/company/anabyn-global-ventures/' },
                { icon: 'fa-whatsapp', href: 'https://wa.me/919495613121' },
                { icon: 'fa-instagram', href: 'https://www.instagram.com/anabyn_global_ventures/' },
                { icon: 'fa-envelope', href: 'mailto:anabyn.group@gmail.com' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#C8A020] hover:text-[#0D1B3E] hover:border-[#C8A020] transition-all"
                >
                  <i className={`fa-brands ${social.icon}`} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-[0.2em] mb-8">Products</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/#products" className="hover:text-[#C8A020] transition-colors">Bed Linen</Link></li>
              <li><Link href="/#products" className="hover:text-[#C8A020] transition-colors">Bath Linen</Link></li>
              <li><Link href="/#products" className="hover:text-[#C8A020] transition-colors">Medical Disposables</Link></li>
              <li><Link href="/customization" className="hover:text-[#C8A020] transition-colors">Custom / OEM</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-[0.2em] mb-8">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/#about" className="hover:text-[#C8A020] transition-colors">About Us</Link></li>
              <li><Link href="/#certifications" className="hover:text-[#C8A020] transition-colors">Certifications</Link></li>
              <li><Link href="/#markets" className="hover:text-[#C8A020] transition-colors">Markets</Link></li>
              <li><Link href="/#contact" className="hover:text-[#C8A020] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-[0.2em] mb-8">Support</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/#contact" className="hover:text-[#C8A020] transition-colors">Get a Quote</Link></li>
              <li><a href="mailto:anabyn.group@gmail.com" className="hover:text-[#C8A020] transition-colors">Email Us</a></li>
              <li><Link href="/downloads" className="hover:text-[#C8A020] transition-colors">Product Catalogue</Link></li>
              <li><Link href="/faq" className="hover:text-[#C8A020] transition-colors">Shipping Info</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] font-bold uppercase tracking-widest">
          <p>© {currentYear} Anabyn Global Ventures LLP. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
