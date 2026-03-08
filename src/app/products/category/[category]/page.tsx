import { redirect } from 'next/navigation';
export default async function ProductCategoryRootPage({ params }: { params: { category: string } }) {
  const { category } = await params;
  redirect(`/en/products/category/${category}`);
}
