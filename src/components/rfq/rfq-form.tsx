
'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  Upload, 
  Loader2, 
  Package, 
  Globe, 
  Calendar as CalendarIcon, 
  User, 
  Building2, 
  FileCheck,
  Send
} from 'lucide-react';
import { format } from 'date-fns';
import { 
  collection, 
  addDoc, 
  serverTimestamp, 
  query, 
  where, 
  getDocs 
} from 'firebase/firestore';
import { 
  ref, 
  uploadBytes, 
  getDownloadURL 
} from 'firebase/storage';
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
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useRouter, useSearchParams } from 'next/navigation';

const rfqFormSchema = z.object({
  // Step 1
  category: z.string().min(1, 'Required'),
  product: z.string().min(1, 'Required'),
  quantity: z.coerce.number().min(1, 'Minimum 1'),
  unit: z.string().min(1, 'Required'),
  destinationCountry: z.string().min(1, 'Required'),
  deliveryDate: z.date(),
  incoterm: z.string().min(1, 'Required'),
  // Step 2
  oem: z.boolean().default(false),
  customSize: z.string().optional(),
  customColor: z.string().optional(),
  certifications: z.array(z.string()).default([]),
  sampleRequired: z.boolean().default(false),
  referenceImage: z.any().optional(),
  // Step 3
  name: z.string().min(2, 'Required'),
  company: z.string().min(2, 'Required'),
  designation: z.string().min(2, 'Required'),
  email: z.string().email('Invalid email'),
  whatsapp: z.string().min(8, 'Invalid number'),
  source: z.string().min(1, 'Required'),
  notes: z.string().optional(),
});

type RFQFormData = z.infer<typeof rfqFormSchema>;

export function RFQForm() {
  const { firestore, storage } = useFirebase();
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialProduct = searchParams.get('product');

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const form = useForm<RFQFormData>({
    resolver: zodResolver(rfqFormSchema),
    defaultValues: {
      category: '',
      product: initialProduct || '',
      quantity: 100,
      unit: 'Pieces',
      destinationCountry: '',
      deliveryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
      incoterm: 'DDP',
      oem: false,
      certifications: [],
      sampleRequired: false,
      source: 'Google Search',
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
    const fieldsByStep: Record<number, (keyof RFQFormData)[]> = {
      1: ['category', 'product', 'quantity', 'unit', 'destinationCountry', 'deliveryDate', 'incoterm'],
      2: ['oem', 'customSize', 'customColor', 'certifications', 'sampleRequired'],
      3: ['name', 'company', 'designation', 'email', 'whatsapp', 'source', 'notes'],
    };

    const isStepValid = await form.trigger(fieldsByStep[step]);
    if (isStepValid) setStep(prev => prev + 1);
  };

  const prevStep = () => setStep(prev => prev - 1);

  const onSubmit = async (data: RFQFormData) => {
    if (!firestore) return;
    setIsSubmitting(true);

    try {
      let referenceImageUrl = '';
      if (imageFile && storage) {
        const storageRef = ref(storage, `rfq_images/${Date.now()}_${imageFile.name}`);
        const uploadResult = await uploadBytes(storageRef, imageFile);
        referenceImageUrl = await getDownloadURL(uploadResult.ref);
      }

      const rfqId = `AGV-2026-${Math.floor(1000 + Math.random() * 9000)}`;

      const submission = {
        rfqId,
        category: data.category,
        product: data.product,
        quantity: data.quantity,
        unit: data.unit,
        destinationCountry: data.destinationCountry,
        deliveryDate: data.deliveryDate.toISOString(),
        incoterm: data.incoterm,
        customization: {
          oem: data.oem,
          customSize: data.customSize || 'Standard',
          customColor: data.customColor || 'Standard',
          certifications: data.certifications,
          sampleRequired: data.sampleRequired,
          referenceImageUrl
        },
        userDetails: {
          name: data.name,
          company: data.company,
          designation: data.designation,
          email: data.email,
          whatsapp: data.whatsapp,
          country: data.destinationCountry,
          source: data.source,
          notes: data.notes || ''
        },
        status: 'New',
        createdAt: serverTimestamp(),
        // Support for Trigger Email extension if enabled
        mail: {
          to: data.email,
          message: {
            subject: `Request for Quote Received: ${rfqId}`,
            html: `
              <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
                <h2 style="color: #0D1F3C;">Thank You for Your RFQ</h2>
                <p>Hi ${data.name},</p>
                <p>We've received your request for quote for <strong>${data.product}</strong>. Our team will review your requirements and respond within 24 hours.</p>
                <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
                  <p style="margin: 0; font-size: 14px; color: #666;">Quote Reference:</p>
                  <p style="margin: 5px 0 0 0; font-weight: bold; font-size: 18px; color: #C9A84C;">${rfqId}</p>
                </div>
                <p><strong>Quantity:</strong> ${data.quantity} ${data.unit}</p>
                <p><strong>Destination:</strong> ${data.destinationCountry}</p>
                <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
                <p style="font-size: 12px; color: #999;">Anabyn Global Ventures LLP • Thiruvananthapuram, Kerala, India</p>
              </div>
            `
          }
        }
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

  const steps = [
    { id: 1, label: 'Requirements', icon: Package },
    { id: 2, label: 'Customization', icon: FileCheck },
    { id: 3, label: 'Your Details', icon: User },
    { id: 4, label: 'Review', icon: Check },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Progress Stepper */}
      <div className="flex items-center justify-between mb-12 px-4">
        {steps.map((s, i) => (
          <div key={s.id} className="flex flex-col items-center relative flex-1">
            <div className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center transition-all z-10",
              step >= s.id ? "bg-brand-gold text-brand-navy shadow-lg" : "bg-muted text-muted-foreground"
            )}>
              {step > s.id ? <Check className="w-5 h-5" /> : <s.icon className="w-5 h-5" />}
            </div>
            <span className={cn(
              "mt-2 text-[10px] uppercase font-bold tracking-widest hidden md:block",
              step >= s.id ? "text-brand-navy" : "text-muted-foreground"
            )}>
              {s.label}
            </span>
            {i < steps.length - 1 && (
              <div className={cn(
                "absolute top-5 left-[50%] w-full h-[2px] -z-0",
                step > s.id ? "bg-brand-gold" : "bg-muted"
              )} />
            )}
          </div>
        ))}
      </div>

      <Card className="border-brand-gold/20 shadow-2xl overflow-hidden bg-white">
        <CardHeader className="bg-brand-navy text-white p-8">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-2xl font-playfair">
                {steps.find(s => s.id === step)?.label}
              </CardTitle>
              <CardDescription className="text-white/60">
                Step {step} of 4 — Tell us what you need
              </CardDescription>
            </div>
            <Badge className="bg-brand-gold text-brand-navy px-4 py-1">B2B Priority</Badge>
          </div>
        </CardHeader>

        <CardContent className="p-8">
          <form className="space-y-8">
            {/* STEP 1: REQUIREMENTS */}
            {step === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase text-muted-foreground tracking-widest">Product Category</Label>
                  <Select 
                    onValueChange={(val) => {
                      form.setValue('category', val);
                      form.setValue('product', '');
                    }} 
                    value={selectedCategory}
                  >
                    <SelectTrigger className="h-12 border-brand-gold/20">
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hospitality-supplies">Hospitality Supplies</SelectItem>
                      <SelectItem value="medical-supplies">Medical Supplies</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase text-muted-foreground tracking-widest">Specific Product</Label>
                  <Select onValueChange={(val) => form.setValue('product', val)} value={form.watch('product')}>
                    <SelectTrigger className="h-12 border-brand-gold/20" disabled={!selectedCategory}>
                      <SelectValue placeholder="Choose Product" />
                    </SelectTrigger>
                    <SelectContent>
                      {filteredProducts.map(p => (
                        <SelectItem key={p.id} value={p.name}>{p.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase text-muted-foreground tracking-widest">Quantity</Label>
                    <Input 
                      type="number" 
                      className="h-12 border-brand-gold/20"
                      {...form.register('quantity')}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase text-muted-foreground tracking-widest">Unit</Label>
                    <Select onValueChange={(val) => form.setValue('unit', val)} value={form.watch('unit')}>
                      <SelectTrigger className="h-12 border-brand-gold/20">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Pieces">Pieces</SelectItem>
                        <SelectItem value="KGs">KGs</SelectItem>
                        <SelectItem value="Meters">Meters</SelectItem>
                        <SelectItem value="Cartons">Cartons</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase text-muted-foreground tracking-widest">Destination Country</Label>
                  <Select onValueChange={(val) => form.setValue('destinationCountry', val)} value={form.watch('destinationCountry')}>
                    <SelectTrigger className="h-12 border-brand-gold/20">
                      <SelectValue placeholder="Select Country" />
                    </SelectTrigger>
                    <SelectContent className="max-h-60">
                      {countries.map(c => (
                        <SelectItem key={c} value={c}>{c}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase text-muted-foreground tracking-widest">Required By Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full h-12 justify-start text-left font-normal border-brand-gold/20",
                          !form.watch('deliveryDate') && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {form.watch('deliveryDate') ? format(form.watch('deliveryDate'), "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={form.watch('deliveryDate')}
                        onSelect={(date) => date && form.setValue('deliveryDate', date)}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase text-muted-foreground tracking-widest">Preferred Incoterm</Label>
                  <Select onValueChange={(val) => form.setValue('incoterm', val)} value={form.watch('incoterm')}>
                    <SelectTrigger className="h-12 border-brand-gold/20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="EXW">EXW (Ex Works)</SelectItem>
                      <SelectItem value="FOB">FOB (Free on Board)</SelectItem>
                      <SelectItem value="CIF">CIF (Cost, Insurance & Freight)</SelectItem>
                      <SelectItem value="DDP">DDP (Delivered Duty Paid)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {/* STEP 2: CUSTOMIZATION */}
            {step === 2 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="flex items-center justify-between p-4 bg-secondary/20 rounded-xl border border-brand-gold/10">
                  <div className="space-y-0.5">
                    <Label className="text-base font-bold text-brand-navy">OEM / Private Label Required?</Label>
                    <p className="text-xs text-muted-foreground italic">Add your brand logo and custom packaging</p>
                  </div>
                  <Switch 
                    checked={form.watch('oem')} 
                    onCheckedChange={(val) => form.setValue('oem', val)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase text-muted-foreground tracking-widest">Custom Size Required?</Label>
                    <Input 
                      placeholder="e.g. 200x240cm or XL Wide" 
                      className="h-12 border-brand-gold/20"
                      {...form.register('customSize')}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-xs font-bold uppercase text-muted-foreground tracking-widest">Custom Color / Branding</Label>
                    <Input 
                      placeholder="e.g. Pantone 19-4052 or Golden Logo" 
                      className="h-12 border-brand-gold/20"
                      {...form.register('customColor')}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <Label className="text-xs font-bold uppercase text-muted-foreground tracking-widest">Certifications Needed for Destination</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['CE', 'FDA', 'SASO', 'GOTS', 'ISO', 'OEKO-TEX'].map(cert => (
                      <div key={cert} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`cert-${cert}`} 
                          checked={form.watch('certifications').includes(cert)}
                          onCheckedChange={(checked) => {
                            const current = form.getValues('certifications');
                            if (checked) form.setValue('certifications', [...current, cert]);
                            else form.setValue('certifications', current.filter(c => c !== cert));
                          }}
                        />
                        <label htmlFor={`cert-${cert}`} className="text-sm font-medium leading-none cursor-pointer">
                          {cert}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-brand-navy/5 rounded-xl border border-brand-navy/10">
                  <div className="space-y-0.5">
                    <Label className="text-base font-bold text-brand-navy">Request Sample Before Bulk Order?</Label>
                    <p className="text-xs text-muted-foreground">Standard sample fees apply, credited on bulk order</p>
                  </div>
                  <Switch 
                    checked={form.watch('sampleRequired')} 
                    onCheckedChange={(val) => form.setValue('sampleRequired', val)}
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase text-muted-foreground tracking-widest">Upload Reference Image / Logo</Label>
                  <div className={cn(
                    "border-2 border-dashed rounded-2xl p-8 flex flex-col items-center justify-center transition-all cursor-pointer",
                    imageFile ? "bg-success/5 border-success/30" : "bg-muted/30 border-muted hover:border-brand-gold/50"
                  )} onClick={() => document.getElementById('file-upload')?.click()}>
                    <input 
                      type="file" 
                      id="file-upload" 
                      className="hidden" 
                      accept="image/*"
                      onChange={(e) => setImageFile(e.target.files?.[0] || null)}
                    />
                    {imageFile ? (
                      <div className="text-center">
                        <Check className="w-10 h-10 text-success mx-auto mb-2" />
                        <p className="text-sm font-bold text-success">File Selected: {imageFile.name}</p>
                        <button type="button" className="text-xs text-muted-foreground hover:underline mt-2" onClick={(e) => { e.stopPropagation(); setImageFile(null); }}>Remove</button>
                      </div>
                    ) : (
                      <>
                        <Upload className="w-10 h-10 text-muted-foreground mb-4" />
                        <p className="text-sm font-bold text-brand-navy">Click to browse or drag and drop</p>
                        <p className="text-xs text-muted-foreground mt-1">PNG, JPG or WEBP (Max 5MB)</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: USER DETAILS */}
            {step === 3 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase text-muted-foreground tracking-widest">Full Name</Label>
                  <Input className="h-12 border-brand-gold/20" {...form.register('name')} placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase text-muted-foreground tracking-widest">Company Name</Label>
                  <Input className="h-12 border-brand-gold/20" {...form.register('company')} placeholder="Global Sourcing Inc." />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase text-muted-foreground tracking-widest">Designation</Label>
                  <Input className="h-12 border-brand-gold/20" {...form.register('designation')} placeholder="Procurement Manager" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase text-muted-foreground tracking-widest">Work Email</Label>
                  <Input type="email" className="h-12 border-brand-gold/20" {...form.register('email')} placeholder="procurement@company.com" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase text-muted-foreground tracking-widest">WhatsApp Number</Label>
                  <Input className="h-12 border-brand-gold/20" {...form.register('whatsapp')} placeholder="+1 234 567 890" />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs font-bold uppercase text-muted-foreground tracking-widest">How did you find us?</Label>
                  <Select onValueChange={(val) => form.setValue('source', val)} value={form.watch('source')}>
                    <SelectTrigger className="h-12 border-brand-gold/20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Google Search">Google Search</SelectItem>
                      <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                      <SelectItem value="Trade Fair">Trade Fair</SelectItem>
                      <SelectItem value="Referral">Referral</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <Label className="text-xs font-bold uppercase text-muted-foreground tracking-widest">Additional Notes / Special Instructions</Label>
                  <Textarea className="min-h-[120px] border-brand-gold/20" {...form.register('notes')} placeholder="Tell us more about your specific requirements..." />
                </div>
              </div>
            )}

            {/* STEP 4: REVIEW */}
            {step === 4 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-secondary/10 p-6 rounded-2xl border border-brand-gold/10">
                      <h4 className="font-bold text-brand-navy mb-4 flex items-center gap-2">
                        <Package className="w-4 h-4 text-brand-gold" /> Requirement Summary
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Product</span>
                          <span className="font-bold text-brand-navy">{form.getValues('product')}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Quantity</span>
                          <span className="font-bold text-brand-navy">{form.getValues('quantity')} {form.getValues('unit')}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Destination</span>
                          <span className="font-bold text-brand-navy">{form.getValues('destinationCountry')}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Incoterm</span>
                          <Badge className="bg-brand-navy text-white text-[10px]">{form.getValues('incoterm')}</Badge>
                        </div>
                      </div>
                    </div>

                    <div className="bg-brand-navy/5 p-6 rounded-2xl border border-brand-navy/10">
                      <h4 className="font-bold text-brand-navy mb-4 flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-brand-gold" /> Company Details
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Name</span>
                          <span className="font-bold text-brand-navy">{form.getValues('name')}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Company</span>
                          <span className="font-bold text-brand-navy">{form.getValues('company')}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Email</span>
                          <span className="font-bold text-brand-navy">{form.getValues('email')}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-success/5 p-6 rounded-2xl border border-success/10">
                      <h4 className="font-bold text-success mb-4 flex items-center gap-2">
                        <FileCheck className="w-4 h-4" /> Customization Verified
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-success" />
                          <span>OEM / Private Label: <span className="font-bold">{form.getValues('oem') ? 'Yes' : 'No'}</span></span>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-success" />
                          <span>Custom Size: <span className="font-bold">{form.getValues('customSize') || 'Standard'}</span></span>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-success" />
                          <span>Certifications: <span className="font-bold">{form.getValues('certifications').join(', ') || 'N/A'}</span></span>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <Check className="w-4 h-4 text-success" />
                          <span>Sample Required: <span className="font-bold">{form.getValues('sampleRequired') ? 'Yes' : 'No'}</span></span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-brand-navy p-8 rounded-3xl text-white">
                      <h4 className="text-brand-gold font-bold text-lg mb-2">Final Review</h4>
                      <p className="text-xs text-white/60 leading-relaxed">
                        By clicking "Submit RFQ", you are requesting an official price quotation for the above items. Our team will verify availability and shipping costs to {form.getValues('destinationCountry')}.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </form>
        </CardContent>

        <CardFooter className="p-8 bg-muted/20 border-t flex justify-between">
          {step > 1 ? (
            <Button 
              variant="outline" 
              onClick={prevStep} 
              disabled={isSubmitting}
              className="h-12 border-brand-gold/30"
            >
              <ChevronLeft className="mr-2 w-4 h-4" /> Back
            </Button>
          ) : (
            <div />
          )}

          {step < 4 ? (
            <Button 
              onClick={nextStep} 
              className="h-12 bg-brand-navy hover:bg-brand-navy/90 text-white px-8 font-bold"
            >
              Continue <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          ) : (
            <Button 
              onClick={form.handleSubmit(onSubmit)} 
              disabled={isSubmitting}
              className="h-14 bg-brand-gold text-brand-navy hover:bg-brand-gold/90 px-12 font-bold text-lg shadow-xl"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Processing...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5" /> Submit RFQ
                </>
              )}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
