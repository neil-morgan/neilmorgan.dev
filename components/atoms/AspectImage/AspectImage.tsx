import { Root } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import type { AspectImageProps } from "./types";
import { AspectImageContainer } from "./styles";

export const AspectImage = ({
  src,
  alt,
  ratio = 809 / 500,
}: React.PropsWithChildren<AspectImageProps>) => (
  <AspectImageContainer>
    <Root ratio={ratio}>
      <Image
        src={src}
        alt={alt || "A blog post image"}
        fill
        placeholder="blur"
        blurDataURL={`/api/placeholder-image?imageUrl=${src}`}
      />
    </Root>
  </AspectImageContainer>
);
