
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
  },
  {
    name: 'FDA Registration',
    description: 'US Market Export Compliance',
    issuer: 'US Food & Drug Administration',
    number: 'Reg. No. 3012XXXX',
    expiry: '2025-12-31',
    status: 'Active',
    verifyUrl: '#'
  },
  {
    name: 'OEKO-TEX Standard 100',
    description: 'Textile Safety & Ecology',
    issuer: 'Hohenstein Institute',
    number: '12.HIN.XXXXX',
    expiry: '2025-09-20',
    status: 'Active',
    verifyUrl: '#'
  },
  {
    name: 'BIS Hallmark',
    description: 'Bureau of Indian Standards',
    issuer: 'Govt. of India',
    number: 'CM/L-XXXXXX',
    expiry: '2026-11-10',
    status: 'Active',
    verifyUrl: '#'
  }
];

const complianceCerts = [
  { name: 'IEC', title: 'Importer Exporter Code', code: 'AANCA1234F' },
  { name: 'RCMC', title: 'FIEO Membership', code: 'FIEO/KL/2024/XX' },
  { name: 'GST', title: 'GST Registration', code: '32AAAAA0000A1Z5' },
  { name: 'MSME', title: 'Udyam Registration', code: 'UDYAM-KL-01-XXXX' }
];

export default function CertificationsPage() {
  const { firestore } = useFirebase();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRequestAudit = async (e: React.FormEvent<HTMLFormElement>) => {
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

    try {
      await addDoc(collection(firestore, 'audit_requests'), data);
      toast({
        title: 'Request Sent',
        description: "We've received your request for the full audit report. Our compliance officer will contact you shortly.",
      });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to send request. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-brand-gold-light/20 pt-24">
        {/* Header */}
        <section className="py-16 md:py-24 border-b bg-white">
          <div className="container px-4 text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="text-brand-gold border-brand-gold mb-4 px-4 py-1">Verified Compliance</Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-playfair text-brand-navy mb-6">Our Certifications & Compliance</h1>
            <p className="text-xl text-muted-foreground">Every certificate is third-party verified and available for download. We maintain the highest standards for global export excellence.</p>
          </div>
        </section>

        {/* Quality Certifications */}
        <section className="py-20 container px-4 mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center">
              <Award className="text-brand-gold w-6 h-6" />
            </div>
            <div>
              <h2 className="text-3xl font-bold font-playfair text-brand-navy">Quality Management Certifications</h2>
              <p className="text-muted-foreground">Adhering to international safety and quality benchmarks.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualityCerts.map((cert) => (
              <Card key={cert.name} className="border-accent/20 hover:border-brand-gold transition-all duration-300 group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant={cert.status === 'Active' ? 'default' : 'secondary'} className={cert.status === 'Active' ? 'bg-brand-green' : ''}>
                      {cert.status}
                    </Badge>
                    <ShieldCheck className="text-brand-gold w-6 h-6 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardTitle className="text-xl font-bold font-playfair">{cert.name}</CardTitle>
                  <CardDescription className="font-medium text-brand-navy/70">{cert.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Issuing Body</p>
                    <p className="text-sm font-semibold">{cert.issuer}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Cert No.</p>
                      <p className="text-xs font-mono">{cert.number}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Valid Until</p>
                      <p className="text-xs font-semibold">{cert.expiry}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="grid grid-cols-2 gap-2 border-t pt-4">
                  <Button variant="outline" size="sm" className="w-full text-xs" asChild>
                    <a href={cert.verifyUrl} target="_blank"><ExternalLink className="w-3 h-3 mr-2" /> Verify</a>
                  </Button>
                  <Button variant="secondary" size="sm" className="w-full text-xs">
                    <Download className="w-3 h-3 mr-2" /> Download
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Export Compliance */}
        <section className="py-20 bg-brand-navy text-white">
          <div className="container px-4 mx-auto">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 rounded-xl bg-brand-gold flex items-center justify-center">
                <ClipboardCheck className="text-brand-navy w-6 h-6" />
              </div>
              <div>
                <h2 className="text-3xl font-bold font-playfair">Export Compliance & Identifiers</h2>
                <p className="text-brand-gold-light/70">Our registered credentials for global trade operations.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {complianceCerts.map((cert) => (
                <div key={cert.name} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-brand-gold">{cert.name}</h3>
                    <CheckCircle2 className="w-5 h-5 text-brand-green" />
                  </div>
                  <p className="text-xs text-brand-gold-light/60 uppercase tracking-widest mb-1">{cert.title}</p>
                  <p className="text-sm font-mono font-bold tracking-wider">{cert.code}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Factory & Audits */}
        <section className="py-24 container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Factory className="text-brand-gold w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold font-playfair text-brand-navy">Factory & Quality Audits</h2>
                  <p className="text-muted-foreground">Rigorous monitoring of our production facilities.</p>
                </div>
              </div>

              <Card className="border-none shadow-xl bg-white">
                <CardHeader className="bg-brand-navy text-white rounded-t-xl">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg">Latest Audit Summary</CardTitle>
                    <Badge className="bg-brand-green">Passed</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid grid-cols-3 gap-8 text-center">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1 font-bold">Audit Date</p>
                      <p className="font-bold">Feb 12, 2024</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1 font-bold">Auditor</p>
                      <p className="font-bold">SGS India</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1 font-bold">Score</p>
                      <p className="text-brand-green font-bold text-xl">98/100</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <h3 className="text-xl font-bold font-playfair text-brand-navy">Quality Control Process</h3>
                <div className="relative space-y-8 pl-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-brand-gold/30">
                  {[
                    { title: 'Raw Material Testing', desc: 'Verified 100% Cotton & Medical-Grade Polymers' },
                    { title: 'Inline Production Audit', desc: 'Real-time monitoring at 50% production mark' },
                    { title: 'Post-Production Inspection', desc: 'Final QC Check based on AQL 1.5 standards' },
                    { title: 'Pre-Shipment Verification', desc: 'Third-party (SGS/Intertek) loading supervision' }
                  ].map((step, i) => (
                    <div key={i} className="relative">
                      <div className="absolute -left-8 top-1 w-6 h-6 rounded-full bg-white border-2 border-brand-gold flex items-center justify-center z-10">
                        <span className="text-[10px] font-bold text-brand-gold">{i+1}</span>
                      </div>
                      <h4 className="font-bold text-brand-navy">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Card className="sticky top-24 border-brand-gold/30 shadow-2xl">
              <CardHeader className="text-center bg-brand-gold-light/30">
                <FileText className="w-12 h-12 text-brand-gold mx-auto mb-4" />
                <CardTitle className="text-2xl font-playfair text-brand-navy">Request Audit Report</CardTitle>
                <CardDescription>Get access to our full technical factory audit and compliance dossier.</CardDescription>
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
                  <div className="space-y-2">
                    <Label htmlFor="country">Target Market / Country</Label>
                    <Input id="country" name="country" required placeholder="UAE, Germany, etc." />
                  </div>
                  <Button type="submit" className="w-full bg-brand-navy hover:bg-brand-navy/90 h-12 text-lg" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending Request...' : 'Request Full Report'} <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="bg-muted/30 text-center p-4">
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Confidentiality Assured • NDA Available Upon Request</p>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
