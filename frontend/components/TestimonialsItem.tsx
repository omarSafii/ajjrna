import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import StarsRating from "@/components/ui/StarsRating";
import Image from "next/image";
import image from "/public/images/mock/image-1.png";

export default function TestimonialsItem() {
  return (
    <Card className="mx-2 h-full gap-4 hover:drop-shadow-sm md:flex-row">
      <div className="flex flex-1 flex-col">
        <SectionHeading title="Hear It from" subTitle="Our Happy Clients!" titleClassName="text-start" subtitleClassName="mb-4 md:mb-4 text-start" />
        <StarsRating rating={5} className="mb-4" />
        <p className="mb-auto pb-4 font-montserrat text-sm font-semibold md:text-xl">
          One of the best companies I have dealt with, excellent quality and luxurious products, a cooperative and respectful work team that is quick
          to respond,All thanks and good luck.
        </p>
        <div className="mt-auto grid w-fit grid-cols-[auto_auto] gap-x-2 md:gap-x-5">
          <Avatar className="row-span-2 size-12 md:size-16">
            <AvatarImage />
            <AvatarFallback />
          </Avatar>
          <h4 className="font-semibold">Mohammad Taky</h4>
          <address className="not-italic text-text-body">Madina</address>
        </div>
      </div>
      <Image src={image} alt="car" className="aspect-video w-full rounded-xl object-cover max-md:-order-1 md:aspect-[3/4] md:w-64" />
    </Card>
  );
}
