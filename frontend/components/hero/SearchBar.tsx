"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import HouseIcon from "@/components/icons/HouseIcon";
import MapPinIcon from "@/components/icons/MapPinIcon";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { Select, SelectTrigger } from "@/components/ui/Select";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    // تنقل للصفحة مع باراميتر البحث
    router.push(`/products?search=${encodeURIComponent(query)}`);
  };

  return (
    <div className="mb-4 flex flex-col gap-4 rounded-[1.75rem] bg-background-03 p-4 md:mb-10 md:flex-row">
      <Input
        placeholder="Enter Key Word"
        className="flex-1"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Select>
        <SelectTrigger size="lg" className="flex-1">
          <HouseIcon />
          Product Type
        </SelectTrigger>
      </Select>
      <Select>
        <SelectTrigger size="lg" className="flex-1">
          <MapPinIcon />
          Location
        </SelectTrigger>
      </Select>
      <Button className="flex-1" onClick={handleSearch}>
        Search Product
      </Button>
    </div>
  );
}
