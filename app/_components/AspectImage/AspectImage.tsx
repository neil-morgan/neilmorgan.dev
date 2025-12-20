import Image from "next/image";

import { Root } from "@radix-ui/react-aspect-ratio";

import { steel } from "@/app/_styles/palette";
import { combineClassNames } from "@/app/_utils";

import styles from "./AspectImage.module.css";

import type { AspectImageProps } from "./types";

const shimmer = () => `
<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="${steel[2]}" offset="0%" />
      <stop stop-color="${steel[3]}" offset="50%" />
      <stop stop-color="${steel[2]}" offset="100%" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="${steel[2]}" />
  <rect id="r" width="100%" height="100%" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-100%" to="100%" dur="1s" repeatCount="indefinite"  />
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
        <div
          dangerouslySetInnerHTML={{ __html: shimmer() }}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
        />
        {/* <Image
          src="" // Temporarily empty to show placeholder
          alt={description}
          fill
          objectFit={fit}
          placeholder={`data:image/svg+xml;base64,${toBase64(shimmer())}`}
        /> */}
      </Root>
    </div>
  );
};
