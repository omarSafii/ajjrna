"use client";

import ActiveLink from "@/components/ui/ActiveLink";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/Carousel";
import navigation from "@/config/navigation";
import cn from "@/utils/cn";
import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export default function MobileNavbar() {
  const { scrollY } = useScroll();
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  useEffect(() => {
    let currentScroll = 0;
    const unsub = scrollY.on("change", (latest) => {
      const diff = currentScroll - latest;
      setIsScrollingDown(diff < 0);
      currentScroll = latest;
    });
    return unsub;
  }, [scrollY]);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 bottom-0 rounded-t-2xl border-t border-line bg-background-03 transition-transform md:hidden",
        isScrollingDown ? "pointer-events-none translate-y-full" : "",
      )}
    >
      <Carousel opts={{ dragFree: true }}>
        <CarouselContent containerClassName="py-2">
          {navigation.map(({ href, name, Icon }) => (
            <CarouselItem key={href} className="basis-24">
              <ActiveLink href={href} className="text-text-body transition" activeClassName="text-primary">
                <Icon className="mx-auto" />
                <div className="text-center">{name}</div>
              </ActiveLink>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </nav>
  );
}
