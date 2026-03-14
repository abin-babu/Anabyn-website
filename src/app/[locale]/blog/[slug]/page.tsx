
'use client';

import { useParams, notFound } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { useCollection, useMemoFirebase, useFirestore } from '@/firebase';
import { collection, query, where, limit } from 'firebase/firestore';
import { BlogPost, initialBlogPosts } from '@/lib/blog';
import { products } from '@/lib/products';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Calendar, 
  Clock, 
  ChevronRight, 
  Linkedin, 
  Twitter, 
  MessageCircle,
  ArrowRight,
  BookOpen,
  FlaskConical,
  ShieldCheck,
  Globe
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useMemo } from 'react';
import { ProductCard } from '@/components/product-card';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const db = useFirestore();

  // Fetch specific post
  const postQuery = useMemoFirebase(() => {
    if (!db) return null;
    return query(collection(db, 'blog_posts'), where('slug', '==', slug), limit(1));
  }, [db, slug]);

  const { data: dbPosts, isLoading } = useCollection<BlogPost>(postQuery);
  const post = (dbPosts && dbPosts[0]) || initialBlogPosts.find(p => p.slug === slug);

  // Fetch related posts (same category)
  const relatedQuery = useMemoFirebase(() => {
    if (!db || !post) return null;
    return query(collection(db, 'blog_posts'), where('category', '==', post.category), limit(3));
  }, [db, post]);

  const { data: dbRelated } = useCollection<BlogPost>(relatedQuery);
  const relatedPosts = (dbRelated && dbRelated.filter(p => p.slug !== slug)) || 
                       initialBlogPosts.filter(p => p.category === post?.category && p.slug !== slug).slice(0, 3);

  // Recommended products for the blog context
  const recommendedProducts = useMemo(() => {
    if (!post) return [];
    if (post.tags.includes('Hotel Towels') || post.slug.includes('towel')) {
      return products.filter(p => p.subcategory === 'Bath Linen').slice(0, 3);
    }
    return products.filter(p => p.category === 'hospitality-supplies').slice(0, 3);
  }, [post]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center pt-20">
        <Clock className="animate-spin h-10 w-10 text-brand-gold mb-4" />
        <p className="font-bold text-brand-navy">Loading intelligence...</p>
      </div>
    );
  }

  if (!post) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": [post.featuredImage],
    "datePublished": post.publishedAt.toDate().toISOString(),
    "author": [{
      "@type": "Person",
      "name": post.author.name,
      "url": "https://www.anabyn.com"
    }],
    "publisher": {
      "@type": "Organization",
      "name": "Anabyn Global Ventures LLP",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.anabyn.com/images/logo.png"
      }
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <main className="flex-1 bg-white pt-24 pb-20">
        
        {/* Article Header */}
        <header className="container mx-auto px-4 mb-16">
          <nav className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-8">
            <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-brand-gold transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-brand-navy truncate max-w-[200px]">{post.title}</span>
          </nav>

          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge className="bg-brand-gold text-brand-navy font-bold uppercase tracking-[0.2em] px-4 py-1">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold font-playfair text-brand-navy leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-brand-gold/20 relative">
                  <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" sizes="40px" />
                </div>
                <div className="text-left leading-none">
                  <p className="font-bold text-brand-navy">{post.author.name}</p>
                  <p className="text-[10px] uppercase font-bold tracking-widest opacity-60">{post.author.role}</p>
                </div>
              </div>
              <div className="h-4 w-px bg-gray-200 hidden md:block"></div>
              <div className="flex items-center gap-1 font-medium">
                <Calendar className="w-4 h-4" /> {post.publishedAt.toDate().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
              <div className="h-4 w-px bg-gray-200 hidden md:block"></div>
              <div className="flex items-center gap-1 font-medium">
                <Clock className="w-4 h-4" /> {post.readingTime} min read
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="container mx-auto px-4 mb-16">
          <div className="relative aspect-[21/9] w-full max-w-6xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl">
            <Image 
              src={post.featuredImage} 
              alt={post.title} 
              fill 
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>

        {/* Content Layout */}
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_300px] gap-16 max-w-6xl mx-auto">
            
            {/* Article Body */}
            <article className="prose prose-lg prose-navy max-w-none prose-headings:font-playfair prose-headings:text-brand-navy prose-a:text-brand-gold prose-img:rounded-3xl">
              <div className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ 
                __html: post.content.split('\n').map(line => {
                  if (line.startsWith('# ')) return `<h1 class="text-4xl mt-12 mb-6 font-playfair font-bold text-brand-navy">${line.replace('# ', '')}</h1>`;
                  if (line.startsWith('## ')) return `<h2 class="text-3xl mt-10 mb-4 border-b pb-2 font-playfair font-bold text-brand-navy">${line.replace('## ', '')}</h2>`;
                  if (line.startsWith('### ')) return `<h3 class="text-2xl mt-8 mb-3 font-bold text-brand-navy">${line.replace('### ', '')}</h3>`;
                  if (line.startsWith('- ')) return `<li class="ml-4 mb-2">${line.replace('- ', '')}</li>`;
                  if (line.startsWith('|')) return `<div class="overflow-x-auto my-8"><table class="w-full border-collapse border border-gray-200 text-sm">${line}</table></div>`;
                  if (line.trim() === '') return '<br/>';
                  return `<p class="mb-4 text-lg">${line}</p>`;
                }).join('')
              }} />

              {/* Sample CTA */}
              <div className="mt-20 bg-brand-navy text-white p-10 md:p-16 rounded-[3rem] text-center relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
                <div className="relative z-10 space-y-8">
                  <FlaskConical className="w-16 h-16 text-brand-gold mx-auto animate-pulse" />
                  <h2 className="text-3xl md:text-5xl font-playfair font-bold leading-tight">Verify Our Quality <br /><span className="text-brand-gold">In Your Own Hands</span></h2>
                  <p className="text-white/70 text-lg max-w-xl mx-auto">
                    We ship physical sample packs worldwide via DHL/FedEx. Evaluate our GSM density and weave quality before placing a bulk contract.
                  </p>
                  <Button asChild size="lg" className="bg-brand-gold text-brand-navy font-black h-16 px-12 rounded-2xl hover:scale-105 transition-transform border-none text-lg">
                    <Link href="/request-quote">Request a Master Sample <ArrowRight className="ml-2 w-5 h-5" /></Link>
                  </Button>
                </div>
              </div>

              {/* Social Sharing */}
              <div className="mt-16 pt-10 border-t border-gray-100">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div>
                    <h4 className="font-bold text-brand-navy mb-2">Share this insight</h4>
                    <div className="flex gap-3">
                      <Button variant="outline" size="icon" className="rounded-full hover:bg-brand-navy hover:text-white transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full hover:bg-brand-navy hover:text-white transition-colors">
                        <Twitter className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-full hover:bg-brand-navy hover:text-white transition-colors">
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-secondary/20 text-brand-navy hover:bg-brand-gold/20 transition-colors cursor-default">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-12">
              <div className="bg-secondary/10 p-8 rounded-3xl sticky top-24">
                <h4 className="font-bold text-brand-navy uppercase tracking-widest text-xs mb-6 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-brand-gold" /> Quick Facts
                </h4>
                <div className="space-y-6">
                  <div className="flex gap-3 items-start">
                    <ShieldCheck className="text-brand-gold w-5 h-5 shrink-0" />
                    <p className="text-xs text-brand-navy font-bold leading-tight">ISO 9001:2015 Verified Processes</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Globe className="text-brand-gold w-5 h-5 shrink-0" />
                    <p className="text-xs text-brand-navy font-bold leading-tight">Exporting to 50+ Countries</p>
                  </div>
                </div>
                <Separator className="my-8 bg-brand-gold/20" />
                <div className="space-y-4">
                  <p className="text-xs text-brand-navy font-bold uppercase tracking-widest">Sourcing Hubs</p>
                  <div className="flex flex-wrap gap-2">
                    {['Kerala', 'Tamil Nadu', 'Gujarat'].map(m => (
                      <Badge key={m} className="bg-white text-brand-navy border-brand-gold/30">{m}</Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Related Products Ad */}
              <div className="bg-brand-navy p-8 rounded-3xl text-white relative overflow-hidden group">
                <div className="relative z-10">
                  <h4 className="text-brand-gold font-bold uppercase tracking-widest text-[10px] mb-4">Direct Sourcing</h4>
                  <p className="text-xl font-playfair font-bold mb-6 leading-tight">Looking for premium {post.tags.includes('Hotel Towels') ? 'towels' : 'textiles'} from India?</p>
                  <Button asChild className="w-full bg-brand-gold text-brand-navy font-bold rounded-xl group-hover:scale-105 transition-transform">
                    <Link href="/products">Browse Catalogue <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                </div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
              </div>
            </aside>
          </div>
        </div>

        {/* Recommended Products Grid */}
        <section className="mt-32 pt-20 border-t">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-12">
                <h3 className="text-3xl font-bold font-playfair text-brand-navy">Related Products</h3>
                <Link href="/products" className="text-brand-gold font-black text-sm uppercase tracking-widest hover:underline">View All Catalogue →</Link>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {recommendedProducts.map(p => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles Section */}
        <section className="mt-20 py-20 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-12">
                <h3 className="text-3xl font-bold font-playfair text-brand-navy">More Insights</h3>
                <Button asChild variant="link" className="text-brand-gold font-bold">
                  <Link href="/blog">All articles <ArrowRight className="ml-2 w-4 h-4" /></Link>
                </Button>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map(p => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="group">
                    <div className="space-y-4">
                      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-lg">
                        <Image 
                          src={p.featuredImage} 
                          alt={p.title} 
                          fill 
                          className="object-cover group-hover:scale-110 transition-transform duration-700" 
                          sizes="(max-width: 768px) 100vw, 33vw"
                          loading="lazy"
                        />
                      </div>
                      <h4 className="font-bold font-playfair text-xl text-brand-navy group-hover:text-brand-gold transition-colors leading-tight line-clamp-2">
                        {p.title}
                      </h4>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                        {p.category} <span className="text-brand-gold">•</span> {p.readingTime} MIN READ
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
