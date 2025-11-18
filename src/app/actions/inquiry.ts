
'use server';

import { z } from 'zod';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getSdks } from '@/firebase/server';

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
// In a real application, you would replace the console.log calls with a real email service (e.g., SendGrid, Resend).
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
            Product ID: ${inquiryData.products.length > 0 ? inquiryData.products[0].id : 'General Inquiry'}
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

    console.log("--- SIMULATING EMAIL SENDING ---");
    console.log("This is a development-only simulation. To send real emails, you must integrate a third-party email service like SendGrid or Resend in 'src/app/actions/inquiry.ts'.");
    console.log("\nEmail to Admin:", adminEmail);
    console.log("\nEmail to User:", userConfirmationEmail);
    // In a real implementation, you would use a service like SendGrid or Nodemailer here.
    // Example: await resend.emails.send(adminEmail);
    // Example: await resend.emails.send(userConfirmationEmail);
    return Promise.resolve();
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

    // Call the email sending function (currently a simulation)
    await sendInquiryEmails({ ...inquiryData, id: docRef.id });

    return { success: true };
  } catch (error: any) {
    console.error('Failed to process inquiry:', error);
    // Return a generic error message to the user for security
    const userErrorMessage = 'Could not process your inquiry at this time. Please try again later.';
    return { success: false, error: userErrorMessage };
  }
}
