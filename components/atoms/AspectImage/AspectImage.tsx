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
  css,
}: React.PropsWithChildren<AspectImageProps>) => (
  <AspectImageContainer css={{ maxWidth: `${width}px`, ...css }}>
    <Root ratio={ratio}>
      <Image
        src={url}
        alt={description}
        fill
        objectFit={fit}
        {...(blurDataUrl && { placeholder: "blur", blurDataURL: blurDataUrl })}
      />
    </Root>
  </AspectImageContainer>
);
