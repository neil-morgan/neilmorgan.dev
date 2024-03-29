import type { TopLevelBlock } from "@contentful/rich-text-types";
import { kebabCase } from "lodash";
import type { NavigableContentHeadingsType } from "../../types";

const buildHeading = (value: string) => {
  const id = kebabCase(value);
  return {
    id,
    label: value,
    href: `#${id}`,
  };
};

export const buildRichtextHeadings = (content: TopLevelBlock[]) => {
  const headings: NavigableContentHeadingsType = [];

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
