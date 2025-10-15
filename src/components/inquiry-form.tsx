
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { handleInquiry } from '@/app/actions/inquiry';
import { products } from '@/lib/products';
import { Label } from './ui/label';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  company: z.string().optional(),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  inquiryType: z.enum(['General Inquiry', 'Sample Request', 'Bulk Order']),
  productId: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }).max(1000),
  whatsappOptIn: z.boolean().optional(),
});

export function InquiryForm() {
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const productIdParam = searchParams.get('productId');
  const productName = products.find(p => p.id === productIdParam)?.name;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      phone: '',
      inquiryType: 'General Inquiry',
      productId: productIdParam || '',
      message: productName ? `I'm interested in the product: ${productName}. ` : '',
      whatsappOptIn: false,
    },
  });

  useEffect(() => {
    if (productIdParam) {
      form.setValue('productId', productIdParam);
      const productName = products.find(p => p.id === productIdParam)?.name;
      if (productName && form.getValues('message') === '') {
        form.setValue('message', `I'm interested in the product: ${productName}. `);
      }
    }
  }, [productIdParam, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await handleInquiry(values);
    
    if (result.success) {
      toast({
        title: 'Inquiry Sent!',
        description: 'Thank you for your inquiry. We will get back to you shortly.',
      });
      form.reset({
        name: '',
        email: '',
        company: '',
        phone: '',
        inquiryType: 'General Inquiry',
        productId: '',
        message: '',
        whatsappOptIn: false,
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: result.error || 'There was a problem with your request.',
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl><Input placeholder="john.doe@example.com" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company (Optional)</FormLabel>
                <FormControl><Input placeholder="Your Company Inc." {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl><Input placeholder="+1 (555) 123-4567" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
            control={form.control}
            name="inquiryType"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Type of Inquiry</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                    <SelectTrigger>
                        <SelectValue placeholder="Select an inquiry type" />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                    <SelectItem value="General Inquiry">General Inquiry</SelectItem>
                    <SelectItem value="Sample Request">Sample Request</SelectItem>
                    <SelectItem value="Bulk Order">Bulk Order</SelectItem>
                    </SelectContent>
                </Select>
                <FormMessage />
                </FormItem>
            )}
        />
        
        {productName && (
          <div className="rounded-md bg-secondary p-4">
            <p className="text-sm font-medium">Inquiring about: <span className="font-bold">{productName}</span></p>
          </div>
        )}

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl><Textarea placeholder="Please tell us more about your needs..." className="min-h-[120px]" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="whatsappOptIn"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <Label htmlFor="whatsappOptIn">Opt-in for WhatsApp communication</Label>
                <p className="text-sm text-muted-foreground">
                  Allow us to contact you via WhatsApp for faster communication.
                </p>
              </div>
            </FormItem>
          )}
        />

        <Button type="submit" size="lg" disabled={form.formState.isSubmitting}>
          {form.formState.isSubmitting ? 'Sending...' : 'Send Inquiry'}
        </Button>
      </form>
    </Form>
  );
}
