
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AnabynLogo } from '../anabyn-logo';

export function Header() {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/#products' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Customization', href: '/customization' },
    { label: 'Quality', href: '/quality' },
    { label: 'Sustainability', href: '/sustainability' },
    { label: 'Downloads', href: '/downloads' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Careers', href: '/careers' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <AnabynLogo width={64} height={20} />
          </Link>
          <nav className="hidden items-center space-x-4 text-sm font-medium lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild className="hidden md:inline-flex">
            <Link href="/inquiry">Inquire Now</Link>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-lg font-medium transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
                 <Link
                    href={'/admin'}
                    className="text-lg font-medium transition-colors hover:text-primary"
                  >
                    Admin
                  </Link>
                <Button asChild className="mt-4">
                    <Link href="/inquiry">Inquire Now</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
