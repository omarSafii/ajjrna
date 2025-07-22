import getAllCategories from "@/actions/categories/getAllCategories";
import Await from "@/components/Await";
import CategoriesSectionSkeleton from "@/components/categories/CategoriesSectionSkeleton";
import CategoryCard from "@/components/categories/CategoryCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { Suspense } from "react";

export default function CategoriesSection() {
  return (
    <section className="container py-24">
      <Suspense fallback={<CategoriesSectionSkeleton />}>
        <Await promise={getAllCategories()}>
          {(categories) => (
            <>
              <SectionHeading title="Modern Collection" subTitle="All Categories Available" />
              <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                {categories.map((category) => (
                  <CategoryCard key={category.name} {...category} />
                ))}
              </ul>
            </>
          )}
        </Await>
      </Suspense>
    </section>
  );
}
