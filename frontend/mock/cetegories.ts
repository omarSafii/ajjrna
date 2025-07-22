import { StaticImageData } from "next/image";
import category1 from "/public/images/categories/category-1.png";
import category2 from "/public/images/categories/category-2.png";
import category3 from "/public/images/categories/category-3.png";
import category4 from "/public/images/categories/category-4.png";
import category5 from "/public/images/categories/category-5.png";
import category6 from "/public/images/categories/category-6.png";

export type Category = {
  name: string;
  image: StaticImageData;
  productCount: number;
};

const categories: Category[] = [
  { name: "Housewares", image: category1, productCount: 48 },
  { name: "Appartments", image: category2, productCount: 48 },
  { name: "Accessories", image: category3, productCount: 48 },
  { name: "Construction tools", image: category4, productCount: 48 },
  { name: "Cars", image: category5, productCount: 48 },
  { name: "Electronics", image: category6, productCount: 48 },
];

export default categories;
