import type { ReactNode } from "react";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

import { Components, Link } from "@/app/_components";
import type { Typename } from "@/app/_types";
import { isInternalUrl } from "@/app/_utils";

import {
  getRichtextEntry,
  renderMark,
  removeParagraphTags,
  renderText,
  getNodeValue,
} from "./helpers";

import type { RichtextNodeType, RichtextProps } from "./Richtext.types";

export const Richtext = ({ links, json }: RichtextProps) => (
  <>
    {documentToReactComponents(json, {
      renderMark,
      renderText,
      renderNode: {
        [BLOCKS.EMBEDDED_ENTRY]: (node: RichtextNodeType) => {
          if (!links) return null;
          const entry = getRichtextEntry(links, node);
          if (!entry?.sys.id || !entry.__typename) return null;
          return (
            <Components
              id={entry.sys.id}
              __typename={entry.__typename as Typename}
            />
          );
        },

        // [BLOCKS.EMBEDDED_ASSET]: ({ data }: RichtextNodeType) => {
        //   if (!content.links) return null;
        //   const { url, description, title } = getBlockMap(content.links).get(
        //     data.target.sys.id
        //   );
        //   return <img />;
        // },

        // [INLINES.EMBEDDED_ENTRY]: (node: RichtextNodeType) => {
        //   if (!content.links) {
        //     return null;
        //   }
        //   const { inlineBlockMap } = getBlockMaps(content.links);
        //   const { __typename, slug, title } = inlineBlockMap.get(
        //     node.data.target.sys.id
        //   );
        // },

        [BLOCKS.HEADING_1]: (node: RichtextNodeType, children: ReactNode) => {
          const value = getNodeValue(node);
          if (!value) return null;
          return <h1 id={value}>{children}</h1>;
        },

        [BLOCKS.HEADING_2]: (node: RichtextNodeType, children: ReactNode) => {
          const value = getNodeValue(node);
          if (!value) return null;
          return <h2 id={value}>{children}</h2>;
        },

        [BLOCKS.PARAGRAPH]: (node: RichtextNodeType, children: ReactNode) => {
          const value = getNodeValue(node);
          if (node.content.length === 1 && !value) return null;
          return <p>{children}</p>;
        },

        [BLOCKS.UL_LIST]: (_: RichtextNodeType, children: ReactNode) => (
          <ul>{children}</ul>
        ),

        [BLOCKS.OL_LIST]: (_: RichtextNodeType, children: ReactNode) => (
          <ol>{children}</ol>
        ),

        [BLOCKS.LIST_ITEM]: (node: RichtextNodeType) => {
          const children = removeParagraphTags(node, "li");
          return <li>{children}</li>;
        },

        [BLOCKS.HR]: () => <hr />,

        [BLOCKS.QUOTE]: (node: RichtextNodeType) => {
          const children = removeParagraphTags(node, "quote");
          return <blockquote>{children}</blockquote>;
        },

        [BLOCKS.TABLE]: (_: RichtextNodeType, children: ReactNode) => (
          <table>{children}</table>
        ),

        [BLOCKS.TABLE_ROW]: (_: RichtextNodeType, children: ReactNode) => (
          <tr>{children}</tr>
        ),

        [BLOCKS.TABLE_HEADER_CELL]: (node: RichtextNodeType) => {
          const children = removeParagraphTags(node, "th");
          return <th>{children}</th>;
        },

        [BLOCKS.TABLE_CELL]: (node: RichtextNodeType) => {
          const children = removeParagraphTags(node, "td");
          return <td>{children}</td>;
        },

        [INLINES.HYPERLINK]: (node: RichtextNodeType, children: ReactNode) => (
          <Link
            href={node.data.uri}
            {...(!isInternalUrl(node.data.uri) && { target: "_blank" })}
          >
            {children}
          </Link>
        ),
      },
    })}
  </>
);
