import { ToggleGroup, ToggleGroupItem } from "@/components/ui/ToggleGroup";

export default function CategoriesToggleGroup() {
  return (
    <ToggleGroup type="single" defaultValue="all" className="mb-4 justify-start gap-4 md:justify-center">
      <ToggleGroupItem size="small" value="all">
        <div className="size-6 rounded-lg bg-secondary transition group-data-[state=on]:bg-white" /> All Category
      </ToggleGroupItem>
      <ToggleGroupItem size="small" value="technical">
        <div className="size-6 rounded-lg bg-secondary transition group-data-[state=on]:bg-white" /> Technical
      </ToggleGroupItem>
      <ToggleGroupItem size="small" value="furniture">
        <div className="size-6 rounded-lg bg-secondary transition group-data-[state=on]:bg-white" /> Furniture
      </ToggleGroupItem>
      <ToggleGroupItem size="small" value="vehicles">
        <div className="size-6 rounded-lg bg-secondary transition group-data-[state=on]:bg-white" /> vehicles
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
