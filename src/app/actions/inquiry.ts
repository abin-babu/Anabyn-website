
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

// Schema for RFQs
const rfqSchema = z.object({
  rfqId: z.string(),
  product: z.string().optional(),
  quantity: z.number().optional(),
  unit: z.string().optional(),
  destinationCountry: z.string(),
  oem: z.boolean().optional(),
  notes: z.string().optional(),
  email: z.string().email(),
  whatsapp: z.string(),
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
      subject: `[RFQ ${rfqData.rfqId}] New Quote Request: ${rfqData.product || 'General'}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #0D1F3C;">New RFQ Received: ${rfqData.rfqId}</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Product:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${rfqData.product || 'Not Specified'}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Quantity:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${rfqData.quantity} ${rfqData.unit}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Country:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${rfqData.destinationCountry}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>OEM/Private Label:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${rfqData.oem ? 'YES' : 'No'}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>Contact:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${rfqData.name} (${rfqData.email})</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #eee;"><strong>WhatsApp:</strong></td><td style="padding: 10px; border-bottom: 1px solid #eee;">${rfqData.whatsapp}</td></tr>
          </table>
          <p><strong>Notes:</strong><br/>${rfqData.notes || 'None'}</p>
        </div>
      `,
    });

    // 2. User Confirmation
    await resend.emails.send({
      from: 'Anabyn Global Ventures <onboarding@resend.dev>',
      to: rfqData.email,
      subject: `Quote Request Received - Ref: ${rfqData.rfqId}`,
      html: `
        <p>Dear ${rfqData.name || 'Partner'},</p>
        <p>Thank you for requesting a quote from Anabyn Global Ventures. Your request <strong>${rfqData.rfqId}</strong> for <strong>${rfqData.product || 'Textiles'}</strong> has been received by our sourcing desk.</p>
        <p>Our account manager will review your technical requirements and contact you within 24 business hours with a formal proposal.</p>
        <p>Best regards,<br/>The Anabyn Sourcing Team</p>
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
  if (!validation.success) return { success: false, error: "Invalid contact details" };

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
