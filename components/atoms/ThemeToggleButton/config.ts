import type { VariantProps } from "./types";

const duration: number = 0.25;

export const sunRayPositions: { [key: string]: string }[] = [
  { x: "50%", y: "8%" },
  { x: "88%", y: "28%" },
  { x: "88%", y: "71%" },
  { x: "50%", y: "92%" },
  { x: "12%", y: "71%" },
  { x: "12%", y: "28%" },
];

export const sunDiscVariants = {
  animate: ({ isLight }: VariantProps) => ({
    r: isLight ? "45%" : "25%",
    transition: {
      delay: isLight ? 0.1 : 0,
      duration,
    },
  }),
};

export const sunMaskVariants = {
  animate: ({ isLight }: VariantProps) => ({
    r: isLight ? "40%" : "0%",
    cy: isLight ? "35%" : "20%",
    cx: isLight ? "75%" : "95%",
    transition: {
      delay: isLight ? 0.1 : 0,
      duration,
    },
  }),
};

export const raysGroupVariant = {
  animate: ({ isLight }: VariantProps) => ({
    scale: isLight ? 0.95 : 1,
    transition: {
      duration: 0.1,
    },
  }),
};

export const rayVariant = {
  animate: ({ isLight }: VariantProps) => ({
    opacity: isLight ? 0 : 1,
    transition: {
      duration: 0.3,
    },
  }),
};
