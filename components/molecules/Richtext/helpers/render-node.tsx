"use client";

import { BLOCKS, INLINES, type Document } from "@contentful/rich-text-types";
import type { ReactNode } from "react";
import {
  Table,
  Heading,
  Paragraph,
  Snippet,
  OrderedList,
  Divider,
  Link,
  Td,
  Tr,
  Th,
  ListItem,
  UnorderedList,
} from "@/components/atoms";
import type { RichtextNodeType } from "../types";
import { removeParagraphTags, renderMark } from ".";

export const renderNode = (entryBlockMap: Map<any, any>) => ({
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

  [BLOCKS.QUOTE]: (_: RichtextNodeType, children: ReactNode) => (
    <blockquote>{children}</blockquote>
  ),

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

  [INLINES.HYPERLINK]: ({ data }: RichtextNodeType, children: ReactNode) => (
    <Link href={data.uri}>{children}</Link>
  ),
  // [BLOCKS.EMBEDDED_ASSET]: ({ data }) => (
  //   <RichtextImage
  //     id={data.target.sys.id}
  //     assets={content.links.assets.block}
  //   />
  // ),

  [BLOCKS.EMBEDDED_ENTRY]: (node: RichtextNodeType) => {
    const { code, language, __typename } = entryBlockMap.get(
      node.data.target.sys.id,
    );

    if (__typename === "Snippet") {
      return <Snippet code={code} language={language} />;
    }
  },
});
