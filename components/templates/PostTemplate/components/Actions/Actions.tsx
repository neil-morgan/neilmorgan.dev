"use client";

import { usePathname } from "next/navigation";
import { Wrapper, Container } from "./styles";
import type { ActionsProps } from "./types";
import { LikeButton, CopyButton } from "@/components/molecules";
import { Text } from "@/components/atoms";
import { SITE_BASE_URL } from "@/lib/site";

export const Actions = ({ likes, id, text }: ActionsProps) => {
  const pathname = usePathname();
  return (
    <Wrapper>
      <Container>
        <CopyButton
          text={`${SITE_BASE_URL}${pathname}`}
          message="Url copied to clipboard"
        />
        <LikeButton likes={likes} id={id} />
      </Container>

      <Text size={1} weight={300} as="span">
        {text}
      </Text>
    </Wrapper>
  );
};
