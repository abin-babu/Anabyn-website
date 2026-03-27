'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function GlobalNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A1628] text-white p-6 font-body">
      {/* Branding */}
      <div className="mb-12 text-center">
        <h2 className="text-white text-xl font-bold tracking-widest uppercase">
          ANABYN GLOBAL VENTURES LLP
        </h2>
      </div>

      {/* Main Content */}
      <div className="text-center space-y-6 max-w-lg">
        <h1 className="text-[120px] md:text-[180px] font-black text-[#D4A827] leading-none">
          404
        </h1>
        <h3 className="text-3xl md:text-4xl font-bold">
          Page Not Found
        </h3>
        <p className="text-white/70 text-lg leading-relaxed">
          The page you are looking for doesn't exist or has moved.
        </p>
      </div>

      {/* Primary Actions */}
      <div className="flex flex-col sm:flex-row gap-4 mt-12 w-full max-w-md">
        <Button asChild className="flex-1 bg-[#D4A827] text-[#0A1628] hover:bg-[#D4A827]/90 font-bold h-14 rounded-xl border-none">
          <Link href="/en">Go to Homepage</Link>
        </Button>
        <Button asChild className="flex-1 bg-[#D4A827] text-[#0A1628] hover:bg-[#D4A827]/90 font-bold h-14 rounded-xl border-none">
          <Link href="/en/request-quote">Request a Quote</Link>
        </Button>
      </div>

      {/* Navigation Links */}
      <nav className="mt-16 pt-8 border-t border-white/10 w-full max-w-2xl">
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] font-bold uppercase tracking-[0.2em]">
          <li>
            <Link href="/en/products" className="hover:text-[#D4A827] transition-colors">Products</Link>
          </li>
          <li>
            <Link href="/en/about-us" className="hover:text-[#D4A827] transition-colors">About</Link>
          </li>
          <li>
            <Link href="/en/export-process" className="hover:text-[#D4A827] transition-colors">Process</Link>
          </li>
          <li>
            <Link href="/en/certifications" className="hover:text-[#D4A827] transition-colors">Certifications</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
