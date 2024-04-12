"use client";

import type { InfoMessageProps } from "./types";
import { Wrapper } from "./styles";
import { Button, Text } from "@/components/atoms";

export const InfoMessage = ({ heading, message, action }: InfoMessageProps) => (
  <Wrapper>
    <Text as="h2" size={8} color="$white">
      {heading}
    </Text>
    <Text size={5}>{message}</Text>
    {action && (
      <Button
        css={{ marginTop: "$6" }}
        href={action.href}
        leftIcon="ArrowTopLeft">
        {action.label}
      </Button>
    )}
  </Wrapper>
);
