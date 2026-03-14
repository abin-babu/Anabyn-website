import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { Toaster } from '@/components/ui/toaster';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import { FirebaseClientProvider } from '@/firebase';
import { TextRevealObserver } from '@/components/text-reveal-observer';
import { StatsObserver } from '@/components/stats-observer';
import { TiltEffectObserver } from '@/components/tilt-effect-observer';
import { ScrollProgress } from '@/components/scroll-progress';
import { PageLoader } from '@/components/page-loader';
import { WhatsappCta } from '@/components/whatsapp-cta';
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
    default: "Premium Terry Towels & Bed Linen Exporter India | Anabyn Global Ventures",
    template: "%s | Anabyn Global Ventures"
  },
  description: "Anabyn Global Ventures LLP — India's premium luxury terry towel and bed linen exporter. Supplying hotels, retailers and distributors in 50+ countries. Request a quote.",
  keywords: ["luxury terry towels exporter India", "bed linen exporter India", "hotel towel supplier India", "premium cotton towels wholesale", "textile exporter India B2B"],
  authors: [{ name: "Anabyn Global Ventures LLP" }],
  robots: "index, follow",
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  alternates: {
    canonical: 'https://www.anabyn.com/',
  },
  openGraph: {
    type: "website",
    url: "https://www.anabyn.com/",
    title: "Anabyn Global Ventures — Premium Indian Textile Exports",
    description: "India's premium luxury terry towel and bed linen exporter. 50+ countries. Hotels, retail chains and distributors worldwide.",
    siteName: 'Anabyn Global Ventures LLP',
    locale: 'en_US',
  },
  twitter: {
    card: "summary_large_image",
    title: "Anabyn Global Ventures — Premium Indian Textile Exports",
    description: "India's premium luxury terry towel and bed linen exporter. 50+ countries.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Anabyn Global Ventures LLP",
  "url": "https://www.anabyn.com",
  "logo": "https://www.anabyn.com/images/logo.png",
  "description": "Premium luxury textile exporter from India specialising in terry towels and bed linen for hotels, retailers and distributors worldwide.",
  "email": "anabyn.group@gmail.com",
  "foundingLocation": { "@type": "Place", "addressCountry": "IN" },
  "areaServed": "Worldwide",
  "knowsAbout": ["Terry Towels", "Bed Linen", "Textile Export", "Hotel Linen"],
  "sameAs": [
    "https://www.linkedin.com/company/anabyn-global-ventures",
    "https://www.instagram.com/anabynglobal"
  ]
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Google Analytics 4 */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-W4TG29FZLD`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-W4TG29FZLD', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="font-body antialiased" suppressHydrationWarning>
        <PageLoader />
        <NextIntlClientProvider messages={messages}>
          <FirebaseClientProvider>
            <ScrollProgress />
            <TextRevealObserver />
            <StatsObserver />
            <TiltEffectObserver />
            {children}
            <WhatsappCta />
            <Toaster />
          </FirebaseClientProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
