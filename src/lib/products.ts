import type { Product } from './types';

export const products: Product[] = [
  // --- HOSPITALITY SUPPLIES ---
  {
    id: 'h-1',
    name: 'Premium Percale Bed Sheets',
    slug: 'premium-percale-bed-sheets',
    category: 'hospitality-supplies',
    subcategory: 'Bed Linen',
    shortDescription: '300 Thread Count 100% Long-Staple Indian Cotton.',
    fullDescription: 'Our hotel-grade percale bed sheets are crafted from premium long-staple Indian cotton. Designed for extreme durability and a crisp, cool feel, these sheets are ideal for high-end resorts and city hotels.',
    specifications: [
      { key: 'Material', value: '100% Cotton' },
      { key: 'Thread Count', value: '300 TC' },
      { key: 'Weave', value: 'Percale' },
      { key: 'Finish', value: 'Mercerized' }
    ],
    materials: ['Cotton'],
    variants: [
      { size: 'Single', tc: '300', color: 'White' },
      { size: 'Queen', tc: '300', color: 'White' },
      { size: 'King', tc: '300', color: 'White' }
    ],
    moqPieces: 100,
    moqKg: 0,
    sampleAvailable: true,
    privateLabelAvailable: true,
    certifications: ['ISO 9001', 'OEKO-TEX'],
    images: [
      'https://images.unsplash.com/photo-1617744257724-6fafec25442f?w=800&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80'
    ],
    hsCode: '6302.21',
    tags: ['luxury', 'bedding', 'hotel'],
    featured: true,
    active: true
  },
  {
    id: 'h-2',
    name: 'Royal Sateen Striped Sheets',
    slug: 'royal-sateen-striped-sheets',
    category: 'hospitality-supplies',
    subcategory: 'Bed Linen',
    shortDescription: '400 Thread Count Sateen with 1cm Satin Stripes.',
    fullDescription: 'The classic 5-star hotel look. Our sateen striped sheets offer a silky-smooth texture and a brilliant sheen that stays vibrant after industrial washing.',
    specifications: [
      { key: 'Material', value: '100% Long-Staple Cotton' },
      { key: 'Thread Count', value: '400 TC' },
      { key: 'Pattern', value: '1cm Satin Stripe' }
    ],
    materials: ['Cotton'],
    variants: [
      { size: 'Queen', tc: '400', color: 'White' },
      { size: 'King', tc: '400', color: 'White' }
    ],
    moqPieces: 100,
    moqKg: 0,
    sampleAvailable: true,
    privateLabelAvailable: true,
    certifications: ['ISO 9001', 'OEKO-TEX'],
    images: ['https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80'],
    hsCode: '6302.21',
    tags: ['luxury', 'striped', '5-star'],
    featured: true,
    active: true
  },
  {
    id: 'h-3',
    name: 'Heavy-Duty Terry Bath Towels',
    slug: 'heavy-duty-terry-bath-towels',
    category: 'hospitality-supplies',
    subcategory: 'Bath Linen',
    shortDescription: '600 GSM 100% Ring-Spun Cotton, Double-Stitched.',
    fullDescription: 'Designed for the rigors of institutional laundry. These 600 GSM towels provide superior absorbency and remain soft through hundreds of wash cycles.',
    specifications: [
      { key: 'Material', value: '100% Ring-Spun Cotton' },
      { key: 'Weight', value: '600 GSM' },
      { key: 'Border', value: 'Dobby Border' }
    ],
    materials: ['Cotton'],
    variants: [
      { size: '70x140cm', gsm: '600', color: 'White' },
      { size: '90x150cm', gsm: '600', color: 'White' }
    ],
    moqPieces: 200,
    moqKg: 0,
    sampleAvailable: true,
    privateLabelAvailable: true,
    certifications: ['ISO 9001'],
    images: ['https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=800&q=80'],
    hsCode: '6302.60',
    tags: ['bath', 'absorbent', 'institution'],
    featured: true,
    active: true
  },
  {
    id: 'h-4',
    name: 'Executive Chef Coats',
    slug: 'executive-chef-coats',
    category: 'hospitality-supplies',
    subcategory: 'Uniforms',
    shortDescription: 'Poly-Cotton Blend with Breathable Mesh Panels.',
    fullDescription: 'A professional coat for culinary leaders. Made from a durable stain-resistant twill with underarm vents for heat management.',
    specifications: [
      { key: 'Fabric', value: '65/35 Poly-Cotton' },
      { key: 'Buttons', value: 'Removable Studs' },
      { key: 'Weight', value: '240 GSM' }
    ],
    materials: ['Poly-Cotton'],
    variants: [
      { size: 'M', color: 'White' },
      { size: 'L', color: 'White' },
      { size: 'XL', color: 'Black' }
    ],
    moqPieces: 50,
    moqKg: 0,
    sampleAvailable: true,
    privateLabelAvailable: true,
    certifications: [],
    images: ['https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80'],
    hsCode: '6211.32',
    tags: ['chef', 'kitchen', 'apparel'],
    featured: false,
    active: true
  },
  {
    id: 'h-5',
    name: 'Velour Spa Bathrobes',
    slug: 'velour-spa-bathrobes',
    category: 'hospitality-supplies',
    subcategory: 'Bath Linen',
    shortDescription: 'Dual-Layer Velour and Terry, 400 GSM.',
    fullDescription: 'The ultimate luxury for spa guests. A soft velour exterior for a premium look and a looped terry interior for maximum water absorption.',
    specifications: [
      { key: 'Outer', value: 'Soft Velour' },
      { key: 'Inner', value: 'Absorbent Terry' },
      { key: 'Weight', value: '400 GSM' }
    ],
    materials: ['Cotton'],
    variants: [
      { size: 'L', color: 'White' },
      { size: 'XL', color: 'White' }
    ],
    moqPieces: 50,
    moqKg: 0,
    sampleAvailable: true,
    privateLabelAvailable: true,
    certifications: ['OEKO-TEX'],
    images: ['https://images.unsplash.com/photo-1571139627661-cf707929f465?w=800&q=80'],
    hsCode: '6208.91',
    tags: ['spa', 'robe', 'luxury'],
    featured: false,
    active: true
  },
  {
    id: 'h-6',
    name: 'Dobby Weave Table Linens',
    slug: 'dobby-weave-table-linens',
    category: 'hospitality-supplies',
    subcategory: 'F&B Linen',
    shortDescription: '100% Polyester Damask Finish for Commercial Use.',
    fullDescription: 'Elegant and indestructible. Our 100% polyester table linens offer a soft cotton-like feel with the durability and stain-release properties of synthetic fibers.',
    specifications: [
      { key: 'Material', value: '100% Spun Polyester' },
      { key: 'Weight', value: '250 GSM' },
      { key: 'Finish', value: 'Soil Release' }
    ],
    materials: ['Polyester'],
    variants: [
      { size: '180x180cm', color: 'White' },
      { size: 'Napkin 50x50', color: 'Burgundy' }
    ],
    moqPieces: 100,
    moqKg: 0,
    sampleAvailable: true,
    privateLabelAvailable: true,
    certifications: [],
    images: ['https://images.unsplash.com/photo-1600294421265-c354b772e790?w=800&q=80'],
    hsCode: '6302.51',
    tags: ['dining', 'banquet', 'linen'],
    featured: false,
    active: true
  },
  {
    id: 'h-7',
    name: 'Quilted Mattress Protectors',
    slug: 'quilted-mattress-protectors',
    category: 'hospitality-supplies',
    subcategory: 'Bed Linen',
    shortDescription: 'Waterproof PU Membrane with Cotton Top.',
    fullDescription: 'Protect your mattress investment. Our protectors feature a breathable, noiseless waterproof layer and a quilted cotton top for guest comfort.',
    specifications: [
      { key: 'Top', value: '100% Cotton Jersey' },
      { key: 'Backing', value: 'Waterproof PU Membrane' },
      { key: 'Skirting', value: 'Fully Elasticated' }
    ],
    materials: ['Cotton', 'Polyurethane'],
    variants: [
      { size: 'King', color: 'White' },
      { size: 'Queen', color: 'White' }
    ],
    moqPieces: 50,
    moqKg: 0,
    sampleAvailable: false,
    privateLabelAvailable: true,
    certifications: ['ISO 9001'],
    hsCode: '6302.31',
    images: ['https://images.unsplash.com/photo-1669663628141-e4c9ed41100b?w=800&q=80'],
    tags: ['protection', 'hygiene'],
    featured: false,
    active: true
  },
  {
    id: 'h-8',
    name: 'Plush Microfiber Duvet Inserts',
    slug: 'plush-microfiber-duvet-inserts',
    category: 'hospitality-supplies',
    subcategory: 'Bed Linen',
    shortDescription: 'All-Season 350 GSM Siliconized Fiber Fill.',
    fullDescription: 'A hypoallergenic alternative to down. Our duvet inserts feature a box-stitch construction to keep the fill evenly distributed, providing consistent warmth.',
    specifications: [
      { key: 'Filling', value: 'Siliconized Microfiber' },
      { key: 'Outer Shell', value: 'Cotton-Poly Twill' },
      { key: 'Weight', value: '350 GSM' }
    ],
    materials: ['Microfiber', 'Cotton'],
    variants: [
      { size: 'Queen', gsm: '350', color: 'White' },
      { size: 'King', gsm: '350', color: 'White' }
    ],
    moqPieces: 50,
    moqKg: 0,
    sampleAvailable: false,
    privateLabelAvailable: true,
    certifications: ['OEKO-TEX'],
    images: ['https://images.unsplash.com/photo-1698746044340-ae5559412fd5?w=800&q=80'],
    hsCode: '9404.90',
    tags: ['warmth', 'hypoallergenic'],
    featured: false,
    active: true
  },
  {
    id: 'h-9',
    name: 'Reception Uniform Sets',
    slug: 'reception-uniform-sets',
    category: 'hospitality-supplies',
    subcategory: 'Uniforms',
    shortDescription: 'Tailored Poly-Viscose Sets for Front Desk Staff.',
    fullDescription: 'Create a lasting first impression. Our tailored front-desk uniforms are made from a breathable poly-viscose blend that resists wrinkles through long shifts.',
    specifications: [
      { key: 'Fabric', value: 'Poly-Viscose' },
      { key: 'Style', value: 'Slim Fit' },
      { key: 'Durability', value: 'Industrial Launderable' }
    ],
    materials: ['Polyester', 'Viscose'],
    variants: [
      { size: 'S', color: 'Navy' },
      { size: 'M', color: 'Charcoal' }
    ],
    moqPieces: 20,
    moqKg: 0,
    sampleAvailable: true,
    privateLabelAvailable: true,
    certifications: [],
    images: ['https://images.unsplash.com/photo-1566827886031-7d0f288f76ed?w=800&q=80'],
    hsCode: '6203.11',
    tags: ['front-desk', 'corporate'],
    featured: false,
    active: true
  },
  {
    id: 'h-10',
    name: 'Cotton Hand Towel Pack',
    slug: 'cotton-hand-towel-pack',
    category: 'hospitality-supplies',
    subcategory: 'Bath Linen',
    shortDescription: 'Set of 12, 400 GSM Quick-Dry Towels.',
    fullDescription: 'Value-oriented hand towels for high-traffic gym or spa areas. Dries quickly and maintains its shape over time.',
    specifications: [
      { key: 'Material', value: '100% Cotton' },
      { key: 'Weight', value: '400 GSM' },
      { key: 'Size', value: '40x60cm' }
    ],
    materials: ['Cotton'],
    variants: [
      { size: '40x60cm', gsm: '400', color: 'White' }
    ],
    moqPieces: 500,
    moqKg: 0,
    sampleAvailable: true,
    privateLabelAvailable: true,
    certifications: ['ISO 9001'],
    images: ['https://images.unsplash.com/photo-1523471826770-c437b4636fe6?w=800&q=80'],
    hsCode: '6302.60',
    tags: ['gym', 'hand-towel', 'value'],
    featured: false,
    active: true
  },

  // --- MEDICAL SUPPLIES ---
  {
    id: 'm-1',
    name: 'Sterile Safety Syringes',
    slug: 'sterile-safety-syringes',
    category: 'medical-supplies',
    subcategory: 'Consumables',
    shortDescription: 'Retractable Needles, Luer Lock, E.O. Sterilized.',
    fullDescription: 'High-precision safety syringes with auto-retractable needles to prevent accidental needle-stick injuries. Fully compliant with international healthcare standards.',
    specifications: [
      { key: 'Volume', value: '2ml, 5ml, 10ml' },
      { key: 'Sterility', value: 'E.O. Gas' },
      { key: 'Tip Type', value: 'Luer Lock' }
    ],
    materials: ['Medical-Grade PP', 'Stainless Steel'],
    variants: [
      { size: '2ml', color: 'Clear' },
      { size: '5ml', color: 'Clear' }
    ],
    moqPieces: 10000,
    moqKg: 0,
    sampleAvailable: true,
    privateLabelAvailable: false,
    certifications: ['ISO 13485', 'CE', 'FDA'],
    images: ['https://images.unsplash.com/photo-1631804959147-75a1b5a837e4?w=800&q=80'],
    hsCode: '9018.31',
    tags: ['safety', 'hospital', 'injections'],
    featured: true,
    active: true
  },
  {
    id: 'm-2',
    name: 'Nitrile Exam Gloves (Powder-Free)',
    slug: 'nitrile-exam-gloves-powder-free',
    category: 'medical-supplies',
    subcategory: 'Consumables',
    shortDescription: 'Latex-Free, Blue, Textured Fingertips.',
    fullDescription: 'Medical-grade nitrile examination gloves offering superior puncture resistance and chemical protection. Hypoallergenic and powder-free.',
    specifications: [
      { key: 'Material', value: 'Synthetic Nitrile' },
      { key: 'Thickness', value: '4.0 mil' },
      { key: 'AQL', value: '1.5' }
    ],
    materials: ['Nitrile'],
    variants: [
      { size: 'S', color: 'Blue' },
      { size: 'M', color: 'Blue' },
      { size: 'L', color: 'Blue' }
    ],
    moqPieces: 1000,
    moqKg: 0,
    sampleAvailable: true,
    privateLabelAvailable: true,
    certifications: ['CE', 'FDA'],
    images: ['https://images.unsplash.com/photo-1606950669720-5f4b34856f6c?w=800&q=80'],
    hsCode: '4015.19',
    tags: ['ppe', 'protection', 'latex-free'],
    featured: true,
    active: true
  },
  {
    id: 'm-3',
    name: 'SMS Surgical Gowns (Level 3)',
    slug: 'sms-surgical-gowns-level-3',
    category: 'medical-supplies',
    subcategory: 'Apparel',
    shortDescription: 'AAMI Level 3 Protection, Fluid Resistant.',
    fullDescription: 'Reinforced surgical gowns for high-fluid surgical procedures. Made from breathable SMS non-woven fabric with sonic-welded seams.',
    specifications: [
      { key: 'Protection', value: 'AAMI Level 3' },
      { key: 'Closure', value: 'Velcro Neck' },
      { key: 'Cuffs', value: 'Soft Knit' }
    ],
    materials: ['SMS Non-woven'],
    variants: [
      { size: 'L', color: 'Blue' },
      { size: 'XL', color: 'Blue' }
    ],
    moqPieces: 500,
    moqKg: 0,
    sampleAvailable: true,
    privateLabelAvailable: true,
    certifications: ['CE', 'ISO 13485'],
    images: ['https://images.unsplash.com/photo-1628068311627-0f5abce65050?w=800&q=80'],
    hsCode: '6210.10',
    tags: ['surgical', 'theatre', 'barrier'],
    featured: true,
    active: true
  },
  {
    id: 'm-4',
    name: 'IV Infusion Administration Sets',
    slug: 'iv-infusion-administration-sets',
    category: 'medical-supplies',
    subcategory: 'Consumables',
    shortDescription: 'Vented Spike, 20 Drops/ml, Flow Regulator.',
    fullDescription: 'Hospital-standard IV infusion sets with air vents and precise flow regulators. Kink-resistant PVC tubing for reliable delivery.',
    specifications: [
      { key: 'Drip Rate', value: '20 drops/ml' },
      { key: 'Tubing', value: '150cm PVC' },
      { key: 'Site', value: 'Y-Injection Port' }
    ],
    materials: ['Medical PVC'],
    variants: [
      { size: 'Adult', color: 'Transparent' }
    ],
    moqPieces: 5000,
    moqKg: 0,
    sampleAvailable: true,
    privateLabelAvailable: false,
    certifications: ['CE', 'ISO 13485'],
    images: ['https://images.unsplash.com/photo-1579684385127-6c17937c4635?w=800&q=80'],
    hsCode: '9018.39',
    tags: ['infusion', 'clinical', 'sterile'],
    featured: false,
    active: true
  },
  {
    id: 'm-5',
    name: '3-Ply Medical Face Masks',
    slug: '3-ply-medical-face-masks',
    category: 'medical-supplies',
    subcategory: 'Consumables',
    shortDescription: 'BFE > 98%, Melt-Blown Filter Layer.',
    fullDescription: 'High-filtration medical masks with comfortable ear loops and an adjustable nose wire. Type IIR compliant.',
    specifications: [
      { key: 'BFE', value: '> 98%' },
      { key: 'PFE', value: '> 95%' },
      { key: 'Style', value: 'Ear-loop' }
    ],
    materials: ['Spunbond', 'Melt-blown'],
    variants: [
      { size: 'Standard Adult', color: 'Blue' }
    ],
    moqPieces: 10000,
    moqKg: 0,
    sampleAvailable: true,
    privateLabelAvailable: true,
    certifications: ['CE', 'FDA'],
    images: ['https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80'],
    hsCode: '6307.90',
    tags: ['ppe', 'respiratory', 'hygiene'],
    featured: false,
    active: true
  },
  {
    id: 'm-6',
    name: 'Semi-Fowler Hospital Bed',
    slug: 'semi-fowler-hospital-bed',
    category: 'medical-supplies',
    subcategory: 'Furniture',
    shortDescription: 'Manual Backrest Adjustment, ABS Side Rails.',
    fullDescription: 'A durable and cost-effective ward bed. Featuring a high-quality carbon steel frame and smooth manual crank mechanism.',
    specifications: [
      { key: 'Frame', value: 'Carbon Steel' },
      { key: 'Function', value: 'Manual Backrest' },
      { key: 'Side Rails', value: 'Collapsible ABS' }
    ],
    materials: ['Steel', 'ABS'],
    variants: [
      { size: 'Standard Ward', color: 'White' }
    ],
    moqPieces: 10,
    moqKg: 0,
    sampleAvailable: false,
    privateLabelAvailable: false,
    certifications: ['ISO 13485'],
    images: ['https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80'],
    hsCode: '9402.90',
    tags: ['ward', 'furniture', 'clinical'],
    featured: false,
    active: true
  },
  {
    id: 'm-7',
    name: 'Electric ICU Hospital Bed',
    slug: 'electric-icu-hospital-bed',
    category: 'medical-supplies',
    subcategory: 'Furniture',
    shortDescription: '5-Function Electric Control, Trendelenburg.',
    fullDescription: 'Advanced ICU bed with 5 electric functions including height, backrest, knee-rest, Trendelenburg and Reverse Trendelenburg.',
    specifications: [
      { key: 'Motor', value: 'Linak/Dewert' },
      { key: 'Load', value: '250kg' },
      { key: 'Safety', value: 'Central Locking' }
    ],
    materials: ['Steel', 'ABS'],
    variants: [
      { size: 'Standard ICU', color: 'White/Blue' }
    ],
    moqPieces: 5,
    moqKg: 0,
    sampleAvailable: false,
    privateLabelAvailable: false,
    certifications: ['CE', 'ISO 13485'],
    images: ['https://images.unsplash.com/photo-1584983191144-7734c3527a6e?w=800&q=80'],
    hsCode: '9402.90',
    tags: ['icu', 'electric', 'advanced'],
    featured: true,
    active: true
  },
  {
    id: 'm-8',
    name: 'Multi-Parameter Patient Monitor',
    slug: 'multi-parameter-patient-monitor',
    category: 'medical-supplies',
    subcategory: 'Devices',
    shortDescription: '12.1" Display, SpO2, ECG, NIBP, Temp.',
    fullDescription: 'Portable parameter monitor suitable for adult, pediatric and neonatal patients. High-resolution color screen with 2-hour battery backup.',
    specifications: [
      { key: 'Display', value: '12.1" Color TFT' },
      { key: 'Battery', value: '4 Hours' },
      { key: 'Alarms', value: 'Audio & Visual' }
    ],
    materials: ['Electronics', 'ABS'],
    variants: [
      { size: '12-inch Screen', color: 'White' }
    ],
    moqPieces: 1,
    moqKg: 0,
    sampleAvailable: false,
    privateLabelAvailable: false,
    certifications: ['CE', 'FDA'],
    images: ['https://images.unsplash.com/photo-1579684385127-6c17937c4635?w=800&q=80'],
    hsCode: '9018.19',
    tags: ['diagnostics', 'icu', 'electronics'],
    featured: false,
    active: true
  },
  {
    id: 'm-9',
    name: 'Industrial First Aid Kit',
    slug: 'industrial-first-aid-kit',
    category: 'medical-supplies',
    subcategory: 'Emergency',
    shortDescription: 'Wall-Mountable ABS Case, 100+ Pieces.',
    fullDescription: 'Compliant with workplace safety regulations. Contains everything needed for immediate injury response in a factory or hotel setting.',
    specifications: [
      { key: 'Pieces', value: '100 Items' },
      { key: 'Case', value: 'Impact Resistant ABS' },
      { key: 'Mounting', value: 'Wall-brackets Included' }
    ],
    materials: ['Various', 'ABS Case'],
    variants: [
      { size: 'Large Industrial', color: 'Orange' }
    ],
    moqPieces: 50,
    moqKg: 0,
    sampleAvailable: false,
    privateLabelAvailable: true,
    certifications: ['CE'],
    images: ['https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80'],
    hsCode: '3006.50',
    tags: ['emergency', 'safety', 'workplace'],
    featured: false,
    active: true
  },
  {
    id: 'm-10',
    name: 'Folding Lightweight Wheelchair',
    slug: 'folding-lightweight-wheelchair',
    category: 'medical-supplies',
    subcategory: 'Rehab',
    shortDescription: 'Aluminum Frame, 12kg Total Weight.',
    fullDescription: 'A versatile and highly portable wheelchair for transit. Breathable mesh upholstery and ergonomic hand-brakes.',
    specifications: [
      { key: 'Frame', value: 'Aircraft Grade Aluminum' },
      { key: 'Weight', value: '12kg' },
      { key: 'Capacity', value: '100kg' }
    ],
    materials: ['Aluminum', 'Nylon'],
    variants: [
      { size: 'Standard 18"', color: 'Silver/Black' }
    ],
    moqPieces: 20,
    moqKg: 0,
    sampleAvailable: false,
    privateLabelAvailable: false,
    certifications: ['CE', 'ISO 13485'],
    images: ['https://images.unsplash.com/photo-1616422285852-2430335f6a90?w=800&q=80'],
    hsCode: '8713.10',
    tags: ['mobility', 'rehab', 'hospital'],
    featured: false,
    active: true
  }
];
