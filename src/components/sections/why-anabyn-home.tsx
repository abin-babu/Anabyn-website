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
            <Card key={i} className="border-none shadow-none text-center bg-transparent group hover:bg-secondary/5 rounded-3xl p-4 transition-all">
              <CardHeader className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-[2.5rem] bg-[#1B3A8A]/5 flex items-center justify-center mb-6 group-hover:bg-[#1B3A8A] transition-all duration-500">
                  <item.icon className="w-10 h-10 text-[#C9A243]" />
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
