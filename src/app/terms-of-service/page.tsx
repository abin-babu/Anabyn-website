import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function TermsOfServicePage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-12 md:py-20 bg-secondary/50">
                <div className="container max-w-4xl mx-auto">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl font-headline">Terms of Service</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                           <p><em>Last updated: {new Date().toLocaleDateString()}</em></p>
                           <p>This is a placeholder for your Terms of Service. This is a legal agreement between you and your users. It's important to have a comprehensive and legally sound document.</p>
                           <h2 className="font-bold text-lg pt-4">1. Agreement to Terms</h2>
                           <p>By using our services, you agree to be bound by these Terms. If you don’t agree to these Terms, do not use the services.</p>
                           <h2 className="font-bold text-lg pt-4">2. Changes to Terms or Services</h2>
                           <p>We may modify the Terms at any time, in our sole discretion. If we do so, we’ll let you know either by posting the modified Terms on the Site or through other communications.</p>
                           <h2 className="font-bold text-lg pt-4">3. Who May Use the Services</h2>
                           <p>You may use the Services only if you are 18 years or older and are not barred from using the Services under applicable law.</p>
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    );
}
