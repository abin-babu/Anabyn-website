// This file is intentionally disabled to resolve a conflict with src/app/sitemap.ts
// Next.js 15 detects both as /sitemap.xml. sitemap.ts is the preferred dynamic generator.
export const dynamic = 'force-static';
export async function GET() {
  return new Response('Sitemap is handled by src/app/sitemap.ts', {
    status: 404,
  });
}
