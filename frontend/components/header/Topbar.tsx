import SocialMediaLinks from "@/components/header/SocialMediaLinks";
import ClockIcon from "@/components/icons/ClockIcon";
import MapPinIcon from "@/components/icons/MapPinIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";

export default function Topbar() {
  return (
    <div className="bg-[#240D58] py-2 font-jost text-sm text-white">
      <div className="container flex justify-between">
        <div className="flex items-center gap-2">
          <MapPinIcon />
          <address className="not-italic">5630 Test St, Saudi Arabia</address>
        </div>
        <div className="flex items-center gap-2">
          <PhoneIcon />
          <address className="not-italic">+0517024180420</address>
        </div>
        <div className="flex items-center gap-2">
          <ClockIcon />
          <div>Mon to Sat 09:00 - 21:00</div>
        </div>
        <SocialMediaLinks />
      </div>
    </div>
  );
}
