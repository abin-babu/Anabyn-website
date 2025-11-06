
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, ChevronDown } from 'lucide-react';
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

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <AnabynLogo width={16} height={16} />
          </Link>
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
                    <DropdownMenuItem key={cat.name} asChild>
                        <Link href={cat.href}>{cat.name}</Link>
                    </DropdownMenuItem>
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
                                    <AccordionContent className="pl-4">
                                        {cat.subCategories.map(sub => (
                                            <SheetClose asChild key={sub.name}>
                                                <Link href={sub.href} className="block py-2 text-muted-foreground hover:text-primary">{sub.name}</Link>
                                            </SheetClose>
                                        ))}
                                    </AccordionContent>
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
                 <Link
                    href={'/admin'}
                    className="text-lg font-medium transition-colors hover:text-primary py-2"
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
