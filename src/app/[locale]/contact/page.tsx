
'use client';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/hero-section';
import { InquiryForm } from '@/components/inquiry-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        <HeroSection 
          badge="Global Sourcing Desk"
          title="Let's Start a"
          highlightedTitle="Partnership"
          description="Whether you need a full export proposal, product samples, or a technical consultation, our experts respond within 24 business hours."
          backgroundImage="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1600&q=80"
        />

        <section className="py-24 bg-[#F5EDD6]/30">
          <div className="container px-4 mx-auto">
            <div className="grid lg:grid-cols-[400px_1fr] gap-16">
              {/* Contact Info */}
              <div className="space-y-12">
                <div className="space-y-6">
                  <h2 className="text-3xl font-playfair font-bold text-brand-navy">Contact Intelligence</h2>
                  <p className="text-gray-600 leading-relaxed">Direct manufacturer access for global procurement departments.</p>
                </div>

                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-navy text-brand-gold flex items-center justify-center shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy uppercase text-[10px] tracking-widest mb-1">Email Sales</h4>
                      <a href="mailto:sales@anabyn.com" className="text-lg font-medium hover:text-brand-gold transition-colors">sales@anabyn.com</a>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-navy text-brand-gold flex items-center justify-center shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy uppercase text-[10px] tracking-widest mb-1">WhatsApp / Call</h4>
                      <a href="tel:+919495613121" className="text-lg font-medium hover:text-brand-gold transition-colors">+91 94956 13121</a>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-navy text-brand-gold flex items-center justify-center shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy uppercase text-[10px] tracking-widest mb-1">Headquarters</h4>
                      <p className="text-gray-600">Thiruvananthapuram, Kerala, India</p>
                    </div>
                  </div>
                </div>

                <Card className="bg-brand-navy text-white p-8 border-none shadow-2xl rounded-3xl relative overflow-hidden">
                  <Globe className="absolute -bottom-4 -right-4 w-24 h-24 text-white/5" />
                  <h3 className="text-xl font-playfair font-bold mb-4">Export Capacity</h3>
                  <p className="text-sm text-white/60 mb-6">We maintain regular containers sailings to 50+ countries from primary Indian hubs.</p>
                  <div className="flex flex-wrap gap-2">
                    {['UK', 'USA', 'UAE', 'EU', 'AU'].map(m => (
                      <span key={m} className="px-2 py-1 bg-white/10 rounded text-[9px] font-bold uppercase">{m}</span>
                    ))}
                  </div>
                </Card>
              </div>

              {/* Inquiry Form */}
              <div>
                <Card className="border-brand-gold/20 shadow-2xl rounded-[2.5rem] bg-white overflow-hidden">
                  <CardHeader className="bg-brand-navy text-white p-10 text-center">
                    <CardTitle className="text-3xl font-playfair">Detailed Inquiry</CardTitle>
                    <CardDescription className="text-white/60">Provide technical specs for a priority quote.</CardDescription>
                  </CardHeader>
                  <CardContent className="p-10">
                    <InquiryForm />
                  </CardContent>
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
