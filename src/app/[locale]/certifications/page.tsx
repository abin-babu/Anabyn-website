'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  ShieldCheck, 
  Download, 
  ExternalLink, 
  Award, 
  ClipboardCheck, 
  CheckCircle2, 
  FileText, 
  Factory,
  ArrowRight
} from 'lucide-react';
import { useState } from 'react';
import { useFirebase } from '@/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

const qualityCerts = [
  {
    name: 'ISO 9001:2015',
    description: 'Quality Management Systems',
    issuer: 'URS Certification',
    number: 'AGV/ISO/9001/2024',
    expiry: '2027-12-31',
    status: 'Active',
    verifyUrl: '#'
  },
  {
    name: 'ISO 13485:2016',
    description: 'Medical Devices Quality',
    issuer: 'Intertek',
    number: 'AGV/ISO/13485/MD',
    expiry: '2026-06-30',
    status: 'Active',
    verifyUrl: '#'
  },
  {
    name: 'CE Marking',
    description: 'Medical Products Compliance',
    issuer: 'TÜV SÜD',
    number: 'CE-EU-2024-XXXX',
    expiry: '2028-01-15',
    status: 'Active',
    verifyUrl: '#'
  }
];

export default function CertificationsPage() {
  const { firestore } = useFirebase();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRequestAudit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!firestore) return;
    
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      company: formData.get('company') as string,
      email: formData.get('email') as string,
      country: formData.get('country') as string,
      timestamp: serverTimestamp(),
    };

    const colRef = collection(firestore, 'audit_requests');
    addDoc(colRef, data)
      .then(() => {
        toast({
          title: 'Request Sent',
          description: "We've received your request for the full audit report.",
        });
        (e.target as HTMLFormElement).reset();
      })
      .catch(async (error) => {
        errorEmitter.emit('permission-error', new FirestorePermissionError({
          path: colRef.path,
          operation: 'create',
          requestResourceData: data
        }));
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-brand-gold-light/20 pt-32">
        <section className="py-16 md:py-24 border-b bg-white">
          <div className="container px-4 text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="text-brand-gold border-brand-gold mb-4 px-4 py-1">Verified Compliance</Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-playfair text-brand-navy mb-6">Our Certifications</h1>
            <p className="text-xl text-muted-foreground">Every certificate is third-party verified and available for download.</p>
          </div>
        </section>

        <section className="py-20 container px-4 mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualityCerts.map((cert) => (
              <Card key={cert.name} className="border-accent/20 hover:border-brand-gold transition-all duration-300 group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant={cert.status === 'Active' ? 'default' : 'secondary'}>
                      {cert.status}
                    </Badge>
                    <ShieldCheck className="text-brand-gold w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-bold font-playfair">{cert.name}</CardTitle>
                  <CardDescription>{cert.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm font-semibold">{cert.issuer}</p>
                </CardContent>
                <CardFooter className="grid grid-cols-2 gap-2 border-t pt-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={cert.verifyUrl} target="_blank"><ExternalLink className="w-3 h-3 mr-2" /> Verify</a>
                  </Button>
                  <Button variant="secondary" size="sm">
                    <Download className="w-3 h-3 mr-2" /> Download
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-24 container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Factory className="text-brand-gold w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold font-playfair text-brand-navy">Factory & Quality Audits</h2>
              </div>
            </div>

            <Card className="sticky top-24 border-brand-gold/30 shadow-2xl">
              <CardHeader className="text-center bg-brand-gold-light/30">
                <FileText className="w-12 h-12 text-brand-gold mx-auto mb-4" />
                <CardTitle className="text-2xl font-playfair text-brand-navy">Request Audit Report</CardTitle>
              </CardHeader>
              <CardContent className="pt-8">
                <form onSubmit={handleRequestAudit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" name="name" required placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" name="company" required placeholder="Global Hotel Group" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email</Label>
                    <Input id="email" name="email" type="email" required placeholder="procurement@company.com" />
                  </div>
                  <Button type="submit" className="w-full bg-brand-navy hover:bg-brand-navy/90 h-12 text-lg" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending Request...' : 'Request Full Report'} <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
