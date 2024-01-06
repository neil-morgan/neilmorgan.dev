"use client";

import React, { createContext, useContext, useState } from "react";
import type { ElementPropertiesType, ElementRefType } from "./types";

const ElementRefsContext = createContext<{
  elementProperties: ElementPropertiesType[];
  elementRefs: ElementRefType[];
  addElementRef: (ref: ElementRefType) => void;
}>({
  elementRefs: [],
  elementProperties: [],
  addElementRef: () => {},
});

export const useElementRefs = () => useContext(ElementRefsContext);

export const ElementRefsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [elementRefs, setElementRefs] = useState<ElementRefType[]>([]);

  const addElementRef = (ref: ElementRefType) =>
    setElementRefs(prevRefs => {
      if (!prevRefs.includes(ref)) {
        return [...prevRefs, ref];
      }
      return prevRefs;
    });

  const elementProperties = elementRefs.map(ref => {
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
  });

  return (
    <ElementRefsContext.Provider
      value={{ elementRefs, elementProperties, addElementRef }}>
      {children}
    </ElementRefsContext.Provider>
  );
};
