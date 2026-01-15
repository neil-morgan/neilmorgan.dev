"use client";

import { cloneElement, isValidElement, useCallback } from "react";

import { useMousePosition } from "@/app/_hooks";
import { combineClassNames } from "@/app/_utils";

import styles from "./Interaction.module.css";
import { useInteraction } from "./Interaction.provider";

import type { InteractionProps } from "./Interaction.types";

export const Interaction = ({ children, disabled }: InteractionProps) => {
  const { addElementRef } = useInteraction();
  const refCallback = useCallback(
    (node: HTMLElement | null) => {
      if (node) addElementRef(node);
    },
    [addElementRef]
  );
  if (!isValidElement(children))
    throw new Error(
      "Interaction component requires a single valid React element as a child"
    );
  const childProps = children.props as {
    className?: string;
    [key: string]: unknown;
  };
  return cloneElement(children, {
    ...childProps,
    className: combineClassNames(
      childProps.className,
      !disabled && styles.interaction
    ),
    ref: refCallback,
  } as never);
};

export const InteractionPointer = ({ children }: React.PropsWithChildren) => {
  const { elementProperties } = useInteraction();
  const radius = 5;
  const { x, y } = useMousePosition();
  const innerGlow = `radial-gradient(300px at ${x}px ${y}px, var(--glow-inner), transparent 80%)`;
  const outerGlow = `radial-gradient(400px at ${x}px ${y}px, var(--glow-outer), transparent 80%)`;
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
      <div
        className={styles["interaction-canvas"]}
        style={{
          background: innerGlow,
          clipPath: "url(#innerClipPath)",
        }}
      />
      {children}
      <div
        className={styles["interaction-canvas"]}
        style={{
          background: outerGlow,
        }}
      />
    </>
  );
};
