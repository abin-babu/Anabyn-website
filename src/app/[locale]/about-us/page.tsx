import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { 
  Eye, 
  Target, 
  Globe, 
  Linkedin, 
  MapPin, 
  Building2, 
  Calendar, 
  ShieldCheck, 
  ClipboardCheck,
  ArrowRight,
  History,
  TrendingUp
} from 'lucide-react';
import { VerifiedExporterBar } from '@/components/verified-exporter-bar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Anabyn — Our Story & Team | Textile Exporter India',
  description: 'Meet the founders of Anabyn Global Ventures LLP. Combining a decade of Kerala manufacturing with global export expertise. Trusted in 50+ countries. Learn more.',
};

const directors = [
  {
    name: 'Anoop Ashraf',
    role: 'Co-Founder & Manufacturing Head',
    expertise: '10+ Years Manufacturing Authority • Founder Dezire Sportswear',
    description: "Anoop entered the textile industry in 2013 with Dezire Sportswear. By 2018 he owned full manufacturing operations in Kerala, overseeing GSM standards, AQL inspection, and production quality. Dezire Sportswear's 60,000+ followers on Instagram and Facebook reflect more than a decade of product trust.",
    photo: '/Founders/Anoop.jpeg',
  },
  {
    name: 'Thaiparambath Babu Abin Babu',
    role: 'Chairman',
    expertise: 'MBA IIM Kozhikode • 14+ Years Corporate Product Authority',
    description: "Abin brings the corporate and commercial infrastructure that turns manufacturing excellence into global trade. From export compliance and documentation to international buyer relationships, Abin ensures every Anabyn shipment meets the standards expected by procurement teams worldwide.",
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
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1 pt-32 pb-20">
        <div className="container max-w-6xl mx-auto space-y-20 px-4">
          
          {/* Section 1: Hero */}
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <Badge variant="outline" className="text-brand-gold border-brand-gold px-4 py-1 uppercase tracking-[0.3em] font-black">The Brand Story</Badge>
            <h1 className="text-4xl md:text-7xl font-bold font-playfair text-brand-navy leading-tight">
              Two Decades of Textiles. <br />
              <span className="text-brand-gold">One Export Mission.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Anabyn was founded on a simple conviction — India's finest textiles deserve world-class export infrastructure. Built by makers, run by operators, trusted by buyers across 50+ countries.
            </p>
          </div>

          <VerifiedExporterBar />

          {/* Section 2: Our Story Narrative */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
              <p>
                The journey began in 2013, when Anoop Ashraf launched Dezire Sportswear — a textile brand built from the ground up in Kerala. Over the years that followed, Dezire grew into a manufacturing operation with genuine scale. By 2018, Anoop owned and operated the full production process, and the brand went on to deliver over one million units to buyers across India, building a community of more than 60,000 followers on both Instagram and Facebook along the way.
              </p>
              <p>
                Through that decade on the factory floor, one gap became impossible to ignore. Exceptional Indian textile producers rarely had the export systems, documentation discipline, and global buyer relationships to match the quality they were crafting. The international opportunity was real. The infrastructure to reach it was not.
              </p>
              <p>
                That is where Abin came in. Thaiparambath Babu Abin Babu brings deep corporate experience across international trade and business operations. Where Anoop brings the factory floor, Abin brings the boardroom — compliance frameworks, global buyer communication, and the institutional discipline that procurement partners across Europe, the Gulf, and beyond require before placing their first order.
              </p>
              <p>
                Together, they founded Anabyn Global Ventures LLP in 2025 — combining Anoop's manufacturing mastery with Abin's corporate expertise into a single, focused export partner. Not a factory. Not a trading house. The premium export partner in between.
              </p>
            </div>
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-secondary/20">
              <Image 
                src="https://images.unsplash.com/photo-1526290766257-c015850e4629?w=800&q=80" 
                alt="Modern Textile Manufacturing India" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Section 4: Stats Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-16 border-y border-brand-gold/10">
            {[
              { val: '2013', label: 'Textile journey begins' },
              { val: '1M+', label: 'Units delivered' },
              { val: '60K+', label: 'Social followers' },
              { val: '2025', label: 'Anabyn founded' }
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <div className="text-4xl md:text-5xl font-playfair font-bold text-brand-gold">{stat.val}</div>
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Section 9: Dezire Sportswear Legacy */}
          <Card className="border-none shadow-xl bg-secondary/30 rounded-[3rem] overflow-hidden">
            <CardContent className="p-12 md:p-20 grid lg:grid-cols-[auto_1fr] gap-12 items-center">
              <div className="w-20 h-20 rounded-3xl bg-brand-gold/20 flex items-center justify-center">
                <History className="w-10 h-10 text-brand-gold" />
              </div>
              <div className="space-y-6">
                <Badge variant="outline" className="text-brand-navy border-brand-navy font-black uppercase tracking-widest">Heritage Brand</Badge>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brand-navy">The Dezire Sportswear Legacy</h2>
                <p className="text-xl text-brand-navy/70 leading-relaxed">
                  Dezire Sportswear — Anoop's first textile brand, launched in 2013 — is the foundation on which Anabyn is built. With over 60,000 followers on both Instagram and Facebook, Dezire demonstrated that an India-made textile brand could earn genuine customer loyalty and consistent repeat orders at scale. Anabyn inherits that manufacturing discipline and that direct-feedback relationship with buyers — now applied to the global export market.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Mission/Vision */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-brand-gold/10 hover:border-brand-gold/30 transition-all">
              <CardHeader className="flex-row items-center gap-4">
                <div className="bg-brand-navy/5 p-3 rounded-full"><Target className="h-8 w-8 text-brand-gold" /></div>
                <CardTitle className="text-2xl font-playfair">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">To bridge the gap between Indian manufacturing excellence and global procurement demand through technical precision and world-class documentation.</p>
              </CardContent>
            </Card>
            <Card className="border-brand-gold/10 hover:border-brand-gold/30 transition-all">
              <CardHeader className="flex-row items-center gap-4">
                <div className="bg-brand-navy/5 p-3 rounded-full"><Eye className="h-8 w-8 text-brand-gold" /></div>
                <CardTitle className="text-2xl font-playfair">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">To become the global gold standard for premium Indian textile exports — ensuring every handshake is honored and every stitch is verified.</p>
              </CardContent>
            </Card>
          </div>

          {/* Leadership (Section 3) */}
          <div className="space-y-12">
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-center text-brand-navy">Corporate Leadership</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {directors.map((dir) => (
                <Card key={dir.name} className="border-brand-gold/10 hover:shadow-2xl transition-all rounded-[2rem] overflow-hidden bg-white">
                  <div className="aspect-[4/5] relative">
                    <Image src={dir.photo} alt={dir.name} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <CardHeader className="text-center pb-2">
                    <CardTitle className="text-xl font-bold">{dir.name}</CardTitle>
                    <p className="text-[10px] text-brand-gold font-black uppercase tracking-widest">{dir.role}</p>
                  </CardHeader>
                  <CardContent className="text-center px-6 pb-8">
                    <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-tight mb-4">{dir.expertise}</p>
                    {dir.description && <p className="text-xs text-muted-foreground leading-relaxed line-clamp-4">{dir.description}</p>}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Company Profile (Sections 6, 7, 5) */}
          <div className="grid lg:grid-cols-[1fr_auto] gap-12">
            <div className="space-y-12">
              <Card className="border-brand-gold/10">
                <CardHeader><CardTitle className="text-2xl font-playfair">Verification & Identity</CardTitle></CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-brand-gold" /></div>
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
                      <div className="w-10 h-10 rounded-lg bg-brand-gold/10 flex items-center justify-center shrink-0"><Building2 className="w-5 h-5 text-brand-gold" /></div>
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
                    <h4 className="font-bold text-brand-navy uppercase text-[10px] tracking-widest flex items-center gap-2"><Calendar className="w-4 h-4" /> Registration Timeline</h4>
                    <div className="relative border-l-2 border-brand-gold/20 pl-6 space-y-8">
                      {timeline.map((item, idx) => (
                        <div key={idx} className="relative">
                          <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-brand-gold border-4 border-white"></div>
                          <div className="text-xs font-bold text-brand-gold mb-1">{item.year}</div>
                          <p className="text-xs text-muted-foreground leading-relaxed">{item.event}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Section 8: Certifications */}
            <div className="w-full lg:w-80 space-y-8">
              <Card className="bg-brand-navy text-white border-none shadow-xl">
                <CardHeader className="space-y-4">
                  <ShieldCheck className="w-12 h-12 text-brand-gold" />
                  <CardTitle className="text-white text-xl">Active Verifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <ClipboardCheck className="text-brand-gold w-5 h-5 shrink-0" />
                    <p className="text-[10px] font-black uppercase tracking-widest">IEC Registered (ACLFA6777F)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ClipboardCheck className="text-brand-gold w-5 h-5 shrink-0" />
                    <p className="text-[10px] font-black uppercase tracking-widest">GST Registered (32ACLFA6777F1Z8)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ClipboardCheck className="text-brand-gold w-5 h-5 shrink-0" />
                    <p className="text-[10px] font-black uppercase tracking-widest">AQL 2.5 Inspection Standard</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-secondary/30 border-brand-gold/20">
                <CardHeader><CardTitle className="text-lg">Compliance Roadmap</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  {[
                    'ISO 9001:2015 (Target)',
                    'OEKO-TEX Standard 100 (Target)',
                    'GOTS Organic Cotton (Target)'
                  ].map(t => (
                    <div key={t} className="flex items-center gap-3 text-[10px] font-bold text-brand-navy/60 uppercase">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" /> {t}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Section 10: Closing CTA */}
          <Card className="bg-brand-navy text-white p-12 md:p-20 rounded-[3rem] text-center space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
            <TrendingUp className="w-16 h-16 text-brand-gold mx-auto" />
            <h2 className="text-3xl md:text-6xl font-playfair font-bold">Precision textiles. <br /><span className="text-brand-gold">Delivered to the world.</span></h2>
            <p className="text-white/60 text-xl max-w-xl mx-auto">Talk to us about your next order.</p>
            <Button asChild size="lg" className="bg-brand-gold text-brand-navy font-black rounded-2xl h-16 px-12 border-none shadow-2xl hover:scale-105 transition-transform">
              <Link href="/request-quote">Request Export Quote <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </Card>

        </div>
      </main>
      <Footer />
    </div>
  );
}
