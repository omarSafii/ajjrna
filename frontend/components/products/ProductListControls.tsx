import GridLgIcon from "@/components/icons/GridLgIcon";
import GridMdIcon from "@/components/icons/GridMdIcon";
import GridSmIcon from "@/components/icons/GridSmIcon";
import ListIcon from "@/components/icons/ListIcon";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/ToggleGroup";
import { useState, useEffect } from "react";


type ProductListControlsProps = {
  gridColumnCount: number;
  onGridColumnCountChange: (value: number) => void;
};

export default function ProductListControls({ gridColumnCount, onGridColumnCountChange }: ProductListControlsProps) {
  const handleChange = (value: string) => {
    onGridColumnCountChange(+value);
  };

  return (
    <ToggleGroup value={gridColumnCount.toString()} onValueChange={handleChange} type="single" className="hidden sm:flex md:flex-1 md:justify-end">
      <ToggleGroupItem className="p-1 text-text-body data-[state=on]:bg-background-03 data-[state=on]:text-primary md:p-1" value="1">
        <ListIcon className="size-8" />
      </ToggleGroupItem>
      <ToggleGroupItem className="p-1 text-text-body data-[state=on]:bg-background-03 data-[state=on]:text-primary md:p-1" value="2">
        <GridSmIcon className="size-8" />
      </ToggleGroupItem>
      <ToggleGroupItem className="hidden p-1 text-text-body data-[state=on]:bg-background-03 data-[state=on]:text-primary md:block md:p-1" value="3">
        <GridMdIcon className="size-8" />
      </ToggleGroupItem>
      <ToggleGroupItem className="hidden p-1 text-text-body data-[state=on]:bg-background-03 data-[state=on]:text-primary md:p-1 lg:block" value="4">
        <GridLgIcon className="size-8" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
