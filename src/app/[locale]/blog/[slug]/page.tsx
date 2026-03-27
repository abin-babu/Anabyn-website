
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { BlogPost, initialBlogPosts } from '@/lib/blog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  Calendar, 
  Clock, 
  ChevronRight, 
  Linkedin, 
  ArrowRight,
  BookOpen,
  ShieldCheck,
  Globe,
  MessageSquare
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = initialBlogPosts.find(p => p.slug === slug);
  
  if (!post) return { title: 'Article Not Found' };

  return {
    title: `${post.title} | Anabyn Export Intelligence`,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      images: [post.featuredImage],
      type: 'article',
      publishedTime: post.publishedAt.toDate().toISOString(),
      authors: [post.author.name],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug, locale } = await params;
  
  const post = initialBlogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = initialBlogPosts
    .filter(p => p.slug !== slug)
    .sort((a, b) => b.publishedAt.toMillis() - a.publishedAt.toMillis())
    .slice(0, 2);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDescription,
    "image": [post.featuredImage],
    "datePublished": post.publishedAt.toDate().toISOString(),
    "author": [{
      "@type": "Organization",
      "name": "Anabyn Export Intelligence Team",
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `https://www.anabyn.com/${locale}` },
      { "@type": "ListItem", "position": 2, "name": "Export Intelligence", "item": `https://www.anabyn.com/${locale}/blog` },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://www.anabyn.com/${locale}/blog/${post.slug}` }
    ]
  };

  const shareUrl = `https://www.anabyn.com/${locale}/blog/${post.slug}`;
  const linkedInShare = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
  const whatsappShare = `https://wa.me/?text=${encodeURIComponent(`${post.title} - ${shareUrl}`)}`;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <main className="flex-1 pt-24 pb-20">
        <header className="container mx-auto px-4 mb-16">
          <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-12">
            <Link href="/" className="hover:text-brand-gold transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-brand-gold" />
            <Link href="/blog" className="hover:text-brand-gold transition-colors">Export Intelligence</Link>
            <ChevronRight className="w-3 h-3 text-brand-gold" />
            <span className="text-brand-navy truncate max-w-[200px]">{post.title}</span>
          </nav>

          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="outline" className="text-brand-gold border-brand-gold px-4 py-1 uppercase tracking-widest font-black">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-7xl font-bold font-playfair text-brand-navy leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-8 text-[11px] font-black uppercase tracking-widest text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-brand-gold" /> 
                {post.publishedAt.toDate().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
              <div className="w-1 h-1 rounded-full bg-brand-gold"></div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-gold" /> {post.readingTime} MIN READ
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 mb-20">
          <div className="relative aspect-[21/9] w-full max-w-6xl mx-auto rounded-[3.5rem] overflow-hidden shadow-2xl border-8 border-gray-50">
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

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-[1fr_320px] gap-20 max-w-6xl mx-auto">
            <article className="prose prose-lg prose-navy max-w-none">
              <div className="text-gray-600 leading-[1.8] text-lg font-medium" dangerouslySetInnerHTML={{ 
                __html: post.content.split('\n').map(line => {
                  if (line.startsWith('# ')) return `<h1 class="text-4xl md:text-5xl mt-16 mb-8 font-playfair font-bold text-brand-navy">${line.replace('# ', '')}</h1>`;
                  if (line.startsWith('## ')) return `<h2 class="text-3xl mt-12 mb-6 font-playfair font-bold text-brand-navy border-b border-brand-gold/20 pb-4">${line.replace('## ', '')}</h2>`;
                  if (line.startsWith('### ')) return `<h3 class="text-2xl mt-10 mb-4 font-bold text-brand-navy">${line.replace('### ', '')}</h3>`;
                  if (line.startsWith('- ')) return `<li class="ml-6 mb-3 pl-2 marker:text-brand-gold">${line.replace('- ', '')}</li>`;
                  if (line.startsWith('|')) return `<div class="overflow-x-auto my-10"><table class="w-full border-collapse border border-brand-gold/10 text-sm">${line}</table></div>`;
                  if (line.trim() === '') return '';
                  return `<p class="mb-6">${line}</p>`;
                }).join('')
              }} />

              {/* Author Bio */}
              <div className="mt-20 p-10 bg-secondary/20 rounded-[2.5rem] border border-brand-gold/10 flex flex-col md:flex-row items-center gap-8">
                <div className="w-20 h-20 rounded-2xl bg-brand-navy flex items-center justify-center shrink-0 shadow-xl overflow-hidden relative">
                  <Image src={post.author.avatar} alt={post.author.name} fill className="object-contain p-2" />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold mb-1">Author Bio</p>
                  <h4 className="text-xl font-bold text-brand-navy mb-2">{post.author.name}</h4>
                  <p className="text-sm text-muted-foreground font-medium italic">Published by the Anabyn Export Intelligence Team — dedicated to providing technical clarity and compliance guidance for global textile procurement.</p>
                </div>
              </div>

              {/* Share Section */}
              <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                  <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Share Article:</span>
                  <div className="flex gap-4">
                    <Button variant="outline" size="icon" asChild className="rounded-full hover:bg-[#0077b5] hover:text-white transition-all border-gray-200">
                      <a href={linkedInShare} target="_blank" rel="noopener noreferrer"><Linkedin className="w-4 h-4" /></a>
                    </Button>
                    <Button variant="outline" size="icon" asChild className="rounded-full hover:bg-[#25D366] hover:text-white transition-all border-gray-200">
                      <a href={whatsappShare} target="_blank" rel="noopener noreferrer"><MessageSquare className="w-4 h-4" /></a>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {post.tags.map(tag => (
                    <Badge key={tag} className="bg-brand-navy/5 text-brand-navy border-none font-bold text-[9px] uppercase tracking-tighter hover:bg-brand-gold/10 transition-colors">#{tag}</Badge>
                  ))}
                </div>
              </div>

              {/* CTA Banner */}
              <div className="mt-24 bg-brand-navy text-white p-12 md:p-20 rounded-[3.5rem] relative overflow-hidden text-center shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
                <div className="relative z-10 space-y-8">
                  <h2 className="text-3xl md:text-5xl font-playfair font-bold">Ready to Order?</h2>
                  <p className="text-white/60 text-lg max-w-xl mx-auto">Discuss your technical specifications with our sourcing desk. We provide comprehensive export proposals within 24 hours.</p>
                  <Button asChild size="lg" className="bg-brand-gold text-brand-navy font-black h-16 px-12 rounded-2xl hover:scale-105 transition-transform border-none shadow-2xl">
                    <Link href="/request-quote">Request an Export Quote <ArrowRight className="ml-2 w-5 h-5" /></Link>
                  </Button>
                </div>
              </div>
            </article>

            <aside className="space-y-12">
              <div className="bg-secondary/10 p-8 rounded-[2rem] border border-brand-gold/5 sticky top-24">
                <h4 className="font-black text-brand-navy uppercase tracking-[0.2em] text-[10px] mb-8 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-brand-gold" /> Related Insights
                </h4>
                <div className="space-y-10">
                  {relatedPosts.map(p => (
                    <Link key={p.slug} href={`/blog/${p.slug}`} className="group block space-y-4">
                      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-md">
                        <Image src={p.featuredImage} alt={p.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <h5 className="font-bold text-brand-navy group-hover:text-brand-gold transition-colors leading-snug line-clamp-2">
                        {p.title}
                      </h5>
                      <div className="flex items-center gap-2 text-[9px] font-black uppercase text-muted-foreground tracking-widest">
                        <Calendar className="w-3 h-3 text-brand-gold" /> {p.publishedAt.toDate().toLocaleDateString()}
                      </div>
                    </Link>
                  ))}
                </div>
                
                <Separator className="my-10 bg-brand-gold/10" />
                
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <ShieldCheck className="text-brand-gold w-5 h-5 shrink-0" />
                    <p className="text-[10px] font-bold text-brand-navy leading-tight uppercase tracking-wider">AQL 2.5 Quality Verified</p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Globe className="text-brand-gold w-5 h-5 shrink-0" />
                    <p className="text-[10px] font-bold text-brand-navy leading-tight uppercase tracking-wider">Exporting to 50+ Countries</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
