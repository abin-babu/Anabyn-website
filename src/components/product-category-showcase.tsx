
'use client';

import { categories } from '@/lib/products';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from './ui/card';
import { ArrowRight } from 'lucide-react';

const mainCategories = categories.filter(c => c.parentId === null);

export function ProductCategoryShowcase() {
    return (
        <section id="categories" className="py-12 md:py-20 bg-background">
            <div className="container">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Our Product Categories</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
                        We specialize in providing a comprehensive range of products for the hospitality and medical sectors.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {mainCategories.map(category => (
                        <Link key={category.id} href={`/products/category/${category.slug}`} className="group block">
                            <Card className="overflow-hidden relative shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="aspect-[16/9] w-full relative">
                                    <Image
                                        src={category.imageUrl || 'https://placehold.co/800x450'}
                                        alt={category.name}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                                </div>
                                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                                    <h3 className="text-2xl lg:text-3xl font-bold font-headline text-white drop-shadow-md">
                                        {category.name}
                                    </h3>
                                    <div className="mt-4 flex items-center text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        Explore Category <ArrowRight className="ml-2 h-5 w-5" />
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
