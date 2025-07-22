import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";
import agent_image from "../app/static/agent_image.png";

const agents = [
  { avatar: agent_image, name: "Leon Richards", role: "Preshampton Agent" },
  { avatar: agent_image, name: "Javion Leblanc", role: "Preshampton Agent" },
  { avatar: agent_image, name: "Arnav Gillespie", role: "Preshampton Agent" },
  { avatar: agent_image, name: "Edward Richardson", role: "Preshampton Agent" },
  { avatar: agent_image, name: "Leslie Gibson", role: "Preshampton Agent" },
  { avatar: agent_image, name: "Zak Thompson", role: "Preshampton Agent" },
];

export default function Agents() {
  return (
    <section className="container py-16 text-center">
      <SectionHeading title="Property Partners" subTitle="Meet Our Expert Agents." />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:flex-row lg:grid-cols-6 lg:gap-6">
        {agents.map(({ name, role, avatar }) => (
          <div key={name}>
            <div className="mb-2 rounded-full bg-background-03 p-2 transition hover:drop-shadow-base">
              <Image src={avatar} alt={name} className="size-full rounded-full" />
            </div>
            <p className="mb-2 font-jost font-semibold">{name}</p>
            <p className="font-jost text-sm text-text-body md:text-base">{role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
