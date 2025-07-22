import Card from "@/components/ui/Card";
import Skeleton from "@/components/ui/Skeleton";

export default function CategoryCardSkeleton() {
  return (
    <Card>
      <Skeleton className="mb-8 size-12 w-fit rounded-md border border-line bg-background-01 md:size-14 lg:rounded-xl" />
      <Skeleton className="mb-3 h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </Card>
  );
}
