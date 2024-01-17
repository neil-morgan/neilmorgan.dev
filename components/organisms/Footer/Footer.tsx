"use client";

import { FooterElement, CopyRight } from "./styles";
import type { FooterProps } from "./types";
import { Logo } from "@/components/molecules";
import { Container, Button, List, Text } from "@/components/atoms";

export const Footer = ({ content }: FooterProps) => (
  <FooterElement>
    <Container css={{ display: "flex", justifyContent: "space-between" }}>
      {content.navigation.map(({ title, slug }, i) => (
        <List key={slug + i} gap="$4">
          <Text size={1}>Links</Text>
          <Button asLink href={slug}>
            {title}
          </Button>
        </List>
      ))}
      <CopyRight>
        <Logo isLink />
        <Text size={0} weight={300} textAlign="right">
          All rights reserved <br />© Neil Morgan 2024
        </Text>
      </CopyRight>
    </Container>
  </FooterElement>
);
