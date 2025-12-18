"use client";

import { useEffect, useState } from "react";

import type {
  MousePositionStateType,
  MousePositionType,
} from "./useMousePosition.types";

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<MousePositionStateType>({
    x: null,
    y: null,
  });

  const updateMousePosition = (ev: {
    clientX: MousePositionType;
    clientY: MousePositionType;
  }) => setMousePosition({ x: ev.clientX, y: ev.clientY });

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};
