'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert("Thank you! Your enquiry has been received. Anabyn Global Ventures LLP will respond within 24 hours. You can also reach us directly: 📧 sales@anabyn.com 📱 +91 94956 13121");
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12 fade-up">
            <div>
              <span className="text-[#1B45CC] font-bold text-xs uppercase tracking-widest">Connect With Us</span>
              <h2 className="text-5xl font-playfair font-bold text-[#0D1B3E] mt-4 mb-8 leading-tight">
                Ready to Source? <br /> Let's Talk.
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
                Whether you need a price list, product samples, or a full export proposal — our team at Anabyn Global Ventures LLP responds within 24 hours.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-[#1B45CC]/10 flex items-center justify-center shrink-0 group-hover:bg-[#1B45CC] transition-colors">
                  <i className="fa-solid fa-envelope text-[#1B45CC] text-xl group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0D1B3E] mb-1 uppercase text-[10px] tracking-[0.2em]">Email Address</h4>
                  <a href="mailto:sales@anabyn.com" className="text-gray-600 font-medium hover:text-[#1B45CC] text-lg">sales@anabyn.com</a>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 flex items-center justify-center shrink-0 group-hover:bg-[#25D366] transition-colors">
                  <i className="fa-brands fa-whatsapp text-[#25D366] text-2xl group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0D1B3E] mb-1 uppercase text-[10px] tracking-[0.2em]">WhatsApp / Call</h4>
                  <p className="text-gray-600 font-medium text-lg">+91 94956 13121</p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-[#C8A020]/10 flex items-center justify-center shrink-0 group-hover:bg-[#C8A020] transition-colors">
                  <i className="fa-solid fa-location-dot text-[#C8A020] text-xl group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0D1B3E] mb-1 uppercase text-[10px] tracking-[0.2em]">Location</h4>
                  <p className="text-gray-600 font-medium text-lg">India — Exporting Worldwide</p>
                </div>
              </div>
            </div>
          </div>

          <div className="fade-up">
            <Card className="bg-[#F5F7FA] border-none shadow-2xl rounded-3xl p-4 md:p-8">
               <CardHeader className="text-center md:text-left pb-8">
                  <CardTitle className="text-2xl font-playfair font-bold text-[#0D1B3E]">Request a Quote</CardTitle>
               </CardHeader>
               <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input placeholder="Your Name*" required className="bg-white border-none h-12 rounded-xl" />
                      <Input placeholder="Company Name*" required className="bg-white border-none h-12 rounded-xl" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input type="email" placeholder="Email Address*" required className="bg-white border-none h-12 rounded-xl" />
                      <Input placeholder="Phone / WhatsApp" className="bg-white border-none h-12 rounded-xl" />
                    </div>
                    <Input placeholder="Country*" required className="bg-white border-none h-12 rounded-xl" />
                    <Select required>
                      <SelectTrigger className="bg-white border-none h-12 rounded-xl">
                        <SelectValue placeholder="Product Category*" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sheets">Hotel Bed Sheets</SelectItem>
                        <SelectItem value="towels">Hotel Towels</SelectItem>
                        <SelectItem value="uniforms">Hospitality Uniforms</SelectItem>
                        <SelectItem value="syringes">Syringes & IV Sets</SelectItem>
                        <SelectItem value="gloves">Surgical Gloves</SelectItem>
                        <SelectItem value="beds">Hospital Beds</SelectItem>
                        <SelectItem value="multiple">Multiple / Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <Textarea placeholder="Tell us about your requirements (Sizes, Quantities, Customization)..." required className="bg-white border-none min-h-[150px] rounded-xl" />
                    <Button 
                      type="submit" 
                      className="w-full h-14 bg-[#1B45CC] hover:bg-[#2350D4] text-white font-bold rounded-xl text-lg transition-all shadow-xl"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Processing...' : 'Send Enquiry'}
                    </Button>
                  </form>
               </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
