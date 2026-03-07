
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
    slug: 'how-to-import-hotel-linens-from-india-complete-buyers-guide-2026',
    title: 'How to Import Hotel Linens from India: Complete Buyer\'s Guide 2026',
    metaTitle: 'Guide: Importing Hotel Linens from India (2026 Update)',
    metaDescription: 'Step-by-step guide for international procurement managers on sourcing and importing high-quality bed and bath linen from India.',
    excerpt: 'India is a global powerhouse for textile manufacturing. This guide breaks down the logistics, quality standards, and documentation required for seamless linen imports.',
    category: 'Export Guides',
    tags: ['Import Guide', 'Hotel Linen', 'India Export', 'Procurement'],
    author: {
      name: 'Anoop Ashraf',
      role: 'Managing Director',
      avatar: 'https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?w=100&h=100&fit=crop'
    },
    publishedAt: Timestamp.fromDate(new Date('2024-02-15')),
    readingTime: 12,
    featuredImage: 'https://images.unsplash.com/photo-1617744257724-6fafec25442f?w=1200&q=80',
    featured: true,
    content: `
# How to Import Hotel Linens from India: Complete Buyer's Guide 2026

India remains the world's most competitive and high-quality hub for hospitality textiles. For international procurement managers, understanding the nuances of the Indian export landscape is critical to securing the best value without compromising on quality.

## 1. Why Source from India?
India's textile industry is backed by centuries of heritage and modern vertical integration. From growing the finest long-staple cotton to advanced spinning and weaving units, the supply chain is robust. Key benefits include:
- **Cost Efficiency:** Direct factory pricing through exclusive export alliances.
- **Quality Standards:** Wide availability of GOTS, OEKO-TEX, and ISO-certified units.
- **Customization:** High flexibility in thread counts (144TC to 1000TC) and specialized weaves.

## 2. Defining Your Specifications
Before reaching out to an exporter like Anabyn Global Ventures, ensure you have your technical data sheets ready:
- **Material:** 100% Cotton vs. Poly-Cotton blends.
- **Thread Count:** For luxury hotels, 300TC Percale or 400TC Sateen are standard.
- **GSM:** For towels, 550–650 GSM provides the ideal balance of plushness and durability.

## 3. The Documentation Checklist
A smooth customs clearance depends on accurate documentation. Ensure your Indian partner provides:
- **Commercial Invoice & Packing List**
- **Certificate of Origin (COO)**
- **Bill of Lading (B/L)**
- **Quality Inspection Reports (SGS/Intertek)**

## 4. Logistics and Incoterms
While EXW and FOB are common, many modern buyers prefer **DDP (Delivered Duty Paid)** to minimize administrative hurdles. India’s major ports like Cochin and Chennai offer efficient transit times to the Middle East (5-8 days) and Europe (18-25 days).

*Source: Anabyn Global Ventures Compliance Desk.*
    `
  },
  {
    slug: 'iso-13485-vs-ce-marking-what-medical-importers-need-to-know',
    title: 'ISO 13485 vs CE Marking: What Medical Importers Need to Know',
    metaTitle: 'Medical Compliance Guide: ISO 13485 vs CE Marking',
    metaDescription: 'Understand the difference between quality management systems and product safety certifications for medical supplies.',
    excerpt: 'Navigate the complex world of medical regulations. Learn why both ISO 13485 and CE Marking are essential for hospital-grade supplies.',
    category: 'Industry Insights',
    tags: ['Medical Supplies', 'Compliance', 'ISO 13485', 'CE Marking'],
    author: {
      name: 'Dr. Abin Babu',
      role: 'Director of Quality',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
    publishedAt: Timestamp.fromDate(new Date('2024-02-10')),
    readingTime: 10,
    featuredImage: 'https://images.unsplash.com/photo-1579684385127-6c17937c4635?w=1200&q=80',
    featured: false,
    content: `
# ISO 13485 vs CE Marking: Navigating Medical Compliance

For importers of medical disposables—such as syringes, gloves, and infusion sets—compliance is non-negotiable. However, there is often confusion between a Quality Management System (QMS) and a Product Certification.

## ISO 13485: The Manufacturer's Standard
ISO 13485 is an international standard that specifies requirements for a quality management system where an organization needs to demonstrate its ability to provide medical devices and related services that consistently meet customer and applicable regulatory requirements.
- **Focus:** Process and Organization.
- **Outcome:** Ensures every batch is produced with consistent quality.

## CE Marking: The Market Entry Requirement
CE marking indicates that a product has been assessed by the manufacturer and deemed to meet EU safety, health, and environmental protection requirements.
- **Focus:** Product Safety and Efficacy.
- **Requirement:** Mandatory for selling medical devices in the European Economic Area (EEA).

## Why Importers Need Both
When sourcing from India, a vendor with only ISO 13485 might produce high-quality goods, but without CE Marking (for Europe) or FDA Registration (for the USA), those goods cannot legally enter the market. 

At Anabyn Global Ventures, our medical division exclusively sources from units holding dual certifications to ensure seamless global distribution.
    `
  },
  {
    slug: 'top-10-hotel-linen-specifications-you-must-check-before-ordering',
    title: 'Top 10 Hotel Linen Specifications You Must Check Before Ordering',
    metaTitle: '10 Essential Hotel Linen Specs for Procurement',
    metaDescription: 'Don\'t make these common mistakes. A comprehensive checklist of specifications for buying hotel bed sheets and towels.',
    excerpt: 'From tensile strength to soil-release finishes, these are the technical specs that separate luxury hotel linen from standard retail products.',
    category: 'Product Updates',
    tags: ['Specifications', 'Hotel Linen', 'Procurement Tips'],
    author: {
      name: 'Anoop Ashraf',
      role: 'Managing Director',
      avatar: 'https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?w=100&h=100&fit=crop'
    },
    publishedAt: Timestamp.fromDate(new Date('2024-02-05')),
    readingTime: 8,
    featuredImage: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80',
    featured: false,
    content: `
# Top 10 Hotel Linen Specifications for Procurement Professionals

Buying for a hotel is vastly different from buying for a home. The "commercial laundry factor" means your linens must withstand high-temperature washes and industrial ironing daily.

## The Checklist:
1. **Thread Count (TC):** Don't just look at the number. 300TC from long-staple cotton is better than 600TC from short-staple.
2. **Yarn Type:** Ring-spun vs. Open-end. Ring-spun is essential for softness and strength.
3. **Tensile Strength:** How much pull can the fabric take? This determines the lifespan of your sheets.
4. **Whiteness Index:** Ensure the "Optical White" stays white and doesn't turn yellow after 10 washes.
5. **GSM (Grams per Square Meter):** For towels, 600+ GSM is luxury; for sheets, 120-140 GSM is standard.
6. **Shrinkage Control:** Pre-shrunk fabrics are a must to ensure fitted sheets still fit after the first wash.
7. **Pilling Resistance:** Essential for poly-cotton blends.
8. **Hem Style:** Double-needle stitching and reinforced corners prevent fraying.
9. **Color Fastness:** Especially important for colored uniforms and napkins.
10. **Certification:** OEKO-TEX Standard 100 ensures no harmful chemicals touch your guests' skin.
    `
  },
  {
    slug: 'exporting-medical-supplies-from-india-documentation-checklist',
    title: 'Exporting Medical Supplies from India: Documentation Checklist',
    metaTitle: 'Medical Export Documentation Checklist | India 2026',
    metaDescription: 'A complete guide to the paperwork required for exporting medical devices and consumables from India to global markets.',
    excerpt: 'Medical exports are highly regulated. Ensure your shipments are never stuck at customs with this definitive documentation guide.',
    category: 'Export Guides',
    tags: ['Documentation', 'Medical Export', 'Customs', 'India'],
    author: {
      name: 'Dr. Abin Babu',
      role: 'Director of Quality',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
    publishedAt: Timestamp.fromDate(new Date('2024-01-28')),
    readingTime: 11,
    featuredImage: 'https://images.unsplash.com/photo-1585837146751-a44117f3a6fd?w=1200&q=80',
    featured: false,
    content: `
# Exporting Medical Supplies: The Definitive Documentation Guide

The export of medical devices from India is governed by the Central Drugs Standard Control Organization (CDSCO) and requires precision in paperwork.

## Mandatory Export Documents:
- **IEC (Importer Exporter Code):** Issued by the DGFT.
- **RCMC:** Registration with the Pharmaceuticals Export Promotion Council (PHARMEXCIL).
- **Free Sale Certificate:** To prove the product is sold in the home market.
- **Analytical Test Reports:** Batch-wise reports for sterility and composition.

## Product-Specific Compliance:
Different countries have different "Barriers to Entry."
- **USA:** FDA 510(k) clearance or registration.
- **Europe:** CE Certification under the new MDR 2017/745.
- **Middle East:** SFDA (Saudi) or MoH (UAE) registration.

Avoid delays by working with an aggregator like Anabyn who handles the technical dossier preparation on your behalf.
    `
  }
];
