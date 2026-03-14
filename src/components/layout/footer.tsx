'use client';

import Link from 'next/link';
import { AnabynLogo } from '@/components/anabyn-logo';
import { Mail, Globe } from 'lucide-react';

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#060A14] pt-24 pb-12 text-[rgba(244,240,232,0.55)] border-t border-[rgba(201,162,67,0.12)]">
      <div className="container px-4 mx-auto">
        {/* TOP SECTION: 3 Columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
          
          {/* Column 1: Brand */}
          <div className="space-y-8">
            <div className="flex flex-col gap-4">
              <AnabynLogo className="scale-110 origin-left" />
              <p className="text-[#C9A243] font-bold text-xs uppercase tracking-[0.2em] mt-2">
                Premium Textile Exports from India Since 2020
              </p>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Exporting to 50+ countries — terry towels, bed linen and home textiles for luxury hotels, retail chains and global distributors. Verified quality and documentation at every handshake.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-[#C9A243]" />
                <a href="mailto:anabyn.group@gmail.com" className="hover:text-[#C9A243] transition-colors">anabyn.group@gmail.com</a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Globe className="w-4 h-4 text-[#C9A243]" />
                <a href="https://www.anabyn.com" className="hover:text-[#C9A243] transition-colors">www.anabyn.com</a>
              </div>
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 className="text-white font-bold uppercase text-[10px] tracking-[0.3em] mb-10">Products</h4>
            <ul className="space-y-5 text-sm font-medium">
              <li>
                <Link href="/terry-towels" className="hover:text-[#C9A243] transition-colors">Terry Towels</Link>
              </li>
              <li>
                <Link href="/bed-linen" className="hover:text-[#C9A243] transition-colors">Bed Linen Collection</Link>
              </li>
              <li>
                <Link href="/hotel-collections" className="hover:text-[#C9A243] transition-colors">Hotel & Hospitality</Link>
              </li>
              <li>
                <Link href="/oem-private-label" className="hover:text-[#C9A243] transition-colors">OEM & Private Label</Link>
              </li>
              <li>
                <Link href="/certifications" className="hover:text-[#C9A243] transition-colors">Certifications</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-white font-bold uppercase text-[10px] tracking-[0.3em] mb-10">Company</h4>
            <ul className="space-y-5 text-sm font-medium">
              <li>
                <Link href="/about-us" className="hover:text-[#C9A243] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/export-process" className="hover:text-[#C9A243] transition-colors">Export Process</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#C9A243] transition-colors">FAQ</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#C9A243] transition-colors opacity-50 cursor-not-allowed">Blog (Coming Soon)</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C9A243] transition-colors">Contact & Quote</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* CERTIFICATION BADGES ROW */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 pt-12 border-t border-[rgba(201,162,67,0.08)]">
          {[
            'OEKO-TEX Compliant',
            'GOTS Cotton Available',
            'AQL 2.5 Inspected',
            'ISO Process'
          ].map((badge) => (
            <div 
              key={badge}
              className="px-4 py-1.5 rounded-full border border-[#C9A243]/30 text-[10px] font-black uppercase tracking-widest text-[#C9A243]/80 bg-transparent"
            >
              {badge}
            </div>
          ))}
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-10 border-t border-[rgba(201,162,67,0.08)] flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-bold uppercase tracking-[0.2em]">
          <p>© {currentYear} Anabyn Global Ventures LLP. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <span className="text-[#C9A243]">Premium Textile Exports · Made in India</span>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
