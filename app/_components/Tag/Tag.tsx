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
  variant = "ghost",
  size = "md",
  className,
}: React.PropsWithChildren<TagProps>) => {
  const sizeVariable = createCssSizeVariables(size, sizes);
  return (
    <div
      className={combineClassNames(
        styles.tag,
        styles[color],
        styles[variant],
        className,
      )}
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
      {list.map((tag, i) =>
        tag?.name != null ? (
          <Tag key={i} slug={tag.slug} size={size} color={color}>
            {tag.name}
          </Tag>
        ) : null,
      )}
    </div>
  );
};
