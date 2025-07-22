import Sectionstart from "@/components/Sectionstart";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/ToggleGroup";
import Link from "next/link";
import Galleryimages from "./Galleryimages";
import gallery_bg from "/public/images/Gallery_bg.png";
export default function page() {
  return (
    <>
      <Sectionstart img={gallery_bg} title="gallery"></Sectionstart>
      <div className="container bg-background-01 py-16">
        <SectionHeading title="Our Gallery" subTitle="Dive into the Gallery Experience" />
        <ToggleGroup type="single" className="mb-6 gap-4" defaultValue="all">
          <ToggleGroupItem size="small" value="all">
            <div className="size-6 rounded-lg bg-secondary transition group-data-[state=on]:bg-white" />
            All
          </ToggleGroupItem>
          <ToggleGroupItem size="small" value="new">
            <div className="size-6 rounded-lg bg-secondary transition group-data-[state=on]:bg-white" />
            New
          </ToggleGroupItem>
          <ToggleGroupItem size="small" value="best">
            <div className="size-6 rounded-lg bg-secondary transition group-data-[state=on]:bg-white" />
            The Best
          </ToggleGroupItem>
          <ToggleGroupItem size="small" value="trend">
            <div className="size-6 rounded-lg bg-secondary transition group-data-[state=on]:bg-white" />
            Trend
          </ToggleGroupItem>
        </ToggleGroup>
        <Galleryimages></Galleryimages>
        <Button asChild className="mx-auto mt-10 flex w-fit font-jost">
          <Link href="/">Load More</Link>
        </Button>
      </div>
    </>
  );
}
