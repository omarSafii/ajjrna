import Skeleton from "@/components/ui/Skeleton";
import cn from "@/utils/cn";
type SectionHeadingSkeletonProps = {
  skeletonClassName?: string;
};
export default function SectionHeadingSkeleton({ skeletonClassName }: SectionHeadingSkeletonProps) {
  return (
    <>
      <Skeleton className={cn("mx-auto mb-4 h-4 w-32", skeletonClassName)} />
      <Skeleton className={cn("mx-auto mb-6 h-6 w-96 md:h-8", skeletonClassName)} />
    </>
  );
}
