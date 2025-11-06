
'use server';

import { z } from 'zod';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getSdks } from '@/firebase';

const inquirySchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  company: z.string().optional(),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
  productId: z.string().optional(),
});

type InquiryInput = z.infer<typeof inquirySchema>;

// This is a placeholder for where the email sending logic would go.
// In a real application, this would be a Cloud Function triggered by a new document in Firestore.
async function sendInquiryEmails(inquiryData: any) {
    const adminEmail = {
        to: 'sales@anabyn.com',
        subject: `New Inquiry from ${inquiryData.name} – Anabyn Website`,
        body: `
            You have received a new inquiry with the following details:
            Name: ${inquiryData.name}
            Email: ${inquiryData.email}
            Phone: ${inquiryData.phone}
            Company: ${inquiryData.company || 'N/A'}
            Message: ${inquiryData.message}
            Product ID: ${inquiryData.products.length > 0 ? inquiryData.products[0].id : 'N/A'}
        `,
    };

    const userConfirmationEmail = {
        to: inquiryData.email,
        subject: 'Thank you for your inquiry with Anabyn',
        body: `
            Hi ${inquiryData.name},

            Thank you for reaching Anabyn Global Ventures. Our team has received your inquiry and will respond shortly.

            Best regards,
            The Anabyn Team
        `,
    };

    console.log("--- Email Sending Simulation ---");
    console.log("Sending to admin:", adminEmail);
    console.log("Sending confirmation to user:", userConfirmationEmail);
    // In a real implementation, you would use a service like SendGrid or Nodemailer here.
    return Promise.resolve();
}

export async function handleInquiry(data: InquiryInput) {
  const validation = inquirySchema.safeParse(data);

  if (!validation.success) {
    return { success: false, error: 'Invalid data provided.' };
  }
  
  const { firestore } = getSdks();

  const inquiryData = {
    name: validation.data.name,
    email: validation.data.email,
    company: validation.data.company,
    phone: validation.data.phone,
    message: validation.data.message,
    products: validation.data.productId ? [{ id: validation.data.productId, qty: 1 }] : [],
    status: 'Enquired',
    createdAt: serverTimestamp(),
  };

  try {
    const inquiriesRef = collection(firestore, 'inquiries');
    const docRef = await addDoc(inquiriesRef, inquiryData);

    await sendInquiryEmails({ ...inquiryData, id: docRef.id });

    return { success: true };
  } catch (error) {
    console.error('Failed to process inquiry:', error);
    return { success: false, error: 'Could not process your inquiry at this time. Please try again later.' };
  }
}
