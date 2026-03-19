'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Eye, Target, Globe, Users, Truck, Package, Linkedin, MapPin, Building2, Calendar, Landmark, ExternalLink } from 'lucide-react';
import { VerifiedExporterBar } from '@/components/verified-exporter-bar';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const whatWeDo = [
  {
    icon: Globe,
    title: "Global Export Solutions",
    description: "We export high-quality products from India to clients across the globe, ensuring on-time delivery and comprehensive documentation compliance."
  },
  {
    icon: Users,
    title: "Manufacturer Partnerships",
    description: "Our exclusive tie-ups with top manufacturers provide competitive pricing, guaranteed quality, and priority production access."
  },
  {
    icon: Truck,
    title: "End-to-End Logistics",
    description: "From sourcing to packaging to international shipping, we manage everything with world-class logistics and transparent communication."
  },
  {
    icon: Package,
    title: "Product Sourcing Across Categories",
    description: "Whether it’s textiles, FMCG, handicrafts, fresh produce, industrial goods, spices, or custom products, we source directly from certified units to meet global standards."
  },
];

const directors = [
  {
    name: 'Anoop Ashraf',
    role: 'Founder & Managing Director',
    expertise: '13+ Years Textile Industry Authority',
    linkedin: 'https://www.linkedin.com/in/anoopashraf/',
    photo: '/Founders/Anoop.jpeg',
  },
  {
    name: 'Dr. Abin Babu',
    role: 'Co-Founder & Director of Quality',
    expertise: 'Medical Quality & Compliance Expert',
    linkedin: '#',
    photo: '/Founders/PHOTO-2026-02-20-11-43-35.jpg',
  },
  {
    name: 'Raijo Phillip',
    role: 'Director of Operations',
    expertise: 'Global Supply Chain & Logistics Expert',
    linkedin: '#',
    photo: '/Founders/Raijo.jpg',
  }
];

const timeline = [
  { year: '2020', event: 'Anabyn Global Ventures LLP incorporated in Kerala.' },
  { year: '2021', event: 'Achieved ISO 9001:2015 certification and expanded textile exports.' },
  { year: '2022', event: 'Launched medical supplies division with CE and FDA compliance.' },
  { year: '2023', event: 'Fulfilled over 300+ orders across 15+ countries.' },
  { year: '2024', event: 'Enhanced digital supply chain tracking for global procurement partners.' }
];

export default function AboutUsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-20 bg-secondary/30 pt-32">
        <div className="container max-w-5xl mx-auto space-y-12 px-4">
          <Card className="border-none shadow-none bg-transparent">
            <CardHeader className="text-center">
              <Badge variant="outline" className="w-fit mx-auto text-accent border-accent mb-4">Anabyn Global Ventures LLP</Badge>
              <h1 className="text-4xl md:text-5xl font-bold font-playfair text-brand-navy">Your Trusted Export Partner for Quality Indian Products</h1>
              <CardDescription className="mt-6 text-lg max-w-3xl mx-auto">
                Anabyn Global Ventures is a global sourcing and export company committed to delivering India’s finest products to businesses around the world. With a strong network of top-tier manufacturers, we ensure unmatched product quality, competitive pricing, and seamless logistics.
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
                <p className="text-muted-foreground">To empower global businesses by providing seamless access to India’s highest quality products—delivered with trust, transparency, and unmatched efficiency.</p>
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
                <p className="text-muted-foreground">To become the world’s most trusted bridge between India’s manufacturing excellence and global market demand—transforming how businesses source internationally.</p>
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
                      <p className="text-sm text-muted-foreground mt-1">
                        Anabyn Global Ventures LLP,<br />
                        Tharupedikayil complex, Anchapalam, Kodungallur,<br />
                        Kerala, India - 680669
                      </p>
                      <a 
                        href="https://share.google/7Ija9vAhL3zQXiHY4" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[10px] font-black uppercase text-accent mt-2 inline-flex items-center gap-1 hover:underline"
                      >
                        View on Google Maps <ExternalLink size={10} />
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy uppercase text-[10px] tracking-widest">Company Identifiers</h4>
                      <p className="text-sm text-muted-foreground mt-1">CIN: AAA-1234-LLP<br />IEC: AANCA1234F<br />MSME: UDYAM-KL-01-XXXX</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Landmark className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy uppercase text-[10px] tracking-widest">Financial Reference</h4>
                      <button className="text-sm text-accent font-bold mt-1 flex items-center gap-1 hover:underline">
                        Download Bank Reference Statement <Landmark className="w-3 h-3" />
                      </button>
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
                        <p className="text-sm text-muted-foreground">{item.event}</p>
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

          <Card className="border-accent/20">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-playfair text-brand-navy">What We Do</CardTitle>
            </CardHeader>
            <CardContent className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                {whatWeDo.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-brand-navy/5">
                      <item.icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-navy">{item.title}</h3>
                      <p className="text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
