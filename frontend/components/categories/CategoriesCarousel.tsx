// "use client";
// import CategoryCarouselCard from "@/components/categories/CategoryCarouselCard";
// import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/Carousel";
// import Section from "@/components/ui/Section";
// import SectionHeading from "@/components/ui/SectionHeading";
// import { useEffect, useState } from "react";
// import cars from "/public/images/mock/image-1.png";
// import apartment from "/public/images/mock/image-4.png";
// import industrial from "/public/images/mock/image-5.png";
// import electronics from "/public/images/mock/image-6.png";

// const categories = [
//   { category: "Electronics", image: electronics },
//   { category: "Industrial equipment", image: industrial },
//   { category: "Apartment", image: apartment },
//   { category: "Cars", image: cars },
//   { category: "Furniture", image: electronics },
//   { category: "Furniture", image: electronics },
//   { category: "Furniture", image: electronics },
//   { category: "Electronics", image: electronics },
//   { category: "Industrial equipment", image: industrial },
//   { category: "Apartment", image: apartment },
//   { category: "Cars", image: cars },
//   { category: "Furniture", image: electronics },
//   { category: "Furniture", image: electronics },
//   { category: "Furniture", image: electronics },
// ];
// /*
// api link : http://localhost:8000/categories/
// data in the category : CateName(varchar) , image(file)
// */
// export default function CategoriesCarousel() {
//   const [api, setApi] = useState<CarouselApi>();
//   const [currentSlide, setCurrentSlide] = useState(0);
//   useEffect(() => {
//     if (!api) return;
//     api.on("select", () => {
//       setCurrentSlide(api.selectedScrollSnap());
//     });
//   }, [api]);

//   return (
//     <Section className="bg-black">
//       <SectionHeading title="The Best" subTitle="Discover Your Dream Products!" subtitleClassName="text-white" />
//       <Carousel setApi={setApi}>
//         <CarouselContent className="-ms-0 items-center">
//           {categories.map(({ category, image }, i) => (
//             <CarouselItem key={i} className="basis-48 ps-0 md:basis-1/4 lg:basis-1/5 xl:basis-1/6">
//               <CategoryCarouselCard category={category} image={image} />
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//       </Carousel>
//     </Section>
//   );
// }

"use client";
import axios from 'axios'; // استيراد axios
import CategoryCarouselCard from "@/components/categories/CategoryCarouselCard";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/Carousel";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { useEffect, useState } from "react";

interface Category {
  id: number; // تأكد من وجود id
  CateName: string;
  image: string;
}

export default function CategoriesCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('http://localhost:8000/categories/')
      .then(response => {
        // تأكد من أن البيانات تأتي بالشكل الصحيح
        setCategories(response.data.categories); // تعديل هنا ليتناسب مع هيكل البيانات
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
        if (error.response) {
          setError(`Failed to load categories: ${error.response.status}`);
        } else if (error.request) {
          setError('No response from server');
        } else {
          setError('Failed to load categories');
        }
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!api) return;
    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);

  if (isLoading) {
    return <div>Loading categories...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Section className="bg-black">
      <SectionHeading 
        title="The Best" 
        subTitle="Discover Your Dream Products!" 
        subtitleClassName="text-white" 
      />
      <Carousel setApi={setApi}>
        <CarouselContent className="-ms-0 items-center">
          {categories.map((category) => (
            <CarouselItem 
              key={category.id} // تأكد من وجود id
              className="basis-48 ps-0 md:basis-1/4 lg:basis-1/5 xl:basis-1/6"
            >
             <CategoryCarouselCard 
            category={category.CateName} 
            image={`${category.image}`} 
            />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Section>
  );
}
