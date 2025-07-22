import cn from "@/utils/cn";
import { Slot } from "@radix-ui/react-slot";
import { ComponentProps } from "react";

type CardProps = {
  asChild?: boolean;
  hoverShadow?: boolean;
} & ComponentProps<"div">;

export default function Card({ asChild, className, hoverShadow = true, ...props }: CardProps) {
  const Component = asChild ? Slot : "div";
  return (
    <Component
      className={cn(
        "relative flex flex-col rounded-2xl border border-line bg-background-03 p-4",
        { "transition hover:drop-shadow-base": hoverShadow },
        className,
      )}
      {...props}
    />
  );
}
