import Skeleton from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen py-16">
      <Skeleton className="mb-6 h-64" />
      <div className="container">
        <Skeleton className="mb-2 h-6" />
        <Skeleton className="mb-2 h-6" />
        <Skeleton className="mb-2 h-6 w-1/2" />
        <Skeleton className="mb-2 h-6 w-1/2" />
      </div>
    </div>
  );
}
