"use client";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import type { ReactNode } from "react";
import Image from "next/image";
import {
  getBlockMaps,
  renderMark,
  removeParagraphTags,
  renderText,
  getNodeValue,
} from "./helpers";
import type { RichtextNodeType, RichtextProps } from "./types";
import { Heading } from "./components";
import { Article } from "./styles";
import { FlowChart } from "@/components/molecules";
import {
  AspectRatio,
  Blockquote,
  CodeSnippet,
  ExpandedEdge,
  Link,
  List,
  Separator,
  Table,
  Td,
  Text,
  Th,
  Tr,
} from "@/components/atoms";
import { isInternalUrl } from "@/utils";

export const Richtext = ({ content, setCurrentId }: RichtextProps) => {
  const { entryBlockMap, inlineBlockMap, assetBlockMap } = getBlockMaps(
    content.links,
  );

  return (
    <Article>
      {documentToReactComponents(content.json, {
        renderMark,
        renderText,
        renderNode: {
          [BLOCKS.HEADING_1]: (node: RichtextNodeType, children: ReactNode) => {
            const value = getNodeValue(node);
            if (!value) return null;
            return (
              <Heading
                size={7}
                weight={600}
                as="h2"
                css={{ marginTop: "$10" }}
                isInViewport={setCurrentId}
                id={value}>
                {children}
              </Heading>
            );
          },

          [BLOCKS.HEADING_2]: (node: RichtextNodeType, children: ReactNode) => {
            const value = getNodeValue(node);
            if (!value) return null;
            return (
              <Heading
                size={5}
                weight={600}
                as="h3"
                isInViewport={setCurrentId}
                css={{ marginTop: "$10" }}
                id={value}>
                {children}
              </Heading>
            );
          },

          [BLOCKS.PARAGRAPH]: (_: RichtextNodeType, children: ReactNode) => (
            <Text as="p">{children}</Text>
          ),
          [BLOCKS.UL_LIST]: (_: RichtextNodeType, children: ReactNode) => (
            <List format="bullets">{children}</List>
          ),

          [BLOCKS.OL_LIST]: (_: RichtextNodeType, children: ReactNode) => (
            <List format="numbers">{children}</List>
          ),

          [BLOCKS.LIST_ITEM]: (node: RichtextNodeType) => {
            const children = removeParagraphTags(node, "li");
            return <li>{children}</li>;
          },

          [BLOCKS.HR]: () => <Separator size="lg" />,

          [BLOCKS.QUOTE]: (node: RichtextNodeType) => {
            const children = removeParagraphTags(node, "quote");
            return (
              <ExpandedEdge
                css={{
                  "&:not(:first-child)": {
                    marginTop: "$6",
                  },
                  "&:not(:last-child)": {
                    marginBottom: "$6",
                  },
                }}>
                <Blockquote>{children}</Blockquote>
              </ExpandedEdge>
            );
          },

          [BLOCKS.TABLE]: (_: RichtextNodeType, children: ReactNode) => (
            <Table>{children}</Table>
          ),

          [BLOCKS.TABLE_ROW]: (_: RichtextNodeType, children: ReactNode) => (
            <Tr>{children}</Tr>
          ),

          [BLOCKS.TABLE_HEADER_CELL]: (node: RichtextNodeType) => {
            const children = removeParagraphTags(node, "th");
            return <Th>{children}</Th>;
          },

          [BLOCKS.TABLE_CELL]: (node: RichtextNodeType) => {
            const children = removeParagraphTags(node, "td");
            return <Td>{children}</Td>;
          },

          [BLOCKS.EMBEDDED_ASSET]: ({ data }: RichtextNodeType) => {
            const { url, description } = assetBlockMap.get(data.target.sys.id);
            return (
              <ExpandedEdge>
                <AspectRatio>
                  <Image src={url} alt={description} fill />
                </AspectRatio>
              </ExpandedEdge>
            );
          },

          [BLOCKS.EMBEDDED_ENTRY]: (node: RichtextNodeType) => {
            const entry = entryBlockMap.get(node.data.target.sys.id);

            //! split this into a component later

            if (entry.__typename === "FlowChart") {
              return <FlowChart />;
            }

            if (entry.__typename === "Snippet") {
              return (
                <ExpandedEdge>
                  <CodeSnippet code={entry.code} language={entry.language} />
                </ExpandedEdge>
              );
            }

            // if (entry.__typename === "Post") {
            //   return <div>NEEDS CONTENT</div>;
            // }
          },

          [INLINES.EMBEDDED_ENTRY]: (node: RichtextNodeType) => {
            const { __typename, slug, title } = inlineBlockMap.get(
              node.data.target.sys.id,
            );
            if (__typename === "Post") {
              return <Link href={slug}>{title}</Link>;
            }
          },

          [INLINES.HYPERLINK]: (
            node: RichtextNodeType,
            children: ReactNode,
          ) => (
            <Link
              href={node.data.uri}
              {...(!isInternalUrl(node.data.uri) && { target: "_blank" })}>
              {children}
            </Link>
          ),
        },
      })}
    </Article>
  );
};
