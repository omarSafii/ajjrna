import cn from "@/utils/cn";
import { ComponentPropsWithoutRef } from "react";

type SectionProps = ComponentPropsWithoutRef<"section">;

export default function Section({ className, children, ...rest }: SectionProps) {
  return (
    <section className={cn("py-24", className)} {...rest}>
      {children}
    </section>
  );
}
