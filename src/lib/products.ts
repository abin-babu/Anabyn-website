import type { Product } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getImageUrl = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';

export const products: Product[] = [
  {
    id: 'azure-weave-rug',
    name: 'Azure Weave Rug',
    description: 'A masterpiece of modern design, the Azure Weave Rug combines deep royal blues with intricate patterns. Woven from the finest New Zealand wool, it provides a luxurious and durable foundation for any high-end interior. Perfect for creating a statement in living rooms or executive suites.',
    shortSpecs: '100% New Zealand Wool, Hand-tufted',
    category: {
      type: 'rug',
      material: 'Wool',
      usage: 'indoor',
    },
    images: [getImageUrl('product-1-1'), getImageUrl('product-1-2')],
    moq: '10 units',
    leadTime: '4-6 Weeks',
    keyFeatures: 'Hand-tufted, 100% New Zealand Wool, Deep Royal Blue',
    specSheetUrl: '/specs/azure-weave-rug.pdf'
  },
  {
    id: 'golden-thread-textile',
    name: 'Golden Thread Textile',
    description: 'An opulent textile featuring threads of pure gold spun into a durable, commercial-grade fabric. Ideal for accent upholstery, drapery, or feature wall coverings, it brings an unparalleled touch of luxury and sophistication to any project.',
    shortSpecs: 'Silk and Gold Blend, Commercial Grade',
    category: {
      type: 'textile',
      material: 'Silk',
      usage: 'commercial',
    },
    images: [getImageUrl('product-2-1'), getImageUrl('product-2-2')],
    moq: '50 meters',
    leadTime: '8-10 Weeks',
    keyFeatures: 'Real gold threads, High durability, Luxury accent',
    specSheetUrl: '/specs/golden-thread-textile.pdf'
  },
  {
    id: 'royal-blue-velvet',
    name: 'Royal Blue Velvet',
    description: 'Plush, rich, and irresistibly soft, our Royal Blue Velvet is the epitome of comfort and elegance. Its deep pile and vibrant color make it an excellent choice for statement furniture pieces that invite touch and admiration.',
    shortSpecs: 'Cotton-blend, High-pile velvet',
    category: {
      type: 'material',
      material: 'Velvet',
      usage: 'indoor',
    },
    images: [getImageUrl('product-3-1')],
    moq: '30 meters',
    leadTime: '3-4 Weeks',
    keyFeatures: 'Plush texture, Vibrant color, Versatile use',
    specSheetUrl: '/specs/royal-blue-velvet.pdf'
  },
  {
    id: 'outdoor-performance-fabric',
    name: 'Outdoor Performance Fabric',
    description: 'Engineered to withstand the elements, this fabric offers superior resistance to UV fading, moisture, and stains. Its robust weave and modern aesthetic make it perfect for luxury outdoor seating, umbrellas, and marine applications without compromising on style.',
    shortSpecs: 'Solution-dyed acrylic, UV/Water resistant',
    category: {
      type: 'textile',
      material: 'Acrylic',
      usage: 'outdoor',
    },
    images: [getImageUrl('product-4-1')],
    moq: '40 meters',
    leadTime: '5-7 Weeks',
    keyFeatures: 'UV resistant, Water repellent, Easy to clean',
    specSheetUrl: '/specs/outdoor-performance-fabric.pdf'
  },
];
