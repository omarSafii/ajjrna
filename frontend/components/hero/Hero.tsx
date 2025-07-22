import HeroRatigns from "@/components/hero/HeroRatigns";
import SearchBar from "@/components/hero/SearchBar";
import Image from "next/image";
import alriyadh from "/public/images/saudi-arabia-riyadh-city.png";

export default function Hero() {
  return (
    <section className="relative h-[85vh]">
      <Image priority src={alriyadh} alt="alriyadh city" className="absolute inset-0 -z-50 size-full object-cover" />
      <div className="container mx-auto flex h-full flex-col">
        <p className="my-auto md:max-w-[22ch] text-balance font-montserrat text-xl font-extrabold leading-loose text-white md:text-2xl lg:text-4xl">
          Rent the most luxurious and latest products with the Ajjrna platform.
        </p>
        <SearchBar />
        <HeroRatigns />
      </div>
    </section>
  );
}
