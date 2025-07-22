import { SVGProps } from "react";

export default function FacebookIcon({ ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <rect x="0.5" y="0.5" width="29" height="29" rx="14.5" stroke="white" />
      <path
        d="M22.5 15.0188C22.5 10.8684 19.14 7.5 15 7.5C10.86 7.5 7.5 10.8684 7.5 15.0188C7.5 18.6579 10.08 21.688 13.5 22.3872V17.2744H12V15.0188H13.5V13.1391C13.5 11.688 14.6775 10.5075 16.125 10.5075H18V12.7632H16.5C16.0875 12.7632 15.75 13.1015 15.75 13.515V15.0188H18V17.2744H15.75V22.5C19.5375 22.1241 22.5 18.9211 22.5 15.0188Z"
        fill="white"
      />
    </svg>
  );
}
