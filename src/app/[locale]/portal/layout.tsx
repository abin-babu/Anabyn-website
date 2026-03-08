'use client';

import { useUser, useFirebase } from '@/firebase';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { 
  LayoutDashboard, 
  Package, 
  FileText, 
  Truck, 
  FlaskConical, 
  LogOut
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { signOut } from 'firebase/auth';

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  const { user, isUserLoading } = useUser();
  const { auth } = useFirebase();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isUserLoading && !user && !pathname.includes('/login') && !pathname.includes('/access-request')) {
      router.push('/portal/login');
    }
  }, [user, isUserLoading, router, pathname]);

  if (isUserLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary/10">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-brand-gold border-t-transparent rounded-full animate-spin" />
          <p className="font-bold text-brand-navy uppercase tracking-widest text-xs">Verifying Session...</p>
        </div>
      </div>
    );
  }

  // No portal chrome for login or request pages
  if (pathname.includes('/login') || pathname.includes('/access-request')) {
    return <>{children}</>;
  }

  const navItems = [
    { label: 'Dashboard', href: '/portal', icon: LayoutDashboard },
    { label: 'My Orders', href: '/portal/orders', icon: Package },
    { label: 'Shipment Tracking', href: '/portal/tracking', icon: Truck },
    { label: 'My Documents', href: '/portal/documents', icon: FileText },
    { label: 'Sample Requests', href: '/portal/samples', icon: FlaskConical },
  ];

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/portal/login');
  };

  return (
    <div className="flex min-h-screen flex-col bg-secondary/10">
      <Header />
      <div className="flex-1 flex container mx-auto px-4 py-8 mt-24 gap-8">
        {/* Portal Sidebar Desktop */}
        <aside className="hidden lg:flex w-64 flex-col gap-2 shrink-0">
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-brand-gold/10 flex flex-col h-full">
            <div className="mb-8 px-2">
              <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">Authenticated</p>
              <p className="font-bold text-brand-navy truncate text-sm">{user?.email}</p>
            </div>
            
            <nav className="flex-1 space-y-1">
              {navItems.map((item) => {
                const isActive = pathname.endsWith(item.href);
                return (
                  <Link 
                    key={item.label} 
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all",
                      isActive 
                        ? "bg-brand-navy text-white shadow-lg shadow-brand-navy/20" 
                        : "text-brand-navy/60 hover:bg-brand-navy/5 hover:text-brand-navy"
                    )}
                  >
                    <item.icon className={cn("w-4 h-4", isActive ? "text-brand-gold" : "opacity-60")} />
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-auto pt-8 space-y-1">
              <button 
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-destructive hover:bg-destructive/5 transition-all"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          </div>
        </aside>

        {/* Portal Content */}
        <main className="flex-1 min-w-0 pb-20">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
