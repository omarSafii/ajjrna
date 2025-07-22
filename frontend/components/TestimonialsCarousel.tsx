import TestimonialsItem from "@/components/TestimonialsItem";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/Carousel";

export default function TestimonialsCarousel() {
  return (
    <section className="bg-background-02 pb-16 pt-8">
      <Carousel>
        <CarouselContent className="-ms-0">
          <CarouselItem className="basis-72 ps-2 md:basis-11/12 lg:basis-3/4">
            <TestimonialsItem />
          </CarouselItem>
          <CarouselItem className="basis-72 ps-0 md:basis-11/12 lg:basis-3/4">
            <TestimonialsItem />
          </CarouselItem>
          <CarouselItem className="basis-72 pe-2 ps-0 md:basis-11/12 lg:basis-3/4">
            <TestimonialsItem />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
}
