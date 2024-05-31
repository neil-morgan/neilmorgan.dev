import { useState, useLayoutEffect } from "react";
import type { WindowDimensionsType } from "./types";

export function useWindowSize() {
  const [size, setSize] = useState<WindowDimensionsType>({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
}
