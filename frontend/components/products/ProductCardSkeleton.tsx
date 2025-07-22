import Card from "@/components/ui/Card";
import Skeleton from "@/components/ui/Skeleton";
import { useState, useEffect } from "react";


export default function ProductCardSkeleton() {
  return (
    <Card>
      <Skeleton className="mb-4 aspect-[4/3] w-full" />
      <Skeleton className="mb-2 h-7 w-1/3" />
      <Skeleton className="mb-2 h-6 w-1/2" />
      <Skeleton className="mb-2 h-4" />
      <Skeleton className="h-4 w-3/4" />
    </Card>
  );
}
