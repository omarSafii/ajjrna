import Image from "next/image";
import gallery_10 from "/public/images/gallery_10.png";
import gallery_11 from "/public/images/gallery_11.png";
import gallery_12 from "/public/images/gallery_12.png";
import gallery_13 from "/public/images/gallery_13.png";
import gallery_14 from "/public/images/gallery_14.png";
import gallery_2 from "/public/images/gallery_2.png";
import gallery_3 from "/public/images/gallery_3.png";
import gallery_4 from "/public/images/gallery_4.png";
import gallery_5 from "/public/images/gallery_5.png";
import gallery_6 from "/public/images/gallery_6.png";
import gallery_7 from "/public/images/gallery_7.png";
import gallery_8 from "/public/images/gallery_8.png";
import gallery_9 from "/public/images/gallery_9.png";
import gallery_1 from "/public/images/image-1.png";

export default function Galleryimages() {
  return (
    <>
      <div className="mb-16 grid grid-cols-2 items-stretch gap-4 md:grid-cols-4 [&>*]:rounded-2xl [&>*]:object-cover">
        <Image className="row-span-3" src={gallery_1} alt="image" />
        <Image className="row-span-3 md:row-span-4" src={gallery_2} alt="image" />
        <Image className="md:col-start-1 md:row-start-4" src={gallery_5} alt="image" />
        <Image className="row-span-2 md:col-start-1 md:row-start-5" src={gallery_8} alt="image" />
        <Image className="row-span-2 md:col-start-1 md:row-start-7" src={gallery_12} alt="image" />
        <Image className="row-span-3 md:col-start-2 md:row-start-5" src={gallery_9} alt="image" />
        <Image className="md:col-start-2 md:row-start-8" src={gallery_13} alt="image" />
        <Image className="md:col-start-3 md:row-start-1" src={gallery_3} alt="image" />
        <Image className="row-span-3 md:col-start-3 md:row-start-2" src={gallery_6} alt="image" />
        <Image className="row-span-4 md:col-start-3 md:row-start-5" src={gallery_10} alt="image" />
        <Image className="row-span-2 md:col-start-4 md:row-start-1" src={gallery_4} alt="image" />
        <Image className="row-span-2 md:col-start-4 md:row-start-3" src={gallery_7} alt="image" />
        <Image className="md:col-start-4 md:row-start-5" src={gallery_11} alt="image" />
        <Image className="row-span-2 md:col-start-4 md:row-start-3" src={gallery_7} alt="image" />
        <Image className="row-span-2 md:col-start-4 md:row-span-3 md:row-start-6" src={gallery_14} alt="image" />
      </div>
    </>
  );
}
