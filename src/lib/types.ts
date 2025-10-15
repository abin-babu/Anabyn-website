
import { Timestamp } from 'firebase/firestore';

export type Product = {
  id: string;
  name: string;
  description: string;
  shortSpecs: string;
  category: {
    type: 'rug' | 'textile' | 'material' | 'towel' | 'robe';
    material: string;
    usage: 'indoor' | 'outdoor' | 'commercial' | 'bath' | 'spa' | 'hand-face' | 'specialty';
  };
  images: string[];
  moq: string;
  leadTime: string;
  specSheetUrl?: string;
  keyFeatures: string;
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
