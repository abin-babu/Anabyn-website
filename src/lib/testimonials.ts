
export type Testimonial = {
  id: string;
  clientName: string;
  designation: string;
  company: string;
  country: string;
  countryFlag: string;
  rating: number;
  testimonialText: string;
  productCategory: 'Hospitality' | 'Medical' | 'All';
  orderYear: number;
  photoUrl: string;
  linkedinUrl: string;
  verified: boolean;
  featured: boolean;
};

export const initialTestimonials: Testimonial[] = [
  {
    id: 't1',
    clientName: 'James Henderson',
    designation: 'Director of Procurement',
    company: 'Luxury Oasis Resorts',
    country: 'United Arab Emirates',
    countryFlag: '🇦🇪',
    rating: 5,
    testimonialText: "Anabyn's 400TC sateen sheets have transformed our guest experience. The consistency in quality across 500+ sets was impressive. Their logistics team handled Dubai customs effortlessly.",
    productCategory: 'Hospitality',
    orderYear: 2024,
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    linkedinUrl: '#',
    verified: true,
    featured: true
  },
  {
    id: 't2',
    clientName: 'Dr. Sarah Müller',
    designation: 'Supply Chain Manager',
    company: 'Berlin Central Clinic',
    country: 'Germany',
    countryFlag: '🇩🇪',
    rating: 5,
    testimonialText: "Sourcing medical disposables from India was a concern for our compliance team, but Anabyn's documentation and CE marking were impeccable. The nitrile gloves meet all our AQL standards.",
    productCategory: 'Medical',
    orderYear: 2023,
    photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    linkedinUrl: '#',
    verified: true,
    featured: true
  },
  {
    id: 't3',
    clientName: 'Rajesh G.',
    designation: 'Owner',
    company: 'Heritage Boutique Hotels',
    country: 'United Kingdom',
    countryFlag: '🇬🇧',
    rating: 4.5,
    testimonialText: "The custom embroidery on the velour bathrobes was perfect. They truly offer a bespoke service that direct factories often struggle with. Reliable lead times every time.",
    productCategory: 'Hospitality',
    orderYear: 2024,
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    linkedinUrl: '#',
    verified: true,
    featured: true
  },
  {
    id: 't4',
    clientName: 'Ahmed Al-Sayed',
    designation: 'Operations Head',
    company: 'Gulf Medical Distributors',
    country: 'Saudi Arabia',
    countryFlag: '🇸🇦',
    rating: 5,
    testimonialText: "Managing SASO certifications for syringes and IV sets is complex. Anabyn took care of the entire regulatory dossier. We've moved 10 containers with zero delays.",
    productCategory: 'Medical',
    orderYear: 2024,
    photoUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop',
    linkedinUrl: '#',
    verified: true,
    featured: true
  }
];
