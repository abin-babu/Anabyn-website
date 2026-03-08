
'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function TermsOfServicePage() {
    const [lastUpdated, setLastUpdated] = useState<string>('');

    useEffect(() => {
        setLastUpdated(new Date().toLocaleDateString());
    }, []);

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-12 md:py-20 bg-secondary/50 pt-32">
                <div className="container max-w-4xl mx-auto">
                    <Card className="border-accent/20">
                        <CardHeader>
                            <CardTitle className="text-2xl font-headline text-brand-navy">Terms of Service</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                           <p className="text-muted-foreground"><em>Last updated: {lastUpdated || 'Loading...'}</em></p>
                           <p>By accessing the Anabyn Global Ventures LLP website and portal, you agree to comply with and be bound by the following terms and conditions of use.</p>
                           <h2 className="font-bold text-lg pt-4 text-brand-navy">1. Agreement to Terms</h2>
                           <p>By using our services, including the Buyer Portal and RFQ system, you agree to be bound by these Terms. If you do not agree, please do not use our services.</p>
                           <h2 className="font-bold text-lg pt-4 text-brand-navy">2. Export Regulations</h2>
                           <p>All transactions are subject to Indian export laws and the import regulations of the destination country. Compliance documentation provided by Anabyn must be verified by the buyer before customs clearance.</p>
                           <h2 className="font-bold text-lg pt-4 text-brand-navy">3. Account Security</h2>
                           <p>Buyers are responsible for maintaining the confidentiality of their portal credentials. Any activity occurring under a buyer's account is their sole responsibility.</p>
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    );
}
