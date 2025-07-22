import CategoriesToggleGroupSkeleton from "@/components/categories/CategoriesToggleGroupSkeleton";
import ProductCardSkeleton from "@/components/products/ProductCardSkeleton";
import SectionHeadingSkeleton from "@/components/ui/SectionHeadingSkeleton";

export default function BestSellingProductsSectionSkeleton() {
  return (
    <div className="container">
      <SectionHeadingSkeleton skeletonClassName="bg-background-03" />
      <CategoriesToggleGroupSkeleton />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
      </div>
    </div>
  );
}
