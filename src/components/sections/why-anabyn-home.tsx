'use client';

import { Scissors, Ship, Handshake } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    title: 'Premium Craft',
    desc: 'Finest Indian cotton, precision-woven, inspected to AQL 2.5 standard.',
    icon: Scissors,
  },
  {
    title: 'Complete Export Service',
    desc: 'End-to-end — from factory floor to your warehouse, documentation included.',
    icon: Ship,
  },
  {
    title: 'True Partnership',
    desc: 'Dedicated account manager, sample programme, private label capability.',
    icon: Handshake,
  },
];

export function WhyAnabynHome() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-3 gap-12 reveal-stagger">
          {features.map((item, i) => (
            <Card key={i} className="feature-card text-center border-none">
              <CardHeader className="flex flex-col items-center pb-2">
                <div className="feature-icon-wrapper">
                  <item.icon className="feature-icon" />
                </div>
                <CardTitle className="text-2xl font-playfair font-bold text-[#060A14]">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 font-medium leading-relaxed max-w-xs mx-auto">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
