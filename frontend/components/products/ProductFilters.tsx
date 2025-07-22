import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/Select";
import { useState, useEffect } from "react";

export default function ProductFilters() {
  return (
    <div className="flex gap-2 md:flex-1">
      <Select>
        <SelectTrigger className="max-w-32 font-semibold">
          <SelectValue placeholder="All Filters" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="filter 1">Fliter 1</SelectItem>
          <SelectItem value="filter 2">Fliter 2</SelectItem>
          <SelectItem value="filter 3">Fliter 3</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="max-w-32 font-semibold">
          <SelectValue placeholder="Sort By" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="sort 1">Sort 1</SelectItem>
          <SelectItem value="sort 2">Sort 2</SelectItem>
          <SelectItem value="sort 3">Sort 3</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
