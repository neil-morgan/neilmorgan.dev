"use client";

import { MARKS } from "@contentful/rich-text-types";
import type { ReactNode } from "react";
import { Text } from "@/components/atoms";

export const renderMark = {
  [MARKS.BOLD]: (text: ReactNode) => <Text as="strong">{text}</Text>,
};
