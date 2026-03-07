
export type ClientLogo = {
  id: string;
  name: string;
  logoUrl: string;
  sector: 'Hotels & Resorts' | 'Hospitals & Clinics' | 'Distributors';
  featured: boolean;
};

export const initialClients: ClientLogo[] = Array.from({ length: 20 }).map((_, i) => ({
  id: `c${i}`,
  name: `Global Partner ${i + 1}`,
  logoUrl: `https://placehold.co/200x100/0D1F3C/FFFFFF?text=PARTNER+${i+1}`,
  sector: i % 3 === 0 ? 'Hotels & Resorts' : i % 3 === 1 ? 'Hospitals & Clinics' : 'Distributors',
  featured: i < 6
}));
