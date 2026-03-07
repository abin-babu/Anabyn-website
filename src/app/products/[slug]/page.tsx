
'use client';

import { useParams, notFound } from 'next/navigation';
import { products } from '@/lib/products';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import Image from 'next/image';
import { 
  BadgeCheck, 
  ChevronRight, 
  Download, 
  MessageSquare, 
  ShieldCheck, 
  Box, 
  ArrowLeft,
  Info,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { useState } from 'react';
import { ProductCard } from '@/components/product-card';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = products.find(p => p.slug === slug);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const categoryLabel = product.category === 'hospitality-supplies' ? 'Hospitality' : 'Medical';

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-white pt-24 pb-20">
        <div className="container mx-auto px-4">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-8">
            <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/products" className="hover:text-brand-gold transition-colors">Catalogue</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-navy truncate">{product.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            
            {/* Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-gray-100 bg-secondary/10 shadow-sm">
                <Image 
                  src={product.images[activeImage]} 
                  alt={product.name} 
                  fill 
                  className="object-cover"
                />
                <Badge className="absolute top-6 left-6 bg-brand-navy text-white text-xs uppercase font-bold tracking-widest px-3 py-1 border-none shadow-xl">
                  {categoryLabel}
                </Badge>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((img, i) => (
                  <button 
                    key={i} 
                    onClick={() => setActiveImage(i)}
                    className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${activeImage === i ? 'border-brand-gold ring-2 ring-brand-gold/20' : 'border-transparent opacity-60 hover:opacity-100'}`}
                  >
                    <Image src={img} alt={`${product.name} ${i}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="outline" className="text-brand-gold border-brand-gold px-3 py-1 font-bold uppercase tracking-widest text-[10px]">
                    {product.subcategory}
                  </Badge>
                  {product.certifications.map(c => (
                    <div key={c} className="flex items-center gap-1 text-[10px] font-bold text-success uppercase">
                      <ShieldCheck className="w-3 h-3" /> {c}
                    </div>
                  ))}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold font-playfair text-brand-navy mb-4">{product.name}</h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {product.shortDescription}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8 py-6 border-y border-gray-100">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">Min. Order (MOQ)</p>
                  <p className="text-xl font-bold text-brand-navy">{product.moqPieces} <span className="text-sm font-medium text-gray-400">Pieces</span></p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">Lead Time</p>
                  <p className="text-xl font-bold text-brand-navy">3–4 <span className="text-sm font-medium text-gray-400">Weeks</span></p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">HS Code</p>
                  <p className="text-sm font-mono font-bold text-brand-gold">{product.hsCode}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">Sample Status</p>
                  <p className="flex items-center gap-1 text-sm font-bold text-brand-navy">
                    {product.sampleAvailable ? <CheckCircle2 className="w-4 h-4 text-success" /> : <Info className="w-4 h-4 text-gray-300" />}
                    {product.sampleAvailable ? 'Available for Request' : 'Contact for Availability'}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button asChild size="lg" className="flex-1 bg-brand-navy text-white hover:bg-brand-navy/90 h-14 rounded-xl text-lg font-bold">
                  <Link href={`/request-quote?product=${encodeURIComponent(product.name)}`}>
                    Request Official Quote
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="flex-1 border-brand-gold text-brand-gold hover:bg-brand-gold/10 h-14 rounded-xl text-lg font-bold">
                  <a href={`https://wa.me/919495613121?text=${encodeURIComponent(`Hi Anabyn, I'm interested in the ${product.name}.`)}`} target="_blank">
                    <MessageSquare className="w-5 h-5 mr-2" /> Chat on WhatsApp
                  </a>
                </Button>
              </div>

              <div className="bg-secondary/20 p-6 rounded-2xl border border-brand-gold/10">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-brand-navy flex items-center gap-2">
                    <Download className="w-4 h-4 text-brand-gold" /> Technical Data Sheet
                  </h4>
                  <Badge className="bg-brand-gold text-brand-navy">PDF</Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-4">
                  Download the full technical specifications, testing standards, and compliance certifications for this product.
                </p>
                <Button variant="secondary" className="w-full bg-white border border-gray-200 text-brand-navy font-bold text-xs uppercase tracking-widest shadow-sm">
                  Download Spec Sheet
                </Button>
              </div>
            </div>
          </div>

          <Tabs defaultValue="details" className="mb-20">
            <TabsList className="bg-secondary/20 p-1 h-14 rounded-xl border border-gray-100">
              <TabsTrigger value="details" className="px-8 font-bold data-[state=active]:bg-white data-[state=active]:text-brand-navy data-[state=active]:shadow-sm rounded-lg">Product Details</TabsTrigger>
              <TabsTrigger value="specs" className="px-8 font-bold data-[state=active]:bg-white data-[state=active]:text-brand-navy data-[state=active]:shadow-sm rounded-lg">Specifications</TabsTrigger>
              <TabsTrigger value="variants" className="px-8 font-bold data-[state=active]:bg-white data-[state=active]:text-brand-navy data-[state=active]:shadow-sm rounded-lg">Available Variants</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="pt-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="prose max-w-none text-muted-foreground leading-relaxed">
                <h3 className="text-2xl font-bold font-playfair text-brand-navy mb-4">Overview</h3>
                <p className="mb-6">{product.fullDescription}</p>
                <div className="grid md:grid-cols-2 gap-8 mt-10">
                  <div className="bg-secondary/10 p-8 rounded-3xl border border-brand-gold/10">
                    <h4 className="font-bold text-brand-navy mb-4 flex items-center gap-2">
                      <ShieldCheck className="text-success w-5 h-5" /> Quality Assurance
                    </h4>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                        Multi-stage quality inspection at 50% & 100% production marks.
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                        Third-party (SGS/Intertek) loading supervision available.
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                        Verified azo-free and non-toxic materials.
                      </li>
                    </ul>
                  </div>
                  <div className="bg-brand-navy text-white p-8 rounded-3xl">
                    <h4 className="font-bold text-brand-gold mb-4 flex items-center gap-2">
                      <Box className="w-5 h-5" /> Sourcing Benefits
                    </h4>
                    <ul className="space-y-3 text-sm text-white/70">
                      <li>Competitive direct-factory pricing without middlemen.</li>
                      <li>Custom branding and private labeling (OEM) options.</li>
                      <li>Comprehensive export documentation and logistics support.</li>
                      <li>Secure payment terms via LC or TT.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="specs" className="pt-8">
              <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-brand-navy text-white">
                      <th className="px-6 py-4 text-left font-bold uppercase tracking-widest">Attribute</th>
                      <th className="px-6 py-4 text-left font-bold uppercase tracking-widest">Detail</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {product.specifications.map((spec, i) => (
                      <tr key={i} className="hover:bg-secondary/5 transition-colors">
                        <td className="px-6 py-4 font-bold text-brand-navy bg-secondary/10 w-1/3">{spec.key}</td>
                        <td className="px-6 py-4 text-muted-foreground">{spec.value}</td>
                      </tr>
                    ))}
                    <tr>
                      <td className="px-6 py-4 font-bold text-brand-navy bg-secondary/10">Material Base</td>
                      <td className="px-6 py-4 text-muted-foreground">{product.materials.join(', ')}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-bold text-brand-navy bg-secondary/10">HS Code</td>
                      <td className="px-6 py-4 text-brand-gold font-mono font-bold">{product.hsCode}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>

            <TabsContent value="variants" className="pt-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {product.variants.map((v, i) => (
                  <div key={i} className="p-6 rounded-2xl border border-brand-gold/20 bg-white hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-brand-navy mb-4 text-lg border-b pb-2">Variant #{i + 1}</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400 font-bold uppercase tracking-widest">Size</span>
                        <span className="font-bold text-brand-navy">{v.size}</span>
                      </div>
                      {v.gsm && (
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400 font-bold uppercase tracking-widest">Weight (GSM)</span>
                          <span className="font-bold text-brand-navy">{v.gsm}</span>
                        </div>
                      )}
                      {v.tc && (
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400 font-bold uppercase tracking-widest">Thread Count</span>
                          <span className="font-bold text-brand-navy">{v.tc}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400 font-bold uppercase tracking-widest">Color</span>
                        <span className="font-bold text-brand-navy">{v.color}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Related */}
          <div>
            <h3 className="text-3xl font-bold font-playfair text-brand-navy mb-8">Related Products</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
