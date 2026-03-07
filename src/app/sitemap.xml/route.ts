
// Redundant after sitemap.ts implementation
export async function GET() {
  return new Response("Use /sitemap.xml served via sitemap.ts", { status: 404 });
}
