
'use client';

import { useState, useMemo } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ProductCard } from '@/components/product-card';
import { products } from '@/lib/products';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Filter, Search, X, Package, ShieldCheck, Factory } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const categories = [
  { id: 'hospitality-supplies', name: 'Hospitality Supplies' },
  { id: 'medical-supplies', name: 'Medical Supplies' }
];

const allSubcategories = Array.from(new Set(products.map(p => p.subcategory)));
const allCertifications = Array.from(new Set(products.flatMap(p => p.certifications)));

export default function ProductListingPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | 'all'>('all');
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);
  const [selectedCerts, setSelectedCerts] = useState<string[]>([]);
  const [sampleFilter, setSampleFilter] = useState(false);
  const [privateLabelFilter, setPrivateLabelFilter] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    return products
      .filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             p.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
        const matchesSubcategory = selectedSubcategories.length === 0 || selectedSubcategories.includes(p.subcategory);
        const matchesCerts = selectedCerts.length === 0 || selectedCerts.every(c => p.certifications.includes(c));
        const matchesSample = !sampleFilter || p.sampleAvailable;
        const matchesPrivateLabel = !privateLabelFilter || p.privateLabelAvailable;

        return matchesSearch && matchesCategory && matchesSubcategory && matchesCerts && matchesSample && matchesPrivateLabel;
      })
      .sort((a, b) => {
        if (sortBy === 'featured') return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
        if (sortBy === 'newest') return b.id.localeCompare(a.id);
        if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
        return 0;
      });
  }, [searchTerm, selectedCategory, selectedSubcategories, selectedCerts, sampleFilter, privateLabelFilter, sortBy]);

  const toggleSubcategory = (sub: string) => {
    setSelectedSubcategories(prev => 
      prev.includes(sub) ? prev.filter(s => s !== sub) : [...prev, sub]
    );
  };

  const toggleCert = (cert: string) => {
    setSelectedCerts(prev => 
      prev.includes(cert) ? prev.filter(c => c !== cert) : [...prev, cert]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedSubcategories([]);
    setSelectedCerts([]);
    setSampleFilter(false);
    setPrivateLabelFilter(false);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-secondary/20 pt-24 pb-20">
        <div className="container mx-auto px-4">
          
          {/* Page Header */}
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-playfair text-brand-navy mb-4">Product Catalogue</h1>
            <p className="text-muted-foreground text-lg">
              Explore our range of export-grade hospitality and medical supplies. Sourced directly from India's leading production units.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar Filters (Desktop) */}
            <aside className="hidden lg:block w-72 shrink-0 space-y-8">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-brand-gold/10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg text-brand-navy flex items-center gap-2">
                    <Filter className="w-4 h-4" /> Filters
                  </h3>
                  <button onClick={clearFilters} className="text-xs text-brand-gold hover:underline">Clear All</button>
                </div>

                {/* Category */}
                <div className="space-y-4 mb-8">
                  <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Category</Label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-full h-10 border-brand-gold/20">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      {categories.map(c => <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>

                {/* Subcategory */}
                <div className="space-y-4 mb-8">
                  <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Subcategories</Label>
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                    {allSubcategories.map(sub => (
                      <div key={sub} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`sub-${sub}`} 
                          checked={selectedSubcategories.includes(sub)}
                          onCheckedChange={() => toggleSubcategory(sub)}
                        />
                        <label htmlFor={`sub-${sub}`} className="text-sm font-medium leading-none cursor-pointer">
                          {sub}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div className="space-y-4 mb-8">
                  <Label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Certifications</Label>
                  <div className="space-y-2">
                    {allCertifications.map(cert => (
                      <div key={cert} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`cert-${cert}`} 
                          checked={selectedCerts.includes(cert)}
                          onCheckedChange={() => toggleCert(cert)}
                        />
                        <label htmlFor={`cert-${cert}`} className="text-sm font-medium leading-none cursor-pointer">
                          {cert}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Options */}
                <div className="space-y-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="sample" checked={sampleFilter} onCheckedChange={(val) => setSampleFilter(!!val)} />
                    <label htmlFor="sample" className="text-sm font-medium leading-none cursor-pointer">Sample Available</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="private" checked={privateLabelFilter} onCheckedChange={(val) => setPrivateLabelFilter(!!val)} />
                    <label htmlFor="private" className="text-sm font-medium leading-none cursor-pointer">Private Label / OEM</label>
                  </div>
                </div>
              </div>

              {/* Help Box */}
              <div className="bg-brand-navy rounded-2xl p-6 text-white">
                <ShieldCheck className="w-8 h-8 text-brand-gold mb-4" />
                <h4 className="font-bold mb-2">Need Help?</h4>
                <p className="text-xs text-white/70 leading-relaxed mb-4">
                  Our sourcing experts can help you find specific products or coordinate custom manufacturing.
                </p>
                <Button asChild variant="outline" className="w-full text-xs font-bold border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-navy">
                  <a href="/inquiry">Speak to an Expert</a>
                </Button>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 space-y-6">
              
              {/* Toolbar */}
              <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-brand-gold/10">
                <div className="relative w-full md:w-96">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    placeholder="Search by name, tag, or spec..." 
                    className="pl-10 h-11 border-brand-gold/20 focus:ring-brand-gold"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                
                <div className="flex items-center gap-4 w-full md:w-auto">
                  <Button 
                    variant="outline" 
                    className="lg:hidden flex-1 md:flex-none border-brand-gold/30"
                    onClick={() => setShowMobileFilters(true)}
                  >
                    <Filter className="w-4 h-4 mr-2" /> Filters
                  </Button>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-full md:w-[180px] h-11 border-brand-gold/20">
                      <SelectValue placeholder="Sort By" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="name-asc">Name A-Z</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Active Filter Badges */}
              {(selectedCategory !== 'all' || selectedSubcategories.length > 0 || selectedCerts.length > 0 || searchTerm) && (
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mr-2">Active:</span>
                  {selectedCategory !== 'all' && (
                    <Badge variant="secondary" className="bg-brand-gold/10 text-brand-gold hover:bg-brand-gold/20">
                      {categories.find(c => c.id === selectedCategory)?.name}
                      <X className="w-3 h-3 ml-1 cursor-pointer" onClick={() => setSelectedCategory('all')} />
                    </Badge>
                  )}
                  {selectedSubcategories.map(sub => (
                    <Badge key={sub} variant="secondary" className="bg-brand-navy/10 text-brand-navy">
                      {sub}
                      <X className="w-3 h-3 ml-1 cursor-pointer" onClick={() => toggleSubcategory(sub)} />
                    </Badge>
                  ))}
                  {searchTerm && (
                    <Badge variant="outline" className="border-brand-gold text-brand-gold">
                      "{searchTerm}"
                      <X className="w-3 h-3 ml-1 cursor-pointer" onClick={() => setSearchTerm('')} />
                    </Badge>
                  )}
                </div>
              )}

              {/* Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-24 bg-white rounded-3xl border border-dashed border-gray-200">
                  <Package className="w-16 h-16 text-gray-200 mb-4" />
                  <h3 className="text-xl font-bold text-brand-navy">No products found</h3>
                  <p className="text-muted-foreground mt-2 mb-6">Try adjusting your filters or search terms.</p>
                  <Button onClick={clearFilters} variant="outline" className="border-brand-gold text-brand-gold">
                    Clear All Filters
                  </Button>
                </div>
              )}

              {/* Summary */}
              <p className="text-sm text-muted-foreground text-center">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Mobile Filters Drawer Placeholder (In a real app, use Sheet from shadcn) */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-[100] lg:hidden bg-white overflow-y-auto p-6 animate-in slide-in-from-bottom duration-300">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold font-playfair">Filters</h2>
            <Button variant="ghost" size="icon" onClick={() => setShowMobileFilters(false)}>
              <X className="w-6 h-6" />
            </Button>
          </div>
          <div className="space-y-8 pb-20">
             {/* Repeat filters logic here or extract to a shared component */}
             <div className="space-y-4">
                <Label>Category</Label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    {categories.map(c => <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>)}
                  </SelectContent>
                </Select>
             </div>
             <div className="space-y-4">
                <Label>Subcategories</Label>
                <div className="grid grid-cols-2 gap-2">
                  {allSubcategories.map(sub => (
                    <div key={sub} className="flex items-center space-x-2">
                      <Checkbox id={`m-sub-${sub}`} checked={selectedSubcategories.includes(sub)} onCheckedChange={() => toggleSubcategory(sub)} />
                      <label htmlFor={`m-sub-${sub}`} className="text-sm">{sub}</label>
                    </div>
                  ))}
                </div>
             </div>
             <Button className="w-full h-12 bg-brand-gold text-brand-navy font-bold" onClick={() => setShowMobileFilters(false)}>
               Show {filteredProducts.length} Results
             </Button>
          </div>
        </div>
      )}
    </div>
  );
}
