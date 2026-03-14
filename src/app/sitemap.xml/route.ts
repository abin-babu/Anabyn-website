// This file is disabled to prevent conflicts with src/app/sitemap.ts
export const dynamic = 'force-static';
export async function GET() {
  return new Response('Sitemap is handled by src/app/sitemap.ts', {
    status: 404,
  });
}
