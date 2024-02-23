import { tealDark } from "@radix-ui/colors";
import animations from "./animations";
import { colors } from "@/lib/stitches";

export default function Defs() {
  const { loop } = animations;

  return (
    <defs>
      {/* FLOOR GLOW */}
      <radialGradient
        id="floor-glow"
        cx="300.0531"
        cy="-3174.2085"
        r="310.1413"
        gradientTransform="matrix(0.7669 0 0 -0.3867 -5.1107 -792.5264)"
        gradientUnits="userSpaceOnUse">
        <stop
          offset="0.66"
          style={{ stopColor: colors.primary1, stopOpacity: 1 }}
        />
        <stop offset={1} style={{ stopColor: colors.layer1, stopOpacity: 0 }} />
      </radialGradient>

      {/* BEVEL GLOW */}
      <radialGradient
        id="bevel-glow"
        cx={225}
        cy="93.9021"
        r="128.8938"
        gradientTransform="matrix(1 0 0 -0.5249 0 414.3507)"
        gradientUnits="userSpaceOnUse">
        <stop offset="0.7887" style={{ stopColor: colors.primary1 }} />
        <stop offset={1} style={{ stopColor: colors.layer1 }} />
      </radialGradient>

      {/* INNER GLOW */}
      <radialGradient
        id="inner-glow"
        cx={225}
        cy="84.6359"
        r="123.0978"
        gradientTransform="matrix(1 0 0 -0.5184 0 410.4852)"
        gradientUnits="userSpaceOnUse">
        <stop offset="5.000000e-02" style={{ stopColor: colors.primary1 }} />
        <stop
          offset="0.5"
          style={{ stopColor: colors.primary1, stopOpacity: "0.8" }}
        />
        <stop
          offset="0.75"
          style={{ stopColor: colors.primary1, stopOpacity: "0.33" }}
        />
        <stop
          offset={1}
          style={{ stopColor: colors.layer1, stopOpacity: "0.3" }}
        />
      </radialGradient>

      {/* REAR PLATE TOP */}
      <radialGradient
        id="rear-plate-top"
        cx="224.1788"
        cy="73.2963"
        r="72.5116"
        gradientTransform="matrix(1 0 0 -0.477 0 358.6379)"
        gradientUnits="userSpaceOnUse">
        <stop offset="0.7949" style={{ stopColor: `${tealDark.teal8}10` }} />
        <stop offset="0.9532" style={{ stopColor: colors.layer3 }} />
      </radialGradient>

      {/* FRONT PLATE TOP */}
      <radialGradient
        id="front-plate-top"
        cx="225.5581"
        cy="175.9099"
        r="90.7893"
        gradientTransform="matrix(1 0 0 -0.6293 0 496.1512)"
        gradientUnits="userSpaceOnUse">
        <stop offset="0.8507" style={{ stopColor: `${tealDark.teal8}10` }} />
        <stop offset={1} style={{ stopColor: colors.layer3 }} />
      </radialGradient>

      {/* LEFT PLATE TOP */}
      <radialGradient
        id="left-plate-top"
        cx="132.637"
        cy="404.3422"
        r="29.0191"
        gradientTransform="matrix(-0.9997 2.243622e-02 -2.404028e-02 -1.0712 254.622 793.9791)"
        gradientUnits="userSpaceOnUse">
        <stop offset="0.7728" style={{ stopColor: `${tealDark.teal8}10` }} />
        <stop offset={1} style={{ stopColor: colors.layer3 }} />
      </radialGradient>

      {/* RIGHT PLATE TOP */}
      <radialGradient
        id="right-plate-top"
        cx="344.9423"
        cy="415.8177"
        r="29.0191"
        gradientTransform="matrix(0.9997 2.243622e-02 2.404028e-02 -1.0712 -17.1233 801.5084)"
        gradientUnits="userSpaceOnUse">
        <stop offset="0.7728" style={{ stopColor: `${tealDark.teal8}10` }} />
        <stop offset={1} style={{ stopColor: colors.layer3 }} />
      </radialGradient>

      {/* CEILING SIDE PLATES */}
      <linearGradient
        id="ceiling-side-plate"
        x1="100%"
        y1="100%"
        x2="100%"
        y2="0"
        gradientUnits="objectBoundingBox">
        <stop offset={0} style={{ stopColor: `${tealDark.teal6}10` }} />
        <stop offset={0.75} style={{ stopColor: colors.layer1 }} />
      </linearGradient>

      {/* CEILING BEVEL */}
      <radialGradient
        id="ceiling-bevel"
        cx="224.0995"
        cy="-11.481"
        r="300.0894"
        gradientTransform="matrix(1 0 0 0.2444 0 -8.675)"
        gradientUnits="userSpaceOnUse">
        <stop offset="0.6117" style={{ stopColor: colors.layer1 }} />
        <stop offset="0.8883" style={{ stopColor: colors.layer3 }} />
      </radialGradient>

      {/* CEILING FRONT PLATE */}
      <linearGradient
        id="ceiling-front-plate"
        gradientUnits="userSpaceOnUse"
        x1="225.1021"
        y1="980.402"
        x2="225.1021"
        y2="998.6537"
        gradientTransform="matrix(1 0 0 -1 0 1024.5802)">
        <stop offset={0} style={{ stopColor: colors.layer3 }} />
        <stop offset={1} style={{ stopColor: colors.layer1 }} />
      </linearGradient>

      {/* CEILING FRONT PLATE BEVEL */}
      <radialGradient
        id="ceiling-front-plate-bevel"
        cx="225.5666"
        cy="1415.4739"
        r="92.0591"
        gradientTransform="matrix(1 0 0 -0.6293 0 992.9856)"
        gradientUnits="userSpaceOnUse">
        <stop offset="0.8507" style={{ stopColor: `${tealDark.teal8}20` }} />
        <stop offset={1} style={{ stopColor: colors.layer3 }} />
      </radialGradient>

      {/* CEILING GLOW */}
      <radialGradient
        id="ceiling-glow"
        cx="226.5824"
        cy="671.8199"
        r="131.8311"
        gradientTransform="matrix(1 0 0 -0.6102 0 445.1461)"
        gradientUnits="userSpaceOnUse">
        <stop offset="0.296" style={{ stopColor: colors.primary1 }} />
        <stop
          offset="0.7989"
          style={{ stopColor: colors.layer1, stopOpacity: 0 }}
        />
      </radialGradient>

      {/* LIGHT RAYS */}
      <linearGradient
        id="ceiling-light-rays"
        gradientUnits="userSpaceOnUse"
        x1={225}
        y1="482.1949"
        x2={225}
        y2="675.5137"
        gradientTransform="matrix(1 0 0 -1 0 678.5802)">
        <stop
          offset="0.33"
          style={{ stopColor: colors.layer1, stopOpacity: 0 }}
        />
        <stop offset={1} style={{ stopColor: colors.primary1 }} />
      </linearGradient>

      <linearGradient
        id="light-rays"
        gradientUnits="userSpaceOnUse"
        x1={225}
        y1="752.2198"
        x2={225}
        y2="321.4099"
        gradientTransform="matrix(1 0 0 -1 0 752.2198)">
        <stop
          offset="0.33"
          style={{ stopColor: colors.layer1, stopOpacity: 0 }}
        />
        <stop offset={1} style={{ stopColor: colors.primary1 }} />
      </linearGradient>
    </defs>
  );
}
