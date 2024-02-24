import { colors } from "@/lib/stitches";

export const glowTransitionPreset: {
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

const stepEndDelay = 1;

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

  towerFloorGlow: {
    initial: {
      stopOpacity: 1,
    },
    animate: {
      stopOpacity: [1, 0.33],
    },
    transition: glowTransitionPreset,
  },

  towerRightGlow: {
    initial: {
      stopOpacity: 1,
    },
    animate: {
      stopOpacity: [1, 0.75],
    },
    transition: glowTransitionPreset,
  },

  towerRoofGlow: {
    initial: {
      stopOpacity: 1,
    },
    animate: {
      stopOpacity: [1, 0.66],
    },
    transition: glowTransitionPreset,
  },
};

const mainSequence = {
  drone: {
    droneX: {
      droneStart: {
        opacity: [0, 1],
        scaleY: [0, 1],
        transition: {
          duration: 0.5,
          ease: "easeInOut",
        },
      },

      droneR1: {
        rotateZ: ["0deg", "15deg", "-10deg", "0deg"],
        transition: {
          duration: 3.25,
          ease: "easeInOut",
        },
      },
      droneX1: {
        x: 49,
        transition: {
          delay: 0.25,
          duration: 3,
          ease: "easeInOut",
        },
      },
      droneR2: {
        rotateZ: ["0deg", "-15deg", "10deg", "0deg"],
        transition: {
          delay: 0.1,
          duration: 3.75,
          ease: "easeInOut",
        },
      },
      droneX2: {
        x: -49,
        transition: {
          duration: 4,
          ease: "easeInOut",
        },
      },
      droneX3: {
        x: 0,
        transition: {
          delay: 1,
          duration: 3,
          ease: "easeInOut",
        },
      },
      droneR3: {
        rotateZ: ["0deg", "15deg", "-10deg", "0deg"],
        transition: {
          delay: 0.75,
          duration: 3.25,
          ease: "easeInOut",
        },
      },
    },
    droneY: {
      droneY1: {
        y: 20,
        transition: {
          delay: 1,
          duration: 2,
          ease: "easeInOut",
        },
      },
      droneY2: {
        y: [20, 0, 20],
        transition: {
          duration: 4,
          ease: "easeInOut",
        },
      },
      droneY3: {
        y: 0,
        transition: {
          duration: 3,
          ease: "easeInOut",
        },
      },
    },
  },

  group1: {
    position: {
      step2Start: {
        x: 49,
        scale: 0.8,
        opacity: 0.66,
        transition: {
          duration: 0.25,
          ease: "easeInOut",
        },
      },
      step2End: {
        x: 0,
        scale: 1,
        opacity: 1,
        transition: {
          delay: stepEndDelay + 0.8,
          duration: 0.25,
          ease: "easeInOut",
        },
      },
      step3Start: {
        x: 49,
        scale: 0.8,
        opacity: 0.66,
        transition: {
          duration: 0.25,
          ease: "easeInOut",
        },
      },
      step3End: {
        x: 0,
        scale: 1,
        opacity: 1,
        transition: {
          delay: stepEndDelay + 0.85,
          duration: 0.25,
          ease: "easeInOut",
        },
      },
    },
    focus: {
      step1Start: {
        opacity: 0.75,
        transition: {
          duration: 0.25,
          ease: "easeInOut",
        },
      },
      step1End: {
        opacity: 0.1,
        transition: {
          delay: stepEndDelay,
          duration: 0.25,
          ease: "easeInOut",
        },
      },
    },
    graphics: {
      graphic1: {
        step1Start: {
          scale: 0.8,
          opacity: 1,
          transition: {
            delay: 0.25,
            duration: 0.5,
            ease: "easeInOut",
          },
        },
        step1End: {
          scale: 0,
          opacity: 0,
          transition: {
            delay: stepEndDelay + 0.25,
            duration: 0.5,
            ease: "easeInOut",
          },
        },
        part1: {
          step1Start: {
            x: 3,
            y: -2,
            opacity: 0.82,
            transition: {
              delay: 0.35,
              duration: 0.25,
              ease: "easeInOut",
            },
          },
          step1End: {
            x: 0,
            y: 0,
            opacity: 0.5,
            transition: {
              delay: stepEndDelay - 0.1,
              duration: 0.25,
              ease: "easeInOut",
            },
          },
        },
        part2: {
          step1Start: {
            x: 3,
            y: 2,
            opacity: 0.66,
            transition: {
              delay: 0.45,
              duration: 0.25,
              ease: "easeInOut",
            },
          },
          step1End: {
            x: 0,
            y: 0,
            opacity: 0.5,
            transition: {
              delay: stepEndDelay - 0.2,
              duration: 0.25,
              ease: "easeInOut",
            },
          },
        },
      },
      graphic2: {
        step1Start: {
          strokeDashoffset: [100, 34],
          transition: {
            duration: 0.85,
            ease: "easeInOut",
          },
        },
        step1End: {
          strokeDashoffset: [34, 100],
          transition: {
            delay: stepEndDelay,
            duration: 0.85,
            ease: "easeInOut",
          },
        },
      },
    },
  },

  group2: {
    position: {
      step1Start: {
        x: -49,
        scale: 0.8,
        opacity: 0.66,
        transition: {
          duration: 0.25,
          ease: "easeInOut",
        },
      },
      step1End: {
        x: 0,
        scale: 1,
        opacity: 1,
        transition: {
          delay: stepEndDelay + 0.7,
          duration: 0.25,
          ease: "easeInOut",
        },
      },
      step3Start: {
        x: -49,
        scale: 0.8,
        opacity: 0.66,
        transition: {
          duration: 0.25,
          ease: "easeInOut",
        },
      },
      step3End: {
        x: 0,
        scale: 1,
        opacity: 1,
        transition: {
          delay: stepEndDelay + 0.85,
          duration: 0.25,
          ease: "easeInOut",
        },
      },
    },
    focus: {
      step2Start: {
        opacity: 0.75,
        transition: {
          duration: 0.25,
          ease: "easeInOut",
        },
      },
      step2End: {
        opacity: 0.1,
        transition: {
          delay: stepEndDelay,
          duration: 0.25,
          ease: "easeInOut",
        },
      },
    },
    graphics: {
      graphic1: {
        step2Start: {
          transition: {
            delayChildren: 0.25,
            staggerChildren: 0.2,
            ease: "easeInOut",
          },
        },
        part1: {
          step2Start: {
            strokeDashoffset: [100, 75],
            transition: {
              duration: 0.25,
              ease: "easeInOut",
            },
          },
          step2End: {
            strokeDashoffset: [75, 100],
            transition: {
              delay: stepEndDelay,
              duration: 0.8,
              ease: "easeInOut",
            },
          },
        },
      },
      graphic2: {
        step2Start: {
          strokeDashoffset: [100, 0],
          transition: {
            duration: 1,
            ease: "easeIn",
          },
        },
        step2End: {
          strokeDashoffset: [0, 100],
          transition: {
            delay: stepEndDelay,
            duration: 0.6,
            ease: "easeIn",
          },
        },
      },
      graphic3: {
        step2Start: {
          strokeDashoffset: [100, 200],
          transition: {
            duration: 1,
            ease: "easeOut",
          },
        },
        step2End: {
          strokeDashoffset: [0, 100],
          transition: {
            delay: stepEndDelay,
            duration: 0.6,
            ease: "easeIn",
          },
        },
      },
    },
  },

  group3: {
    position: {
      step1Start: {
        x: -49,
        scale: 0.8,
        opacity: 0.66,
        transition: {
          duration: 0.25,
          ease: "easeInOut",
        },
      },
      step1End: {
        x: 0,
        scale: 1,
        opacity: 1,
        transition: {
          delay: stepEndDelay + 0.7,
          duration: 0.25,
          ease: "easeInOut",
        },
      },
      step2Start: {
        x: 49,
        scale: 0.8,
        opacity: 0.66,
        transition: {
          duration: 0.25,
          ease: "easeInOut",
        },
      },
      step2End: {
        x: 0,
        scale: 1,
        opacity: 1,
        transition: {
          delay: stepEndDelay + 0.8,
          duration: 0.25,
          ease: "easeInOut",
        },
      },
    },
    focus: {
      step3Start: {
        opacity: 0.75,
        transition: {
          duration: 0.25,
          ease: "easeInOut",
        },
      },
      step3End: {
        opacity: 0.1,
        transition: {
          delay: stepEndDelay + 0.65,
          duration: 0.25,
          ease: "easeInOut",
        },
      },
    },
    graphics: {
      graphic1: {
        step3Start: {
          strokeDashoffset: [200, 0],
          transition: {
            delay: 0.4,
            duration: 1,
            ease: "easeOut",
          },
        },
        step3End: {
          strokeDashoffset: [0, 200],
          transition: {
            delay: stepEndDelay,
            duration: 0.75,
            ease: "easeIn",
          },
        },
      },
      graphic2: {
        step3Start: {
          strokeDashoffset: [100, 0],
          transition: {
            duration: 0.6,
            ease: "easeIn",
          },
        },
        step3End: {
          strokeDashoffset: [0, 100],
          transition: {
            delay: stepEndDelay + 0.55,
            duration: 0.4,
            ease: "easeOut",
          },
        },
      },
      graphic3: {
        step3Start: {
          opacity: 0.75,
          transition: {
            duration: 0.25,
            ease: "easeInOut",
          },
        },
        step3End: {
          opacity: 0,
          transition: {
            delay: stepEndDelay + 0.55,
            duration: 0.25,
            ease: "easeInOut",
          },
        },
      },
      graphic4: {
        step3Start: {
          transition: {
            delayChildren: 0.25,
            staggerChildren: 0.2,
            ease: "easeInOut",
          },
        },
        part1: {
          step3Start: {
            strokeDashoffset: [100, 75],
            transition: {
              duration: 0.25,
              ease: "easeInOut",
            },
          },
          step3End: {
            strokeDashoffset: [75, 100],
            transition: {
              delay: stepEndDelay,
              duration: 0.8,
              ease: "easeInOut",
            },
          },
        },
      },
    },
  },
};

export default { loop, discLoop, mainSequence };
