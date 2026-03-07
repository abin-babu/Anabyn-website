
'use client';

import { useState, useEffect } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { countries } from '@/lib/countries';
import { Globe, MapPin, ShieldCheck } from 'lucide-react';

export function CountrySelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    const hasSelected = localStorage.getItem('sourcing_country');
    if (!hasSelected) {
      const timer = setTimeout(() => setIsOpen(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSave = () => {
    if (selectedCountry) {
      localStorage.setItem('sourcing_country', selectedCountry);
      setIsOpen(false);
      window.location.reload(); // Refresh to apply personalization
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md p-0 overflow-hidden border-none shadow-2xl rounded-[2rem] bg-brand-navy text-white">
        <div className="relative p-8">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold opacity-10 rounded-full translate-x-16 -translate-y-16" />
          
          <DialogHeader className="mb-8">
            <div className="w-16 h-16 rounded-2xl bg-brand-gold flex items-center justify-center mb-6 shadow-xl">
              <Globe className="text-brand-navy w-8 h-8" />
            </div>
            <DialogTitle className="text-3xl font-playfair font-bold text-white mb-2">Welcome to Anabyn</DialogTitle>
            <DialogDescription className="text-brand-gold-light/70 text-lg">
              To provide you with specific logistics and compliance data, where are you sourcing for?
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 relative z-10">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-brand-gold ml-1">Destination Market</label>
              <Select onValueChange={setSelectedCountry} value={selectedCountry}>
                <SelectTrigger className="h-14 bg-white/10 border-white/20 text-white rounded-xl text-lg">
                  <SelectValue placeholder="Select your country" />
                </SelectTrigger>
                <SelectContent className="max-h-60">
                  {countries.map(c => (
                    <SelectItem key={c} value={c}>{c}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="bg-white/5 border border-white/10 p-4 rounded-xl space-y-3">
              <div className="flex items-center gap-2 text-xs font-medium text-brand-gold-light/60">
                <ShieldCheck className="w-4 h-4 text-brand-gold" />
                Local Compliance Verification
              </div>
              <div className="flex items-center gap-2 text-xs font-medium text-brand-gold-light/60">
                <MapPin className="w-4 h-4 text-brand-gold" />
                Region-Specific Logistics
              </div>
            </div>
          </div>

          <DialogFooter className="mt-10 sm:justify-start">
            <Button 
              onClick={handleSave} 
              disabled={!selectedCountry}
              className="w-full h-14 bg-brand-gold text-brand-navy font-black text-lg rounded-xl shadow-2xl hover:scale-[1.02] transition-transform"
            >
              Enter Global Catalogue
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
