import type { TopLevelBlock } from "@contentful/rich-text-types";
import type { RichtextHeadingsType } from "@/types";
import { kebabCase } from "lodash";

export const getRichtextHeadings = (content: TopLevelBlock[]) => {
  const headings: RichtextHeadingsType = [];

  content.forEach(({ nodeType, content }, i: number) => {
    if (nodeType === "heading-1" && "value" in content[0]) {
      headings.push({
        heading: `#${kebabCase(content[0].value)}`,
        key: i,
        subHeadings: [],
      });
    }
    if (nodeType === "heading-2" && "value" in content[0]) {
      headings[headings.length - 1].subHeadings.push({
        key: i,
        heading: `#${kebabCase(content[0].value)}`,
      });
    }
  });

  return headings;
};
