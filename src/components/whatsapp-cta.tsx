'use client';
import { FaWhatsapp } from 'react-icons/fa';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

/**
 * Floating WhatsApp CTA bubble.
 * Positioned fixed at the bottom-right of the viewport.
 */
export function WhatsappCta() {
    const whatsappUrl = `https://wa.me/919495613121?text=Hi%20Anabyn%2C%20I%27d%20like%20to%20know%20more%20about%20your%20products.`;
    
    return (
        <TooltipProvider delayDuration={100}>
            <Tooltip>
                <TooltipTrigger asChild>
                    <a 
                        href={whatsappUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="whatsapp-float group"
                        aria-label="Chat on WhatsApp"
                    >
                        <FaWhatsapp className="transition-transform group-hover:scale-110" />
                    </a>
                </TooltipTrigger>
                <TooltipContent 
                    side="left" 
                    className="bg-white text-brand-navy border-brand-gold font-bold text-xs py-3 px-4 rounded-xl shadow-2xl animate-in slide-in-from-right-2 duration-300"
                >
                    We typically reply within 2 hours
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
