import Card from "@/components/ui/Card";
import cn from "@/utils/cn";
import axios from "axios";
import { Key } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

type ProductCardProps = {
  productid : number;
  name: string;
  description: string;
  variant?: "col" | "row";
  image: string;
  price: number;
  loading?: boolean;
} & React.ComponentPropsWithoutRef<"div">;

export default function ProductCard({
  productid ,
  name,
  description,
  image,
  price,
  variant = "col",
  loading = false,
  className,
  ...props
}: ProductCardProps) {
  const addToCart = () => {
  const user = localStorage.getItem('ID');
  
  // التحقق من وجود user ID
  if (!user) {
    console.error('User ID not found in localStorage');
    alert('يجب تسجيل الدخول أولاً');
    return; // إيقاف التنفيذ إذا لم يكن هناك user
  }

  const formData = new FormData();
  formData.append('user', user); // الآن user مؤكد أنه string
  
  // التحقق من وجود Key وتحديد نوعها
  if (typeof productid === 'undefined' || productid === null) {
    console.error('Product key is missing');
    alert('المنتج غير محدد');
    return;
  }
  
  formData.append('product', productid.toString()); // تحويل Key إلى string

  axios.post("http://localhost:8000/addToCart/", formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  })
  .then(response => {
    console.log('تمت الإضافة بنجاح:', response.data);
    alert('تمت إضافة المنتج إلى السلة بنجاح');
  })
  .catch(error => {
    console.error('حدث خطأ:', error.response?.data || error.message);
    alert('فشلت إضافة المنتج إلى السلة: ' + (error.response?.data?.message || error.message));
  });
};
  const [imageError, setImageError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // محاكاة تحميل Skeleton
  if (loading) {
    return (
      <Card className={cn(
        "overflow-hidden",
        variant === "row" ? "flex-row items-center gap-4 h-32" : "min-h-64",
        className
      )} {...props}>
        <div className={cn(
          "bg-gray-200 animate-pulse",
          variant === "row" ? "w-40 h-full" : "w-full aspect-[4/3]"
        )} />
        <div className="flex-1 space-y-3 p-4">
          <div className="h-6 bg-gray-200 animate-pulse rounded" />
          <div className="h-4 bg-gray-200 animate-pulse rounded" />
          <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4" />
        </div>
      </Card>
    );
  }
  return (
    <Card 
      className={cn(
        "transition-all hover:shadow-lg hover:-translate-y-1",
        variant === "row" ? "flex-row items-center gap-4" : "",
        className
      )}
      {...props}
    >
      <div className={cn(
        "relative",
        variant === "row" ? "w-40 h-40" : "w-full aspect-[4/3]"
      )}>
        {imageError || !image ? (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400">No Image</span>
          </div>
        ) : (
         <Image
          src={`http://localhost:8000${image}`}
          alt={name}
          fill
          className="object-cover"
          unoptimized={process.env.NODE_ENV === 'development'} // مهم للتطوير المحلي
        />
        )}
      </div>

      <div className={cn(
        "p-4 flex flex-col",
        variant === "row" ? "flex-1" : ""
      )}>
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-montserrat font-semibold line-clamp-2">
            {name}
          </h3>
          <span className="text-lg font-semibold whitespace-nowrap ml-2">
            {price.toLocaleString()} SAR
          </span>
        </div>
        
        <p className="text-sm text-gray-600 line-clamp-3">
          {description}
        </p>
        
        {variant === 'col' && (
          <button className="mt-4 bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-lg transition-colors" onClick={addToCart}>
            add to basket
          </button>
        )}
      </div>
    </Card>
  );
}
