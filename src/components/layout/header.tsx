
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, ChevronDown, Globe } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
} from '@/components/ui/dropdown-menu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AnabynLogo } from '../anabyn-logo';
import { categories } from '@/lib/products';
import type { Category } from '@/lib/types';

const mainCats = categories.filter(c => c.parentId === null);
const productNav = mainCats.map(cat => {
    const subCats = categories.filter(sc => sc.parentId === cat.id);
    return {
        ...cat,
        href: `/products/category/${cat.slug}`,
        subCategories: subCats.map(sc => ({
            ...sc,
            href: `/products/subcategory/${sc.slug}`
        }))
    };
});

const staticNavItems = [
    { label: 'About Us', href: '/about-us' },
    { label: 'Customization', href: '/customization' },
    { label: 'Quality', href: '/quality' },
    { label: 'Sustainability', href: '/sustainability' },
    { label: 'Downloads', href: '/downloads' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Careers', href: '/careers' },
];

const IndianFlag = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" width="24" height="16">
      <rect width="24" height="16" fill="#FFF"/>
      <rect width="24" height="5.33" fill="#FF9933"/>
      <rect y="10.67" width="24" height="5.33" fill="#138808"/>
      <circle cx="12" cy="8" r="1.7" fill="none" stroke="#000080" strokeWidth="0.6"/>
      <circle cx="12" cy="8" r="0.4" fill="#000080"/>
      <path d="M12 8 L12 6.3 M12 9.7 L12 8 M12 8 L13.7 8 M10.3 8 L12 8 M12 8 L13.204 7.196 M10.796 8.804 L12 8 M12 8 L13.204 8.804 M10.796 7.196 L12 8 M12 8 L13.568 7.568 M10.432 8.432 L12 8 M12 8 L13.568 8.432 M10.432 7.568 L12 8" stroke="#000080" strokeWidth="0.2" strokeLinecap="round"/>
    </svg>
  );

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <AnabynLogo width="36" height="36" />
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg leading-tight">Anabyn Global Ventures LLP</span>
              <IndianFlag />
            </div>
          </Link>
        </div>
        
        <div className="flex items-center gap-4">
          <nav className="hidden items-center space-x-6 text-sm font-medium lg:flex">
             <Link
                href={'/'}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                Home
              </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 transition-colors hover:text-foreground/80 text-foreground/60 outline-none">
                Products <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {productNav.map((cat) => (
                  cat.subCategories.length > 0 ? (
                    <DropdownMenuSub key={cat.id}>
                      <DropdownMenuSubTrigger>
                        <Link href={cat.href} className="w-full text-left">{cat.name}</Link>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          {cat.subCategories.map((sub) => (
                            <DropdownMenuItem key={sub.id} asChild>
                              <Link href={sub.href}>{sub.name}</Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                  ) : (
                    <DropdownMenuItem key={cat.id} asChild>
                      <Link href={cat.href}>{cat.name}</Link>
                    </DropdownMenuItem>
                  )
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {staticNavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Globe className="h-5 w-5" />
                    <span className="sr-only">Change language</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    English
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button asChild>
                <Link href="/inquiry">Contact Us</Link>
              </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-2 mt-8">
                 <SheetClose asChild>
                    <Link href="/" className="text-lg font-medium transition-colors hover:text-primary">Home</Link>
                 </SheetClose>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="products">
                    <AccordionTrigger className="text-lg font-medium">Products</AccordionTrigger>
                    <AccordionContent className="pl-4">
                        {productNav.map((cat) => (
                             <Accordion key={cat.name} type="single" collapsible className="w-full">
                                <AccordionItem value={cat.name}>
                                    <AccordionTrigger>
                                        <SheetClose asChild>
                                            <Link href={cat.href} className="hover:underline">{cat.name}</Link>
                                        </SheetClose>
                                    </AccordionTrigger>
                                    {cat.subCategories.length > 0 && (
                                    <AccordionContent className="pl-4">
                                        {cat.subCategories.map(sub => (
                                            <SheetClose asChild key={sub.name}>
                                                <Link href={sub.href} className="block py-2 text-muted-foreground hover:text-primary">{sub.name}</Link>
                                            </SheetClose>
                                        ))}
                                    </AccordionContent>
                                    )}
                                </AccordionItem>
                             </Accordion>
                        ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                {staticNavItems.map((item) => (
                    <SheetClose asChild key={item.label}>
                        <Link
                            href={item.href}
                            className="text-lg font-medium transition-colors hover:text-primary py-2"
                        >
                            {item.label}
                        </Link>
                    </SheetClose>
                ))}
                <Button asChild className="mt-4">
                    <Link href="/inquiry">Contact Us</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
