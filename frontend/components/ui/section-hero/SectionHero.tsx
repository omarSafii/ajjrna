import SectionBreadcrumb from "@/components/ui/section-hero/SectionBreadcrumb";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
type Sectionstartprops = {
  title: string;
  image: StaticImageData;
};

export default function SectionHero({ image, title }: Sectionstartprops) {
  return (
    <section className="relative h-[85vh]">
      <Image className="absolute inset-0 h-full w-full object-cover" src={image} alt={title} />
      <div className="absolute inset-0 bg-[#3D4145BA]/[73%]" />
      <div className="container relative flex h-full flex-col justify-center text-white">
        <h1 className="text-5xl">{title}</h1>
        <SectionBreadcrumb />
      </div>
    </section>
  );
}
