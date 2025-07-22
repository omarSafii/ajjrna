import Card from "@/components/ui/Card";
import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";
import fetaures_icon_1 from "/public/images/Features_icon_1.png";
import fetaures_icon_2 from "/public/images/Features_icon_2.png";
import fetaures_icon_3 from "/public/images/Features_icon_3.png";
import fetaures_icon_4 from "/public/images/Features_icon_4.png";
import fetaures_icon_5 from "/public/images/Features_icon_5.png";
import fetaures_icon_6 from "/public/images/Features_icon_6.png";

export default function Features() {
  const features = [
    { label: "Available all the time", icon: fetaures_icon_1 },
    { label: "High quality", icon: fetaures_icon_2 },
    { label: "Modern products", icon: fetaures_icon_3 },
    { label: "Credibility", icon: fetaures_icon_4 },
    { label: "Response speed", icon: fetaures_icon_5 },
    { label: "Good experience", icon: fetaures_icon_6 },
  ];
  return (
    <section className="bg-background-02 py-16">
      <div className="container">
        <SectionHeading title="Features" subTitle="A Showcase of Quality and Craftsmanship" />
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ label, icon }, i) => (
            <Card key={label} asChild className="group flex-row items-center justify-between gap-3 rounded-4xl">
              <li>
                <span className="font-jost text-2xl font-semibold text-primary group-even:text-secondary">0{i + 1}</span>
                <p className="text-center font-montserrat font-semibold">{label}</p>
                <div className="flex size-10 items-center justify-center rounded-full bg-background-01 p-2">
                  <Image src={icon} alt="features icon" />
                </div>
              </li>
            </Card>
          ))}
        </ul>
      </div>
    </section>
  );
}
