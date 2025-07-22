import Sectionstart from "@/components/Sectionstart";
import Button from "@/components/ui/Button";
import StarsRating from "@/components/ui/StarsRating";
import Image from "next/image";
import image5 from "/public/images/image-10.png";
import image6 from "/public/images/image-11.png";
import sectionImage from "/public/images/image-5.png";
import image1 from "/public/images/image-6.png";
import image2 from "/public/images/image-7.png";
import image3 from "/public/images/image-8.png";
import image4 from "/public/images/image-9.png";

export default function ProductPage() {
  return (
    <>
      <Sectionstart title="Product Details" img={sectionImage} />
      <section className="container py-10">
        <div className="mb-6 columns-2 gap-4 md:columns-3">
          <Image src={image1} alt="alt" className="mb-3 size-full rounded-2xl object-cover" />
          <Image src={image2} alt="alt" className="mb-3 size-full rounded-2xl object-cover" />
          <Image src={image3} alt="alt" className="mb-3 size-full rounded-2xl object-cover" />
          <Image src={image4} alt="alt" className="mb-3 size-full rounded-2xl object-cover" />
          <Image src={image5} alt="alt" className="mb-3 size-full rounded-2xl object-cover" />
          <Image src={image6} alt="alt" className="mb-3 size-full rounded-2xl object-cover" />
        </div>
        <h2 className="mb-2 w-fit rounded-xl bg-secondary px-4 py-2 text-lg font-semibold text-white md:text-2xl">Cars</h2>
        <div className="mb-6 grid grid-cols-1 gap-4 font-montserrat sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h3 className="mb-2 text-2xl font-semibold">BMW X5</h3>
            <div className="flex items-center gap-2 md:flex-col md:items-stretch lg:flex-row lg:items-center">
              <StarsRating rating={4.9} />
              <span className="text-sm md:text-base">4.9 (2130 reviews)</span>
            </div>
          </div>
          <div className="text-sm font-semibold md:text-lg">
            <div>Brand: BMW</div>
            <div>Model: OLED42C2PSA</div>
            <div>Availability: Only 2 in Stock</div>
          </div>
          <div className="text-sm font-semibold sm:col-span-2 md:col-span-1 md:text-lg">
            <div>Size: 7 Person</div>
            <div>Color: White</div>
            <div>Product Dimensions: 6.5"D x 6.5"W x 10.4"H</div>
          </div>
        </div>
        <h4 className="mb-2 font-montserrat text-xl font-semibold">Description:</h4>
        <p className="mb-4 line-clamp-5 text-text-body">
          Duis imperdiet purus eget tortor ornare, quis malesuada dui pharetra. In quis mauris facilisis, pulvinar felis ac, molestie ligula. Mauris
          lacus massa, facilisis ac lacus ac, condimentum vulputate est. Vestibulum sit amet felis eu dui accumsan lacinia eget sed orci. Cras et
          ipsum lorem. Morbi velit magna, malesuada non mattis sed, iaculis id urna. Nam mattis, purus ac rutrum rutrum, felis ipsum dictum massa, et
          pharetra metus nibh et arcu. Maecenas quis laoreet sapien. Morbi sit amet accumsan lorem. Sed sed .
        </p>
        <Button className="mx-auto flex font-montserrat font-semibold uppercase">Add to cart</Button>
      </section>
    </>
  );
}
