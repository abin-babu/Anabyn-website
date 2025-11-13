
import type { Product, Category } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getImageUrl = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || 'https://placehold.co/800x600/e2e8f0/e2e8f0';

export const categories: Category[] = [
    // Bed Linen
    { id: 'bed-linen', name: 'Bed Linen', slug: 'bed-linen', parentId: null, imageUrl: getImageUrl('bedding-sheets') },
    { id: 'bed-sheets', name: 'Bed Sheets', slug: 'bed-sheets', parentId: 'bed-linen', imageUrl: getImageUrl('bedding-sheets') },
    { id: 'duvet-covers', name: 'Duvet Covers', slug: 'duvet-covers', parentId: 'bed-linen', imageUrl: getImageUrl('duvet-cover') },
    { id: 'pillowcases', name: 'Pillowcases', slug: 'pillowcases', parentId: 'bed-linen', imageUrl: getImageUrl('bedding-pillows') },

    // Bath Linen
    { id: 'bath-linen', name: 'Bath Linen', slug: 'bath-linen', parentId: null, imageUrl: getImageUrl('towel-terry') },
    { id: 'bath-towels', name: 'Bath Towels', slug: 'bath-towels', parentId: 'bath-linen', imageUrl: getImageUrl('towel-terry-stack') },
    { id: 'hand-towels', name: 'Hand Towels', slug: 'hand-towels', parentId: 'bath-linen', imageUrl: getImageUrl('hand-towel') },
    { id: 'face-towels', name: 'Face Towels', slug: 'face-towels', parentId: 'bath-linen', imageUrl: getImageUrl('face-towel') },
    { id: 'bath-robes', name: 'Bath Robes', slug: 'bath-robes', parentId: 'bath-linen', imageUrl: getImageUrl('towel-velour') },

    // F&B / Dining Linen
    { id: 'dining-linen', name: 'F&B / Dining Linen', slug: 'dining-linen', parentId: null, imageUrl: getImageUrl('dining-linen') },
    { id: 'tablecloths', name: 'Tablecloths', slug: 'tablecloths', parentId: 'dining-linen', imageUrl: getImageUrl('table-cloth') },
    { id: 'napkins', name: 'Napkins', slug: 'napkins', parentId: 'dining-linen', imageUrl: getImageUrl('napkin') },

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
    
    // Chemicals & Supplies
    { id: 'chemicals-supplies', name: 'Chemicals & Supplies', slug: 'chemicals-supplies', parentId: null, imageUrl: getImageUrl('chemical-cleaning') },
    { id: 'laundry-chemicals', name: 'Laundry Chemicals', slug: 'laundry-chemicals', parentId: 'chemicals-supplies', imageUrl: getImageUrl('chemical-laundry') },
    { id: 'cleaning-supplies', name: 'Cleaning Supplies', slug: 'cleaning-supplies', parentId: 'chemicals-supplies', imageUrl: getImageUrl('cleaning-cart') },
];


export const products: Product[] = [
  // Bath Linen Products
  {
    id: 'terry-bath-towel-premium',
    slug: 'premium-terry-bath-towel',
    name: 'Premium Terry Bath Towel',
    categoryId: 'bath-towels',
    description: 'Ultra-soft and absorbent 100% cotton terry bath towel, perfect for luxury hotels and spas.',
    images: [getImageUrl('towel-terry-stack'), getImageUrl('towel-waffle')],
    specifications: { material: '100% Terry Cotton', gsm: '600 GSM', size: '30x60 inches' },
    customizationOptions: ['Color', 'GSM', 'Size', 'Embroidery'],
    moq: '100 units',
    shortSpecs: '600 GSM, 100% Cotton'
  },
  {
    id: 'waffle-robe-spa',
    slug: 'spa-waffle-weave-robe',
    name: 'Spa Waffle Weave Robe',
    categoryId: 'bath-robes',
    description: 'Lightweight and breathable waffle weave bathrobe, designed for comfort and quick drying.',
    images: [getImageUrl('towel-waffle'), getImageUrl('towel-velour')],
    specifications: { material: '100% Cotton Waffle Weave', gsm: '300 GSM', size: 'One Size Fits Most' },
    customizationOptions: ['Color', 'Logo Embroidery', 'Piping'],
    moq: '50 units',
    shortSpecs: '300 GSM, Waffle Weave'
  },
   {
    id: 'velour-hand-towel',
    slug: 'velour-hand-towel',
    name: 'Velour Hand Towel',
    categoryId: 'hand-towels',
    description: 'Plush velour hand towel with a smooth finish for a touch of elegance in any guest bathroom.',
    images: [getImageUrl('hand-towel'), getImageUrl('towel-terry')],
    specifications: { material: '100% Cotton Velour', gsm: '550 GSM', size: '16x30 inches' },
    customizationOptions: ['Color', 'Embroidery'],
    moq: '200 units',
    shortSpecs: '550 GSM, Plush Velour'
  },

  // Uniforms Products
  {
    id: 'exec-corporate-shirt',
    slug: 'exec-corporate-shirt',
    name: 'Executive Corporate Shirt',
    categoryId: 'corporate-uniforms',
    description: 'Professional long-sleeve corporate shirt in a comfortable poly-cotton blend. Wrinkle-resistant and perfect for daily wear.',
    images: [getImageUrl('uniform-corporate')],
    specifications: { material: 'Poly-Cotton Blend', color: 'White, Blue, Grey' },
    customizationOptions: ['Logo Embroidery', 'Custom Colors', 'Fit (Slim/Regular)'],
    moq: '50 units',
    shortSpecs: 'Poly-Cotton, Wrinkle-Resistant'
  },
  {
    id: 'heavy-duty-workwear',
    slug: 'heavy-duty-industrial-workwear',
    name: 'Heavy-Duty Industrial Workwear',
    categoryId: 'industrial-uniforms',
    description: 'Durable and flame-retardant industrial coveralls designed for safety and mobility in harsh environments.',
    images: [getImageUrl('uniform-industrial')],
    specifications: { material: 'Flame-Retardant Cotton', features: 'High-visibility strips, reinforced knees' },
    customizationOptions: ['Reflective Taping', 'Company Logo Patch', 'Custom Pockets'],
    moq: '100 units',
    shortSpecs: 'Flame-Retardant Cotton'
  },
  {
    id: 'dri-fit-polo-tshirt',
    slug: 'dri-fit-polo-tshirt',
    name: 'Dri-Fit Polo T-Shirt',
    categoryId: 'custom-t-shirts',
    description: 'Moisture-wicking dri-fit polo t-shirt, ideal for promotional events, team wear, or casual corporate attire.',
    images: [getImageUrl('uniform-tshirt')],
    specifications: { material: 'Dri-Fit Polyester', features: 'UV Protection' },
    customizationOptions: ['Color Matching', 'Screen Printing', 'Embroidery'],
    moq: '100 units',
    shortSpecs: 'Dri-Fit, UV Protection'
  },

  // Mattresses & Bedding
  {
    id: 'ortho-memory-foam-mattress',
    slug: 'ortho-memory-foam-mattress',
    name: 'Orthopedic Memory Foam Mattress',
    categoryId: 'foam-mattress',
    description: 'Multi-layered orthopedic memory foam mattress designed to provide ultimate support and pressure relief for a restful sleep.',
    images: [getImageUrl('mattress-foam-2'), getImageUrl('mattress-foam')],
    specifications: { material: 'High-Density Memory Foam', firmness: 'Medium-Firm', height: '8 inches' },
    customizationOptions: ['Custom Sizes', 'Removable Cover with Branding'],
    moq: '10 units',
    shortSpecs: 'Memory Foam, 8-inch'
  },
  {
    id: 'hotel-pocket-spring-mattress',
    slug: 'hotel-pocket-spring-mattress',
    name: 'Hotel Pocket Spring Mattress',
    categoryId: 'spring-mattress',
    description: 'Luxury hotel-grade pocket spring mattress with zero partner disturbance and a plush pillow top for enhanced comfort.',
    images: [getImageUrl('mattress-spring-2'), getImageUrl('mattress-spring')],
    specifications: { material: 'Individual Pocket Springs', top: 'Euro Top', firmness: 'Medium' },
    customizationOptions: ['Custom Sizes (King, Queen, etc.)', 'Fabric Cover'],
    moq: '10 units',
    shortSpecs: 'Pocket Spring, Euro Top'
  },
  {
    id: 'sateen-stripe-bedsheet',
    slug: 'sateen-stripe-bedsheet-set',
    name: '300TC Sateen Stripe Bedsheet Set',
    categoryId: 'bed-sheets',
    description: 'Elegant and silky 300 thread count sateen stripe bedsheet set. Includes one flat sheet, one fitted sheet, and two pillowcases.',
    images: [getImageUrl('bedding-sheets')],
    specifications: { material: '100% Cotton Sateen', tc: '300 TC', color: 'White, Ivory' },
    customizationOptions: ['Custom Sizes', 'Color Matching', 'Thread Count (200-600 TC)'],
    moq: '50 sets',
    shortSpecs: '300TC, 100% Cotton Sateen'
  },
  // F&B / Dining Linen
  {
    id: 'jacquard-tablecloth',
    slug: 'jacquard-tablecloth',
    name: 'Jacquard Weave Tablecloth',
    categoryId: 'tablecloths',
    description: 'Elegant jacquard weave tablecloth perfect for fine dining restaurants and banquet halls. Stain-resistant and highly durable.',
    images: [getImageUrl('table-cloth')],
    specifications: { material: '100% Polyester Jacquard', color: 'White, Ivory, Black' },
    customizationOptions: ['Custom Sizes', 'Color Matching', 'Custom Patterns'],
    moq: '25 units',
    shortSpecs: 'Polyester Jacquard, Stain-Resistant'
  },
  {
    id: 'cotton-dinner-napkins',
    slug: 'cotton-dinner-napkins',
    name: '100% Cotton Dinner Napkins',
    categoryId: 'napkins',
    description: 'Classic and absorbent 100% cotton dinner napkins, available in a wide range of colors to match your restaurant\'s decor.',
    images: [getImageUrl('napkin')],
    specifications: { material: '100% Cotton', size: '20x20 inches', color: 'Custom' },
    customizationOptions: ['Color Matching', 'Embroidery'],
    moq: '200 units',
    shortSpecs: '100% Cotton, 20x20 inches'
  },


  // Chemicals & Supplies
  {
    id: 'laundry-detergent-pro',
    slug: 'laundry-detergent-pro',
    name: 'Professional Laundry Detergent',
    categoryId: 'laundry-chemicals',
    description: 'High-efficiency, concentrated laundry detergent for commercial use. Effective on tough stains while being gentle on fabrics.',
    images: [getImageUrl('chemical-laundry')],
    specifications: { size: '20 Litre Can', features: 'Low-foam formula, suitable for all water temperatures' },
    customizationOptions: ['Custom Fragrance', 'Private Labeling'],
    moq: '10 Cans',
    shortSpecs: '20L, Concentrated Formula'
  },
  {
    id: 'all-purpose-cleaner',
    slug: 'all-purpose-cleaner',
    name: 'All-Purpose Surface Cleaner',
    categoryId: 'cleaning-supplies',
    description: 'Versatile all-purpose cleaner for use on a variety of surfaces in guest rooms, kitchens, and public areas. Kills 99.9% of germs.',
    images: [getImageUrl('cleaning-cart')],
    specifications: { size: '5 Litre Can', features: 'Disinfectant, Streak-free shine' },
    customizationOptions: ['Private Labeling'],
    moq: '20 Cans',
    shortSpecs: '5L, Disinfectant'
  },
];

    