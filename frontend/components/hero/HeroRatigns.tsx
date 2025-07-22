import HouseIcon from "@/components/icons/HouseIcon";
import SmileIcon from "@/components/icons/SmileIcon";
import StarsRating from "@/components/ui/StarsRating";

export default function HeroRatigns() {
  return (
    <div className="relative top-1 flex gap-x-4 gap-y-2 flex-wrap">
      <div className="flex w-fit items-center gap-1 rounded-[0.875rem] bg-black/60 px-4 py-1.5 backdrop-blur-md">
        <HouseIcon />
        <span className="text-white text-xs md:text-sm lg:text-base">Over 2M products.</span>
      </div>
      <div className="flex w-fit items-center gap-1 rounded-[0.875rem] bg-black/60 px-4 py-1.5 backdrop-blur-md">
        <SmileIcon />
        <span className="text-white text-xs md:text-sm lg:text-base">789 peoples happy</span>
      </div>
      <div className="flex w-fit items-center gap-1 rounded-[0.875rem] bg-black/60 px-4 py-1.5 backdrop-blur-md">
        <StarsRating rating={4.8} />
        <span className="text-white text-xs md:text-sm lg:text-base">4.8 Top rated by People</span>
      </div>
    </div>
  );
}
