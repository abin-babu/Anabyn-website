import Link from 'next/link';
import Image from 'next/image';

const AnabynLogo = () => (
  <Image src="https://i.ibb.co/6gZ3sZn/logo.png" alt="Anabyn Global Ventures LLP Logo" width={200} height={62} />
);

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <div className='mb-4 md:mb-0'>
            <AnabynLogo />
          </div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {currentYear} Anabyn Global Ventures LLP. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link href="/privacy-policy" className="hover:text-primary">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-primary">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
