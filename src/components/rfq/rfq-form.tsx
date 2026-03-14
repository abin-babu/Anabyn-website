
'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  Loader2, 
  Package, 
  Globe, 
  User, 
  Mail,
  Phone,
  Send,
  MessageSquare
} from 'lucide-react';
import { 
  collection, 
  addDoc, 
  serverTimestamp 
} from 'firebase/firestore';
import { useFirebase } from '@/firebase';
import { countries } from '@/lib/countries';
import { products as catalog } from '@/lib/products';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useRouter, useSearchParams } from 'next/navigation';

const rfqFormSchema = z.object({
  // Step 1: Requirements (All Optional)
  category: z.string().optional(),
  product: z.string().optional(),
  quantity: z.coerce.number().optional().default(0),
  unit: z.string().optional().default('Pieces'),
  oem: z.boolean().default(false),
  notes: z.string().optional(),
  // Step 2: Contact (3 Mandatory)
  email: z.string().email('Valid email required'),
  whatsapp: z.string().min(8, 'Valid contact number required'),
  destinationCountry: z.string().min(1, 'Please select your country'),
  // Step 2: Optional Contact
  name: z.string().optional(),
  company: z.string().optional(),
});

type RFQFormData = z.infer<typeof rfqFormSchema>;

export function RFQForm() {
  const { firestore } = useFirebase();
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialProduct = searchParams.get('product');

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<RFQFormData>({
    resolver: zodResolver(rfqFormSchema),
    defaultValues: {
      category: '',
      product: initialProduct || '',
      quantity: 0,
      unit: 'Pieces',
      oem: false,
      destinationCountry: '',
      email: '',
      whatsapp: '',
      name: '',
      company: '',
      notes: '',
    },
  });

  const selectedCategory = form.watch('category');
  const filteredProducts = catalog.filter(p => p.category === selectedCategory || !selectedCategory);

  useEffect(() => {
    if (initialProduct) {
      const prod = catalog.find(p => p.name === initialProduct);
      if (prod) {
        form.setValue('category', prod.category);
        form.setValue('product', prod.name);
      }
    }
  }, [initialProduct, form]);

  const nextStep = async () => {
    // No mandatory fields in Step 1, so we can always proceed
    setStep(2);
  };

  const prevStep = () => setStep(1);

  const onSubmit = async (data: RFQFormData) => {
    if (!firestore) return;
    setIsSubmitting(true);

    try {
      const rfqId = `AGV-2026-${Math.floor(1000 + Math.random() * 9000)}`;

      const submission = {
        rfqId,
        category: data.category || 'General',
        product: data.product || 'Not Specified',
        quantity: data.quantity || 0,
        unit: data.unit || 'Pieces',
        destinationCountry: data.destinationCountry,
        customization: {
          oem: data.oem,
          notes: data.notes || ''
        },
        userDetails: {
          name: data.name || 'Anonymous',
          company: data.company || 'Not Specified',
          email: data.email,
          whatsapp: data.whatsapp,
          country: data.destinationCountry,
        },
        status: 'New',
        createdAt: serverTimestamp(),
      };

      await addDoc(collection(firestore, 'rfq_submissions'), submission);
      
      toast({
        title: 'Quote Request Submitted!',
        description: `Your reference ID is ${rfqId}.`,
      });

      router.push(`/request-quote/success?id=${rfqId}`);
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Submission Failed',
        description: error.message || 'Something went wrong.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Progress Stepper */}
      <div className="flex items-center justify-center gap-4 mb-12 px-4">
        <div className={cn(
          "h-1.5 w-24 rounded-full transition-all",
          step >= 1 ? "bg-brand-gold" : "bg-muted"
        )} />
        <div className={cn(
          "h-1.5 w-24 rounded-full transition-all",
          step >= 2 ? "bg-brand-gold" : "bg-muted"
        )} />
      </div>

      <Card className="border-brand-gold/20 shadow-2xl overflow-hidden bg-white">
        <CardHeader className="bg-brand-navy text-white p-8">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-2xl font-playfair">
                {step === 1 ? 'Quote Requirements' : 'Final Submission'}
              </CardTitle>
              <CardDescription className="text-white/60">
                {step === 1 ? 'Step 1: Tell us what you are looking for' : 'Step 2: Where should we send your quote?'}
              </CardDescription>
            </div>
            <Badge className="bg-brand-gold text-brand-navy px-4 py-1">Direct Pricing</Badge>
          </div>
        </CardHeader>

        <CardContent className="p-8">
          <form className="space-y-8">
            {/* STEP 1: REQUIREMENTS */}
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em]">Product Category (Optional)</Label>
                    <Select 
                      onValueChange={(val) => {
                        form.setValue('category', val);
                        form.setValue('product', '');
                      }} 
                      value={selectedCategory}
                    >
                      <SelectTrigger className="h-14 border-brand-gold/20 rounded-xl">
                        <SelectValue placeholder="All Categories" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hospitality-supplies">Hospitality Supplies</SelectItem>
                        <SelectItem value="medical-supplies">Medical Supplies</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em]">Specific Product (Optional)</Label>
                    <Select onValueChange={(val) => form.setValue('product', val)} value={form.watch('product')}>
                      <SelectTrigger className="h-14 border-brand-gold/20 rounded-xl">
                        <SelectValue placeholder="Choose Product" />
                      </SelectTrigger>
                      <SelectContent>
                        {filteredProducts.map(p => (
                          <SelectItem key={p.id} value={p.name}>{p.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em]">Target Qty (Optional)</Label>
                    <Input 
                      type="number" 
                      placeholder="0"
                      className="h-14 border-brand-gold/20 rounded-xl"
                      {...form.register('quantity')}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em]">Unit</Label>
                    <Select onValueChange={(val) => form.setValue('unit', val)} value={form.watch('unit')}>
                      <SelectTrigger className="h-14 border-brand-gold/20 rounded-xl">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Pieces">Pieces</SelectItem>
                        <SelectItem value="KGs">KGs</SelectItem>
                        <SelectItem value="Sets">Sets</SelectItem>
                        <SelectItem value="Cartons">Cartons</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="flex items-center justify-between p-5 bg-secondary/20 rounded-2xl border border-brand-gold/10">
                  <div className="space-y-0.5">
                    <Label className="text-base font-bold text-brand-navy">Private Label / OEM?</Label>
                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-tight">Add your logo and custom packaging</p>
                  </div>
                  <Switch 
                    checked={form.watch('oem')} 
                    onCheckedChange={(val) => form.setValue('oem', val)}
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em]">Custom Specs / Requirements (Optional)</Label>
                  <Textarea 
                    className="min-h-[120px] border-brand-gold/20 rounded-2xl p-4" 
                    {...form.register('notes')} 
                    placeholder="Tell us about your sizing, weight (GSM), colors or packaging needs..." 
                  />
                </div>
              </div>
            )}

            {/* STEP 2: CONTACT (MANDATORY) */}
            {step === 2 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="bg-brand-gold/5 p-6 rounded-[2rem] border border-brand-gold/20">
                  <p className="text-xs font-bold text-brand-navy/60 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                    <Check className="text-brand-gold w-4 h-4" /> Required Information
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase text-brand-navy tracking-[0.2em]">Work Email *</Label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" />
                        <Input 
                          type="email" 
                          placeholder="procurement@company.com" 
                          className={cn(
                            "h-14 pl-12 border-brand-gold/20 rounded-xl",
                            form.formState.errors.email && "border-destructive ring-destructive"
                          )}
                          {...form.register('email')}
                        />
                      </div>
                      {form.formState.errors.email && <p className="text-[10px] text-destructive font-bold uppercase">{form.formState.errors.email.message}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase text-brand-navy tracking-[0.2em]">WhatsApp / Phone *</Label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold" />
                        <Input 
                          placeholder="+1 234 567 890" 
                          className={cn(
                            "h-14 pl-12 border-brand-gold/20 rounded-xl",
                            form.formState.errors.whatsapp && "border-destructive ring-destructive"
                          )}
                          {...form.register('whatsapp')}
                        />
                      </div>
                      {form.formState.errors.whatsapp && <p className="text-[10px] text-destructive font-bold uppercase">{form.formState.errors.whatsapp.message}</p>}
                    </div>

                    <div className="md:col-span-2 space-y-2">
                      <Label className="text-[10px] font-black uppercase text-brand-navy tracking-[0.2em]">Destination Market *</Label>
                      <div className="relative">
                        <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold z-10" />
                        <Select 
                          onValueChange={(val) => form.setValue('destinationCountry', val)} 
                          value={form.watch('destinationCountry')}
                        >
                          <SelectTrigger className={cn(
                            "h-14 pl-12 border-brand-gold/20 rounded-xl",
                            form.formState.errors.destinationCountry && "border-destructive"
                          )}>
                            <SelectValue placeholder="Select Destination Country" />
                          </SelectTrigger>
                          <SelectContent className="max-h-60">
                            {countries.map(c => (
                              <SelectItem key={c} value={c}>{c}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      {form.formState.errors.destinationCountry && <p className="text-[10px] text-destructive font-bold uppercase">{form.formState.errors.destinationCountry.message}</p>}
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] mb-6 pl-2">Optional Company Details</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em]">Full Name</Label>
                      <Input 
                        placeholder="John Doe" 
                        className="h-14 border-gray-100 rounded-xl"
                        {...form.register('name')}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em]">Company Name</Label>
                      <Input 
                        placeholder="Hospitality Group" 
                        className="h-14 border-gray-100 rounded-xl"
                        {...form.register('company')}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </form>
        </CardContent>

        <CardFooter className="p-8 bg-muted/20 border-t flex justify-between">
          {step === 2 ? (
            <Button 
              variant="outline" 
              onClick={prevStep} 
              disabled={isSubmitting}
              className="h-14 border-brand-gold/30 px-8 rounded-xl font-black text-xs"
            >
              <ChevronLeft className="mr-2 w-4 h-4" /> Adjust Needs
            </Button>
          ) : (
            <div />
          )}

          {step === 1 ? (
            <Button 
              onClick={nextStep} 
              className="h-14 bg-brand-navy hover:bg-brand-navy/90 text-white px-12 font-black text-xs rounded-xl shadow-xl shadow-brand-navy/20"
            >
              Next Step <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          ) : (
            <Button 
              onClick={form.handleSubmit(onSubmit)} 
              disabled={isSubmitting}
              className="h-14 bg-brand-gold text-brand-navy hover:bg-brand-gold/90 px-12 font-black text-sm rounded-xl shadow-xl shadow-brand-gold/20"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Syncing...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" /> Request Quote Now
                </>
              )}
            </Button>
          )}
        </CardFooter>
      </Card>
      
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-8 opacity-60">
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-navy">
          <Check className="w-4 h-4 text-success" /> 24h Response Time
        </div>
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-navy">
          <Check className="w-4 h-4 text-success" /> ISO 9001 Process
        </div>
        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-brand-navy">
          <Check className="w-4 h-4 text-success" /> Global Logistics
        </div>
      </div>
    </div>
  );
}
