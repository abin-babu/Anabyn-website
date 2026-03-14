
'use server';

import { z } from 'zod';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getSdks } from '@/firebase/server';
import { Resend } from 'resend';

const inquirySchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  company: z.string().optional(),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
  productId: z.string().optional(),
});

type InquiryInput = z.infer<typeof inquirySchema>;

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

async function sendInquiryEmails(inquiryData: any) {
  const adminEmail = {
    from: 'Anabyn Inquiry <onboarding@resend.dev>', // Replace with your verified domain in Resend
    to: 'sales@anabyn.com',
    subject: `New Inquiry from ${inquiryData.name} – Anabyn Website`,
    html: `
      <h1>New Inquiry Received</h1>
      <p><strong>Name:</strong> ${inquiryData.name}</p>
      <p><strong>Email:</strong> ${inquiryData.email}</p>
      <p><strong>Phone:</strong> ${inquiryData.phone}</p>
      <p><strong>Company:</strong> ${inquiryData.company || 'N/A'}</p>
      <p><strong>Reference ID:</strong> ${inquiryData.id}</p>
      <hr>
      <p><strong>Message:</strong></p>
      <p>${inquiryData.message}</p>
    `,
  };

  const userConfirmationEmail = {
    from: 'Anabyn Global Ventures <onboarding@resend.dev>', // Replace with your verified domain in Resend
    to: inquiryData.email,
    subject: 'Thank you for your inquiry with Anabyn',
    html: `
      <h2>Thank You For Your Inquiry</h2>
      <p>Hi ${inquiryData.name},</p>
      <p>Thank you for reaching Anabyn Global Ventures. Our team has received your inquiry and will respond to you at ${inquiryData.email} within 24 business hours.</p>
      <p>Best regards,<br>The Anabyn Sourcing Team</p>
    `,
  };

  try {
    if (!process.env.RESEND_API_KEY) {
        console.warn("Resend API key is not set. Skipping email sending.");
        return;
    }
    await resend.emails.send(adminEmail);
    await resend.emails.send(userConfirmationEmail);
    console.log('Inquiry emails sent successfully to sales@anabyn.com');
  } catch (error) {
    console.error('Failed to send emails via Resend:', error);
  }
}

export async function handleInquiry(data: InquiryInput) {
  const validation = inquirySchema.safeParse(data);

  if (!validation.success) {
    return { success: false, error: "Invalid data provided. Please check the form." };
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
    
    // Non-blocking email trigger
    sendInquiryEmails({ ...inquiryData, id: docRef.id });

    return { success: true };
  } catch (error: any) {
    console.error('Firestore Error:', error);
    return { success: false, error: 'Could not submit your inquiry. Our technical team has been notified.' };
  }
}
