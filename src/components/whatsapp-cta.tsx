'use client';
import { FaWhatsapp } from 'react-icons/fa';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export function WhatsappCta() {
    const whatsappUrl = `https://wa.me/919495613121?text=Hi%20Anabyn%2C%20I%27d%20like%20to%20know%20more%20about%20your%20products.`;
    
    return (
        <div className="fixed bottom-7 right-7 z-[60]">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <a 
                            href={whatsappUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 transition-transform duration-300"
                        >
                            <FaWhatsapp className="h-9 w-9" />
                            <span className="sr-only">Chat on WhatsApp</span>
                        </a>
                    </TooltipTrigger>
                    <TooltipContent side="left" className="bg-[#25D366] text-white border-none font-bold">
                        Chat on WhatsApp
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    )
}
