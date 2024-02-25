import { tealDark } from "@radix-ui/colors";
import { motion } from "framer-motion";

export const Graphics = () => {
  return (
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
        stroke={tealDark.teal6}
        strokeWidth={1}
        strokeDasharray={10}
        cx={315}
        cy={275}
        rx={5}
        ry={5}
      />
      <line
        x1={275}
        y1={270}
        x2={275}
        y2={280}
        stroke={tealDark.teal6}
        strokeWidth={1}
      />
    </>
  );
};
