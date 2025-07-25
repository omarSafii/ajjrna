import { SVGProps } from "react";

export default function MapPinIcon({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="12"
      height="16"
      viewBox="0 0 12 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.6847 0.524717C2.51759 0.679284 0 3.14756 0 6.1699C0 7.44524 0.448445 8.62182 1.20453 9.56764H1.20441L5.26483 14.7089C5.63125 15.1728 6.3687 15.1728 6.73512 14.7089L10.7955 9.56753H10.7954C11.4888 8.7003 11.9234 7.63904 11.9908 6.48546C12.1863 3.14015 9.23604 0.351511 5.6847 0.524717ZM9.16646 6.33294C9.16646 8.02818 7.7487 9.40244 5.9998 9.40244C4.2509 9.40244 2.83313 8.02818 2.83313 6.33294C2.83313 4.63769 4.2509 3.26343 5.9998 3.26343C7.7487 3.26343 9.16646 4.63769 9.16646 6.33294Z"
        fill="#FFAF44"
      />
    </svg>
  );
}
