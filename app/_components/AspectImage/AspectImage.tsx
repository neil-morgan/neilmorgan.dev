import Image from "next/image";

import { Root } from "@radix-ui/react-aspect-ratio";

import { combineClassNames } from "@/app/_utils";

import styles from "./AspectImage.module.css";

import type { AspectImageProps } from "./types";

export const AspectImage = async ({
  borderRadius = "0.25rem",
  className,
  description,
  fit = "contain",
  ratio = 809 / 500,
  style,
  url,
  width,
}: React.PropsWithChildren<AspectImageProps>) => {
  return (
    <div
      className={combineClassNames(styles.container, className)}
      style={
        {
          maxWidth: `${width}px`,
          "--border-radius": borderRadius,
          ...style,
        } as React.CSSProperties
      }
    >
      <Root ratio={ratio}>
        <Image src={url} alt={description} fill objectFit={fit} />
      </Root>
    </div>
  );
};
