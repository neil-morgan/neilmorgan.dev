import { tealDark } from "@radix-ui/colors";
import { motion } from "framer-motion";
import { colors } from "@/lib/stitches";

export const Dna = () => {
  return (
    <g>
      <motion.g
        initial={{}}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        animate={{
          x: [0, 30],
        }}>
        <motion.ellipse
          initial={{}}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          animate={{
            rx: [3, 5, 3, 1, 3],
            ry: [3, 5, 3, 1, 3],
          }}
          fill="url(#dna-orb)"
          cx={210}
          cy={150}
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
        }}
        animate={{
          x: [30, 0],
        }}>
        <motion.ellipse
          initial={{}}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          animate={{
            rx: [3, 1, 3, 5, 3],
            ry: [3, 1, 3, 5, 3],
          }}
          fill="url(#dna-orb)"
          cx={210}
          cy={150}
          rx={3}
          ry={3}
        />
      </motion.g>
    </g>
  );
};
