import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import Input from "@/components/ui/Input";

export default function Mailing() {
  return (
    <div className="place-self-center">
      <div className="mb-4 text-lg font-medium">Keep yourself Up to date</div>
      <div className="mb-4 flex items-center rounded-3xl bg-[#1D3A53]">
        <Input placeholder="Enter Your Mail id" className="flex-1 bg-transparent p-1.5 px-4 placeholder:text-white" />
        <Button className="rounded-3xl">Send</Button>
      </div>
      <div className="flex items-center gap-[0.5625rem]">
        <Checkbox id="terms" />
        <label htmlFor="terms">I agree with the terms & conditions</label>
      </div>
    </div>
  );
}
