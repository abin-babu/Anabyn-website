
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { RFQForm } from '@/components/rfq/rfq-form';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, Clock, Globe } from 'lucide-react';
import { Suspense } from 'react';

export default function RequestQuotePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-secondary/10 pt-24 pb-20">
        <section className="py-16 md:py-20 container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <Badge variant="outline" className="text-brand-gold border-brand-gold px-4 py-1">Direct Export Pricing</Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-playfair text-brand-navy">Request for Quote</h1>
            <p className="text-lg text-muted-foreground">
              Provide your technical requirements below. Our global sourcing experts will prepare a comprehensive proposal including logistics and compliance documentation.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm font-bold text-brand-navy">
                <Clock className="w-4 h-4 text-brand-gold" /> 24h Response Time
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-brand-navy">
                <ShieldCheck className="w-4 h-4 text-brand-gold" /> Verified Quality
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-brand-navy">
                <Globe className="w-4 h-4 text-brand-gold" /> Worldwide Logistics
              </div>
            </div>
          </div>

          <Suspense fallback={<div className="flex justify-center py-20"><Clock className="animate-spin h-10 w-10 text-brand-gold" /></div>}>
            <RFQForm />
          </Suspense>
        </section>
      </main>
      <Footer />
    </div>
  );
}
