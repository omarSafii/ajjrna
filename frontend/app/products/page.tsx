/* eslint-disable react/no-unescaped-entities */
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

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const url = searchQuery
          ? `http://127.0.0.1:8000/products/?search=${encodeURIComponent(searchQuery)}`
          : "http://127.0.0.1:8000/products/";
        
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");
        
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [searchQuery]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mx-auto max-w-7xl">
        {searchQuery && (
          <h1 className="mb-8 text-2xl font-bold text-gray-800">
          "<span className="text-blue-600">{searchQuery}</span>"
          </h1>
        )}

        {products.length === 0 ? (
          <div className="flex min-h-[300px] items-center justify-center">
            <p className="text-lg text-gray-500">
              {searchQuery ? "لا توجد نتائج مطابقة للبحث" : "لا توجد منتجات متاحة حالياً"}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={product.ProImage || "/placeholder-product.jpg"}
                    alt={product.ProName}
                    fill
                    className="object-cover"
                    quality={80}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/placeholder-product.jpg";
                    }}
                  />
                </div>
                <div className="p-4">
                  <h2 className="mb-2 text-xl font-bold text-gray-800 line-clamp-1">
                    {product.ProName}
                  </h2>
                  <p className="mb-3 text-gray-600 line-clamp-2">
                    {product.Description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-blue-600">
                      {product.price.toLocaleString()} ر.س
                    </span>
                    <button className="rounded bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700">
                      أضف إلى السلة
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}