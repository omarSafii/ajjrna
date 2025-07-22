"use client";

import cn from "@/utils/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

type ActiveLinkProps = ComponentProps<typeof Link> & { activeClassName?: string };

export default function ActiveLink({ href, className, activeClassName, ...props }: ActiveLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link data-active={isActive} href={href} className={cn("group relative transition", className, isActive ? activeClassName : "")} {...props} />
  );
}
