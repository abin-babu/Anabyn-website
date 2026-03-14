
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
    from: 'Anabyn Inquiry <onboarding@resend.dev>', // IMPORTANT: Replace with your verified domain in Resend
    to: 'sales@anabyn.com',
    subject: `New Inquiry from ${inquiryData.name} – Anabyn Website`,
    html: `
      <h1>New Inquiry</h1>
      <p><strong>Name:</strong> ${inquiryData.name}</p>
      <p><strong>Email:</strong> ${inquiryData.email}</p>
      <p><strong>Phone:</strong> ${inquiryData.phone}</p>
      <p><strong>Company:</strong> ${inquiryData.company || 'N/A'}</p>
      <p><strong>Product ID:</strong> ${inquiryData.products.length > 0 ? inquiryData.products[0].id : 'General Inquiry'}</p>
      <hr>
      <p><strong>Message:</strong></p>
      <p>${inquiryData.message}</p>
    `,
  };

  const userConfirmationEmail = {
    from: 'Anabyn Global Ventures <onboarding@resend.dev>', // IMPORTANT: Replace with your verified domain in Resend
    to: inquiryData.email,
    subject: 'Thank you for your inquiry with Anabyn',
    html: `
      <h2>Thank You For Your Inquiry</h2>
      <p>Hi ${inquiryData.name},</p>
      <p>Thank you for reaching Anabyn Global Ventures. Our team has received your inquiry and will respond shortly.</p>
      <p>Best regards,<br>The Anabyn Team</p>
    `,
  };

  try {
    if (!process.env.RESEND_API_KEY) {
        console.warn("Resend API key is not set. Skipping email sending. To enable emails, add RESEND_API_KEY to your .env file.");
        return;
    }
    await resend.emails.send(adminEmail);
    await resend.emails.send(userConfirmationEmail);
    console.log('Inquiry emails sent successfully via Resend.');
  } catch (error) {
    console.error('Failed to send emails via Resend:', error);
    // This failure should not block the user-facing success message.
    // We log it for debugging, but the primary action (saving to DB) is complete.
  }
}

export async function handleInquiry(data: InquiryInput) {
  const validation = inquirySchema.safeParse(data);

  if (!validation.success) {
    const errorMessage = "Invalid data provided. Please check the form and try again.";
    console.error('Invalid inquiry data:', validation.error.flatten().fieldErrors);
    return { success: false, error: errorMessage };
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
    console.log('Inquiry saved to Firestore with ID:', docRef.id);

    // After saving to DB, send the emails.
    await sendInquiryEmails({ ...inquiryData, id: docRef.id });

    return { success: true };
  } catch (error: any) {
    console.error('Failed to process inquiry:', error);
    // Return a generic error message to the user for security
    const userErrorMessage = 'Could not process your inquiry at this time. Please try again later.';
    return { success: false, error: userErrorMessage };
  }
}
