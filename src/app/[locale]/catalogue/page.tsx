'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, CheckCircle2, ShieldCheck, Truck, Package, ArrowRight, Loader2 } from 'lucide-react';
import { countries } from '@/lib/countries';
import { handleCatalogueLead } from '@/app/actions/inquiry';
import { useToast } from '@/hooks/use-toast';

export default function CataloguePage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [interests, setInterests] = useState<string[]>([]);

  const toggleInterest = (val: string) => {
    setInterests(prev => prev.includes(val) ? prev.filter(i => i !== val) : [...prev, val]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string,
      country: formData.get('country') as string,
      orderVolume: formData.get('orderVolume') as string,
      productInterest: interests,
    };

    const result = await handleCatalogueLead(data);
    
    if (result.success) {
      setIsSuccess(true);
      toast({ title: 'Lead Captured', description: 'Your catalogue is now available for download.' });
    } else {
      toast({ variant: 'destructive', title: 'Error', description: result.error });
    }
    setIsSubmitting(false);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* SECTION 1: Hero */}
        <section className="relative pt-40 pb-20 overflow-hidden bg-brand-navy text-white">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-navy/80 to-brand-navy z-10" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          </div>
          <div className="container relative z-20 px-4 mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <Badge variant="outline" className="text-brand-gold border-brand-gold px-4 py-1 uppercase tracking-widest font-black">
                  Resource Center
                </Badge>
                <h1 className="text-4xl md:text-7xl font-playfair font-bold leading-tight">
                  Download Our <br /><span className="text-brand-gold">Product Catalogue</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                  Complete specifications for our full range of terry towels and bed linen — including GSM options, certifications, and export documentation guides.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {[
                    { icon: FileText, text: 'Full Technical Specs' },
                    { icon: ShieldCheck, text: 'Certifications Guide' },
                    { icon: Package, text: 'Packing Details' },
                    { icon: Truck, text: 'Shipping Routes' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-gray-400 font-bold">
                      <item.icon size={18} className="text-brand-gold" /> {item.text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Catalogue Preview Card */}
              <div className="relative">
                <div className="aspect-[3/4] w-full max-w-sm mx-auto bg-brand-navy rounded-3xl shadow-2xl border-4 border-brand-gold/20 flex flex-col items-center justify-center p-12 text-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
                  <div className="relative z-10 space-y-6">
                    <div className="w-20 h-20 rounded-2xl bg-brand-gold flex items-center justify-center mb-8 mx-auto shadow-xl">
                      <FileText className="text-brand-navy w-10 h-10" />
                    </div>
                    <h2 className="text-white text-3xl font-playfair font-bold tracking-tight uppercase">ANABYN</h2>
                    <div className="h-px w-12 bg-brand-gold mx-auto" />
                    <p className="text-brand-gold font-black uppercase tracking-[0.3em] text-xs">Export Catalogue 2026</p>
                    <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest pt-8">Premium Indian Textiles</p>
                  </div>
                </div>
                {/* Decorative floating elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-gold/20 rounded-full blur-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Gated Form */}
        <section className="py-24 bg-secondary/10">
          <div className="container px-4 mx-auto max-w-4xl">
            <Card className="border-brand-gold/20 shadow-2xl rounded-[3rem] overflow-hidden bg-white">
              <CardContent className="p-8 md:p-16">
                {isSuccess ? (
                  <div className="text-center space-y-8 py-12 animate-in fade-in zoom-in duration-500">
                    <div className="w-24 h-24 rounded-full bg-success/10 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="text-success w-12 h-12" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-3xl font-playfair font-bold text-brand-navy">Your Catalogue is Ready</h3>
                      <p className="text-muted-foreground text-lg max-w-md mx-auto">
                        Thank you for your interest in Anabyn Global Ventures. You can download the PDF directly below.
                      </p>
                    </div>
                    <div className="pt-8">
                      <Button asChild size="lg" className="h-16 px-12 rounded-2xl bg-brand-navy text-white font-black text-lg hover:scale-105 transition-transform border-none">
                        <a href="/anabyn-catalogue-2026.pdf" download>
                          <Download className="mr-3 w-6 h-6 text-brand-gold" /> Download PDF Now
                        </a>
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground pt-4 italic">A copy has also been sent to your business email.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="space-y-4 text-center">
                      <h3 className="text-3xl font-playfair font-bold text-brand-navy">Verify Trade Access</h3>
                      <p className="text-muted-foreground">Please provide your business details to access full technical specifications.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <Label htmlFor="name">Full Name*</Label>
                        <Input id="name" name="name" required placeholder="John Doe" className="h-12 border-brand-gold/20" />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="email">Business Email*</Label>
                        <Input id="email" name="email" type="email" required placeholder="procurement@company.com" className="h-12 border-brand-gold/20" />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="company">Company Name*</Label>
                        <Input id="company" name="company" required placeholder="Global Retail Group" className="h-12 border-brand-gold/20" />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="country">Country*</Label>
                        <Select name="country" required>
                          <SelectTrigger className="h-12 border-brand-gold/20">
                            <SelectValue placeholder="Select Country" />
                          </SelectTrigger>
                          <SelectContent className="max-h-64">
                            {countries.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <Label className="text-sm font-bold">Product Interests (Select all that apply)</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {['Terry Towels', 'Bed Linen', 'Hotel Collections', 'OEM/Private Label'].map(item => (
                          <div key={item} className="flex items-center space-x-3">
                            <Checkbox id={item} onCheckedChange={() => toggleInterest(item)} />
                            <label htmlFor={item} className="text-sm font-medium leading-none cursor-pointer">{item}</label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="orderVolume">Estimated Annual Order Volume</Label>
                      <Select name="orderVolume">
                        <SelectTrigger className="h-12 border-brand-gold/20">
                          <SelectValue placeholder="Select volume range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-10k">Under $10,000</SelectItem>
                          <SelectItem value="10k-50k">$10,000 – $50,000</SelectItem>
                          <SelectItem value="50k-200k">$50,000 – $200,000</SelectItem>
                          <SelectItem value="over-200k">$200,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button type="submit" disabled={isSubmitting} className="w-full h-16 bg-brand-gold text-brand-navy font-black text-lg rounded-2xl shadow-xl hover:scale-[1.02] transition-transform">
                      {isSubmitting ? (
                        <><Loader2 className="mr-2 animate-spin" /> Verifying...</>
                      ) : (
                        <><Download className="mr-2 w-5 h-5" /> Download Catalogue Now</>
                      )}
                    </Button>
                    <p className="text-[10px] text-center text-muted-foreground uppercase font-black tracking-widest">Confidential technical data. Intended for trade buyers only.</p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
