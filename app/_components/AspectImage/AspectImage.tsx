import Image from "next/image";
import NextLink from "next/link";
import { type CssSizeConfigType } from "@/app/_styles";
import { combineClassNames, createCssSizeVariables } from "@/app/_utils";
import styles from "./AspectImage.module.css";
import type { AspectImageProps } from "./types";

const breakpointSizes: CssSizeConfigType = {
  xs: "1rem",
  sm: "2.5rem",
  md: "5rem",
  lg: "7rem",
  xl: "10rem",
};

export const AspectImage = ({
  borderRadius = "0.25rem",
  className,
  description,
  fit = "contain",
  ratio = 1,
  style,
  url,
  href,
  scale = "up",
  sizes,
  size = "3rem",
  shadow = false,
}: React.PropsWithChildren<AspectImageProps>) => {
  const sizeVariable = createCssSizeVariables(size, breakpointSizes);

  const imageElement = (
    <Image
      src={url}
      alt={description}
      fill
      sizes={sizes}
      style={{ objectFit: fit }}
    />
  );

  return (
    <div
      className={combineClassNames(
        styles.container,
        scale === "up" ? styles.scaleUp : styles.scaleDown,
        shadow && styles.shadow,
        className,
      )}
      style={
        {
          ...sizeVariable,
          "--border-radius": borderRadius,
          "--aspect-ratio": ratio,
          ...style,
        } as React.CSSProperties
      }
    >
      {href ? <NextLink href={href}>{imageElement}</NextLink> : imageElement}
    </div>
  );
};
