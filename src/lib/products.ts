
import type { Product, Category } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getImageUrl = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || 'https://picsum.photos/seed/placeholder/800/600';

export const categories: Category[] = [
    // Bed Linen
    { id: 'bed-linen', name: 'Bed Linen', slug: 'bed-linen', parentId: null, imageUrl: getImageUrl('bedding-sheets') },
    { id: 'bed-sheets', name: 'Bed Sheets', slug: 'bed-sheets', parentId: 'bed-linen', imageUrl: getImageUrl('bedding-sheets') },
    { id: 'duvet-covers', name: 'Duvet Covers', slug: 'duvet-covers', parentId: 'bed-linen', imageUrl: getImageUrl('bedding-sheets') },
    { id: 'pillowcases', name: 'Pillowcases', slug: 'pillowcases', parentId: 'bed-linen', imageUrl: getImageUrl('bedding-pillows') },

    // Bath Linen
    { id: 'bath-linen', name: 'Bath Linen', slug: 'bath-linen', parentId: null, imageUrl: getImageUrl('towel-terry') },
    { id: 'bath-towels', name: 'Bath Towels', slug: 'bath-towels', parentId: 'bath-linen', imageUrl: getImageUrl('towel-terry') },
    { id: 'hand-towels', name: 'Hand Towels', slug: 'hand-towels', parentId: 'bath-linen', imageUrl: getImageUrl('towel-terry') },
    { id: 'face-towels', name: 'Face Towels', slug: 'face-towels', parentId: 'bath-linen', imageUrl: getImageUrl('towel-terry') },
    { id: 'bath-robes', name: 'Bath Robes', slug: 'bath-robes', parentId: 'bath-linen', imageUrl: getImageUrl('towel-velour') },

    // F&B / Dining Linen
    { id: 'dining-linen', name: 'F&B / Dining Linen', slug: 'dining-linen', parentId: null, imageUrl: getImageUrl('hero-1') },
    { id: 'tablecloths', name: 'Tablecloths', slug: 'tablecloths', parentId: 'dining-linen' },
    { id: 'napkins', name: 'Napkins', slug: 'napkins', parentId: 'dining-linen' },

    // Uniforms
    { id: 'uniforms', name: 'Uniforms', slug: 'uniforms', parentId: null, imageUrl: getImageUrl('uniform-corporate') },
    { id: 'corporate-uniforms', name: 'Corporate Uniforms', slug: 'corporate-uniforms', parentId: 'uniforms', imageUrl: getImageUrl('uniform-corporate') },
    { id: 'industrial-uniforms', name: 'Industrial Uniforms', slug: 'industrial-uniforms', parentId: 'uniforms', imageUrl: getImageUrl('uniform-industrial') },
    { id: 'custom-t-shirts', name: 'Custom T-Shirts', slug: 'custom-t-shirts', parentId: 'uniforms', imageUrl: getImageUrl('uniform-tshirt') },
    { id: 'jerseys-sportswear', name: 'Jerseys & Sportswear', slug: 'jerseys-sportswear', parentId: 'uniforms', imageUrl: getImageUrl('uniform-jersey') },

    // Mattresses & Bedding
    { id: 'mattresses-bedding', name: 'Mattresses & Bedding', slug: 'mattresses-bedding', parentId: null, imageUrl: getImageUrl('mattress-foam') },
    { id: 'foam-mattress', name: 'Foam Mattress', slug: 'foam-mattress', parentId: 'mattresses-bedding', imageUrl: getImageUrl('mattress-foam') },
    { id: 'spring-mattress', name: 'Spring Mattress', slug: 'spring-mattress', parentId: 'mattresses-bedding', imageUrl: getImageUrl('mattress-spring') },
];


export const products: Product[] = [
  // Bath Linen Products
  {
    id: 'terry-bath-towel-premium',
    name: 'Premium Terry Bath Towel',
    slug: 'premium-terry-bath-towel',
    categoryId: 'bath-towels',
    description: 'Ultra-soft and absorbent 100% cotton terry bath towel, perfect for luxury hotels and spas.',
    images: [getImageUrl('towel-terry'), getImageUrl('hero-2')],
    specifications: { material: '100% Terry Cotton', gsm: '600 GSM', size: '30x60 inches' },
    customizationOptions: ['Color', 'GSM', 'Size', 'Embroidery'],
    moq: '100 units'
  },
  {
    id: 'waffle-robe-spa',
    name: 'Spa Waffle Weave Robe',
    slug: 'spa-waffle-weave-robe',
    categoryId: 'bath-robes',
    description: 'Lightweight and breathable waffle weave bathrobe, designed for comfort and quick drying.',
    images: [getImageUrl('towel-waffle'), getImageUrl('hero-2')],
    specifications: { material: '100% Cotton Waffle Weave', gsm: '300 GSM', size: 'One Size Fits Most' },
    customizationOptions: ['Color', 'Logo Embroidery', 'Piping'],
    moq: '50 units'
  },
   {
    id: 'velour-hand-towel',
    name: 'Velour Hand Towel',
    slug: 'velour-hand-towel',
    categoryId: 'hand-towels',
    description: 'Plush velour hand towel with a smooth finish for a touch of elegance in any guest bathroom.',
    images: [getImageUrl('towel-velour'), getImageUrl('hero-2')],
    specifications: { material: '100% Cotton Velour', gsm: '550 GSM', size: '16x30 inches' },
    customizationOptions: ['Color', 'Embroidery'],
    moq: '200 units'
  },

  // Uniforms Products
  {
    id: 'exec-corporate-shirt',
    name: 'Executive Corporate Shirt',
    slug: 'exec-corporate-shirt',
    categoryId: 'corporate-uniforms',
    description: 'Professional long-sleeve corporate shirt in a comfortable poly-cotton blend. Wrinkle-resistant and perfect for daily wear.',
    images: [getImageUrl('uniform-corporate')],
    specifications: { material: 'Poly-Cotton Blend', color: 'White, Blue, Grey' },
    customizationOptions: ['Logo Embroidery', 'Custom Colors', 'Fit (Slim/Regular)'],
    moq: '50 units'
  },
  {
    id: 'heavy-duty-workwear',
    name: 'Heavy-Duty Industrial Workwear',
    slug: 'heavy-duty-industrial-workwear',
    categoryId: 'industrial-uniforms',
    description: 'Durable and flame-retardant industrial coveralls designed for safety and mobility in harsh environments.',
    images: [getImageUrl('uniform-industrial')],
    specifications: { material: 'Flame-Retardant Cotton', features: 'High-visibility strips, reinforced knees' },
    customizationOptions: ['Reflective Taping', 'Company Logo Patch', 'Custom Pockets'],
    moq: '100 units'
  },
  {
    id: 'dri-fit-polo-tshirt',
    name: 'Dri-Fit Polo T-Shirt',
    slug: 'dri-fit-polo-tshirt',
    categoryId: 'custom-t-shirts',
    description: 'Moisture-wicking dri-fit polo t-shirt, ideal for promotional events, team wear, or casual corporate attire.',
    images: [getImageUrl('uniform-tshirt')],
    specifications: { material: 'Dri-Fit Polyester', features: 'UV Protection' },
    customizationOptions: ['Color Matching', 'Screen Printing', 'Embroidery'],
    moq: '100 units'
  },

  // Mattresses & Bedding
  {
    id: 'ortho-memory-foam-mattress',
    name: 'Orthopedic Memory Foam Mattress',
    slug: 'ortho-memory-foam-mattress',
    categoryId: 'foam-mattress',
    description: 'Multi-layered orthopedic memory foam mattress designed to provide ultimate support and pressure relief for a restful sleep.',
    images: [getImageUrl('mattress-foam')],
    specifications: { material: 'High-Density Memory Foam', firmness: 'Medium-Firm', height: '8 inches' },
    customizationOptions: ['Custom Sizes', 'Removable Cover with Branding'],
    moq: '10 units'
  },
  {
    id: 'hotel-pocket-spring-mattress',
    name: 'Hotel Pocket Spring Mattress',
    slug: 'hotel-pocket-spring-mattress',
    categoryId: 'spring-mattress',
    description: 'Luxury hotel-grade pocket spring mattress with zero partner disturbance and a plush pillow top for enhanced comfort.',
    images: [getImageUrl('mattress-spring')],
    specifications: { material: 'Individual Pocket Springs', top: 'Euro Top', firmness: 'Medium' },
    customizationOptions: ['Custom Sizes (King, Queen, etc.)', 'Fabric Cover'],
    moq: '10 units'
  },
  {
    id: 'sateen-stripe-bedsheet',
    name: '300TC Sateen Stripe Bedsheet Set',
    slug: 'sateen-stripe-bedsheet-set',
    categoryId: 'bed-sheets',
    description: 'Elegant and silky 300 thread count sateen stripe bedsheet set. Includes one flat sheet, one fitted sheet, and two pillowcases.',
    images: [getImageUrl('bedding-sheets')],
    specifications: { material: '100% Cotton Sateen', tc: '300 TC', color: 'White, Ivory' },
    customizationOptions: ['Custom Sizes', 'Color Matching', 'Thread Count (200-600 TC)'],
    moq: '50 sets'
  },
];
