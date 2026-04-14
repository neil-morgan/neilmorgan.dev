import type { CssSizeConfigType } from "@/app/_styles";
import { combineClassNames } from "@/app/_utils";
import { createCssSizeVariables } from "@/app/_utils";

import styles from "./Tag.module.css";

import type { TagListProps, TagProps } from "./types";

const sizes: CssSizeConfigType = {
  xs: "0.5rem",
  sm: "0.7rem",
  md: "0.9rem",
  lg: "1.1rem",
  xl: "1.2rem",
};

export const Tag = ({
  children,
  color = "primary",
  size = "md",
}: React.PropsWithChildren<TagProps>) => {
  const sizeVariable = createCssSizeVariables(size, sizes);
  return (
    <div
      className={combineClassNames(styles.tag, styles[color])}
      style={sizeVariable}
    >
      {children}
    </div>
  );
};

export const TagList = ({
  list,
  className,
  size = "md",
  color,
}: TagListProps) => {
  const sizeVariable = createCssSizeVariables(size, sizes);
  return (
    <div
      style={sizeVariable}
      className={combineClassNames(styles["tag-list"], className)}
    >
      {list.map(({ title, slug }, i) => (
        <Tag key={i} slug={slug} size={size} color={color}>
          {title}
        </Tag>
      ))}
    </div>
  );
};
