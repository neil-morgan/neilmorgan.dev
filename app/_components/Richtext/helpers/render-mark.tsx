"use client";

import type { ReactNode } from "react";

import { MARKS } from "@contentful/rich-text-types";

export const renderMark = {
  [MARKS.BOLD]: (text: ReactNode) => <strong>{text}</strong>,
};
