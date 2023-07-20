"use client";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  BLOCKS,
  INLINES,
  MARKS,
  type Document,
} from "@contentful/rich-text-types";
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
import type { RichtextProps } from "./types";
import { removeParagraphTags, getBlockMaps } from "./helpers";
import { Article } from "./styles";

export const Richtext = ({ content }: RichtextProps) => {
  const { entryBlockMap, assetBlockMap } = getBlockMaps(content.links);

  const renderMark = {
    [MARKS.BOLD]: (text: ReactNode) => <strong>{text}</strong>,
  };

  const renderText = (text: string) =>
    text.split("\n").flatMap((text, i) => [i > 0 && <br key={i} />, text]);

  return (
    <Article>
      {documentToReactComponents(content.json, {
        renderMark,
        renderText,
        renderNode: {
          [BLOCKS.HEADING_1]: (node, children) => {
            if (!("value" in node.content[0])) {
              return null;
            }

            return (
              <Heading as="h1" id={node.content[0].value}>
                {children}
              </Heading>
            );
          },
          [BLOCKS.HEADING_2]: (node, children) => {
            if (!("value" in node.content[0])) {
              return null;
            }

            return (
              <Heading as="h3" id={node.content[0].value}>
                {children}
              </Heading>
            );
          },

          [BLOCKS.PARAGRAPH]: (_, children) => (
            <Paragraph>{children}</Paragraph>
          ),
          [BLOCKS.UL_LIST]: (_, children) => (
            <UnorderedList>{children}</UnorderedList>
          ),

          [BLOCKS.OL_LIST]: (_, children) => (
            <OrderedList>{children}</OrderedList>
          ),

          [BLOCKS.LIST_ITEM]: node => {
            const children = removeParagraphTags(
              node as Document,
              renderMark,
              "li",
            );
            return <ListItem>{children}</ListItem>;
          },

          [BLOCKS.HR]: () => <Divider size="lg" />,

          [BLOCKS.QUOTE]: (_, children) => <blockquote>{children}</blockquote>,

          [BLOCKS.TABLE]: (_, children) => <Table>{children}</Table>,

          [BLOCKS.TABLE_ROW]: (_, children) => <Tr>{children}</Tr>,

          [BLOCKS.TABLE_HEADER_CELL]: node => {
            const children = removeParagraphTags(
              node as Document,
              renderMark,
              "th",
            );
            return <Th>{children}</Th>;
          },

          [BLOCKS.TABLE_CELL]: node => {
            const children = removeParagraphTags(
              node as Document,
              renderMark,
              "td",
            );
            return <Td>{children}</Td>;
          },

          [INLINES.HYPERLINK]: ({ data }, children) => {
            return <Link href={data.uri}>{children}</Link>;
          },

          // [BLOCKS.EMBEDDED_ASSET]: ({ data }) => (
          //   <RichtextImage
          //     id={data.target.sys.id}
          //     assets={content.links.assets.block}
          //   />
          // ),

          [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
            const { code, language, __typename } = entryBlockMap.get(
              node.data.target.sys.id,
            );

            if (__typename === "Snippet") {
              return <Snippet code={code} language={language} />;
            }
          },
        },
      })}
    </Article>
  );
};
