import { Root } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import type { AspectImageProps } from "./types";
import { AspectImageContainer } from "./styles";

export const AspectImage = ({
  url,
  description,
  blurDataUrl,
  ratio = 809 / 500,
}: React.PropsWithChildren<AspectImageProps>) => (
  <AspectImageContainer>
    <Root ratio={ratio}>
      <Image
        src={url}
        alt={description || "A blog post image"}
        fill
        placeholder="blur"
        blurDataURL={blurDataUrl}
      />
    </Root>
  </AspectImageContainer>
);
