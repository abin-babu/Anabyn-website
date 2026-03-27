'use server';

import { z } from 'zod';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { getSdks } from '@/firebase/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const catalogueLeadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  country: z.string().min(1),
  productInterest: z.array(z.string()).optional(),
  orderVolume: z.string().optional(),
});

export async function handleCatalogueLead(data: z.infer<typeof catalogueLeadSchema>) {
  const validation = catalogueLeadSchema.safeParse(data);
  if (!validation.success) return { success: false, error: "Invalid data" };

  const { firestore } = getSdks();
  try {
    // 1. Save to Firestore
    await addDoc(collection(firestore, 'catalogue_leads'), {
      ...validation.data,
      timestamp: serverTimestamp(),
      source: 'catalogue_download',
    });

    // 2. Notify Sales Team
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: 'Anabyn Leads <onboarding@resend.dev>',
        to: 'sales@anabyn.com',
        subject: `[New Lead] Catalogue Downloaded by ${validation.data.company}`,
        html: `
          <h2>New Catalogue Lead</h2>
          <p><strong>Name:</strong> ${validation.data.name}</p>
          <p><strong>Email:</strong> ${validation.data.email}</p>
          <p><strong>Company:</strong> ${validation.data.company}</p>
          <p><strong>Country:</strong> ${validation.data.country}</p>
          <p><strong>Interest:</strong> ${validation.data.productInterest?.join(', ') || 'N/A'}</p>
          <p><strong>Volume:</strong> ${validation.data.orderVolume || 'N/A'}</p>
        `,
      });
    }

    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

// ... rest of existing actions
