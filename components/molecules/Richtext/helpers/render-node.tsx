"use client";

import { BLOCKS, INLINES, type Document } from "@contentful/rich-text-types";
import type { ReactNode } from "react";
import {
  AspectRatio,
  Blockquote,
  Divider,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Paragraph,
  Snippet,
  Table,
  Td,
  Th,
  Tr,
  UnorderedList,
} from "@/components/atoms";
import Image from "next/image";
import type { RichtextNodeType, RichtextBlockMapType } from "../types";
import { removeParagraphTags, renderMark } from ".";

export const renderNode = (
  entryBlockMap: RichtextBlockMapType,
  inlineBlockMap: RichtextBlockMapType,
  assetBlockMap: RichtextBlockMapType,
) => ({
  [BLOCKS.HEADING_1]: (node: RichtextNodeType, children: ReactNode) => {
    if (!("value" in node.content[0])) {
      return null;
    }
    return (
      <Heading size="primary" id={node.content[0].value}>
        {children}
      </Heading>
    );
  },

  [BLOCKS.HEADING_2]: (node: RichtextNodeType, children: ReactNode) => {
    if (!("value" in node.content[0])) {
      return null;
    }
    return (
      <Heading size="secondary" id={node.content[0].value}>
        {children}
      </Heading>
    );
  },

  [BLOCKS.PARAGRAPH]: (_: RichtextNodeType, children: ReactNode) => (
    <Paragraph>{children}</Paragraph>
  ),

  [BLOCKS.UL_LIST]: (_: RichtextNodeType, children: ReactNode) => (
    <UnorderedList>{children}</UnorderedList>
  ),

  [BLOCKS.OL_LIST]: (_: RichtextNodeType, children: ReactNode) => (
    <OrderedList>{children}</OrderedList>
  ),

  [BLOCKS.LIST_ITEM]: (node: RichtextNodeType) => {
    const children = removeParagraphTags(node as Document, renderMark, "li");
    return <ListItem>{children}</ListItem>;
  },

  [BLOCKS.HR]: () => <Divider size="lg" />,

  [BLOCKS.QUOTE]: (node: RichtextNodeType) => {
    const children = removeParagraphTags(node as Document, renderMark, "quote");
    return <Blockquote>{children}</Blockquote>;
  },

  [BLOCKS.TABLE]: (_: RichtextNodeType, children: ReactNode) => (
    <Table>{children}</Table>
  ),

  [BLOCKS.TABLE_ROW]: (_: RichtextNodeType, children: ReactNode) => (
    <Tr>{children}</Tr>
  ),

  [BLOCKS.TABLE_HEADER_CELL]: (node: RichtextNodeType) => {
    const children = removeParagraphTags(node as Document, renderMark, "th");
    return <Th>{children}</Th>;
  },

  [BLOCKS.TABLE_CELL]: (node: RichtextNodeType) => {
    const children = removeParagraphTags(node as Document, renderMark, "td");
    return <Td>{children}</Td>;
  },

  [BLOCKS.EMBEDDED_ASSET]: ({ data }: RichtextNodeType) => {
    const { url, description } = assetBlockMap.get(data.target.sys.id);
    return (
      <AspectRatio
        css={{
          "&:not(:first-child)": {
            marginTop: "$6",
          },
          "&:not(:last-child)": {
            marginBottom: "$6",
          },
          borderRadius: "$md",
          overflow: "hidden",
        }}>
        <Image src={url} alt={description} fill />
      </AspectRatio>
    );
  },

  [BLOCKS.EMBEDDED_ENTRY]: (node: RichtextNodeType) => {
    const { code, language, __typename } = entryBlockMap.get(
      node.data.target.sys.id,
    );
    if (__typename === "Snippet") {
      return <Snippet code={code} language={language} />;
    }
  },

  [INLINES.EMBEDDED_ENTRY]: (node: RichtextNodeType) => {
    const { __typename, slug, title } = inlineBlockMap.get(
      node.data.target.sys.id,
    );
    if (__typename === "Post") {
      return <Link href={slug}>{title}</Link>;
    }
  },

  [INLINES.HYPERLINK]: ({ data }: RichtextNodeType, children: ReactNode) => (
    <Link href={data.uri}>{children}</Link>
  ),
});
