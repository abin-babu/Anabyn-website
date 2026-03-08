'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  Truck, 
  Ship, 
  Plane, 
  Globe, 
  Clock, 
  Box, 
  CreditCard, 
  Search,
  ArrowRight,
  Info
} from 'lucide-react';
import { useState, useMemo } from 'react';
import { useCollection, useMemoFirebase, useFirestore } from '@/firebase';
import { collection } from 'firebase/firestore';

const incoterms = [
  {
    code: 'EXW',
    name: 'Ex Works',
    desc: 'You arrange all shipping from our factory in India.',
    recommended: false
  },
  {
    code: 'FOB',
    name: 'Free On Board',
    desc: 'We deliver to the port (Cochin/Chennai), you handle the international sea freight.',
    recommended: false
  },
  {
    code: 'CIF',
    name: 'Cost, Insurance & Freight',
    desc: 'We cover the shipping and insurance to your destination port.',
    recommended: false
  },
  {
    code: 'DDP',
    name: 'Delivered Duty Paid',
    desc: 'We handle everything from factory to your warehouse door, including customs and duties.',
    recommended: true
  }
];

const initialRoutes = [
  { region: 'Middle East (UAE, Qatar)', port: 'Cochin (INCOCHIN)', transitTime: '5–8 days', mode: 'Sea / Air' },
  { region: 'Europe (UK, Germany, France)', port: 'Cochin / Chennai', transitTime: '18–25 days', mode: 'Sea FCL/LCL' },
  { region: 'East Africa (Kenya, Tanzania)', port: 'Cochin', transitTime: '10–15 days', mode: 'Sea' },
  { region: 'North America (USA, Canada)', port: 'Mumbai / Chennai', transitTime: '25–35 days', mode: 'Sea FCL' },
  { region: 'Southeast Asia', port: 'Chennai', transitTime: '8–12 days', mode: 'Sea' }
];

const initialHSCodes = [
  { product: 'Hotel Bed Sheets', code: '6302.21 / 6302.31' },
  { product: 'Bath Towels', code: '6302.60' },
  { product: 'Uniforms / Workwear', code: '6211.32' },
  { product: 'Medical Syringes', code: '9018.31' },
  { product: 'Surgical Gloves', code: '4015.11' },
  { product: 'Hospital Beds', code: '9402.90' }
];

const initialMOQ = [
  { product: 'Bed Linen Sets', moq: '100 Sets', leadTime: '3–4 Weeks' },
  { product: 'Bath Towels', moq: '500 Pieces', leadTime: '2–3 Weeks' },
  { product: 'Medical Syringes', moq: '10,000 Units', leadTime: '4 Weeks' },
  { product: 'Surgical Gloves', moq: '5,000 Pairs', leadTime: '3 Weeks' },
  { product: 'Hospital Furniture', moq: '5 Units', leadTime: '6 Weeks' }
];

export default function HowWeExportPage() {
  const db = useFirestore();
  const [hsSearch, setHSSearch] = useState('');

  const routesQuery = useMemoFirebase(() => db ? collection(db, 'shipping_routes') : null, [db]);
  const hsQuery = useMemoFirebase(() => db ? collection(db, 'hs_codes') : null, [db]);
  const moqQuery = useMemoFirebase(() => db ? collection(db, 'moq_data') : null, [db]);

  const { data: dbRoutes } = useCollection(routesQuery);
  const { data: dbHSCodes } = useCollection(hsQuery);
  const { data: dbMOQ } = useCollection(moqQuery);

  const displayRoutes = dbRoutes && dbRoutes.length > 0 ? dbRoutes : initialRoutes;
  const displayHSCodes = dbHSCodes && dbHSCodes.length > 0 ? dbHSCodes : initialHSCodes;
  const displayMOQ = dbMOQ && dbMOQ.length > 0 ? dbMOQ : initialMOQ;

  const filteredHSCodes = useMemo(() => {
    return displayHSCodes.filter(item => 
      item.product.toLowerCase().includes(hsSearch.toLowerCase()) || 
      item.code.toLowerCase().includes(hsSearch.toLowerCase())
    );
  }, [displayHSCodes, hsSearch]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-brand-gold-light/10 pt-32">
        <section className="py-16 md:py-24 bg-brand-navy text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Globe className="w-full h-full -rotate-12 translate-x-1/2" />
          </div>
          <div className="container px-4 relative z-10 text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="text-brand-gold border-brand-gold mb-4 px-4 py-1">Global Logistics</Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-6">How We Export Globally</h1>
            <p className="text-xl text-brand-gold-light/80">From our factories in India to your doorstep. Transparent shipping, verified documentation, and reliable transit times.</p>
          </div>
        </section>

        <section className="py-20 container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-playfair text-brand-navy mb-4">Incoterms We Support</h2>
            <p className="text-muted-foreground">Choose the delivery terms that best suit your logistics capabilities.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {incoterms.map((term) => (
              <Card key={term.code} className={`border-accent/20 transition-all ${term.recommended ? 'ring-2 ring-brand-gold shadow-xl' : 'hover:shadow-lg'}`}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-2xl font-bold text-brand-navy">{term.code}</CardTitle>
                    {term.recommended && (
                      <Badge className="bg-brand-gold text-brand-navy font-bold">Recommended</Badge>
                    )}
                  </div>
                  <CardDescription className="font-bold text-brand-navy">{term.name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{term.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container px-4 mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center">
                <Truck className="text-brand-gold w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold font-playfair text-brand-navy">Global Shipping Routes</h2>
            </div>
            <div className="rounded-xl border border-accent/20 overflow-hidden shadow-sm">
              <Table>
                <TableHeader className="bg-brand-navy/5">
                  <TableRow>
                    <TableHead className="font-bold text-brand-navy">Destination Region</TableHead>
                    <TableHead className="font-bold text-brand-navy">Port of Export</TableHead>
                    <TableHead className="font-bold text-brand-navy">Typical Transit Time</TableHead>
                    <TableHead className="font-bold text-brand-navy">Freight Mode</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {displayRoutes.map((route, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-semibold">{route.region}</TableCell>
                      <TableCell className="font-mono text-sm">{route.port}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="flex w-fit items-center gap-1">
                          <Clock className="w-3 h-3" /> {route.transitTime}
                        </Badge>
                      </TableCell>
                      <TableCell className="flex items-center gap-2">
                        {route.mode.includes('Sea') && <Ship className="w-4 h-4 text-blue-600" />}
                        {route.mode.includes('Air') && <Plane className="w-4 h-4 text-cyan-600" />}
                        <span className="text-sm">{route.mode}</span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        <section className="py-24 container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-navy/5 flex items-center justify-center">
                  <Search className="text-brand-gold w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold font-playfair text-brand-navy">HS Codes Reference</h2>
              </div>
              <div className="rounded-xl border border-accent/20 overflow-hidden bg-white">
                <Table>
                  <TableHeader className="bg-brand-navy text-white">
                    <TableRow>
                      <TableHead className="text-white">Product Category</TableHead>
                      <TableHead className="text-white text-right">HS Code</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredHSCodes.map((item, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{item.product}</TableCell>
                        <TableCell className="text-right font-mono text-brand-gold font-bold">{item.code}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-navy/5 flex items-center justify-center">
                  <Box className="text-brand-gold w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold font-playfair text-brand-navy">MOQ & Lead Times</h2>
              </div>
              <div className="rounded-xl border border-accent/20 overflow-hidden bg-white">
                <Table>
                  <TableHeader className="bg-brand-gold text-brand-navy">
                    <TableRow>
                      <TableHead className="text-brand-navy font-bold">Product</TableHead>
                      <TableHead className="text-brand-navy font-bold">Min. Order (MOQ)</TableHead>
                      <TableHead className="text-brand-navy font-bold text-right">Prod. Lead Time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {displayMOQ.map((item, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-medium">{item.product}</TableCell>
                        <TableCell className="text-sm">{item.moq}</TableCell>
                        <TableCell className="text-right text-sm">{item.leadTime}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <p className="text-xs text-muted-foreground italic flex items-center gap-2">
                <Info className="w-3 h-3" /> Note: Lead times may vary based on customization complexity and order volume.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24 bg-brand-navy text-white">
          <div className="container px-4 mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <Box className="text-brand-gold w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold font-playfair">Packaging & Labelling</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h4 className="font-bold text-brand-gold mb-2">Export Cartons</h4>
                    <p className="text-sm text-brand-gold-light/70">7-ply heavy-duty corrugated boxes, moisture-wrapped, and strapped for rough sea transit.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h4 className="font-bold text-brand-gold mb-2">Private Label</h4>
                    <p className="text-sm text-brand-gold-light/70">Full OEM support including custom inserts, hang-tags, and branded polybags.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <CreditCard className="text-brand-gold w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold font-playfair">Payment Terms</h2>
                </div>
                <div className="space-y-6">
                  <div className="bg-brand-gold/10 p-8 rounded-2xl border border-brand-gold/30">
                    <h4 className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-4">Accepted Methods</h4>
                    <div className="flex flex-wrap gap-3 mb-8">
                      {['T/T (Wire)', 'LC at Sight', 'DP (Doc Against Pay)'].map(m => (
                        <Badge key={m} variant="outline" className="bg-white/10 text-white border-white/20 px-4 py-1">{m}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
