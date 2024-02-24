import { tealDark } from "@radix-ui/colors";
import { motion } from "framer-motion";
import { colors } from "@/lib/stitches";

const SpinningDnaOrbs = ({ y, delay }: { y: number; delay?: number }) => {
  return (
    <g>
      <motion.g
        initial={{}}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay,
        }}
        animate={{
          x: [0, 30],
        }}>
        <motion.ellipse
          initial={{}}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay,
          }}
          animate={{
            rx: [3, 5, 3, 1, 3],
            ry: [3, 5, 3, 1, 3],
          }}
          fill="url(#dna-orb)"
          cx={210}
          cy={y}
          rx={3}
          ry={3}
        />
      </motion.g>

      <motion.g
        initial={{}}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay,
        }}
        animate={{
          x: [30, 0],
        }}>
        <motion.ellipse
          initial={{}}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay,
          }}
          animate={{
            rx: [3, 1, 3, 5, 3],
            ry: [3, 1, 3, 5, 3],
          }}
          fill="url(#dna-orb)"
          cx={210}
          cy={y}
          rx={3}
          ry={3}
        />
      </motion.g>
    </g>
  );
};

const startY = 100;

export const Dna = () => {
  return (
    <motion.g initial={{ rotate: 45 }}>
      {Array.from(Array(20)).map((_, index) => (
        <SpinningDnaOrbs
          key={startY + index}
          y={startY + index * 10}
          delay={index * 0.1}
        />
      ))}
    </motion.g>
  );
};
