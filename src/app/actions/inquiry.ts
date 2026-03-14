'use server';

import { z } from 'zod';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getSdks } from '@/firebase/server';
import { Resend } from 'resend';

// Schema for General Inquiries
const inquirySchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  company: z.string().optional(),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
  productId: z.string().optional(),
});

// Schema for RFQs (Matches the 2-step simplified form)
const rfqSchema = z.object({
  rfqId: z.string(),
  category: z.string().optional(),
  product: z.string().optional(),
  quantity: z.number().optional(),
  unit: z.string().optional(),
  oem: z.boolean().optional(),
  notes: z.string().optional(),
  // Mandatory fields
  email: z.string().email(),
  whatsapp: z.string(),
  destinationCountry: z.string(),
  // Optional contact info
  name: z.string().optional(),
  company: z.string().optional(),
});

type InquiryInput = z.infer<typeof inquirySchema>;
type RFQInput = z.infer<typeof rfqSchema>;

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Sends notification emails for general inquiries.
 */
async function sendInquiryEmails(inquiryData: any) {
  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY is missing. Email skipped.");
    return;
  }

  try {
    await resend.emails.send({
      from: 'Anabyn Inquiry <onboarding@resend.dev>',
      to: 'sales@anabyn.com',
      subject: `[Inquiry] ${inquiryData.name} - Anabyn Global`,
      html: `
        <h1>New General Inquiry</h1>
        <p><strong>Name:</strong> ${inquiryData.name}</p>
        <p><strong>Email:</strong> ${inquiryData.email}</p>
        <p><strong>Phone:</strong> ${inquiryData.phone}</p>
        <p><strong>Company:</strong> ${inquiryData.company || 'N/A'}</p>
        <p><strong>Message:</strong> ${inquiryData.message}</p>
      `,
    });
  } catch (error) {
    console.error('Resend Error (Inquiry):', error);
  }
}

/**
 * Sends notification emails for RFQ submissions.
 */
async function sendRFQEmails(rfqData: RFQInput) {
  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY is missing. Email skipped.");
    return;
  }

  try {
    // 1. Admin Notification
    await resend.emails.send({
      from: 'Anabyn RFQ Desk <onboarding@resend.dev>',
      to: 'sales@anabyn.com',
      subject: `[RFQ ${rfqData.rfqId}] New Quote Request from ${rfqData.destinationCountry}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #0D1F3C; border-bottom: 2px solid #C9A84C; padding-bottom: 10px;">New RFQ: ${rfqData.rfqId}</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr><td style="padding: 8px 0; color: #666;"><strong>Product:</strong></td><td>${rfqData.product || 'General Inquiry'}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><strong>Category:</strong></td><td>${rfqData.category || 'N/A'}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><strong>Target Qty:</strong></td><td>${rfqData.quantity || 0} ${rfqData.unit || ''}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><strong>OEM/Private Label:</strong></td><td>${rfqData.oem ? 'YES' : 'No'}</td></tr>
            <tr style="background: #f9f9f9;"><td style="padding: 8px; color: #0D1F3C;"><strong>Contact Email:</strong></td><td style="padding: 8px;">${rfqData.email}</td></tr>
            <tr style="background: #f9f9f9;"><td style="padding: 8px; color: #0D1F3C;"><strong>WhatsApp:</strong></td><td style="padding: 8px;">${rfqData.whatsapp}</td></tr>
            <tr style="background: #f9f9f9;"><td style="padding: 8px; color: #0D1F3C;"><strong>Country:</strong></td><td style="padding: 8px;">${rfqData.destinationCountry}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><strong>Buyer Name:</strong></td><td>${rfqData.name || 'N/A'}</td></tr>
            <tr><td style="padding: 8px 0; color: #666;"><strong>Company:</strong></td><td>${rfqData.company || 'N/A'}</td></tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background: #fffdf5; border-left: 4px solid #C9A84C;">
            <p><strong>Requirements & Notes:</strong></p>
            <p style="white-space: pre-wrap;">${rfqData.notes || 'No extra notes provided.'}</p>
          </div>
        </div>
      `,
    });

    // 2. User Confirmation
    await resend.emails.send({
      from: 'Anabyn Global Ventures <onboarding@resend.dev>',
      to: rfqData.email,
      subject: `RFQ Received - Ref: ${rfqData.rfqId}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <p>Dear ${rfqData.name || 'Partner'},</p>
          <p>Thank you for requesting a quote from Anabyn Global Ventures. Your request <strong>${rfqData.rfqId}</strong> has been successfully received by our sourcing desk.</p>
          <p>Our account manager will review your requirements for <strong>${rfqData.product || 'textiles'}</strong> and contact you within 24 business hours with a formal proposal and logistics estimate.</p>
          <p>Best regards,<br/>The Anabyn Sourcing Team<br/><a href="https://www.anabyn.com">www.anabyn.com</a></p>
        </div>
      `,
    });
  } catch (error) {
    console.error('Resend Error (RFQ):', error);
  }
}

export async function handleInquiry(data: InquiryInput) {
  const validation = inquirySchema.safeParse(data);
  if (!validation.success) return { success: false, error: "Invalid data" };
  
  const { firestore } = getSdks();
  try {
    const docRef = await addDoc(collection(firestore, 'inquiries'), {
      ...validation.data,
      status: 'Enquired',
      createdAt: serverTimestamp(),
    });
    // Trigger emails
    sendInquiryEmails({ ...validation.data, id: docRef.id });
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function handleRFQSubmissionAction(data: RFQInput) {
  const validation = rfqSchema.safeParse(data);
  if (!validation.success) {
    console.error("Validation failed:", validation.error.format());
    return { success: false, error: "Required fields missing (Email, WhatsApp, or Country)" };
  }

  const { firestore } = getSdks();
  try {
    // Save to Firestore
    await addDoc(collection(firestore, 'rfq_submissions'), {
      ...validation.data,
      status: 'New',
      createdAt: serverTimestamp(),
    });

    // Trigger emails
    await sendRFQEmails(validation.data);

    return { success: true };
  } catch (error: any) {
    console.error('Firestore/Email Error:', error);
    return { success: false, error: 'Failed to process request.' };
  }
}