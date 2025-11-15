
import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { FirebaseClientProvider } from '@/firebase';
import { WhatsappCta } from '@/components/whatsapp-cta';

export const metadata: Metadata = {
  title: 'Anabyn Global Ventures | Indian Exporter for Catering, Hospital & Hospitality Supplies',
  description: 'Anabyn Global Ventures is a trusted Indian exporter specializing in sourcing cost-effective catering, hospital, and hospitality supplies. We connect global businesses with quality products from reliable Indian manufacturers, built on trust and goodwill.',
  icons: {
    icon: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <FirebaseClientProvider>
            {children}
            <Toaster />
            <WhatsappCta />
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
