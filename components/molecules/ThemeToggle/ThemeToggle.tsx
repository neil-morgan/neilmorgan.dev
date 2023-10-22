"use client";

import { motion } from "framer-motion";
import { Svg } from "./styles";
import {
  raysGroupVariant,
  rayVariant,
  sunDiscVariants,
  sunMaskVariants,
  sunRayPositions,
} from "./config";
import type { ThemeToggleProps } from "./types";
import { ThemeConsumer } from "@/lib/stitches";
import { IconButton } from "@/components/atoms";

export const ThemeToggle = ({ css }: ThemeToggleProps) => (
  <ThemeConsumer>
    {({ cycleToggleMode, colorMode }) => {
      const isLight = colorMode === "light";

      return (
        <IconButton
          priority="contrast"
          onClick={cycleToggleMode}
          css={css}
          icon={<AnimatedSunIcon isLight={isLight} />}
        />
      );
    }}
  </ThemeConsumer>
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
