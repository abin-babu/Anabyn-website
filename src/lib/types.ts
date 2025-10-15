export type Product = {
  id: string;
  name: string;
  description: string;
  shortSpecs: string;
  category: {
    type: 'rug' | 'textile' | 'material';
    material: string;
    usage: 'indoor' | 'outdoor' | 'commercial';
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
  type: 'Sample Request' | 'General Inquiry' | 'Bulk Order';
  message: string;
  productId?: string;
  productName?: string;
  status: 'New' | 'Contacted' | 'Quoted';
  createdAt: Date;
};
