import cn from "@/utils/cn";
import { LucideProps, StarHalfIcon, StarIcon } from "lucide-react";
import { ComponentProps } from "react";

type StarsRatingProps = {
  rating: number;
  maximumRating?: number;
  emptyStarProps?: LucideProps;
  halfStarProps?: LucideProps;
  fullStarProps?: LucideProps;
} & ComponentProps<"div">;

export default function StarsRating({
  rating,
  maximumRating = 5,
  emptyStarProps,
  halfStarProps,
  fullStarProps,
  className,
  ...props
}: StarsRatingProps) {
  const flooredRating = Math.floor(rating);
  const ceiledRating = Math.ceil(rating);
  const ratingFraction = rating - flooredRating;
  const stars = [];

  for (let i = 0; i < flooredRating; i++) stars.push(<FullStar key={`full-${i}`} {...emptyStarProps} />);
  if (ratingFraction) {
    if (ratingFraction >= 0.75) {
      stars.push(<FullStar key={`full-${flooredRating}`} {...fullStarProps} />);
    } else if (ratingFraction >= 0.25) {
      stars.push(<HalfStar key="half" {...halfStarProps} />);
    } else {
      stars.push(<EmptyStar {...emptyStarProps} />);
    }
  }
  for (let i = 0; i < maximumRating - ceiledRating; i++) stars.push(<EmptyStar key={`empty-${i}`} {...fullStarProps} />);

  return (
    <div className={cn("flex gap-1 md:gap-2", className)} {...props}>
      {stars}
    </div>
  );
}

function FullStar({ className, ...props }: LucideProps) {
  return <StarIcon size={16} className={cn("size-3 fill-primary stroke-primary md:size-4", className)} {...props} />;
}

function HalfStar({ className, ...props }: LucideProps) {
  return (
    <div className="relative rtl:-scale-x-100">
      <StarHalfIcon size={16} className={cn("size-3 fill-primary stroke-primary md:size-4", className)} {...props} />
      <StarHalfIcon size={16} className={cn("absolute top-0 size-3 -scale-x-100 stroke-primary md:size-4", className)} {...props} />
    </div>
  );
}

function EmptyStar({ className, ...props }: LucideProps) {
  return <StarIcon size={16} className={cn("stroke-primary", className)} {...props} />;
}
