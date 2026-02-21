'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { handleInquiry } from '@/app/actions/inquiry';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Required' }),
  company: z.string().min(2, { message: 'Required' }),
  email: z.string().email({ message: 'Invalid email' }),
  phone: z.string().min(10, { message: 'Invalid phone' }),
  category: z.string().min(1, { message: 'Please select a category' }),
  message: z.string().min(10, { message: 'Please specify your requirements' }).max(1000),
});

export function InquiryForm() {
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const categoryParam = searchParams.get('category') || '';

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      category: categoryParam,
      message: '',
    },
  });

  useEffect(() => {
    if (categoryParam) {
      form.setValue('category', categoryParam);
    }
  }, [categoryParam, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Map data to the action expected schema
    const actionData = {
        name: values.name,
        email: values.email,
        company: values.company,
        phone: values.phone,
        message: `[Category: ${values.category}] ${values.message}`,
    };

    const result = await handleInquiry(actionData);
    
    if (result.success) {
      alert("Enquiry Sent! Thank you for contacting Anabyn Global Ventures LLP.");
      toast({
        title: 'Enquiry Sent!',
        description: 'We will get back to you shortly.',
      });
      form.reset();
    } else {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: result.error || 'There was a problem sending your request.',
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#0D1B3E] font-bold uppercase text-[10px] tracking-widest">Your Name</FormLabel>
                <FormControl><Input placeholder="John Doe" className="bg-white border-none h-12" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#0D1B3E] font-bold uppercase text-[10px] tracking-widest">Company Name</FormLabel>
                <FormControl><Input placeholder="Your Company Inc." className="bg-white border-none h-12" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#0D1B3E] font-bold uppercase text-[10px] tracking-widest">Email Address</FormLabel>
                <FormControl><Input placeholder="john@example.com" className="bg-white border-none h-12" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#0D1B3E] font-bold uppercase text-[10px] tracking-widest">Country / Phone</FormLabel>
                <FormControl><Input placeholder="+1..." className="bg-white border-none h-12" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#0D1B3E] font-bold uppercase text-[10px] tracking-widest">Product Category</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-white border-none h-12">
                    <SelectValue placeholder="Select a Category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="BedLinen">Bed Linen</SelectItem>
                  <SelectItem value="BathLinen">Bath Linen</SelectItem>
                  <SelectItem value="MedicalDisposables">Medical Disposables</SelectItem>
                  <SelectItem value="Multiple">Multiple Categories</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#0D1B3E] font-bold uppercase text-[10px] tracking-widest">Your Requirements</FormLabel>
              <FormControl><Textarea placeholder="Please specify sizes, quantities, or customization needs..." className="bg-white border-none min-h-[120px]" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full h-14 bg-[#1B45CC] hover:bg-[#2350D4] text-white font-bold rounded-xl text-lg transition-all"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? 'Processing...' : 'Send Enquiry'}
        </Button>
      </form>
    </Form>
  );
}
