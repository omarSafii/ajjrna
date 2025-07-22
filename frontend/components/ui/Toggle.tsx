"use client";

import cn from "@/utils/cn";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

export const toggleVariants = cva(
  "inline-flex items-center gap-2 justify-center ring-offset-line transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-line focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-primary data-[state=on]:text-white font-semibold border border-line rounded-xl text-xs whitespace-nowrap md:text-base",
  {
    variants: {
      variant: {
        default: "bg-background-03",
        outline: "bg-transparent hover:bg-background-02",
      },
      size: {
        default: "p-2 md:p-3",
        small: "p-1 md:p-2"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export type ToggleVariants = VariantProps<typeof toggleVariants>;

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & ToggleVariants
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root ref={ref} className={cn(toggleVariants({ variant, size, className }))} {...props} />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export default Toggle;
