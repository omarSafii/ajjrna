"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

interface Product {
  id: number;
  ProName: string;
  ProImage: string;
  Description: string;
  price: number;
  category: number;
}

export default function SearchResultsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `http://127.0.0.1:8000/products/?search=${encodeURIComponent(query || "")}`
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError("حدث خطأ أثناء جلب النتائج");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    if (query) fetchResults();
  }, [query]);

  if (loading) return <div className="p-4 text-center">جاري التحميل...</div>;
  if (error) return <div className="p-4 text-center text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-2xl font-bold">
        نتائج البحث عن: <span className="text-primary">{query}</span>
      </h1>

      {products.length === 0 ? (
        <div className="text-center">لا توجد نتائج مطابقة</div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-lg border bg-white shadow-md transition-all hover:shadow-lg"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={product.ProImage || "/placeholder-product.jpg"}
                  alt={product.ProName}
                  fill
                  className="rounded-t-lg object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/placeholder-product.jpg";
                  }}
                />
              </div>
              <div className="p-4">
                <h2 className="mb-2 text-xl font-bold text-gray-800">
                  {product.ProName}
                </h2>
                <p className="mb-3 text-gray-600">{product.Description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">
                    {product.price.toLocaleString()} ر.س
                  </span>
                  <button className="rounded bg-primary px-4 py-2 font-medium text-white hover:bg-primary-dark">
                    أضف إلى السلة
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}