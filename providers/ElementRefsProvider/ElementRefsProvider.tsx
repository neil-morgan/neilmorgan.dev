"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import type { ElementPropertiesType, ElementRefType } from "./types";

const ElementRefsContext = createContext<{
  elementProperties: ElementPropertiesType[];
  elementRefs: ElementRefType[];
  addElementRef: (ref: ElementRefType) => void;
  updateElementProperties: () => void;
}>({
  elementRefs: [],
  elementProperties: [],
  addElementRef: () => {},
  updateElementProperties: () => {},
});

export const useElementRefs = () => useContext(ElementRefsContext);

export const ElementRefsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [elementRefs, setElementRefs] = useState<ElementRefType[]>([]);
  const [elementProperties, setElementProperties] = useState<
    ElementPropertiesType[]
  >([]);

  const addElementRef = (ref: ElementRefType) =>
    setElementRefs(prevRefs => {
      if (!prevRefs.includes(ref)) {
        return [...prevRefs, ref];
      }
      return prevRefs;
    });

  const updateElementProperties = useCallback(() => {
    setElementProperties(
      elementRefs.map(ref => {
        const { top, left, bottom, right } = (
          ref as HTMLElement
        )?.getBoundingClientRect() || {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        };
        return {
          top,
          left,
          bottom,
          right,
        };
      }),
    );
  }, [elementRefs]);

  useEffect(() => {
    window.addEventListener("resize", updateElementProperties);
    window.addEventListener("scroll", updateElementProperties);
    updateElementProperties();
    return () => {
      window.removeEventListener("resize", updateElementProperties);
      window.removeEventListener("scroll", updateElementProperties);
    };
  }, [updateElementProperties]);

  return (
    <ElementRefsContext.Provider
      value={{
        elementRefs,
        elementProperties,
        addElementRef,
        updateElementProperties,
      }}>
      {children}
    </ElementRefsContext.Provider>
  );
};
