import { redirect } from 'next/navigation';
export default async function BlogSlugRootPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  redirect(`/en/blog/${slug}`);
}
