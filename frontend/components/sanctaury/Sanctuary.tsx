import SantuaryVector from "@/components/icons/SantuaryVector";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { CheckIcon } from "lucide-react";
import Image from "next/image";
import SanctuaryFg from "/public/images/sanctuary.png";
import SanctuaryBg from "/public/images/sanctury-bg.png";



export default function Sanctuary() {
  return (
    <section className="container relative grid items-center gap-8 py-16 md:grid-cols-2">
      <SantuaryVector className="absolute inset-x-0 bottom-0 w-full text-background-02" />
      <div className="relative">
        <Image src={SanctuaryBg} alt="Sanctuary" className="relative w-full" />
        <Image
          src={SanctuaryFg}
          alt="Sanctuary"
          className="absolute -top-4 end-0 aspect-video w-3/4 rounded-2xl rounded-br-none border-b-8 border-s-8 border-background-01 border-t-transparent object-cover"
        />
        <div className="absolute bottom-2 start-2 rounded-2xl bg-black/80 p-2">
          <ul className="mb-1 flex">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <li key={i} className="-ms-4 size-10 rounded-full border-2 border-black/80 bg-[#868C92] first:ms-0" />
              ))}
            <li className="-ms-4 grid size-10 place-items-center rounded-full border-2 border-secondary bg-primary font-jost text-sm font-semibold text-white first:ms-0">
              69+
            </li>
          </ul>
          <p className="text-center font-jost text-sm text-white">Top Rated around globe</p>
        </div>
      </div>
      <div className="relative">
        <SectionHeading
          title="Easy Living"
          titleClassName="text-start font-semibold uppercase"
          subTitle="Your Sanctuary in the City: Where Urban Convenience Meets Serenity."
          subtitleClassName="text-start font-semibold md:text-2xl md:mb-6"
        />
        <p className="mb-2">
          Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
          Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
          Text Text Text Text
        </p>
        <ul className="mb-2 grid grid-cols-1 gap-2 lg:grid-cols-2">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <li className="flex items-center gap-2" key={i}>
                <CheckIcon size={12} className="box-content rounded-full bg-success p-1 text-white" />
                <p className="text-text-body">Text Text Text Text Text Text</p>
              </li>
            ))}
        </ul>
        <div className="flex gap-4">
          <Button>Search products</Button>
          <Button variant="secondary">Contact us</Button>
        </div>
      </div>
    </section>
  );
}
