import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

export default function FaqForm() {
  return (
    <form className="space-y-6">
      <div className="font-montserrat text-2xl font-semibold text-black">Didn’t find answer ?</div>
      <div>
        <Input placeholder="Your Name" />
      </div>
      <div>
        <Input placeholder="Your Email" />
      </div>
      <div>
        <Input placeholder="Mobile Number" />
      </div>
      <div>
        <Input placeholder="Additional Message" />
      </div>
      <Button className="w-full">Submit</Button>
    </form>
  );
}
