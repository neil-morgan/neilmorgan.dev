import type { ReactNode } from "react";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

import { Components } from "@/app/_components";
import { Link } from "@/app/_components";
import type { Typename } from "@/app/_types";
import { isInternalUrl } from "@/app/_utils";
import { combineClassNames } from "@/app/_utils";

import {
  getRichtextEntry,
  renderMark,
  getBlockMaps,
  removeParagraphTags,
  renderText,
  getNodeValue,
} from "./helpers";
import styles from "./Richtext.module.css";

import type { RichtextNodeType, RichtextProps } from "./Richtext.types";

export const Richtext = ({ links, json, noPadding }: RichtextProps) => {
  const padding = !noPadding && styles.padding;
  return (
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

          [INLINES.EMBEDDED_ENTRY]: (node: RichtextNodeType) => {
            if (!links) return null;

            const { inlineBlockMap } = getBlockMaps(links);
            const entry = inlineBlockMap.get(node.data.target.sys.id);

            if (!entry?.sys.id || !entry.__typename) return null;

            return (
              <Components
                id={entry.sys.id}
                __typename={entry.__typename as Typename}
              />
            );
          },

          [BLOCKS.HEADING_1]: (node: RichtextNodeType, children: ReactNode) => {
            const value = getNodeValue(node);
            if (!value) return null;
            return (
              <h1 id={value} className={combineClassNames(styles.h1, padding)}>
                {children}
              </h1>
            );
          },

          [BLOCKS.HEADING_2]: (node: RichtextNodeType, children: ReactNode) => {
            const value = getNodeValue(node);
            if (!value) return null;
            return (
              <h2 id={value} className={combineClassNames(styles.h2, padding)}>
                {children}
              </h2>
            );
          },

          [BLOCKS.HEADING_3]: (node: RichtextNodeType, children: ReactNode) => {
            const value = getNodeValue(node);
            if (!value) return null;
            return (
              <h3 id={value} className={combineClassNames(styles.h3, padding)}>
                {children}
              </h3>
            );
          },

          [BLOCKS.HEADING_4]: (node: RichtextNodeType, children: ReactNode) => {
            const value = getNodeValue(node);
            if (!value) return null;
            return (
              <h4 id={value} className={combineClassNames(styles.h4, padding)}>
                {children}
              </h4>
            );
          },

          [BLOCKS.HEADING_5]: (node: RichtextNodeType, children: ReactNode) => {
            const value = getNodeValue(node);
            if (!value) return null;
            return (
              <h5 id={value} className={combineClassNames(styles.h5, padding)}>
                {children}
              </h5>
            );
          },

          [BLOCKS.HEADING_6]: (node: RichtextNodeType, children: ReactNode) => {
            const value = getNodeValue(node);
            if (!value) return null;
            return (
              <h6 id={value} className={combineClassNames(styles.h6, padding)}>
                {children}
              </h6>
            );
          },

          [BLOCKS.PARAGRAPH]: (node: RichtextNodeType, children: ReactNode) => {
            const value = getNodeValue(node);
            if (node.content.length === 1 && !value) return null;
            return (
              <div className={combineClassNames(styles.p, padding)}>
                <p>{children}</p>
              </div>
            );
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
            return (
              <blockquote className={styles.blockquote}>
                <div>{children}</div>
              </blockquote>
            );
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

          [INLINES.HYPERLINK]: (
            node: RichtextNodeType,
            children: ReactNode,
          ) => (
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
};
