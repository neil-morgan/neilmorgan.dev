"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

export const LoadableImage = ({ alt, ...props }: ImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <Image
      {...props}
      alt={alt}
      data-loaded={loaded}
      onLoad={() => setLoaded(true)}
    />
  );
};
