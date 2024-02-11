import { GraphQLError } from "graphql";
import { CONTENTFUL_SPACE_URL } from "@/lib/site";
import { type TypedDocumentString } from "@/graphql";

const {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_DELIVERY_TOKEN,
  CONTENTFUL_PREVIEW_TOKEN,
} = process.env;

type GraphQLResponse<GraphQLData> =
  | { data: GraphQLData }
  | { errors: GraphQLError };

export const fetchContent = async <Result, Variables>({
  document,
  variables,
  preview,
  tags,
}: {
  document: TypedDocumentString<Result, Variables>;
  variables?: Variables;
  preview?: boolean;
  tags?: string[];
}): Promise<Result> => {
  const response = await fetch(
    `${CONTENTFUL_SPACE_URL}${CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      body: JSON.stringify({
        query: document.toString(),
        variables: variables || {},
      }),
      next: { tags },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview ? CONTENTFUL_PREVIEW_TOKEN : CONTENTFUL_DELIVERY_TOKEN
        }`,
      },
    },
  );

  const result = (await response.json()) as GraphQLResponse<Result>;

  if ("errors" in result) {
    throw new Error(result.errors.message);
  }

  return result.data;
};