"use client";

import { GlowElement } from "./styles";
import { primary } from "@/lib/stitches";
import { useMousePosition } from "@/hooks";
import { useElementRefs } from "@/providers";

export const PointerGlow = () => {
  const { x, y } = useMousePosition();
  const { elementProperties } = useElementRefs();

  const innerGlow = `radial-gradient(250px at ${x}px ${y}px, ${primary.primary5}50, transparent 80%)`;
  const outerGlow = `radial-gradient(600px at ${x}px ${y}px, ${primary.primary5}20, transparent 80%)`;
  const radius = 5;

  return (
    <>
      <svg height="0" width="0" style={{ position: "absolute" }}>
        <defs>
          <clipPath id="innerClipPath">
            {elementProperties.map(({ top, left, bottom, right }, i) => (
              <rect
                key={i}
                x={left}
                y={top}
                width={right - left}
                height={bottom - top}
                rx={radius}
                ry={radius}
                fill="#ffffff"
              />
            ))}
          </clipPath>
        </defs>
      </svg>

      <GlowElement
        css={{
          background: outerGlow,
        }}
      />

      <GlowElement
        css={{
          background: innerGlow,
          clipPath: "url(#innerClipPath)",
        }}
      />
    </>
  );
};
