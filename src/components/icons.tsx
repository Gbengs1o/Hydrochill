import type { SVGProps } from 'react';

export function HydroChillLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 40"
      width="100"
      height="20"
      {...props}
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontSize="28"
        fontWeight="800"
        fill="currentColor"
        letterSpacing="2"
      >
        HYDROCHILL
      </text>
    </svg>
  );
}
