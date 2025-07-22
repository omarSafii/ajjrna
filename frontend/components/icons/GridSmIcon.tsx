import { SVGProps } from "react";

export default function GridSmIcon({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="49"
      height="49"
      viewBox="0 0 49 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x="10.0508"
        y="10.0513"
        width="12.5641"
        height="12.5641"
        rx="5"
        fill="currentColor"
      />
      <rect
        x="10.0508"
        y="26.3846"
        width="12.5641"
        height="12.5641"
        rx="5"
        fill="currentColor"
      />
      <rect
        x="26.3848"
        y="10.0513"
        width="12.5641"
        height="12.5641"
        rx="5"
        fill="currentColor"
      />
      <rect
        x="26.3848"
        y="26.3846"
        width="12.5641"
        height="12.5641"
        rx="5"
        fill="currentColor"
      />
    </svg>
  );
}
