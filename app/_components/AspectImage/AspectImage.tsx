import NextLink from "next/link";
import { normalizeFocalPoint } from "@/app/_helpers";
import { type CssSizeConfigType } from "@/app/_styles";
import { combineClassNames, createCssSizeVariables } from "@/app/_utils";
import skeletonStyles from "@/app/_components/Skeleton/Skeleton.module.css";
import styles from "./AspectImage.module.css";
import { LoadableImage } from "./LoadableImage";
import type { AspectImageProps } from "./types";

const breakpointSizes: CssSizeConfigType = {
  xs: "1rem",
  sm: "2.5rem",
  md: "5rem",
  lg: "7rem",
  xl: "10rem",
};

const centeredPosition = (
  coordinate: number,
  imageSize: number,
  cropSize: number,
) => {
  const overflow = imageSize - cropSize;
  if (overflow <= 0) return 50;
  // CSS percentages align matching points on the image and crop, not the focal point with the center.
  return (
    Math.min(
      1,
      Math.max(0, (coordinate * imageSize - cropSize / 2) / overflow),
    ) * 100
  );
};

export const AspectImage = ({
  borderRadius = "0.25rem",
  className,
  description,
  fit = "contain",
  loading = "lazy",
  ratio = 1,
  style,
  url,
  href,
  focalPoint: cmsFocalPoint,
  sourceSize,
  scale = "up",
  sizes,
  size = "3rem",
  shadow = false,
}: React.PropsWithChildren<AspectImageProps>) => {
  const sizeVariable = createCssSizeVariables(size, breakpointSizes);
  const focalPoint = normalizeFocalPoint(
    cmsFocalPoint,
    sourceSize?.width,
    sourceSize?.height,
  );
  let objectPosition = focalPoint
    ? `${focalPoint.x * 100}% ${focalPoint.y * 100}%`
    : undefined;

  if (focalPoint && fit === "cover") {
    const width = sourceSize?.width;
    const height = sourceSize?.height;
    if (
      typeof width !== "number" ||
      typeof height !== "number" ||
      !Number.isFinite(width) ||
      !Number.isFinite(height) ||
      width <= 0 ||
      height <= 0 ||
      !Number.isFinite(ratio) ||
      ratio <= 0
    ) {
      throw new Error(
        "AspectImage requires positive source dimensions and crop ratio to center a cover focal point.",
      );
    }
    const sourceRatio = width / height;
    const renderedWidth = Math.max(ratio, sourceRatio);
    const renderedHeight = Math.max(1, ratio / sourceRatio);
    objectPosition = `${centeredPosition(focalPoint.x, renderedWidth, ratio)}% ${centeredPosition(focalPoint.y, renderedHeight, 1)}%`;
  }

  const imageElement = (
    <LoadableImage
      key={url}
      src={url}
      alt={description}
      fill
      sizes={sizes}
      style={{
        objectFit: fit,
        objectPosition,
      }}
      loading={loading}
    />
  );

  return (
    <div
      className={combineClassNames(
        styles.container,
        skeletonStyles.shimmer,
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
