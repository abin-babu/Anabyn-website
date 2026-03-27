'use client';

import { VideoCard } from '@/components/video-card';

export function ProcessVideoSection() {
  return (
    <section className="py-24 bg-[#0A1628] overflow-hidden relative border-y border-white/5">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-white">See Our Process in Action</h2>
          <p className="text-white/60 text-lg">
            Watch how we craft and export premium textiles — from the technical precision of the loom to the final loading dock audits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <VideoCard 
            youtubeId="PLACEHOLDER_FACTORY_TOUR"
            title="Factory Tour — Kerala Manufacturing Facility"
            description="Go inside our Thrissur facility to see the high-speed weaving and GSM calibration process."
            duration="3 MIN"
            thumbnail="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80"
          />
          <VideoCard 
            youtubeId="PLACEHOLDER_QC_PROCESS"
            title="AQL Quality Inspection Process"
            description="Witness our AQL 2.5 auditing standards including tensile tests and moisture checks."
            duration="2 MIN"
            thumbnail="https://images.unsplash.com/photo-1526290766257-c015850e4629?w=800&q=80"
          />
        </div>
      </div>
      
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
    </section>
  );
}
