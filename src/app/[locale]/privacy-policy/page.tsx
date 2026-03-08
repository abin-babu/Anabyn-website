
'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function PrivacyPolicyPage() {
    const [lastUpdated, setLastUpdated] = useState<string>('');

    useEffect(() => {
        // Run on client after hydration to avoid mismatch
        setLastUpdated(new Date().toLocaleDateString());
    }, []);

    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-12 md:py-20 bg-secondary/50 pt-32">
                <div className="container max-w-4xl mx-auto">
                    <Card className="border-accent/20">
                        <CardHeader>
                            <CardTitle className="text-2xl font-headline text-brand-navy">Privacy Policy</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                           <p className="text-muted-foreground"><em>Last updated: {lastUpdated || 'Loading...'}</em></p>
                           <p>Anabyn Global Ventures LLP is committed to protecting your privacy. This policy details how we collect, use, and protect user data when you visit our website or use our buyer portal.</p>
                           <h2 className="font-bold text-lg pt-4 text-brand-navy">1. Information We Collect</h2>
                           <p>We collect information you provide directly to us, such as when you request a quote, create a portal account, or contact our export desk.</p>
                           <h2 className="font-bold text-lg pt-4 text-brand-navy">2. How We Use Your Information</h2>
                           <p>We use the information we collect to facilitate international trade transactions, provide order tracking, and improve our sourcing services.</p>
                           <h2 className="font-bold text-lg pt-4 text-brand-navy">3. Sharing of Information</h2>
                           <p>We do not share your personal information with third parties without your consent, except with verified manufacturing partners and logistics carriers necessary to fulfill your orders.</p>
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    );
}
