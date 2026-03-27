'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Play, Clock } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

interface VideoCardProps {
  youtubeId: string;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
}

/**
 * High-performance VideoCard component.
 * Displays a static thumbnail and only loads the YouTube iframe when the user clicks play.
 */
export function VideoCard({ youtubeId, title, description, duration, thumbnail }: VideoCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div className="group cursor-pointer space-y-4">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <Image 
              src={thumbnail} 
              alt={title} 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-brand-gold text-brand-navy flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <Play className="fill-brand-navy ml-1 w-6 h-6" />
              </div>
            </div>

            {/* Duration Badge */}
            <div className="absolute bottom-4 right-4">
              <Badge className="bg-black/60 backdrop-blur-md text-white border-none flex items-center gap-1 font-bold text-[10px]">
                <Clock size={12} className="text-brand-gold" /> {duration}
              </Badge>
            </div>
          </div>
          
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-white group-hover:text-brand-gold transition-colors">{title}</h4>
            <p className="text-xs text-white/50 leading-relaxed">{description}</p>
          </div>
        </div>
      </DialogTrigger>
      
      <DialogContent className="max-w-5xl p-0 overflow-hidden bg-black border-none shadow-2xl aspect-video">
        {isOpen && (
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          />
        )}
      </DialogContent>
    </Dialog>
  );
}
