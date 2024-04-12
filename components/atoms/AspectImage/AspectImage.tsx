import { Root } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import type { AspectImageProps } from "./types";
import { AspectImageContainer } from "./styles";

export const AspectImage = ({
  url,
  description,
  blurDataUrl,
  fit = "contain",
  ratio = 809 / 500,
  width,
}: React.PropsWithChildren<AspectImageProps>) => (
  <AspectImageContainer css={{ width: `${width}px` }}>
    <Root ratio={ratio}>
      <Image
        src={url}
        alt={description}
        fill
        objectFit={fit}
        placeholder="blur"
        blurDataURL={blurDataUrl}
      />
    </Root>
  </AspectImageContainer>
);
