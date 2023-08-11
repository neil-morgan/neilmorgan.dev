import type { TopLevelBlock } from "@contentful/rich-text-types";
import { kebabCase } from "lodash";
import type { RichtextHeadingsType } from "@/types";

const buildHeading = (value: string) => ({
  label: value,
  href: `#${kebabCase(value)}`,
});

export const buildRichtextHeadings = (content: TopLevelBlock[]) => {
  const headings: RichtextHeadingsType = [];

  content.forEach(({ nodeType, content }) => {
    if (nodeType === "heading-1" && "value" in content[0]) {
      headings.push({
        heading: buildHeading(content[0].value),
        subHeadings: [],
      });
    }
    if (nodeType === "heading-2" && "value" in content[0]) {
      headings[headings.length - 1].subHeadings.push({
        heading: buildHeading(content[0].value),
      });
    }
  });

  return headings;
};
