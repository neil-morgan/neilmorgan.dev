import { notFound } from "next/navigation";
import { GraphQLError } from "graphql";
import type { TypedDocumentString } from "@/app/_graphql";
import { isDraftModeEnabled } from "@/app/_helpers/debugMenu/is-draft-mode-enabled";

const {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_DELIVERY_TOKEN,
  CONTENTFUL_PREVIEW_TOKEN,
} = process.env;

export const fetchContent = async <Result, Variables>({
  document,
  variables,
  preview,
  tags,
  notFoundOnEmpty,
}: {
  document: TypedDocumentString<Result, Variables>;
  variables?: Variables;
  preview?: boolean;
  tags?: string[];
  notFoundOnEmpty?: boolean;
}): Promise<Result> => {
  const isPreview =
    preview ?? (await isDraftModeEnabled())?.previewMode === true;

  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      body: JSON.stringify({
        query: document.toString(),
        variables: { ...variables, preview: isPreview },
      }),
      ...(isPreview ? { cache: "no-store" as const } : {}),
      next: { tags },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          isPreview ? CONTENTFUL_PREVIEW_TOKEN : CONTENTFUL_DELIVERY_TOKEN
        }`,
      },
    },
  );

  const result = await response.json();

  if (result.errors) {
    throw new Error(
      result.errors.map((error: GraphQLError) => error.message).join(", "),
    );
  }

  if (notFoundOnEmpty) {
    if (
      !result.data ||
      (result.data.pageCollection &&
        result.data.pageCollection.items.length === 0)
    ) {
      notFound();
    }
  }

  return result.data;
};
