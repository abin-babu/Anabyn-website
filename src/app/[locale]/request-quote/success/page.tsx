'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, MessageSquare, ArrowRight, Mail, Clock } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const rfqId = searchParams.get('id') || 'AGV-2026-XXXX';

  const whatsappMessage = encodeURIComponent(`Hi Anabyn team, I have submitted an RFQ with ID: ${rfqId}. I'd like to discuss the next steps.`);

  return (
    <div className="max-w-2xl mx-auto py-20 text-center">
      <div className="mb-8 flex justify-center">
        <div className="w-24 h-24 rounded-full bg-success/10 flex items-center justify-center animate-in zoom-in duration-500">
          <CheckCircle2 className="w-12 h-12 text-success" />
        </div>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold font-playfair text-brand-navy mb-4">Request Received!</h1>
      <p className="text-xl text-muted-foreground mb-12">
        Thank you for choosing Anabyn Global Ventures. Your requirements have been sent to our sourcing desk.
      </p>

      <Card className="border-brand-gold/30 shadow-xl mb-12 bg-white">
        <CardHeader className="bg-brand-navy text-white rounded-t-xl py-6">
          <CardTitle className="text-sm uppercase tracking-[0.3em] font-bold">RFQ Reference ID</CardTitle>
        </CardHeader>
        <CardContent className="p-10">
          <p className="text-5xl font-mono font-bold text-brand-gold tracking-wider">{rfqId}</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/10">
              <Mail className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
              <div>
                <p className="font-bold text-brand-navy text-sm">Check Your Email</p>
                <p className="text-xs text-muted-foreground">We've sent a confirmation summary to your work email.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/10">
              <Clock className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
              <div>
                <p className="font-bold text-brand-navy text-sm">Response Time</p>
                <p className="text-xs text-muted-foreground">Our account manager will contact you within 24 business hours.</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg" className="h-14 px-8 bg-[#25D366] hover:bg-[#20bd5c] text-white font-bold rounded-xl">
          <a href={`https://wa.me/919495613121?text=${whatsappMessage}`} target="_blank">
            <MessageSquare className="mr-2 w-5 h-5" /> Expedite on WhatsApp
          </a>
        </Button>
        <Button asChild variant="outline" size="lg" className="h-14 px-8 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white rounded-xl">
          <Link href="/products">
            Browse More Products <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default function RFQSuccessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-secondary/5 pt-32 px-4">
        <Suspense fallback={<div>Loading...</div>}>
          <SuccessContent />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
