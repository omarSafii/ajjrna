import SocialMediaLinks from "@/components/footer/SocialMediaLinks";
import Image from "next/image";
import logo from "/public/images/logo.png";

export default function Introduction() {
  return (
    <div className="my-auto place-self-center sm:row-start-2 md:row-span-2 md:row-start-auto">
      <Image src={logo} alt="logo" className="mb-4" />
      <div className="mb-4">Follow us on social media</div>
      <SocialMediaLinks />
    </div>
  );
}
