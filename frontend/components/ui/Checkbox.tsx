"use client";

import cn from "@/utils/cn";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";
import * as React from "react";

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>>(
  ({ className, ...props }, ref) => (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        "focus-visible:ring-ring group peer size-5 shrink-0 overflow-hidden rounded-lg border border-line bg-background-02 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className={cn(
          "grid place-items-center text-current group-data-[state=checked]:animate-in group-data-[state=unchecked]:animate-out group-data-[state=checked]:fade-in-0 group-data-[state=unchecked]:fade-out-0",
        )}
      >
        <CheckIcon className="size-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  ),
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export default Checkbox;
