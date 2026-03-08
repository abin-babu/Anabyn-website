import { redirect } from 'next/navigation';
export default async function ProductSubCategoryRootPage({ params }: { params: { subcategory: string } }) {
  const { subcategory } = await params;
  redirect(`/en/products/subcategory/${subcategory}`);
}
