import { combineClassNames, createCssSizeVariables } from "@/app/_utils";

import styles from "./Icon.module.css";
import { icons } from "./icons";

import type { IconProps } from "./Icon.types";

const defaultSizes = {
  xs: "0.75rem",
  sm: "1rem",
  md: "1.25rem",
  lg: "1.5rem",
  xl: "2rem",
} as const;

export const paths = (Object.keys(icons) as Array<keyof typeof icons>).map(
  (key) => ({
    name: key,
    path: icons[key],
  })
);

export const Icon = ({ className, name, size = "1rem", style }: IconProps) => {
  const sizeVariable = size ? createCssSizeVariables(size, defaultSizes) : {};
  const icon = paths.find((path) => path.name === name.trim())?.name;

  if (!icon) {
    const availableIcons = paths.map((p) => p.name);
    const suggestions = availableIcons
      .filter(
        (i) =>
          i.toLowerCase().includes(name.toLowerCase()) ||
          name.toLowerCase().includes(i.toLowerCase())
      )
      .slice(0, 5);
    console.warn(
      `Icon "${name}" not found.` +
        (suggestions.length > 0
          ? ` Did you mean: ${suggestions.join(", ")}?`
          : "") +
        `\nAvailable icons (${availableIcons.length}): ${availableIcons
          .slice(0, 10)
          .join(", ")}${
          availableIcons.length > 10
            ? `, ... and ${availableIcons.length - 10} more`
            : ""
        }`
    );
    return null;
  }

  return (
    <svg
      data-testid={`icon-${name}`}
      style={{
        ...sizeVariable,
        ...style,
      }}
      className={combineClassNames(styles.icon, className)}
    >
      <use href={`#${icon}-icon`} />
    </svg>
  );
};

export const IconDefs = () => (
  <svg style={{ display: "none" }}>
    <defs>
      {paths.map(({ name, path }) => (
        <svg
          id={`${name}-icon`}
          viewBox="0 0 15 15"
          fill="currentColor"
          key={name}
          data-testid={`${name}-testid`}
        >
          <path
            d={path}
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          />
        </svg>
      ))}
    </defs>
  </svg>
);
