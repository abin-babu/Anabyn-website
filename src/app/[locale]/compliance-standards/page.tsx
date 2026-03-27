import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink, 
  ArrowRight, 
  AlertCircle,
  Scale,
  FileSearch,
  Lock
} from 'lucide-react';
import { Link } from '@/i18n/routing';
import { JsonLd } from '@/components/json-ld';
import { getBreadcrumbSchema, getFAQSchema } from '@/lib/schema-utils';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Textile Export Compliance & Certifications — Anabyn vs. Industry Standard',
  description: 'See how Anabyn\'s quality standards, certifications, and export compliance compare to industry minimums. ISO 9001, OEKO-TEX, GOTS, AQL 2.5, IEC, and FDA registered — all verified and transparent.',
};

const comparisonData = [
  {
    standard: 'Quality Management',
    minimum: 'ISO 9001 (often absent)',
    anabyn: 'ISO 9001:2015 Certified',
    benefit: 'Systematic quality control at every production stage',
    verified: true
  },
  {
    standard: 'Chemical Safety',
    minimum: 'Self-declared',
    anabyn: 'OEKO-TEX STANDARD 100',
    benefit: '100+ harmful substances tested and excluded',
    verified: true
  },
  {
    standard: 'Organic Textiles',
    minimum: 'Uncertified',
    anabyn: 'GOTS Certified (Achieved)',
    benefit: 'Verified organic from fibre to final product',
    verified: true
  },
  {
    standard: 'EU Market Compliance',
    minimum: 'Varies',
    anabyn: 'CE Marked',
    benefit: 'Meets EU safety, health and environmental requirements',
    verified: true
  },
  {
    standard: 'US Market Entry',
    minimum: 'Varies',
    anabyn: 'FDA Registered',
    benefit: 'Compliant with US import requirements',
    verified: true
  },
  {
    standard: 'Export Authority',
    minimum: 'IEC (often missing)',
    anabyn: 'IEC Registered (ACLFA6777F)',
    benefit: 'Legally authorised to export from India',
    verified: true
  },
  {
    standard: 'Quality Inspection',
    minimum: 'Ad hoc or AQL 4.0',
    anabyn: 'AQL 2.5 (stricter)',
    benefit: 'Tighter defect tolerance — fewer rejections',
    verified: true
  },
  {
    standard: 'Tax Compliance',
    minimum: 'GST registered',
    anabyn: 'GST Verified (32ACLFA6777F1Z8)',
    benefit: 'Transparent, publicly verifiable registration',
    verified: true
  }
];

const verificationLinks = [
  { name: 'IEC Registration (DGFT)', issuer: 'DGFT India', url: 'https://www.dgft.gov.in/CP/?opt=view-iec' },
  { name: 'GST Verification', issuer: 'GST Council', url: 'https://services.gst.gov.in/services/searchtp' },
  { name: 'OEKO-TEX Label Check', issuer: 'OEKO-TEX Service GmbH', url: 'https://www.oeko-tex.com/en/label-check' },
  { name: 'GOTS Public Database', issuer: 'Global Standard gGmbH', url: 'https://global-standard.org/public-database' }
];

const faqItems = [
  { q: "Why is AQL 2.5 better than industry standard AQL 4.0?", a: "AQL 2.5 is a tighter defect tolerance. While AQL 4.0 allows for more defects in a batch, Anabyn's 2.5 standard ensures that your shipment meets a higher 'Luxury Export Grade' threshold, significantly reducing rejections at your warehouse." },
  { q: "Can I verify your IEC code ACLFA6777F?", a: "Yes. You can verify our Import Export Code directly on the DGFT India portal. This code is our primary legal authorization to conduct international trade." },
  { q: "Do you provide physical copies of certifications with every order?", a: "Every export shipment is backed by a technical dossier that includes relevant batch-wise test reports and certification documents required for customs clearance in your destination market." },
  { q: "How do you ensure GOTS organic compliance?", a: "We work with certified production units and provide batch-specific Transaction Certificates (TC) that track the organic cotton from the farm to the final woven product." }
];

export default async function ComplianceStandardsPage({ params }: { params: { locale: string } }) {
  const { locale } = await params;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <JsonLd data={getBreadcrumbSchema([
        { name: 'Home', url: `/${locale}` },
        { name: 'Certifications', url: `/${locale}/certifications` },
        { name: 'Compliance Comparison', url: `/${locale}/compliance-standards` }
      ])} />
      <JsonLd data={getFAQSchema(faqItems)} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Textile Export Compliance & Standards Comparison",
        "description": "Anabyn Global Ventures vs. Industry Minimum Compliance Standards.",
        "publisher": { "@type": "Organization", "name": "Anabyn Global Ventures LLP" }
      }} />
      
      <main className="flex-1">
        {/* SECTION 1: Hero */}
        <section className="relative pt-40 pb-20 overflow-hidden bg-brand-navy text-white">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-navy/80 to-brand-navy z-10" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          </div>
          <div className="container relative z-20 px-4 mx-auto text-center">
            <div className="max-w-4xl mx-auto space-y-6">
              <Badge variant="outline" className="text-brand-gold border-brand-gold px-4 py-1 uppercase tracking-widest font-black">
                Accountability Framework
              </Badge>
              <h1 className="text-4xl md:text-7xl font-playfair font-bold leading-tight">
                Compliance You Can Verify. <br />
                <span className="text-brand-gold">Standards That Matter.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Every Anabyn shipment is backed by internationally recognised certifications and verifiable quality standards. 
                Here is exactly what we hold — and how it compares to the minimum the market accepts.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: Comparison Table */}
        <section className="py-24 bg-white">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-playfair font-bold text-brand-navy">The Comparison</h2>
              <p className="text-muted-foreground font-medium">Why global procurement teams choose Anabyn over ad hoc suppliers.</p>
            </div>

            <div className="max-w-6xl mx-auto overflow-hidden rounded-[2rem] border-2 border-brand-gold/10 shadow-2xl">
              <Table>
                <TableHeader className="bg-brand-navy text-white h-16">
                  <TableRow className="hover:bg-brand-navy">
                    <TableHead className="text-white px-8">Standard / Certification</TableHead>
                    <TableHead className="text-white">Industry Minimum</TableHead>
                    <TableHead className="text-brand-gold font-black">Anabyn Standard</TableHead>
                    <TableHead className="text-white pr-8">Why It Matters</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonData.map((row, i) => (
                    <TableRow key={i} className="hover:bg-secondary/5 transition-colors">
                      <TableCell className="px-8 font-bold text-brand-navy py-6 border-r border-gray-50">{row.standard}</TableCell>
                      <TableCell className="text-muted-foreground bg-gray-50/50 flex items-center gap-2 h-full">
                        <AlertCircle className="w-3.5 h-3.5 text-gray-400" /> {row.minimum}
                      </TableCell>
                      <TableCell className="font-black text-brand-navy bg-brand-gold/5 border-x border-brand-gold/10">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                          {row.anabyn}
                        </div>
                      </TableCell>
                      <TableCell className="text-sm text-gray-600 pr-8 leading-relaxed italic border-l border-gray-50">{row.benefit}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        {/* SECTION 3: How to Verify */}
        <section className="py-24 bg-secondary/20">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-brand-gold/10 flex items-center justify-center mx-auto mb-6">
                  <FileSearch className="w-8 h-8 text-brand-gold" />
                </div>
                <h2 className="text-3xl md:text-5xl font-playfair font-bold text-brand-navy">Verify Our Certifications Independently</h2>
                <p className="text-muted-foreground text-lg">We encourage independent audit. Use these official tools to verify our commercial and technical credentials.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {verificationLinks.map((link) => (
                  <Card key={link.name} className="border-brand-gold/10 hover:border-brand-gold transition-all group bg-white rounded-2xl">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg font-bold text-brand-navy">{link.name}</CardTitle>
                        <Lock className="w-4 h-4 text-brand-gold/40" />
                      </div>
                      <p className="text-[10px] font-black uppercase text-muted-foreground tracking-widest">Issuer: {link.issuer}</p>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" size="sm" asChild className="w-full rounded-xl border-brand-navy text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-all text-[10px] font-black uppercase tracking-widest h-10">
                        <a href={link.url} target="_blank">Access Official Verification <ExternalLink size={12} className="ml-2" /></a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: FAQ (Handled via schema and on-page FAQ logic if needed, but FAQ items are listed above) */}
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="container px-4 mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-brand-navy text-center mb-16">Procurement Compliance FAQ</h2>
            <div className="space-y-12">
              {faqItems.map((item, i) => (
                <div key={i} className="space-y-4">
                  <h4 className="text-xl font-bold text-brand-navy flex items-center gap-3">
                    <Scale className="text-brand-gold w-5 h-5 shrink-0" /> {item.q}
                  </h4>
                  <p className="text-gray-600 leading-relaxed pl-8 border-l-2 border-brand-gold/20">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: CTA */}
        <section className="py-24 bg-brand-navy text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="container relative z-10 px-4 mx-auto text-center space-y-8">
            <ShieldCheck className="w-16 h-16 text-brand-gold mx-auto" />
            <div className="max-w-2xl mx-auto space-y-4">
              <h2 className="text-3xl md:text-5xl font-playfair font-bold">Request our full certification <br /><span className="text-brand-gold">documentation pack</span></h2>
              <p className="text-white/60 text-lg">Download our current AQL inspection templates, factory audit summaries, and technical compliance certificates for your procurement meeting.</p>
            </div>
            <Button asChild size="lg" className="rounded-2xl bg-brand-gold text-brand-navy hover:scale-105 transition-transform h-16 px-12 font-black text-lg border-none shadow-2xl">
              <Link href="/request-quote">Request Compliance Pack <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
