"use client";

import { ThemeToggleContext } from "@/lib/stitches";
import { ToggleButton, Svg } from "./styles";
import { motion } from "framer-motion";
import {
  raysGroupVariant,
  rayVariant,
  sunDiscVariants,
  sunMaskVariants,
  sunRayPositions,
} from "./config";

export const ThemeToggleButton = () => (
  <ThemeToggleContext.Consumer>
    {({ cycleToggleMode, colorMode }) => {
      const isLight = colorMode === "light";

      return (
        <ToggleButton onClick={cycleToggleMode}>
          <AnimatedSunIcon isLight={isLight} />
        </ToggleButton>
      );
    }}
  </ThemeToggleContext.Consumer>
);

export const AnimatedSunIcon = ({ isLight }: { isLight: boolean }) => (
  <Svg as={motion.svg}>
    <defs>
      <mask id="mask">
        <rect fill="white" x="0%" y="0%" width="100%" height="100%" />
        <motion.circle
          animate="animate"
          custom={{ isLight }}
          fill="black"
          initial="hidden"
          variants={sunMaskVariants}
        />
      </mask>
    </defs>
    <motion.circle
      animate="animate"
      custom={{ isLight, radius: "45%" }}
      cx="50%"
      cy="50%"
      fill="currentColor"
      mask="url(#mask)"
      variants={sunDiscVariants}
    />

    <motion.g
      animate="animate"
      custom={{ isLight }}
      variants={raysGroupVariant}>
      {sunRayPositions.map(({ x, y }, key) => (
        <motion.circle
          animate="animate"
          custom={{ isLight }}
          cx={x}
          cy={y}
          fill="currentColor"
          key={key}
          r="8%"
          variants={rayVariant}
        />
      ))}
    </motion.g>
  </Svg>
);
