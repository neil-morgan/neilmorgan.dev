import type { ReactNode } from "react";

import { notFound } from "next/navigation";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

import { Components, PageHeader, Link } from "@/app/_components";
import {
  AllPageSlugsDocument,
  CategoryDocument,
  PageContentBySlugDocument,
  type CategoryContentFragment,
  type PageContentLinksFragment,
  type PageHeaderFragment,
} from "@/app/_graphql/generated";
import { fetchContent } from "@/app/_helpers";
import { isInternalUrl, toSentenceCase } from "@/app/_utils";

import {
  getRichtextEntry,
  renderMark,
  removeParagraphTags,
  renderText,
  getNodeValue,
} from "./_helpers";
import { Category } from "./_templates";
import styles from "./Page.module.css";

import type { RichtextNodeType, PageParams } from "./Page.types";

export const dynamicParams = true;

export const generateStaticParams = async () => {
  const pageData = await fetchContent({ document: AllPageSlugsDocument });
  const pages = pageData.pageCollection?.items;
  if (!pages) return [];
  const routes: { slug: string[] }[] = [];
  const categories = new Set<string>();
  pages.forEach((page) => {
    if (!page?.slug) return;
    if (page.category) {
      categories.add(page.category.toLowerCase());
      routes.push({
        slug: [
          page.category.toLowerCase(),
          ...(page.slug === "/" ? [] : page.slug.split("/")),
        ],
      });
    } else {
      routes.push({
        slug: page.slug === "/" ? [] : page.slug.split("/"),
      });
    }
  });
  categories.forEach((category) => routes.push({ slug: [category] }));
  return routes;
};

export const generateMetadata = async ({ params: pageParams }: PageParams) => {
  const params = await pageParams;
  if (params.slug?.length === 1) {
    const categoryData = await fetchContent({
      document: CategoryDocument,
      variables: { category: toSentenceCase(params.slug[0]) },
    });
    const categoriesContent = categoryData?.pageCollection?.items;
    if (categoriesContent && categoriesContent.length > 0) {
      const categoryName = toSentenceCase(params.slug[0]);
      return {
        title: `Neil Morgan | ${categoryName}`,
        description: `Browse all ${categoryName.toLowerCase()} pages`,
      };
    }
  }
  const data = await fetchContent({
    document: PageContentBySlugDocument,
    variables: {
      slug: !params.slug ? "/" : params.slug[1] || params.slug[0],
    },
  });
  const page = data?.pageCollection?.items[0];
  return {
    title: `Neil Morgan | ${page?.metaTitle || "Not found"}`,
    ...(page?.description && {
      description: page.description,
    }),
  };
};

const Page = async ({ params: pageParams }: PageParams) => {
  const params = await pageParams;

  let content: ReactNode = null;
  let headerProps:
    | (PageHeaderFragment & {
        slug: string[];
      })
    | null = null;

  if (params.slug?.length === 1) {
    const category = toSentenceCase(params.slug[0]);
    console.log(category);
    const categoryData = await fetchContent({
      document: CategoryDocument,
      variables: { category },
    });

    const categoriesContent = categoryData?.pageCollection?.items;
    console.log("categoriesContent:", categoriesContent);
    if (categoriesContent && categoriesContent.length > 0) {
      headerProps = {
        slug: params.slug,
        title: category,
        kicker: null,
        description: null,
      };
      content = (
        <Category content={categoriesContent as CategoryContentFragment[]} />
      );
    }
  }

  if (!content) {
    const data = await fetchContent({
      document: PageContentBySlugDocument,
      variables: {
        slug: !params.slug ? "/" : params.slug[1] || params.slug[0],
      },
    });
    if (!data || data?.pageCollection?.items.length === 0) return notFound();
    const page = data?.pageCollection?.items[0];
    const pageContentLinks = data?.pageCollection?.items[0]?.content
      ?.links as PageContentLinksFragment;
    if (page?.title) {
      headerProps = {
        slug: params.slug || [],
        title: page.title,
        kicker: page.kicker,
        description: page.description,
      };
    }
    content = page?.content && (
      <div>
        {documentToReactComponents(page.content.json, {
          renderMark,
          renderText,
          renderNode: {
            [BLOCKS.EMBEDDED_ENTRY]: (node: RichtextNodeType) => {
              if (!page.content?.links) return null;
              const entry = getRichtextEntry(pageContentLinks, node);
              return entry?.sys.id ? (
                <Components id={entry.sys.id} __typename={entry.__typename} />
              ) : null;
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

            [BLOCKS.HEADING_1]: (
              node: RichtextNodeType,
              children: ReactNode
            ) => {
              const value = getNodeValue(node);
              if (!value) return null;
              return <h1 id={value}>{children}</h1>;
            },

            [BLOCKS.HEADING_2]: (
              node: RichtextNodeType,
              children: ReactNode
            ) => {
              const value = getNodeValue(node);
              if (!value) return null;
              return <h2 id={value}>{children}</h2>;
            },

            [BLOCKS.PARAGRAPH]: (
              node: RichtextNodeType,
              children: ReactNode
            ) => {
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

            [INLINES.HYPERLINK]: (
              node: RichtextNodeType,
              children: ReactNode
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
      </div>
    );
  }

  return (
    <main className={styles.page}>
      {headerProps && <PageHeader {...headerProps} />}
      {content}
    </main>
  );
};

export default Page;
