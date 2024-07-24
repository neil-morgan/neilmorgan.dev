import { Root } from "@radix-ui/react-aspect-ratio";
import type { AspectIframeProps } from "./types";
import { AspectIframeContainer, Iframe } from "./styles";

export const AspectIframe = ({
  url,
  ratio = 16 / 9,
  width,
  css,
}: React.PropsWithChildren<AspectIframeProps>) => (
  <AspectIframeContainer css={{ width: `${width}px`, ...css }}>
    <Root ratio={ratio}>
      <Iframe
        width="100%"
        height="100%"
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </Root>
  </AspectIframeContainer>
);
