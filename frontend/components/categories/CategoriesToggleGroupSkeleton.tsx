import Skeleton from "@/components/ui/Skeleton";

export default function CategoriesToggleGroupSkeleton() {
  return (
    <div className="mb-14 flex justify-center gap-6">
      <Skeleton className="h-[3.125rem] w-[5.8125rem] rounded-xl border border-line bg-background-03" />
      <Skeleton className="h-[3.125rem] w-[5.8125rem] rounded-xl border border-line bg-background-03" />
      <Skeleton className="h-[3.125rem] w-[5.8125rem] rounded-xl border border-line bg-background-03" />
      <Skeleton className="h-[3.125rem] w-[5.8125rem] rounded-xl border border-line bg-background-03" />
    </div>
  );
}
