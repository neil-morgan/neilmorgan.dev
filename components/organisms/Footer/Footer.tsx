"use client";

import { FooterElement, CopyRight, Content } from "./styles";
import type { FooterProps } from "./types";
import { Logo } from "@/components/molecules";
import { Container, Button, Text, List, Separator } from "@/components/atoms";

export const Footer = ({ content }: FooterProps) => (
  <FooterElement>
    <Container>
      <Separator size="xl" />
      <Content>
        <List gap="$3">
          <Text size={1}>Links</Text>
          {content.navigation.map(({ title, slug }, i) => (
            <Button asLink href={slug} key={slug + i}>
              {title}
            </Button>
          ))}
        </List>
        <CopyRight>
          <Logo isLink />
          <Text size={0} weight={300} textAlign="right">
            All rights reserved <br />© Neil Morgan 2024
          </Text>
        </CopyRight>
      </Content>
    </Container>
  </FooterElement>
);
