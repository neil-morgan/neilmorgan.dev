"use client";

import { type IconProps } from "./types";
import { paths } from "./paths";
import { Svg } from "./styles";

export const Icon = ({
  name,
  size = "md",
  color = "currentColor",
  css,
}: IconProps) => (
  <Svg size={size} color={color} css={css}>
    <use
      href={`#${paths.find(path => path.name === name.trim())?.name}-icon`}
    />
  </Svg>
);

export const IconDefs = () => (
  <svg style={{ display: "none" }}>
    <defs>
      {paths.map(({ name, path }) => (
        <svg
          id={`${name}-icon`}
          viewBox="0 0 15 15"
          fill="currentColor"
          key={name}>
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
