import { colors } from "@/lib/stitches";

const glowTransitionPreset: {
  duration: number;
  repeat: number;
  repeatType: "reverse";
} = {
  duration: 2,
  repeat: Infinity,
  repeatType: "reverse",
};

const discTransitionPreset = {
  duration: 64,
  ease: "linear",
  repeat: Infinity,
};

export const discLoop = {
  clockwise: {
    animate: { rotateZ: ["0deg", "360deg"] },
    transition: discTransitionPreset,
  },
  counterClockwise: {
    animate: { rotateZ: ["360deg", "0deg"] },
    transition: discTransitionPreset,
  },
};

export const loop = {
  discFade: {
    initial: { rotateX: 60, scale: 0.9, opacity: 0 },
    animate: { opacity: [0.15, 0.2] },
    transition: glowTransitionPreset,
  },

  projectionFloat: {
    initial: {
      y: 0,
    },
    animate: {
      y: [0, -3],
    },
    transition: glowTransitionPreset,
  },

  ceilingGlow: {
    initial: {
      opacity: 0.3,
    },
    animate: {
      opacity: [0.3, 0.2],
    },
    transition: glowTransitionPreset,
  },

  ceilingLightRays: {
    initial: {
      stopOpacity: 0.1,
    },
    animate: {
      stopOpacity: [0.1, 0.05],
    },
    transition: glowTransitionPreset,
  },

  lightRays: {
    initial: {
      opacity: 0.3,
    },
    animate: {
      opacity: [0.3, 0.1],
    },
    transition: glowTransitionPreset,
  },

  terminalLightRays: {
    initial: {
      originY: 1,
      originX: 0,
      rotateZ: 0,
      opacity: 0.75,
    },
    animate: {
      opacity: [0.75, 0.5],
      rotateZ: [0, -3],
    },
    transition: glowTransitionPreset,
  },

  hologramShadowFade: {
    initial: {
      scale: 1,
      fill: colors.layer1,
    },
    animate: {
      scale: [1, 1.04],
    },
    transition: glowTransitionPreset,
  },

  terminalShadowFade: {
    initial: {
      originY: 0,
      originX: 0,
      scale: 1.04,
    },
    animate: {
      scale: [1.04, 1],
    },
    transition: glowTransitionPreset,
  },

  hologramFloorGlow: {
    initial: {
      scale: 1,
      opacity: 0.3,
    },
    animate: {
      opacity: [0.3, 0.25],
      scale: [1, 0.95],
    },
    transition: glowTransitionPreset,
  },

  terminalFloorGlow: {
    initial: {
      scale: 1,
      opacity: 0.3,
    },
    animate: {
      opacity: [0.75, 0.4],
      scale: [1, 0.9],
    },
    transition: glowTransitionPreset,
  },

  bevelGlow: {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: [1, 0.33],
    },
    transition: glowTransitionPreset,
  },

  innerGlow: {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: [0.9, 0.5],
    },
    transition: glowTransitionPreset,
  },
};
