import CategoryCardSkeleton from "@/components/categories/CategoryCardSkeleton";
import SectionHeadingSkeleton from "@/components/ui/SectionHeadingSkeleton";

export default function CategoriesSectionSkeleton() {
  return (
    <>
      <SectionHeadingSkeleton />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 xl:grid-cols-6">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <CategoryCardSkeleton key={i} />
          ))}
      </div>
    </>
  );
}
