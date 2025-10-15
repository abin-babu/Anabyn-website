import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { InquiryForm } from '@/components/inquiry-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function InquiryPage() {
    return (
        <div className="flex min-h-screen flex-col bg-secondary/50">
            <Header />
            <main className="flex-1 py-12 md:py-20">
                <div className="container max-w-3xl mx-auto">
                    <Card>
                        <CardHeader className="text-center">
                            <CardTitle className="text-3xl md:text-4xl font-bold font-headline">Contact Us</CardTitle>
                            <CardDescription className="mt-2">
                                We'd love to hear from you. Please fill out the form below to send us an inquiry.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <InquiryForm />
                        </CardContent>
                    </Card>
                </div>
            </main>
            <Footer />
        </div>
    );
}
