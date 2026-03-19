'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Eye, Target, Globe, Users, Truck, Package, Linkedin, MapPin, Building2, Calendar, Landmark, ExternalLink, ShieldCheck, ClipboardCheck } from 'lucide-react';
import { VerifiedExporterBar } from '@/components/verified-exporter-bar';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const directors = [
  {
    name: 'Anoop Ashraf',
    role: 'Co-Founder & Manufacturing Head',
    expertise: '10+ Years Manufacturing Authority • Founder Dezire Sportswear',
    linkedin: 'https://www.linkedin.com/in/anoopashraf/',
    photo: '/Founders/Anoop.jpeg',
  },
  {
    name: 'Abin Babu',
    role: 'Co-Founder & Business Development',
    expertise: 'Thaiparambath Babu Abin Babu • Deep Corporate & Export Infrastructure',
    linkedin: '#',
    photo: '/Founders/Abin.png',
  },
  {
    name: 'Raijo Phillip',
    role: 'Board of Director • VP of Sales',
    expertise: 'Global Supply Chain & Sales Strategy Expert',
    linkedin: '#',
    photo: '/Founders/Raijo.jpg',
  }
];

const timeline = [
  { year: '2013', event: 'Anoop Ashraf launches Dezire Sportswear in Kerala — beginning a decade of hands-on textile manufacturing.' },
  { year: '2018', event: 'Takes full ownership of manufacturing operations. Production scales to serve retail and wholesale buyers across India.' },
  { year: '2023', event: 'Dezire Sportswear surpasses 1 Million+ units delivered. Community grows to 60,000+ followers on Instagram and Facebook.' },
  { year: '2025', event: 'Anabyn Global Ventures LLP incorporated and GST registered in Kerala.' },
  { year: '2025', event: 'IEC (Importer Exporter Code) issued by DGFT — Anabyn formally authorised to export from India.' },
  { year: '2025', event: 'Anabyn launches as a dedicated premium textile export partner, combining Anoop\'s manufacturing expertise with Abin\'s corporate experience.' }
];

export default function AboutUsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20 bg-secondary/30 pt-32">
        <div className="container max-w-5xl mx-auto space-y-12 px-4">
          <Card className="border-none shadow-none bg-transparent">
            <CardHeader className="text-center">
              <Badge variant="outline" className="w-fit mx-auto text-accent border-accent mb-4 uppercase tracking-widest font-black">Two Decades of Textiles</Badge>
              <h1 className="text-4xl md:text-5xl font-bold font-playfair text-brand-navy">One Export Mission</h1>
              <CardDescription className="mt-6 text-lg max-w-3xl mx-auto">
                Anabyn was founded on a simple conviction — India's finest textiles deserve world-class export infrastructure. Built by makers, run by operators, trusted by buyers across 50+ countries.
              </CardDescription>
            </CardHeader>
          </Card>

          <VerifiedExporterBar />

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-accent/20">
              <CardHeader className="flex-row items-center gap-4">
                <div className="flex-shrink-0 bg-brand-navy/5 p-3 rounded-full">
                  <Target className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl font-playfair">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">To bridge the gap between Indian manufacturing excellence and global procurement demand through technical precision and world-class documentation.</p>
              </CardContent>
            </Card>
            <Card className="border-accent/20">
              <CardHeader className="flex-row items-center gap-4">
                <div className="flex-shrink-0 bg-brand-navy/5 p-3 rounded-full">
                  <Eye className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl font-playfair">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">To become the global gold standard for premium Indian textile exports — ensuring every handshake is honored and every stitch is verified.</p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-accent/20">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-playfair text-brand-navy">Company Profile & Leadership</CardTitle>
            </CardHeader>
            <CardContent className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy uppercase text-[10px] tracking-widest">Registered Address</h4>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        Anabyn Global Ventures LLP,<br />
                        287/87/CA, Anchapalam, Methala,<br />
                        Thrissur, Kerala, India — 680 669
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy uppercase text-[10px] tracking-widest">Company Identifiers</h4>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                        GSTIN: 32ACLFA6777F1Z8<br />
                        IEC Code: ACLFA6777F<br />
                        PAN: ACLFA6777F<br />
                        Constitution: Limited Liability Partnership
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <h4 className="font-bold text-brand-navy uppercase text-[10px] tracking-widest flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> Registration Timeline
                  </h4>
                  <div className="relative border-l-2 border-accent/20 pl-6 space-y-8">
                    {timeline.map((item, idx) => (
                      <div key={idx} className="relative">
                        <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-accent border-4 border-white"></div>
                        <div className="text-xs font-bold text-accent mb-1">{item.year}</div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.event}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-12">
                <h4 className="text-center font-bold text-brand-navy uppercase text-[10px] tracking-widest mb-8">Board of Directors</h4>
                <div className="grid md:grid-cols-3 gap-8">
                  {directors.map((dir) => (
                    <div key={dir.name} className="flex flex-col items-center p-6 border border-accent/10 rounded-2xl bg-white hover:shadow-xl transition-all">
                      <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-accent/20 relative">
                        <Image 
                          src={dir.photo} 
                          alt={dir.name} 
                          fill
                          className="object-cover" 
                          sizes="96px"
                          loading="lazy"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-brand-navy text-center">{dir.name}</h3>
                      <p className="text-[10px] text-accent font-black uppercase tracking-widest mb-1 text-center">{dir.role}</p>
                      <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-tighter mb-3 text-center">{dir.expertise}</p>
                      <a href={dir.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-brand-navy">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-accent/20 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="bg-brand-navy text-white p-10 space-y-6">
                <ShieldCheck className="w-12 h-12 text-brand-gold" />
                <h3 className="text-2xl font-playfair font-bold">Active Verifications</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-brand-gold-light/80">
                    <ClipboardCheck size={16} className="text-brand-gold" /> IEC Registered (ACLFA6777F)
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-brand-gold-light/80">
                    <ClipboardCheck size={16} className="text-brand-gold" /> GST Registered (32ACLFA6777F1Z8)
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-brand-gold-light/80">
                    <ClipboardCheck size={16} className="text-brand-gold" /> AQL 2.5 Inspection Standard
                  </li>
                </ul>
              </div>
              <div className="bg-brand-gold-light/30 p-10 space-y-6">
                <h3 className="text-2xl font-playfair font-bold text-brand-navy">Compliance Roadmap</h3>
                <p className="text-sm text-muted-foreground">The following certifications are currently undergoing final audit verification for the 2025 cycle.</p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-sm font-bold text-brand-navy/60">
                    <div className="w-2 h-2 rounded-full bg-brand-gold" /> ISO 9001:2015 (Target)
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold text-brand-navy/60">
                    <div className="w-2 h-2 rounded-full bg-brand-gold" /> OEKO-TEX Standard 100 (Target)
                  </li>
                  <li className="flex items-center gap-3 text-sm font-bold text-brand-navy/60">
                    <div className="w-2 h-2 rounded-full bg-brand-gold" /> GOTS Organic Cotton (Target)
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="bg-brand-navy text-white p-12 rounded-[2.5rem] text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold">Precision textiles. <br /><span className="text-brand-gold">Delivered to the world.</span></h2>
            <p className="text-white/60">Talk to us about your next order.</p>
            <Button asChild size="lg" className="bg-brand-gold text-brand-navy font-black rounded-xl h-14 px-10 border-none shadow-xl">
              <Link href="/request-quote">Request Export Quote</Link>
            </Button>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
