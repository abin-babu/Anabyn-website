'use server';

import { z } from 'zod';

const inquirySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  company: z.string().optional(),
  phone: z.string().optional(),
  inquiryType: z.enum(['General Inquiry', 'Sample Request', 'Bulk Order']),
  productId: z.string().optional(),
  message: z.string(),
});

type InquiryInput = z.infer<typeof inquirySchema>;

export async function handleInquiry(data: InquiryInput) {
  const validation = inquirySchema.safeParse(data);

  if (!validation.success) {
    return { success: false, error: 'Invalid data provided.' };
  }

  const inquiryData = {
    ...validation.data,
    status: 'New',
    createdAt: new Date().toISOString(),
  };

  try {
    // In a real application, you would save this to a database like Firestore.
    // e.g., await db.collection('inquiries').add(inquiryData);
    console.log('New Inquiry Received:', inquiryData);

    // And send an email notification via a transactional email service.
    // e.g., await sendEmail({ to: 'sales@anabyn.com', ... });
    console.log('Simulating email notification to sales@anabyn.com');

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return { success: true };
  } catch (error) {
    console.error('Failed to process inquiry:', error);
    return { success: false, error: 'Could not process your inquiry at this time. Please try again later.' };
  }
}
