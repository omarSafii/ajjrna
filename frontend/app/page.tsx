import CategoriesCarousel from "@/components/categories/CategoriesCarousel";
import CategoriesSection from "@/components/categories/CategoriesSection";
import Features from "@/components/Features";
import Greenliving from "@/components/Greenliving";
import Hero from "@/components/hero/Hero";
import BestSellingProductsSection from "@/components/products/BestSellingProductsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoriesSection />
      <Greenliving />
      <Features />
      <BestSellingProductsSection />
      <CategoriesCarousel />
    </>
  );
}
