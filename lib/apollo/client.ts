import { createHttpLink, ApolloLink } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { CONTENTFUL_BASE_URL } from "@/lib/site";

const {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_DELIVERY_TOKEN,
  CONTENTFUL_PREVIEW_TOKEN,
} = process.env;

export const { getClient } = registerApolloClient(
  () =>
    new NextSSRApolloClient({
      cache: new NextSSRInMemoryCache(),
      link: new ApolloLink((operation, forward) =>
        createHttpLink({
          uri: `${CONTENTFUL_BASE_URL}${CONTENTFUL_SPACE_ID}`,
          fetchOptions: {
            method: "POST",
          },
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${
              operation.getContext().isPreviewMode || false
                ? CONTENTFUL_PREVIEW_TOKEN
                : CONTENTFUL_DELIVERY_TOKEN
            }`,
          },
        }).request(operation, forward),
      ),
    }),
);
