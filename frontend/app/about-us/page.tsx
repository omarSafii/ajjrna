import Agents from "@/components/Agents";
import Features from "@/components/Features";
import Metrics from "@/components/Metrics";
import Minigallery from "@/components/Minigallery";
import Sanctuary from "@/components/sanctaury/Sanctuary";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import SectionHero from "@/components/ui/section-hero/SectionHero";
import image from "/public/images/image-2.png";

export default function AboutPage() {
  return (
    <>
      <SectionHero image={image} title="About Us" />
      <Sanctuary />
      <Features />
      <Metrics />
      <Minigallery />
      <TestimonialsCarousel />
      <Agents />
    </>
  );
}
