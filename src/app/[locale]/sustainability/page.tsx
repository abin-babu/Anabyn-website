'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Leaf, 
  Users, 
  ShieldCheck, 
  Globe, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  MapPin, 
  Clock,
  Zap
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const esgPillars = [
  {
    title: 'Environmental',
    icon: Leaf,
    color: 'text-green-600',
    bg: 'bg-green-50',
    points: [
      { label: 'Carbon Footprint', value: '-15% YoY' },
      { label: 'Renewable Energy', value: '40% Usage' },
      { label: 'Waste Reduction', value: 'Zero-to-Landfill' }
    ],
    desc: 'Minimizing our ecological footprint through efficient manufacturing and green logistics.'
  },
  {
    title: 'Social',
    icon: Users,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    points: [
      { label: 'Fair Wages', value: '100% Compliance' },
      { label: 'Safe Working', value: 'ISO 45001' },
      { label: 'Community', value: '5% Profit Reinvested' }
    ],
    desc: 'Empowering workers and supporting the local communities where our products are crafted.'
  },
  {
    title: 'Governance',
    icon: ShieldCheck,
    color: 'text-brand-gold',
    bg: 'bg-brand-gold-light/20',
    points: [
      { label: 'Ethical Sourcing', value: 'Vetted Suppliers' },
      { label: 'Transparency', value: 'Full Audit Trail' },
      { label: 'Compliance', value: 'Anti-Bribery Policy' }
    ],
    desc: 'Upholding the highest standards of integrity and accountability across our operations.'
  }
];

const certifications = [
  { name: 'OEKO-TEX® Standard 100', status: 'Verified', desc: 'Tested for harmful substances.' },
  { name: 'GOTS Certified Cotton', status: '2026 Target', desc: 'Global Organic Textile Standard.' },
  { name: 'SA8000 Social Accountability', status: 'In Progress', desc: 'Standard for decent workplaces.' },
  { name: 'ISO 14001 Environment', status: 'Active', desc: 'Environmental management system.' }
];

const targets = [
  { label: 'Reduce packaging plastic by 50%', achieved: 30, color: 'bg-green-600' },
  { label: '100% cotton from certified farms', achieved: 45, color: 'bg-brand-gold' },
  { label: 'Zero single-use plastic in shipments', achieved: 20, color: 'bg-blue-600' },
  { label: 'Carbon neutral logistics by 2028', achieved: 10, color: 'bg-brand-navy' }
];

export default function SustainabilityPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAuditRequest = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast({
        title: "Audit Request Sent",
        description: "Our compliance team will review your request and contact you within 48 hours.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-32 pb-20 bg-white">
        
        {/* Hero Section */}
        <section className="bg-brand-navy text-white py-24 px-4 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Globe className="w-full h-full -rotate-12 translate-x-1/2 scale-150" />
          </div>
          <div className="container mx-auto relative z-10 text-center max-w-4xl">
            <Badge variant="outline" className="text-brand-gold border-brand-gold mb-6 px-4 py-1 uppercase tracking-widest">ESG Commitment</Badge>
            <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-8">Responsible Sourcing.<br/><span className="text-brand-gold">Verified Impact.</span></h1>
            <p className="text-xl text-brand-gold-light/80 leading-relaxed max-w-2xl mx-auto">
              We are committed to building a transparent and ethical supply chain that respects the environment and empowers the communities we serve.
            </p>
          </div>
        </section>

        {/* ESG Pillars */}
        <section className="py-24 container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {esgPillars.map((pillar) => (
              <Card key={pillar.title} className="border-none shadow-xl hover:-translate-y-2 transition-all duration-300 service-card">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl ${pillar.bg} flex items-center justify-center mb-6`}>
                    <pillar.icon className={`w-8 h-8 ${pillar.color}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold font-playfair text-brand-navy">{pillar.title}</CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed pt-2">
                    {pillar.desc}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="h-px bg-gray-100 w-full mb-4" />
                  {pillar.points.map((point) => (
                    <div key={point.label} className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-500">{point.label}</span>
                      <Badge variant="secondary" className="bg-brand-navy/5 text-brand-navy font-bold">{point.value}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 2026 Targets */}
        <section className="py-24 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold font-playfair text-brand-navy mb-4">2026 Sustainability Roadmap</h2>
              <p className="text-muted-foreground">Quantifiable goals driving our transition to a circular and low-carbon business model.</p>
            </div>
            
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
              <div className="space-y-10">
                {targets.map((target) => (
                  <div key={target.label} className="space-y-3">
                    <div className="flex justify-between items-end">
                      <Label className="text-sm font-bold text-brand-navy">{target.label}</Label>
                      <span className="text-xs font-bold text-brand-gold uppercase tracking-widest">{target.achieved}% Achieved</span>
                    </div>
                    <Progress value={target.achieved} className="h-2" />
                  </div>
                ))}
              </div>
              
              <div className="bg-brand-navy rounded-[2.5rem] p-10 text-white relative overflow-hidden flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full translate-x-16 -translate-y-16" />
                <h3 className="text-2xl font-bold font-playfair mb-6 flex items-center gap-3">
                  <Zap className="text-brand-gold" /> Our Green Philosophy
                </h3>
                <p className="text-white/70 leading-relaxed mb-8">
                  We don't just export products; we export the standards of the future. By aligning with the UN Sustainable Development Goals (SDGs), Anabyn ensures that every bulk order contributes to a cleaner planet.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-gold uppercase tracking-widest">
                    <CheckCircle2 size={14} /> Circularity
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-gold uppercase tracking-widest">
                    <CheckCircle2 size={14} /> Transparency
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Grid */}
        <section className="py-24 container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold font-playfair text-brand-navy">Global Certifications & Standards</h2>
            <Button variant="outline" className="hidden md:flex border-brand-gold text-brand-gold">View Documentation</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <Card key={cert.name} className="border-accent/20 group hover:border-brand-gold transition-colors">
                <CardHeader className="pb-4">
                  <Badge className={cert.status === 'Verified' || cert.status === 'Active' ? 'bg-success' : 'bg-gray-400'}>
                    {cert.status}
                  </Badge>
                  <CardTitle className="text-lg font-bold pt-4">{cert.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{cert.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Supply Chain Transparency */}
        <section className="py-24 bg-brand-navy text-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <Badge className="bg-brand-gold text-brand-navy mb-4">Transparency First</Badge>
                <h2 className="text-4xl font-bold font-playfair">Global Supply Chain Transparency</h2>
                <p className="text-white/70 text-lg leading-relaxed">
                  We maintain direct oversight of 15+ manufacturing facilities across India. Every unit is audited for technical capacity and ethical compliance.
                </p>
                
                <div className="space-y-6">
                  <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-12 h-12 rounded-xl bg-brand-gold flex items-center justify-center shrink-0">
                      <MapPin className="text-brand-navy" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-gold mb-1">Supplier Locations</h4>
                      <p className="text-sm text-white/60">Primarily located in Kerala, Tamil Nadu, and Gujarat hubs.</p>
                    </div>
                  </div>
                  <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-12 h-12 rounded-xl bg-brand-gold flex items-center justify-center shrink-0">
                      <Clock className="text-brand-navy" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-gold mb-1">Audit Cycle</h4>
                      <p className="text-sm text-white/60">Bi-annual on-site inspections conducted by third-party auditors.</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-white p-8 rounded-[2.5rem] shadow-2xl border-none">
                <CardHeader className="p-0 pb-6 text-center">
                  <CardTitle className="text-2xl font-playfair text-brand-navy">Request Supplier Audit</CardTitle>
                  <CardDescription>Enter your work details to access our full vendor compliance dossier.</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <form onSubmit={handleAuditRequest} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-gray-400">Full Name</Label>
                        <Input id="name" required placeholder="John Doe" className="bg-secondary/10 border-none h-12" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-xs font-bold uppercase tracking-widest text-gray-400">Company</Label>
                        <Input id="company" required placeholder="Hospitality Group" className="bg-secondary/10 border-none h-12" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-gray-400">Work Email</Label>
                      <Input id="email" type="email" required placeholder="procurement@company.com" className="bg-secondary/10 border-none h-12" />
                    </div>
                    <Button type="submit" className="w-full h-14 bg-brand-navy text-white font-bold rounded-xl shadow-xl" disabled={isSubmitting}>
                      {isSubmitting ? 'Requesting...' : 'Request Full Report'} <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
                <CardFooter className="p-0 pt-6 justify-center">
                  <p className="text-[10px] uppercase font-bold text-gray-400 tracking-widest flex items-center gap-2">
                    <ShieldCheck size={12} className="text-success" /> Confidentiality Assured
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Download Reports */}
        <section className="py-24 container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold font-playfair text-brand-navy mb-4">Governance & Reporting</h2>
            <p className="text-muted-foreground">Access our formal policies and annual sustainability disclosures.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Sustainability Policy 2025', size: '1.2 MB', type: 'PDF' },
              { title: 'Supplier Code of Conduct', size: '0.8 MB', type: 'PDF' },
              { title: 'Annual ESG Summary 2024', size: '2.4 MB', type: 'PDF' }
            ].map((report) => (
              <div key={report.title} className="p-8 rounded-3xl bg-white border-2 border-dashed border-accent/30 flex flex-col items-center text-center group hover:border-brand-gold transition-all">
                <FileText className="w-12 h-12 text-brand-gold mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-lg font-bold text-brand-navy mb-2">{report.title}</h4>
                <p className="text-xs text-muted-foreground font-medium mb-6 uppercase tracking-widest">{report.type} • {report.size}</p>
                <Button variant="secondary" className="w-full rounded-xl">
                  <Download className="mr-2 w-4 h-4" /> Download Report
                </Button>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}