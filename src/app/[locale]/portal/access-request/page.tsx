'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useFirebase } from '@/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { ShieldCheck, ArrowLeft, Send, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function AccessRequestPage() {
  const { firestore } = useFirebase();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!firestore) return;
    
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      company: formData.get('company') as string,
      email: formData.get('email') as string,
      country: formData.get('country') as string,
      needs: formData.get('needs') as string,
      status: 'Pending',
      createdAt: serverTimestamp(),
    };

    try {
      await addDoc(collection(firestore, 'access_requests'), data);
      setIsSuccess(true);
      toast({ title: 'Request Sent', description: 'Our compliance officer will verify your details and issue credentials.' });
    } catch (error: any) {
      toast({ variant: 'destructive', title: 'Error', description: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center py-24 bg-secondary/30 px-4 pt-32">
        <div className="w-full max-w-xl space-y-8">
          <Link href="/portal/login" className="inline-flex items-center text-sm font-bold text-brand-navy hover:text-brand-gold transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Login
          </Link>

          <Card className="border-brand-gold/20 shadow-2xl overflow-hidden bg-white">
            <CardHeader className="bg-brand-navy text-white p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-brand-gold border border-white/10">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <CardTitle className="text-2xl font-playfair">Request Portal Access</CardTitle>
                  <CardDescription className="text-white/60">New partner verification & authentication setup.</CardDescription>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-8">
              {isSuccess ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="text-success w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-brand-navy">Request Received</h3>
                    <p className="text-muted-foreground mt-2">Thank you for your interest. Our team will review your company profile and respond via email within 48 business hours with your secure login credentials.</p>
                  </div>
                  <Button asChild className="bg-brand-navy text-white rounded-xl">
                    <Link href="/">Return to Homepage</Link>
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" name="name" required placeholder="John Doe" className="h-12 border-brand-gold/20" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" name="company" required placeholder="Global Hotel Group" className="h-12 border-brand-gold/20" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Work Email</Label>
                      <Input id="email" name="email" type="email" required placeholder="procurement@company.com" className="h-12 border-brand-gold/20" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Operating Country</Label>
                      <Input id="country" name="country" required placeholder="United Kingdom" className="h-12 border-brand-gold/20" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="needs">Sourcing Category Interests</Label>
                    <Textarea id="needs" name="needs" placeholder="Bed linen, Medical supplies, etc." className="min-h-[100px] border-brand-gold/20" />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full h-14 bg-brand-gold text-brand-navy font-bold text-lg rounded-xl shadow-xl">
                    {isSubmitting ? 'Sending Request...' : 'Submit Verification Request'} <Send className="ml-2 w-4 h-4" />
                  </Button>
                  <p className="text-[10px] text-center text-muted-foreground uppercase font-black tracking-widest">Verification process required for secure data isolation.</p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
