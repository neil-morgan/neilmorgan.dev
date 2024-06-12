import React, { useCallback, useState, RefCallback } from "react";

interface IntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
}

export const useIntersectionObserver = (
  options: IntersectionObserverOptions = {},
): [RefCallback<any>, IntersectionObserverEntry | null] => {
  const { threshold = 1, root = null, rootMargin = "0px" } = options;
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  const previousObserver = React.useRef<IntersectionObserver | null>(null);

  const customRef: RefCallback<any> = useCallback(
    (node: Element | null) => {
      if (previousObserver.current) {
        previousObserver.current.disconnect();
        previousObserver.current = null;
      }

      if (node?.nodeType === Node.ELEMENT_NODE) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setEntry(entry);
          },
          { threshold, root, rootMargin },
        );

        observer.observe(node);
        previousObserver.current = observer;
      }
    },
    [threshold, root, rootMargin],
  );

  return [customRef, entry];
};
