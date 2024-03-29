"use client";

import type { RichtextNodeType } from "../types";

export const getNodeValue = (node: RichtextNodeType) => {
  if (!("value" in node.content[0])) {
    return null;
  }
  return node.content[0].value;
};
