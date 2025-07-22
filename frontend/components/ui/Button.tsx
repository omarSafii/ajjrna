import cn from "@/utils/cn";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

//TODO:Check color styles
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl ring-offset-line transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-sm md:text-base",
  {
    variants: {
      variant: {
        default: "bg-primary text-text hover:bg-primary/90",
        secondary: "bg-secondary text-text hover:bg-secondary/80",
        // destructive:
        //   "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        success: "bg-success hover:bg-success/90 text-text",
        outline: "border border-line bg-background-01 hover:bg-background-02",
        ghost: "hover:bg-secondary hover:text-text",
        link: "underline-offset-4 hover:underline",
      },
      size: {
        icon: "",
        default: "px-4 py-2",
        lg: "px-6 py-3",
      },
      pill: {
        true: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
    compoundVariants: [
      {
        variant: "link",
        class: "px-0 py-0",
      },
    ],
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants & {
    asChild?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, pill, asChild = false, size, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, pill, className }))} ref={ref} {...props} />;
});
Button.displayName = "Button";

export default Button;
