import MapPinIcon from "@/components/icons/MapPinIcon";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";
import mapimage from "/public/images/Map.png";
import gl_img_1 from "/public/images/gl-img1.png";
import gl_img_3 from "/public/images/image-3.png";
import gl_img_2 from "/public/images/image-44.png";

export default function Greenliving() {
  const items = [
    { image: gl_img_1, city: "Madina", address: "Uthman Ibn Affan Rd, Al Rayah", subAdderss: "42312, Saudi Arabia" },
    { image: gl_img_2, city: "Makkah", address: "Uthman Ibn Affan Rd, Al Rayah", subAdderss: "42312, Saudi Arabia" },
    { image: gl_img_3, city: "Riyadh", address: "Uthman Ibn Affan Rd, Al Rayah", subAdderss: "42312, Saudi Arabia" },
  ];
  return (
    <section className="container mb-24 flex flex-col items-center justify-between gap-6 bg-background-01 md:flex-row">
      <div className="flex flex-col justify-between">
        <SectionHeading
          title="Comfortable Access"
          subTitle="We have branches all over the Kingdom of Saudi Arabia."
          titleClassName="text-start"
          subtitleClassName="text-start font-bold"
        />
        <ul className="space-y-4">
          {items.map(({ image, city, address, subAdderss }, i) => (
            <Card key={i} asChild className="gap-4 text-sm sm:flex-row lg:gap-4 lg:text-base">
              <li>
                <Image src={image} alt={city} className="aspect-video rounded-md object-cover sm:w-1/3" />
                <div className="flex-1 font-jost">
                  <div className="mb-2 text-lg font-semibold">{city}</div>
                  <div className="flex gap-2">
                    <MapPinIcon />
                    <address className="not-italic">
                      <div>{address},</div>
                      <div>
                        <span className="font-bold">{city}</span> {subAdderss}
                      </div>
                    </address>
                  </div>
                </div>
              </li>
            </Card>
          ))}
        </ul>
      </div>
      <Image src={mapimage} alt="image" className="sm:w-1/2 md:w-1/3 lg:w-1/2" />
      {/* <div className="mx-auto flex flex-col items-center justify-between gap-y-4 sm:flex-col md:flex-col lg:flex-row"></div> */}
    </section>
  );
}
