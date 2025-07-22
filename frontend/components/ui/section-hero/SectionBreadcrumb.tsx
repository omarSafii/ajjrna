"use client";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/Breadcrumb";
import { MinusIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { Fragment, useCallback, useMemo } from "react";

export default function SectionBreadcrumb() {
  const pathname = usePathname();
  const breadcrumbs = useMemo(() => {
    const arr = pathname
      .split("/")
      .slice(1)
      .map((breadcrumb) => breadcrumb.replace("-", " ").toUpperCase());
    arr.unshift("HOME");
    return arr;
  }, [pathname]);

  const getBreadcrumbPath = useCallback(
    (index: number) => {
      if (index === 0) return "/";
      return breadcrumbs
        .slice(0, index - 1)
        .join("/")
        .toLowerCase()
        .replace(" ", "-");
    },
    [breadcrumbs],
  );

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, i) => (
          <Fragment key={breadcrumb}>
            {i === breadcrumbs.length - 1 ? (
              <BreadcrumbSeparator>
                <MinusIcon />
              </BreadcrumbSeparator>
            ) : null}
            <BreadcrumbItem>
              {i === breadcrumbs.length - 1 ? (
                <BreadcrumbPage>{breadcrumb}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={getBreadcrumbPath(i)}>{breadcrumb}</BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
