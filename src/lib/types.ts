
import { Timestamp } from 'firebase/firestore';

export type Category = {
  id: string;
  name: string;
  slug: string;
  parentId: string | null;
  description?: string;
  imageUrl?: string;
};

export type ProductVariant = {
  size: string;
  gsm?: string;
  tc?: string;
  color?: string;
};

export type ProductSpecification = {
  key: string;
  value: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: "hospitality-supplies" | "medical-supplies";
  subcategory: string;
  shortDescription: string;
  fullDescription: string;
  specifications: ProductSpecification[];
  materials: string[];
  variants: ProductVariant[];
  moqPieces: number;
  moqKg: number;
  sampleAvailable: boolean;
  privateLabelAvailable: boolean;
  certifications: string[];
  images: string[];
  hsCode: string;
  tags: string[];
  featured: boolean;
  active: boolean;
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
