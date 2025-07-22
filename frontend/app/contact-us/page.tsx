import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import SectionHeading from "@/components/ui/SectionHeading";
import { GlobeIcon, MailIcon, MapPinIcon, PhoneCallIcon } from "lucide-react";
import Image from "next/image";
import map_image from "/public/images/contactUs_image.png";

export default function ContactUsPage() {
  const contacts = [
    { Icon: GlobeIcon, label: "Have Quires ?", address: "WWW.ajjrna.com" },
    { Icon: PhoneCallIcon, label: "Mobile Number", address: "050123456788" },
    { Icon: MapPinIcon, label: "Our Location", address: "Saudia Arabia , Riydh" },
    { Icon: MailIcon, label: "Contact Support", address: "Support@ajjrna.com" },
  ];

  return (
    <section className="container py-24 pt-8 md:pt-32">
      <Image src={map_image} alt="map image" className="mb-8 md:mb-16" />
      <div className="flex flex-col gap-6 lg:flex-row">
        <div>
          <SectionHeading title="Contact Us" titleClassName="text-start" subTitle="Get in Touch and Explore." subtitleClassName="text-start" />
          <ul className="grid grid-cols-2 gap-2 md:gap-4">
            {contacts.map(({ label, address, Icon }) => (
              <li key={label} className="flex items-center gap-2">
                <Card className="aspect-square items-center justify-center rounded-full p-2">
                  <Icon className="size-4 text-primary md:size-6" />
                </Card>
                <div>
                  <p className="mb-1 font-montserrat text-sm font-semibold md:text-base">{label}</p>
                  <address className="font-jost text-xs not-italic text-text-body md:text-sm">{address}</address>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Card asChild className="grid flex-1 grid-cols-1 gap-2 hover:drop-shadow-none md:grid-cols-2 md:gap-4">
          <form>
            <div>
              <label htmlFor="name" className="mb-1 block font-jost font-semibold">
                Name
              </label>
              <Input type="text" id="Name" placeholder="Mohammad kareem" />
            </div>
            <div>
              <label htmlFor="name" className="mb-1 block font-jost font-semibold">
                Email
              </label>
              <Input type="email" id="email" placeholder="your@email.com" />
            </div>
            <div>
              <label htmlFor="Subject" className="mb-1 block font-jost font-semibold">
                Subject
              </label>
              <Input type="text" placeholder="Enter subject" id="Subject" />
            </div>
            <div>
              <label htmlFor="Message" className="mb-1 block font-jost font-semibold">
                Additional Message
              </label>
              <textarea
                id="Additional Message"
                placeholder="Please write any note here..."
                rows={7}
                className="w-full rounded-2xl border border-solid border-line bg-background-01 font-jost text-base text-text-body"
              />
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
}
