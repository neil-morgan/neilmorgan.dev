import {
  createHttpLink,
  ApolloClient,
  HttpLink,
  ApolloLink,
  InMemoryCache,
} from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { SchemaLink } from "@apollo/client/link/schema";
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { schema } from "@/app/api/server/schema";
import { CONTENTFUL_BASE_URL, APOLLO_CLIENTS } from "@/lib/site";

const {
  CONTENTFUL_SPACE_ID,
  CONTENTFUL_DELIVERY_TOKEN,
  CONTENTFUL_PREVIEW_TOKEN,
} = process.env;

const dbLink = new SchemaLink({ schema });

const cmsLink = new ApolloLink((operation, forward) => {
  const isPreviewMode = operation.getContext().isPreviewMode || false;

  return createHttpLink({
    uri: `${CONTENTFUL_BASE_URL}${CONTENTFUL_SPACE_ID}`,
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
    new NextSSRApolloClient({
      cache: new NextSSRInMemoryCache(),
      link: new HttpLink({
        uri: `${CONTENTFUL_BASE_URL}${CONTENTFUL_SPACE_ID}`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${CONTENTFUL_DELIVERY_TOKEN}`,
        },
      }),

      // link: ApolloLink.split(
      //   operation => operation.getContext().clientName === APOLLO_CLIENTS.DB,
      //   dbLink,
      //   cmsLink,
      // ),
    }),
);

export { getClient };
