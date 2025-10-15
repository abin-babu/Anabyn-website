# **App Name**: Anabyn Premium Gallery

## Core Features:

- Hero Section: Fullscreen hero section with rotating high-res images and overlay tagline with smooth entrance animations and lazy loading.
- Product Gallery: Filterable product gallery with categories for product type, material/weave, and usage with product name, short specs, quick inquiry, and view details on hover overlay.
- Product Detail Page: Dynamic product detail page with a large photography carousel, product specifications, downloadable spec sheet, MOQ, lead time, and inquiry options.
- Inquiry Management: Inquiry form with Firestore storage and email notifications, supporting sample requests, general inquiries, and bulk orders. Prefilled WhatsApp integration.
- Admin Dashboard: Protected admin dashboard for managing inquiries with search, sort, status updates (new / contacted / quoted), CSV export, and product CRUD operations.
- Transactional Email Generation: Cloud Function to send transactional emails to sales@anabyn.com upon new inquiries using SendGrid or SMTP; optionally generates and attaches a PDF summary.
- SEO Meta Data Generation: Meta title & description generation using an AI tool that parses the product page for relevant content.

## Style Guidelines:

- Background: White (#FFFFFF) to create a clean and luxurious canvas.
- Primary: Royal Blue (#0B3D91) for primary CTAs and navigation accents. It represents trust and reliability, befitting Anabyn's role as a trusted partner.
- Accent: Subtle Gold (#C9A84B) used sparingly for hover effects and border highlights to add a touch of luxury and sophistication.
- Body and headline font: 'Inter' (sans-serif) for a modern and sleek typographic hierarchy. It offers excellent readability and supports generous white space, fitting the minimalist aesthetic. Note: currently only Google Fonts are supported.
- Desktop-first, fully responsive design with semantic HTML, ensuring accessibility and optimal viewing across devices.
- Simple, elegant icons that complement the modern typography and minimalist design. Use the provided logo.
- Subtle parallax scrolling effects and smooth entrance animations to enhance user engagement without compromising performance.