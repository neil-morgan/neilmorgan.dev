import {
  useState,
  useCallback,
  useEffect,
  useRef,
  useMemo,
  type RefCallback,
} from "react";

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

  const observerRef = useRef<IntersectionObserver | null>(null);

  const observerOptions = useMemo(
    () => ({ threshold, root, rootMargin }),
    [threshold, root, rootMargin],
  );

  const customRef: RefCallback<any> = useCallback(
    (node: Element | null) => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      if (node) {
        observerRef.current = new IntersectionObserver(([newEntry]) => {
          setEntry(prevEntry =>
            prevEntry !== newEntry ? newEntry : prevEntry,
          );
        }, observerOptions);

        observerRef.current.observe(node);
      }
    },
    [observerOptions],
  );

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return [customRef, entry];
};
