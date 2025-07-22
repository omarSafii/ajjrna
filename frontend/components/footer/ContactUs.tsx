import ArrowRightIcon from "@/components/icons/ArrowRightIcon";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import forRent from "/public/images/for-rent.png";

export default function ContactUs() {
  return (
    <div className="flex items-center gap-4 place-self-center rounded-2xl bg-[#1D3A53] p-4">
      <Image src={forRent} alt="contact us" className="max-sm:w-28" />
      <div>
        <h2 className="mb-4 font-montserrat text-lg font-semibold md:text-xl">Want to rent anything?</h2>
        <Button asChild variant="link" className="group gap-1.5 font-semibold text-primary">
          <Link href="#">
            Contact us
            <ArrowRightIcon className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
