'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, MessageSquare, ArrowRight, Home, Mail, Clock } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const rfqId = searchParams.get('id') || 'AGV-2026-XXXX';

  const whatsappMessage = encodeURIComponent(`Hi Anabyn team, I have submitted an RFQ with ID: ${rfqId}. I'd like to discuss the next steps.`);

  return (
    <div className="max-w-2xl mx-auto py-20 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-8 flex justify-center">
        <div className="w-24 h-24 rounded-full bg-success/10 flex items-center justify-center">
          <CheckCircle2 className="w-12 h-12 text-success" />
        </div>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold font-playfair text-brand-navy mb-4">Request Received!</h1>
      <p className="text-xl text-muted-foreground mb-12">
        Your quote request has been received. We will respond within 24 hours.
      </p>

      <Card className="border-brand-gold/30 shadow-xl mb-12 bg-white rounded-2xl overflow-hidden">
        <CardHeader className="bg-brand-navy text-white py-6">
          <CardTitle className="text-sm uppercase tracking-[0.3em] font-bold">RFQ Reference ID</CardTitle>
        </CardHeader>
        <CardContent className="p-10">
          <p className="text-5xl font-mono font-bold text-brand-gold tracking-wider mb-8">{rfqId}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/10">
              <Mail className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
              <div>
                <p className="font-bold text-brand-navy text-sm">Check Your Email</p>
                <p className="text-xs text-muted-foreground">A confirmation summary has been sent to your inbox.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/10">
              <Clock className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
              <div>
                <p className="font-bold text-brand-navy text-sm">Next Steps</p>
                <p className="text-xs text-muted-foreground">An account manager will prepare your technical dossier.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-4 max-w-md mx-auto">
        <Button asChild size="lg" className="h-14 bg-brand-navy text-white font-bold rounded-xl shadow-xl hover:scale-[1.02] transition-transform">
          <Link href="/">
            <Home className="mr-2 w-5 h-5" /> Return to Homepage
          </Link>
        </Button>
        <div className="grid grid-cols-2 gap-4">
          <Button asChild variant="outline" size="lg" className="h-12 border-brand-gold text-brand-gold font-bold rounded-xl">
            <Link href="/products">
              Catalogue <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 border-[#25D366] text-[#25D366] font-bold rounded-xl hover:bg-[#25D366]/5">
            <a href={`https://wa.me/919495613121?text=${whatsappMessage}`} target="_blank">
              WhatsApp <MessageSquare className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function RFQSuccessPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1 bg-secondary/5 pt-32 px-4">
        <Suspense fallback={<div className="py-40 text-center font-bold text-brand-navy">Processing request...</div>}>
          <SuccessContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
