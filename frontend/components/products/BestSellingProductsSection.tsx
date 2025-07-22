"use client"; // تأكد من إضافة هذا السطر إذا كنت تستخدم useState أو useEffect

import axios from "axios"; 
import CategoriesToggleGroup from "@/components/categories/CategoriesToggleGroup";
import BestSellingProductsSectionSkeleton from "@/components/products/BestSellingProductsSectionSkeleton";
import ProductCard from "@/components/products/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { useEffect, useState } from "react";

const fetchProducts = async () => {
  try {
    const response = await axios.get("http://localhost:8000/products/");
    return response.data; 
  } catch (error) {
    console.error("فشل في تحميل المنتجات:", error);
    throw new Error("فشل في تحميل المنتجات");
  }
};

export default function BestSellingProductsSection() {
  const [products, setProducts] = useState<any[]>([]); // حالة لتخزين المنتجات
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data); // تعيين البيانات المحملة
      } catch (error) {
        setError("فشل في تحميل المنتجات");
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (isLoading) {
    return <BestSellingProductsSectionSkeleton />; // عرض سكلتون أثناء التحميل
  }

  if (error) {
    return <div>Error: {error}</div>; // عرض رسالة خطأ إذا حدثت
  }

  return (
    <section className="bg-background-02 py-24">
      <div className="container">
        <SectionHeading title="Luxury Product" subTitle="Best Selling Products" />
        <CategoriesToggleGroup />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <ProductCard 
              productid={product.id}
              key={product.id}
              name={product.ProName}
              description={product.Description}
              image={product.ProImage}
              price={product.price} /> 
          ))}
        </ul>
      </div>
    </section>
  );
}
