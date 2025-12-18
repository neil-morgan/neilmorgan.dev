"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type PropsWithChildren,
} from "react";

import { usePathname } from "next/navigation";

import type {
  ElementPropertiesType,
  ElementRefsContextType,
  ElementRefType,
} from "./types";

const ElementRefsContext = createContext<ElementRefsContextType>({
  elementRefs: [],
  elementProperties: [],
  addElementRef: () => {},
  updateElementProperties: () => {},
});

export const useElementRefs = () => useContext(ElementRefsContext);

export const ElementRefsProvider = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const [elementRefs, setElementRefs] = useState<ElementRefType[]>([]);
  const [elementProperties, setElementProperties] = useState<
    ElementPropertiesType[]
  >([]);

  const addElementRef = (ref: ElementRefType) =>
    setElementRefs((prevRefs) =>
      !prevRefs.includes(ref) ? [...prevRefs, ref] : prevRefs
    );

  const updateElementProperties = useCallback(
    () =>
      setElementProperties(
        elementRefs.map((ref) => {
          const { top, left, bottom, right } = (
            ref as HTMLElement
          ).getBoundingClientRect();
          return {
            top: top ?? 0,
            left: left ?? 0,
            bottom: bottom ?? 0,
            right: right ?? 0,
          };
        })
      ),
    [elementRefs]
  );

  useEffect(
    () => queueMicrotask(() => updateElementProperties()),
    [pathname, updateElementProperties]
  );

  useEffect(() => {
    const handleUpdate = () => {
      queueMicrotask(() => updateElementProperties());
    };
    window.addEventListener("resize", handleUpdate);
    window.addEventListener("scroll", handleUpdate);
    queueMicrotask(() => updateElementProperties());
    return () => {
      window.removeEventListener("resize", handleUpdate);
      window.removeEventListener("scroll", handleUpdate);
    };
  }, [updateElementProperties]);

  return (
    <ElementRefsContext.Provider
      value={{
        addElementRef,
        elementProperties,
        elementRefs,
        updateElementProperties,
      }}
    >
      {children}
    </ElementRefsContext.Provider>
  );
};
