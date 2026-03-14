import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { Toaster } from '@/components/ui/toaster';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import { FirebaseClientProvider } from '@/firebase';
import Script from 'next/script';
import '@/app/globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://www.anabyn.com'),
  title: {
    default: "India Textile & Medical Exporter | Anabyn Global Ventures",
    template: "%s | Anabyn Global Ventures"
  },
  description: "Anabyn Global Ventures — India's trusted exporter of premium textiles & medical supplies. Serving USA, EU, UAE & UK. Request a quote today.",
  keywords: ["textile export India", "medical supplies exporter", "hospital linen supplier", "Indian cotton sheets export", "surgical disposables India"],
  openGraph: {
    title: "India Textile & Medical Exporter | Anabyn Global Ventures",
    description: "Premium hospitality textiles and medical supplies sourced directly from India's premier manufacturing hubs.",
    url: 'https://www.anabyn.com',
    siteName: 'Anabyn Global Ventures LLP',
    images: [
      {
        url: '/images/og-image.jpg', // Ensure this exists in public/images
        width: 1200,
        height: 630,
        alt: 'Anabyn Global Ventures - Premium Indian Export'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.anabyn.com',
  }
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const { locale } = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className={`light ${cormorant.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
        {/* Google Analytics 4 */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`} // Replace with actual ID
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="font-body antialiased animate-fade-in" suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <FirebaseClientProvider>
            {children}
            <Toaster />
          </FirebaseClientProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
