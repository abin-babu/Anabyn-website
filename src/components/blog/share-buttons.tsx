'use client';

import { Button } from '@/components/ui/button';
import { FaWhatsapp, FaLinkedinIn } from 'react-icons/fa';
import { Link2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ShareButtonsProps {
  title: string;
  url: string;
}

export function ShareButtons({ title, url }: ShareButtonsProps) {
  const { toast } = useToast();

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    toast({
      title: 'Link Copied!',
      description: 'The article URL has been copied to your clipboard.',
    });
  };

  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(title)}%20-%20${encodeURIComponent(url)}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;

  return (
    <div className="space-y-6">
      <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Share this article</h4>
      <div className="flex flex-wrap gap-4">
        <Button 
          variant="outline" 
          className="rounded-xl border-gray-200 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all gap-3 h-12"
          asChild
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-wider">Share on WhatsApp</span>
          </a>
        </Button>

        <Button 
          variant="outline" 
          className="rounded-xl border-gray-200 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all gap-3 h-12"
          asChild
        >
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-wider">Share on LinkedIn</span>
          </a>
        </Button>

        <Button 
          variant="outline" 
          onClick={handleCopy}
          className="rounded-xl border-gray-200 hover:bg-brand-navy hover:text-white transition-all gap-3 h-12"
        >
          <Link2 className="w-5 h-5" />
          <span className="text-xs font-bold uppercase tracking-wider">Copy Link</span>
        </Button>
      </div>
    </div>
  );
}
