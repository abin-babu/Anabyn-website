import type { Metadata, Viewport } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { FirebaseClientProvider } from '@/firebase';
import { Playfair_Display, DM_Sans, JetBrains_Mono } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-body',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0D1F3C',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.anabyn.com'),
  title: {
    default: 'Anabyn Global Ventures LLP — Premium Textile & Medical Exports from India',
    template: '%s | Anabyn Global Ventures',
  },
  description: 'Anabyn Global Ventures LLP is a trusted Indian exporter specializing in sourcing premium bed linen, bath linen, and medical disposables for global markets.',
  keywords: ['Indian Exporter', 'Hotel Linen', 'Hospital Supplies', 'Medical Disposables', 'Textile Export India', 'Hospitality Supplies'],
  authors: [{ name: 'Anabyn Global Ventures' }],
  creator: 'Anabyn Global Ventures',
  publisher: 'Anabyn Global Ventures',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'ar-SA': '/ar',
      'fr-FR': '/fr',
      'es-ES': '/es',
      'de-DE': '/de',
      'hi-IN': '/hi',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.anabyn.com',
    siteName: 'Anabyn Global Ventures',
    title: 'Anabyn Global Ventures LLP — Premium Textile & Medical Exports from India',
    description: 'Trusted Indian exporter for premium hospitality linens and medical consumables.',
    images: [
      {
        url: '/images/og-image.jpg', // Placeholder for actual OG image
        width: 1200,
        height: 630,
        alt: 'Anabyn Global Ventures - Exporting Excellence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anabyn Global Ventures LLP — Premium Textile & Medical Exports from India',
    description: 'Trusted Indian exporter for premium hospitality linens and medical consumables.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`light ${playfair.variable} ${dmSans.variable} ${jetbrains.variable}`}>
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
      </head>
      <body className="font-body antialiased animate-fade-in">
        <FirebaseClientProvider>
            {children}
            <Toaster />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
