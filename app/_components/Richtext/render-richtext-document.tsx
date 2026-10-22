import type { ReactNode } from "react";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

import type { RichtextImageFragment } from "@/app/_graphql/generated";
import { isInternalUrl } from "@/app/_utils";
import { AspectImage } from "@/app/_components/AspectImage/AspectImage";
import { Link } from "@/app/_components/Link/Link";

import {
  getRichtextEntry,
  renderMark,
  getBlockMaps,
  removeParagraphTags,
  renderText,
  getNodeValue,
} from "./helpers";
import styles from "./Richtext.module.css";

import type {
  RichtextBlockEntry,
  RichtextLinksType,
  RichtextNodeType,
} from "./Richtext.types";
import type { Document } from "@contentful/rich-text-types";

type RenderRichtextDocumentProps = {
  json: Document;
  links?: RichtextLinksType;
  noPadding?: boolean;
  renderEntry: (entry: NonNullable<RichtextBlockEntry>) => ReactNode;
};

export const renderRichtextDocument = ({
  json,
  links,
  renderEntry,
}: RenderRichtextDocumentProps) => {
  const assetBlockMap = links ? getBlockMaps(links).assetBlockMap : undefined;
  const renderImage = (
    image:
      Partial<NonNullable<RichtextImageFragment["image"]>> | null | undefined,
    focalPoint?: unknown,
  ) => {
    if (!image?.url) return null;

    return (
      <div className={styles.image}>
        <AspectImage
          url={image.url}
          description={image.description || image.title || ""}
          sourceSize={{
            width: image.width ?? null,
            height: image.height ?? null,
          }}
          focalPoint={focalPoint}
          ratio={(1 + Math.sqrt(5)) / 2}
          fit="cover"
          size="50rem"
          scale="down"
          borderRadius="0.5rem"
          sizes="(max-width: 800px) 100vw, 800px"
        />
      </div>
    );
  };

  const renderLinkedEntry = (entry: RichtextBlockEntry | undefined) => {
    if (!entry?.sys.id || !entry.__typename) return null;
    if (entry.__typename === "Image") {
      return renderImage(entry.image, entry.focalPoint);
    }
    return renderEntry(entry);
  };

  return documentToReactComponents(json, {
    renderMark,
    renderText,
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (
        node: RichtextNodeType,
        children: ReactNode,
      ) => {
        const asset = assetBlockMap?.get(node.data.target.sys.id);
        if (!asset?.url || !asset.contentType?.startsWith("image/")) {
          return <>{children}</>;
        }

        return renderImage(asset);
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node: RichtextNodeType) => {
        if (!links) return null;
        return renderLinkedEntry(getRichtextEntry(links, node));
      },
      [INLINES.EMBEDDED_ENTRY]: (node: RichtextNodeType) => {
        if (!links) return null;

        const { inlineBlockMap } = getBlockMaps(links);
        return renderLinkedEntry(
          inlineBlockMap.get(node.data.target.sys.id) ?? null,
        );
      },
      [BLOCKS.HEADING_1]: (node: RichtextNodeType, children: ReactNode) => {
        const value = getNodeValue(node);
        if (!value) return null;
        return (
          <h1 id={value} className={styles.h1}>
            {children}
          </h1>
        );
      },
      [BLOCKS.HEADING_2]: (node: RichtextNodeType, children: ReactNode) => {
        const value = getNodeValue(node);
        if (!value) return null;
        return (
          <h2 id={value} className={styles.h2}>
            {children}
          </h2>
        );
      },
      [BLOCKS.HEADING_3]: (node: RichtextNodeType, children: ReactNode) => {
        const value = getNodeValue(node);
        if (!value) return null;
        return (
          <h3 id={value} className={styles.h3}>
            {children}
          </h3>
        );
      },
      [BLOCKS.HEADING_4]: (node: RichtextNodeType, children: ReactNode) => {
        const value = getNodeValue(node);
        if (!value) return null;
        return (
          <h4 id={value} className={styles.h4}>
            {children}
          </h4>
        );
      },
      [BLOCKS.HEADING_5]: (node: RichtextNodeType, children: ReactNode) => {
        const value = getNodeValue(node);
        if (!value) return null;
        return (
          <h5 id={value} className={styles.h5}>
            {children}
          </h5>
        );
      },
      [BLOCKS.HEADING_6]: (node: RichtextNodeType, children: ReactNode) => {
        const value = getNodeValue(node);
        if (!value) return null;
        return (
          <h6 id={value} className={styles.h6}>
            {children}
          </h6>
        );
      },
      [BLOCKS.PARAGRAPH]: (node: RichtextNodeType, children: ReactNode) => {
        const value = getNodeValue(node);
        if (node.content.length === 1 && !value) return null;
        return (
          <div className={styles.p}>
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
      [INLINES.HYPERLINK]: (node: RichtextNodeType, children: ReactNode) => (
        <Link
          href={node.data.uri}
          {...(!isInternalUrl(node.data.uri) && { target: "_blank" })}
        >
          {children}
        </Link>
      ),
    },
  });
};
