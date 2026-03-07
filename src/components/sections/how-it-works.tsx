
'use client';

import { MessageSquare, ClipboardCheck, Factory, Ship, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Submit Inquiry',
    desc: 'Detail your requirements via our RFQ builder. Our experts review tech specs within 24 hours.',
    icon: MessageSquare
  },
  {
    id: '02',
    title: 'Sample Evaluation',
    desc: 'We ship verified physical samples to your doorstep for quality and material evaluation.',
    icon: ClipboardCheck
  },
  {
    id: '03',
    title: 'Production & QC',
    desc: '3-stage production monitoring ensures 100% adherence to your approved master sample.',
    icon: Factory
  },
  {
    id: '04',
    title: 'Global Dispatch',
    desc: 'Seamless door-to-door or port-to-port logistics with real-time documentation tracking.',
    icon: Ship
  }
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-brand-gold-light/10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-gold font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Our Methodology</span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-brand-navy mb-6">Streamlined Export Workflow</h2>
          <p className="text-muted-foreground text-lg">We remove the complexity of international sourcing with a transparent, audited process.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.id} className="relative group">
              <div className="bg-white p-8 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 border border-brand-gold/5 h-full relative z-10">
                <span className="text-6xl font-playfair font-bold text-brand-gold/10 absolute top-4 right-6 group-hover:text-brand-gold/20 transition-colors">{step.id}</span>
                <div className="w-14 h-14 rounded-2xl bg-brand-navy/5 flex items-center justify-center mb-8 group-hover:bg-brand-navy group-hover:text-white transition-colors duration-500">
                  <step.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-brand-navy mb-4">{step.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 translate-y-[-50%] z-0 text-brand-gold/30">
                  <ArrowRight className="w-8 h-8" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
