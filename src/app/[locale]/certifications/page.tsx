import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Award, 
  CheckCircle2, 
  FileText, 
  ArrowRight,
  FlaskConical,
  Activity,
  Layers,
  SearchCheck,
  ShieldCheck,
  ExternalLink,
  Calendar,
  Building2,
  Fingerprint,
  MessageSquare,
  Clock
} from 'lucide-react';
import { Link } from '@/i18n/routing';
import type { Metadata } from 'next';
import { JsonLd } from '@/components/json-ld';
import { getBreadcrumbSchema, getFAQSchema } from '@/lib/schema-utils';

export const metadata: Metadata = {
  title: 'Certifications & Compliance | Anabyn Global Ventures LLP',
  description: "Verified IEC, GST, and AQL 2.5 standards. Every Anabyn shipment meets rigorous global quality and regulatory requirements for international trade. View our specs.",
};

const certifications = [
  {
    name: 'IEC Registered Exporter',
    description: 'Official authorization issued by DGFT, enabling Anabyn to conduct global trade from India.',
    status: 'Achieved',
    variant: 'default' as const,
    certNumber: 'ACLFA6777F',
    issuer: 'DGFT India',
    issuerUrl: 'https://www.dgft.gov.in',
    validUntil: 'Active (Lifetime)',
    verifyUrl: 'https://www.dgft.gov.in/CP/?opt=view-iec'
  },
  {
    name: 'GST Registration',
    description: 'The primary legal identifier for business taxation and commercial compliance in India.',
    status: 'Achieved',
    variant: 'default' as const,
    certNumber: '32ACLFA6777F1Z8',
    issuer: 'GST Council',
    issuerUrl: 'https://www.gst.gov.in',
    validUntil: 'Active',
    verifyUrl: 'https://services.gst.gov.in/services/searchtp'
  },
  {
    name: 'AQL 2.5 Quality Standard',
    description: 'Our internal Acceptance Quality Limit benchmark for all textile manufacturing batches.',
    status: 'Achieved',
    variant: 'default' as const,
    certNumber: 'AGV-QC-2025-V1',
    issuer: 'Anabyn Internal Compliance',
    issuerUrl: 'https://www.anabyn.com/quality',
    validUntil: 'Annual Review 2026',
    verifyUrl: '/export-process'
  },
  {
    name: 'ISO 9001:2015',
    description: 'Global standard for quality management systems (QMS) across corporate export operations.',
    status: 'On demand upon customer request',
    variant: 'secondary' as const,
    note: 'Initial audit documentation can be provided for specific procurement requirements.'
  },
  {
    name: 'OEKO-TEX® STANDARD 100',
    description: 'Ensuring textiles are free from harmful substances for skin-contact hospitality applications.',
    status: 'On demand upon customer request',
    variant: 'secondary' as const,
    note: 'Standard requirement for global 5-star hospitality tenders.'
  },
  {
    name: 'GOTS Organic Cotton',
    description: 'The gold standard for organic fibre processing, covering ecological and social criteria.',
    status: 'On demand upon customer request',
    variant: 'secondary' as const,
    note: 'Available for sustainable and organic product lines.'
  },
  {
    name: 'REACH Compliance',
    description: 'Compliance with European Union chemical safety regulations for the EU market.',
    status: 'On demand upon customer request',
    variant: 'secondary' as const,
    note: 'Verified for EU and UK destination markets.'
  }
];

const qcSteps = [
  {
    id: 1,
    title: 'Raw Material Inspection',
    desc: 'Verification of GSM, yarn count, and colourfastness before weaving begins.',
    icon: Layers
  },
  {
    id: 2,
    title: 'In-Process QC',
    desc: 'Real-time quality checks during the weaving and finishing stages to catch defects early.',
    icon: Activity
  },
  {
    id: 3,
    title: 'Finished Goods Inspection',
    desc: 'Rigorous final audit using the AQL 2.5 international standard for bulk shipments.',
    icon: CheckCircle2
  },
  {
    id: 4,
    title: 'Third-Party Audits',
    desc: 'Coordination with global agencies (SGS, Intertek) for independent pre-shipment inspections.',
    icon: SearchCheck
  },
  {
    id: 5,
    title: 'Full Documentation',
    desc: 'Issuance of test reports, Certificate of Origin, and detailed packing lists for customs.',
    icon: FileText
  }
];

const faqItems = [
  { q: "How can I verify your IEC registration?", a: "You can verify our IEC (Import Export Code) ACLFA6777F directly on the official DGFT India portal using our company name: Anabyn Global Ventures LLP." },
  { q: "Do you provide OEKO-TEX documentation for every order?", a: "OEKO-TEX Standard 100 certificates are available on demand upon customer request for specific production batches to ensure compliance with EU/US safety regulations." },
  { q: "What does AQL 2.5 mean for my shipment?", a: "AQL 2.5 is an international standard defining the maximum allowable defects in a batch. It ensures that 100% of your shipment meets our 'Luxury Export Grade' threshold." },
  { q: "Can you provide GOTS organic cotton certificates?", a: "Yes, for organic product lines, we provide batch-wise GOTS transaction certificates on demand to verify the sustainable origin of the fibers." }
];

export default async function CertificationsPage({ params }: { params: { locale: string } }) {
  const { locale } = await params;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <JsonLd data={getBreadcrumbSchema([
        { name: 'Home', url: `/${locale}` },
        { name: 'Certifications', url: `/${locale}/certifications` }
      ])} />
      <JsonLd data={getFAQSchema(faqItems)} />
      
      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="relative pt-40 pb-20 overflow-hidden bg-[#060A14] text-white">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-navy/80 to-brand-navy z-10" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          </div>
          <div className="container relative z-20 px-4 mx-auto text-center">
            <div className="max-w-4xl mx-auto space-y-6">
              <Badge variant="outline" className="text-brand-gold border-brand-gold px-4 py-1 uppercase tracking-widest font-black">
                Technical Compliance
              </Badge>
              <h1 className="text-4xl md:text-6xl font-playfair font-bold leading-tight">
                Quality Certifications <br />
                <span className="text-brand-gold">& Standards</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                Every product leaving our facility meets rigorous international quality standards. We work with certified raw material suppliers and apply multi-point inspection at every stage.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Certifications Grid */}
        <section className="py-24 bg-white">
          <div className="container px-4 mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {certifications.map((cert) => (
                <Card key={cert.name} className="flex flex-col border-brand-gold/10 hover:border-brand-gold transition-all duration-300 shadow-lg group">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col gap-4 mb-4">
                      <div className="flex justify-between items-start">
                        <div className="w-12 h-12 rounded-xl bg-brand-navy/5 flex items-center justify-center group-hover:bg-brand-navy group-hover:text-white transition-colors duration-500">
                          <Award className="w-6 h-6 text-brand-gold" />
                        </div>
                        <Badge variant={cert.status === 'Achieved' ? 'success' : 'secondary'} className="text-[8px] uppercase max-w-[120px] text-center leading-tight">
                          {cert.status}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-lg font-playfair font-bold text-brand-navy leading-tight">{cert.name}</CardTitle>
                    <CardDescription className="text-sm mt-3 leading-relaxed">
                      {cert.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-1 space-y-4 pt-4 border-t border-dashed">
                    {cert.status === 'Achieved' ? (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Fingerprint className="w-3.5 h-3.5 text-brand-gold" />
                          <div className="flex flex-col">
                            <span className="text-[9px] uppercase font-black text-muted-foreground tracking-tighter">Certificate Number</span>
                            <span className="text-xs font-bold text-brand-navy font-mono">{cert.certNumber}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Building2 className="w-3.5 h-3.5 text-brand-gold" />
                          <div className="flex flex-col">
                            <span className="text-[9px] uppercase font-black text-muted-foreground tracking-tighter">Issuing Body</span>
                            <a href={cert.issuerUrl} target="_blank" className="text-xs font-bold text-brand-navy hover:text-brand-gold flex items-center gap-1">
                              {cert.issuer} <ExternalLink size={10} />
                            </a>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5 text-brand-gold" />
                          <div className="flex flex-col">
                            <span className="text-[9px] uppercase font-black text-muted-foreground tracking-tighter">Valid Until</span>
                            <span className="text-xs font-bold text-brand-navy">{cert.validUntil}</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm" asChild className="w-full mt-2 h-9 rounded-lg border-brand-gold/30 text-brand-gold hover:bg-brand-gold hover:text-brand-navy transition-all text-[10px] font-black uppercase tracking-widest">
                          <a href={cert.verifyUrl} target={cert.verifyUrl.startsWith('http') ? '_blank' : '_self'}>Verify Certificate <ArrowRight size={12} className="ml-1" /></a>
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <MessageSquare className="w-3.5 h-3.5 text-brand-gold" />
                          <div className="flex flex-col">
                            <span className="text-[9px] uppercase font-black text-muted-foreground tracking-tighter">Availability</span>
                            <span className="text-xs font-bold text-brand-navy">Available on Request</span>
                          </div>
                        </div>
                        <div className="p-3 bg-secondary/20 rounded-lg">
                          <p className="text-[9px] font-bold text-brand-navy/60 italic leading-tight">"We coordinate with certified production units to provide batches meeting this standard specifically for your procurement needs."</p>
                        </div>
                        <Button variant="outline" size="sm" asChild className="w-full mt-2 h-9 rounded-lg border-brand-gold/30 text-brand-gold hover:bg-brand-gold hover:text-brand-navy transition-all text-[10px] font-black uppercase tracking-widest">
                          <Link href="/request-quote">Inquire Now <ArrowRight size={12} className="ml-1" /></Link>
                        </Button>
                      </div>
                    )}
                  </CardContent>

                  {cert.note && (
                    <CardFooter className="pt-0 pb-6 italic text-[9px] text-muted-foreground mt-2">
                      * {cert.note}
                    </CardFooter>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 3. QC Process Section */}
        <section className="py-24 bg-[#F5EDD6]/30">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-5xl font-playfair font-bold text-brand-navy">Our Quality Control Process</h2>
              <p className="text-muted-foreground font-medium max-w-xl mx-auto">Maintaining technical precision from yarn to shipment.</p>
            </div>

            <div className="max-w-5xl mx-auto space-y-6">
              {qcSteps.map((step, i) => (
                <div key={step.id} className="flex gap-6 items-start p-8 rounded-3xl bg-white border border-brand-gold/10 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all">
                  <div className="text-6xl font-playfair font-bold text-brand-gold/5 absolute right-8 top-1/2 -translate-y-1/2 select-none group-hover:text-brand-gold/10 transition-colors">
                    0{step.id}
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-brand-navy/5 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-all duration-500 shrink-0">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-xl font-bold text-brand-navy mb-2">Step {step.id}: {step.title}</h4>
                    <p className="text-gray-600 max-w-2xl">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Lab Testing Callout */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="bg-brand-navy rounded-[3rem] p-12 md:p-20 text-white relative shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full translate-x-1/2 -translate-y-1/2" />
              <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-8">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10">
                    <FlaskConical className="w-8 h-8 text-brand-gold" />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-playfair font-bold">Comprehensive <br /><span className="text-brand-gold">Laboratory Testing</span></h2>
                  <p className="text-white/70 text-lg leading-relaxed">
                    We maintain alliances with ISO-certified laboratories to provide third-party testing on request. Our technical reports cover critical parameters for high-occupancy markets.
                  </p>
                  <ul className="grid grid-cols-2 gap-4">
                    {['pH Levels', 'Colourfastness', 'Shrinkage Control', 'Tensile Strength'].map(test => (
                      <li key={test} className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-gold-light/80">
                        <CheckCircle2 size={16} className="text-brand-gold" /> {test}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-10 rounded-[2rem] text-center">
                  <div className="space-y-8">
                    <ShieldCheck className="w-16 h-16 text-brand-gold mx-auto" />
                    <h3 className="text-2xl font-playfair font-bold text-white">Verification Center</h3>
                    <p className="text-white/60">Need a specific technical dossier or laboratory report for your procurement meeting?</p>
                    <Button asChild size="lg" className="w-full bg-brand-gold text-brand-navy font-black h-14 rounded-xl shadow-xl hover:scale-105 transition-transform border-none">
                      <Link href="/request-quote">Request Test Reports <ArrowRight className="ml-2 w-4 h-4" /></Link>
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
