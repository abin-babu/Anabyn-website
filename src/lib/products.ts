
import type { Product } from './types';

export const products: Product[] = [
  // --- HOSPITALITY SUPPLIES ---
  {
    id: 'h-1',
    name: 'Premium Hotel Bed Sheets',
    slug: 'premium-hotel-bed-sheets',
    category: 'hospitality-supplies',
    subcategory: 'Bed Linen',
    shortDescription: '100% Cotton Percale & Sateen Sheets, 200-600 TC.',
    fullDescription: 'Our hotel-grade bed sheets are crafted from premium long-staple Indian cotton. Designed for durability and luxury, these sheets withstand industrial laundering while maintaining a crisp, soft feel.',
    specifications: [
      { key: 'Material', value: '100% Long-Staple Cotton' },
      { key: 'Thread Count', value: '200, 300, 400, 600 TC' },
      { key: 'Weave', value: 'Percale or Sateen' },
      { key: 'Finish', value: 'Mercerized, Anti-pilling' }
    ],
    materials: ['Cotton', 'Cotton-Poly Blends'],
    variants: [
      { size: 'Single', tc: '300', color: 'White' },
      { size: 'Queen', tc: '300', color: 'White' },
      { size: 'King', tc: '400', color: 'White' }
    ],
    moqPieces: 100,
    moqKg: 0,
    sampleAvailable: true,
    privateLabelAvailable: true,
    certifications: ['ISO 9001', 'OEKO-TEX'],
    images: ['https://images.unsplash.com/photo-1617744257724-6fafec25442f?w=800&q=80'],
    hsCode: '6302.21',
    tags: ['luxury', 'bedding', 'hotel'],
    featured: true,
    active: true
  },
  {
    id: 'h-2',
    name: 'Luxury Bath Towels',
    slug: 'luxury-bath-towels',
    category: 'hospitality-supplies',
    subcategory: 'Bath Linen',
    shortDescription: 'High-absorbency 100% Terry Cotton Towels, 500-800 GSM.',
    fullDescription: 'Experience spa-like luxury with our ultra-plush bath towels. Made from ring-spun cotton loops for superior absorbency and quick-drying properties.',
    specifications: [
      { key: 'Material', value: '100% Ring-Spun Cotton' },
      { key: 'Weight', value: '500, 600, 800 GSM' },
      { key: 'Hems', value: 'Double-stitched reinforced' }
    ],
    materials: ['Cotton'],
    variants: [
      { size: '70x140cm', gsm: '600', color: 'White' },
      { size: '90x150cm', gsm: '800', color: 'Cream' }
    ],
    moqPieces: 200,
    moqKg: 0,
    sampleAvailable: true,
    privateLabelAvailable: true,
    certifications: ['ISO 9001', 'OEKO-TEX'],
    images: ['https://images.unsplash.com/photo-1584992236310-6edddc08acff?w=800&q=80'],
    hsCode: '6302.60',
    tags: ['bath', 'luxury', 'towel'],
    featured: true,
    active: true
  },
  {
    id: 'h-3',
    name: 'Hospitality Scrub Suits',
    slug: 'hospitality-scrub-suits',
    category: 'hospitality-supplies',
    subcategory: 'Uniforms',
    shortDescription: 'Anti-microbial, stain-resistant scrub suits for medical & hospitality staff.',
    fullDescription: 'Durable and professional scrub suits designed for movement and comfort. Features multiple pockets and reinforced seams.',
    specifications: [
      { key: 'Fabric', value: 'Poly-Cotton Twill' },
      { key: 'Treatment', value: 'Stain-resistant, Anti-microbial' },
      { key: 'Pockets', value: '3-Pocket Top, 2-Pocket Pant' }
    ],
    materials: ['Polyester', 'Cotton'],
    variants: [
      { size: 'S', color: 'Navy Blue' },
      { size: 'M', color: 'Navy Blue' },
      { size: 'L', color: 'Sky Blue' }
    ],
    moqPieces: 50,
    moqKg: 0,
    sampleAvailable: true,
    privateLabelAvailable: true,
    certifications: ['ISO 13485'],
    images: ['https://images.unsplash.com/photo-1628068311627-0f5abce65050?w=800&q=80'],
    hsCode: '6211.32',
    tags: ['staff', 'workwear', 'medical'],
    featured: false,
    active: true
  },
  {
    id: 'h-4',
    name: 'Plush Guest Slippers',
    slug: 'plush-guest-slippers',
    category: 'hospitality-supplies',
    subcategory: 'Amenities',
    shortDescription: 'Closed-toe velour slippers with non-slip EVA sole.',
    fullDescription: 'Soft and comfortable velour slippers for premium guest comfort. Available in disposable and reusable qualities.',
    specifications: [
      { key: 'Upper', value: 'Velour' },
      { key: 'Sole', value: '5mm Non-slip EVA' },
      { key: 'Style', value: 'Closed-toe' }
    ],
    materials: ['Velour', 'EVA'],
    variants: [
      { size: 'Universal Adult', color: 'White' }
    ],
    moqPieces: 500,
    moqKg: 0,
    sampleAvailable: true,
    privateLabelAvailable: true,
    certifications: [],
    images: ['https://images.unsplash.com/photo-1571139627661-cf707929f465?w=800&q=80'],
    hsCode: '6405.20',
    tags: ['amenity', 'comfort'],
    featured: false,
    active: true
  },
  {
    id: 'h-5',
    name: 'Quilted Duvet Inserts',
    slug: 'quilted-duvet-inserts',
    category: 'hospitality-supplies',
    subcategory: 'Bed Linen',
    shortDescription: 'All-season microfiber duvet inserts with box stitching.',
    fullDescription: 'Hypoallergenic duvet inserts designed for hotel use. The box stitch pattern prevents shifting of the microfiber fill.',
    specifications: [
      { key: 'Filling', value: '300 GSM Microfiber' },
      { key: 'Outer Shell', value: 'Cotton-Poly Blend' },
      { key: 'Stitching', value: 'Box-quilted' }
    ],
    materials: ['Microfiber', 'Cotton'],
    variants: [
      { size: 'Queen', gsm: '300', color: 'White' },
      { size: 'King', gsm: '300', color: 'White' }
    ],
    moqPieces: 50,
    moqKg: 0,
    sampleAvailable: false,
    privateLabelAvailable: true,
    certifications: ['OEKO-TEX'],
    images: ['https://images.unsplash.com/photo-1698746044340-ae5559412fd5?w=800&q=80'],
    hsCode: '9404.90',
    tags: ['bedding', 'warmth'],
    featured: false,
    active: true
  },
  {
    id: 'h-6',
    name: 'Executive Chef Coats',
    slug: 'executive-chef-coats',
    category: 'hospitality-supplies',
    subcategory: 'Uniforms',
    shortDescription: 'Double-breasted cotton-rich chef coats with breathable panels.',
    fullDescription: 'Professional chef attire designed for high-heat kitchen environments. Includes thermometer pockets and underarm vents.',
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
    moqPieces: 25,
    moqKg: 0,
    sampleAvailable: true,
    privateLabelAvailable: true,
    certifications: [],
    images: ['https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80'],
    hsCode: '6211.32',
    tags: ['kitchen', 'chef', 'staff'],
    featured: false,
    active: true
  },
  {
    id: 'h-7',
    name: 'Damask Table Linens',
    slug: 'damask-table-linens',
    category: 'hospitality-supplies',
    subcategory: 'F&B Linen',
    shortDescription: 'Elegant patterned table cloths and napkins for fine dining.',
    fullDescription: 'High-quality damask weave linens that add a touch of sophistication to any banquet or restaurant setting.',
    specifications: [
      { key: 'Material', value: '100% Polyester or Cotton' },
      { key: 'Pattern', value: 'Damask / Jacquard' },
      { key: 'Edge', value: 'Hemstitched or Overlocked' }
    ],
    materials: ['Polyester', 'Cotton'],
    variants: [
      { size: '180x180cm', color: 'White' },
      { size: 'Napkin 50x50cm', color: 'Burgundy' }
    ],
    moqPieces: 100,
    moqKg: 0,
    sampleAvailable: true,
    privateLabelAvailable: true,
    certifications: [],
    images: ['https://images.unsplash.com/photo-1600294421265-c354b772e790?w=800&q=80'],
    hsCode: '6302.51',
    tags: ['dining', 'banquet'],
    featured: false,
    active: true
  },
  {
    id: 'h-8',
    name: 'Cotton Hand Towels',
    slug: 'cotton-hand-towels',
    category: 'hospitality-supplies',
    subcategory: 'Bath Linen',
    shortDescription: 'Durable 400 GSM hand towels for public areas and guest rooms.',
    fullDescription: 'Standard hotel hand towels designed for high-frequency use and durability.',
    specifications: [
      { key: 'Material', value: '100% Cotton' },
      { key: 'GSM', value: '400' },
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
    tags: ['bath', 'amenity'],
    featured: false,
    active: true
  },
  {
    id: 'h-9',
    name: 'Waffle Weave Bathrobes',
    slug: 'waffle-weave-bathrobes',
    category: 'hospitality-supplies',
    subcategory: 'Bath Linen',
    shortDescription: 'Lightweight, absorbent waffle-weave robes for spas and resorts.',
    fullDescription: 'A classic resort-style bathrobe. Lightweight and breathable, perfect for warm climates or spa environments.',
    specifications: [
      { key: 'Pattern', value: 'Large Waffle' },
      { key: 'GSM', value: '250' },
      { key: 'Style', value: 'Kimono Collar' }
    ],
    materials: ['Cotton', 'Poly-Cotton'],
    variants: [
      { size: 'L', color: 'White' },
      { size: 'XL', color: 'White' }
    ],
    moqPieces: 50,
    moqKg: 0,
    sampleAvailable: true,
    privateLabelAvailable: true,
    certifications: ['ISO 9001'],
    images: ['https://images.unsplash.com/photo-1737061467396-39aac10feb47?w=800&q=80'],
    hsCode: '6208.91',
    tags: ['spa', 'luxury'],
    featured: false,
    active: true
  },
  {
    id: 'h-10',
    name: 'Hotel Pillow Protectors',
    slug: 'hotel-pillow-protectors',
    category: 'hospitality-supplies',
    subcategory: 'Bed Linen',
    shortDescription: 'Zippered cotton protectors to keep pillows hygienic.',
    fullDescription: 'Breathable and machine-washable protectors that extend the life of your hotel pillows.',
    specifications: [
      { key: 'Material', value: 'Cotton Jersey or Quilted' },
      { key: 'Closure', value: 'Nylon Zipper' }
    ],
    materials: ['Cotton'],
    variants: [
      { size: 'Standard 50x70cm', color: 'White' }
    ],
    moqPieces: 200,
    moqKg: 0,
    sampleAvailable: false,
    privateLabelAvailable: true,
    certifications: ['OEKO-TEX'],
    images: ['https://images.unsplash.com/photo-1652161853855-005106816b9f?w=800&q=80'],
    hsCode: '6302.31',
    tags: ['hygiene', 'protection'],
    featured: false,
    active: true
  },

  // --- MEDICAL SUPPLIES ---
  {
    id: 'm-1',
    name: 'Sterile Disposable Syringes',
    slug: 'sterile-disposable-syringes',
    category: 'medical-supplies',
    subcategory: 'Consumables',
    shortDescription: 'Single-use, non-toxic, non-pyrogenic syringes with needles.',
    fullDescription: 'Hospital-grade sterile syringes designed for precision and safety. Available in Luer lock and Luer slip versions.',
    specifications: [
      { key: 'Volume', value: '2ml, 5ml, 10ml, 50ml' },
      { key: 'Sterility', value: 'E.O. Gas Sterilized' },
      { key: 'Safety', value: 'Needle retraction / safety cap' }
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
    tags: ['sterile', 'hospital', 'injections'],
    featured: true,
    active: true
  },
  {
    id: 'm-2',
    name: 'Nitrile Examination Gloves',
    slug: 'nitrile-examination-gloves',
    category: 'medical-supplies',
    subcategory: 'Consumables',
    shortDescription: 'Powder-free, latex-free blue nitrile gloves.',
    fullDescription: 'High-tensile strength nitrile gloves offering excellent tactile sensitivity and protection against chemicals.',
    specifications: [
      { key: 'Material', value: 'Synthetic Nitrile' },
      { key: 'Finish', value: 'Powder-Free, Textured' },
      { key: 'AQL', value: '1.5 / 2.5' }
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
    tags: ['ppe', 'gloves', 'protection'],
    featured: true,
    active: true
  },
  {
    id: 'm-3',
    name: 'ICU Hospital Bed (Electric)',
    slug: 'icu-hospital-bed-electric',
    category: 'medical-supplies',
    subcategory: 'Furniture',
    shortDescription: '5-Function electric bed with ABS side rails and remote control.',
    fullDescription: 'Advanced ICU bed with adjustable height, backrest, and knee-rest. Includes Trendelenburg and Reverse Trendelenburg positions.',
    specifications: [
      { key: 'Control', value: 'Electric Remote' },
      { key: 'Load', value: '250kg Capacity' },
      { key: 'Casters', value: 'Central Locking System' }
    ],
    materials: ['Steel', 'ABS Plastic'],
    variants: [
      { size: 'Standard ICU', color: 'White/Blue' }
    ],
    moqPieces: 5,
    moqKg: 0,
    sampleAvailable: false,
    privateLabelAvailable: false,
    certifications: ['ISO 13485', 'CE'],
    images: ['https://images.unsplash.com/photo-1584983191144-7734c3527a6e?w=800&q=80'],
    hsCode: '9402.90',
    tags: ['icu', 'ward', 'furniture'],
    featured: true,
    active: true
  },
  {
    id: 'm-4',
    name: 'IV Infusion Sets',
    slug: 'iv-infusion-sets',
    category: 'medical-supplies',
    subcategory: 'Consumables',
    shortDescription: 'Sterile IV sets with air vent and flow regulator.',
    fullDescription: 'Standard gravity-fed infusion sets for hospital use. Kink-resistant tubing ensures consistent fluid delivery.',
    specifications: [
      { key: 'Drip Rate', value: '20 Drops/ml' },
      { key: 'Tube Length', value: '150cm' },
      { key: 'Safety', value: 'Latex-free Y-Site' }
    ],
    materials: ['Medical-Grade PVC'],
    variants: [
      { size: 'Standard Adult', color: 'Transparent' }
    ],
    moqPieces: 5000,
    moqKg: 0,
    sampleAvailable: true,
    privateLabelAvailable: false,
    certifications: ['CE', 'ISO 13485'],
    images: ['https://images.unsplash.com/photo-1579684385127-6c17937c4635?w=800&q=80'],
    hsCode: '9018.39',
    tags: ['infusion', 'iv', 'sterile'],
    featured: false,
    active: true
  },
  {
    id: 'm-5',
    name: 'Medical Scrub Suit (SMS)',
    slug: 'medical-scrub-suit-sms',
    category: 'medical-supplies',
    subcategory: 'Textiles',
    shortDescription: 'Disposable SMS non-woven scrub suit for surgical staff.',
    fullDescription: 'Fluid-resistant and breathable disposable scrubs. Ideal for high-risk surgical environments.',
    specifications: [
      { key: 'Material', value: '45 GSM SMS Non-Woven' },
      { key: 'Sterility', value: 'Non-Sterile' },
      { key: 'Features', value: 'Elastic cuffs, pocketed pants' }
    ],
    materials: ['SMS Non-woven'],
    variants: [
      { size: 'M', color: 'Blue' },
      { size: 'L', color: 'Blue' }
    ],
    moqPieces: 500,
    moqKg: 0,
    sampleAvailable: true,
    privateLabelAvailable: true,
    certifications: ['CE'],
    images: ['https://images.unsplash.com/photo-1628068311627-0f5abce65050?w=800&q=80'],
    hsCode: '6210.10',
    tags: ['ppe', 'surgical', 'theatre'],
    featured: false,
    active: true
  },
  {
    id: 'm-6',
    name: 'Digital Patient Monitor',
    slug: 'digital-patient-monitor',
    category: 'medical-supplies',
    subcategory: 'Devices',
    shortDescription: 'Multi-parameter monitor for SpO2, ECG, NIBP, and Temp.',
    fullDescription: 'Portable 12-inch patient monitor suitable for bedside or transport monitoring.',
    specifications: [
      { key: 'Display', value: '12.1" Color TFT' },
      { key: 'Battery', value: '4 Hour Backup' },
      { key: 'Storage', value: '720 Hour Trend Data' }
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
    tags: ['diagnostics', 'icu', 'monitor'],
    featured: false,
    active: true
  },
  {
    id: 'm-7',
    name: 'Surgical Gowns (Sterile)',
    slug: 'surgical-gowns-sterile',
    category: 'medical-supplies',
    subcategory: 'Textiles',
    shortDescription: 'Reinforced AAMI Level 3 surgical gowns.',
    fullDescription: 'High-protection surgical gowns with sonic-welded seams for maximum barrier protection.',
    specifications: [
      { key: 'Protection', value: 'AAMI Level 3' },
      { key: 'Closure', value: 'Velcro Neck, Knit Cuffs' },
      { key: 'Sterility', value: 'EO Sterilized' }
    ],
    materials: ['Spunbond', 'Meltblown'],
    variants: [
      { size: 'L', color: 'Blue' },
      { size: 'XL', color: 'Blue' }
    ],
    moqPieces: 200,
    moqKg: 0,
    sampleAvailable: true,
    privateLabelAvailable: true,
    certifications: ['CE', 'FDA'],
    images: ['https://images.unsplash.com/photo-1588776848048-c8543b3bfa34?w=800&q=80'],
    hsCode: '6210.10',
    tags: ['surgical', 'protection', 'aami'],
    featured: false,
    active: true
  },
  {
    id: 'm-8',
    name: 'Hospital Orthopedic Braces',
    slug: 'hospital-orthopedic-braces',
    category: 'medical-supplies',
    subcategory: 'Rehab',
    shortDescription: 'Adjustable knee and ankle braces for post-op recovery.',
    fullDescription: 'Medical-grade orthopedic supports with breathable fabric and adjustable straps.',
    specifications: [
      { key: 'Material', value: 'Neoprene / Spandex' },
      { key: 'Hinge', value: 'Dual-axial Metal' }
    ],
    materials: ['Neoprene'],
    variants: [
      { size: 'Universal', color: 'Black' }
    ],
    moqPieces: 100,
    moqKg: 0,
    sampleAvailable: true,
    privateLabelAvailable: true,
    certifications: ['ISO 13485'],
    images: ['https://images.unsplash.com/photo-1620295116790-a7d0130089e9?w=800&q=80'],
    hsCode: '9021.10',
    tags: ['ortho', 'rehab'],
    featured: false,
    active: true
  },
  {
    id: 'm-9',
    name: 'Advanced First Aid Kit',
    slug: 'advanced-first-aid-kit',
    category: 'medical-supplies',
    subcategory: 'Emergency',
    shortDescription: 'Workplace-compliant 100-piece first aid kit in ABS case.',
    fullDescription: 'Comprehensive first aid solution for industrial and office settings.',
    specifications: [
      { key: 'Pieces', value: '100 Items' },
      { key: 'Case', value: 'ABS Wall-mountable' }
    ],
    materials: ['ABS Case'],
    variants: [
      { size: 'Industrial', color: 'Orange' }
    ],
    moqPieces: 50,
    moqKg: 0,
    sampleAvailable: false,
    privateLabelAvailable: true,
    certifications: ['CE'],
    images: ['https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80'],
    hsCode: '3006.50',
    tags: ['safety', 'emergency'],
    featured: false,
    active: true
  },
  {
    id: 'm-10',
    name: 'Anti-Bacterial Bed Mattress',
    slug: 'anti-bacterial-bed-mattress',
    category: 'medical-supplies',
    subcategory: 'Furniture',
    shortDescription: 'PU covered high-density foam mattress for ward beds.',
    fullDescription: 'Waterproof and fire-retardant mattress designed for prolonged patient stays and easy cleaning.',
    specifications: [
      { key: 'Core', value: 'High-Density Foam' },
      { key: 'Cover', value: 'Anti-bacterial PU' },
      { key: 'Thickness', value: '100mm' }
    ],
    materials: ['PU', 'Foam'],
    variants: [
      { size: 'Hospital Single', color: 'Blue' }
    ],
    moqPieces: 20,
    moqKg: 0,
    sampleAvailable: false,
    privateLabelAvailable: true,
    certifications: ['ISO 13485'],
    images: ['https://images.unsplash.com/photo-1669663628141-e4c9ed41100b?w=800&q=80'],
    hsCode: '9404.21',
    tags: ['ward', 'patient-comfort'],
    featured: false,
    active: true
  }
];
