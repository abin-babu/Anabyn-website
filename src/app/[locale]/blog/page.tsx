'use client';

import { useState, useMemo } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { useCollection, useMemoFirebase, useFirestore } from '@/firebase';
import { collection, query, orderBy, limit } from 'firebase/firestore';
import { BlogPost, initialBlogPosts, BlogCategory } from '@/lib/blog';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calendar, 
  Clock, 
  ChevronRight, 
  Search, 
  ArrowRight, 
  BookOpen
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const categories: (BlogCategory | "All")[] = ["All", "Export Guides", "Industry Insights", "Product Updates", "Trade News"];

export default function BlogListingPage() {
  const db = useFirestore();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "All">("All");

  const blogQuery = useMemoFirebase(() => {
    if (!db) return null;
    return query(collection(db, 'blog_posts'), orderBy('publishedAt', 'desc'), limit(50));
  }, [db]);

  const { data: dbPosts, isLoading } = useCollection<BlogPost>(blogQuery);
  const posts = dbPosts && dbPosts.length > 0 ? dbPosts : initialBlogPosts;

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === "All" || post.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [posts, searchTerm, activeCategory]);

  const featuredPost = useMemo(() => posts.find(p => p.featured) || posts[0], [posts]);
  const regularPosts = useMemo(() => filteredPosts.filter(p => p.slug !== featuredPost.slug), [filteredPosts, featuredPost]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-secondary/10 pt-24 pb-20">
        
        <section className="bg-brand-navy text-white py-20 px-4 mb-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <BookOpen className="w-full h-full -rotate-12 translate-x-1/2" />
          </div>
          <div className="container mx-auto relative z-10 text-center max-w-4xl">
            <Badge variant="outline" className="text-brand-gold border-brand-gold mb-4 px-4 py-1">Export Intelligence</Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-playfair mb-6">The Anabyn Export Blog</h1>
            <p className="text-xl text-brand-gold-light/80">
              Technical insights, regulatory updates, and market trends for international hospitality and medical procurement.
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4">
          {!searchTerm && activeCategory === "All" && featuredPost && (
            <div className="mb-20">
              <Link href={`/blog/${featuredPost.slug}`}>
                <Card className="border-none shadow-2xl overflow-hidden group hover:ring-2 ring-brand-gold/50 transition-all duration-500">
                  <div className="grid lg:grid-cols-2">
                    <div className="relative aspect-[16/10] lg:aspect-auto h-full overflow-hidden">
                      <Image 
                        src={featuredPost.featuredImage} 
                        alt={featuredPost.title} 
                        fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-6 left-6">
                        <Badge variant="gold">Featured Article</Badge>
                      </div>
                    </div>
                    <div className="p-8 lg:p-16 flex flex-col justify-center bg-white">
                      <div className="flex items-center gap-4 text-xs font-bold text-muted-foreground uppercase tracking-widest mb-6">
                        <span className="text-brand-gold">{featuredPost.category}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {featuredPost.readingTime} min read</span>
                      </div>
                      <h2 className="text-3xl md:text-5xl font-bold font-playfair text-brand-navy mb-6 group-hover:text-brand-gold transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-8 line-clamp-3">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-gold/20 relative">
                          <Image src={featuredPost.author.avatar} alt={featuredPost.author.name} fill className="object-cover" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-brand-navy">{featuredPost.author.name}</p>
                          <p className="text-xs text-muted-foreground">{featuredPost.author.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          )}

          <div className="flex flex-col md:flex-row gap-8 justify-between items-center mb-12">
            <Tabs 
              value={activeCategory} 
              onValueChange={(val) => setActiveCategory(val as BlogCategory | "All")} 
              className="w-full md:w-auto"
            >
              <TabsList className="bg-white p-1 h-12 border border-brand-gold/20 rounded-xl overflow-x-auto">
                {categories.map(cat => (
                  <TabsTrigger 
                    key={cat} 
                    value={cat} 
                    className="px-6 font-bold rounded-lg data-[state=active]:bg-brand-navy data-[state=active]:text-white"
                  >
                    {cat}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10 h-12 border-brand-gold/20 rounded-xl bg-white shadow-sm focus:ring-brand-gold"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="animate-pulse bg-white rounded-3xl h-[450px]"></div>
              ))}
            </div>
          ) : filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(searchTerm || activeCategory !== "All" ? filteredPosts : regularPosts).map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col bg-white rounded-3xl overflow-hidden">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image 
                        src={post.featuredImage} 
                        alt={post.title} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-brand-navy/80 backdrop-blur-md text-white border-none">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="p-6 pb-2">
                      <div className="flex items-center gap-3 text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-3">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.publishedAt.toDate().toLocaleDateString()}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readingTime} min read</span>
                      </div>
                      <CardTitle className="text-xl font-bold font-playfair text-brand-navy group-hover:text-brand-gold transition-colors line-clamp-2 leading-tight">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 pt-0 flex-grow">
                      <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </CardContent>
                    <CardFooter className="p-6 pt-0 flex items-center justify-between border-t border-gray-50 mt-auto">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full overflow-hidden bg-secondary/30 relative">
                          <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                        </div>
                        <span className="text-xs font-bold text-brand-navy">{post.author.name}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-brand-gold group-hover:translate-x-1 transition-transform" />
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl shadow-sm border-2 border-dashed border-brand-gold/20">
              <BookOpen className="w-16 h-16 text-brand-gold/30 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-brand-navy">No articles found</h3>
              <p className="text-muted-foreground mt-2">Try adjusting your filters or search terms.</p>
              <Button 
                variant="outline" 
                className="mt-6 border-brand-gold text-brand-gold"
                onClick={() => { setSearchTerm(''); setActiveCategory("All"); }}
              >
                Clear Filters
              </Button>
            </div>
          )}

          <div className="mt-32">
            <Card className="bg-brand-navy border-none rounded-[3rem] overflow-hidden relative">
              <div className="absolute right-0 top-0 w-1/3 h-full bg-brand-gold opacity-10 blur-[100px] rounded-full translate-x-1/2"></div>
              <div className="p-12 md:p-20 text-center relative z-10 max-w-3xl mx-auto">
                <Badge variant="gold" className="mb-6">Expert Newsletter</Badge>
                <h2 className="text-3xl md:text-5xl font-bold font-playfair text-white mb-6">Get Global Trade Updates</h2>
                <p className="text-lg text-white/70 mb-10">
                  Join 5,000+ procurement directors who receive our monthly digest on medical compliance and textile innovations.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input 
                    placeholder="Enter your work email" 
                    className="h-14 bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl"
                  />
                  <Button className="h-14 bg-brand-gold text-brand-navy font-bold px-8 rounded-xl shadow-xl shadow-brand-gold/20">
                    Subscribe
                  </Button>
                </form>
                <p className="text-[10px] text-white/40 mt-6 uppercase tracking-widest">NO SPAM • WEEKLY UPDATES • PRIVACY PROTECTED</p>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
