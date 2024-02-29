import { tealDark } from "@radix-ui/colors";
import { motion } from "framer-motion";

const barChartDefaults: {
  stroke: string;
  strokeWidth: number;
  transition: {
    duration: number;
    ease: string;
    repeat: typeof Infinity;
    repeatType: "loop";
  };
} = {
  stroke: tealDark.teal7,
  strokeWidth: 1,
  transition: {
    duration: 4,
    ease: "anticipate",
    repeat: Infinity,
    repeatType: "loop",
  },
};

const barChartItems = [
  {
    animate: {
      y1: [270, 275, 273, 270],
    },
    x1: 285,
    y1: 270,
    x2: 285,
    y2: 280,
  },
  {
    animate: {
      y1: [275, 270, 273, 275],
    },
    x1: 288,
    y1: 275,
    x2: 288,
    y2: 280,
  },
  {
    animate: {
      y1: [273, 277, 270, 273],
    },
    x1: 291,
    y1: 273,
    x2: 291,
    y2: 280,
  },
  {
    animate: {
      y1: [275, 270, 278, 275],
    },
    x1: 294,
    y1: 275,
    x2: 294,
    y2: 280,
    stroke: tealDark.teal7,
    strokeWidth: 1,
  },
];

const cascadeDefaults = {
  initial: {
    y: -30,
  },
  y1: 0,
  y2: 60,
  stroke: tealDark.teal5,
  strokeWidth: 1.5,
  transition: {
    duration: 5,
    ease: "linear",
    repeat: Infinity,
  },
};

const cascadeBars = [
  {
    x1: 1,
    x2: 1,
    y1: 0,
    strokeDasharray: 7,
    animate: { y: -2 },
  },
  {
    x1: 5,
    x2: 5,
    y1: 0,
    strokeDasharray: 3,
    animate: { y: 0 },
  },
  {
    x1: 9,
    x2: 9,
    y1: 0,
    strokeDasharray: 8,
    animate: { y: 2 },
  },
  {
    x1: 13,
    x2: 13,
    y1: 0,
    strokeDasharray: 4,
    animate: { y: 2 },
  },
  {
    x1: 17,
    x2: 17,
    y1: 0,
    strokeDasharray: 6,
    animate: { y: 6 },
  },
];

export const Graphics = () => (
  <>
    <motion.ellipse
      initial={{
        opacity: 1,
        scale: 1,
      }}
      animate={{ strokeDashoffset: [100, 0] }}
      transition={{
        duration: 10,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      }}
      fill="transparent"
      stroke={tealDark.teal7}
      strokeWidth={1}
      strokeDasharray={10}
      cx={315}
      cy={275}
      rx={5}
      ry={5}
    />

    {barChartItems.map((line, i) => (
      <motion.line {...line} {...barChartDefaults} key={i} />
    ))}

    <svg x={253} y={270} width={15} height={14} viewBox="0 0 20 20">
      <motion.path
        animate={{
          x: -30,
        }}
        transition={{
          duration: 3,
          ease: "linear",
          repeat: Infinity,
        }}
        fill="transparent"
        stroke={tealDark.teal7}
        d="M0 7ZC10-10 20 24 30 7 40-10 50 24 60 7M0 7C10 24 20-10 30 7 40 24 50-10 60 7"
      />
    </svg>

    <svg x={150} y={105} width={20} height={20} viewBox="0 0 20 20">
      {cascadeBars.map((line, i) => (
        <motion.line key={i} {...line} {...cascadeDefaults} />
      ))}
    </svg>
  </>
);
