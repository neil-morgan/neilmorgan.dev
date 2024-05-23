"use client";

import { AuthorImageWrapper } from "./styles";
import type { AuthorImageProps } from "./types";
import { Icon, AspectImage } from "@/components/atoms";

export const AuthorImage = ({ url, name, size = "md" }: AuthorImageProps) => (
  <AuthorImageWrapper size={size}>
    <Icon size="xl" name="Quote" />
    {url && (
      <AspectImage
        css={{ position: "absolute", inset: 0 }}
        ratio={1}
        fit="cover"
        url={url}
        description={`${name}'s profile picture`}
      />
    )}
  </AuthorImageWrapper>
);
