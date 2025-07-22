import ActiveLink from "@/components/ui/ActiveLink";
import navigation from "@/config/navigation";

export default function Navlinks() {
  return (
    <ul className="flex gap-2 lg:gap-4">
      {navigation.map(({ name, href }) => (
        <li key={name}>
          <ActiveLink href={href} className="text-sm lg:text-base" activeClassName="text-primary">
            {name}
            <div className="pointer-events-none absolute -bottom-5 start-0 h-1 w-full bg-primary opacity-0 transition-opacity group-data-[active=true]:opacity-100" />
          </ActiveLink>
        </li>
      ))}
    </ul>
  );
}
