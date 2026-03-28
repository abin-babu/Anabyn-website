/**
 * This file is disabled to resolve a conflict with src/app/sitemap.ts.
 * Next.js registers 'sitemap.ts' automatically as /sitemap.xml.
 * Having a route.ts in a 'sitemap.xml' folder creates a collision.
 * 
 * To fully resolve the warning, this file should be deleted from the filesystem.
 */
export const dynamic = 'force-static';

// No GET export here to prevent Next.js from registering this as a route
