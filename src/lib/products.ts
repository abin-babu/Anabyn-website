
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
    description: 'Experience pure luxury with our ultra-plush 100% cotton terry towels. Expertly crafted for maximum absorbency and a sumptuously soft feel, available in weights up to 700 GSM for a true 5-star experience.',
    images: [getImageUrl('towel-terry-stack'), getImageUrl('towel-waffle')],
    specifications: { material: '100% Terry Cotton', gsm: '400-700 GSM', size: 'Customizable' },
    customizationOptions: ['Color', 'GSM', 'Size', 'Embroidery'],
    moq: '100 units',
    shortSpecs: 'Up to 700 GSM, 100% Terry Cotton'
  },
  {
    id: 'waffle-robe-spa',
    slug: 'spa-waffle-weave-robe',
    name: 'Spa Waffle Weave Robe',
    categoryId: 'bath-robes',
    description: 'A sophisticated and lightweight waffle weave bathrobe, designed for ultimate comfort and quick-drying performance. The perfect robe for spas, hotels, and resorts.',
    images: [getImageUrl('towel-waffle'), getImageUrl('towel-velour')],
    specifications: { material: '100% Cotton Waffle Weave', gsm: '300-450 GSM', size: 'One Size Fits Most' },
    customizationOptions: ['Color', 'Logo Embroidery', 'Piping'],
    moq: '50 units',
    shortSpecs: 'Luxury Waffle Weave, 300-450 GSM'
  },
   {
    id: 'velour-hand-towel',
    slug: 'velour-hand-towel',
    name: 'Velour Hand Towel',
    categoryId: 'hand-towels',
    description: 'Add a touch of elegance with our plush velour hand towels. Featuring a smooth, sheared finish for a luxurious feel and excellent absorbency, perfect for premium guest bathrooms.',
    images: [getImageUrl('hand-towel'), getImageUrl('towel-terry')],
    specifications: { material: '100% Cotton Velour', gsm: '550 GSM', size: '16x30 inches' },
    customizationOptions: ['Color', 'Embroidery'],
    moq: '200 units',
    shortSpecs: '550 GSM, Premium Plush Velour'
  },

  // Uniforms Products
  {
    id: 'exec-corporate-shirt',
    slug: 'exec-corporate-shirt',
    name: 'Executive Corporate Shirt',
    categoryId: 'corporate-uniforms',
    description: 'Impeccably tailored professional shirt in a wrinkle-resistant poly-cotton blend. Designed for all-day comfort and a consistently sharp appearance in any corporate setting.',
    images: [getImageUrl('uniform-corporate')],
    specifications: { material: 'Premium Poly-Cotton Blend', color: 'White, Blue, Grey' },
    customizationOptions: ['Logo Embroidery', 'Custom Colors', 'Fit (Slim/Regular)'],
    moq: '50 units',
    shortSpecs: 'Premium Poly-Cotton, Wrinkle-Resistant'
  },
  {
    id: 'heavy-duty-workwear',
    slug: 'heavy-duty-industrial-workwear',
    name: 'Heavy-Duty Industrial Workwear',
    categoryId: 'industrial-uniforms',
    description: 'Engineered for safety and durability, our flame-retardant industrial coveralls offer maximum protection and mobility. Features high-visibility strips and reinforced construction.',
    images: [getImageUrl('uniform-industrial')],
    specifications: { material: 'Flame-Retardant Cotton', features: 'High-visibility strips, reinforced knees' },
    customizationOptions: ['Reflective Taping', 'Company Logo Patch', 'Custom Pockets'],
    moq: '100 units',
    shortSpecs: 'Certified Flame-Retardant Cotton'
  },
  {
    id: 'dri-fit-polo-tshirt',
    slug: 'dri-fit-polo-tshirt',
    name: 'Dri-Fit Polo T-Shirt',
    categoryId: 'custom-t-shirts',
    description: 'High-performance moisture-wicking polo shirt with UV protection. Ideal for corporate events, team wear, or casual staff uniforms, keeping your team cool and professional.',
    images: [getImageUrl('uniform-tshirt')],
    specifications: { material: 'Performance Dri-Fit Polyester', features: 'UV Protection' },
    customizationOptions: ['Color Matching', 'Screen Printing', 'Embroidery'],
    moq: '100 units',
    shortSpecs: 'Performance Dri-Fit, UV Protection'
  },

  // Mattresses & Bedding
  {
    id: 'ortho-memory-foam-mattress',
    slug: 'ortho-memory-foam-mattress',
    name: 'Orthopedic Memory Foam Mattress',
    categoryId: 'foam-mattress',
    description: 'Expertly engineered orthopedic mattress with high-density memory foam. Provides superior pressure relief and spinal alignment for an exceptionally restful sleep.',
    images: [getImageUrl('mattress-foam-2'), getImageUrl('mattress-foam')],
    specifications: { material: 'High-Density Orthopedic Foam', firmness: 'Medium-Firm', height: '8-12 inches' },
    customizationOptions: ['Custom Sizes', 'Removable Cover with Branding'],
    moq: '10 units',
    shortSpecs: 'High-Density Orthopedic Foam, 8-12"'
  },
  {
    id: 'hotel-pocket-spring-mattress',
    slug: 'hotel-pocket-spring-mattress',
    name: '5-Star Hotel Pocket Spring Mattress',
    categoryId: 'spring-mattress',
    description: 'Indulge in 5-star comfort with our luxury pocket spring mattress. Featuring a plush Euro top and zero partner disturbance technology for an undisturbed, premium sleep experience.',
    images: [getImageUrl('mattress-spring-2'), getImageUrl('mattress-spring')],
    specifications: { material: 'Individual Pocket Springs', top: 'Plush Euro Top', firmness: 'Medium' },
    customizationOptions: ['Custom Sizes (King, Queen, etc.)', 'Fabric Cover'],
    moq: '10 units',
    shortSpecs: 'Luxury Pocket Spring, Plush Euro Top'
  },
  {
    id: 'sateen-stripe-bedsheet',
    slug: 'sateen-stripe-bedsheet-set',
    name: 'Sateen Stripe Bedsheet Set',
    categoryId: 'bed-sheets',
    description: 'Silky and elegant sateen stripe bedsheet sets crafted from 100% long-staple cotton. Available in thread counts up to 600TC for an exquisitely smooth finish and lasting durability.',
    images: [getImageUrl('bedding-sheets')],
    specifications: { material: '100% Cotton Sateen', tc: '300-600 TC', color: 'White, Ivory' },
    customizationOptions: ['Custom Sizes', 'Color Matching', 'Thread Count (200-600 TC)'],
    moq: '50 sets',
    shortSpecs: 'Up to 600 TC, 100% Cotton Sateen'
  },
  // F&B / Dining Linen
  {
    id: 'jacquard-tablecloth',
    slug: 'jacquard-tablecloth',
    name: 'Jacquard Weave Tablecloth',
    categoryId: 'tablecloths',
    description: 'Sophisticated jacquard weave tablecloths with intricate patterns. Made from highly durable, stain-resistant polyester for fine dining and banquet settings.',
    images: [getImageUrl('table-cloth')],
    specifications: { material: '100% Polyester Jacquard', color: 'White, Ivory, Black' },
    customizationOptions: ['Custom Sizes', 'Color Matching', 'Custom Patterns'],
    moq: '25 units',
    shortSpecs: 'Premium Polyester Jacquard, Stain-Resistant'
  },
  {
    id: 'cotton-dinner-napkins',
    slug: 'cotton-dinner-napkins',
    name: '100% Cotton Dinner Napkins',
    categoryId: 'napkins',
    description: 'Classic, heavyweight 100% cotton dinner napkins offering excellent absorbency and a premium feel. Available in a vast range of custom-dyed colors.',
    images: [getImageUrl('napkin')],
    specifications: { material: '100% Premium Cotton', size: '20x20 inches', color: 'Custom' },
    customizationOptions: ['Color Matching', 'Embroidery'],
    moq: '200 units',
    shortSpecs: '100% Premium Cotton, Custom Colors'
  },


  // Chemicals & Supplies
  {
    id: 'laundry-detergent-pro',
    slug: 'laundry-detergent-pro',
    name: 'Professional Laundry Detergent',
    categoryId: 'laundry-chemicals',
    description: 'A concentrated, high-efficiency laundry detergent formulated for commercial use. Powerfully removes tough stains while protecting fabric integrity and color.',
    images: [getImageUrl('chemical-laundry')],
    specifications: { size: '20 Litre Can', features: 'Low-foam formula, suitable for all water temperatures' },
    customizationOptions: ['Custom Fragrance', 'Private Labeling'],
    moq: '10 Cans',
    shortSpecs: '20L, Professional Concentrated Formula'
  },
  {
    id: 'all-purpose-cleaner',
    slug: 'all-purpose-cleaner',
    name: 'All-Purpose Surface Cleaner',
    categoryId: 'cleaning-supplies',
    description: 'A versatile, commercial-grade all-purpose cleaner that disinfects and provides a streak-free shine. Ideal for all non-porous surfaces.',
    images: [getImageUrl('cleaning-cart')],
    specifications: { size: '5 Litre Can', features: 'Disinfectant, Streak-free shine' },
    customizationOptions: ['Private Labeling'],
    moq: '20 Cans',
    shortSpecs: '5L, Commercial-Grade Disinfectant'
  },
];

    

    