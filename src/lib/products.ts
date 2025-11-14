
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
    { id: 'hotel-accessories', name: 'Hotel Room Accessories', slug: 'hotel-accessories', parentId: 'hospitality', imageUrl: 'https://picsum.photos/seed/kettle/600/400' },
    { id: 'hotel-furniture', name: 'Hotel Furniture', slug: 'hotel-furniture', parentId: 'hospitality', imageUrl: 'https://picsum.photos/seed/sofa/600/400' },
    { id: 'restaurant-supplies', name: 'Restaurant & F&B Supplies', slug: 'restaurant-supplies', parentId: 'hospitality', imageUrl: getImageUrl('dining-linen') },
    { id: 'housekeeping-supplies', name: 'Housekeeping & Laundry Supplies', slug: 'housekeeping-supplies', parentId: 'hospitality', imageUrl: getImageUrl('cleaning-cart') },
    { id: 'hospitality-uniforms', name: 'Uniforms & Workwear (Hospitality)', slug: 'hospitality-uniforms', parentId: 'hospitality', imageUrl: getImageUrl('uniform-corporate') },

    // Medical Sub-categories
    { id: 'medical-consumables', name: 'Medical Consumables & Disposables', slug: 'medical-consumables', parentId: 'medical', imageUrl: 'https://picsum.photos/seed/syringe/600/400' },
    { id: 'medical-devices', name: 'Medical Devices & Equipment', slug: 'medical-devices', parentId: 'medical', imageUrl: 'https://picsum.photos/seed/monitor/600/400' },
    { id: 'surgical-instruments', name: 'Surgical Instruments', slug: 'surgical-instruments', parentId: 'medical', imageUrl: 'https://picsum.photos/seed/forceps/600/400' },
    { id: 'orthopedic-rehab', name: 'Orthopedic & Rehabilitation Products', slug: 'orthopedic-rehab', parentId: 'medical', imageUrl: 'https://picsum.photos/seed/brace/600/400' },
    { id: 'hospital-furniture', name: 'Hospital Furniture', slug: 'hospital-furniture', parentId: 'medical', imageUrl: 'https://picsum.photos/seed/hospital-bed/600/400' },
    { id: 'infection-control', name: 'Infection Control & Sterilization', slug: 'infection-control', parentId: 'medical', imageUrl: 'https://picsum.photos/seed/disinfectant/600/400' },
    { id: 'medical-textiles', name: 'Medical Textiles & Hospital Linens', slug: 'medical-textiles', parentId: 'medical', imageUrl: 'https://picsum.photos/seed/scrubs/600/400' },
    { id: 'lab-supplies', name: 'Laboratory Supplies', slug: 'lab-supplies', parentId: 'medical', imageUrl: 'https://picsum.photos/seed/beaker/600/400' },
    { id: 'emergency-first-aid', name: 'Emergency & First Aid', slug: 'emergency-first-aid', parentId: 'medical', imageUrl: 'https://picsum.photos/seed/first-aid/600/400' },
];


export const products: Product[] = [
    // --- HOSPITALITY SUPPLIES ---

    // 1. Hotel Room Linen & Bedding
    {
        id: 'hotel-bed-sheets-144tc',
        slug: 'hotel-bed-sheets-144tc',
        name: 'Hotel Bed Sheets (144-600 TC)',
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
        name: 'Hotel Duvet Covers',
        categoryId: 'hotel-room-linen',
        description: 'Durable and elegant duvet covers designed for the hospitality industry. Available in various fabrics and thread counts, with strong zippers, buttons, or envelope closures.',
        images: [getImageUrl('duvet-cover')],
        shortSpecs: 'Percale/Sateen Weave, Strong Fasteners',
        specifications: {
            fabric: '100% cotton / cotton-rich / microfiber',
            tc: '144–600 TC',
            construction: 'Percale or sateen weave; double-stitched hems',
            fasteners: 'Strong zippers, buttons or envelope closures',
            finishing: 'Soft hand-feel, azo-free dyes',
        },
        customizationOptions: ['Fabric', 'Thread Count', 'Closure Type', 'Size'],
        moq: '100 units'
    },

    // 2. Hotel Towels & Bath Linen
    {
        id: 'hotel-bath-towels-400gsm',
        slug: 'hotel-bath-towels-400gsm',
        name: 'Hotel Bath Towels (400-800 GSM)',
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
        id: 'hotel-bathrobes-terry-waffle',
        slug: 'hotel-bathrobes-terry-waffle',
        name: 'Hotel Bathrobes (Terry/Waffle/Knit)',
        categoryId: 'hotel-towels',
        description: 'Luxurious hotel bathrobes available in knit or terry cotton. Offered in standard sizes with options for custom fits, belt loops, and hanger loops.',
        images: [getImageUrl('towel-velour')],
        shortSpecs: 'Knit or Terry, Multiple Sizes, Custom Fits',
        specifications: {
            material: '100% Cotton or Blends',
            construction: 'Knit or terry weave',
            bathrobes: 'S/M/L/XL; belt loops + hanger loop; unisex or gendered fits',
            slippers: 'Non-slip sole, closed or open toe; disposable or reusable',
        },
        customizationOptions: ['Fabric Type', 'Embroidery', 'Piping', 'Size'],
        moq: '50 units'
    },
    
    // 3. Curtains, Upholstery & Soft Furnishings
    {
        id: 'blackout-curtains-hotel',
        slug: 'blackout-curtains-hotel',
        name: 'Hotel Blackout Curtains',
        categoryId: 'hotel-furnishings',
        description: 'High-quality blackout curtains offering 70-100% light blocking with a 3-pass coating. Made from polyester, cotton, or FR-treated fabrics, compliant with international safety standards.',
        images: ['https://picsum.photos/seed/curtain/800/600'],
        shortSpecs: '70-100% Blackout, FR-Treated Options',
        specifications: {
            fabric: 'Polyester, cotton, blends or FR-treated fabrics',
            blackout: '70–100% light block (3-pass coating for full blackout)',
            frStandards: 'BS 5867, NFPA 701, or local equivalents (optional)',
            colorFastness: 'Good to light, rubbing, and washing',
            stitching: 'Overlocked edges, uniform pleats, reinforced hooks/eyelets',
        },
        customizationOptions: ['Fabric', 'Color', 'Size', 'Pleat Style'],
        moq: '50 pairs'
    },

    // 4. Guest Amenities & Toiletries
    {
        id: 'hotel-guest-amenities-kit',
        slug: 'hotel-guest-amenities-kit',
        name: 'Guest Amenities & Toiletries',
        categoryId: 'guest-amenities',
        description: 'Complete range of guest amenities including shampoo, soap, dental kits, and shaving kits. All formulations are skin-safe, dermatologically tested, and meet destination country cosmetic regulations.',
        images: [getImageUrl('chemical-laundry')],
        shortSpecs: 'Paraben-Free, Custom Fragrance, Full Kits',
        specifications: {
            formulation: 'Skin-safe, dermatologically tested; paraben-free/SLS-free (optional)',
            compliance: 'Meets destination country cosmetic regulations',
            fragrance: 'Mild, hotel-grade; hypoallergenic optional',
            packaging: 'Bottles/tubes/sachets; leak-proof, tamper-evident seals',
            labeling: 'INCI ingredients, batch no., Mfg/Exp dates, country of origin',
            soaps: 'TFM as per requirement; vegetable-based; non-irritant',
        },
        customizationOptions: ['Fragrance', 'Packaging Size & Design', 'Private Labeling'],
        moq: '1000 kits'
    },

    // --- MEDICAL SUPPLIES ---

    // 1. Medical Consumables & Disposables
    {
        id: 'medical-syringes-needles',
        slug: 'medical-syringes-needles',
        name: 'Syringes & Needles',
        categoryId: 'medical-consumables',
        description: 'Sterile, single-use syringes and needles manufactured in ISO 13485 facilities. CE marked and/or USFDA registered where applicable, ensuring highest safety and quality standards.',
        images: ['https://picsum.photos/seed/syringe-pack/800/600'],
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
        images: ['https://picsum.photos/seed/gloves/800/600'],
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
        name: 'Patient Monitors & ECG Machines',
        categoryId: 'medical-devices',
        description: 'Reliable patient monitors and ECG machines with CE/USFDA approvals. Factory calibrated with clear user manuals and a standard 1-2 year warranty.',
        images: ['https://picsum.photos/seed/ecg/800/600'],
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

    // 5. Hospital Furniture
    {
        id: 'hospital-icu-beds',
        slug: 'hospital-icu-beds',
        name: 'ICU & Fowler Beds',
        categoryId: 'hospital-furniture',
        description: 'Durable ICU and Fowler beds with MS/SS framework and epoxy powder coating. Load capacity tested for 150-250 kg, featuring smooth crank or electric motor mechanisms.',
        images: ['https://picsum.photos/seed/hospital-bed-2/800/600'],
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

    // 7. Medical Textiles & Hospital Linens
    {
        id: 'hospital-scrub-suits',
        slug: 'hospital-scrub-suits',
        name: 'Reusable Scrub Suits',
        categoryId: 'medical-textiles',
        description: 'Comfortable and durable reusable scrub suits made from cotton or poly-cotton blends. Designed to withstand 50-100+ industrial wash cycles with excellent color fastness.',
        images: ['https://picsum.photos/seed/scrubs-2/800/600'],
        shortSpecs: 'High Wash Durability, Cotton/Poly-Cotton',
        specifications: {
            reusableTextiles: 'Fabric: Cotton, poly-cotton, or barrier fabrics; GSM: 120–200 GSM; High wash durability (50–100+ cycles); color fastness; low lint',
            infectionControl: 'Optional antibacterial/antimicrobial finishes',
        },
        customizationOptions: ['Color', 'Logo Embroidery', 'Fabric Blend'],
        moq: '100 sets'
    },
];
