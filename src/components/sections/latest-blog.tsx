
'use client';

import { initialBlogPosts } from '@/lib/blog';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function LatestBlog() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-gold font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Industry Intelligence</span>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-brand-navy">Export Insights & Guides</h2>
          </div>
          <Link href="/blog" className="text-brand-gold font-black text-sm uppercase tracking-widest border-b-2 border-brand-gold/30 hover:border-brand-gold pb-1 transition-all">
            View Knowledge Base →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {initialBlogPosts.slice(0, 3).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <Card className="h-full border-none shadow-lg group-hover:shadow-2xl transition-all duration-500 overflow-hidden bg-white rounded-[2rem]">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image 
                    src={post.featuredImage} 
                    alt={post.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-brand-navy text-white text-[10px] uppercase font-black px-3 py-1 border-none shadow-xl">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="p-8 pb-2">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4">
                    <Clock className="w-3 h-3 text-brand-gold" /> {post.readingTime} MIN READ
                  </div>
                  <CardTitle className="text-xl font-playfair font-bold text-brand-navy group-hover:text-brand-gold transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-brand-gold font-black text-xs uppercase tracking-widest">
                    Read Insight <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
