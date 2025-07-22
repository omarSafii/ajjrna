import { SVGProps } from "react";

export default function PhoneIcon({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0439 12.9085C8.03769 11.9066 5.45855 8.8914 4.97177 6.98146C5.8758 5.76919 6.63593 6.36423 7.11703 5.11628C7.13846 5.05805 8.44399 -1.11505 3.42526 0.178023C-7.45719 3.04075 10.4716 23.9846 17.2507 16.3263C20.3324 12.7699 12.9169 11.8127 12.8474 11.8127C11.2798 11.7905 11.7133 12.5821 10.0439 12.9085Z"
        fill="#FFAF44"
      />
    </svg>
  );
}
