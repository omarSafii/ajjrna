import ContactUs from "@/components/footer/ContactUs";
import Copyright from "@/components/footer/Copyright";
import Introduction from "@/components/footer/Introduction";
import Mailing from "@/components/footer/Mailing";
import Navlinks from "@/components/footer/Navlinks";
import Separator from "@/components/ui/Separator";

export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] pt-16 text-white md:pt-24">
      <div className="container">
        <div className="mb-6 grid gap-8 sm:grid-cols-2 md:grid-rows-2 md:gap-4 lg:grid-cols-3">
          <Introduction />
          <ContactUs />
          <Mailing />
          <Navlinks />
        </div>
        <Separator className="bg-[#1D3A53]" />
        <Copyright />
      </div>
    </footer>
  );
}
