"use client";

import ProductCard from "@/components/products/ProductCard";
import ProductFilters from "@/components/products/ProductFilters";
import ProductListControls from "@/components/products/ProductListControls";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/Pagination";
import routes from "@/config/routes";
import useIsLg from "@/hooks/mediaQueries/useIsLg";
import useIsMd from "@/hooks/mediaQueries/useIsMd";
import useIsSm from "@/hooks/mediaQueries/useIsSm";
import cn from "@/utils/cn";
import { useSearchParams } from "next/navigation";
import { ComponentProps, useEffect, useState } from "react";

export type Product = {
  id: number;
  ProName: string;
  ProImage: string;
  Description: string;
  price: number;
};

type ProductListProps = ComponentProps<"div"> & {
  initialProducts?: Product[];
};

export default function ProductList({ className, ...props }: ProductListProps) {
  const isLg = useIsLg();
  const isMd = useIsMd();
  const isSm = useIsSm();
  const searchParams = useSearchParams();

  const [gridColumnCount, setGridColumnCount] = useState(1);
  const [apiProducts, setApiProducts] = useState<Product[]>(props.initialProducts || []);
  const [totalProducts, setTotalProducts] = useState(props.initialProducts?.length || 0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const page = Math.max(1, +(searchParams.get("page") ?? 1));
  const perPage = Math.min(50, Math.max(1, +(searchParams.get("perPage") ?? 16)));

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  const lastPage = Math.ceil(totalProducts / perPage);

  // إنشاء روابط التنقل مع التحقق من الحدود
  const newNextSearchParams = new URLSearchParams(searchParams);
  newNextSearchParams.set("page", Math.min(page + 1, lastPage).toString());
  const nextPath = `${routes.products.index}?${newNextSearchParams.toString()}`;

  const newPrevSearchParams = new URLSearchParams(searchParams);
  newPrevSearchParams.set("page", Math.max(1, page - 1).toString());
  const prevPath = `${routes.products.index}?${newPrevSearchParams.toString()}`;

  // جلب المنتجات مع تحسينات في معالجة الأخطاء
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const res = await fetch(`http://localhost:8000/products/`);
        
        if (!res.ok) {
          throw new Error(`Failed to load products: ${res.status} ${res.statusText}`);
        }

        const contentType = res.headers.get('content-type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Received non-JSON response');
        }

        const data = await res.json();
        
        if (!Array.isArray(data.items) && !Array.isArray(data)) {
          throw new Error('Invalid data format');
        }

        setApiProducts(data.items || data);
        setTotalProducts(data.total || data.length || 0);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    // جلب البيانات فقط إذا لم يتم توفير المنتجات مسبقاً
    if (!props.initialProducts?.length) {
      fetchProducts();
    }
  }, [page, perPage, props.initialProducts]);

  // ضبط عدد الأعمدة مع Debounce لتحسين الأداء
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLg) setGridColumnCount(4);
      else if (isMd) setGridColumnCount(3);
      else if (isSm) setGridColumnCount(2);
      else setGridColumnCount(1);
    }, 100);

    return () => clearTimeout(timer);
  }, [isSm, isMd, isLg]);

  // عرض رسالة خطأ مفصلة عند الحاجة
  if (error) {
    return (
      <div className="p-4 text-red-600 bg-red-50 rounded-lg">
        <h3 className="font-bold">Error loading products</h3>
        <p>{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-2 px-4 py-2 bg-red-100 hover:bg-red-200 rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  // تحسينات في عرض المنتجات
  const displayedProducts = apiProducts.slice(startIndex, endIndex);
  const isEmpty = !loading && apiProducts.length === 0;

  return (
    <>
      <div className="mb-8 flex flex-row flex-wrap items-center justify-between gap-2 md:gap-4">
        <ProductFilters />
        {!isEmpty && (
          <p className="max-md:order-last max-md:w-full">
            Showing {Math.min(startIndex + 1, totalProducts)}-{Math.min(endIndex, totalProducts)} of {totalProducts} results
          </p>
        )}
        <ProductListControls 
          gridColumnCount={gridColumnCount} 
          onGridColumnCountChange={setGridColumnCount} 
        />
      </div>

      {loading ? (
        <div className="text-center py-10">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-2">Loading products...</p>
        </div>
      ) : isEmpty ? (
        <div className="text-center py-10">
          <p className="text-lg">No products available</p>
          <p className="text-gray-500">Check back later or try different filters</p>
        </div>
      ) : (
        <div
          {...props}
          style={{ gridTemplateColumns: `repeat(${gridColumnCount}, minmax(0, 1fr))` }}
          className={cn("mb-24 grid gap-4", className)}
        >
          {displayedProducts.map((product) => (
            <ProductCard
              productid={product.id}
              key={product.id}
              name={product.ProName}
              description={product.Description}
              image={product.ProImage}
              price={product.price}
              variant={!isSm ? "col" : gridColumnCount === 1 ? "row" : "col"}
            />
          ))}
        </div>
      )}

      {totalProducts > perPage && (
        <Pagination>
          <PaginationContent>
            {page > 1 && (
              <PaginationItem>
                <PaginationPrevious href={prevPath} />
              </PaginationItem>
            )}
            {page < lastPage && (
              <PaginationItem>
                <PaginationNext href={nextPath} />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
}
