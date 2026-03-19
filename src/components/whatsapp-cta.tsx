'use client';
import { FaWhatsapp } from 'react-icons/fa';

/**
 * Floating WhatsApp CTA bubble.
 * Positioned fixed at the bottom-right of the viewport.
 */
export function WhatsappCta() {
    const whatsappUrl = `https://wa.me/919495613121?text=Hi%20Anabyn%2C%20I%27d%20like%20to%20know%20more%20about%20your%20products.`;
    
    return (
        <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp />
        </a>
    )
}
