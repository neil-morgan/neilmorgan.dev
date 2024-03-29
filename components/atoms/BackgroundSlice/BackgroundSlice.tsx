import { Wrapper, Svg } from "./styles";
import type { BackgroundSliceProps } from "./types";
import { colors } from "@/lib/stitches";

export const BackgroundSlice = ({ reverse }: BackgroundSliceProps) => (
  <Wrapper reverse={reverse}>
    <Svg viewBox="0 0 1920 400">
      <defs>
        <linearGradient
          id="highlight"
          gradientUnits="userSpaceOnUse"
          x1={0}
          y1={-100}
          x2={1920}
          y2={-100}
          gradientTransform="matrix(1 0 0 1 0 300)">
          <stop offset="0.1" style={{ stopColor: colors.primary1 }} />
          <stop offset="0.5" style={{ stopColor: colors.primary2 }} />
        </linearGradient>
        <linearGradient
          id="highlight-glow"
          gradientUnits="userSpaceOnUse"
          x1="898.4454"
          y1="-366.622"
          x2="1041.772"
          y2="254.1935"
          gradientTransform="matrix(1 0 0 1 0 300)">
          <stop
            offset={0}
            style={{ stopColor: colors.primary1, stopOpacity: 0.37 }}
          />
          <stop
            offset="0.35"
            style={{ stopColor: colors.layer2, stopOpacity: 0 }}
          />
        </linearGradient>

        <clipPath id="myClip">
          <path
            d="M0,100 L1920,0 L0,0 v100 z"
            fillRule="evenodd"
            fill="#ffffff"
          />
        </clipPath>
      </defs>

      <path
        clipPath="url(#myClip)"
        fill="url(#highlight)"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1920,100L0,0v100H1920z"
      />

      <path
        fill={`${colors.layer2}05`}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0,100L1920,0v110H0V100z"
      />

      <path
        fill="url(#highlight-glow)"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0,100L1920,0v400H0V100z"
      />
    </Svg>
  </Wrapper>
);
