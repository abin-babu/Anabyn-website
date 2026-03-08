import { redirect } from 'next/navigation';
export default async function ProductSlugRootPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  redirect(`/en/products/${slug}`);
}
