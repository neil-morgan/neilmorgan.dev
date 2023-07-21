"use client";

import { MARKS } from "@contentful/rich-text-types";
import type { ReactNode } from "react";

export const renderMark = {
  [MARKS.BOLD]: (text: ReactNode) => <strong>{text}</strong>,
};
