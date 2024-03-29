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

const textCascadeDefaults: {
  stroke: string;
  strokeWidth: number;
  x1: number;
  transition: {
    delay: number;
    duration: number;
    ease: string;
    repeat: typeof Infinity;
    repeatType: "loop";
  };
} = {
  transition: {
    duration: 5,
    delay: 1,
    ease: "linear",
    repeat: Infinity,
    repeatType: "loop",
  },
  stroke: tealDark.teal5,
  strokeWidth: 1,
  x1: 0,
};

const textCascadeItems = [
  {
    x2: 20,
    y1: 1,
    y2: 1,
  },
  {
    x2: 25,
    y1: 5,
    y2: 5,
  },
  {
    x2: 15,
    y1: 9,
    y2: 9,
  },
  {
    x2: 25,
    y1: 17,
    y2: 17,
  },
  {
    x2: 20,
    y1: 25,
    y2: 25,
  },
  {
    x2: 10,
    y1: 29,
    y2: 29,
  },
  {
    x2: 20,
    y1: 37,
    y2: 37,
  },
  {
    x2: 25,
    y1: 41,
    y2: 41,
  },
  {
    x2: 15,
    y1: 45,
    y2: 45,
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

    <svg x={140} y={100} width={75} height={15} viewBox="0 0 75 15">
      <motion.g
        initial={{
          y: -38,
        }}
        animate={{ y: [-35, 1] }}
        transition={{
          duration: 7,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}>
        {textCascadeItems.map((item, i) => (
          <line key={i} {...textCascadeDefaults} {...item} />
        ))}
      </motion.g>
    </svg>
  </>
);
