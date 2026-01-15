import { randomUUID } from "crypto";

import Image from "next/image";
import NextLink from "next/link";

import { olive } from "@/app/_styles/palette";
import { combineClassNames } from "@/app/_utils";

import styles from "./AspectImage.module.css";

import type { AspectImageProps } from "./types";

const shimmer = (id: string) => `
<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g-${id}">
      <stop stop-color="${olive[2]}" offset="0%" />
      <stop stop-color="${olive[3]}" offset="50%" />
      <stop stop-color="${olive[2]}" offset="100%" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="${olive[2]}" />
  <rect id="r-${id}" width="100%" height="100%" fill="url(#g-${id})" />
  <animate xlink:href="#r-${id}" attributeName="x" from="-100%" to="100%" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export const AspectImage = async ({
  borderRadius = "0.25rem",
  className,
  description,
  fit = "contain",
  ratio = 1,
  style,
  url,
  href,
  width,
  shadow = false,
}: React.PropsWithChildren<AspectImageProps>) => {
  const uniqueId = randomUUID();

  const imageElement = (
    <Image
      src={url}
      alt={description}
      fill
      style={{ objectFit: fit }}
      placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(uniqueId))}`}
    />
  );

  return (
    <div
      className={combineClassNames(
        styles.container,
        shadow && styles.shadow,
        className
      )}
      style={
        {
          "--width": width,
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
