import { notFound } from "next/navigation";

import { Experience } from "@/app/_components/content";
import { CategoryDocument, type PageHeaderFragment } from "@/app/_graphql";
import { fetchContent } from "@/app/_helpers";
import { toSentenceCase } from "@/app/_utils";

import styles from "./Categories.module.css";

import type { CategoryProps } from "./Category.types";

export const Category = async ({ slug }: { slug: string[] }) => {
  const category = toSentenceCase(slug[0]);
  const categoryData = await fetchContent({
    document: CategoryDocument,
    variables: { category },
  });

  const categoryContent = categoryData?.pageCollection?.items;
  if (!categoryContent || categoryContent.length === 0) return notFound();

  return <main>hello world</main>;
};
