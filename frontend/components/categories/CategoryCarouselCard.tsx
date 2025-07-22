import Card from "@/components/ui/Card";
import cn from "@/utils/cn";
import Image, { StaticImageData } from "next/image";

type CategoryCarouselCard = {
  category: string;
  image: string;
  className?: string;
};

export default function CategoryCarouselCard({ category, image, className }: CategoryCarouselCard) {
  return (
    <Card className={cn(className, "mx-2 hover:drop-shadow-sm")}>
      <Image
  src={`${image}`}
  alt={category}
  width={800} // عرض الصورة
  height={600} // ارتفاع الصورة
  layout="responsive" // يجعل الصورة تتكيف مع حجم الحاوية
/>      <h3 className="text-center text-sm font-semibold lg:text-base">{category}</h3>
    </Card>
  );
}
