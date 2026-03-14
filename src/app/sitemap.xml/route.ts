// This route is deprecated in favor of src/app/sitemap.ts
// Next.js will automatically handle /sitemap.xml if sitemap.ts exists.
export async function GET() {
  return new Response(null, { status: 404 });
}
