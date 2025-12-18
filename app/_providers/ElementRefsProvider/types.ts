export type ElementPropertiesType = {
  top: number;
  left: number;
  bottom: number;
  right: number;
};

export type ElementRefType = HTMLElement | null;

export type ElementRefsContextType = {
  elementProperties: ElementPropertiesType[];
  elementRefs: ElementRefType[];
  addElementRef: (ref: ElementRefType) => void;
  updateElementProperties: () => void;
};
