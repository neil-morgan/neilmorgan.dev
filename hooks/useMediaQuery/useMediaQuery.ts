"use client"

import { useCallback, useSyncExternalStore } from "react";

export function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (callback: (event: MediaQueryListEvent) => void) => {
      const matchMedia = window.matchMedia(query);

      const changeListener = (event: MediaQueryListEvent) => {
        callback(event);
      };

      matchMedia.addEventListener("change", changeListener);
      return () => {
        matchMedia.removeEventListener("change", changeListener);
      };
    },
    [query],
  );

  const getSnapshot = () => {
    return window.matchMedia(query).matches;
  };

  const getServerSnapshot = () => {
    throw Error("useMediaQuery is a client-only hook");
  };

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
