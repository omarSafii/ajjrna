import SectionHeading from "@/components/ui/SectionHeading";
import routes from "@/config/routes";
import Image from "next/image";
import Link from "next/link";
import Button from "./ui/Button";
import gallery_image_1 from "/public/images/galleryimage_1.png";
import gallery_image_2 from "/public/images/galleryimage_2.png";
import gallery_image_3 from "/public/images/galleryimage_3.png";
import gallery_image_4 from "/public/images/galleryimage_4.png";
import gallery_image_5 from "/public/images/galleryimage_5.png";

export default function Minigallery() {
  return (
    <section className="bg-background-02 pb-8 pt-16">
      <div className="container grid items-center gap-6 md:grid-cols-2">
        <div>
          <SectionHeading
            title="Out Gallery"
            titleClassName="text-start font-semibold uppercase"
            subTitle="A Picture is Worth a Thousand Words: Discover the Gallery."
            subtitleClassName="text-start font-semibold md:text-2xl md:mb-6"
          />
          <Button asChild>
            <Link href={routes.gallery.index}>View all photos</Link>
          </Button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Image src={gallery_image_2} alt="gallery image" className="size-full object-cover" />
          <Image src={gallery_image_1} alt="gallery image" className="row-span-2 size-full object-cover" />
          <Image src={gallery_image_3} alt="gallery image" className="size-full object-cover" />
          <Image src={gallery_image_4} alt="gallery image" className="size-full object-cover" />
          <Image src={gallery_image_5} alt="gallery image" className="size-full object-cover" />
        </div>
      </div>
    </section>
  );
}
