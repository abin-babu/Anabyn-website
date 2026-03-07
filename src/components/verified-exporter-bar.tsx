
'use client';

import { useState } from 'react';
import { 
  FileCheck, ShieldCheck, CheckCircle, 
  Award, Star, BadgeCheck, ExternalLink 
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Dialog, DialogContent, 
  DialogHeader, DialogTitle 
} from '@/components/ui/dialog';

const badges = [
  {
    title: 'IEC Code',
    code: 'AANCA1234F',
    desc: 'Indian Exporter Certificate',
    icon: FileCheck,
  },
  {
    title: 'GSTIN',
    code: 'Registered',
    desc: 'Goods & Services Tax',
    icon: ShieldCheck,
  },
  {
    title: 'MSME',
    code: 'Registered',
    desc: 'Micro, Small & Medium Enterprise',
    icon: CheckCircle,
  },
  {
    title: 'ISO 9001:2015',
    code: 'Certified',
    desc: 'Quality Management System',
    icon: Award,
  },
  {
    title: 'CE Marked',
    code: 'Compliant',
    desc: 'European Conformity',
    icon: BadgeCheck,
  },
  {
    title: 'FDA Registered',
    code: 'Facility',
    desc: 'US Export Compliance',
    icon: ShieldCheck,
  },
  {
    title: '4.9 ★ Google',
    code: 'Verified',
    desc: 'Customer Trust Rating',
    icon: Star,
  }
];

export function VerifiedExporterBar() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section className="py-12 bg-white border-y border-brand-gold/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <Badge variant="outline" className="text-success border-success bg-success/5 mb-2">
            <ShieldCheck className="w-3 h-3 mr-1" /> Trusted & Verified Exporter
          </Badge>
          <h2 className="text-2xl font-bold font-playfair text-brand-navy">Export Compliance & Trust Badges</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
          {badges.map((badge) => (
            <Card 
              key={badge.title} 
              className="relative p-4 border-accent/30 hover:border-accent transition-all group flex flex-col items-center text-center overflow-hidden"
            >
              <div className="absolute top-2 right-2">
                <div className="bg-success text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-tighter">
                  Verified
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <badge.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xs font-bold text-brand-navy uppercase tracking-wider">{badge.title}</h3>
              <p className="text-[10px] text-muted-foreground mt-1 mb-3 leading-tight">{badge.desc}</p>
              <button 
                onClick={() => setSelectedCert(badge.title)}
                className="text-[9px] font-bold text-accent hover:underline flex items-center gap-1"
              >
                View Certificate <ExternalLink className="w-2 h-2" />
              </button>
            </Card>
          ))}
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm font-medium text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              Est. 2020 · Kerala, India
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              IEC Code: AANCA1234F
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              CIN: AAA-1234-LLP
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              Export to 20+ Countries
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
              500+ Orders Fulfilled
            </div>
          </div>
        </div>
      </div>

      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Verification: {selectedCert}</DialogTitle>
          </DialogHeader>
          <div className="aspect-[4/3] bg-muted flex items-center justify-center rounded-lg border-2 border-dashed">
            <div className="text-center p-8">
              <FileCheck className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="font-bold">Digital Certificate Placeholder</p>
              <p className="text-sm text-muted-foreground mt-2">
                This document is verified and stored securely in our compliance vault.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
