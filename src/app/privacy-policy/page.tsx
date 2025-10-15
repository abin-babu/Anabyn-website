import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function PrivacyPolicyPage() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 py-12 md:py-20 bg-secondary/50">
                <div className="container max-w-4xl mx-auto">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl font-headline">Privacy Policy</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                           <p><em>Last updated: {new Date().toLocaleDateString()}</em></p>
                           <p>This is a placeholder for your Privacy Policy. In a real application, you would detail how you collect, use, and protect user data.</p>
                           <h2 className="font-bold text-lg pt-4">1. Information We Collect</h2>
                           <p>We collect information you provide directly to us, such as when you create an account, fill out a form, or communicate with us.</p>
                           <h2 className="font-bold text-lg pt-4">2. How We Use Your Information</h2>
                           <p>We use the information we collect to provide, maintain, and improve our services.</p>
                           <h2 className="font-bold text-lg pt-4">3. Sharing of Information</h2>
                           <p>We do not share your personal information with third parties without your consent, except in specific circumstances described in this policy.</p>
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    );
}
