
'use server';

import { z } from 'zod';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getSdks } from '@/firebase';

const inquirySchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  company: z.string().optional(),
  phone: z.string().optional(),
  inquiryType: z.enum(['General Inquiry', 'Sample Request', 'Bulk Order']),
  productId: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
  whatsappOptIn: z.boolean().optional(),
});

type InquiryInput = z.infer<typeof inquirySchema>;

export async function handleInquiry(data: InquiryInput) {
  const validation = inquirySchema.safeParse(data);

  if (!validation.success) {
    return { success: false, error: 'Invalid data provided.' };
  }
  
  const { firestore } = getSdks();

  const inquiryData = {
    ...validation.data,
    products: validation.data.productId ? [{ id: validation.data.productId, qty: 1 }] : [],
    type: validation.data.inquiryType.toLowerCase().replace(' ', '-'),
    status: 'new',
    source: 'site',
    createdAt: serverTimestamp(),
  };

  try {
    const inquiriesRef = collection(firestore, 'inquiries');
    await addDoc(inquiriesRef, inquiryData);

    return { success: true };
  } catch (error) {
    console.error('Failed to process inquiry:', error);
    return { success: false, error: 'Could not process your inquiry at this time. Please try again later.' };
  }
}
