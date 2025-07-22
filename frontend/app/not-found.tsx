import Button from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/images/logo.png";

export default function NotFound() {
  return (
    <section className="bg-gradient-to-tr from-[#EAF0F5] to-[#868C92] py-16">
      <div className="container flex flex-col items-center justify-between sm:flex-row  ">
        <div className="sm:w-1/2">
          <span className="mb-2 font-jost text-7xl font-bold md:text-9xl">404</span>
          <SectionHeading
            title="Page Not Found"
            titleClassName="text-start"
            subTitle="Looks Like You've Strayed from the Path. Let's Get You Back On Track."
            subtitleClassName="text-start mb-2 md:mb-2"
          />
          <p className="mb-2 max-w-prose font-montserrat font-semibold text-text-body">
            It's all right, there's nothing wrong with it, no matter what. If this happens again, it will come back to you. This is what happens
          </p>
          <Button asChild size="lg">
            <Link href="/">Search Product</Link>
          </Button>
        </div>
        <div className="grid place-items-center sm:w-1/2">
          <Image src={logo} alt="logo" className="hidden sm:block" />
        </div>
      </div>
    </section>
  );
}
