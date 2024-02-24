import { motion } from "framer-motion";
import { tealDark } from "@radix-ui/colors";
import { colors } from "@/lib/stitches";

export const Terminals = () => (
  <>
    {[
      {
        dotState: 1,
        shape: "M308.7,4.3L310.6 4.2 310.6 20 308.7 20.2 z",
      },
      {
        dotState: 2,
        shape: "M314.7,3.9L316.6 3.8 316.6 19.6 314.7 19.7 z",
      },
      {
        dotState: 2,
        shape:
          "M320.7,3.2c0.6,0,1.3-0.1,1.9-0.1v15.8c-0.6,0-1.2,0.1-1.9,0.1V3.2z",
      },
      {
        dotState: 1,
        shape:
          "M326.7,2.5c0.6-0.1,1.3-0.1,1.9-0.2v15.8c-0.6,0.1-1.2,0.1-1.9,0.2V2.5z",
      },
      {
        dotState: 2,
        shape:
          "M332.7,1.2c0.6-0.1,1.3-0.1,1.9-0.2v15.8c-0.6,0.1-1.2,0.1-1.9,0.2V1.2z",
      },
    ].map((node, index) => (
      <motion.path
        key={index}
        fill={tealDark.teal9}
        d={node.shape}
        initial={{ opacity: 0 }}
        animate={{
          opacity: node.dotState === 1 ? [0, 1, 1, 0] : [1, 0, 0, 1],
        }}
        transition={{
          times: [0, 0.1, 0.9, 1],
          duration: 1,
          repeatDelay: 1,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    ))}

    <path
      fill={colors.layer1}
      d="M92.7,445.2c13.1,13.5,33.9,24.9,58.9,32.4v-28c-24.6-7.2-44.8-17.7-58.9-30.6C92.7,419,92.7,445.2,92.7,445.2z"
    />

    {[
      {
        pos: [0, 0, 3.25, 3.25, 6.5, 6.5, 9.75, 9.75, 13],
        shape:
          "M96.5,428.6v1.9c4.1,3.4,8.7,6.6,13.7,9.6v-1.8C105.2,435.3,100.6,432.1,96.5,428.6z",
      },
      {
        pos: [0, 0, 3.25, 3.25, 6.5, 6.5, 9.75, 9.75, -3.25],
        shape:
          "M103.9,437.5c-2.6-1.8-5.1-3.7-7.4-5.6v1.9c2.3,1.9,4.8,3.7,7.4,5.5V437.5z",
      },
      {
        pos: [0, 0, 3.25, 3.25, 6.5, 6.5, -6.5, -6.5, -3.25],
        shape:
          "M106.1,442.2c-3.4-2.3-6.6-4.7-9.6-7.1v1.9c3,2.4,6.2,4.8,9.6,7V442.2z",
      },
      {
        pos: [0, 0, 3.25, 3.25, -9.75, -9.75, -6.5, -6.5, -3.25],
        shape:
          "M98.2,439.7c-0.6-0.5-1.1-0.9-1.7-1.4v1.9c0.6,0.5,1.1,0.9,1.7,1.4V439.7z",
      },
      {
        pos: [0, 0, -13, -13, -9.75, -9.75, -6.5, -6.5, -3.25],
        shape:
          "M101.8,445.7c-1.8-1.3-3.6-2.7-5.2-4.1v1.9c1.7,1.4,3.4,2.7,5.2,4V445.7z",
      },
    ].map((node, index) => (
      <motion.path
        key={index}
        fill={tealDark.teal9}
        animate={{
          y: node.pos,
        }}
        transition={{
          times: [0, 0.25, 0.251, 0.5, 0.51, 0.75, 0.751, 0.99, 1],
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
        d={node.shape}
      />
    ))}

    {[
      {
        dotState: 1,
        shape:
          "M140.6,452.6v1.6c0.7,0.2,1.3,0.5,2,0.7v-1.6C141.9,453.1,141.2,452.9,140.6,452.6z",
      },
      {
        dotState: 2,
        shape:
          "M144.5,454v1.6c0.7,0.2,1.4,0.4,2,0.7v-1.6C145.9,454.4,145.2,454.2,144.5,454z",
      },
      {
        dotState: 2,
        shape:
          "M140.6,456.2v1.6c0.7,0.2,1.3,0.5,2,0.7v-1.6C141.9,456.7,141.2,456.5,140.6,456.2z",
      },
      {
        dotState: 1,
        shape:
          "M144.5,457.6v1.6c0.7,0.2,1.4,0.4,2,0.7v-1.6C145.9,458,145.2,457.8,144.5,457.6z",
      },
      {
        dotState: false,
        shape:
          "M140.6,459.8v1.6c0.7,0.2,1.3,0.5,2,0.7v-1.6C141.9,460.3,141.2,460.1,140.6,459.8z",
      },
      {
        dotState: false,
        shape:
          "M144.5,461.2v1.6c0.7,0.2,1.4,0.4,2,0.7v-1.6C145.9,461.6,145.2,461.4,144.5,461.2z",
      },
      {
        dotState: 1,
        shape:
          "M140.6,463.4v1.6c0.7,0.2,1.3,0.5,2,0.7v-1.6C141.9,463.9,141.2,463.7,140.6,463.4z",
      },
      {
        dotState: false,
        shape:
          "M144.5,464.8v1.6c0.7,0.2,1.4,0.4,2,0.7v-1.6C145.9,465.3,145.2,465,144.5,464.8z",
      },
      {
        dotState: 1,
        shape:
          "M140.6,467v1.6c0.7,0.2,1.3,0.5,2,0.7v-1.6C141.9,467.5,141.2,467.3,140.6,467z",
      },
      {
        dotState: 2,
        shape:
          "M144.5,468.4v1.6c0.7,0.2,1.4,0.4,2,0.7v-1.6C145.9,468.9,145.2,468.6,144.5,468.4z",
      },
    ].map((node, index) => (
      <motion.path
        key={index}
        fill={tealDark.teal9}
        d={node.shape}
        initial={{ opacity: 0 }}
        animate={{
          opacity: node.dotState === 1 ? [0, 1, 1, 0] : [1, 0, 0, 1],
        }}
        transition={{
          times: [0, 0.1, 0.9, 1],
          duration: 1,
          repeatDelay: 1,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    ))}
  </>
);
