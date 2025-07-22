import Card from "@/components/ui/Card";
import { Category } from "@/mock/cetegories";
import Image from "next/image";

export default function CategoryCard({ name, image, productCount }: Category) {
  return (
    <Card asChild>
      <li>
        <figure className="mb-auto">
          <div className="mb-8 w-fit rounded-md border border-line bg-background-01 p-2 lg:rounded-xl">
            <Image src={image} alt={name} className="size-8 md:size-10" />
          </div>
          <figcaption className="mb-3 font-montserrat font-medium md:text-lg">{name}</figcaption>
        </figure>
        <div className="text-sm text-text-body md:text-base">{productCount} Products</div>
      </li>
    </Card>
  );
}
