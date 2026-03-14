
import type { Product, Category } from './types';

export const categories: Category[] = [
  { id: 'hospitality-supplies', name: 'Hospitality Supplies', slug: 'hospitality-supplies', parentId: null, imageUrl: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80' },
  { id: 'medical-supplies', name: 'Medical Supplies', slug: 'medical-supplies', parentId: null, imageUrl: 'https://images.unsplash.com/photo-1579684385127-6c17937c4635?w=800&q=80' },
  { id: 'bed-linen', name: 'Premium Bed Linen', slug: 'bed-linen', parentId: 'hospitality-supplies' },
  { id: 'bath-linen', name: 'Luxury Terry Towels', slug: 'bath-linen', parentId: 'hospitality-supplies' },
  { id: 'uniforms', name: 'Hospitality Uniforms', slug: 'uniforms', parentId: 'hospitality-supplies' },
  { id: 'f-b-linen', name: 'F&B Linen', slug: 'f-b-linen', parentId: 'hospitality-supplies' },
  { id: 'consumables', name: 'Medical Consumables', slug: 'consumables', parentId: 'medical-supplies' },
  { id: 'furniture', name: 'Hospital Furniture', slug: 'furniture', parentId: 'medical-supplies' },
  { id: 'devices', name: 'Medical Devices', slug: 'devices', parentId: 'medical-supplies' },
  { id: 'emergency', name: 'Emergency Supplies', slug: 'emergency', parentId: 'medical-supplies' },
  { id: 'rehab', name: 'Rehabilitation Equipment', slug: 'rehab', parentId: 'medical-supplies' },
];

export const products: Product[] = [
  // --- HOSPITALITY SUPPLIES ---
  {
    id: 'h-1',
    name: 'Premium Cotton Percale Bed Sheets',
    slug: 'premium-percale-bed-sheets',
    category: 'hospitality-supplies',
    subcategory: 'Bed Linen',
    shortDescription: '300 Thread Count 100% Long-Staple Indian Cotton. Ideal for premium bed sheets exporter India.',
    fullDescription: 'Our hotel-grade percale bed sheets are crafted from premium long-staple Indian cotton. As a leading bed linen exporter India, we ensure extreme durability and a crisp, cool feel. These sateen weave bed linen India export options are ideal for high-end resorts and city hotels.',
    specifications: [
      { key: 'Material', value: '100% Cotton' },
      { key: 'Thread Count', value: '300 TC' },
      { key: 'Weave', value: 'Percale' },
      { key: 'Finish', value: 'Mercerized' }
    ],
    materials: ['Cotton'],
    variants: [
      { size: 'Single', tc: '300', color: 'White' },
      { size: 'Queen', tc: '300', color: 'White' },
      { size: 'King', tc: '300', color: 'White' }
    ],
    moqPieces: 100,
    moqKg: 0,
    sampleAvailable: true,
    privateLabelAvailable: true,
    certifications: ['ISO 9001', 'OEKO-TEX'],
    images: [
      'https://images.unsplash.com/photo-1617744257724-6fafec25442f?w=800&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80'
    ],
    hsCode: '6302.21',
    tags: ['luxury', 'bedding', 'hotel', 'bed linen exporter India'],
    featured: true,
    active: true
  },
  {
    id: 'h-2',
    name: 'Egyptian Cotton Bed Sheets Wholesale',
    slug: 'egyptian-cotton-bed-sheets',
    category: 'hospitality-supplies',
    subcategory: 'Bed Linen',
    shortDescription: '400 Thread Count Sateen with 1cm Satin Stripes. Top Egyptian cotton bed sheets wholesale India.',
    fullDescription: 'The classic 5-star hotel look. Our sateen striped sheets offer a silky-smooth texture and a brilliant sheen. We are a trusted premium bed sheets exporter India, providing sheets that stay vibrant after industrial washing.',
    specifications: [
      { key: 'Material', value: '100% Long-Staple Cotton' },
      { key: 'Thread Count', value: '400 TC' },
      { key: 'Pattern', value: '1cm Satin Stripe' }
    ],
    materials: ['Cotton'],
    variants: [
      { size: 'Queen', tc: '400', color: 'White' },
      { size: 'King', tc: '400', color: 'White' }
    ],
    moqPieces: 100,
    moqKg: 0,
    sampleAvailable: true,
    privateLabelAvailable: true,
    certifications: ['ISO 9001', 'OEKO-TEX'],
    images: ['https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80'],
    hsCode: '6302.21',
    tags: ['luxury', 'striped', '5-star', 'Egyptian cotton bed sheets wholesale India'],
    featured: true,
    active: true
  },
  {
    id: 'h-3',
    name: '600 GSM Luxury Terry Bath Towels',
    slug: '600-gsm-terry-bath-towels',
    category: 'hospitality-supplies',
    subcategory: 'Bath Linen',
    shortDescription: '600 GSM 100% Ring-Spun Cotton. Luxury terry towel exporter India standards.',
    fullDescription: 'Designed for the rigors of institutional laundry. As a premium cotton towels wholesale India provider, these 600 GSM towels provide superior absorbency and remain soft through hundreds of wash cycles.',
    specifications: [
      { key: 'Material', value: '100% Ring-Spun Cotton' },
      { key: 'Weight', value: '600 GSM' },
      { key: 'Border', value: 'Dobby Border' }
    ],
    materials: ['Cotton'],
    variants: [
      { size: '70x140cm', gsm: '600', color: 'White' },
      { size: '90x150cm', gsm: '600', color: 'White' }
    ],
    moqPieces: 200,
    moqKg: 0,
    sampleAvailable: true,
    privateLabelAvailable: true,
    certifications: ['ISO 9001'],
    images: ['https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=800&q=80'],
    hsCode: '6302.60',
    tags: ['bath', 'absorbent', 'institution', 'luxury terry towel exporter India'],
    featured: true,
    active: true
  },
  {
    id: 'h-4',
    name: 'Private Label Hotel Towels',
    slug: 'private-label-hotel-towels',
    category: 'hospitality-supplies',
    subcategory: 'Bath Linen',
    shortDescription: 'Custom logo towels OEM India. 100% cotton bath towels bulk export.',
    fullDescription: 'Customized towels for hotels and brands. We are a leading private label towels manufacturer India, offering full OEM support including embroidery, custom borders, and branded packaging.',
    specifications: [
      { key: 'Service', value: 'OEM / Private Label' },
      { key: 'Logo', value: 'Embroidery Available' },
      { key: 'Weight', value: '400–800 GSM' }
    ],
    materials: ['Cotton'],
    variants: [
      { size: '70x140cm', color: 'Custom' }
    ],
    moqPieces: 500,
    moqKg: 0,
    sampleAvailable: true,
    privateLabelAvailable: true,
    certifications: ['OEKO-TEX'],
    images: ['https://images.unsplash.com/photo-1639298107851-058984903954?w=800&q=80'],
    hsCode: '6302.60',
    tags: ['private label', 'OEM', 'custom logo towels OEM India'],
    featured: false,
    active: true
  },
  {
    id: 'h-5',
    name: 'Hospitality Uniforms & Workwear',
    slug: 'hospitality-uniforms-india',
    category: 'hospitality-supplies',
    subcategory: 'Uniforms',
    shortDescription: 'Professional workwear for hotels. Hospitality uniforms India supplier.',
    fullDescription: 'Complete uniform solutions for hotel staff. From front desk to kitchen, we provide hospitality uniforms India that combine style with commercial-grade durability.',
    specifications: [
      { key: 'Category', value: 'Corporate & Hospitality' },
      { key: 'Fabric', value: 'Poly-Cotton Blends' },
      { key: 'Style', value: 'Customizable' }
    ],
    materials: ['Poly-Cotton'],
    variants: [
      { size: 'M', color: 'Black' },
      { size: 'L', color: 'Navy' }
    ],
    moqPieces: 50,
    moqKg: 0,
    sampleAvailable: true,
    privateLabelAvailable: true,
    certifications: [],
    images: ['https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80'],
    hsCode: '6211.32',
    tags: ['uniforms', 'workwear', 'hospitality uniforms India'],
    featured: false,
    active: true
  },
  {
    id: 'm-1',
    name: 'Hospital Grade Sterile Syringes',
    slug: 'hospital-grade-sterile-syringes',
    category: 'medical-supplies',
    subcategory: 'Consumables',
    shortDescription: 'ISO 13485 & CE Marked. Medical supplies exporter India standards.',
    fullDescription: 'Precision-engineered syringes for global hospitals. As a verified medical supplies exporter India, we provide sterile disposables that meet the highest international safety protocols.',
    specifications: [
      { key: 'Certification', value: 'ISO 13485, CE' },
      { key: 'Type', value: 'Luer Lock / Slip' },
      { key: 'Packaging', value: 'Blister Pack' }
    ],
    materials: ['Medical Grade Plastic'],
    variants: [
      { size: '2ml', color: 'Clear' },
      { size: '5ml', color: 'Clear' }
    ],
    moqPieces: 10000,
    moqKg: 0,
    sampleAvailable: true,
    privateLabelAvailable: false,
    certifications: ['ISO 13485', 'CE', 'FDA'],
    images: ['https://images.unsplash.com/photo-1631804959147-75a1b5a837e4?w=800&q=80'],
    hsCode: '9018.31',
    tags: ['medical', 'sterile', 'medical supplies exporter India'],
    featured: true,
    active: true
  }
];
