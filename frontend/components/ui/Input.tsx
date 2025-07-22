import { buttonVariants } from "@/components/ui/Button";
import cn from "@/utils/cn";
import { ComponentProps } from "react";

type InputProps = ComponentProps<"input">;

export default function Input({ className, ...rest }: InputProps) {
  return <input className={cn(buttonVariants({ variant: "outline" }), "w-full text-text-body", className)} {...rest} />;
}
