
import { Timestamp } from 'firebase/firestore';

export type ProductCategory = {
  type: 'towel' | 'robe' | 'uniform' | 'apparel' | 'mattress' | 'bedding' | 'chemical';
  material: string; // E.g., Terry, Cotton, Poly-Cotton, Foam
  usage: string; // E.g., bath, spa, corporate, industrial, hospitality
};

export type Product = {
  id: string;
  name: string;
  description: string;
  shortSpecs: string;
  category: ProductCategory;
  images: string[];
  moq: string;
  leadTime: string;
  specSheetUrl?: string;
  keyFeatures: string;
  customizationOptions?: string[];
  safetyInfo?: string;
};


export type Inquiry = {
  id: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  type: 'general-inquiry' | 'sample-request' | 'bulk-order';
  message: string;
  products: { id: string, qty: number }[];
  status: 'new' | 'contacted' | 'quoted' | 'done';
  source: 'site' | 'whatsapp';
  whatsappOptIn?: boolean;
  createdAt: Timestamp;
};
