
import type { Product } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getImageUrl = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || 'https://picsum.photos/seed/placeholder/800/600';

export const mainCategories = {
  textiles: 'Textiles & Towels',
  uniforms: 'Custom Uniforms & Apparel',
  bedding: 'Mattresses & Bedding',
  chemicals: 'Chemicals & Supplies',
};

export const products: Product[] = [
  // Textiles & Towels
  {
    id: 'terry-bath-towel',
    name: 'Terry Bath Towel',
    description: 'Soft and highly absorbent terry towels, perfect for daily bath use. Made from 100% cotton, offering durability and comfort for hotel guests.',
    shortSpecs: '100% Cotton, Soft & Absorbent',
    category: {
      type: 'towel',
      material: 'Terry',
      usage: 'Textiles & Towels',
    },
    images: [getImageUrl('product-1-1'), getImageUrl('product-1-2')],
    moq: '100 units',
    leadTime: '4-6 Weeks',
    keyFeatures: 'Soft, highly absorbent, perfect for daily bath use',
  },
  {
    id: 'velour-bath-towel',
    name: 'Velour Bath Towel',
    description: 'Plush and luxurious velour towels with a smooth, sheared finish that provides a premium feel. Ideal for high-end hotels and suites.',
    shortSpecs: '100% Cotton, Plush & Luxurious',
    category: {
      type: 'towel',
      material: 'Velour',
      usage: 'Textiles & Towels',
    },
    images: [getImageUrl('product-3-1'), getImageUrl('product-2-2')],
    moq: '100 units',
    leadTime: '5-7 Weeks',
    keyFeatures: 'Plush, luxurious, smooth finish for a premium feel',
  },
  {
    id: 'waffle-weave-towel',
    name: 'Waffle Weave Towel',
    description: 'Lightweight and quick-drying waffle weave towels. The distinctive texture is not only stylish but also highly functional for spa and wellness areas.',
    shortSpecs: '100% Cotton, Lightweight & Quick-Drying',
    category: {
      type: 'towel',
      material: 'Waffle',
      usage: 'Textiles & Towels',
    },
    images: [getImageUrl('product-2-1'), getImageUrl('hero-2')],
    moq: '150 units',
    leadTime: '4-6 Weeks',
    keyFeatures: 'Lightweight, quick-drying, ideal for spa and wellness areas',
  },

  // Custom Uniforms & Apparel
  {
    id: 'corporate-uniforms',
    name: 'Corporate Uniforms',
    description: 'Professional and stylish corporate uniforms, including shirts, blouses, trousers, and skirts. Customizable with your brand logo and colors.',
    shortSpecs: 'Cotton/Poly-Cotton, Logo Embroidery',
    category: {
      type: 'uniform',
      material: 'Corporate Uniforms',
      usage: 'Custom Uniforms & Apparel',
    },
    images: [getImageUrl('uniform-corporate')],
    moq: '50 sets',
    leadTime: '6-8 Weeks',
    keyFeatures: 'Professional look, fabric options, custom branding',
    customizationOptions: ['Size (XS-XXXL)', 'Fabric (cotton, poly-cotton)', 'Logo embroidery or print', 'Color selection'],
  },
  {
    id: 'industrial-uniforms',
    name: 'Industrial Uniforms',
    description: 'Durable and functional industrial uniforms designed for safety and comfort in demanding work environments. Options for high-visibility and specialized fabrics.',
    shortSpecs: 'Durable fabrics, Safety compliant',
    category: {
      type: 'uniform',
      material: 'Industrial Uniforms',
      usage: 'Custom Uniforms & Apparel',
    },
    images: [getImageUrl('uniform-industrial')],
    moq: '100 units',
    leadTime: '6-8 Weeks',
    keyFeatures: 'High-durability, safety features, comfortable for long hours',
    customizationOptions: ['Specialized fabrics', 'High-visibility strips', 'Reinforced stitching', 'Custom sizing'],
  },
  {
    id: 'custom-t-shirts',
    name: 'Custom T-Shirts',
    description: 'High-quality custom t-shirts for corporate events, promotions, or team wear. Available in a variety of fabrics, colors, and printing options.',
    shortSpecs: 'Cotton/Dri-Fit, Screen/Digital Print',
    category: {
      type: 'apparel',
      material: 'Custom T-Shirts',
      usage: 'Custom Uniforms & Apparel',
    },
    images: [getImageUrl('uniform-tshirt')],
    moq: '100 units',
    leadTime: '3-4 Weeks',
    keyFeatures: 'Variety of fabrics and colors, high-quality printing',
    customizationOptions: ['Fabric (cotton, dri-fit)', 'GSM customization', 'Screen print, Digital print, Embroidery', 'Wide color range'],
  },
  {
    id: 'jerseys-sportswear',
    name: 'Jerseys & Sportswear',
    description: 'Custom-designed jerseys and sportswear for teams and athletic events. Made with breathable, performance-enhancing fabrics.',
    shortSpecs: 'Dri-fit/Performance fabrics, Sublimation print',
    category: {
      type: 'apparel',
      material: 'Jerseys & Sportswear',
      usage: 'Custom Uniforms & Apparel',
    },
    images: [getImageUrl('uniform-jersey')],
    moq: '50 units',
    leadTime: '4-6 Weeks',
    keyFeatures: 'Breathable fabrics, full customization of design and color',
    customizationOptions: ['Sublimation printing', 'Custom team logos and numbers', 'Performance fabric selection', 'Player-specific sizing'],
  },

  // Mattresses & Bedding
  {
    id: 'foam-mattress',
    name: 'Foam Mattress',
    description: 'High-density foam mattresses offering excellent support and comfort for hospitality use. Durable and designed for longevity.',
    shortSpecs: 'High-Density Foam, Hotel Grade',
    category: {
      type: 'mattress',
      material: 'Foam Mattress',
      usage: 'Mattresses & Bedding',
    },
    images: [getImageUrl('mattress-foam')],
    moq: '10 units',
    leadTime: '4-6 Weeks',
    keyFeatures: 'Excellent support, durable, comfortable for guests',
    customizationOptions: ['Size (Single, Queen, King, Custom)', 'Firmness (Soft, Medium, Hard)', 'Fabric cover branding'],
  },
  {
    id: 'spring-mattress',
    name: 'Spring Mattress',
    description: 'Classic spring mattresses providing a traditional bouncy feel with robust support. Ideal for a wide range of hotel accommodations.',
    shortSpecs: 'Bonnell/Pocket Spring, Durable Support',
    category: {
      type: 'mattress',
      material: 'Spring Mattress',
      usage: 'Mattresses & Bedding',
    },
    images: [getImageUrl('mattress-spring')],
    moq: '10 units',
    leadTime: '4-6 Weeks',
    keyFeatures: 'Traditional support, long-lasting, cost-effective',
    customizationOptions: ['Size (Single, Queen, King, Custom)', 'Firmness level', 'Custom fabric covers'],
  },
  {
    id: 'bedsheets',
    name: 'Bedsheets',
    description: 'Premium bedsheets available in a range of thread counts and materials, including 100% cotton and poly-cotton blends for durability.',
    shortSpecs: 'Cotton/Poly-Cotton, Various Thread Counts',
    category: {
      type: 'bedding',
      material: 'Bedsheets',
      usage: 'Mattresses & Bedding',
    },
    images: [getImageUrl('bedding-sheets')],
    moq: '100 sets',
    leadTime: '4-6 Weeks',
    keyFeatures: 'Soft and durable, choice of materials and colors',
    customizationOptions: ['Color', 'GSM and Thread Count', 'Size', 'Embroidery'],
  },
  {
    id: 'pillow-covers',
    name: 'Pillow Covers',
    description: 'High-quality pillow covers to match your bedding. Available in various fabrics and sizes, with options for custom embroidery.',
    shortSpecs: 'Cotton/Satin, Custom Embroidery',
    category: {
      type: 'bedding',
      material: 'Pillow Covers',
      usage: 'Mattresses & Bedding',
    },
    images: [getImageUrl('bedding-pillows')],
    moq: '200 units',
    leadTime: '3-5 Weeks',
    keyFeatures: 'Soft fabric, elegant finish, branding options',
    customizationOptions: ['Fabric', 'Size', 'Embroidery', 'Color matching'],
  },

  // Chemicals & Supplies
  {
    id: 'laundry-chemicals',
    name: 'Laundry Chemicals',
    description: 'A comprehensive range of professional laundry chemicals, including detergents, softeners, and stain removers, formulated for commercial laundries.',
    shortSpecs: 'Concentrated Formula, High Efficiency',
    category: {
      type: 'chemical',
      material: 'Laundry Chemicals',
      usage: 'Chemicals & Supplies',
    },
    images: [getImageUrl('chemical-laundry')],
    moq: '50 Liters',
    leadTime: '2-3 Weeks',
    keyFeatures: 'Effective on tough stains, suitable for all water types',
    safetyInfo: 'Refer to Safety Data Sheet (SDS) for handling instructions. Keep out of reach of children.',
    specSheetUrl: '#',
  },
  {
    id: 'cleaning-solutions',
    name: 'Cleaning Solutions',
    description: 'Versatile, all-purpose cleaning solutions for maintaining hygiene across your facility. Effective on floors, surfaces, and bathrooms.',
    shortSpecs: 'Multi-Surface, Concentrated',
    category: {
      type: 'chemical',
      material: 'Cleaning Solutions',
      usage: 'Chemicals & Supplies',
    },
    images: [getImageUrl('chemical-cleaning')],
    moq: '50 Liters',
    leadTime: '2-3 Weeks',
    keyFeatures: 'Multi-purpose, economical dilution ratios',
    safetyInfo: 'Refer to Safety Data Sheet (SDS). Avoid contact with eyes.',
    specSheetUrl: '#',
  },
];

export const subCategories = [...new Set(products.map(p => p.category.material))];
