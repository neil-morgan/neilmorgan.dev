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
} = process.env;

// ! DB NEEDS RELATIVE URI?
// http://localhost:3000/api/server
// /api/server

// absolute uri needed for ssr.
// ! perhaps CORS issue?

// https://stackoverflow.com/questions/48818582/apollo-client-does-not-work-with-cors
// https://www.apollographql.com/docs/apollo-server/security/cors/

const dbLink = createHttpLink({
  uri:
   process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api/server"
      : "https://neilmorgan.dev/api/server",
  fetchOptions: {
    mode: "no-cors",
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
