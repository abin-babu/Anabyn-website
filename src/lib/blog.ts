
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
    slug: 'best-gsm-hotel-bath-towels',
    title: 'What GSM is Best for Hotel Bath Towels? A Definitive Guide',
    metaTitle: 'Best GSM for Hotel Bath Towels | Definitive B2B Guide',
    metaDescription: 'Learn what GSM is best for hotel bath towels. A complete guide covering 400-600 GSM ranges, use cases for 5-star luxury vs budget, and procurement tips.',
    excerpt: 'Grams per Square Meter (GSM) is the most critical metric for towel quality. This 1,200-word guide helps procurement managers choose the right weight for their brand.',
    category: 'Export Guides',
    tags: ['GSM Guide', 'Hotel Towels', 'Terry Towels', 'Procurement'],
    author: {
      name: 'Anoop Ashraf',
      role: 'Managing Director',
      avatar: 'https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?w=100&h=100&fit=crop'
    },
    publishedAt: Timestamp.fromDate(new Date('2024-03-10')),
    readingTime: 12,
    featuredImage: 'https://images.unsplash.com/photo-1639298107851-058984903954?w=1200&q=80',
    featured: true,
    content: `
# What GSM is Best for Hotel Bath Towels?

When sourcing from a premium textile exporter, the first technical specification you will encounter is GSM. GSM stands for **Grams per Square Meter**, and it is the universal standard for measuring the weight and density of a fabric.

For hotel bath towels, GSM is the single most important indicator of how a towel will perform in terms of absorbency, hand-feel, and laundry longevity.

## Understanding the GSM Ranges

### 1. The 400–450 GSM Range: Economy & Speed
Towels in this range are thinner and lighter. 
- **Best Use Case:** Budget hotels, gymnasiums, spas, and healthcare facilities.
- **Pros:** They dry extremely fast in commercial dryers, saving energy costs. They are also lighter to handle for housekeeping staff.
- **Cons:** Lower "plushness." They can feel slightly rough after multiple industrial washes if not softened correctly.

### 2. The 500–550 GSM Range: The Hospitality Gold Standard
This is the "sweet spot" for most 4-star and premium boutique hotels globally.
- **Best Use Case:** Standard guest rooms in premium hotels.
- **Pros:** Offers a satisfying "thick" feel without being overly heavy. Excellent absorbency and great durability.
- **Cons:** Requires slightly longer drying cycles than economy towels.

### 3. The 600+ GSM Range: The 5-Star Luxury Benchmark
When you want your guests to feel pampered, 600 GSM is the minimum requirement.
- **Best Use Case:** 5-star resorts, executive suites, and luxury villas.
- **Pros:** Extremely plush, heavy, and ultra-absorbent. It feels like a "cloud" against the skin.
- **Cons:** Very heavy when wet. They take significantly longer to dry and require more storage space in linen cupboards.

## Absorption vs. Softness: The Trade-off
Higher GSM does not always mean higher quality cotton. A 600 GSM towel made from short-staple cotton will shed more lint and become "stiff" faster than a 500 GSM towel made from **Long-Staple Indian Cotton**. 

At Anabyn Global Ventures, we focus on the yarn quality (Ring-spun vs. Open-end) just as much as the GSM. Our ring-spun towels ensure that the loops stay intact even after 200+ industrial laundry cycles.

## Summary: Which should you choose?
- **High Turnover / Budget:** 400-450 GSM
- **Corporate / 4-Star:** 500-550 GSM
- **Luxury / Boutique:** 600-650 GSM

Ready to feel the difference? Request a physical sample pack from our sourcing desk today.
    `
  },
  {
    slug: 'how-to-import-towels-from-india',
    title: 'How to Import Towels from India in Bulk: Step-by-Step Guide',
    metaTitle: 'Import Towels from India in Bulk | Step-by-Step B2B Guide',
    metaDescription: 'The complete B2B guide to importing towels from India. Covering supplier vetting, documentation (IEC, BL, COO), shipping routes, and quality control.',
    excerpt: 'Navigating the Indian export market for the first time? This comprehensive guide walks you through sourcing, documentation, and logistics for bulk imports.',
    category: 'Export Guides',
    tags: ['Import Guide', 'B2B', 'Textile Export', 'India Logistics'],
    author: {
      name: 'Anoop Ashraf',
      role: 'Managing Director',
      avatar: 'https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?w=100&h=100&fit=crop'
    },
    publishedAt: Timestamp.fromDate(new Date('2024-03-05')),
    readingTime: 15,
    featuredImage: 'https://images.unsplash.com/photo-1617744257724-6fafec25442f?w=1200&q=80',
    featured: false,
    content: `
# How to Import Towels from India in Bulk

India is the world's second-largest textile exporter, and for good reason. With an abundant supply of premium cotton and a legacy of weaving excellence, it is the primary sourcing hub for the world’s leading hospitality brands.

However, importing in bulk can be complex. This guide simplifies the process into actionable steps.

## Step 1: Supplier Verification
Don't just look for a price; look for a partner. Ensure your exporter has:
- A valid **IEC (Import Export Code)**.
- **ISO 9001:2015** certification for quality systems.
- A physical office and factory alliances you can verify.

## Step 2: Defining Technical Specifications
A "towel" is not just a towel. Your RFQ should specify:
- **Material:** 100% Cotton, Poly-Cotton, or Organic (GOTS).
- **GSM:** Weight per square meter.
- **Weave:** Terry, Velour, or Waffle.
- **Branding:** OEM logo embroidery or custom woven labels.

## Step 3: Sampling and Approval
Never place a container-load order without seeing a sample. 
- Request a **Master Sample** that matches your production specs.
- Evaluate for colorfastness, shrinkage, and hand-feel.
- Once approved, this sample becomes the "Seal Sample" for the QC team to follow during production.

## Step 4: Documentation & Compliance
The "paperwork" is where most delays happen. Your Indian partner must provide:
1. **Commercial Invoice & Packing List**
2. **Bill of Lading (B/L):** Your title to the goods.
3. **Certificate of Origin (COO):** Crucial for claiming import duty benefits in your country.
4. **Test Reports:** OEKO-TEX or laboratory results for pH and chemicals.

## Step 5: Shipping and Incoterms
Decide who handles the freight.
- **FOB (Free on Board):** We deliver to an Indian port; you handle the sea freight.
- **CIF (Cost, Insurance & Freight):** We handle shipping to your destination port.
- **DDP (Delivered Duty Paid):** We handle everything until it reaches your warehouse.

At Anabyn, we specialize in DDP and CIF shipping to 50+ countries, removing the logistics burden from your procurement team.
    `
  },
  {
    slug: 'terry-vs-velour-towels',
    title: 'Terry vs Velour Towels: What is the Difference?',
    metaTitle: 'Terry vs Velour Towels | Technical Difference & Use Cases',
    metaDescription: 'What is the difference between terry and velour towels? A technical comparison guide for hotels and retailers. Weave, absorbency, and care compared.',
    excerpt: 'Choosing the right weave is essential for guest comfort. Learn the structural differences between absorbent terry and luxurious velour finishes.',
    category: 'Industry Insights',
    tags: ['Textile Tech', 'Terry Towels', 'Velour', 'Product Guide'],
    author: {
      name: 'Dr. Abin Babu',
      role: 'Director of Quality',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
    publishedAt: Timestamp.fromDate(new Date('2024-02-28')),
    readingTime: 8,
    featuredImage: 'https://images.unsplash.com/photo-1571139627661-cf707929f465?w=1200&q=80',
    featured: false,
    content: `
# Terry vs. Velour Towels: What is the Difference?

In the world of luxury textiles, the "weave" determines the "feel." While both Terry and Velour are popular choices for hotels and retail brands, they serve very different purposes.

## What is Terry Weave?
Terry cloth is a fabric with uncut loops on both sides. These loops increase the surface area of the cotton, making it incredibly effective at wicking away moisture.
- **Appearance:** Loopy, slightly textured.
- **Best Use:** Bath towels, hand towels, and floor mats.
- **Absorbency:** Maximum.

## What is Velour Finish?
Velour is actually terry cloth that has undergone a "shearing" process. The loops on one side are cut off, creating a smooth, velvet-like surface.
- **Appearance:** Silky, lustrous, and premium.
- **Best Use:** Beach towels, spa bathrobes, and luxury branded merchandise.
- **Absorbency:** Slightly lower than terry (on the sheared side).

## Technical Comparison Table

| Feature | Terry Towels | Velour Towels |
|---------|--------------|---------------|
| **Texture** | Loopy & Grippy | Silky & Smooth |
| **Absorbency** | Very High | High (Interior only) |
| **Embroidery** | Standard | High Definition (Better for logos) |
| **Weight Feel** | Heavier | Lighter / Drapier |
| **Primary Market** | Hospitality | Retail & Luxury Spas |

## Care Instructions
Both fabrics require care to stay soft. Avoid using too much fabric softener, as it can coat the fibers and reduce the absorbency of terry loops. For velour, tumble drying on low heat helps keep the sheared pile standing upright and looking plush.

## Which should you choose?
Most 5-star hotels use **Terry** for the bathrooms (where drying efficiency is key) and **Velour** for the poolside and spa (where aesthetic and branding take priority).

Explore our full range of both weaves in the Anabyn Terry Towels collection.
    `
  }
];
