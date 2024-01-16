"use client";

import { useEffect, useState } from "react";

type MousePositionType = number | null;

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<{
    x: MousePositionType;
    y: MousePositionType;
  }>({
    x: null,
    y: null,
  });

  const updateMousePosition = (ev: {
    clientX: MousePositionType;
    clientY: MousePositionType;
  }) => {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
};
