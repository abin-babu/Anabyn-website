
import { Timestamp } from 'firebase/firestore';

export type BlogCategory = "Export Guides" | "Industry Insights" | "Product Updates" | "Trade News";

export interface BlogPost {
  id?: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  content: string;
  category: BlogCategory;
  tags: string[];
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: Timestamp;
  readingTime: number;
  featuredImage: string;
  featured: boolean;
}

export const initialBlogPosts: BlogPost[] = [
  {
    slug: 'what-gsm-is-best-for-hotel-bath-towels',
    title: 'What GSM is best for hotel bath towels? A Definitive Guide',
    metaTitle: 'Best GSM for Hotel Bath Towels | Terry Towel Guide',
    metaDescription: 'Learn why GSM matters for hotel towels. Compare 400, 500, and 600 GSM bath towels for luxury, absorbency, and laundry durability.',
    excerpt: 'Grams per Square Meter (GSM) is the most critical metric for towel quality. This guide helps procurement managers choose the right weight for their hospitality brand.',
    category: 'Export Guides',
    tags: ['GSM Guide', 'Hotel Towels', 'Terry Towels', 'Procurement'],
    author: {
      name: 'Anoop Ashraf',
      role: 'Managing Director',
      avatar: 'https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?w=100&h=100&fit=crop'
    },
    publishedAt: Timestamp.fromDate(new Date('2024-03-01')),
    readingTime: 8,
    featuredImage: 'https://images.unsplash.com/photo-1639298107851-058984903954?w=1200&q=80',
    featured: true,
    content: `
# What GSM is best for hotel bath towels?

When sourcing from a **luxury terry towel exporter India**, the first question procurement directors ask is about GSM. GSM stands for Grams per Square Meter and directly relates to the towel's weight, density, and absorbency.

## The GSM Scale for Hospitality:
- **400-450 GSM:** Lightweight, quick-drying. Best for gymnasiums, spas, and budget hotels.
- **500-550 GSM:** Medium weight. The "standard" for most 4-star hotels worldwide.
- **600+ GSM:** Luxury weight. Plush, highly absorbent, and expensive. This is the gold standard for 5-star resorts.

## Why 600 GSM is the Luxury Benchmark
A 600 GSM towel, often crafted from **long-staple Indian cotton**, provides the dense loop structure that guests associate with luxury. As a **premium cotton towels wholesale India** partner, we recommend 600 GSM for its superior hand-feel and high moisture-wicking capability.

## Laundry Durability vs. GSM
While higher GSM feels better, it also takes longer to dry in industrial dryers. For high-occupancy city hotels, a 550 GSM dobby border towel is often the most efficient choice.
    `
  },
  {
    slug: 'how-to-import-towels-from-india-in-bulk',
    title: 'How to import towels from India in bulk: Step-by-Step Guide',
    metaTitle: 'How to Import Towels from India in Bulk | B2B Guide',
    metaDescription: 'The complete B2B guide to importing terry towels and bed linen from India. Documentation, shipping, and quality control steps explained.',
    excerpt: 'Navigating the Indian export market for the first time? This guide walks you through sourcing, samples, and customs for bulk textile imports.',
    category: 'Export Guides',
    tags: ['Import Guide', 'B2B', 'Textile Export', 'India'],
    author: {
      name: 'Anoop Ashraf',
      role: 'Managing Director',
      avatar: 'https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?w=100&h=100&fit=crop'
    },
    publishedAt: Timestamp.fromDate(new Date('2024-02-25')),
    readingTime: 15,
    featuredImage: 'https://images.unsplash.com/photo-1617744257724-6fafec25442f?w=1200&q=80',
    featured: false,
    content: `
# How to import towels from India in bulk

India is a global powerhouse for textiles. For businesses looking for a **terry towels manufacturer India export** partner, the process can be simplified into five key stages.

## 1. Finding a Verified Exporter
Don't just look for a factory; look for a verified **Indian textile export company B2B**. Partners like Anabyn Global Ventures aggregate manufacturing capacity from multiple ISO-certified units to ensure stable supply and consistent quality.

## 2. Technical Specification (The RFQ)
Define your needs:
- **Material:** 100% Ring-spun cotton or blended fabrics.
- **Size & Weight:** Standard sizes (70x140cm) vs. custom dimensions.
- **Branding:** OEM logo embroidery or private label tags.

## 3. Sample Evaluation
Never place a bulk order without a master sample. We ship physical samples worldwide so you can verify the weave, GSM, and color before production starts.

## 4. Documentation & Compliance
Ensure your partner provides:
- **IEC Code** verification.
- **GOTS/OEKO-TEX** certificates if organic.
- **Bill of Lading** and Certificate of Origin.

## 5. Shipping & Incoterms
Choose between FOB (Free on Board) or DDP (Delivered Duty Paid) based on your logistics expertise.
    `
  },
  {
    slug: 'what-is-the-difference-between-terry-and-velour-towels',
    title: 'What is the difference between terry and velour towels?',
    metaTitle: 'Terry vs Velour Towels | Hospitality Textile Comparison',
    metaDescription: 'Technical comparison of terry weave vs velour finish for hotel towels and bathrobes. Which is better for your spa or hotel?',
    excerpt: 'Choosing the right weave is essential for guest comfort. Learn the structural differences between absorbent terry and luxurious velour.',
    category: 'Industry Insights',
    tags: ['Textile Tech', 'Terry Towels', 'Velour'],
    author: {
      name: 'Dr. Abin Babu',
      role: 'Director of Quality',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
    publishedAt: Timestamp.fromDate(new Date('2024-02-15')),
    readingTime: 6,
    featuredImage: 'https://images.unsplash.com/photo-1571139627661-cf707929f465?w=1200&q=80',
    featured: false,
    content: `
# Terry vs. Velour: A Technical Comparison

As a **luxury bathrobe supplier India**, we often get asked about the best material for premium spas. The choice usually falls between Terry and Velour.

## Terry Weave: The Absorbency King
Terry fabric is characterized by uncut loops on both sides. These loops increase the surface area, making it highly absorbent. It is the standard for bath towels.

## Velour Finish: The Aesthetic Choice
Velour is essentially terry fabric where the loops on one side have been sheared off. This creates a soft, velvet-like texture that looks incredibly premium and is easier to embroider.

## The Hybrid Solution
For high-end hotels, we recommend **velour spa bathrobes** with a velour exterior for the "look" and a terry interior for "function" (drying the guest).
    `
  }
];
