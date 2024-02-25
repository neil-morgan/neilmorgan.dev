import { tealDark } from "@radix-ui/colors";
import { motion } from "framer-motion";

export const Graphics = () => {
  return (
    <>
      <motion.ellipse
        initial={{
          strokeDashoffset: 100,
          opacity: 1,
          scale: 1,
        }}
        fill="transparent"
        stroke={tealDark.teal7}
        strokeWidth={1}
        strokeDasharray={7}
        cx={275}
        cy={275}
        rx={5}
        ry={5}
      />
      <motion.ellipse
        initial={{
          strokeDashoffset: 100,
          opacity: 1,
          scale: 1,
        }}
        fill="transparent"
        stroke={tealDark.teal7}
        strokeWidth={1}
        strokeDasharray={12}
        cx={295}
        cy={275}
        rx={5}
        ry={5}
      />
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
    </>
  );
};
