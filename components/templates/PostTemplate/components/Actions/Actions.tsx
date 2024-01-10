"use client";

import { usePathname } from "next/navigation";
import { Wrapper, Container } from "./styles";
import type { ActionsProps } from "./types";
import { CopyButton } from "@/components/molecules";
import { Text } from "@/components/atoms";
import { SITE_BASE_URL } from "@/lib/site";

export const Actions = ({ text }: ActionsProps) => {
  const pathname = usePathname();
  return (
    <Wrapper>
      <Container>
        <CopyButton
          value={`${SITE_BASE_URL}${pathname}`}
          message="Url copied to clipboard"
        />
      </Container>
      <Text size={1} weight={300} as="span" color="$text">
        {text}
      </Text>
    </Wrapper>
  );
};
