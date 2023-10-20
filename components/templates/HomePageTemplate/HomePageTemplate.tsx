"use client";

import {
  Button,
  Container,
  Heading,
  Text,
  HorizontalSeparator,
} from "@/components/atoms";
import { styled } from "@/lib/stitches";

const Bg = styled("div", {
  display: "flex",
  width: "100%",
  flexWrap: "wrap",
  gap: "$4",
  margin: "$8 0",
});

const Box = styled("div", {
  height: "100px",
  width: "100px",
  background: "red",
});

export const HomePageTemplate = () => (
  <Container>
    {/* <Bg>
      {Array.from({ length: 12 }, (_, i) => (
        <Box key={i} css={{ background: `$base${i + 1}` }} />
      ))}
    </Bg> */}

    <Bg>
      {Array.from({ length: 14 }, (_, i) => (
        <Box key={i} css={{ background: `$base${i + 1}` }} />
      ))}
    </Bg>
    <HorizontalSeparator />
    {Array.from({ length: 6 }, (_, i) => (
      <Heading key={i} size={`h${i + 1}`}>
        Heading
      </Heading>
    ))}
    <Text>This is some text</Text>

    <Button>Button</Button>
    <Button priority="primary">Button</Button>
  </Container>
);
