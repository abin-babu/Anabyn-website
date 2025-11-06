
import { Timestamp } from 'firebase/firestore';

export type Category = {
  id: string;
  name: string;
  slug: string;
  parentId: string | null;
  description?: string;
  imageUrl?: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  categoryId: string;
  description: string;
  images: string[];
  specifications: {
    size?: string;
    material?: string;
    gsm?: string;
    tc?: string;
    color?: string;
    features?: string;
    firmness?: string;
    height?: string;
    top?: string;
  };
  customizationOptions?: string[];
  moq: string;
  safetyInfo?: string;
  specSheetUrl?: string;
  published?: boolean;
};

export type Inquiry = {
  id: string;
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  products?: { id: string, qty: number }[];
  status: 'Enquired' | 'Under Discussion' | 'Order Confirmed' | 'Shipped' | 'Completed';
  createdAt: Timestamp;
};
