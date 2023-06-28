import type { VariantProps } from "./types";

const duration: number = 0.25;

export const sunRayPositions: { [key: string]: string }[] = [
  { x: "50%", y: "7%" },
  { x: "81%", y: "19%" },
  { x: "93%", y: "50%" },
  { x: "81%", y: "81%" },
  { x: "50%", y: "93%" },
  { x: "19%", y: "81%" },
  { x: "7%", y: "50%" },
  { x: "19%", y: "19%" },
];

export const sunDiscVariants = {
  animate: ({ isLight }: VariantProps) => ({
    r: isLight ? "45%" : "30%",
    transition: {
      delay: isLight ? 0.1 : 0,
      duration,
    },
  }),
};

export const sunMaskVariants = {
  animate: ({ isLight }: VariantProps) => ({
    r: isLight ? "40%" : "0%",
    cy: isLight ? "35%" : "40%",
    cx: isLight ? "75%" : "60%",
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
      delay: isLight ? 0.95 : 0,
      duration: 0.3,
    },
  }),
};

export const rayVariant = {
  animate: ({ isLight }: VariantProps) => ({
    scale: isLight ? 0 : 1,
    transition: {
      duration: 0.3,
    },
  }),
};
