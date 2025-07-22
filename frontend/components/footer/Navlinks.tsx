import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Navlinks() {
  return (
    <nav className="grid grid-cols-2 justify-between gap-4 max-sm:order-first md:col-span-2 md:grid-cols-4 md:flex-row md:gap-8">
      {groups.map(({ title, links }) => (
        <div key={title}>
          <h2 className="mb-4 font-montserrat font-medium md:text-lg">{title}</h2>
          <ul className="space-y-4">
            {links.map(({ name, href }) => (
              <li key={name}>
                <Button variant="link" asChild>
                  <Link href={href}>{name}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}

const groups = [
  {
    title: "Pages",
    links: [
      { name: "Home 01", href: "#" },
      { name: "Home 02", href: "#" },
      { name: "Home 03", href: "#" },
      { name: "Home 04", href: "#" },
      { name: "Home 05", href: "#" },
    ],
  },
  {
    title: "Inner pages",
    links: [
      { name: "Product Listing", href: "#" },
      { name: "Product Detail", href: "#" },
      { name: "Product Plans", href: "#" },
      { name: "locate Product", href: "#" },
      { name: "Agent", href: "#" },
      { name: "Product Gallery", href: "#" },
    ],
  },
  {
    title: "Utility pages",
    links: [
      { name: "Start Here", href: "#" },
      { name: "Style guide", href: "#" },
      { name: "Password Page", href: "#" },
      { name: "404 Not Found", href: "#" },
      { name: "Lisences", href: "#" },
    ],
  },
  {
    title: "Quick links",
    links: [
      { name: "Terms of use", href: "#" },
      { name: "Privacy policy", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Our Services", href: "#" },
      { name: "Contact Support", href: "#" },
    ],
  },
];
