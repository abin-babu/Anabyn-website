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
  ShieldCheck
} from 'lucide-react';
import { Link } from '@/i18n/routing';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Certifications & Compliance | Anabyn Global Ventures LLP',
  description: 'ISO 9001:2015, OEKO-TEX, GOTS and REACH compliance. Every Anabyn shipment is verified for quality and global regulatory standards.',
};

const certifications = [
  {
    name: 'OEKO-TEX® STANDARD 100',
    description: 'Tested for harmful substances. Ensuring textile safety for skin-contact hospitality products.',
    status: 'Achieved',
    variant: 'default' as const
  },
  {
    name: 'GOTS (Global Organic Textile Standard)',
    description: 'The leading processing standard for organic fibres, including ecological and social criteria.',
    status: 'Achieved',
    variant: 'default' as const
  },
  {
    name: 'ISO 9001:2015',
    description: 'International standard for quality management systems (QMS) across all export operations.',
    status: 'Achieved',
    variant: 'default' as const
  },
  {
    name: 'REACH Compliance',
    description: 'Compliance with European Union regulations for chemical safety in the EU market.',
    status: 'In Process',
    variant: 'secondary' as const,
    note: 'Final audit documentation undergoing verification for 2026 certification.'
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

export default function CertificationsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      
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
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {certifications.map((cert) => (
                <Card key={cert.name} className="flex flex-col border-brand-gold/10 hover:border-brand-gold transition-all duration-300 shadow-lg group">
                  <CardHeader className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-navy/5 flex items-center justify-center group-hover:bg-brand-navy group-hover:text-white transition-colors duration-500">
                        <Award className="w-6 h-6 text-brand-gold" />
                      </div>
                      <Badge variant={cert.variant} className="text-[9px] uppercase">
                        {cert.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg font-playfair font-bold text-brand-navy">{cert.name}</CardTitle>
                    <CardDescription className="text-sm mt-2 leading-relaxed">
                      {cert.description}
                    </CardDescription>
                  </CardHeader>
                  {cert.note && (
                    <CardFooter className="pt-0 pb-6 italic text-[10px] text-muted-foreground border-t border-dashed mt-4">
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
