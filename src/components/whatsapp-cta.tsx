
'use client';
import { Button } from './ui/button';
import { FaWhatsapp } from 'react-icons/fa';

export function WhatsappCta() {
    const whatsappNumber = "919495613121";
    const whatsappMessage = `Hi Anabyn — I’d like to inquire about your products.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    return (
        <Button
            asChild
            className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg"
        >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="h-8 w-8" />
                <span className="sr-only">Chat on WhatsApp</span>
            </a>
        </Button>
    )
}
