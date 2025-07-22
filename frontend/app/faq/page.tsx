import FaqAccordion from "@/components/faq/FaqAccordion";
import FaqForm from "@/components/faq/FaqForm";
import Card from "@/components/ui/Card";
import SectionHero from "@/components/ui/section-hero/SectionHero";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/ToggleGroup";
import Image from "next/image";
import faq_form_image from "/public/images/FAQ-form-image.png";
import heroImage from "/public/images/image-5.png";

export default function page() {
  return (
    <>
      <SectionHero image={heroImage} title="FAQ" />
      <section className="container flex flex-col items-center gap-8 py-16 lg:flex-row lg:items-start">
        <div className="flex-1 px-5 md:px-8">
          <div className="text-center">
            <h3 className="font-jost text-[15px] font-semibold uppercase tracking-wider text-primary">Discover More</h3>
            <p className="mb-6 text-center font-montserrat text-lg font-semibold text-black sm:text-2xl md:text-3xl lg:text-4xl">
              All You Need to Know.
            </p>
            <ToggleGroup type="single" className="mb-16 gap-5">
              <ToggleGroupItem value="payments">Payments</ToggleGroupItem>
              <ToggleGroupItem value="products">Products</ToggleGroupItem>
              <ToggleGroupItem value="other">Other</ToggleGroupItem>
            </ToggleGroup>
          </div>
          <FaqAccordion />
        </div>
        <Card className="p-6">
          <Image className="mb-6" src={faq_form_image} alt="image" />
          <FaqForm />
        </Card>
      </section>
    </>
  );
}
