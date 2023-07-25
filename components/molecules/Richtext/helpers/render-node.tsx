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
  Snippet,
  Table,
  Td,
  Th,
  Tr,
  Text,
  UnorderedList,
} from "@/components/atoms";
import { ContentCard } from "../../ContentCard";
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
      <Heading size="h1" css={{ marginTop: "$11" }} id={node.content[0].value}>
        {children}
      </Heading>
    );
  },

  [BLOCKS.HEADING_2]: (node: RichtextNodeType, children: ReactNode) => {
    if (!("value" in node.content[0])) {
      return null;
    }
    return (
      <Heading size="h3" css={{ marginTop: "$6" }} id={node.content[0].value}>
        {children}
      </Heading>
    );
  },

  [BLOCKS.PARAGRAPH]: (_: RichtextNodeType, children: ReactNode) => (
    <Text as="p">{children}</Text>
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
    return (
      <Blockquote
        css={{
          "&:not(:first-child)": {
            marginTop: "$6",
          },
          "&:not(:last-child)": {
            marginBottom: "$6",
          },
        }}>
        {children}
      </Blockquote>
    );
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
          width: "calc(100% + $8)",
          marginLeft: "-$6",
          "&:not(:first-child)": {
            marginTop: "$8",
          },
          "&:not(:last-child)": {
            marginBottom: "$8",
          },
          borderRadius: "$md",
          overflow: "hidden",
        }}>
        <Image src={url} alt={description} fill />
      </AspectRatio>
    );
  },

  [BLOCKS.EMBEDDED_ENTRY]: (node: RichtextNodeType) => {
    const entry = entryBlockMap.get(node.data.target.sys.id);

    if (entry.__typename === "Snippet") {
      return <Snippet code={entry.code} language={entry.language} />;
    }

    if (entry.__typename === "Post") {
      console.log(entry);
      return (
        <ContentCard
          title={entry.title}
          description={entry.description}
          slug={entry.slug}
          category={entry.category}
          css={{ marginTop: "$6" }}
        />
      );
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
