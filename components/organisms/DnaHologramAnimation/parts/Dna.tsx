import { tealDark } from "@radix-ui/colors";
import { motion } from "framer-motion";

const SpinningDnaOrbs = ({
  y,
  x,
  delay,
  opacity = 1,
  scale,
}: {
  y: number;
  x: number;
  delay?: number;
  opacity?: number;
  scale?: number;
}) => (
  <motion.g
    initial={{ opacity: 0, scale }}
    animate={{ opacity }}
    transition={{
      duration: 0.75,
      delay,
    }}>
    <motion.ellipse
      transition={{
        duration: 2,
        repeat: Infinity,
        delay,
        x: {
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay,
        },
      }}
      animate={{
        rx: [3, 5, 3, 1, 3],
        ry: [3, 5, 3, 1, 3],
        x: [0, 30],
      }}
      fill="url(#dna-orb)"
      cx={x}
      cy={y}
      rx={3}
      ry={3}
    />

    <motion.line
      x1={x}
      x2={x + 30}
      y1={y}
      y2={y}
      stroke={`${tealDark.teal6}75`}
      animate={{
        x1: [x + 3, x + 15],
        x2: [x + 27, x + 15],
      }}
      transition={{
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay,
      }}
    />

    <motion.ellipse
      transition={{
        duration: 2,
        repeat: Infinity,
        delay,
        x: {
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay,
        },
      }}
      animate={{
        rx: [3, 1, 3, 5, 3],
        ry: [3, 1, 3, 5, 3],
        x: [30, 0],
      }}
      fill="url(#dna-orb)"
      cx={x}
      cy={y}
      rx={3}
      ry={3}
    />
  </motion.g>
);

const startY = 100;
const startX = 210;

const helixConfig = [
  { x: startX, y: startY, delay: 0, opacity: 0.1, scale: 0.8 },
  { x: startX + 4, y: startY + 10, delay: 0.1, opacity: 0.2, scale: 0.82 },
  { x: startX + 6, y: startY + 20, delay: 0.2, opacity: 0.3, scale: 0.84 },
  { x: startX + 8, y: startY + 30, delay: 0.3, opacity: 0.4, scale: 0.86 },
  { x: startX + 6, y: startY + 40, delay: 0.4, opacity: 0.5, scale: 0.88 },
  { x: startX + 4, y: startY + 50, delay: 0.5, opacity: 0.6, scale: 0.9 },
  { x: startX, y: startY + 60, delay: 0.6, opacity: 0.7, scale: 0.92 },
  { x: startX - 4, y: startY + 70, delay: 0.7, opacity: 0.8, scale: 0.94 },
  { x: startX - 6, y: startY + 80, delay: 0.8, opacity: 0.9, scale: 0.96 },
  { x: startX - 8, y: startY + 90, delay: 0.9, opacity: 1, scale: 0.98 },
  { x: startX - 10, y: startY + 100, delay: 1, opacity: 0.9, scale: 1 },
  { x: startX - 10, y: startY + 110, delay: 1.1, opacity: 0.9, scale: 0.98 },
  { x: startX - 8, y: startY + 120, delay: 1.2, opacity: 0.8, scale: 0.96 },
  { x: startX - 6, y: startY + 130, delay: 1.3, opacity: 0.7, scale: 0.94 },
  { x: startX - 4, y: startY + 140, delay: 1.4, opacity: 0.6, scale: 0.92 },
  { x: startX, y: startY + 150, delay: 1.5, opacity: 0.5, scale: 0.9 },
  { x: startX + 2, y: startY + 160, delay: 1.6, opacity: 0.4, scale: 0.88 },
  { x: startX + 4, y: startY + 170, delay: 1.7, opacity: 0.3, scale: 0.86 },
  { x: startX + 6, y: startY + 180, delay: 1.8, opacity: 0.2, scale: 0.84 },
  { x: startX + 8, y: startY + 190, delay: 1.9, opacity: 0.1, scale: 0.82 },
];

export const Dna = () => (
  <motion.g initial={{ rotateZ: 45 }}>
    {helixConfig.map((props, index) => (
      <SpinningDnaOrbs key={startY + index} {...props} />
    ))}
  </motion.g>
);
