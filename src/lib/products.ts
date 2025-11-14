
import type { Product, Category } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getImageUrl = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || 'https://placehold.co/800x600/e2e8f0/e2e8f0';

export const categories: Category[] = [
    // Main Categories
    { id: 'hospitality', name: 'Hospitality Supplies', slug: 'hospitality-supplies', parentId: null, imageUrl: getImageUrl('hero-1') },
    { id: 'medical', name: 'Medical Supplies', slug: 'medical-supplies', parentId: null, imageUrl: getImageUrl('chemical-cleaning') },

    // Hospitality Sub-categories
    { id: 'hotel-room-linen', name: 'Hotel Room Linen & Bedding', slug: 'hotel-room-linen', parentId: 'hospitality', imageUrl: getImageUrl('bedding-sheets') },
    { id: 'hotel-towels', name: 'Hotel Towels & Bath Linen', slug: 'hotel-towels', parentId: 'hospitality', imageUrl: getImageUrl('towel-terry-stack') },
    { id: 'hotel-furnishings', name: 'Curtains, Upholstery & Soft Furnishings', slug: 'hotel-furnishings', parentId: 'hospitality', imageUrl: getImageUrl('bedding-pillows') },
    { id: 'guest-amenities', name: 'Guest Amenities & Toiletries', slug: 'guest-amenities', parentId: 'hospitality', imageUrl: getImageUrl('chemical-laundry') },
    { id: 'hotel-accessories', name: 'Hotel Room Accessories', slug: 'hotel-accessories', parentId: 'hospitality', imageUrl: 'https://images.unsplash.com/photo-1621295399999-9370b3a3d53b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxob3RlbCUyMGtldHRsZXxlbnwwfHx8fDE3NjM2MzM4ODN8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 'hotel-furniture', name: 'Hotel Furniture', slug: 'hotel-furniture', parentId: 'hospitality', imageUrl: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzb2ZhfGVufDB8fHx8MTc2MzYzMzg4M3ww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 'restaurant-supplies', name: 'Restaurant & F&B Supplies', slug: 'restaurant-supplies', parentId: 'hospitality', imageUrl: getImageUrl('dining-linen') },
    { id: 'housekeeping-supplies', name: 'Housekeeping & Laundry Supplies', slug: 'housekeeping-supplies', parentId: 'hospitality', imageUrl: getImageUrl('cleaning-cart') },
    { id: 'hospitality-uniforms', name: 'Uniforms & Workwear (Hospitality)', slug: 'hospitality-uniforms', parentId: 'hospitality', imageUrl: getImageUrl('uniform-corporate') },

    // Medical Sub-categories
    { id: 'medical-consumables', name: 'Medical Consumables & Disposables', slug: 'medical-consumables', parentId: 'medical', imageUrl: 'https://images.unsplash.com/photo-1631804959147-75a1b5a837e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzeXJpbmdlfGVufDB8fHx8MTc2MzYzMzg4M3ww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 'medical-devices', name: 'Medical Devices & Equipment', slug: 'medical-devices', parentId: 'medical', imageUrl: 'https://images.unsplash.com/photo-1579684385127-6c17937c4635?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxtZWRpY2FsJTIwbW9uaXRvcnxlbnwwfHx8fDE3NjM2MzM4ODN8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 'surgical-instruments', name: 'Surgical Instruments', slug: 'surgical-instruments', parentId: 'medical', imageUrl: 'https://images.unsplash.com/photo-1542312574-55db74e54884?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZm9yY2Vwc3xlbnwwfHx8fDE3NjM2MzM4ODN8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 'orthopedic-rehab', name: 'Orthopedic & Rehabilitation Products', slug: 'orthopedic-rehab', parentId: 'medical', imageUrl: 'https://images.unsplash.com/photo-1620295116790-a7d0130089e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxrbmVlJTIwYnJhY2V8ZW58MHx8fHwxNzYzNjMzODgzfDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 'hospital-furniture', name: 'Hospital Furniture', slug: 'hospital-furniture', parentId: 'medical', imageUrl: 'https://images.unsplash.com/photo-1584983191144-7734c3527a6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGJlZHxlbnwwfHx8fDE3NjM2MzM4ODN8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 'infection-control', name: 'Infection Control & Sterilization', slug: 'infection-control', parentId: 'medical', imageUrl: 'https://images.unsplash.com/photo-1616788417639-656858548a33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxyZWQxJTIwZGlzaW5mZWN0YW50fGVufDB8fHx8MTc2MzYzMzg4M3ww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 'medical-textiles', name: 'Medical Textiles & Hospital Linens', slug: 'medical-textiles', parentId: 'medical', imageUrl: 'https://images.unsplash.com/photo-1628068311627-0f5abce65050?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxibHVlJTIwc2NydWJzfGVufDB8fHx8MTc2MzYzMzg4M3ww&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 'lab-supplies', name: 'Laboratory Supplies', slug: 'lab-supplies', parentId: 'medical', imageUrl: 'https://images.unsplash.com/photo-1579165466949-5536a5356c35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxsYWIlMjBiZWFrZXJ8ZW58MHx8fHwxNzYzNjMzODgzfDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { id: 'emergency-first-aid', name: 'Emergency & First Aid', slug: 'emergency-first-aid', parentId: 'medical', imageUrl: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxmaXJzdCUyMGFpZCUyMGtpdHxlbnwwfHx8fDE3NjM2MzM4ODN8MA&ixlib=rb-4.1.0&q=80&w=1080' },
];


export const products: Product[] = [
    // --- HOSPITALITY SUPPLIES ---

    // 1. Hotel Room Linen & Bedding
    {
        id: 'hotel-bed-sheets',
        slug: 'hotel-bed-sheets',
        name: 'Hotel Bed Sheets (Flat/Fitted)',
        categoryId: 'hotel-room-linen',
        description: 'Export-quality hotel bed sheets available in flat or fitted styles. Made from 100% cotton, cotton-rich, or microfiber fabrics with thread counts ranging from 144 to 600 for budget to luxury needs.',
        images: [getImageUrl('bedding-sheets')],
        shortSpecs: '144-600 TC, Cotton/Blends, Percale/Sateen',
        specifications: {
            fabric: '100% cotton / cotton-rich / microfiber; combed or ring-spun yarn',
            tc: '144–600 TC',
            gsm: '110–180 GSM',
            construction: 'Percale or sateen weave; double-stitched hems; shrinkage controlled',
            finishing: 'Anti-pilling, mercerised (optional), soft hand-feel, azo-free dyes',
            colorFastness: 'Grade 4+ to washing and rubbing',
            packaging: 'Folded, polybag with labels; export cartons, custom branding',
        },
        customizationOptions: ['Thread Count', 'Fabric Blend', 'Size', 'Packaging'],
        moq: '100 sets'
    },
    {
        id: 'hotel-duvet-covers',
        slug: 'hotel-duvet-covers',
        name: 'Hotel Duvet Covers & Duvets',
        categoryId: 'hotel-room-linen',
        description: 'Durable and elegant duvet covers designed for the hospitality industry. Available in various fabrics and thread counts, with strong zippers, buttons, or envelope closures. Duvets with various fillings also available.',
        images: [getImageUrl('duvet-cover')],
        shortSpecs: 'Percale/Sateen Weave, Strong Fasteners, Various Fillings',
        specifications: {
            fabric: '100% cotton / cotton-rich / microfiber',
            tc: '144–600 TC',
            gsm: '350–800 GSM (duvet filling dependent)',
            construction: 'Percale or sateen weave; double-stitched hems',
            fasteners: 'Strong zippers, buttons or envelope closures',
            finishing: 'Soft hand-feel, azo-free dyes',
        },
        customizationOptions: ['Fabric', 'Thread Count', 'Closure Type', 'Size', 'Duvet Filling'],
        moq: '100 units'
    },
    {
        id: 'hotel-pillows-protectors',
        slug: 'hotel-pillows-protectors',
        name: 'Pillows, Protectors & Toppers',
        categoryId: 'hotel-room-linen',
        description: 'A range of pillows with different fillings, plus protective covers and mattress toppers to enhance guest comfort and prolong mattress life.',
        images: [getImageUrl('bedding-pillows')],
        shortSpecs: 'Microfiber/Down Fillings, Quilted Protectors',
        specifications: {
            features: 'Pillows with microfiber, hollow-fiber, or down fillings. Quilted or waterproof mattress protectors and toppers.',
            fabric: 'Cotton or polyester outer fabrics',
            size: 'Standard and custom sizes available'
        },
        customizationOptions: ['Pillow Firmness', 'Topper Thickness', 'Size'],
        moq: '100 units'
    },

    // 2. Hotel Towels & Bath Linen
    {
        id: 'hotel-bath-towels',
        slug: 'hotel-bath-towels',
        name: 'Hotel Towels (Bath, Hand, Face)',
        categoryId: 'hotel-towels',
        description: 'Premium 100% cotton hotel towels, crafted for high absorbency and low linting. Available in terry or velour, with weights from 400 to 800 GSM to suit economy to luxury hotel grades.',
        images: [getImageUrl('towel-terry-stack')],
        shortSpecs: '400-800 GSM, 100% Cotton, Terry/Velour',
        specifications: {
            material: '100% cotton / zero-twist cotton / blended yarn; terry or velour',
            gsm: '400–800 GSM',
            absorbency: 'High-absorbency; low linting',
            construction: 'Double-stitched or triple-stitched hems',
            shrinkage: 'Controlled to within 3–5% after wash',
            colorFastness: 'Suitable for hot water industrial laundering',
        },
        customizationOptions: ['GSM', 'Yarn Type', 'Size', 'Embroidery'],
        moq: '200 units'
    },
    {
        id: 'hotel-pool-towels',
        slug: 'hotel-pool-towels',
        name: 'Pool Towels',
        categoryId: 'hotel-towels',
        description: 'Durable and vibrant pool towels designed to withstand sun, chlorine, and frequent washing. Often features colored stripes.',
        images: [getImageUrl('towel-waffle')],
        shortSpecs: 'Chlorine-Resistant Dyes, 450-600 GSM',
        specifications: {
            material: '100% Cotton or Cotton-Poly Blend',
            gsm: '450-600 GSM',
            features: 'Chlorine-resistant dyes, high durability',
            construction: 'Robust double-stitched hems'
        },
        customizationOptions: ['Color', 'Stripe Pattern', 'Embroidery'],
        moq: '200 units'
    },
    {
        id: 'hotel-bathrobes-slippers',
        slug: 'hotel-bathrobes-slippers',
        name: 'Hotel Bathrobes & Slippers',
        categoryId: 'hotel-towels',
        description: 'Luxurious hotel bathrobes available in knit, waffle, or terry cotton. Offered in standard sizes with options for custom fits, belt loops, and hanger loops. Slippers are available in open/closed-toe styles with non-slip soles.',
        images: [getImageUrl('towel-velour')],
        shortSpecs: 'Knit/Waffle/Terry, Multiple Sizes, Non-Slip Slippers',
        specifications: {
            material: '100% Cotton or Blends',
            construction: 'Knit, Waffle, or Terry weave',
            bathrobes: 'S/M/L/XL; belt loops + hanger loop; unisex or gendered fits',
            slippers: 'Non-slip sole, closed or open toe; disposable or reusable',
        },
        customizationOptions: ['Fabric Type', 'Embroidery', 'Piping', 'Slipper Style'],
        moq: '50 units'
    },
    
    // 3. Curtains, Upholstery & Soft Furnishings
    {
        id: 'blackout-curtains-hotel',
        slug: 'blackout-curtains-hotel',
        name: 'Hotel Blackout & Sheer Curtains',
        categoryId: 'hotel-furnishings',
        description: 'High-quality blackout and sheer curtains. Blackout options offer 70-100% light blocking with a 3-pass coating. Made from polyester, cotton, or FR-treated fabrics, compliant with international safety standards.',
        images: ['https://images.unsplash.com/photo-1620626334238-6629b35a788c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxyb29tJTIwY3VydGFpbnxlbnwwfHx8fDE3NjM2MzM4ODN8MA&ixlib=rb-4.1.0&q=80&w=1080'],
        shortSpecs: '70-100% Blackout, FR-Treated Options',
        specifications: {
            fabric: 'Polyester, cotton, blends or FR-treated fabrics',
            blackout: '70–100% light block (3-pass coating for full blackout)',
            frStandards: 'BS 5867, NFPA 701, or local equivalents (optional)',
            colorFastness: 'Good to light, rubbing, and washing',
            stitching: 'Overlocked edges, uniform pleats, reinforced hooks/eyelets',
        },
        customizationOptions: ['Fabric', 'Color', 'Size', 'Pleat Style', 'Light Blocking %'],
        moq: '50 pairs'
    },
     {
        id: 'upholstery-cushions-throws',
        slug: 'upholstery-cushions-throws',
        name: 'Upholstery, Cushion Covers & Throws',
        categoryId: 'hotel-furnishings',
        description: 'Durable upholstery fabrics and decorative soft furnishings like cushion covers and throws to complement hotel interiors.',
        images: ['https://images.unsplash.com/photo-1617103994274-c335532b35a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGN1c2hpb258ZW58MHx8fHwxNzYzNjMzODgzfDA&ixlib=rb-4.1.0&q=80&w=1080'],
        shortSpecs: 'High Martindale Rating, Custom Designs',
        specifications: {
            fabric: 'Wide range of commercial-grade fabrics',
            durability: 'High abrasion resistance (Martindale rating)',
            design: 'Custom designs, colors, and sizes available for cushions and throws',
        },
        customizationOptions: ['Fabric Type', 'Design', 'Color'],
        moq: '100 meters (fabric), 100 units (covers/throws)'
    },

    // 4. Guest Amenities & Toiletries
    {
        id: 'hotel-guest-amenities-kit',
        slug: 'hotel-guest-amenities-kit',
        name: 'Guest Amenity Kits',
        categoryId: 'guest-amenities',
        description: 'Complete range of guest amenities including shampoo, conditioner, lotion, soap, dental kits, and shaving kits. All formulations are skin-safe, dermatologically tested, and meet destination country cosmetic regulations.',
        images: [getImageUrl('chemical-laundry')],
        shortSpecs: 'Paraben-Free, Custom Fragrance, Full Kits',
        specifications: {
            formulation: 'Skin-safe, dermatologically tested; paraben-free/SLS-free (optional)',
            compliance: 'Meets destination country cosmetic regulations',
            fragrance: 'Mild, hotel-grade; hypoallergenic optional',
            packaging: 'Bottles/tubes/sachets; leak-proof, tamper-evident seals',
            labeling: 'INCI ingredients, batch no., Mfg/Exp dates, country of origin',
            soaps: 'TFM as per requirement; vegetable-based; non-irritant',
            kitContents: 'Dental Kit, Shaving Kit, Vanity Kit, Sewing Kit, Shower Caps, Loofahs, Combs',
        },
        customizationOptions: ['Fragrance', 'Packaging Design', 'Kit Contents', 'Private Labeling'],
        moq: '1000 kits'
    },

    // 5. Hotel Room Accessories
    {
        id: 'hotel-room-trays-bins',
        slug: 'hotel-room-trays-bins',
        name: 'Room Trays, Bins & Kettles',
        categoryId: 'hotel-accessories',
        description: 'A selection of durable and stylish in-room accessories including service trays, waste bins, and electric kettles, designed for heavy hotel use.',
        images: ['https://images.unsplash.com/photo-1621295399999-9370b3a3d53b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxob3RlbCUyMGtldHRsZXxlbnwwfHx8fDE3NjM2MzM4ODN8MA&ixlib=rb-4.1.0&q=80&w=1080'],
        shortSpecs: 'Faux Leather, SS, Wood; Scratch-Resistant',
        specifications: {
            materials: 'Faux leather, stainless steel, wood, melamine, ABS',
            finish: 'Scratch-resistant, stain-resistant, easy to clean',
            hardware: 'Rust-free metal parts; smooth edges; no sharp corners',
            durability: 'Designed for heavy hotel use; impact-resistant where needed',
        },
        customizationOptions: ['Material', 'Color', 'Logo Branding'],
        moq: '100 units'
    },
    {
        id: 'hotel-desk-accessories',
        slug: 'hotel-desk-accessories',
        name: 'Desk Accessories & Folders',
        categoryId: 'hotel-accessories',
        description: 'Coordinated desk accessories including tissue box covers, welcome trays, folder sets, and more to create a professional and organized guest experience.',
        images: ['https://images.unsplash.com/photo-1593345378735-96f35d1ea7a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGRlc2slMjBzZXR8ZW58MHx8fHwxNzYzNjMzODgzfDA&ixlib=rb-4.1.0&q=80&w=1080'],
        shortSpecs: 'Faux Leather, Wood; Embossed Logos',
        specifications: {
            materials: 'Faux leather, wood, or other custom materials',
            finish: 'High-quality stitching and finish',
            color: 'PMS color matching available',
            branding: 'Embossed/debossed or printed logos',
        },
        customizationOptions: ['Material', 'Set Composition', 'Logo Branding'],
        moq: '100 sets'
    },
    
    // 6. Hotel Furniture
    {
        id: 'hotel-beds-mattresses',
        slug: 'hotel-beds-mattresses',
        name: 'Hotel Beds, Headboards & Mattresses',
        categoryId: 'hotel-furniture',
        description: 'Commercial-grade beds, headboards, and mattresses (spring, foam, hybrid) designed for hotel durability and guest comfort. Fire-retardant options available.',
        images: [getImageUrl('mattress-spring-2')],
        shortSpecs: 'Spring/Foam/Hybrid, FR Options',
        specifications: {
            frame: 'Solid wood/engineered wood/metal; kiln-dried wood; joints reinforced',
            foam: 'High-density foam, appropriate ILD; fire-retardant optional',
            upholstery: 'Fabric or faux leather; abrasion resistance >25,000 rubs (Martindale)',
            mattresses: 'Bonnell/spring/foam/hybrid; GSM of quilting fabric; fire-retardant options',
            compliance: 'FR, structural stability, weight limits clearly stated',
        },
        customizationOptions: ['Size', 'Mattress Type', 'Headboard Design', 'Upholstery'],
        moq: '10 units'
    },
    {
        id: 'hotel-case-goods',
        slug: 'hotel-case-goods',
        name: 'Hotel Case Goods (Tables, Desks, Chairs)',
        categoryId: 'hotel-furniture',
        description: 'A wide range of case goods including bedside tables, desks, chairs, and sofas. Built with durable frames and high-resistance upholstery for lobby, lounge, and room use.',
        images: [getImageUrl('mattress-foam')],
        shortSpecs: 'Solid Wood/Metal Frames, High-Durability Upholstery',
        specifications: {
            frame: 'Solid wood/engineered wood/metal; kiln-dried wood',
            finish: 'Stain, laminate, veneer or powder coating; low VOC finishes where required',
            upholstery: 'Commercial-grade fabric or faux leather with high abrasion resistance',
        },
        customizationOptions: ['Design', 'Finish', 'Upholstery Fabric'],
        moq: '10 units'
    },

    // 7. Restaurant & F&B Supplies
    {
        id: 'restaurant-tableware-cutlery',
        slug: 'restaurant-tableware-cutlery',
        name: 'Tableware & Cutlery',
        categoryId: 'restaurant-supplies',
        description: 'Hotel-grade porcelain/ceramic tableware that is chip-resistant and dishwasher safe. Paired with 18/10 or 18/8 stainless steel cutlery for corrosion resistance and lasting shine.',
        images: [getImageUrl('dining-linen')],
        shortSpecs: 'Chip-Resistant Porcelain, 18/10 SS Cutlery',
        specifications: {
            porcelain: 'Hotel-grade, chip-resistant, glazed; dishwasher and microwave safe',
            cutlery: '18/10 or 18/8 stainless steel; corrosion-resistant; mirror or satin finish',
            certifications: 'Food contact safety compliant (EU/US standards where applicable)',
        },
        customizationOptions: ['Design Pattern', 'Cutlery Finish', 'Logo on Porcelain'],
        moq: '100 sets'
    },
    {
        id: 'restaurant-buffetware',
        slug: 'restaurant-buffetware',
        name: 'Buffetware & Kitchenware',
        categoryId: 'restaurant-supplies',
        description: 'Comprehensive range of buffet and kitchen supplies, including food-grade SS 304 chafing dishes, standard GN pans, and serving trays.',
        images: ['https://images.unsplash.com/photo-1517840933437-c42d2b168645?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxidWZmZXQlMjBmb29kfGVufDB8fHx8MTc2MzYzMzg4M3ww&ixlib=rb-4.1.0&q=80&w=1080'],
        shortSpecs: 'SS 304 Chafing Dishes, GN Pans',
        specifications: {
            chafingDishes: 'Food-grade SS 304, robust hinges, fuel/electric compatible',
            gnPans: 'GN standard sizing; SS 304, rolled edges, stackable',
            glassware: 'Tempered or toughened for hotel use; clarity and break resistance',
        },
        customizationOptions: ['Chafing Dish Capacity', 'GN Pan Sizes'],
        moq: '10 units'
    },

    // 8. Housekeeping & Laundry Supplies
    {
        id: 'housekeeping-trolleys-carts',
        slug: 'housekeeping-trolleys-carts',
        name: 'Housekeeping Trolleys & Laundry Carts',
        categoryId: 'housekeeping-supplies',
        description: 'Heavy-duty housekeeping trolleys and laundry carts with rust-resistant frames, smooth-rolling wheels, and multiple compartments for efficient operations.',
        images: [getImageUrl('cleaning-cart')],
        shortSpecs: 'Heavy-Duty, Rust-Resistant, Multiple Shelves',
        specifications: {
            trolleys: 'Heavy-duty wheels, rust-resistant frames, multiple shelves; load rating indicated',
            cleaningTools: 'Durable plastics; ergonomic handles for mops, buckets, brooms',
            chemicals: 'Concentrates or ready-to-use; clear dilution ratios; MSDS available',
            compliance: 'Biodegradable/eco certifications if applicable; non-corrosive where needed',
        },
        customizationOptions: ['Trolley Configuration', 'Color'],
        moq: '5 units'
    },

    // 9. Uniforms & Workwear (Hospitality)
    {
        id: 'hospitality-uniforms-workwear',
        slug: 'hospitality-uniforms-workwear',
        name: 'Hospitality Uniforms & Workwear',
        categoryId: 'hospitality-uniforms',
        description: 'Customizable uniforms for all hotel departments, including chef coats, aprons, front office suits, and housekeeping attire. Made from durable, stain-resistant, and breathable fabrics.',
        images: [getImageUrl('uniform-corporate')],
        shortSpecs: 'Poly-Cotton/Stretch, Stain-Resistant',
        specifications: {
            fabric: 'Blended poly-cotton or stretch fabric; stain-resistant, breathable',
            gsm: '160–250 GSM depending on garment and climate',
            construction: 'Double-stitching at stress points; bar-tacking on pockets',
            colorFastness: 'Suitable for commercial laundry',
            design: 'Custom branding, piping, embroidery options',
        },
        customizationOptions: ['Fabric Blend', 'Color', 'Logo Embroidery', 'Design'],
        moq: '50 sets'
    },

    // --- MEDICAL SUPPLIES ---

    // 1. Medical Consumables & Disposables
    {
        id: 'medical-syringes-needles',
        slug: 'medical-syringes-needles',
        name: 'Syringes, Needles & IV Sets',
        categoryId: 'medical-consumables',
        description: 'Sterile, single-use syringes, needles, IV cannula, and infusion sets. Manufactured in ISO 13485 facilities, CE marked and/or USFDA registered where applicable for utmost safety.',
        images: ['https://images.unsplash.com/photo-1631804959147-75a1b5a837e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzeXJpbmdlfGVufDB8fHx8MTc2MzYzMzg4M3ww&ixlib=rb-4.1.0&q=80&w=1080'],
        shortSpecs: 'Sterile, ISO 13485, CE/FDA Marked',
        specifications: {
            standards: 'ISO 13485 manufacturer, CE marking / USFDA registration where applicable',
            sterility: 'EO/Gamma sterilized; sterility assurance level documented',
            shelfLife: 'Clearly marked; validated stability',
            packaging: 'Sterile pouches, peelable, with clear IFUs',
        },
        customizationOptions: ['Gauge Size', 'Length', 'Packaging Volume'],
        moq: '10,000 units'
    },
    {
        id: 'surgical-examination-gloves',
        slug: 'surgical-examination-gloves',
        name: 'Surgical & Examination Gloves',
        categoryId: 'medical-consumables',
        description: 'High-quality latex, nitrile, or vinyl gloves for surgical and examination purposes. Available powdered or powder-free with low-protein content to minimize allergic reactions.',
        images: ['https://images.unsplash.com/photo-1606950669720-5f4b34856f6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzdXJnaWNhbCUyMGdsb3Zlc3xlbnwwfHx8fDE3NjM2MzM4ODN8MA&ixlib=rb-4.1.0&q=80&w=1080'],
        shortSpecs: 'Latex/Nitrile/Vinyl, Powder-Free Options',
        specifications: {
            material: 'Latex/Nitrile/Vinyl',
            features: 'Powdered / powder-free; low-protein, low-allergen',
            standards: 'ISO 13485, CE marking / USFDA registration',
            biocompatibility: 'Tested as per ISO 10993',
        },
        customizationOptions: ['Material', 'Size', 'Powdered/Powder-Free'],
        moq: '1 case'
    },

    // 2. Medical Devices & Equipment
    {
        id: 'patient-monitors-ecg',
        slug: 'patient-monitors-ecg',
        name: 'Patient Monitors, ECG & Diagnostic Devices',
        categoryId: 'medical-devices',
        description: 'Reliable patient monitors, ECG machines, nebulizers, and diagnostic devices (BP apparatus, thermometers) with CE/USFDA approvals. Factory calibrated with clear user manuals and warranty.',
        images: ['https://images.unsplash.com/photo-1579684385127-6c17937c4635?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxtZWRpY2FsJTIwbW9uaXRvcnxlbnwwfHx8fDE3NjM2MzM4ODN8MA&ixlib=rb-4.1.0&q=80&w=1080'],
        shortSpecs: 'CE/USFDA Approved, Calibrated, Warranty',
        specifications: {
            regulatory: 'CE / USFDA / local approvals as per target market',
            electricalSafety: 'IEC 60601 or equivalent',
            calibration: 'Factory calibrated; documentation provided',
            userManual: 'English + local language (if required)',
            warranty: 'Typically 1–2 years; service support assurances',
        },
        customizationOptions: ['Language Support', 'Accessory Packs'],
        moq: '1 unit'
    },

    // 3. Surgical Instruments
    {
        id: 'surgical-instruments-sets',
        slug: 'surgical-instruments-sets',
        name: 'Surgical Instruments',
        categoryId: 'surgical-instruments',
        description: 'General and specialized surgical instruments made from high-grade stainless steel. Corrosion-resistant with controlled hardness for sharpness and durability. Sourced from ISO 13485 facilities.',
        images: ['https://images.unsplash.com/photo-1588776848 nascosto?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzdXJnaWNhbCUyMHNldHxlbnwwfHx8fDE3NjM2MzM4ODN8MA&ixlib=rb-4.1.0&q=80&w=1080'],
        shortSpecs: 'High-Grade SS, ISO 7153-1',
        specifications: {
            material: 'High-grade stainless steel (e.g., 410/420/440 or as required)',
            finish: 'Matt / satin / mirror; corrosion-resistant',
            hardness: 'Controlled per instrument type; retains sharpness; no burrs',
            standards: 'ISO 7153-1, ISO 13485 facility',
            packaging: 'Individually packed or set packed in trays; labeled with lot/batch no.',
        },
        customizationOptions: ['Instrument Set Composition', 'Finish'],
        moq: '1 set'
    },

    // 4. Orthopedic & Rehabilitation Products
    {
        id: 'orthopedic-rehab-aids',
        slug: 'orthopedic-rehab-aids',
        name: 'Orthopedic & Rehabilitation Aids',
        categoryId: 'orthopedic-rehab',
        description: 'A range of external supports (braces, splints), walking aids (crutches, walkers), and wheelchairs. Designed with medical-grade, hypoallergenic materials for patient comfort and safety.',
        images: ['https://images.unsplash.com/photo-1616422285852-2430335f6a90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHx3aGVlbGNoYWlyfGVufDB8fHx8MTc2MzYzMzg4M3ww&ixlib=rb-4.1.0&q=80&w=1080'],
        shortSpecs: 'Medical-Grade Materials, Ergonomic Design',
        specifications: {
            materials: 'Medical-grade metals & polymers; hypoallergenic materials for contact surfaces',
            loadCapacity: 'Clearly stated and tested (e.g. 100–120 kg)',
            design: 'Adjustable, ergonomic, padded where required',
        },
        customizationOptions: ['Size', 'Adjustability Features'],
        moq: '10 units'
    },

    // 5. Hospital Furniture
    {
        id: 'hospital-icu-beds',
        slug: 'hospital-icu-beds',
        name: 'Hospital Beds (ICU, Fowler)',
        categoryId: 'hospital-furniture',
        description: 'Durable ICU and Fowler beds with MS/SS framework and epoxy powder coating. Load capacity tested for 150-250 kg, featuring smooth crank or electric motor mechanisms.',
        images: ['https://images.unsplash.com/photo-1584983191144-7734c3527a6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMGJlZHxlbnwwfHx8fDE3NjM2MzM4ODN8MA&ixlib=rb-4.1.0&q=80&w=1080'],
        shortSpecs: '150-250kg Capacity, Crank/Electric',
        specifications: {
            frame: 'MS/SS framework; epoxy powder-coated or SS 304/202',
            loadCapacity: 'Typically 150–250 kg for adult beds; tested',
            mechanism: 'Crank or electric motors; smooth, low-noise movement',
            mattressPlatform: 'Perforated/solid; radiolucent for certain models',
            casters: 'Lockable, anti-rust, smooth movement',
        },
        customizationOptions: ['Mechanism Type', 'Mattress Type', 'Side Rails'],
        moq: '5 units'
    },

    // 6. Infection Control & Sterilization
    {
        id: 'infection-control-disinfectants',
        slug: 'infection-control-disinfectants',
        name: 'Disinfectants & Sterilization Products',
        categoryId: 'infection-control',
        description: 'Broad-spectrum disinfectants (surface, instrument, hand rubs) and sterilization supplies like pouches and wraps. Efficacy tested to international standards, with MSDS available.',
        images: ['https://images.unsplash.com/photo-1584362142279-797695303450?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxkaXNpbmZlY3RhbnQlMjBib3R0bGVzfGVufDB8fHx8MTc2MzYzMzg4M3ww&ixlib=rb-4.1.0&q=80&w=1080'],
        shortSpecs: 'Broad-Spectrum, Efficacy Tested, MSDS Available',
        specifications: {
            chemicalComposition: 'Clearly declared; broad-spectrum efficacy (bacteria, virus, fungi)',
            testing: 'Efficacy tested as per accepted microbiological standards',
            handling: 'Clear safety and dilution instructions; MSDS available',
            packaging: 'Leak-proof; compatible with shipping regulations for chemicals',
        },
        customizationOptions: ['Concentration', 'Packaging Size'],
        moq: '100 Liters'
    },

    // 7. Medical Textiles & Hospital Linens
    {
        id: 'medical-textiles-scrubs-gowns',
        slug: 'medical-textiles-scrubs-gowns',
        name: 'Medical Textiles (Scrubs, Gowns, Drapes)',
        categoryId: 'medical-textiles',
        description: 'Reusable and disposable medical textiles including scrub suits, patient gowns, and OT drapes. Reusable fabrics are tested for high wash durability, while disposable options offer fluid resistance.',
        images: ['https://images.unsplash.com/photo-1628068311627-0f5abce65050?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxibHVlJTIwc2NydWJzfGVufDB8fHx8MTc2MzYzMzg4M3ww&ixlib=rb-4.1.0&q=80&w=1080'],
        shortSpecs: 'High Wash Durability, Fluid-Resistant',
        specifications: {
            reusableTextiles: 'Fabric: Cotton, poly-cotton, or barrier fabrics; GSM: 120–200 GSM; High wash durability (50–100+ cycles); color fastness; low lint',
            disposableTextiles: 'SMS/SMMS non-woven with specified GSM; Fluid-resistant or fluid-impervious grades for OT',
            infectionControl: 'Optional antibacterial/antimicrobial finishes',
        },
        customizationOptions: ['Color', 'Fabric Type', 'Logo Embroidery'],
        moq: '100 sets'
    },

    // 8. Laboratory Supplies
    {
        id: 'lab-glassware-plasticware',
        slug: 'lab-glassware-plasticware',
        name: 'Lab Glassware & Plasticware',
        categoryId: 'lab-supplies',
        description: 'A range of laboratory supplies including borosilicate glassware (beakers, flasks) and virgin medical-grade plasticware (pipette tips, petri dishes). Packaged for cleanliness with lot traceability.',
        images: ['https://images.unsplash.com/photo-1579165466949-5536a5356c35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxsYWIlMjBiZWFrZXJ8ZW58MHx8fHwxNzYzNjMzODgzfDA&ixlib=rb-4.1.0&q=80&w=1080'],
        shortSpecs: 'Borosilicate Glass, Medical-Grade Plastic',
        specifications: {
            glassware: 'Borosilicate glass; thermal shock resistance; calibration marks where applicable',
            plasticware: 'Virgin medical-grade polymers; DNase/RNase-free where relevant',
            packaging: 'Clean, dust-free packing; lot traceability',
        },
        customizationOptions: ['Volume/Size', 'Sterilization (for plasticware)'],
        moq: '1 case'
    },

    // 9. Emergency & First Aid
    {
        id: 'emergency-first-aid-kits',
        slug: 'emergency-first-aid-kits',
        name: 'Emergency & First Aid Kits',
        categoryId: 'emergency-first-aid',
        description: 'Comprehensive first aid kits for workplace, vehicle, or home use. Contents can be customized to meet specific country regulations. Also includes stretchers, spine boards, and splints.',
        images: ['https://images.unsplash.com/photo-1576086213369-97a306d36557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxmaXJzdCUyMGFpZCUyMGtpdHxlbnwwfHx8fDE3NjM2MzM4ODN8MA&ixlib=rb-4.1.0&q=80&w=1080'],
        shortSpecs: 'Customizable Contents, Durable Cases',
        specifications: {
            kitContents: 'As per client/country regulation (e.g. workplace, vehicle, home kits)',
            durableCases: 'Weather-resistant; easy-to-carry',
            labeling: 'Clear, multilingual where required',
        },
        customizationOptions: ['Kit Contents', 'Case Type', 'Branding'],
        moq: '50 kits'
    },
];
