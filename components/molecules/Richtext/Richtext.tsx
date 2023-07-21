"use client";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import type { RichtextProps } from "./types";
import { Article } from "./styles";
import { getRenderOptions } from "./helpers/get-render-options";

export const Richtext = ({ content }: RichtextProps) => (
  <Article>
    {documentToReactComponents(content.json, getRenderOptions(content.links))}
  </Article>
);
