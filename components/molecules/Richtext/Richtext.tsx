"use client";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import {
  BLOCKS,
  INLINES,
  MARKS,
  type Document,
} from "@contentful/rich-text-types";
import type { ReactNode } from "react";
import { Table, Heading } from "@/components/atoms";
import type { RichtextProps } from "./types";
import { removeParagraphTags } from "./helpers";

export const Richtext = ({ content }: RichtextProps) => {
  const renderMark = {
    [MARKS.BOLD]: (text: ReactNode) => <strong>{text}</strong>,
    [MARKS.CODE]: (text: ReactNode) => {
      console.log(text);
      return (
        <pre>
          <code>{text}</code>
        </pre>
      );
    },
  };

  return (
    <article>
      {documentToReactComponents(content.json, {
        renderMark,
        renderNode: {
          [BLOCKS.HEADING_1]: (node, children) => {
            if (!("value" in node.content[0])) {
              return null;
            }

            return (
              <Heading as="h2" id={node.content[0].value}>
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

          [BLOCKS.PARAGRAPH]: (node, children) => {
            if (
              node.content.length === 1 &&
              "marks" in node.content[0] &&
              node.content[0].marks.find(x => x.type === "code")
            ) {
              return <>{children}</>;
            }
            return <p>{children}</p>;
          },

          [BLOCKS.UL_LIST]: (_, children) => <ul>{children}</ul>,

          [BLOCKS.OL_LIST]: (_, children) => <ol>{children}</ol>,

          [BLOCKS.LIST_ITEM]: node => {
            const children = removeParagraphTags(
              node as Document,
              renderMark,
              "li",
            );
            return <li>{children}</li>;
          },

          [BLOCKS.HR]: () => <hr />,

          [BLOCKS.QUOTE]: (_, children) => <blockquote>{children}</blockquote>,

          [BLOCKS.TABLE]: (_, children) => <Table>{children}</Table>,

          [BLOCKS.TABLE_ROW]: (_, children) => <tr>{children}</tr>,

          [BLOCKS.TABLE_HEADER_CELL]: node => {
            const children = removeParagraphTags(
              node as Document,
              renderMark,
              "th",
            );
            return <th>{children}</th>;
          },

          [BLOCKS.TABLE_CELL]: node => {
            const children = removeParagraphTags(
              node as Document,
              renderMark,
              "td",
            );
            return <td>{children}</td>;
          },

          [INLINES.HYPERLINK]: ({ data }, children) => (
            <a href={data.uri}>{children}</a>
          ),

          // [BLOCKS.EMBEDDED_ASSET]: ({ data }) => (
          //   <RichtextImage
          //     id={data.target.sys.id}
          //     assets={content.links.assets.block}
          //   />
          // ),
        },

        renderText: (text: string) =>
          text
            .split("\n")
            .flatMap((text, i) => [i > 0 && <br key={i} />, text]),
      })}
    </article>
  );
};
