
'use client';

import { InquiryForm } from '@/components/inquiry-form';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12 reveal">
            <div>
              <span className="text-[#1B45CC] font-bold text-xs uppercase tracking-widest">Connect With Us</span>
              <h2 className="text-5xl font-playfair font-bold text-[#0D1B3E] mt-4 mb-6 leading-tight">
                Ready to Source? <br /> Let's Talk.
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
                Whether you're looking for a one-time shipment or a long-term strategic sourcing partner, our team is ready to assist you with competitive quotes and expert guidance.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-xl bg-[#1B45CC]/10 flex items-center justify-center shrink-0 group-hover:bg-[#1B45CC] transition-colors">
                  <i className="fa-solid fa-envelope text-[#1B45CC] text-xl group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0D1B3E] mb-1 uppercase text-xs tracking-widest">Email</h4>
                  <a href="mailto:sales@anabyn.com" className="text-gray-600 font-medium hover:text-[#1B45CC]">sales@anabyn.com</a>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-xl bg-[#1B45CC]/10 flex items-center justify-center shrink-0 group-hover:bg-[#1B45CC] transition-colors">
                  <i className="fa-brands fa-whatsapp text-[#1B45CC] text-2xl group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0D1B3E] mb-1 uppercase text-xs tracking-widest">WhatsApp / Call</h4>
                  <p className="text-gray-600 font-medium">+91 94956 13121</p>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-xl bg-[#1B45CC]/10 flex items-center justify-center shrink-0 group-hover:bg-[#1B45CC] transition-colors">
                  <i className="fa-solid fa-location-dot text-[#1B45CC] text-xl group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0D1B3E] mb-1 uppercase text-xs tracking-widest">Location</h4>
                  <p className="text-gray-600 font-medium">India — Exporting Worldwide</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="bg-[#F5F7FA] p-10 rounded-3xl shadow-lg border border-gray-100">
               <InquiryForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
