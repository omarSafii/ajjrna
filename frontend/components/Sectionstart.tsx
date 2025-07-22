import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
type Sectionstartprops = { title: string; img: string | StaticImport };
export default function Sectionstart({ img, title }: Sectionstartprops) {
  return (
    <div className="relative min-h-[31.25rem] ">
      <Image className="absolute -z-30 size-full object-cover" src={img} alt="image"></Image>
      <div className="absolute -z-20 size-full bg-[#3D414585] object-cover"></div>
      <div className="data-box flex min-h-[31.25rem] flex-col items-center justify-center px-[6.25rem] capitalize sm:items-start md:items-start lg:items-start">
        <h2 className="mb-4 text-[3.375rem] text-white">{title}</h2>
        <p className="text-base uppercase tracking-wide text-white">Home - {title}</p>
      </div>
    </div>
  );
}
