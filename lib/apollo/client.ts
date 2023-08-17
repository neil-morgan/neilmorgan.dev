import {
  createHttpLink,
  ApolloClient,
  ApolloLink,
  InMemoryCache,
} from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { CONTENTFUL_BASE_URL, APOLLO_CLIENTS } from "@/constants";

const {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_DELIVERY_TOKEN,
  CONTENTFUL_PREVIEW_TOKEN,
  NEXT_PUBLIC_APOLLO_SERVER_URL,
  NEXT_PUBLIC_APOLLO_SERVER_TOKEN,
} = process.env;

const dbLink = createHttpLink({
  uri: NEXT_PUBLIC_APOLLO_SERVER_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: NEXT_PUBLIC_APOLLO_SERVER_TOKEN,
  },
});

const cmsLink = new ApolloLink((operation, forward) => {
  const isPreviewMode = operation.getContext().isPreviewMode || false;

  return createHttpLink({
    uri: `${CONTENTFUL_BASE_URL}${CONTENTFUL_SPACE_ID}`,
    fetchOptions: {
      method: "POST",
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        isPreviewMode ? CONTENTFUL_PREVIEW_TOKEN : CONTENTFUL_DELIVERY_TOKEN
      }`,
    },
  }).request(operation, forward);
});

const { getClient } = registerApolloClient(
  () =>
    new ApolloClient({
      ssrMode: true,
      cache: new InMemoryCache(),
      link: ApolloLink.split(
        operation => operation.getContext().clientName === APOLLO_CLIENTS.CMS,
        cmsLink,
        dbLink,
      ),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: "cache-and-network",
        },
      },
    }),
);

export { getClient };
